"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { 
    AlertTriangle, CheckCircle2, ArrowRight, XCircle, 
    Cloud, Shield, MessageSquare, Network, Users, 
    Check, Sparkles, Server, Zap, ShieldAlert, Cpu
} from 'lucide-react';

export function ChallengeComparison() {
    return (
        <section className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/80 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-100/70 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

            <Container className="relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <AnimatedSection direction="up">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-cloud-blue text-xs font-bold uppercase tracking-widest border border-blue-100 mb-4 shadow-2xs">
                            The Architecture Challenge
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-navy tracking-tight mb-6">
                            Technology is everywhere. <br className="hidden sm:inline" />
                            <span className="text-cloud-blue">Accountability isn&apos;t.</span>
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
                            Organisations today depend on cloud platforms, communication systems, applications, networks, security and data infrastructure. But these systems are often purchased, deployed and managed separately.
                        </p>
                    </AnimatedSection>
                </div>

                {/* Side-by-side Before vs With CloudCom Matrix with Hover In from Sides */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
                    {/* BEFORE: Multi-Vendor Fragmentation (Animates & Hovers In From Left) */}
                    <motion.div 
                        initial={{ opacity: 0, x: -70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ x: 10, scale: 1.01, transition: { duration: 0.3, ease: "easeOut" } }}
                        className="lg:col-span-6 bg-slate-50/90 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-rose-300 hover:shadow-xl hover:shadow-rose-500/5 transition-all cursor-default"
                    >
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-rose-400"></div>
                        
                        <div>
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                                <div className="flex items-center gap-3">
                                    <div className="w-11 h-11 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold shadow-xs">
                                        <XCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-dark-navy">Before CloudCom</h3>
                                        <p className="text-xs text-slate-500 font-medium">Multiple vendors, disconnected systems</p>
                                    </div>
                                </div>
                                <span className="text-xs font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200 shadow-2xs">
                                    High Friction
                                </span>
                            </div>

                            <p className="text-xs sm:text-sm font-semibold text-rose-700 mb-6 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                                More vendors. More complexity. More points of failure.
                            </p>

                            <div className="space-y-3">
                                {[
                                    { name: "Cloud Provider", detail: "Isolated compute & storage billing, self-managed ops", icon: <Cloud className="w-4 h-4" /> },
                                    { name: "Network Provider", detail: "Bandwidth & routing without application awareness", icon: <Network className="w-4 h-4" /> },
                                    { name: "Security Vendor", detail: "Bolted-on tools, alert fatigue, separate contracts", icon: <Shield className="w-4 h-4" /> },
                                    { name: "Communication Vendor", detail: "Proprietary PBX/telecom with high per-seat costs", icon: <MessageSquare className="w-4 h-4" /> },
                                    { name: "Different IT Partners", detail: "Finger-pointing during outages, slow incident resolution", icon: <Users className="w-4 h-4" /> }
                                ].map((item, idx) => (
                                    <motion.div 
                                        key={idx} 
                                        whileHover={{ x: 6, transition: { duration: 0.2 } }}
                                        className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-rose-200 transition-colors"
                                    >
                                        <div className="p-1.5 rounded-lg bg-slate-100 text-slate-500 mt-0.5 flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-xs font-bold text-slate-800 flex items-center justify-between">
                                                <span>{item.name}</span>
                                                <span className="text-[10px] text-rose-500 font-mono font-semibold">Disconnected</span>
                                            </div>
                                            <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">{item.detail}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-500 text-center font-medium">
                            Result: Escalating licensing costs, operational silos, and slow response times.
                        </div>
                    </motion.div>

                    {/* WITH CLOUDCOM: One Architecture, One Partner (Animates & Hovers In From Right) */}
                    <motion.div 
                        initial={{ opacity: 0, x: 70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ x: -10, scale: 1.015, transition: { duration: 0.3, ease: "easeOut" } }}
                        className="lg:col-span-6 bg-gradient-to-b from-dark-navy via-[#072159] to-[#04153a] rounded-3xl p-8 sm:p-10 border border-blue-500/30 shadow-2xl flex flex-col justify-between text-white relative overflow-hidden group hover:border-cloud-blue/70 hover:shadow-2xl hover:shadow-cloud-blue/20 transition-all cursor-default"
                    >
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cloud-blue via-sky-400 to-emerald-400"></div>
                        <div className="absolute -right-16 -top-16 w-56 h-56 bg-cloud-blue/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
                        <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

                        <div>
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-blue-900/60">
                                <div className="flex items-center gap-3">
                                    <div className="w-11 h-11 rounded-xl bg-cloud-blue text-white flex items-center justify-center font-bold shadow-lg shadow-cloud-blue/30 group-hover:scale-105 transition-transform">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-white">With CloudCom</h3>
                                        <p className="text-xs text-blue-200 font-medium">One architecture, one accountable partner</p>
                                    </div>
                                </div>
                                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/90 px-3 py-1 rounded-full border border-emerald-700/60 shadow-xs">
                                    Unified SLA
                                </span>
                            </div>

                            <p className="text-xs sm:text-sm font-semibold text-blue-200 mb-6 flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0 animate-pulse" />
                                CloudCom brings all technology layers together into one coherent architecture.
                            </p>

                            <div className="space-y-3">
                                {[
                                    { 
                                        title: "One Architecture", 
                                        desc: "Compute, network, communications, security and AI built to work synchronously.",
                                        tag: "Full Cohesion"
                                    },
                                    { 
                                        title: "One Technology Partner", 
                                        desc: "Direct access to senior engineers and architects without multi-tier bureaucracy.",
                                        tag: "Direct Access"
                                    },
                                    { 
                                        title: "One Accountable Relationship", 
                                        desc: "End-to-end responsibility from initial architecture through 24/7 continuous operations.",
                                        tag: "Zero Finger-Pointing"
                                    },
                                    { 
                                        title: "Open & Sovereign Control", 
                                        desc: "Interoperable, open standards that eliminate recurring vendor lock-in and extortion.",
                                        tag: "Freedom of Choice"
                                    }
                                ].map((item, idx) => (
                                    <motion.div 
                                        key={idx} 
                                        whileHover={{ x: 6, transition: { duration: 0.2 } }}
                                        className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-blue-950/80 border border-blue-800/60 shadow-sm hover:border-cloud-blue/70 hover:bg-blue-900/50 transition-colors"
                                    >
                                        <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 mt-0.5 flex-shrink-0">
                                            <Check className="w-4 h-4 stroke-[3]" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-xs font-bold text-white flex items-center justify-between">
                                                <span>{item.title}</span>
                                                <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/90 px-2.5 py-0.5 rounded-full border border-emerald-800/50">
                                                    {item.tag}
                                                </span>
                                            </div>
                                            <div className="text-[11px] text-blue-100/90 mt-0.5 leading-relaxed">{item.desc}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 pt-4 border-t border-blue-900/60 flex items-center justify-between">
                            <span className="text-xs text-blue-200">Ready to simplify your technology?</span>
                            <Link 
                                href="/contact" 
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-cloud-blue hover:bg-cloud-blue-hover px-4 py-2.5 rounded-xl transition-all shadow-md shadow-cloud-blue/30 hover:scale-105 active:scale-95"
                            >
                                Talk to an Architect <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
