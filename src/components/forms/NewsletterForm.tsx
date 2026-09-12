
"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { useFirestore } from "@/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";

const FormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export default function NewsletterForm() {
  const [isPending, setIsPending] = useState(false);
  const db = useFirestore();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsPending(true);
    const subscriptionData = {
      email: data.email,
      subscribedAt: serverTimestamp(),
    };

    const docRef = doc(db, 'newsletter', data.email);
    setDoc(docRef, subscriptionData)
      .then(() => {
        toast({
          title: "Subscribed!",
          description: "Thank you for subscribing to our newsletter.",
        });
        form.reset();
        setIsPending(false);
      })
      .catch(async (error) => {
        const permissionError = new FirestorePermissionError({
          path: `newsletter/${data.email}`,
          operation: 'write',
          requestResourceData: subscriptionData,
        });
        errorEmitter.emit('permission-error', permissionError);
        setIsPending(false);
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full max-w-md items-start space-x-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input placeholder="Enter your email" {...field} disabled={isPending} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          <Send className="h-4 w-4" />
          <span className="sr-only">Subscribe</span>
        </Button>
      </form>
    </Form>
  );
}
