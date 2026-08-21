"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from "@/components/ui/Container";
import {
    ArrowRight, CheckCircle2, ChevronLeft, ChevronRight,
    Play, Pause, ArrowUpRight, Cloud, Shield, MessageSquare,
    Cpu, Server, Database, Activity, Lock, Users, Settings,
    Layers, Sparkles, Check, Globe
} from 'lucide-react';

export interface HeroSlide {
    id: string;
    badge: string;
    titleStart: string;
    highlightWord: string;
    titleEnd: string;
    tagline: string;
    description: string;
    primaryCta: { text: string; href: string };
    secondaryCta: { text: string; href: string };
    pillTags: string[];
    tabTitle: string;
    tabSub: string;
    theme: 'light' | 'dark';
}

export const heroSlides: HeroSlide[] = [
    {
        id: 'enterprise-stack',
        badge: 'MODERN DIGITAL INFRASTRUCTURE · ENTERPRISE STACK',
        titleStart: 'Build. Connect.',
        highlightWord: 'Secure. Scale.',
        titleEnd: '',
        tagline: 'Enterprise capabilities delivered without the corporate complexity.',
        description: 'By integrating open technologies with AI-driven engineering, CloudCom enables organisations to develop resilient digital infrastructure that is both flexible and cost-effective.',
        primaryCta: { text: 'Explore Solutions', href: '/solutions' },
        secondaryCta: { text: 'Talk to CloudCom', href: '/contact' },
        pillTags: ['Open. Sovereign. Secure.', 'Lean. Agile. AI-Enabled.', '99.999% SLA Uptime'],
        tabTitle: '01 Enterprise Stack',
        tabSub: 'Build & Scale Resilient Infra',
        theme: 'light',
    },
    {
        id: 'why-better',
        badge: "WHY WE'RE BETTER · LEAN DELIVERY & AGILITY",
        titleStart: 'Your technology',
        highlightWord: "shouldn't be this complicated.",
        titleEnd: '',
        tagline: 'Enterprise capability. Without enterprise overhead.',
        description: 'CloudCom helps organisations design, deploy, secure and manage modern digital infrastructure through open technologies, AI-enabled engineering and lean senior teams.',
        primaryCta: { text: "Why We're Different", href: '/company' },
        secondaryCta: { text: 'Talk to an Architect', href: '/contact' },
        pillTags: ['Faster Response', 'Greater Flexibility', 'Lower Overhead', 'Better Outcomes'],
        tabTitle: "02 Why We're Better",
        tabSub: 'Agile Teams & Zero Bloat',
        theme: 'dark',
    },
    {
        id: 'why-choose-us',
        badge: 'WHY CHOOSE US · DIGITAL SOVEREIGNTY & FREEDOM',
        titleStart: 'Technology built',
        highlightWord: 'around your business.',
        titleEnd: '',
        tagline: 'No vendor lock-in. Full data sovereignty. True independence.',
        description: 'We champion Open Source Software (OSS) and open standards to eliminate costly vendor lock-in, safeguard data sovereignty, and give your enterprise absolute control over its digital future.',
        primaryCta: { text: 'Explore Open Architecture', href: '/solutions/cloud' },
        secondaryCta: { text: 'Schedule a Consultation', href: '/contact' },
        pillTags: ['Freedom of Choice', 'Zero Vendor Lock-in', '100% Data Sovereignty', 'Zero Trust by Default'],
        tabTitle: '03 Why Choose Us',
        tabSub: 'Open Tech & True Control',
        theme: 'dark',
    },
    {
        id: 'one-partner',
        badge: 'ONE ACCOUNTABLE PARTNER · END-TO-END OWNERSHIP',
        titleStart: 'Technology that',
        highlightWord: 'works together.',
        titleEnd: '',
        tagline: 'One architecture. One partner. One accountable relationship.',
        description: 'Instead of juggling 5+ disconnected vendors for cloud, security, telecom, applications and support, CloudCom brings all layers together under unified, single-point accountability.',
        primaryCta: { text: 'See The CloudCom Advantage', href: '/services/managed-services' },
        secondaryCta: { text: 'Talk to CloudCom', href: '/contact' },
        pillTags: ['Single Point SLA', 'Unified Architecture', 'Zero Finger-Pointing', '24/7 Proactive Ops'],
        tabTitle: '04 One Partner',
        tabSub: 'Unified Ecosystem & SLA',
        theme: 'light',
    }
];

