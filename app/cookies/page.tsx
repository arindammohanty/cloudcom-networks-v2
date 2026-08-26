"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCookieConsent, CookiePreferences } from "@/context/CookieConsentContext";
import { useTour } from "@/context/TourContext";
import {
  Cookie,
  Shield,
  CheckCircle2,
  Lock,
  BarChart3,
  SlidersHorizontal,
  Megaphone,
  Sparkles,
  ArrowRight,
  HelpCircle,
  RefreshCw,
  ExternalLink,
  Info,
  Check,
  AlertCircle,
  FileCheck,
  Globe,
  Sliders,
} from "lucide-react";

export default function CookiesAgreementPage() {
  const { preferences, savePreferences, acceptAll, rejectOptional, resetConsent } = useCookieConsent();
  const { startTour } = useTour();

  const [activeSection, setActiveSection] = useState("overview");
  const [localPrefs, setLocalPrefs] = useState<CookiePreferences>(preferences);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  useEffect(() => {
    setLocalPrefs(preferences);
  }, [preferences]);

  const sections = [
    { id: "overview", title: "1. Overview & Policy Scope" },
    { id: "preference-center", title: "2. Live Cookie Preference Center" },
    { id: "website-tour", title: "3. Interactive Website Tour & Cookies" },
    { id: "cookie-types", title: "4. Classification of Cookies" },
    { id: "cookie-table", title: "5. Cookie Inventory & Lifespans" },
    { id: "legal-basis", title: "6. Legal Basis & GDPR/CCPA Compliance" },
    { id: "browser-management", title: "7. Browser-Level Cookie Controls" },
    { id: "updates-contact", title: "8. Policy Updates & DPO Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((s) => document.getElementById(s.id));
      const current = sectionElements.find((element) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current.id);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      window.scrollTo({ top: elementRect - bodyRect - offset, behavior: "smooth" });
    }
  };

  const handleSavePreferences = () => {
    savePreferences(localPrefs);
    setSaveStatus("Preferences saved successfully!");
    setTimeout(() => setSaveStatus(null), 3000);
  };

  const handleAcceptAll = () => {
    acceptAll();
    setSaveStatus("All cookie categories accepted.");
    setTimeout(() => setSaveStatus(null), 3000);
  };

  const handleRejectOptional = () => {
    rejectOptional();
    setSaveStatus("Optional cookies disabled. Essential cookies only.");
    setTimeout(() => setSaveStatus(null), 3000);
  };

  return (
    <div className="animate-fade-in bg-slateBg min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-screen"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-cloud-blue font-semibold text-xs mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-slate-500">/</span>
            <span className="text-slate-400">Legal</span>
            <span className="text-slate-500">/</span>
            <span className="text-slate-200">Cookie Agreement</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-500/40 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
                <Cookie className="w-3.5 h-3.5" />
                <span>Cookies & Transparency Governance</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                Cookie Agreement & Privacy Policy
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-light leading-relaxed">
                Last Updated: June 2026. Learn how CloudCom Networks utilizes cookies and local storage to deliver secure, resilient digital infrastructure and how you can exercise granular control over your data.
              </p>
            </div>

            {/* Quick Tour Trigger Banner in Hero */}
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 text-white max-w-sm flex-shrink-0">
              <div className="flex items-center gap-2.5 mb-2">
                <Sparkles className="w-5 h-5 text-sky-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                  Interactive Platform Tour
                </span>
              </div>
              <p className="text-xs text-slate-200 mb-3 leading-relaxed">
                Take an audio-guided navigation tour of CloudCom Networks with voice narration, highlights & live subtitles.
              </p>
              <button
                onClick={() => startTour(0)}
                className="w-full bg-cloud-blue hover:bg-cloud-blue-hover text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] cursor-pointer"
              >
                <span>Launch Website Tour</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-14 relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Sticky Navigation Index */}
            <div className="lg:w-1/4 hidden lg:block">
              <div className="sticky top-24 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-xs font-bold uppercase text-slate-400 mb-4 tracking-wider">
                  Policy Navigation
                </h3>
                <ul className="space-y-2.5 border-l-2 border-slate-100">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        onClick={(e) => scrollToSection(e, section.id)}
                        className={`block pl-4 text-xs sm:text-sm transition-all duration-200 ${
                          activeSection === section.id
                            ? "text-cloud-blue font-bold border-l-2 -ml-[2px] border-cloud-blue"
                            : "text-slate-500 hover:text-slate-800"
                        }`}
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <div className="text-xs font-bold text-dark-navy mb-2">Need Assistance?</div>
                  <p className="text-xs text-slate-500 mb-3">
                    Contact our compliance team regarding data privacy questions.
                  </p>
                  <Link
                    href="mailto:privacy@cloudcomnet.com"
                    className="text-xs font-semibold text-cloud-blue hover:underline flex items-center gap-1"
                  >
                    privacy@cloudcomnet.com →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Main Legal & Interactive Content */}
            <div className="lg:w-3/4 space-y-10">
              {/* Section 1: Overview */}
              <div
                id="overview"
                className="scroll-mt-28 bg-white p-8 md:p-10 rounded-3xl border border-slate-200/90 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-cloud-blue flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-dark-navy">
                    1. Overview & Policy Scope
                  </h2>
                </div>

                <div className="prose max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-light">
                  <p>
                    CloudCom Networks Private Limited ("CloudCom", "we", "us", or "our") believes in data sovereignty, transparent technology operations, and zero-compromise user privacy. This Cookie Agreement explains how our web platform, customer portals, and related digital properties use cookies, web beacons, local storage tokens, and related tracking mechanisms.
                  </p>
                  <p>
                    Unlike traditional corporate entities that monetize or trade visitor behavioral profiles, CloudCom operates under strict digital sovereignty principles. We do not sell, rent, or trade your personal information. Any data collected via telemetry is strictly utilized to optimize our cloud network performance, enhance platform security, and ensure seamless user navigation.
                  </p>

                  <div className="bg-blue-50/70 p-4 rounded-2xl border border-blue-200/70 text-xs text-slate-700 flex items-start gap-3 mt-4">
                    <Info className="w-5 h-5 text-cloud-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-dark-navy font-bold">Key Guarantee:</strong> You maintain total control over non-essential cookies. You may modify or revoke your cookie preferences at any time using the live preference center below.
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Live Cookie Preference Center Widget */}
              <div
                id="preference-center"
                className="scroll-mt-28 bg-white p-8 md:p-10 rounded-3xl border border-blue-200/90 shadow-md relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cloud-blue to-emerald-500"></div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-cloud-blue block mb-1">
                      Interactive Tool
                    </span>
                    <h2 className="text-2xl font-bold text-dark-navy flex items-center gap-2">
                      2. Live Cookie Preference Center
                    </h2>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={resetConsent}
                      className="text-xs font-semibold text-slate-500 hover:text-dark-navy flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
                      title="Reset all cookie permissions to default"
                    >
                      <RefreshCw className="w-3.5 h-3.5" /> Reset
                    </button>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-6 font-light">
                  Use the toggles below to configure your preferred cookie settings. Your selections are applied in real-time and stored locally in your browser.
                </p>

                {/* Status Toast */}
                {saveStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 mb-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{saveStatus}</span>
                  </motion.div>
                )}

                {/* Preference Cards Grid */}
                <div className="space-y-4 mb-8">
                  {/* Essential */}
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-emerald-600" />
                        <h4 className="font-bold text-sm text-dark-navy">
                          Strictly Necessary Cookies
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed font-light">
                        Essential for core infrastructure security, SSL validation, load balancing, and CSRF token defense. These cannot be disabled.
                      </p>
                      <div className="text-[11px] font-mono text-slate-400">
                        Identifier tokens: ccn_consent, ccn_session_id, __Host-auth
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full whitespace-nowrap">
                      Always Active
                    </span>
                  </div>

                  {/* Analytics */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-start justify-between gap-4 shadow-2xs">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-cloud-blue" />
                        <h4 className="font-bold text-sm text-dark-navy">
                          Analytics & Telemetry Cookies
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed font-light">
                        Allows us to monitor aggregated traffic patterns, Core Web Vitals, API response latency, and high-load bottlenecks to optimize network delivery.
                      </p>
                      <div className="text-[11px] font-mono text-slate-400">
                        Identifier tokens: _ccn_analytics, _vitals_perf
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer mt-1">
                      <input
                        type="checkbox"
                        checked={localPrefs.analytics}
                        onChange={(e) =>
                          setLocalPrefs((prev) => ({ ...prev, analytics: e.target.checked }))
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cloud-blue"></div>
                    </label>
                  </div>

                  {/* Functional */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-start justify-between gap-4 shadow-2xs">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <SlidersHorizontal className="w-4 h-4 text-indigo-600" />
                        <h4 className="font-bold text-sm text-dark-navy">
                          Functional & Interactive Tour State
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed font-light">
                        Stores user accessibility preferences, audio narration playback rates, closed captions state, and website walkthrough completion markers.
                      </p>
                      <div className="text-[11px] font-mono text-slate-400">
                        Identifier tokens: ccn_tour_state, ccn_audio_pref
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer mt-1">
                      <input
                        type="checkbox"
                        checked={localPrefs.functional}
                        onChange={(e) =>
                          setLocalPrefs((prev) => ({ ...prev, functional: e.target.checked }))
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cloud-blue"></div>
                    </label>
                  </div>

                  {/* Marketing */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-start justify-between gap-4 shadow-2xs">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Megaphone className="w-4 h-4 text-amber-600" />
                        <h4 className="font-bold text-sm text-dark-navy">
                          Marketing & Partner Attribution
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed font-light">
                        Allows measuring referral traffic from verified enterprise partners and marketing campaigns. No cross-site profiling or third-party ad brokers.
                      </p>
                      <div className="text-[11px] font-mono text-slate-400">
                        Identifier tokens: ccn_campaign_ref, ccn_mkt_trk
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer mt-1">
                      <input
                        type="checkbox"
                        checked={localPrefs.marketing}
                        onChange={(e) =>
                          setLocalPrefs((prev) => ({ ...prev, marketing: e.target.checked }))
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cloud-blue"></div>
                    </label>
                  </div>
                </div>

                {/* Preference Center Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={handleRejectOptional}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
                  >
                    Reject Non-Essential
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleAcceptAll}
                      className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
                    >
                      Accept All Categories
                    </button>
                    <button
                      onClick={handleSavePreferences}
                      className="bg-cloud-blue hover:bg-cloud-blue-hover text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-all shadow-md shadow-cloud-blue/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                      Save Preferences
                    </button>
                  </div>
                </div>
              </div>

              {/* Section 3: Interactive Guided Tour Showcase */}
              <div
                id="website-tour"
                className="scroll-mt-28 bg-gradient-to-br from-dark-navy via-slate-900 to-dark-navy p-8 md:p-10 rounded-3xl text-white shadow-xl relative overflow-hidden border border-blue-500/30"
              >
                <div className="absolute top-0 right-0 w-80 h-80 bg-cloud-blue/20 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="space-y-3 max-w-xl">
                    <div className="inline-flex items-center gap-2 bg-blue-900/80 border border-blue-400/40 text-blue-200 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                      <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                      <span>Studio Audio Sub-Pages Tour</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      3. Quick Sub-Pages Overview Tour
                    </h2>

                    <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed font-light">
                      Get a fast, 4-step overview of our core sub-pages (Solutions, Services, Industries, and Support & Contact) with studio neural voice narration, live subtitles, and interactive visual spotlights.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                      <div className="bg-white/10 p-2.5 rounded-xl border border-white/10 text-center">
                        <div className="text-[11px] font-bold text-sky-300">Studio Audio</div>
                        <div className="text-[10px] text-slate-300">Crisp neural voice</div>
                      </div>
                      <div className="bg-white/10 p-2.5 rounded-xl border border-white/10 text-center">
                        <div className="text-[11px] font-bold text-emerald-300">Live Captions</div>
                        <div className="text-[10px] text-slate-300">Synchronized CC text</div>
                      </div>
                      <div className="bg-white/10 p-2.5 rounded-xl border border-white/10 text-center">
                        <div className="text-[11px] font-bold text-indigo-300">Sub-Page Focus</div>
                        <div className="text-[10px] text-slate-300">4 quick key pages</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 w-full md:w-auto flex-shrink-0">
                    <button
                      onClick={() => startTour(0)}
                      className="bg-cloud-blue hover:bg-cloud-blue-hover text-white text-sm font-bold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-cloud-blue/30 hover:scale-105 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Start Guided Tour</span>
                    </button>
                    <span className="text-[11px] text-center text-slate-400">
                      Duration: ~60 seconds • Exit anytime (Esc)
                    </span>
                  </div>
                </div>
              </div>

              {/* Section 4: Classification of Cookies */}
              <div
                id="cookie-types"
                className="scroll-mt-28 bg-white p-8 md:p-10 rounded-3xl border border-slate-200/90 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-cloud-blue flex items-center justify-center flex-shrink-0">
                    <Sliders className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-dark-navy">
                    4. Granular Classification of Cookies
                  </h2>
                </div>

                <div className="space-y-6 text-sm text-slate-600 font-light leading-relaxed">
                  <div>
                    <h3 className="text-base font-bold text-dark-navy mb-2 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-600" />
                      A. Strictly Necessary & Session Security Cookies
                    </h3>
                    <p>
                      These cookies are technically required for the website to function. They authenticate users, maintain active sessions across distributed microservices, verify zero-trust identity tokens, prevent Cross-Site Request Forgery (CSRF), and distribute inbound traffic across our APAC and global server edges. Under GDPR Article 6(1)(f), strictly necessary cookies do not require prior user consent.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-dark-navy mb-2 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-cloud-blue" />
                      B. Performance & Analytics Cookies
                    </h3>
                    <p>
                      These cookies collect anonymized telemetry data about how visitors interact with our website. This includes page load velocity, Largest Contentful Paint (LCP), Interaction to Next Paint (INP), scroll depth, and routing errors. We do not correlate analytical telemetry with identifiable personal records.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-dark-navy mb-2 flex items-center gap-2">
                      <SlidersHorizontal className="w-4 h-4 text-indigo-600" />
                      C. Functional & Guided Tour State Cookies
                    </h3>
                    <p>
                      These cookies enable enhanced platform features such as remembering your preferred speech synthesis speed (1x / 1.25x), sound effect muting preferences, live closed caption toggles, and step progress within the interactive website tour.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-dark-navy mb-2 flex items-center gap-2">
                      <Megaphone className="w-4 h-4 text-amber-600" />
                      D. Marketing & Partner Attribution Cookies
                    </h3>
                    <p>
                      These cookies record when a visitor arrives through a strategic partner channel or registered enterprise campaign. They ensure appropriate partner commission attribution without deploying third-party tracking pixels that follow visitors across unrelated websites.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 5: Cookie Inventory & Lifespans Table */}
              <div
                id="cookie-table"
                className="scroll-mt-28 bg-white p-8 md:p-10 rounded-3xl border border-slate-200/90 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-cloud-blue flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-dark-navy">
                      5. Complete Cookie Inventory & Lifespans
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Transparent technical breakdown of all cookies utilized on CloudCom Networks
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-100/80 text-dark-navy font-bold border-b border-slate-200">
                        <th className="p-3.5 rounded-tl-xl">Cookie Name</th>
                        <th className="p-3.5">Category</th>
                        <th className="p-3.5">Domain / Provider</th>
                        <th className="p-3.5">Purpose</th>
                        <th className="p-3.5 rounded-tr-xl">Lifespan</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 font-mono font-bold text-dark-navy">ccn_consent</td>
                        <td className="p-3.5">
                          <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md text-[10px] font-bold">
                            Essential
                          </span>
                        </td>
                        <td className="p-3.5">cloudcomnet.com</td>
                        <td className="p-3.5">Stores user cookie consent choices and category selections.</td>
                        <td className="p-3.5 font-medium">1 Year</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 font-mono font-bold text-dark-navy">ccn_session_id</td>
                        <td className="p-3.5">
                          <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md text-[10px] font-bold">
                            Essential
                          </span>
                        </td>
                        <td className="p-3.5">cloudcomnet.com</td>
                        <td className="p-3.5">Encrypted load-balancer session affinity token.</td>
                        <td className="p-3.5 font-medium">Session</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 font-mono font-bold text-dark-navy">__Host-auth</td>
                        <td className="p-3.5">
                          <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md text-[10px] font-bold">
                            Essential
                          </span>
                        </td>
                        <td className="p-3.5">cloudcomnet.com</td>
                        <td className="p-3.5">Secure HTTP-only authentication token for SLA portal.</td>
                        <td className="p-3.5 font-medium">30 Days</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 font-mono font-bold text-dark-navy">_ccn_analytics</td>
                        <td className="p-3.5">
                          <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-md text-[10px] font-bold">
                            Analytics
                          </span>
                        </td>
                        <td className="p-3.5">cloudcomnet.com</td>
                        <td className="p-3.5">Aggregated page interaction and visitor volume metrics.</td>
                        <td className="p-3.5 font-medium">6 Months</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 font-mono font-bold text-dark-navy">ccn_tour_state</td>
                        <td className="p-3.5">
                          <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-md text-[10px] font-bold">
                            Functional
                          </span>
                        </td>
                        <td className="p-3.5">cloudcomnet.com</td>
                        <td className="p-3.5">Tracks completion of the interactive audio website tour.</td>
                        <td className="p-3.5 font-medium">90 Days</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 font-mono font-bold text-dark-navy">ccn_audio_pref</td>
                        <td className="p-3.5">
                          <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-md text-[10px] font-bold">
                            Functional
                          </span>
                        </td>
                        <td className="p-3.5">cloudcomnet.com</td>
                        <td className="p-3.5">Remembers voice rate, mute state, and subtitle settings.</td>
                        <td className="p-3.5 font-medium">1 Year</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 font-mono font-bold text-dark-navy">ccn_campaign_ref</td>
                        <td className="p-3.5">
                          <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md text-[10px] font-bold">
                            Marketing
                          </span>
                        </td>
                        <td className="p-3.5">cloudcomnet.com</td>
                        <td className="p-3.5">Enterprise webinar & partner referral campaign attribution.</td>
                        <td className="p-3.5 font-medium">60 Days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 6: Legal Basis & Global Compliance */}
              <div
                id="legal-basis"
                className="scroll-mt-28 bg-white p-8 md:p-10 rounded-3xl border border-slate-200/90 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-cloud-blue flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-dark-navy">
                    6. Legal Basis & Global Privacy Compliance
                  </h2>
                </div>

                <div className="prose max-w-none text-slate-600 text-sm leading-relaxed space-y-4 font-light">
                  <p>
                    CloudCom Networks processes data in full alignment with major international data protection frameworks:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>European Union & UK (GDPR & ePrivacy Directive):</strong> Processing of non-essential cookies requires affirmative, freely given, unambiguous consent under Article 6(1)(a) and Article 7. Users possess the unconditional right to withdraw consent at any moment without penalty.
                    </li>
                    <li>
                      <strong>United States (CCPA / CPRA / VCDPA):</strong> California and state privacy statutes provide residents with the right to opt-out of the sale or sharing of personal data. <em>CloudCom affirms that we do not sell personal data to any third party under any circumstances.</em>
                    </li>
                    <li>
                      <strong>Asia-Pacific (PDPA Malaysia & Singapore, DPDP Act India):</strong> In accordance with our APAC regional engineering and hub operations, data is handled strictly with explicit purpose limitation and end-to-end cryptographic safeguards.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 7: Browser-Level Controls */}
              <div
                id="browser-management"
                className="scroll-mt-28 bg-white p-8 md:p-10 rounded-3xl border border-slate-200/90 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-cloud-blue flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-dark-navy">
                    7. Browser-Level Cookie Management & Blocking
                  </h2>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-light mb-6">
                  In addition to our live preference center above, you can modify cookie handling parameters directly within your web browser settings. Most browsers allow you to block third-party cookies or wipe stored cookies upon browser exit.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      name: "Google Chrome",
                      steps: "Settings → Privacy and security → Third-party cookies",
                      link: "https://support.google.com/chrome/answer/95647",
                    },
                    {
                      name: "Mozilla Firefox",
                      steps: "Settings → Privacy & Security → Enhanced Tracking Protection",
                      link: "https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop",
                    },
                    {
                      name: "Apple Safari",
                      steps: "Preferences → Privacy → Prevent cross-site tracking",
                      link: "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac",
                    },
                    {
                      name: "Microsoft Edge",
                      steps: "Settings → Cookies and site permissions → Manage and delete cookies",
                      link: "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09",
                    },
                  ].map((b, i) => (
                    <div
                      key={i}
                      className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex flex-col justify-between"
                    >
                      <div>
                        <div className="font-bold text-dark-navy text-sm mb-1">{b.name}</div>
                        <div className="text-xs text-slate-500 font-light mb-3">{b.steps}</div>
                      </div>
                      <Link
                        href={b.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-cloud-blue hover:underline inline-flex items-center gap-1"
                      >
                        Official Guide <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 8: Policy Updates & Contact DPO */}
              <div
                id="updates-contact"
                className="scroll-mt-28 bg-white p-8 md:p-10 rounded-3xl border border-slate-200/90 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-cloud-blue flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-dark-navy">
                    8. Policy Updates & Contacting our Data Protection Officer
                  </h2>
                </div>

                <div className="space-y-4 text-sm text-slate-600 font-light leading-relaxed">
                  <p>
                    CloudCom Networks may periodically update this Cookie Agreement to reflect architectural enhancements, technological advancements, or legislative changes. When modifications occur, the "Last Updated" date at the top of this document will be revised.
                  </p>
                  <p>
                    For specific inquiries, data access requests, or cookie revocation questions, please contact our appointed Data Protection Officer (DPO):
                  </p>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-4 space-y-2">
                    <div className="font-bold text-dark-navy text-base">
                      CloudCom Networks Data Protection Officer (DPO)
                    </div>
                    <div className="text-xs text-slate-600">
                      <strong>Email:</strong>{" "}
                      <Link href="mailto:privacy@cloudcomnet.com" className="text-cloud-blue hover:underline">
                        privacy@cloudcomnet.com
                      </Link>
                    </div>
                    <div className="text-xs text-slate-600">
                      <strong>APAC Hub:</strong> A-10-11, Brickfields, 50470 Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia
                    </div>
                    <div className="text-xs text-slate-600">
                      <strong>Engineering Centre:</strong> HIG-425, Kalinga Vihar, Phase-V, Bhubaneswar, Odisha, India
                    </div>
                    <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-200/60">
                      Response Time Guarantee: All formal inquiries are acknowledged and addressed within 48 business hours.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
