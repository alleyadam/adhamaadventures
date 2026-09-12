
'use client';

import { useEffect } from 'react';
import { useFirestore } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

/**
 * Enhanced Visitor Tracker
 * - Implements 1 visit per computer per day logic
 * - Detects country via IP geo-service
 * - Tracks returning vs new visitors
 */
export default function VisitorTracker() {
  const db = useFirestore();

  useEffect(() => {
    const trackVisit = async () => {
      try {
        const today = new Date().toISOString().split('T')[0];
        const lastVisitDate = localStorage.getItem('adhama_last_visit_date');
        
        // Requirement: Count 1 visit per computer per day
        if (lastVisitDate === today) return;

        // Persistent unique visitor ID
        let visitorId = localStorage.getItem('adhama_visitor_id');
        const isRepeat = !!visitorId;
        if (!visitorId) {
          visitorId = Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
          localStorage.setItem('adhama_visitor_id', visitorId);
        }

        // Attempt to get geographic location (Country)
        let country = 'Global';
        try {
          const res = await fetch('https://ipapi.co/json/');
          if (res.ok) {
            const geo = await res.json();
            country = geo.country_name || 'Global';
          }
        } catch (e) {
          // Fallback to 'Global' if service is blocked or fails
        }

        const visitData = {
          visitorId,
          isRepeat,
          country,
          path: window.location.pathname,
          platform: navigator.platform,
          language: navigator.language,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          timestamp: serverTimestamp(),
          userAgent: navigator.userAgent,
        };

        await addDoc(collection(db, 'visitor_logs'), visitData);
        
        // Update last visit date locally
        localStorage.setItem('adhama_last_visit_date', today);
      } catch (e) {
        // Quietly fail for analytics to prevent UI disruption
      }
    };

    trackVisit();
  }, [db]);

  return null;
}
