import React from 'react';
import Link from 'next/link';
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function SolutionsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-gradient-hero border-b border-white/10 pt-16 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                    <AnimatedSection direction="up">
                        <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Solutions</div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Enterprise Solutions</h1>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">Tailored technology solutions that deliver real business value.</p>
                    </AnimatedSection>
                </div>
            </section>
            <section className="py-20 bg-slateBg min-h-screen">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Ready-to-Deploy Solutions</h2>
                        <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">CCN offers practical solutions across key areas crafted to solve specific business challenges.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: "fa-cloud-arrow-up", title: "Cloud Migration & Modernization", desc: "Move to the cloud safely with minimal disruption." },
                            { icon: "fa-network-wired", title: "Secure Remote Work Enablement", desc: "Secure access for distributed teams." },
                            { icon: "fa-database", title: "Data Platform Solutions", desc: "Centralized data lakes, analytics dashboards, and business intelligence." },
                            { icon: "fa-shield-halved", title: "Cybersecurity Defense Suite", desc: "Multi-layered protection including Zero Trust architecture." },
                            { icon: "fa-code-branch", title: "DevOps & Automation Pipelines", desc: "Faster, more reliable software delivery." },
                            { icon: "fa-map-location-dot", title: "Digital Transformation Roadmaps", desc: "End-to-end strategy and implementation." }
                        ].map((item, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.05} direction="up" className="h-full">
                                <div className="h-full bg-white p-8 rounded-xl border border-slate-200 hover:shadow-card transition-shadow flex flex-col items-start group">
                                    <i className={`fa-solid ${item.icon} text-3xl text-primary mb-4 group-hover:scale-110 transition-transform`}></i>
                                    <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-500 mb-6 flex-grow">{item.desc}</p>
                                    <Link 
                                        href={`/contact?interest=${encodeURIComponent('Solution Inquiry: ' + item.title)}`} 
                                        className="text-primary text-xs font-bold uppercase tracking-wider"
                                    >
                                        Explore Solution &rarr;
                                    </Link>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
