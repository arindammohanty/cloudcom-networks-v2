"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCookieConsent, CookiePreferences } from "@/context/CookieConsentContext";
import { useTour } from "@/context/TourContext";
import {
  Cookie,
  Shield,
  Check,
  X,
  Sparkles,
  Sliders,
  ArrowRight,
  Lock,
  BarChart3,
  SlidersHorizontal,
  Megaphone,
  Compass,
  Play,
} from "lucide-react";

export function CookieConsentBanner() {
  const {
    preferences,
    isBannerOpen,
    isModalOpen,
    isFirstVisit,
    acceptAll,
    rejectOptional,
    savePreferences,
    closeBanner,
    openModal,
    closeModal,
  } = useCookieConsent();

  const { startTour } = useTour();

  // Local draft state for granular preferences
  const [draftPrefs, setDraftPrefs] = useState<CookiePreferences>(preferences);
  const [showQuickSettings, setShowQuickSettings] = useState(false);
  const [startTourOnSave, setStartTourOnSave] = useState(true);

  // Sync draft with global preferences when modal opens
  React.useEffect(() => {
    setDraftPrefs(preferences);
  }, [preferences, isModalOpen, showQuickSettings]);

  const handleAcceptAllAndTour = () => {
    acceptAll();
    setTimeout(() => {
      startTour(0);
    }, 300);
  };

  const handleEssentialAndTour = () => {
    rejectOptional();
    setTimeout(() => {
      startTour(0);
    }, 300);
  };

  const handleSaveDraft = (withTour = false) => {
    savePreferences(draftPrefs);
    setShowQuickSettings(false);
    if (withTour || startTourOnSave) {
      setTimeout(() => {
        startTour(0);
      }, 300);
    }
  };

  return (
    <>
      {/* First-Time Welcome & Cookie Agreement Drawer */}
      <AnimatePresence>
        {isBannerOpen && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 lg:left-auto lg:right-8 lg:max-w-2xl z-[9000] bg-white/98 backdrop-blur-2xl rounded-3xl border border-blue-200/90 shadow-[0_25px_70px_-15px_rgba(2,27,75,0.4)] overflow-hidden"
          >
            {/* Top Accent Gradient Bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-cloud-blue via-sky-400 to-emerald-400"></div>

            <div className="p-6 sm:p-7">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-dark-navy text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <Compass className="w-6 h-6 animate-spin-slow" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base sm:text-lg font-extrabold text-dark-navy">
                        Welcome to CloudCom Networks
                      </h3>
                      {isFirstVisit && (
                        <span className="bg-sky-100 text-sky-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                          First Visit
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 font-medium mt-0.5 flex items-center gap-1.5">
                      <Lock className="w-3 h-3 text-emerald-600" />
                      <span>Cookie Consent & Interactive Platform Tour</span>
                    </p>
                  </div>
                </div>

                <button
                  onClick={closeBanner}
                  className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                  title="Dismiss"
                  aria-label="Dismiss banner"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Tour Preview Card */}
              <div className="bg-gradient-to-r from-blue-50 via-sky-50/70 to-indigo-50/50 rounded-2xl p-4 border border-blue-200/80 mb-4">
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                    <span className="text-xs font-bold text-dark-navy uppercase tracking-wider">
                      Interactive Sub-Pages Overview Tour (~45s)
                    </span>
                  </div>
                  <span className="text-[10px] font-bold bg-white text-cloud-blue border border-blue-200 px-2 py-0.5 rounded-md shadow-2xs">
                    Studio Neural Voice
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3 font-light">
                  Get a fast audio-guided introduction to our 4 core sub-pages with voice narration, live subtitles, and animated visual spotlights:
                </p>

                {/* 4 Sub-Page Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-semibold">
                  <div className="bg-white/90 p-2 rounded-xl border border-blue-100 text-dark-navy shadow-2xs">
                    <div className="text-[10px] text-cloud-blue font-bold">01 Solutions</div>
                    <div className="text-[11px] truncate">Cloud & Security</div>
                  </div>
                  <div className="bg-white/90 p-2 rounded-xl border border-blue-100 text-dark-navy shadow-2xs">
                    <div className="text-[10px] text-cloud-blue font-bold">02 Services</div>
                    <div className="text-[11px] truncate">Ops & Consulting</div>
                  </div>
                  <div className="bg-white/90 p-2 rounded-xl border border-blue-100 text-dark-navy shadow-2xs">
                    <div className="text-[10px] text-cloud-blue font-bold">03 Industries</div>
                    <div className="text-[11px] truncate">Key Verticals</div>
                  </div>
                  <div className="bg-white/90 p-2 rounded-xl border border-blue-100 text-dark-navy shadow-2xs">
                    <div className="text-[10px] text-cloud-blue font-bold">04 Support</div>
                    <div className="text-[11px] truncate">24/7 SLA Hub</div>
                  </div>
                </div>
              </div>

              {/* Cookie Consent Notice */}
              <p className="text-xs text-slate-500 leading-relaxed mb-5 font-light">
                We respect your digital sovereignty. Essential cookies are active for security and authentication. With your permission, we also use optional analytics and experience cookies. View our{" "}
                <Link href="/cookies" className="text-cloud-blue font-semibold hover:underline">
                  Cookie Agreement
                </Link>{" "}
                or{" "}
                <Link href="/privacy" className="text-cloud-blue font-semibold hover:underline">
                  Privacy Policy
                </Link>.
              </p>

              {/* Collapsible Quick Granular Toggles */}
              {showQuickSettings && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-slate-50 rounded-2xl p-4 border border-slate-200 mb-5 space-y-3"
                >
                  <div className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
                    Granular Cookie Controls
                  </div>

                  {/* Essential */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-600" />
                      <div>
                        <div className="font-bold text-dark-navy">Essential & Security</div>
                        <div className="text-[10px] text-slate-500">Required for authentication and system security</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                      Always Active
                    </span>
                  </div>

                  {/* Analytics */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-cloud-blue" />
                      <div>
                        <div className="font-bold text-dark-navy">Analytics & Performance</div>
                        <div className="text-[10px] text-slate-500">Anonymous load time & Core Web Vitals telemetry</div>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={draftPrefs.analytics}
                        onChange={(e) =>
                          setDraftPrefs((prev) => ({ ...prev, analytics: e.target.checked }))
                        }
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cloud-blue"></div>
                    </label>
                  </div>

                  {/* Functional */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <SlidersHorizontal className="w-4 h-4 text-indigo-600" />
                      <div>
                        <div className="font-bold text-dark-navy">Functional & Tour State</div>
                        <div className="text-[10px] text-slate-500">Stores audio tour speed and subtitles settings</div>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={draftPrefs.functional}
                        onChange={(e) =>
                          setDraftPrefs((prev) => ({ ...prev, functional: e.target.checked }))
                        }
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cloud-blue"></div>
                    </label>
                  </div>

                  {/* Marketing */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Megaphone className="w-4 h-4 text-amber-600" />
                      <div>
                        <div className="font-bold text-dark-navy">Marketing & Attribution</div>
                        <div className="text-[10px] text-slate-500">Enterprise partner campaign attribution</div>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={draftPrefs.marketing}
                        onChange={(e) =>
                          setDraftPrefs((prev) => ({ ...prev, marketing: e.target.checked }))
                        }
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cloud-blue"></div>
                    </label>
                  </div>

                  {/* Checkbox for tour on save */}
                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                    <label className="flex items-center gap-2 text-xs font-semibold text-dark-navy cursor-pointer">
                      <input
                        type="checkbox"
                        checked={startTourOnSave}
                        onChange={(e) => setStartTourOnSave(e.target.checked)}
                        className="rounded text-cloud-blue focus:ring-cloud-blue"
                      />
                      <span>Launch audio tour immediately upon saving</span>
                    </label>
                    <button
                      onClick={() => handleSaveDraft(startTourOnSave)}
                      className="bg-cloud-blue hover:bg-cloud-blue-hover text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer"
                    >
                      Save Preferences
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Action Buttons Grid */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-slate-100">
                <button
                  onClick={() => setShowQuickSettings(!showQuickSettings)}
                  className="text-xs font-semibold text-slate-600 hover:text-cloud-blue flex items-center justify-center sm:justify-start gap-1.5 py-2 px-1 transition-colors cursor-pointer"
                >
                  <Sliders className="w-3.5 h-3.5" />
                  {showQuickSettings ? "Hide Custom Settings" : "Customise Cookies"}
                </button>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={rejectOptional}
                    className="flex-1 sm:flex-none bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-3.5 py-2.5 rounded-xl transition-colors cursor-pointer text-center"
                    title="Accept essential cookies only and skip tour"
                  >
                    Essential Only
                  </button>

                  <button
                    onClick={acceptAll}
                    className="flex-1 sm:flex-none bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold px-3.5 py-2.5 rounded-xl transition-colors cursor-pointer text-center"
                    title="Accept all cookies and explore site on your own"
                  >
                    Accept (Skip Tour)
                  </button>

                  <button
                    onClick={handleAcceptAllAndTour}
                    className="w-full sm:w-auto bg-gradient-to-r from-cloud-blue to-blue-700 hover:opacity-95 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-md shadow-cloud-blue/25 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    title="Accept cookies and start the 4-step sub-pages audio tour"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-sky-200" />
                    <span>Accept All & Start Tour</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Cookie Settings Trigger Pill in bottom corner */}
      {!isBannerOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={openModal}
          className="fixed bottom-6 left-6 z-40 bg-white hover:bg-slate-50 text-slate-700 p-2.5 sm:px-3.5 sm:py-2.5 rounded-full font-semibold text-xs shadow-lg border border-slate-200/90 flex items-center gap-2 group cursor-pointer transition-all"
          title="Cookie Settings & Sub-Pages Tour"
          aria-label="Open Cookie Preferences"
        >
          <div className="w-5 h-5 rounded-full bg-blue-50 text-cloud-blue flex items-center justify-center flex-shrink-0">
            <Cookie className="w-3.5 h-3.5" />
          </div>
          <span className="hidden sm:inline text-xs text-dark-navy font-bold">Cookie Settings</span>
        </motion.button>
      )}

      {/* Full Cookie Preferences Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[9500] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-dark-navy/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-dark-navy via-slate-900 to-dark-navy p-6 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-cloud-blue/30 text-sky-300 border border-sky-400/40 flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Cookie & Privacy Preference Center
                    </h3>
                    <p className="text-xs text-slate-300">
                      Manage consent parameters and data collection preferences
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 overflow-y-auto space-y-5 flex-1 text-slate-700">
                {/* Tour Launch Card inside Modal */}
                <div className="bg-blue-50/80 p-4 rounded-2xl border border-blue-200 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-cloud-blue" />
                    <div>
                      <div className="text-xs font-bold text-dark-navy">
                        Interactive Sub-Pages Platform Tour
                      </div>
                      <div className="text-[11px] text-slate-500">
                        4-step audio walkthrough of /solutions, /services, /industries & /support
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      closeModal();
                      startTour(0);
                    }}
                    className="bg-cloud-blue hover:bg-cloud-blue-hover text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-colors flex items-center gap-1 flex-shrink-0 cursor-pointer shadow-xs"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Start Tour</span>
                  </button>
                </div>

                {/* 1. Essential */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/90 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-600" />
                      <h4 className="font-bold text-sm text-dark-navy">
                        Strictly Necessary / Essential Cookies
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Essential for authentication, zero-trust token protection, CSRF defense, and server load balancing. Cannot be deactivated.
                    </p>
                    <div className="text-[11px] font-mono text-slate-400">
                      Cookies: ccn_consent, ccn_session_id, __Host-auth
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full whitespace-nowrap">
                    Always Active
                  </span>
                </div>

                {/* 2. Analytics */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-cloud-blue" />
                      <h4 className="font-bold text-sm text-dark-navy">
                        Analytics & Performance Cookies
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Collect anonymous telemetry on page visits, site speed, Web Vitals, and user interaction patterns to help us improve performance.
                    </p>
                    <div className="text-[11px] font-mono text-slate-400">
                      Cookies: _ccn_analytics, _vitals_id
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer mt-1">
                    <input
                      type="checkbox"
                      checked={draftPrefs.analytics}
                      onChange={(e) =>
                        setDraftPrefs((prev) => ({ ...prev, analytics: e.target.checked }))
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cloud-blue"></div>
                  </label>
                </div>

                {/* 3. Functional */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <SlidersHorizontal className="w-4 h-4 text-indigo-600" />
                      <h4 className="font-bold text-sm text-dark-navy">
                        Functional & Tour State Cookies
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Remembers your interactive audio tour progress, audio volume settings, subtitles toggle, and user interface preferences.
                    </p>
                    <div className="text-[11px] font-mono text-slate-400">
                      Cookies: ccn_tour_state, ccn_audio_pref
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer mt-1">
                    <input
                      type="checkbox"
                      checked={draftPrefs.functional}
                      onChange={(e) =>
                        setDraftPrefs((prev) => ({ ...prev, functional: e.target.checked }))
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cloud-blue"></div>
                  </label>
                </div>

                {/* 4. Marketing */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Megaphone className="w-4 h-4 text-amber-600" />
                      <h4 className="font-bold text-sm text-dark-navy">
                        Marketing & Partner Attribution
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Used to measure partner referrers, enterprise webinar registrations, and campaign effectiveness. We never sell personal data.
                    </p>
                    <div className="text-[11px] font-mono text-slate-400">
                      Cookies: ccn_campaign_ref, ccn_mkt_trk
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer mt-1">
                    <input
                      type="checkbox"
                      checked={draftPrefs.marketing}
                      onChange={(e) =>
                        setDraftPrefs((prev) => ({ ...prev, marketing: e.target.checked }))
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cloud-blue"></div>
                  </label>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  href="/cookies"
                  onClick={closeModal}
                  className="text-xs font-semibold text-cloud-blue hover:underline"
                >
                  View Full Cookie Agreement Policy →
                </Link>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    onClick={rejectOptional}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-xs font-bold text-slate-700 transition-colors"
                  >
                    Reject Optional
                  </button>
                  <button
                    onClick={() => handleSaveDraft(false)}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-cloud-blue hover:bg-cloud-blue-hover text-white text-xs font-bold transition-all shadow-md shadow-cloud-blue/20"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