export function HeroCarousel() {
    const [current, setCurrent] = useState<number>(0);
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);

    // Continuous auto-advance interval using wall-clock time (React StrictMode safe)
    useEffect(() => {
        if (isPaused) return;

        const duration = 6500; // 6.5 seconds per slide
        const startTime = Date.now() - (progress / 100) * duration;

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const pct = Math.min(100, (elapsed / duration) * 100);

            if (pct >= 100) {
                setCurrent((prev) => (prev + 1) % heroSlides.length);
                setProgress(0);
            } else {
                setProgress(pct);
            }
        }, 40);

        return () => clearInterval(interval);
    }, [isPaused, current]);

    const goToSlide = (index: number) => {
        setCurrent(index);
        setProgress(0);
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % heroSlides.length);
        setProgress(0);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
        setProgress(0);
    };

    const activeSlide = heroSlides[current];
    const isDark = activeSlide.theme === 'dark';

    return (
        <section 
            className={`relative overflow-hidden transition-colors duration-700 select-none min-h-[92vh] lg:min-h-[90vh] flex flex-col justify-between ${
                isDark ? 'bg-dark-navy text-white' : 'bg-slate-50 text-slate-800'
            }`}
        >
            {/* Ambient Background Lights */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {isDark ? (
                    <>
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-cloud-blue/20 via-sky-blue/10 to-transparent rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-blue-900/40 via-cloud-blue/10 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(37,99,235,0.1)_0%,_transparent_70%)]"></div>
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                    </>
                ) : (
                    <>
                        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-gradient-to-bl from-cloud-blue/12 via-sky-blue/5 to-transparent rounded-full blur-3xl translate-x-1/4 -translate-y-1/4"></div>
                        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-blue-100/70 via-slate-100/60 to-transparent rounded-full blur-3xl -translate-x-1/4 translate-y-1/4"></div>
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                    </>
                )}
            </div>

            {/* Main Slide Content Area */}
            <div className="relative z-10 pt-14 md:pt-18 pb-8 flex-1 flex items-center">
                <Container>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeSlide.id}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.45, ease: "easeInOut" }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
                        >
                            {/* Left Text Column (6 cols) */}
                            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
                                {/* Top Category Badge */}
                                <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase mb-6 w-fit border backdrop-blur-md transition-all shadow-xs ${
                                    isDark 
                                        ? 'bg-blue-900/50 text-blue-300 border-blue-500/40 shadow-blue-900/30' 
                                        : 'bg-blue-50/90 text-cloud-blue border-blue-200 shadow-blue-100'
                                }`}>
                                    <span className="w-2 h-2 rounded-full bg-cloud-blue animate-ping" />
                                    {activeSlide.badge}
                                </div>

                                {/* Main Headline */}
                                <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold tracking-tight leading-[1.06] mb-6 ${
                                    isDark ? 'text-white' : 'text-dark-navy'
                                }`}>
                                    <span className="block">{activeSlide.titleStart}</span>
                                    <span className="text-cloud-blue block mt-1">
                                        {activeSlide.highlightWord}
                                    </span>
                                    {activeSlide.titleEnd && <span className="block">{activeSlide.titleEnd}</span>}
                                </h1>

                                {/* Tagline */}
                                <div className={`text-lg md:text-2xl font-bold mb-4 tracking-tight ${
                                    isDark ? 'text-blue-200' : 'text-dark-navy/90'
                                }`}>
                                    {activeSlide.tagline}
                                </div>

                                {/* Body Description */}
                                <p className={`text-base md:text-lg mb-8 leading-relaxed max-w-2xl font-light ${
                                    isDark ? 'text-slate-300' : 'text-slate-600'
                                }`}>
                                    {activeSlide.description}
                                </p>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mb-8">
                                    <Link 
                                        href={activeSlide.primaryCta.href}
                                        className="bg-cloud-blue hover:bg-cloud-blue-hover text-white px-8 py-4 rounded-xl font-bold text-base transition-all text-center flex items-center justify-center gap-3 shadow-lg shadow-cloud-blue/30 hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        {activeSlide.primaryCta.text} <ArrowRight className="w-5 h-5" />
                                    </Link>
                                    
                                    <Link 
                                        href={activeSlide.secondaryCta.href}
                                        className={`px-7 py-4 rounded-xl font-bold text-base transition-all text-center flex items-center justify-center gap-2 border ${
                                            isDark
                                                ? 'border-slate-700 bg-white/5 hover:bg-white/10 text-white'
                                                : 'border-slate-200 bg-white hover:bg-slate-50 text-dark-navy shadow-xs'
                                        } hover:scale-[1.02] active:scale-[0.98]`}
                                    >
                                        {activeSlide.secondaryCta.text} <ArrowUpRight className="w-4 h-4" />
                                    </Link>
                                </div>

                                {/* Pill Tags & Highlights */}
                                <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-slate-200/20">
                                    {activeSlide.pillTags.map((tag, idx) => (
                                        <span 
                                            key={idx} 
                                            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-semibold ${
                                                isDark
                                                    ? 'bg-slate-800/90 text-slate-200 border border-slate-700/80'
                                                    : 'bg-white text-slate-700 border border-slate-200 shadow-2xs'
                                            }`}
                                        >
                                            <CheckCircle2 className="w-3.5 h-3.5 text-cloud-blue flex-shrink-0" />
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right Visual Column (6 cols): 3D Hero Illustration with Surrounding Callouts */}
                            <div className="lg:col-span-6 xl:col-span-6 w-full flex justify-center items-center">
                                {current === 0 && <HeroSlide1Visual />}
                                {current === 1 && <HeroSlide2Visual />}
                                {current === 2 && <HeroSlide3Visual />}
                                {current === 3 && <HeroSlide4Visual />}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </Container>
            </div>

            {/* Bottom Carousel Controller & Interactive Slide Tabs */}
            <div className={`relative z-20 border-t backdrop-blur-md transition-colors py-4 ${
                isDark ? 'border-slate-800 bg-dark-navy/90' : 'border-slate-200/90 bg-white/90 shadow-xs'
            }`}>
                <Container>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Slide Selector Tabs */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full md:w-auto md:flex-1 max-w-5xl">
                            {heroSlides.map((slide, idx) => {
                                const isActive = current === idx;
                                return (
                                    <button
                                        key={slide.id}
                                        onClick={() => goToSlide(idx)}
                                        className={`relative text-left px-4 py-3 rounded-xl transition-all flex flex-col justify-center overflow-hidden border cursor-pointer ${
                                            isActive
                                                ? isDark
                                                    ? 'bg-blue-950/80 border-cloud-blue/70 text-white shadow-lg shadow-cloud-blue/15'
                                                    : 'bg-blue-50/90 border-cloud-blue/60 text-dark-navy shadow-sm'
                                                : isDark
                                                    ? 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                                                    : 'bg-white/70 border-slate-200/80 text-slate-500 hover:text-slate-800 hover:bg-white'
                                        }`}
                                    >
                                        {/* Auto-advance animated progress bar inside the active tab */}
                                        {isActive && (
                                            <div 
                                                className="absolute bottom-0 left-0 h-1 bg-cloud-blue transition-all duration-75"
                                                style={{ width: `${progress}%` }}
                                            />
                                        )}
                                        <div className="text-xs font-extrabold uppercase tracking-wider flex items-center justify-between">
                                            <span className={isActive ? 'text-cloud-blue' : ''}>{slide.tabTitle}</span>
                                            {isActive && <span className="w-2 h-2 rounded-full bg-cloud-blue animate-pulse"></span>}
                                        </div>
                                        <div className="text-[11px] opacity-80 truncate mt-0.5 font-medium">
                                            {slide.tabSub}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Controls (Play/Pause, Prev, Counter, Next) */}
                        <div className="flex items-center gap-3 self-center md:self-auto">
                            <button
                                onClick={() => setIsPaused(!isPaused)}
                                title={isPaused ? "Resume Auto-Play" : "Pause Carousel"}
                                className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
                                    isDark
                                        ? 'border-slate-700 bg-slate-800/70 text-slate-300 hover:text-white hover:bg-slate-700'
                                        : 'border-slate-200 bg-white text-slate-600 hover:text-dark-navy hover:bg-slate-50 shadow-2xs'
                                }`}
                                aria-label="Toggle autoplay"
                            >
                                {isPaused ? <Play className="w-4 h-4 text-emerald-500" /> : <Pause className="w-4 h-4 text-slate-500" />}
                            </button>

                            <div className="flex items-center gap-1.5">
                                <button
                                    onClick={prevSlide}
                                    title="Previous Slide"
                                    className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
                                        isDark
                                            ? 'border-slate-700 bg-slate-800/70 text-slate-300 hover:text-white hover:bg-slate-700'
                                            : 'border-slate-200 bg-white text-slate-600 hover:text-dark-navy hover:bg-slate-50 shadow-2xs'
                                    }`}
                                    aria-label="Previous Slide"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </button>
                                
                                <span className={`text-xs font-mono px-2.5 font-bold ${isDark ? 'text-blue-300' : 'text-dark-navy'}`}>
                                    0{current + 1} / 0{heroSlides.length}
                                </span>

                                <button
                                    onClick={nextSlide}
                                    title="Next Slide"
                                    className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
                                        isDark
                                            ? 'border-slate-700 bg-slate-800/70 text-slate-300 hover:text-white hover:bg-slate-700'
                                            : 'border-slate-200 bg-white text-slate-600 hover:text-dark-navy hover:bg-slate-50 shadow-2xs'
                                    }`}
                                    aria-label="Next Slide"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}

