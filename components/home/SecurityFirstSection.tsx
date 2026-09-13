"use client";

import React from 'react';
import Link from 'next/link';
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { 
    Shield, Key, Lock, RefreshCw, ArrowRight, 
    CheckCircle2, ShieldCheck, Database, Eye, Terminal
} from 'lucide-react';

export function SecurityFirstSection() {
    return (
        <section className="py-24 bg-[#f4f5f8] text-slate-800 relative overflow-hidden border-b border-slate-200/80">
            {/* Ambient Background Lights */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(37,99,235,0.08)_0%,_transparent_60%)]"></div>

            <Container className="relative z-10">
                <div className="max-w-3xl mb-16">
                    <AnimatedSection direction="up">
                        <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-50 text-cloud-blue text-xs font-bold uppercase tracking-widest border border-blue-200 mb-4 shadow-2xs">
                            Security First Architecture
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-navy tracking-tight mb-6 leading-tight">
                            Security isn&apos;t an add-on. <br />
                            <span className="text-cloud-blue">It&apos;s how we build.</span>
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
                            From identity and access management to infrastructure, communication networks, applications and data storage, zero-trust security is designed into every layer from day one.
                        </p>
                    </AnimatedSection>
                </div>

                {/* 4 Security Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        {
                            title: "Zero Trust",
                            sub: "Never trust, always verify.",
                            desc: "Verify every user, device, network flow and API request continuously.",
                            icon: <Eye className="w-6 h-6 text-cloud-blue" />,
                            checks: ["Continuous authentication", "Micro-segmented traffic", "Least privilege boundary"]
                        },
                        {
                            title: "Least Privilege",
                            sub: "Only the access that is needed.",
                            desc: "Granular role-based access control (RBAC) and just-in-time access.",
                            icon: <Key className="w-6 h-6 text-emerald-600" />,
                            checks: ["Granular IAM roles", "JIT privilege escalation", "Audit trail logging"]
                        },
                        {
                            title: "Secure Infrastructure",
                            sub: "Hardened and protected.",
                            desc: "Harden critical compute workloads, cloud networks, and storage endpoints.",
                            icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
                            checks: ["End-to-end encryption", "Immutable configurations", "Automated patching"]
                        },
                        {
                            title: "Cyber Resilience",
                            sub: "Design for recovery.",
                            desc: "Air-gapped backups, disaster recovery automation and rapid failover.",
                            icon: <RefreshCw className="w-6 h-6 text-cyan-600" />,
                            checks: ["Immutable backup vaults", "Tested RTO/RPO SLAs", "Rapid incident response"]
                        }
                    ].map((pillar, idx) => (
                        <AnimatedSection key={idx} delay={idx * 0.1} direction="up" className="h-full">
                            <div className="bg-white rounded-3xl p-7 border border-slate-200 hover:border-cloud-blue/50 shadow-sm hover:shadow-lg h-full flex flex-col justify-between transition-all group">
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-cloud-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-blue-100">
                                        {pillar.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-dark-navy mb-1">{pillar.title}</h3>
                                    <p className="text-xs font-semibold text-cloud-blue mb-4">{pillar.sub}</p>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-6 font-light">{pillar.desc}</p>
                                </div>

                                <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                                    {pillar.checks.map((check, i) => (
                                        <li key={i} className="flex items-center text-xs font-medium text-slate-700">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-cloud-blue mr-2 flex-shrink-0" />
                                            {check}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Bottom Security Banner CTA */}
                <AnimatedSection direction="up" delay={0.3}>
                    <div className="bg-gradient-to-r from-dark-navy via-[#072464] to-dark-navy rounded-2xl p-6 sm:p-8 border border-blue-500/30 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-cloud-blue/20 text-sky-400 border border-cloud-blue/40 flex items-center justify-center flex-shrink-0">
                                <Shield className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-base font-bold text-white mb-1">Need a comprehensive security & compliance audit?</h4>
                                <p className="text-xs sm:text-sm text-blue-100/80">Our certified security architects evaluate zero-trust posture, data sovereignty and regulatory compliance.</p>
                            </div>
                        </div>
                        <Link 
                            href="/solutions/security" 
                            className="inline-flex items-center gap-2 bg-cloud-blue hover:bg-cloud-blue-hover text-white px-6 py-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap shadow-md shadow-cloud-blue/30 flex-shrink-0"
                        >
                            Explore Cybersecurity <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </AnimatedSection>
            </Container>
        </section>
    );
}
