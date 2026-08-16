import React from 'react';
import Link from 'next/link';
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";

export default function SLAPoliciesPage() {
    return (
        <div>
            <section className="bg-gradient-hero border-b border-white/10 pt-16 pb-20 relative overflow-hidden">
                <AnimatedSection direction="up" delay={0.1} className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> SLA & Policies</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">SLA & Policies</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">Clear commitments you can trust. We stand behind our enterprise services with transparent guarantees and rigorous compliance standards.</p>
                </AnimatedSection>
            </section>
            
            <section className="py-20 bg-slateBg">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-12">
                        
                        {/* SLA Section */}
                        <div className="lg:w-1/2">
                            <AnimatedSection direction="up" delay={0.2} className="h-full">
                                <div className="bg-white rounded-3xl border border-slate-200 p-10 shadow-sm h-full relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8 opacity-5">
                                        <i className="fa-solid fa-handshake text-9xl text-primary"></i>
                                    </div>
                                    <div className="flex items-center gap-4 mb-8 relative z-10">
                                        <div className="w-14 h-14 bg-blue-50 text-primary rounded-xl flex items-center justify-center text-2xl"><i className="fa-solid fa-handshake"></i></div>
                                        <h2 className="text-3xl font-bold text-slate-900">Service Level Agreement</h2>
                                    </div>
                                    
                                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/50 rounded-2xl p-8 mb-10 relative z-10">
                                        <div className="text-primary font-bold text-sm mb-2 uppercase tracking-wide">Enterprise Guarantee</div>
                                        <h3 className="text-4xl font-extrabold text-slate-900 mb-3">99.99% Uptime</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">Our infrastructure is built for ultimate resilience. If we fall short of our 99.99% monthly uptime guarantee for critical services, you are automatically eligible for service credits.</p>
                                    </div>
                                    
                                    <h3 className="font-bold text-slate-900 text-lg mb-6 relative z-10">Response Time Targets</h3>
                                    <div className="space-y-4 mb-8 relative z-10">
                                        <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-100">
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse"></div>
                                                <div>
                                                    <span className="text-sm font-bold text-slate-900 block">Critical (Sev 1)</span>
                                                    <span className="text-xs text-slate-500">Service unavailable</span>
                                                </div>
                                            </div>
                                            <span className="text-sm font-bold text-red-600 bg-red-50 px-3 py-1 rounded-lg">&lt; 15 mins</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-100">
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                                <div>
                                                    <span className="text-sm font-bold text-slate-900 block">High (Sev 2)</span>
                                                    <span className="text-xs text-slate-500">Significant performance degradation</span>
                                                </div>
                                            </div>
                                            <span className="text-sm font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-lg">&lt; 1 hour</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-100">
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                                <div>
                                                    <span className="text-sm font-bold text-slate-900 block">Normal (Sev 3)</span>
                                                    <span className="text-xs text-slate-500">Minor issues, general questions</span>
                                                </div>
                                            </div>
                                            <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">&lt; 4 hours</span>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Policies Section */}
                        <div className="lg:w-1/2">
                            <AnimatedSection direction="up" delay={0.3} className="h-full">
                                <div className="bg-white rounded-3xl border border-slate-200 p-10 shadow-sm h-full relative overflow-hidden">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-14 h-14 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center text-2xl"><i className="fa-solid fa-file-contract"></i></div>
                                        <h2 className="text-3xl font-bold text-slate-900">Corporate Policies</h2>
                                    </div>
                                    <p className="text-sm text-slate-600 mb-10 leading-relaxed">Access our formalized documentation defining our operational and compliance protocols. These documents outline our shared responsibilities and strict data protection standards.</p>
                                    
                                    <div className="grid grid-cols-1 gap-4">
                                        {[
                                            { title: "Privacy & Data Protection Policy", slug: "privacy-and-data-protection-policy", desc: "How we collect, handle, and secure your data.", icon: "fa-shield-halved", size: "142 KB" },
                                            { title: "Acceptable Use Policy", slug: "acceptable-use-policy", desc: "Guidelines for acceptable usage of our network.", icon: "fa-user-check", size: "86 KB" },
                                            { title: "Change Management Policy", slug: "change-management-policy", desc: "Procedures for infrastructure updates and maintenance.", icon: "fa-code-pull-request", size: "210 KB" },
                                            { title: "Data Processing Agreement (DPA)", slug: "data-processing-agreement-dpa", desc: "GDPR & CCPA compliant data processing terms.", icon: "fa-file-signature", size: "315 KB" },
                                            { title: "Information Security Policy", slug: "information-security-policy", desc: "Our internal security standards and ISO 27001 posture.", icon: "fa-lock", size: "450 KB" }
                                        ].map((policy, idx) => (
                                            <Link href={`/support/sla-policies/${policy.slug}`} key={idx} className="flex items-center justify-between p-5 rounded-2xl border border-slate-200 hover:border-primary hover:bg-slate-50 transition-all group shadow-sm hover:shadow-md">
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-blue-100 text-slate-500 group-hover:text-primary flex items-center justify-center mr-4 transition-colors">
                                                        <i className={`fa-solid ${policy.icon}`}></i>
                                                    </div>
                                                    <div>
                                                        <span className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors block mb-1">{policy.title}</span>
                                                        <span className="text-xs text-slate-500 block">{policy.desc}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="text-[10px] text-slate-400 font-medium mr-4 hidden sm:block">{policy.size}</span>
                                                    <div className="w-8 h-8 rounded-full border border-slate-200 group-hover:border-primary text-slate-400 group-hover:text-primary flex items-center justify-center transition-colors">
                                                        <i className="fa-solid fa-download text-xs"></i>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
}
