import React from 'react';
import Link from 'next/link';
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function IndustriesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-gradient-hero border-b border-white/10 pt-16 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                    <AnimatedSection direction="up">
                        <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Industries</div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Industries We Serve</h1>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">Deep expertise where you need it most. We understand that every industry has unique challenges.</p>
                    </AnimatedSection>
                </div>
            </section>
            <section className="py-20 bg-slateBg">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {[
                            { icon: "fa-heart-pulse", title: "Healthcare", desc: "Secure patient data platforms, compliance (HIPAA), and operational efficiency.", slug: "healthcare" },
                            { icon: "fa-building-columns", title: "Finance & Banking", desc: "Fraud detection, regulatory compliance, and secure cloud banking.", slug: "banking" },
                            { icon: "fa-industry", title: "Manufacturing", desc: "IoT integration, predictive maintenance, and supply chain visibility.", slug: "manufacturing" },
                            { icon: "fa-store", title: "Retail & E-commerce", desc: "Scalable infrastructure for peak seasons and personalized customer experiences.", slug: "retail" },
                            { icon: "fa-graduation-cap", title: "Education", desc: "Secure learning platforms and remote collaboration tools.", slug: "education" },
                            { icon: "fa-user-tie", title: "Professional Services", desc: "Client data protection, project management automation, and knowledge systems.", slug: "professional-services" },
                            { icon: "fa-truck-fast", title: "Logistics & Transportation", desc: "Real-time tracking, route optimization, and fleet management.", slug: "logistics" },
                            { icon: "fa-landmark", title: "Government & Public Sector", desc: "Secure digital infrastructure for public administration and citizen services.", slug: "government" }
                        ].map((item, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.05} direction="up" className="h-full">
                                <div className="h-full bg-white p-6 rounded-xl border border-slate-200 hover:shadow-card transition-shadow text-center flex flex-col items-center group">
                                    <div className="w-16 h-16 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center text-2xl text-slate-600 group-hover:text-primary group-hover:border-primary transition-colors mb-4">
                                        <i className={`fa-solid ${item.icon}`}></i>
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-sm mb-2">{item.title}</h3>
                                    <p className="text-[11px] text-slate-500 mb-4 flex-grow">{item.desc}</p>
                                    <Link href={`/industries/${item.slug}`} className="text-primary text-[10px] font-bold uppercase tracking-wider">Learn More &rarr;</Link>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
