/**
 * @fileOverview Language Context for site-wide localization.
 */

'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('EN');

  // Persistence logic
  useEffect(() => {
    const saved = localStorage.getItem('adhama_lang') as Language;
    if (saved && (saved === 'EN' || saved === 'JA' || saved === 'FR' || saved === 'DE')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('adhama_lang', lang);
  };

  useEffect(() => {
    document.documentElement.lang = language.toLowerCase();
  }, [language]);

  // Helper to access nested translation strings
  const t = (path: string) => {
    const keys = path.split('.');
    let result = translations[language];
    for (const key of keys) {
      if (result[key]) {
        result = result[key];
      } else {
        // Fallback to English if key missing
        let fallback = translations['EN'];
        for (const fkey of keys) {
           fallback = fallback ? fallback[fkey] : null;
        }
        return fallback || path;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
