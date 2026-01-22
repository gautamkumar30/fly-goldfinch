'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { trackEvent } from '@/app/actions/analytics';
import { v4 as uuidv4 } from 'uuid';

export function AnalyticsTracker() {
  const pathname = usePathname();
  const sessionIdRef = useRef<string>('');
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    // Initialize session ID
    let sessionId = localStorage.getItem('fly_goldfinch_session_id');
    if (!sessionId) {
      sessionId = uuidv4();
      localStorage.setItem('fly_goldfinch_session_id', sessionId);
    }
    sessionIdRef.current = sessionId;

    // Track page view
    trackEvent({
      sessionId: sessionIdRef.current,
      eventType: 'page_view',
      eventData: { path: pathname },
      url: window.location.href,
    });

    // Track scroll depth
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (maxScroll % 25 === 0) { // Track at 25%, 50%, 75%, 100%
          trackEvent({
            sessionId: sessionIdRef.current,
            eventType: 'scroll_depth',
            eventData: { depth: maxScroll },
            url: window.location.href,
          });
        }
      }
    };

    // Track button clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const button = target.closest('button') || target.closest('a');
      if (button) {
        trackEvent({
          sessionId: sessionIdRef.current,
          eventType: 'click',
          eventData: { 
            text: button.textContent?.trim() || 'icon',
            id: button.id,
            className: button.className,
            tag: button.tagName
          },
          url: window.location.href,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleClick);

    // Track time spent on page when leaving
    return () => {
      const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
      trackEvent({
        sessionId: sessionIdRef.current,
        eventType: 'time_spent',
        eventData: { seconds: timeSpent, path: pathname },
        url: window.location.href,
      });
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClick);
    };
  }, [pathname]);

  return null;
}