// ----------------------------------------------------------------------------------
// Visual 1: Enterprise Stack (3D Isometric Cloud Platform with Surrounding Badges)
// Reference: PDF Page 3 Top
// ----------------------------------------------------------------------------------
function HeroSlide1Visual() {
    return (
        <div className="relative w-full max-w-[620px] flex items-center justify-center py-4">
            {/* Ambient Radial Glow */}
            <div className="absolute inset-4 bg-gradient-to-tr from-cloud-blue/20 via-sky-blue/15 to-transparent rounded-full blur-3xl"></div>

            {/* Central 3D Illustration */}
            <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full flex items-center justify-center"
            >
                <img 
                    src="/media/hero/hero-slide-1.png"
                    alt="3D Isometric Enterprise Cloud Architecture"
                    className="w-full max-w-[480px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,102,204,0.15)] rounded-2xl"
                />

                {/* Floating Interactive Callout Badges with PDF Styling */}
                {/* Top-Left: Security */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="absolute -top-2 left-0 sm:left-4 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-blue-200/90 shadow-lg shadow-blue-500/10 flex items-center gap-2.5 cursor-default z-20"
                >
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-cloud-blue flex items-center justify-center flex-shrink-0">
                        <Shield className="w-4 h-4" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-dark-navy">Security First</div>
                        <div className="text-[10px] text-slate-500 font-medium">Zero Trust by Design</div>
                    </div>
                </motion.div>

                {/* Top-Right: AI & Automation */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="absolute -top-2 right-0 sm:right-4 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-blue-200/90 shadow-lg shadow-blue-500/10 flex items-center gap-2.5 cursor-default z-20"
                >
                    <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                        <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-dark-navy">AI-Enabled</div>
                        <div className="text-[10px] text-slate-500 font-medium">Intelligent Automation</div>
                    </div>
                </motion.div>

                {/* Bottom-Left: Data & Storage */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="absolute -bottom-2 left-0 sm:left-4 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-blue-200/90 shadow-lg shadow-blue-500/10 flex items-center gap-2.5 cursor-default z-20"
                >
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                        <Database className="w-4 h-4" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-dark-navy">Data & Cloud</div>
                        <div className="text-[10px] text-slate-500 font-medium">Resilient & Sovereign</div>
                    </div>
                </motion.div>

                {/* Bottom-Right: High Availability */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="absolute -bottom-2 right-0 sm:right-4 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-blue-200/90 shadow-lg shadow-blue-500/10 flex items-center gap-2.5 cursor-default z-20"
                >
                    <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                        <Server className="w-4 h-4" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-dark-navy">Built for Scale</div>
                        <div className="text-[10px] text-slate-500 font-medium">99.999% SLA Uptime</div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

// ----------------------------------------------------------------------------------
// Visual 2: Why We're Better (3D Datacenter with 6 Surrounding Callouts)
// Reference: PDF Page 3 Bottom & Page 4 Bottom
// ----------------------------------------------------------------------------------
function HeroSlide2Visual() {
    return (
        <div className="relative w-full max-w-[620px] flex items-center justify-center py-2">
            {/* Ambient Radial Blue Glow */}
            <div className="absolute inset-0 bg-cloud-blue/20 rounded-full blur-3xl"></div>

            {/* 3D Datacenter Centerpiece with High-Tech Callout Frame */}
            <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full rounded-3xl bg-slate-950/70 border border-blue-500/30 backdrop-blur-xl p-3 sm:p-4 shadow-2xl overflow-hidden"
            >
                {/* Top Subtle Telemetry */}
                <div className="flex items-center justify-between px-3 py-1.5 mb-2 border-b border-blue-900/40 text-[11px] font-mono text-blue-300">
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        AI-Enabled Architecture
                    </span>
                    <span className="text-emerald-400 font-bold">100% Agile</span>
                </div>

                {/* Main 3D Datacenter Graphic from PDF */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-900/90 border border-slate-800/80">
                    <img 
                        src="/media/hero/hero-slide-2.png"
                        alt="AI-Enabled Datacenter and Server Architecture"
                        className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                    />
                </div>

                {/* Bottom Speed Metric Strip */}
                <div className="grid grid-cols-3 gap-2 mt-2 pt-2 border-t border-blue-900/40 text-center">
                    <div className="bg-slate-900/80 p-1.5 rounded-xl border border-slate-800">
                        <div className="text-[10px] text-slate-400">Response</div>
                        <div className="text-xs font-bold text-emerald-400 font-mono">4x Faster</div>
                    </div>
                    <div className="bg-slate-900/80 p-1.5 rounded-xl border border-slate-800">
                        <div className="text-[10px] text-slate-400">Overhead</div>
                        <div className="text-xs font-bold text-sky-400 font-mono">-35% TCO</div>
                    </div>
                    <div className="bg-slate-900/80 p-1.5 rounded-xl border border-slate-800">
                        <div className="text-[10px] text-slate-400">Flexibility</div>
                        <div className="text-xs font-bold text-indigo-300 font-mono">100% Agile</div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

// ----------------------------------------------------------------------------------
// Visual 3: Why Choose Us ("OPEN. SOVEREIGN. SECURE." Platform with 6 Module Badges)
// Reference: PDF Page 4 Top
// ----------------------------------------------------------------------------------
function HeroSlide3Visual() {
    return (
        <div className="relative w-full max-w-[620px] flex items-center justify-center py-2">
            {/* Ambient Deep Cyan & Blue Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cloud-blue/25 via-indigo-600/20 to-transparent rounded-full blur-3xl"></div>

            {/* 3D Platform Centerpiece with Sovereign Callouts */}
            <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full rounded-3xl bg-slate-950/80 border border-slate-800 backdrop-blur-xl p-3 sm:p-4 shadow-2xl overflow-hidden"
            >
                {/* Header Guarantee */}
                <div className="flex items-center justify-between px-3 py-1.5 mb-2 border-b border-slate-800 text-[11px] font-mono">
                    <span className="text-blue-400 font-bold flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5" />
                        Digital Sovereignty & Open Standards
                    </span>
                    <span className="text-blue-300 bg-blue-950 px-2 py-0.5 rounded-full border border-blue-800 font-bold text-[10px]">
                        Zero Lock-in
                    </span>
                </div>

                {/* Main 3D Sovereign Cloud Graphic from PDF */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-900/90 border border-slate-800/80">
                    <img 
                        src="/media/hero/hero-slide-3.png"
                        alt="Open Sovereign Secure Cloud Platform"
                        className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                    />
                </div>

                {/* Bottom Guarantee Banner */}
                <div className="mt-2.5 p-2.5 bg-blue-950/60 rounded-xl border border-blue-800/50 flex items-center justify-between text-xs font-semibold text-blue-200">
                    <span>100% Data Sovereignty</span>
                    <span className="text-emerald-400 font-mono font-bold">Audit-Ready ✓</span>
                </div>
            </motion.div>
        </div>
    );
}

// ----------------------------------------------------------------------------------
// Visual 4: One Partner (3D Connected Architecture Ecosystem & 1 Single SLA)
// Reference: PDF Page 5 Top
// ----------------------------------------------------------------------------------
function HeroSlide4Visual() {
    return (
        <div className="relative w-full max-w-[620px] flex items-center justify-center py-2">
            {/* Ambient Radial Light Glow */}
            <div className="absolute inset-4 bg-gradient-to-tr from-cloud-blue/20 via-sky-blue/15 to-transparent rounded-full blur-3xl"></div>

            {/* 3D Ecosystem Centerpiece */}
            <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full rounded-3xl bg-white/90 border border-blue-200/80 backdrop-blur-xl p-4 sm:p-5 shadow-2xl overflow-hidden"
            >
                {/* Top Badge */}
                <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
                    <span className="text-xs font-bold text-dark-navy uppercase tracking-wider flex items-center gap-2">
                        <Globe className="w-4 h-4 text-cloud-blue" />
                        Unified Architecture Ecosystem
                    </span>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        1 Single SLA
                    </span>
                </div>

                {/* Main 3D Light Ecosystem Graphic from PDF */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-50/80 border border-slate-100 p-2 flex items-center justify-center">
                    <img 
                        src="/media/hero/hero-slide-4.png"
                        alt="Unified 3D Cloud and Communications Ecosystem"
                        className="w-full h-auto max-h-[360px] object-contain drop-shadow-lg transition-transform duration-500 hover:scale-[1.02]"
                    />
                </div>

                {/* Bottom Single Partner Commitment */}
                <div className="mt-3 p-3 bg-dark-navy text-white rounded-xl flex items-center justify-between text-xs font-bold shadow-md">
                    <span>One Accountable Relationship</span>
                    <span className="text-cloud-blue font-mono">Zero Finger-Pointing</span>
                </div>
            </motion.div>
        </div>
    );
}
