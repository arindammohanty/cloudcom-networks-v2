"use client";

import React from 'react';
import Link from 'next/link';
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { 
    Building2, GraduationCap, HeartPulse, Landmark, 
    Briefcase, Rocket, ArrowRight, ShieldCheck 
} from 'lucide-react';

export function IndustriesGrid() {
    const industries = [
        {
            title: "Government & Public Sector",
            desc: "Secure, sovereign and compliant digital infrastructure for public services and smart initiatives.",
            icon: <Landmark className="w-6 h-6 text-cloud-blue" />,
            slug: "government",
            highlight: "Sovereign Cloud & Security"
        },
        {
            title: "Education & Universities",
            desc: "Connected multi-campus networking, resilient LMS hosting, and secure digital collaboration.",
            icon: <GraduationCap className="w-6 h-6 text-emerald-600" />,
            slug: "education",
            highlight: "Campus Connectivity & LMS"
        },
        {
            title: "Healthcare & Life Sciences",
            desc: "Ultra-reliable, HIPAA-compliant infrastructure for electronic health records and telemetry.",
            icon: <HeartPulse className="w-6 h-6 text-rose-500" />,
            slug: "healthcare",
            highlight: "EHR Security & High Availability"
        },
        {
            title: "BFSI & Financial Services",
            desc: "High-throughput, audit-ready financial infrastructure with continuous security monitoring.",
            icon: <Building2 className="w-6 h-6 text-amber-500" />,
            slug: "bfsi",
            highlight: "Zero Trust & Compliance"
        },
        {
            title: "Enterprises & Corporations",
            desc: "Modernise legacy systems, eliminate multi-vendor bloat, and improve operational agility.",
            icon: <Briefcase className="w-6 h-6 text-indigo-600" />,
            slug: "enterprises",
            highlight: "Agile Scale & Cost Optimization"
        },
        {
            title: "Startups & Fast-Growing SMEs",
            desc: "Enterprise-grade architecture simplified for lean teams, rapid scaling and predictable cost.",
            icon: <Rocket className="w-6 h-6 text-purple-600" />,
            slug: "startups",
            highlight: "Fast Launch & Elastic Compute"
        }
    ];

    return (
        <section className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-16">
                    <AnimatedSection direction="up">
                        <span className="text-xs font-bold uppercase tracking-widest text-cloud-blue mb-2 block">
                            Industries We Empower
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-navy tracking-tight">
                            Built for organisations that <br className="hidden sm:inline" />
                            <span className="text-cloud-blue">depend on technology.</span>
                        </h2>
                    </AnimatedSection>
                    <AnimatedSection direction="left" delay={0.2}>
                        <Link 
                            href="/industries" 
                            className="inline-flex items-center gap-2 text-sm font-bold text-cloud-blue hover:text-cloud-blue-hover transition-colors group"
                        >
                            Explore all industries <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </AnimatedSection>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((ind, idx) => (
                        <AnimatedSection key={idx} delay={idx * 0.08} direction="up" className="h-full">
                            <Link 
                                href={`/industries/${ind.slug}`}
                                className="bg-slate-50/70 rounded-3xl p-8 border border-slate-200/90 hover:border-cloud-blue/50 hover:bg-white shadow-2xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col justify-between group block"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            {ind.icon}
                                        </div>
                                        <span className="text-[11px] font-bold text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200 group-hover:border-cloud-blue/30 group-hover:text-cloud-blue transition-colors">
                                            {ind.highlight}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-dark-navy mb-3 group-hover:text-cloud-blue transition-colors">
                                        {ind.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed font-light mb-6">
                                        {ind.desc}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 text-xs font-bold text-dark-navy group-hover:text-cloud-blue transition-colors pt-4 border-t border-slate-200/60">
                                    <span>Learn industry approach</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        </AnimatedSection>
                    ))}
                </div>
            </Container>
        </section>
    );
}
