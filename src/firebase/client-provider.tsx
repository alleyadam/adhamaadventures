'use client';

import React, { useMemo } from 'react';
import { initializeFirebase } from './init';
import { FirebaseProvider } from './provider';
import FirebaseErrorListener from '@/components/FirebaseErrorListener';

export function FirebaseClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const firebase = useMemo(() => initializeFirebase(), []);

  return (
    <FirebaseProvider value={firebase}>
      <FirebaseErrorListener />
      {children}
    </FirebaseProvider>
  );
}
