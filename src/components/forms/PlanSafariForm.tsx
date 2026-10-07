"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useFirestore } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";
import { CheckCircle2, Loader2 } from "lucide-react";
import { handleFormSubmission } from "@/app/actions/mail";
import { useTranslation } from "@/context/LanguageContext";

const FormSchema = z.object({
  name: z.string().min(2, { message: "Name is required." }),
  email: z.string().email({ message: "Valid email is required." }),
  phone: z.string().min(6, { message: "Phone number is required." }),
  country: z.string().min(2, { message: "Country is required." }),
  travellers: z.string().min(1, { message: "Required" }),
  budget: z.string().optional(),
  interests: z.string().optional(),
  message: z.string().optional(),
});

export default function PlanSafariForm({ onSuccess }: { onSuccess?: () => void }) {
  const { t } = useTranslation();
  const [isPending, setIsPending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const db = useFirestore();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      travellers: "2",
      budget: "",
      interests: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsPending(true);
    const submissionData = {
      ...data,
      type: 'safari_enquiry',
      createdAt: serverTimestamp(),
    };

    let stored = false;
    let emailed = false;

    try {
      await addDoc(collection(db, 'enquiries'), submissionData);
      stored = true;
    } catch (error) {
        const permissionError = new FirestorePermissionError({
          path: 'enquiries',
          operation: 'create',
          requestResourceData: submissionData,
        });
        errorEmitter.emit('permission-error', permissionError);
    }

    try {
      const result = await handleFormSubmission('enquiry', data);
      emailed = Boolean(result?.success);
    } catch (error) {
      console.error('Enquiry email failed:', error);
    }

    setIsPending(false);

    if (stored || emailed) {
      setIsSubmitted(true);
      if (onSuccess) setTimeout(onSuccess, 3000);
      return;
    }

    toast({
      variant: 'destructive',
      title: 'Submission failed',
      description: 'Please try again or message us directly on WhatsApp.',
    });
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-6 sm:py-12 space-y-4">
        <div className="h-12 w-12 sm:h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
          <CheckCircle2 className="h-6 w-6 sm:h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl sm:text-2xl font-serif italic text-primary">{t('form.successTitle')}</h3>
        <p className="text-muted-foreground max-w-xs text-sm">
          {t('form.successMsg')}
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{t('form.name')}</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" className="rounded-none border-border/50 h-11 text-sm" {...field} disabled={isPending} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{t('form.email')}</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" className="rounded-none border-border/50 h-11 text-sm" {...field} disabled={isPending} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{t('form.phone')}</FormLabel>
                <FormControl>
                  <Input placeholder="+1 234..." className="rounded-none border-border/50 h-11 text-sm" {...field} disabled={isPending} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{t('form.country')}</FormLabel>
                <FormControl>
                  <Input placeholder="United Kingdom" className="rounded-none border-border/50 h-11 text-sm" {...field} disabled={isPending} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="travellers"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{t('form.travellers')}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="rounded-none border-border/50 h-11 text-sm">
                      <SelectValue placeholder="Number" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">Solo</SelectItem>
                    <SelectItem value="2">Couple</SelectItem>
                    <SelectItem value="3-5">Group (3-5)</SelectItem>
                    <SelectItem value="6+">Large (6+)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{t('form.budget')}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="rounded-none border-border/50 h-11 text-sm">
                      <SelectValue placeholder="Range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="mid">$3k - $5k pp</SelectItem>
                    <SelectItem value="luxury">$5k - $10k pp</SelectItem>
                    <SelectItem value="ultra">$10k+ pp</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{t('form.message')}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="..."
                  className="min-h-[80px] rounded-none border-border/50 resize-none text-sm"
                  {...field}
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full bg-primary hover:bg-secondary text-white h-12 sm:h-14 rounded-none font-bold tracking-[0.2em] text-[10px] uppercase shadow-lg shadow-primary/20" disabled={isPending}>
          {isPending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
          {isPending ? t('form.sending') : t('form.submit')}
        </Button>
      </form>
    </Form>
  );
}
