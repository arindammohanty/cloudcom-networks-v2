"use client";

import React from 'react';
import Link from 'next/link';
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { 
    Zap, Cpu, ShieldCheck, LineChart, Layers, 
    Clock, RefreshCw, DollarSign, TrendingUp, 
    ArrowRight, CheckCircle2, Sparkles, Server
} from 'lucide-react';

export function BuiltDifferently() {
    return (
        <section className="py-20 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
            <Container>
                {/* 5 Strategic Delivery Principles (From PDF Pages 3 & 4) */}
                <div className="mb-16">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-cloud-blue mb-1 block">
                                Core Capabilities
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-dark-navy tracking-tight">
                                Built differently from the ground up.
                            </h3>
                        </div>
                        <p className="text-sm text-slate-500 max-w-md md:text-right">
                            How our engineering philosophy delivers enterprise-grade results with agility and speed.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {[
                            { 
                                title: "Lean & Agile", 
                                desc: "Short decision paths. Faster decisions. Faster delivery without enterprise bloat.", 
                                icon: <Zap className="w-5 h-5 text-amber-500" />,
                                bg: "bg-amber-500/10 border-amber-200/60"
                            },
                            { 
                                title: "AI-Enabled", 
                                desc: "Modern tools that amplify our people, automate toil, and accelerate delivery.", 
                                icon: <Cpu className="w-5 h-5 text-cloud-blue" />,
                                bg: "bg-blue-500/10 border-blue-200/60"
                            },
                            { 
                                title: "Secure by Design", 
                                desc: "Security built in, not bolted on. Zero Trust principles across every layer.", 
                                icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
                                bg: "bg-emerald-500/10 border-emerald-200/60"
                            },
                            { 
                                title: "Cost-Efficient", 
                                desc: "Better outcomes with lower overhead and optimal, predictable economics.", 
                                icon: <LineChart className="w-5 h-5 text-indigo-600" />,
                                bg: "bg-indigo-500/10 border-indigo-200/60"
                            },
                            { 
                                title: "Built for Scale", 
                                desc: "Architectures designed to grow with your business and adapt to change effortlessly.", 
                                icon: <Layers className="w-5 h-5 text-cyan-600" />,
                                bg: "bg-cyan-500/10 border-cyan-200/60"
                            }
                        ].map((item, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.08} direction="up" className="h-full">
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all h-full flex flex-col justify-between group">
                                    <div>
                                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 border ${item.bg} group-hover:scale-110 transition-transform`}>
                                            {item.icon}
                                        </div>
                                        <h4 className="font-bold text-dark-navy text-base mb-2">{item.title}</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                    <div className="w-6 h-0.5 bg-slate-100 mt-4 group-hover:bg-cloud-blue group-hover:w-full transition-all"></div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>

                {/* 4 Value Drivers Banner (From PDF Pages 3, 4, 13, 15) */}
                <AnimatedSection direction="up" delay={0.2}>
                    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            {/* Left Heading & Description */}
                            <div className="lg:col-span-4">
                                <div className="flex items-center gap-2 text-cloud-blue text-xs font-bold uppercase tracking-wider mb-2">
                                    <Sparkles className="w-4 h-4" />
                                    The CloudCom Difference
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-dark-navy tracking-tight mb-3">
                                    Built differently. <br />
                                    <span className="text-cloud-blue">For a different kind</span> of technology partner.
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed font-light mb-6">
                                    We combine open technologies, AI-powered engineering and lean senior teams to deliver enterprise-grade solutions that align with your timeline, budget and business goals.
                                </p>
                                <Link 
                                    href="/company" 
                                    className="inline-flex items-center gap-2 text-sm font-bold text-dark-navy hover:text-cloud-blue transition-colors group"
                                >
                                    Learn more about our team <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Right 4 Key Metrics/Drivers */}
                            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {[
                                    {
                                        title: "Faster Response",
                                        line1: "Shorter cycles.",
                                        line2: "Quicker results.",
                                        icon: <Clock className="w-6 h-6 text-cloud-blue" />,
                                        stat: "4x Faster"
                                    },
                                    {
                                        title: "Greater Flexibility",
                                        line1: "Adapt quickly.",
                                        line2: "Evolve with ease.",
                                        icon: <RefreshCw className="w-6 h-6 text-emerald-600" />,
                                        stat: "100% Agile"
                                    },
                                    {
                                        title: "Lower Overhead",
                                        line1: "Optimised delivery.",
                                        line2: "Better economics.",
                                        icon: <DollarSign className="w-6 h-6 text-indigo-600" />,
                                        stat: "-35% TCO"
                                    },
                                    {
                                        title: "Better Outcomes",
                                        line1: "Aligned to your goals.",
                                        line2: "Measurable impact.",
                                        icon: <TrendingUp className="w-6 h-6 text-amber-500" />,
                                        stat: "Real ROI"
                                    }
                                ].map((driver, idx) => (
                                    <div 
                                        key={idx} 
                                        className="bg-slate-50/90 rounded-2xl p-5 border border-slate-200/80 hover:border-cloud-blue/40 hover:bg-blue-50/30 transition-all flex flex-col justify-between"
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="w-10 h-10 rounded-xl bg-white shadow-2xs border border-slate-100 flex items-center justify-center">
                                                {driver.icon}
                                            </div>
                                            <span className="text-[11px] font-bold font-mono text-dark-navy bg-white px-2 py-0.5 rounded-full border border-slate-200">
                                                {driver.stat}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-dark-navy text-sm mb-1">{driver.title}</h4>
                                            <div className="text-xs text-slate-500 leading-tight">{driver.line1}</div>
                                            <div className="text-xs text-slate-500 leading-tight font-medium text-slate-700">{driver.line2}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </Container>
        </section>
    );
}
