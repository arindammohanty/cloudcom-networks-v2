"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export interface CookiePreferences {
  essential: boolean; // Always true
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
  hasAnswered: boolean;
  updatedAt: string | null;
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  essential: true,
  analytics: true,
  functional: true,
  marketing: false,
  hasAnswered: false,
  updatedAt: null,
};

const STORAGE_KEY = "ccn_cookie_consent_v3";

interface CookieConsentContextType {
  preferences: CookiePreferences;
  isBannerOpen: boolean;
  isModalOpen: boolean;
  isFirstVisit: boolean;
  acceptAll: () => void;
  rejectOptional: () => void;
  savePreferences: (newPrefs: Partial<CookiePreferences>) => void;
  openBanner: () => void;
  closeBanner: () => void;
  openModal: () => void;
  closeModal: () => void;
  resetConsent: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);
  const [isBannerOpen, setIsBannerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Initialize from localStorage on first load
  useEffect(() => {
    setIsMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: CookiePreferences = JSON.parse(stored);
        setPreferences(parsed);
        if (!parsed.hasAnswered) {
          setIsFirstVisit(true);
          setIsBannerOpen(true);
        } else {
          setIsBannerOpen(false);
        }
      } else {
        setIsFirstVisit(true);
        // Prompt first-time visitors promptly
        const timer = setTimeout(() => {
          setIsBannerOpen(true);
        }, 600);
        return () => clearTimeout(timer);
      }
    } catch {
      setIsFirstVisit(true);
      setIsBannerOpen(true);
    }
  }, []);

  const persistPreferences = useCallback((prefs: CookiePreferences) => {
    setPreferences(prefs);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
      document.cookie = `ccn_consent=${encodeURIComponent(
        JSON.stringify({
          a: prefs.analytics ? 1 : 0,
          f: prefs.functional ? 1 : 0,
          m: prefs.marketing ? 1 : 0,
        })
      )}; path=/; max-age=31536000; SameSite=Lax`;
    } catch {}
  }, []);

  const acceptAll = useCallback(() => {
    const updated: CookiePreferences = {
      essential: true,
      analytics: true,
      functional: true,
      marketing: true,
      hasAnswered: true,
      updatedAt: new Date().toISOString(),
    };
    persistPreferences(updated);
    setIsBannerOpen(false);
    setIsModalOpen(false);
    setIsFirstVisit(false);
  }, [persistPreferences]);

  const rejectOptional = useCallback(() => {
    const updated: CookiePreferences = {
      essential: true,
      analytics: false,
      functional: false,
      marketing: false,
      hasAnswered: true,
      updatedAt: new Date().toISOString(),
    };
    persistPreferences(updated);
    setIsBannerOpen(false);
    setIsModalOpen(false);
    setIsFirstVisit(false);
  }, [persistPreferences]);

  const savePreferences = useCallback(
    (customPrefs: Partial<CookiePreferences>) => {
      const updated: CookiePreferences = {
        ...preferences,
        ...customPrefs,
        essential: true, // Always required
        hasAnswered: true,
        updatedAt: new Date().toISOString(),
      };
      persistPreferences(updated);
      setIsBannerOpen(false);
      setIsModalOpen(false);
      setIsFirstVisit(false);
    },
    [preferences, persistPreferences]
  );

  const resetConsent = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      document.cookie = "ccn_consent=; path=/; max-age=0";
    } catch {}
    setPreferences(DEFAULT_PREFERENCES);
    setIsFirstVisit(true);
    setIsBannerOpen(true);
  }, []);

  const openBanner = useCallback(() => setIsBannerOpen(true), []);
  const closeBanner = useCallback(() => setIsBannerOpen(false), []);
  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <CookieConsentContext.Provider
      value={{
        preferences,
        isBannerOpen: isMounted ? isBannerOpen : false,
        isModalOpen: isMounted ? isModalOpen : false,
        isFirstVisit: isMounted ? isFirstVisit : false,
        acceptAll,
        rejectOptional,
        savePreferences,
        openBanner,
        closeBanner,
        openModal,
        closeModal,
        resetConsent,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider");
  }
  return context;
}
