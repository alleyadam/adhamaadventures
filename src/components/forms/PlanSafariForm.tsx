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
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useFirestore } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";
import { CheckCircle2, Loader2, Compass, ChevronLeft, ChevronRight, User, MapPin, Sparkles } from "lucide-react";
import { handleFormSubmission } from "@/app/actions/mail";
import { useTranslation } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const DESTINATION_OPTIONS = [
  "Serengeti",
  "Ngorongoro Crater",
  "Tarangire",
  "Lake Manyara",
  "Kilimanjaro",
  "Zanzibar",
  "Lake Eyasi",
  "Ruaha",
  "Nyerere (Selous)",
  "Tarangire & Manyara",
];

const INTEREST_OPTIONS = [
  { id: "wildlife", label: "Wildlife" },
  { id: "migration", label: "Migration" },
  { id: "photography", label: "Photography" },
  { id: "culture", label: "Culture" },
  { id: "honeymoon", label: "Honeymoon" },
  { id: "adventure", label: "Adventure" },
  { id: "beach", label: "Beach" },
];

const FormSchema = z.object({
  name: z.string().min(2, { message: "Name is required." }),
  email: z.string().email({ message: "Valid email is required." }),
  phone: z.string().min(6, { message: "Phone number is required." }),
  country: z.string().min(2, { message: "Please tell us where you are travelling from." }),
  travelDate: z.string().min(1, { message: "Please select a travel date." }),
  totalTravellers: z.string().min(1, { message: "Required" }),
  adults: z.string().min(1, { message: "Required" }),
  children: z.string().min(1, { message: "Enter 0 if none" }),
  safariStyle: z.string().min(1, { message: "Please choose a safari style." }),
  privateOrGroup: z.string().min(1, { message: "Please choose private or group." }),
  destinations: z.array(z.string()).optional(),
  interests: z.array(z.string()).optional(),
  estimatedBudget: z.string().min(1, { message: "Please select a budget range." }),
  message: z.string().optional(),
});

const STEPS = [
  { id: 0, label: "About You", icon: User },
  { id: 1, label: "Your Safari", icon: MapPin },
  { id: 2, label: "Preferences", icon: Sparkles },
];

// Fields that must be valid before advancing from each step
const stepFields: string[][] = [
  ["name", "email", "phone", "country"],
  ["travelDate", "totalTravellers", "adults", "children", "safariStyle", "privateOrGroup"],
  ["estimatedBudget"],
];

