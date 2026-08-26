import React from 'react';
import Link from 'next/link';
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { ChallengeComparison } from "@/components/home/ChallengeComparison";
import { BuiltDifferently } from "@/components/home/BuiltDifferently";
import { SecurityFirstSection } from "@/components/home/SecurityFirstSection";
import { IndustriesGrid } from "@/components/home/IndustriesGrid";
import { EnterpriseBanner } from "@/components/home/EnterpriseBanner";
import { 
    ArrowRight, Shield, Cloud, MessageSquare, Cpu, Settings,
    Lock, Unlock, Layers, Target, Users, CheckCircle2, ShieldCheck,
    Check, Zap, Server, Activity, Database, LineChart, Globe, 
    Search, PenTool, CloudLightning, Gauge, ChevronRight, Fingerprint, Flag,
    Sparkles, Key, Leaf, HeartHandshake, FileCheck, ArrowUpRight
} from 'lucide-react';

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* 1. HERO SECTION - INFINITE LOOPING CAROUSEL */}
            <div data-tour="hero">
                <HeroCarousel />
            </div>

            {/* 2. TRUSTED BY / VALUES ALIGNMENT STRIP (From PDF Page 3, 4, 7) */}
            <section className="py-8 bg-white border-b border-slate-100 relative z-10 shadow-2xs">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap">
                            Trusted by organisations that value:
                        </div>
                        <div className="flex flex-wrap justify-center lg:justify-end items-center gap-x-6 sm:gap-x-8 gap-y-3 text-xs sm:text-sm font-semibold text-slate-700">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-cloud-blue" />
                                <span>Security & Compliance</span>
                            </div>
                            <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300"></div>
                            <div className="flex items-center gap-2">
                                <Unlock className="w-4 h-4 text-cloud-blue" />
                                <span>Independence & Control</span>
                            </div>
                            <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300"></div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-cloud-blue" />
                                <span>Practical Solutions</span>
                            </div>
                            <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300"></div>
                            <div className="flex items-center gap-2">
                                <HeartHandshake className="w-4 h-4 text-cloud-blue" />
                                <span>Long-term Partnership</span>
                            </div>
                            <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300"></div>
                            <div className="flex items-center gap-2">
                                <Leaf className="w-4 h-4 text-emerald-600" />
                                <span>Sustainable Technology</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* 3. THE CHALLENGE: TECHNOLOGY IS EVERYWHERE. ACCOUNTABILITY ISN'T. (From PDF Page 5) */}
            <ChallengeComparison />

            {/* 4. BUILT DIFFERENTLY: 4 VALUE DRIVERS & 5 PRINCIPLES (From PDF Page 3, 4, 13, 15) */}
            <BuiltDifferently />

            {/* 5. WHAT CLOUDCOM DOES SECTION - 5 CORE CAPABILITIES (From PDF Page 5, 7, 11) */}
            <section data-tour="capabilities" className="py-28 bg-white relative">
                <Container>
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
                        <AnimatedSection direction="up">
                            <span className="text-xs font-bold uppercase tracking-widest text-cloud-blue mb-2 block">
                                What We Do
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-navy tracking-tight">
                                Technology that <span className="text-cloud-blue">works together.</span>
                            </h2>
                            <p className="text-base sm:text-lg text-slate-500 max-w-2xl mt-4 leading-relaxed font-light">
                                We bring together the essential building blocks of modern digital infrastructure to help organisations connect, protect and grow with confidence.
                            </p>
                        </AnimatedSection>
                        <AnimatedSection direction="left" delay={0.2}>
                            <Link 
                                href="/solutions" 
                                className="inline-flex items-center gap-2 text-sm font-bold text-cloud-blue hover:text-cloud-blue-hover transition-colors group"
                            >
                                Explore all solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </AnimatedSection>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { 
                                icon: <Cloud className="w-8 h-8" />, 
                                title: "Cloud & Infrastructure", 
                                desc: "Scalable compute, storage, hybrid environments and sovereign hosting.", 
                                link: "/solutions/cloud",
                                bullets: ["Compute & Storage", "Disaster Recovery", "Hybrid Deployments"]
                            },
                            { 
                                icon: <MessageSquare className="w-8 h-8" />, 
                                title: "Unified Communications", 
                                desc: "Modern voice, video, messaging and secure collaboration platforms.", 
                                link: "/solutions/communications",
                                bullets: ["Business Telephony", "Video Conferencing", "Team Collaboration"]
                            },
                            { 
                                icon: <Shield className="w-8 h-8" />, 
                                title: "Cybersecurity", 
                                desc: "Security-first infrastructure, zero-trust protection and 24/7 monitoring.", 
                                link: "/solutions/security",
                                bullets: ["Zero Trust Network", "Identity & Access", "Threat Mitigation"]
                            },
                            { 
                                icon: <Settings className="w-8 h-8" />, 
                                title: "Managed Technology", 
                                desc: "Reliable operation, proactive maintenance and technical support.", 
                                link: "/services/managed-services",
                                bullets: ["24/7 Ops & Monitoring", "Patching & Tuning", "SLA Guarantees"]
                            },
                            { 
                                icon: <Cpu className="w-8 h-8" />, 
                                title: "AI & Automation", 
                                desc: "Intelligent automation and AI engineering to elevate productivity and decisions.", 
                                link: "/solutions/applications",
                                bullets: ["Workflow Automation", "AI Integration", "Intelligent Analytics"]
                            }
                        ].map((item, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.08} direction="up" className="h-full">
                                <Link 
                                    href={item.link}
                                    className="h-full bg-white p-7 rounded-3xl border border-slate-200/90 hover:border-cloud-blue/40 shadow-2xs hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group block relative overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-cloud-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div>
                                        <div className="mb-6 text-cloud-blue bg-blue-50/80 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-cloud-blue group-hover:text-white transition-colors duration-300">
                                            {item.icon}
                                        </div>
                                        <h3 className="font-bold text-dark-navy text-lg mb-3 leading-snug group-hover:text-cloud-blue transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed font-light">
                                            {item.desc}
                                        </p>
                                        <ul className="space-y-1.5 mb-6 pt-4 border-t border-slate-100">
                                            {item.bullets.map((b, bi) => (
                                                <li key={bi} className="text-[11px] font-medium text-slate-600 flex items-center gap-1.5">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-cloud-blue/60"></span>
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="text-cloud-blue font-bold text-xs flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                                        Explore Solution <ArrowRight className="w-4 h-4" />
                                    </div>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* 6. WHY CLOUDCOM SECTION (From PDF Pages 8 & 9) */}
            <section data-tour="sovereignty" className="py-28 bg-dark-navy text-white relative overflow-hidden">
                {/* Background mesh/pattern */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-dark-navy to-dark-navy"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                
                <Container className="relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <AnimatedSection direction="up">
                            <span className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-3 block">
                                Why CloudCom
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                                Technology built <span className="text-cloud-blue">around your business.</span>
                            </h2>
                            <p className="text-blue-100/80 text-base sm:text-lg leading-relaxed font-light">
                                We combine open technology, strong security and practical engineering to build digital infrastructure you can trust and grow on—today and tomorrow.
                            </p>
                        </AnimatedSection>
                    </div>
                        
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {[
                            { 
                                icon: <Unlock className="w-7 h-7" />, 
                                title: "Open & Flexible", 
                                desc: "Technology choices without unnecessary vendor lock-in. We use open standards to give you complete freedom and control.",
                                checks: ["Freedom of choice", "Interoperable & portable", "Future-ready architecture"]
                            },
                            { 
                                icon: <Shield className="w-7 h-7" />, 
                                title: "Secure by Design", 
                                desc: "Security integrated into every layer of our architecture and operations—from infrastructure to identity.",
                                checks: ["Zero Trust principles", "Identity & access control", "Continuous protection"]
                            },
                            { 
                                icon: <Layers className="w-7 h-7" />, 
                                title: "Built for Scale", 
                                desc: "Architectures designed to grow with your organisation—supporting more users, more data and more workloads.",
                                checks: ["Elastic & resilient", "High availability", "Performance at scale"]
                            },
                            { 
                                icon: <Target className="w-7 h-7" />, 
                                title: "Practical Technology", 
                                desc: "Solutions focused on business outcomes and measurable impact—not technology for its own sake.",
                                checks: ["Business-first approach", "Sustainable & efficient", "Measurable ROI"]
                            }
                        ].map((item, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1} direction="up" className="h-full">
                                <div className="bg-white rounded-3xl p-8 h-full flex flex-col text-slate-800 shadow-2xl relative group hover:translate-y-[-4px] transition-transform">
                                    <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-cloud-blue text-white flex items-center justify-center font-bold text-xs shadow-md">
                                        0{idx + 1}
                                    </div>
                                    <div className="w-14 h-14 rounded-2xl bg-dark-navy text-white flex items-center justify-center mb-6 mt-1 group-hover:bg-cloud-blue transition-colors">
                                        {item.icon}
                                    </div>
                                    <h4 className="font-bold text-xl mb-3 text-dark-navy">{item.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow font-light">{item.desc}</p>
                                    
                                    <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                                        {item.checks.map((check, i) => (
                                            <li key={i} className="flex items-center text-xs font-semibold text-slate-700">
                                                <CheckCircle2 className="w-4 h-4 text-cloud-blue mr-2.5 flex-shrink-0" />
                                                {check}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Open Source Banner (From PDF Page 8 & 9) */}
                    <AnimatedSection direction="up" delay={0.3}>
                        <div className="bg-gradient-to-r from-cloud-blue via-[#1d4ed8] to-[#0f2c6b] rounded-3xl p-8 sm:p-10 border border-blue-400/30 flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 flex-shrink-0">
                                <Flag className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                    Open Source. Digital Sovereignty. Your Advantage.
                                </h3>
                                <p className="text-blue-100 text-sm sm:text-base leading-relaxed font-light max-w-3xl">
                                    By embracing open-source software (OSS) and digital sovereignty principles, we help organisations retain control over their data, eliminate recurring vendor extortion, and build a more resilient future.
                                </p>
                            </div>
                            <Link 
                                href="/solutions" 
                                className="bg-white text-dark-navy hover:bg-slate-100 px-6 py-3 rounded-xl font-bold text-xs transition-colors whitespace-nowrap shadow-md flex-shrink-0"
                            >
                                Learn More
                            </Link>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>
            
            {/* 7. OUR APPROACH - FROM PROBLEM TO PRODUCTION (From PDF Page 5, 7, 9, 13) */}
            <section data-tour="lifecycle" className="py-28 bg-slate-50 border-b border-slate-200/80">
                <Container>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <AnimatedSection>
                            <span className="text-cloud-blue font-bold tracking-widest uppercase text-xs mb-3 block">
                                How We Deliver
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-navy tracking-tight mb-4">
                                From problem to production.
                            </h2>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                                A disciplined, transparent 4-stage engineering lifecycle designed for precision and agility.
                            </p>
                        </AnimatedSection>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative w-full mx-auto">
                        {[
                            { 
                                num: "01", 
                                icon: <Search className="w-7 h-7" />, 
                                title: "Understand", 
                                desc: "We study your business goals, existing workloads, compliance needs and constraints." 
                            },
                            { 
                                num: "02", 
                                icon: <PenTool className="w-7 h-7" />, 
                                title: "Architect", 
                                desc: "We design a practical, secure, vendor-neutral and scalable technology architecture." 
                            },
                            { 
                                num: "03", 
                                icon: <CloudLightning className="w-7 h-7" />, 
                                title: "Deploy", 
                                desc: "We implement, integrate, migrate data, and validate in real-world environments." 
                            },
                            { 
                                num: "04", 
                                icon: <Gauge className="w-7 h-7" />, 
                                title: "Operate", 
                                desc: "We monitor 24/7, manage, patch, and continuously optimise performance and security." 
                            }
                        ].map((step, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1} direction="up" className="h-full">
                                <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-2xs hover:shadow-lg transition-all h-full flex flex-col items-center text-center relative group">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-50 text-cloud-blue flex items-center justify-center mb-6 group-hover:bg-cloud-blue group-hover:text-white transition-colors">
                                        {step.icon}
                                    </div>
                                    <span className="text-xs font-mono font-bold text-cloud-blue bg-blue-50 px-2.5 py-0.5 rounded-full mb-3">
                                        Phase {step.num}
                                    </span>
                                    <h3 className="text-xl font-bold text-dark-navy mb-3">{step.title}</h3>
                                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">{step.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* 8. SECURITY FIRST ARCHITECTURE SECTION (From PDF Page 5) */}
            <SecurityFirstSection />

            {/* 9. INDUSTRIES SECTION (From PDF Page 5, 15) */}
            <IndustriesGrid />

            {/* 10. ENTERPRISE-GRADE BANNER (From PDF Page 5) */}
            <EnterpriseBanner />

            {/* 11. OUR TECHNOLOGY PHILOSOPHY STRIP (From PDF Page 5) */}
            <section className="py-16 bg-white border-b border-slate-100">
                <Container>
                    <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="max-w-2xl">
                            <span className="text-xs font-bold uppercase tracking-widest text-cloud-blue mb-2 block">
                                Our Technology Philosophy
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-dark-navy tracking-tight mb-3">
                                The right technology. Not the most technology.
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed font-light">
                                CloudCom believes technology should serve the organisation — not the other way around. We favour solutions that are secure, interoperable, maintainable and economically sustainable, including open technologies where they make sense.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
                            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs text-xs font-bold text-dark-navy">
                                <Unlock className="w-4 h-4 text-cloud-blue" />
                                <span>Open Standards</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs text-xs font-bold text-dark-navy">
                                <Target className="w-4 h-4 text-emerald-600" />
                                <span>Practical Outcomes</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs text-xs font-bold text-dark-navy">
                                <Leaf className="w-4 h-4 text-cyan-600" />
                                <span>Sustainable Growth</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* 12. LET'S SOLVE THE TECHNOLOGY PROBLEM - BOTTOM CTA (From PDF Page 5, 7, 9, 19) */}
            <section className="py-24 bg-white text-center">
                <Container>
                    <AnimatedSection direction="up">
                        <div className="bg-gradient-to-b from-dark-navy to-[#051c4a] rounded-[3rem] p-10 sm:p-16 lg:p-20 text-white shadow-2xl relative overflow-hidden border border-blue-500/30">
                            {/* Decorative background elements */}
                            <div className="absolute top-0 right-0 w-80 h-80 bg-cloud-blue/20 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-900/30 rounded-full blur-3xl pointer-events-none"></div>
                            
                            <div className="relative z-10 max-w-3xl mx-auto">
                                <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-900/60 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30 mb-6">
                                    Start a Conversation
                                </span>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight leading-tight">
                                    Let&apos;s solve the technology problem.
                                </h2>
                                <p className="text-blue-100/80 text-base sm:text-lg mb-10 leading-relaxed font-light max-w-2xl mx-auto">
                                    Tell us what you&apos;re trying to achieve. Our principal architects will help you understand your options and identify the right, cost-effective way forward.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <Link 
                                        href="/contact" 
                                        className="bg-cloud-blue hover:bg-cloud-blue-hover text-white px-9 py-4 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-3 shadow-lg shadow-cloud-blue/30 hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        Talk to CloudCom <ArrowRight className="w-5 h-5" />
                                    </Link>
                                    <Link 
                                        href="/solutions" 
                                        className="bg-white/10 hover:bg-white/15 text-white border border-white/20 px-9 py-4 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        Explore Solutions Family
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>
        </div>
    );
}
