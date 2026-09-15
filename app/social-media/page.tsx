"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  Clock,
  ShieldAlert,
  Mail,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Send,
  Building2,
  Globe,
  Bell,
  Headphones,
  FileCheck,
  Check,
  Info
} from "lucide-react";

interface ChannelInfo {
  id: string;
  name: string;
  handle: string;
  status: string;
  badgeColor: string;
  description: string;
  plannedContent: string[];
  icon: React.ReactNode;
}

const UPCOMING_CHANNELS: ChannelInfo[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "CloudCom Networks",
    status: "Launching Shortly",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    description: "Our primary corporate platform for enterprise cloud strategies, leadership insights, executive announcements, and talent recruitment.",
    plannedContent: [
      "Enterprise Cloud & Telecom case studies",
      "Executive perspectives & thought leadership",
      "Career openings and culture spotlights",
      "Strategic partnership announcements"
    ],
    icon: (
      <svg className="w-6 h-6 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    id: "twitter",
    name: "X (formerly Twitter)",
    handle: "@cloudcomnet",
    status: "In Verification",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
    description: "Fast-moving updates covering real-time platform telemetry, cybersecurity threat advisories, and immediate developer bulletins.",
    plannedContent: [
      "Network operations & incident telemetry updates",
      "Emerging cybersecurity threat bulletins",
      "Live event highlights and tech meetups",
      "Quick tips for cloud resilience & OSS architectures"
    ],
    icon: (
      <svg className="w-5 h-5 fill-current text-slate-900" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    id: "youtube",
    name: "YouTube",
    handle: "@cloudcomnetworks",
    status: "Content Production",
    badgeColor: "bg-red-100 text-red-800 border-red-200",
    description: "High-definition technical deep dives, live architectural walkthroughs, partner keynote sessions, and product demonstrations.",
    plannedContent: [
      "Enterprise Cloud Architecture deep dives",
      "Unified Communications & VoIP setup masterclasses",
      "Zero Trust security configuration tutorials",
      "Webinars with telecom & infrastructure experts"
    ],
    icon: (
      <svg className="w-6 h-6 fill-current text-[#FF0000]" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    id: "github",
    name: "GitHub & Developer Hub",
    handle: "github.com/cloudcomnet",
    status: "Repository Setup",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    description: "Open-source reference implementations, network automation playbooks, SDKs, and Terraform modules for multi-cloud deployments.",
    plannedContent: [
      "Open-source deployment blueprints",
      "Terraform & Ansible network automation modules",
      "API client libraries & telemetry connectors",
      "Community contributions & security benchmarks"
    ],
    icon: (
      <svg className="w-6 h-6 fill-current text-slate-800" viewBox="0 0 24 24">
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
      </svg>
    ),
  },
];

function SocialMediaContent() {
  const searchParams = useSearchParams();
  const selectedChannel = searchParams ? searchParams.get("channel") : null;

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="animate-fade-in bg-slateBg min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-24 overflow-hidden bg-gradient-to-b from-dark-navy via-[#072159] to-[#04153a] text-white">
        {/* Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-bl from-cloud-blue/20 via-sky-blue/10 to-transparent rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-gradient-to-tr from-blue-900/40 via-cloud-blue/10 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection direction="up">
              {/* Breadcrumb Navigation */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-blue-200 mb-6">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span className="text-slate-400">/</span>
                <Link href="/about" className="hover:text-white transition-colors">
                  Company
                </Link>
                <span className="text-slate-400">/</span>
                <span className="text-white font-medium">Social Channels</span>
              </div>

              {/* Status Badge */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs md:text-sm font-bold uppercase tracking-wider shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>Official Social Pages • Coming Shortly</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6">
                Our Official Social Pages <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-300">
                  Are Currently In Preparation
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-blue-100/90 leading-relaxed font-light mb-8 max-w-3xl mx-auto">
                Thank you for your interest in connecting with CloudCom Networks! We do not currently have active public social media profiles. Our verified corporate channels across LinkedIn, X (Twitter), YouTube, and GitHub will be officially launched shortly.
              </p>

              {/* Selected Channel Notice (if arrived via a specific social link) */}
              {selectedChannel && (
                <div className="mb-8 inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/10 border border-white/20 text-xs sm:text-sm text-sky-200 backdrop-blur-md shadow-inner">
                  <Info className="w-4 h-4 text-sky-300 flex-shrink-0" />
                  <span>
                    You requested our{" "}
                    <strong className="text-white capitalize">
                      {selectedChannel === "twitter" ? "X / Twitter" : selectedChannel}
                    </strong>{" "}
                    page. This profile is currently undergoing verification and will be published here as soon as it goes live.
                  </span>
                </div>
              )}

              {/* Key Highlights Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 pt-6 border-t border-slate-700/60 max-w-3xl mx-auto text-left">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5">
                  <div className="flex items-center gap-2 text-sky-300 font-bold text-xs uppercase mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    Launch Timeline
                  </div>
                  <div className="text-white font-bold text-sm">Coming Soon</div>
                  <div className="text-[11px] text-slate-300">Rollout in progress</div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5">
                  <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs uppercase mb-1">
                    <FileCheck className="w-3.5 h-3.5" />
                    Verification
                  </div>
                  <div className="text-white font-bold text-sm">Enterprise Verified</div>
                  <div className="text-[11px] text-slate-300">Authenticated badges</div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5">
                  <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase mb-1">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    Security
                  </div>
                  <div className="text-white font-bold text-sm">Zero Phishing</div>
                  <div className="text-[11px] text-slate-300">Anti-spoofing policy</div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5">
                  <div className="flex items-center gap-2 text-indigo-300 font-bold text-xs uppercase mb-1">
                    <Globe className="w-3.5 h-3.5" />
                    Official Source
                  </div>
                  <div className="text-white font-bold text-sm">cloudcomnet.com</div>
                  <div className="text-[11px] text-slate-300">Only authorized origin</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* 2. PLANNED CHANNELS SHOWCASE */}
      <section className="py-16 md:py-20 relative z-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-cloud-blue block mb-2">
              Upcoming Channels
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark-navy mb-4">
              Where You&apos;ll Find CloudCom Networks Shortly
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              We are carefully curating each channel to ensure high-value technical briefings, reliable architectural benchmarks, and real-time infrastructure telemetry without promotional noise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {UPCOMING_CHANNELS.map((channel, idx) => {
              const isSelected = selectedChannel === channel.id;
              return (
                <AnimatedSection key={channel.id} delay={idx * 0.1} direction="up" className="h-full">
                  <div
                    className={`h-full bg-white rounded-3xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between ${
                      isSelected
                        ? "border-cloud-blue ring-2 ring-cloud-blue/20 shadow-lg scale-[1.01]"
                        : "border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300"
                    }`}
                  >
                    <div>
                      {/* Top Row: Icon & Status Badge */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center flex-shrink-0 shadow-xs">
                          {channel.icon}
                        </div>
                        <div className="text-right">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${channel.badgeColor}`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                            {channel.status}
                          </span>
                        </div>
                      </div>

                      {/* Channel Title & Expected Handle */}
                      <h3 className="text-xl font-bold text-dark-navy mb-1 flex items-center gap-2">
                        {channel.name}
                        {isSelected && (
                          <span className="text-[10px] font-bold text-cloud-blue bg-blue-50 px-2 py-0.5 rounded-md">
                            Selected
                          </span>
                        )}
                      </h3>
                      <div className="text-xs font-mono text-slate-400 mb-3">{channel.handle}</div>

                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-5">
                        {channel.description}
                      </p>

                      {/* Content Preview Checklist */}
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-6">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                          What to Expect:
                        </div>
                        <ul className="space-y-1.5">
                          {channel.plannedContent.map((item, itemIdx) => (
                            <li key={itemIdx} className="text-xs text-slate-600 flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cloud-blue flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Status Button */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                        Status: Expected Shortly
                      </span>
                      <span className="font-semibold text-cloud-blue">Updates will post here</span>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. SECURITY & ANTI-IMPERSONATION ADVISORY */}
      <section className="py-8 relative z-20">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="bg-amber-50/80 border-2 border-amber-200 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 border border-amber-300 text-amber-700 flex items-center justify-center flex-shrink-0 shadow-xs">
                  <ShieldAlert className="w-7 h-7" />
                </div>
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-200/60 text-amber-900 text-xs font-bold uppercase tracking-wider">
                    Official Security & Anti-Fraud Advisory
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-amber-950">
                    Important Notice Regarding Unauthorized Accounts
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-light">
                    CloudCom Networks Private Limited does not currently operate active external social media profiles. Any social media accounts, channels, or groups on LinkedIn, X/Twitter, YouTube, Telegram, or Facebook claiming to represent CloudCom Networks, its directors, or its technical team are <strong>unauthorized and fraudulent</strong>.
                  </p>
                  <ul className="text-xs sm:text-sm text-amber-900 list-disc pl-5 space-y-1 font-light">
                    <li>CloudCom Networks never solicits payments, cryptocurrencies, or server credentials via social media DMs.</li>
                    <li>Official communications are strictly issued through verified corporate email (<code>@cloudcomnet.com</code>) and published on our official website.</li>
                    <li>When our official social media handles go live, their verified badges and direct URLs will be listed here on <code>cloudcomnet.com/social-media</code>.</li>
                  </ul>
                  <div className="pt-2 text-xs text-amber-800 font-medium">
                    If you suspect an account is impersonating CloudCom Networks, please report it immediately to{" "}
                    <Link href="mailto:security@cloudcomnet.com" className="font-bold underline hover:text-amber-950">
                      security@cloudcomnet.com
                    </Link>.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. DIRECT CONTACT & STAY NOTIFIED */}
      <section className="py-16 md:py-20 relative z-20">
        <Container>
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Direct Official Contact Channels */}
            <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-cloud-blue text-xs font-bold uppercase tracking-wider mb-4">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Verified Corporate Channels</span>
                </div>
                <h3 className="text-2xl font-bold text-dark-navy mb-3">
                  Reach Our Team Directly Today
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6">
                  While our social channels are being prepared, our corporate and technical engineering teams are readily available via our primary communication desks:
                </p>

                <div className="space-y-4 mb-6">
                  {/* General / Business Inquiries */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-cloud-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-dark-navy">General Corporate Email</div>
                      <Link
                        href="mailto:hello@cloudcomnet.com"
                        className="text-xs text-cloud-blue font-semibold hover:underline"
                      >
                        hello@cloudcomnet.com
                      </Link>
                      <div className="text-[11px] text-slate-400">Response within 24-48 business hours</div>
                    </div>
                  </div>

                  {/* Enterprise Sales Consultation */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Send className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-dark-navy">Sales & Architecture Inquiries</div>
                      <Link
                        href="/contact"
                        className="text-xs text-cloud-blue font-semibold hover:underline inline-flex items-center gap-1"
                      >
                        Submit Request Form <ArrowRight className="w-3 h-3" />
                      </Link>
                      <div className="text-[11px] text-slate-400">Consult with senior infrastructure architects</div>
                    </div>
                  </div>

                  {/* 24/7 SLA Technical Support */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Headphones className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-dark-navy">24/7 SLA Client Support Desk</div>
                      <Link
                        href="/support"
                        className="text-xs text-cloud-blue font-semibold hover:underline inline-flex items-center gap-1"
                      >
                        CloudCom Support Portal <ArrowRight className="w-3 h-3" />
                      </Link>
                      <div className="text-[11px] text-slate-400">Contracted SLA response guarantees</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/"
                  className="text-xs font-semibold text-slate-500 hover:text-dark-navy transition-colors inline-flex items-center gap-1"
                >
                  ← Return to Homepage
                </Link>
                <Link
                  href="/solutions"
                  className="text-xs font-semibold text-cloud-blue hover:underline inline-flex items-center gap-1"
                >
                  Explore Solutions →
                </Link>
              </div>
            </div>

            {/* Right Column: Notify Me When Social Goes Live */}
            <div className="lg:col-span-6 bg-gradient-to-br from-dark-navy via-[#072159] to-dark-navy text-white p-8 rounded-3xl border border-blue-500/30 shadow-md flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cloud-blue/15 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/70 border border-blue-400/40 text-blue-200 text-xs font-bold uppercase tracking-wider mb-4">
                  <Bell className="w-3.5 h-3.5 text-sky-400" />
                  <span>Launch Notification</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  Be the First to Know When We Go Live
                </h3>
                <p className="text-xs sm:text-sm text-blue-100/80 font-light leading-relaxed mb-6">
                  Enter your email below to receive a single, verified notification as soon as our official social media handles are authenticated and published. Zero spam, zero marketing newsletters.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 rounded-2xl bg-white/10 border border-emerald-400/40 text-white backdrop-blur-md"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-3">
                      <Check className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-1">
                      Notification Registered!
                    </h4>
                    <p className="text-xs text-blue-100 font-light leading-relaxed">
                      Thank you! We&apos;ve noted <span className="font-semibold text-white">{email}</span>. You will receive an official notification with verified links the day our social profiles open to the public.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleNotifySubmit} className="space-y-4">
                    <div>
                      <label htmlFor="notify-email" className="block text-xs font-medium text-blue-200 mb-1.5">
                        Your Work or Personal Email:
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          id="notify-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. yourname@company.com"
                          className="w-full bg-slate-900/80 border border-slate-700 focus:border-cloud-blue focus:ring-2 focus:ring-cloud-blue/30 rounded-xl py-3 pl-10 pr-4 text-xs sm:text-sm text-white placeholder:text-slate-500 transition-all outline-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-cloud-blue hover:bg-cloud-blue-hover text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-cloud-blue/30 hover:scale-[1.01] active:scale-[0.99] cursor-pointer disabled:opacity-70"
                    >
                      {loading ? (
                        <span>Registering...</span>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-sky-300" />
                          <span>Notify Me on Launch</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-slate-400 text-center">
                      Protected by CloudCom Privacy Policy. Unsubscribe anytime with 1-click.
                    </p>
                  </form>
                )}
              </div>

              <div className="relative z-10 pt-6 mt-6 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Enterprise Transparency</span>
                <Link href="/privacy" className="text-blue-300 hover:underline">
                  Privacy Policy →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default function SocialMediaPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slateBg flex items-center justify-center text-slate-500 text-sm">
          Loading official channels information...
        </div>
      }
    >
      <SocialMediaContent />
    </Suspense>
  );
}
