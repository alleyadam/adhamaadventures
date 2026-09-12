'use client';

import React from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PlanSafariForm from '../forms/PlanSafariForm';
import { useTranslation } from '@/context/LanguageContext';

/**
 * @fileOverview Responsive Safari Planning Dialog.
 * Fixed height and layout constraints for small-screen accessibility (320px+).
 */

interface PlanSafariDialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function PlanSafariDialog({ children, open, onOpenChange }: PlanSafariDialogProps) {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl bg-white border-none p-0 overflow-hidden rounded-lg shadow-2xl h-[95vh] sm:h-auto sm:max-h-[90vh] flex flex-col pointer-events-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 h-full overflow-y-auto">
          {/* Decorative Side - Responsive visibility */}
          <div className="hidden lg:block col-span-2 relative bg-secondary min-h-[500px]">
            <Image 
              src="/images/usari (20).jpg"
              alt="Plan Your Safari"
              fill
              className="object-cover opacity-70 contrast-125"
              priority
              sizes="(max-width: 1024px) 1px, 400px"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-10 text-white space-y-4 bg-gradient-to-t from-secondary to-transparent">
              <h3 className="text-3xl font-serif italic leading-tight">Your story, custom designed.</h3>
              <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-primary">Authentic Local Expertise</p>
            </div>
          </div>

          {/* Form Side - Primary content */}
          <div className="col-span-1 md:col-span-5 lg:col-span-3 p-8 sm:p-12 bg-white flex flex-col">
            <DialogHeader className="mb-10 text-left shrink-0">
              <DialogTitle className="text-3xl font-serif italic text-secondary leading-none">
                {t('form.title')}
              </DialogTitle>
              <DialogDescription className="text-[10px] uppercase font-black tracking-[0.3em] text-primary mt-3">
                {t('form.subtitle')}
              </DialogDescription>
            </DialogHeader>
            
            <div className="flex-1 overflow-y-visible">
              <PlanSafariForm onSuccess={() => onOpenChange?.(false)} />
            </div>
            
            <p className="text-[9px] text-center text-muted-foreground uppercase tracking-widest mt-8 font-medium">
              A travel specialist will respond within 24 hours.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