export default function PlanSafariForm({ onSuccess }: { onSuccess?: () => void }) {
  const { t } = useTranslation();
  const [isPending, setIsPending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState(0);
  const db = useFirestore();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      travelDate: "",
      totalTravellers: "2",
      adults: "2",
      children: "0",
      safariStyle: "",
      privateOrGroup: "",
      destinations: [],
      interests: [],
      estimatedBudget: "",
      message: "",
    },
    mode: "onChange",
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
      <div className="flex h-full flex-col items-center justify-center text-center py-8 space-y-4">
        <div className="h-14 w-14 sm:h-16 sm:w-16 bg-primary/10 rounded-full flex items-center justify-center">
          <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
        </div>
        <h3 className="text-xl sm:text-2xl font-serif text-primary">{t('form.successTitle')}</h3>
        <p className="text-muted-foreground max-w-xs text-sm">
          {t('form.successMsg')}
        </p>
      </div>
    );
  }

  const inputClass = "h-11 rounded-xl border-border/60 bg-muted/30 text-sm shadow-none focus-visible:ring-primary/20";
  const labelClass = "text-[10px] font-bold uppercase tracking-widest text-muted-foreground";

  async function nextStep() {
    const fieldsToValidate = stepFields[step];
    const valid = await form.trigger(fieldsToValidate as (keyof z.infer<typeof FormSchema>)[]);
    if (valid) setStep((s) => Math.min(s + 1, 2));
  }

  function prevStep() {
    setStep((s) => Math.max(s - 1, 0));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex h-full flex-col">
        {/* Step indicator */}
        <div className="mb-5 flex items-center gap-2">
          {STEPS.map((s, i) => {
            const StepIcon = s.icon;
            const isActive = i === step;
            const isComplete = i < step;
            return (
              <div key={s.id} className="flex flex-1 items-center gap-2">
                <div className={cn(
                  "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[9px] font-black uppercase tracking-widest transition-all",
                  isActive ? "bg-primary text-white" : isComplete ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"
                )}>
                  <StepIcon className="h-3 w-3" />
                  <span className="hidden sm:inline">{s.label}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={cn("h-px flex-1 transition-colors", i < step ? "bg-primary/40" : "bg-border/60")} />
                )}
              </div>
            );
          })}
        </div>

        {/* Step content — no scrolling, fits in view */}
        <div className="min-h-0 flex-1">
          {/* STEP 1: About You */}
          {step === 0 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" className={inputClass} {...field} disabled={isPending} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" className={inputClass} {...field} disabled={isPending} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>WhatsApp / Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 234..." className={inputClass} {...field} disabled={isPending} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="country" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Where are you travelling from?</FormLabel>
                    <FormControl>
                      <Input placeholder="United Kingdom" className={inputClass} {...field} disabled={isPending} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
            </div>
          )}

          {/* STEP 2: Your Safari */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField control={form.control} name="travelDate" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Travel Date</FormLabel>
                    <FormControl>
                      <Input type="date" className={inputClass} {...field} disabled={isPending} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="totalTravellers" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Number of Travellers</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className={inputClass}><SelectValue placeholder="Select" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">1 traveller</SelectItem>
                        <SelectItem value="2">2 travellers</SelectItem>
                        <SelectItem value="3-5">3–5 travellers</SelectItem>
                        <SelectItem value="6-10">6–10 travellers</SelectItem>
                        <SelectItem value="11+">11+ travellers</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField control={form.control} name="adults" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Adults</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className={inputClass}><SelectValue placeholder="Select" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Array.from({ length: 15 }, (_, i) => i + 1).map((n) => (
                          <SelectItem key={n} value={String(n)}>{n}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="children" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Children</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className={inputClass}><SelectValue placeholder="Select" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="0">0</SelectItem>
                        {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                          <SelectItem key={n} value={String(n)}>{n}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <FormField control={form.control} name="safariStyle" render={({ field }) => (
                <FormItem>
                  <FormLabel className={labelClass}>Safari Style</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid grid-cols-3 gap-2">
                      {["Budget", "Mid-range", "Luxury"].map((style) => (
                        <label key={style} className="flex cursor-pointer items-center gap-2 rounded-xl border border-border/60 bg-muted/20 px-3 py-2.5 text-xs font-bold uppercase tracking-wide text-secondary transition-all hover:border-primary/40 hover:bg-primary/5 has-[:checked]:border-primary has-[:checked]:bg-primary/10">
                          <RadioGroupItem value={style.toLowerCase().replace(/\s/g, "-")} id={`style-${style}`} className="h-3.5 w-3.5" />
                          {style}
                        </label>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="privateOrGroup" render={({ field }) => (
                <FormItem>
                  <FormLabel className={labelClass}>Private or Group?</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid grid-cols-2 gap-2">
                      {[
                        { value: "private", label: "Private Safari" },
                        { value: "group", label: "Group Safari" },
                      ].map((opt) => (
                        <label key={opt.value} className="flex cursor-pointer items-center gap-2 rounded-xl border border-border/60 bg-muted/20 px-3 py-2.5 text-xs font-bold uppercase tracking-wide text-secondary transition-all hover:border-primary/40 hover:bg-primary/5 has-[:checked]:border-primary has-[:checked]:bg-primary/10">
                          <RadioGroupItem value={opt.value} id={`pg-${opt.value}`} className="h-3.5 w-3.5" />
                          {opt.label}
                        </label>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
          )}

          {/* STEP 3: Preferences */}
          {step === 2 && (
            <div className="space-y-4">
              <FormField control={form.control} name="destinations" render={({ field }) => (
                <FormItem>
                  <FormLabel className={labelClass}>Destinations</FormLabel>
                  <div className="flex flex-wrap gap-2">
                    {DESTINATION_OPTIONS.map((dest) => {
                      const isSelected = field.value?.includes(dest);
                      return (
                        <label key={dest} className={cn(
                          "flex cursor-pointer items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide transition-all",
                          isSelected ? "border-primary bg-primary text-white" : "border-border/60 bg-muted/20 text-secondary hover:border-primary/40 hover:bg-primary/5"
                        )}>
                          <Checkbox
                            checked={isSelected}
                            onCheckedChange={(checked) => {
                              const current = field.value || [];
                              if (checked) field.onChange([...current, dest]);
                              else field.onChange(current.filter((d: string) => d !== dest));
                            }}
                            className={cn("h-3 w-3", isSelected && "border-white")}
                          />
                          {dest}
                        </label>
                      );
                    })}
                  </div>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="interests" render={({ field }) => (
                <FormItem>
                  <FormLabel className={labelClass}>Interests</FormLabel>
                  <div className="flex flex-wrap gap-2">
                    {INTEREST_OPTIONS.map((interest) => {
                      const isSelected = field.value?.includes(interest.id);
                      return (
                        <label key={interest.id} className={cn(
                          "flex cursor-pointer items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide transition-all",
                          isSelected ? "border-accent bg-accent text-secondary" : "border-border/60 bg-muted/20 text-secondary hover:border-accent/40 hover:bg-accent/5"
                        )}>
                          <Checkbox
                            checked={isSelected}
                            onCheckedChange={(checked) => {
                              const current = field.value || [];
                              if (checked) field.onChange([...current, interest.id]);
                              else field.onChange(current.filter((i: string) => i !== interest.id));
                            }}
                            className={cn("h-3 w-3", isSelected && "border-secondary")}
                          />
                          {interest.label}
                        </label>
                      );
                    })}
                  </div>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="estimatedBudget" render={({ field }) => (
                <FormItem>
                  <FormLabel className={labelClass}>Estimated Budget (per person)</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className={inputClass}><SelectValue placeholder="Select budget range" /></SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="under-2000">Under $2,000</SelectItem>
                      <SelectItem value="2000-3500">$2,000 – $3,500</SelectItem>
                      <SelectItem value="3500-5000">$3,500 – $5,000</SelectItem>
                      <SelectItem value="5000-8000">$5,000 – $8,000</SelectItem>
                      <SelectItem value="8000-plus">$8,000+</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="message" render={({ field }) => (
                <FormItem>
                  <FormLabel className={labelClass}>Anything else we should know?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your dream Tanzania trip..."
                      className="min-h-[60px] resize-none rounded-xl border-border/60 bg-muted/30 text-sm shadow-none focus-visible:ring-primary/20"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
          )}
        </div>

        {/* Navigation buttons */}
        <div className="mt-5 flex items-center gap-3">
          {step > 0 && (
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              className="h-12 rounded-full border-border/60 px-6 text-[10px] font-black uppercase tracking-[0.2em] text-secondary hover:bg-muted"
              disabled={isPending}
            >
              <ChevronLeft className="h-4 w-4 mr-1" /> Back
            </Button>
          )}
          {step < 2 ? (
            <Button
              type="button"
              onClick={nextStep}
              className="h-12 flex-1 rounded-full bg-primary text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-lg shadow-primary/20 hover:bg-secondary"
            >
              Next <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          ) : (
            <Button
              type="submit"
              className="h-12 flex-1 rounded-full bg-primary text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-lg shadow-primary/20 hover:bg-secondary"
              disabled={isPending}
            >
              {isPending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Compass className="h-4 w-4 mr-2" />}
              {isPending ? t('form.sending') : 'Build My Safari'}
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
