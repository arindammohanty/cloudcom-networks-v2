"use client";

import React from "react";
import { CookieConsentProvider } from "@/context/CookieConsentContext";
import { TourProvider } from "@/context/TourContext";
import { CookieConsentBanner } from "@/components/cookies/CookieConsentBanner";
import { WebsiteTour, FloatingTourBadge } from "@/components/tour/WebsiteTour";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <CookieConsentProvider>
      <TourProvider>
        {children}
        <CookieConsentBanner />
        <WebsiteTour />
        <FloatingTourBadge />
      </TourProvider>
    </CookieConsentProvider>
  );
}
