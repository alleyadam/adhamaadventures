
'use client';

/**
 * @fileOverview Client-side language hydrator.
 * Synchronizes the document lang attribute with the selected application language
 * after hydration to avoid SSR mismatch errors.
 */

import { useTranslation } from '@/context/LanguageContext';
import { useEffect } from 'react';

export default function LanguageHydrator() {
  const { language } = useTranslation();

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language.toLowerCase();
    }
  }, [language]);

  return null;
}
