"use client";

import React from 'react';
import Link from 'next/link';
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight, Server, Shield, Sparkles, Cpu, Layers } from 'lucide-react';

export function EnterpriseBanner() {
    return (
        <section className="py-20 bg-slate-50 border-b border-slate-200/80">
            <Container>
                <AnimatedSection direction="up">
                    <div className="bg-gradient-to-r from-dark-navy via-[#072464] to-dark-navy rounded-[2.5rem] p-8 sm:p-12 lg:p-14 text-white shadow-2xl relative overflow-hidden border border-blue-500/30">
                        {/* Background glowing rings */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-cloud-blue/20 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-900/30 rounded-full blur-3xl pointer-events-none"></div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                            {/* Left Text */}
                            <div className="lg:col-span-8">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30 mb-4">
                                    <Sparkles className="w-3.5 h-3.5 text-cloud-blue" />
                                    Streamlined Delivery Model
                                </span>
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                                    Enterprise-grade technology. <br />
                                    <span className="text-cloud-blue">Without enterprise complexity.</span>
                                </h3>
                                <p className="text-sm sm:text-base text-blue-100/80 leading-relaxed font-light max-w-2xl mb-8">
                                    You shouldn&apos;t need a massive, bureaucratic technology team to operate a resilient digital environment. CloudCom helps organisations access modern architecture, cloud infrastructure, zero-trust security and proactive operations — without having to build every capability internally.
                                </p>
                                <div className="flex flex-wrap items-center gap-4">
                                    <Link 
                                        href="/contact" 
                                        className="bg-cloud-blue hover:bg-cloud-blue-hover text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2.5 shadow-lg shadow-cloud-blue/30 hover:scale-[1.02]"
                                    >
                                        Talk to an Architect <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <Link 
                                        href="/services" 
                                        className="bg-white/10 hover:bg-white/15 text-white border border-white/20 px-6 py-3.5 rounded-xl font-bold text-sm transition-all"
                                    >
                                        Explore Services Overview
                                    </Link>
                                </div>
                            </div>

                            {/* Right Isometric Server Card Preview */}
                            <div className="lg:col-span-4 flex justify-center">
                                <div className="w-full max-w-xs bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-blue-400/30 shadow-2xl text-center flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-500/20 text-cloud-blue flex items-center justify-center mb-4 border border-blue-400/40">
                                        <Server className="w-8 h-8" />
                                    </div>
                                    <h4 className="font-bold text-white text-base mb-1">Architecture Consultation</h4>
                                    <p className="text-xs text-slate-400 mb-4">Direct discussion with principal infrastructure & security engineers.</p>
                                    <div className="w-full bg-slate-800/80 rounded-xl p-2.5 text-[11px] font-mono text-emerald-400 flex items-center justify-center gap-2 border border-slate-700">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                        Available for Scheduled Review
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </Container>
        </section>
    );
}
