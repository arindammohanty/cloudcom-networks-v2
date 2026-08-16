import React from 'react';
import Link from 'next/link';
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/* Fixed Global Background */}
            <div className="fixed inset-0 z-[-1]" style={{ backgroundColor: 'var(--color-dark-navy)' }}>
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-screen"></div>
            </div>

            <section className="pt-32 pb-32 relative overflow-hidden flex items-center min-h-[90vh]">
                {/* Radial gradients from bg-gradient-hero */}
                <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(at 0% 0%, hsla(216,100%,40%,0.2) 0px, transparent 50%), radial-gradient(at 100% 0%, hsla(199,89%,48%,0.2) 0px, transparent 50%), radial-gradient(at 100% 100%, hsla(216,100%,40%,0.2) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(199,89%,48%,0.2) 0px, transparent 50%)' }}></div>
                <div className="absolute inset-0 bg-slate-900/40 z-0"></div>
                <Container className="relative z-10">
                    <AnimatedSection direction="up" delay={0.1}>
                        <div className="text-xs font-bold text-blue-400 tracking-widest uppercase mb-6 inline-block px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-400/10 backdrop-blur-sm">
                            Communications. Cloud. Security. Infrastructure.
                        </div>
                    </AnimatedSection>
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-3/5">
                            <AnimatedSection direction="up" delay={0.2}>
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-lg">
                                    Building Secure <br />
                                    <span className="text-blue-400">Digital Infrastructure</span> <br />
                                    for Modern Enterprises
                                </h1>
                            </AnimatedSection>
                            <AnimatedSection direction="up" delay={0.3}>
                                <p className="text-lg md:text-2xl text-slate-300 mb-10 font-light leading-relaxed max-w-2xl text-balance">
                                    Design &bull; Build &bull; Host &bull; Secure &bull; Integrate &bull; Operate
                                </p>
                            </AnimatedSection>
                            <AnimatedSection direction="up" delay={0.4}>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/solutions" className="bg-primary hover:bg-primaryHover text-white px-8 py-4 rounded-md font-bold text-base transition-all text-center shadow-lg shadow-blue-500/30 hover:scale-105">Explore Solutions <i className="fa-solid fa-arrow-right ml-2"></i></Link>
                                    <Link href="/contact" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-md font-bold text-base transition-all text-center hover:scale-105">Contact Us <i className="fa-regular fa-envelope ml-2"></i></Link>
                                </div>
                            </AnimatedSection>
                        </div>
                        <div className="lg:w-2/5 relative">
                             <AnimatedSection direction="left" delay={0.3}>
                                 <div className="relative">
                                     <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
                                     <img src="/media/corporate-emblame-logo.png" alt="Cloud Com logo" className="relative w-full rounded-2xl shadow-2xl border border-white/10 opacity-90 mix-blend-screen transform transition-transform duration-700 hover:scale-[1.02]" />
                                 </div>
                             </AnimatedSection>
                        </div>
                    </div>
                </Container>
            </section>

            <div className="bg-slate-900 border-b border-slate-800 relative z-20 shadow-xl">
                <Container className="py-6 flex flex-wrap justify-between items-center text-slate-300 text-xs font-semibold gap-4">
                    <AnimatedSection delay={0.1} className="flex items-center"><i className="fa-solid fa-code text-primary text-xl w-10"></i> OPEN STANDARDS <br/>& INTEROPERABILITY</AnimatedSection>
                    <div className="hidden md:block w-px h-8 bg-slate-800"></div>
                    <AnimatedSection delay={0.2} className="flex items-center"><i className="fa-solid fa-shield-halved text-primary text-xl w-10"></i> SECURITY-FIRST <br/>BY DESIGN</AnimatedSection>
                    <div className="hidden md:block w-px h-8 bg-slate-800"></div>
                    <AnimatedSection delay={0.3} className="flex items-center"><i className="fa-solid fa-globe text-primary text-xl w-10"></i> OPERATIONAL <br/>SOVEREIGNTY</AnimatedSection>
                    <div className="hidden lg:block w-px h-8 bg-slate-800"></div>
                    <AnimatedSection delay={0.4} className="flex items-center"><i className="fa-regular fa-circle-check text-primary text-xl w-10"></i> ENTERPRISE-GRADE <br/>RELIABILITY</AnimatedSection>
                </Container>
            </div>

            <section className="py-24 bg-slate-50">
                <Container>
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Business Pillars</h2>
                            <p className="text-lg text-slate-500">End-to-end solutions across communication, cloud, security and infrastructure.</p>
                        </AnimatedSection>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { icon: "fa-cloud", title: "Enterprise Cloud", desc: "IaaS, PaaS, Private Cloud, Hybrid Cloud.", link: "/solutions/cloud" },
                            { icon: "fa-comments", title: "Enterprise Communications", desc: "VoIP, Hosted PBX, SIP Trunking, Video.", link: "/solutions/communications" },
                            { icon: "fa-cubes", title: "Enterprise Applications", desc: "SAP, Salesforce, ERP, CRM, Integration.", link: "/solutions/applications" },
                            { icon: "fa-server", title: "Managed Operations", desc: "System administration, NOC, automation.", link: "/solutions/managed-operations" },
                            { icon: "fa-shield-halved", title: "Cybersecurity", desc: "SOC, threat detection, Zero Trust.", link: "/solutions/cybersecurity" },
                            { icon: "fa-network-wired", title: "IoT & Edge", desc: "Intelligent Edge, IoT platforms.", link: "/solutions/iot-edge" },
                            { icon: "fa-briefcase", title: "Business Operations", desc: "BPO/KPO, workflow automation.", link: "/solutions/bpo" }
                        ].map((item, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1} direction="up" className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]">
                                <Link href={item.link} className="block h-full group">
                                    <div className="h-full bg-white p-8 rounded-2xl border border-slate-200 group-hover:border-primary/30 group-hover:shadow-xl transition-all flex flex-col items-start relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                                        <div className="p-4 rounded-xl bg-blue-50 text-primary mb-6 relative z-10 group-hover:bg-primary group-hover:text-white transition-colors">
                                            <i className={`fa-solid ${item.icon} text-2xl`}></i>
                                        </div>
                                        <h3 className="font-bold text-slate-900 text-lg mb-3 relative z-10 group-hover:text-primary transition-colors">{item.title}</h3>
                                        <p className="text-sm text-slate-500 mb-6 flex-grow relative z-10">{item.desc}</p>
                                        <span className="text-primary text-xs font-bold uppercase tracking-wider flex items-center relative z-10">
                                            Learn More <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                                        </span>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/media/mesh.svg')] bg-repeat opacity-[0.03]"></div>
                <Container className="relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/3">
                            <AnimatedSection direction="right">
                                <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-lg relative">
                                    <div className="absolute -top-6 -left-6 text-6xl text-slate-200 opacity-50"><i className="fa-solid fa-quote-left"></i></div>
                                    <h2 className="text-3xl font-bold text-slate-900 mb-6">About CloudCom</h2>
                                    <p className="text-base text-slate-600 mb-8 leading-relaxed">CloudCom is an Enterprise Digital Infrastructure & Technology Operations company helping organizations modernize, secure, and operate mission-critical digital platforms.</p>
                                    <Link href="/company" className="bg-primary hover:bg-primaryHover text-white px-6 py-3 rounded-md font-bold transition-all shadow-md inline-flex items-center">
                                        More About Us <i className="fa-solid fa-arrow-right ml-2"></i>
                                    </Link>
                                </div>
                            </AnimatedSection>
                        </div>
                        
                        <div className="lg:w-2/3">
                            <div className="text-center lg:text-left mb-10">
                                <AnimatedSection direction="up">
                                    <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-3">Our Technology Philosophy</span>
                                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Principles That Guide Everything We Build</h3>
                                </AnimatedSection>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
                                {[
                                    { icon: "fa-code", title: "Open Standards", desc: "Promote interoperability and flexibility." },
                                    { icon: "fa-puzzle-piece", title: "Interoperability", desc: "Work with existing investments." },
                                    { icon: "fa-shield-halved", title: "Vendor Neutrality", desc: "Avoid vendor lock-in." },
                                    { icon: "fa-cloud-arrow-up", title: "Infrastructure Portability", desc: "Control where systems operate." },
                                    { icon: "fa-flag", title: "Operational Sovereignty", desc: "Retain ownership." },
                                    { icon: "fa-lock", title: "Security-First", desc: "Security integrated from day one." },
                                    { icon: "fa-layer-group", title: "Scalable Architecture", desc: "Grow seamlessly." },
                                    { icon: "fa-medal", title: "Enterprise Reliability", desc: "High availability." }
                                ].map((item, idx) => (
                                    <AnimatedSection key={idx} delay={idx * 0.05} direction="up" className="text-center md:text-left">
                                        <div className="w-12 h-12 mx-auto md:mx-0 rounded-xl bg-blue-50 text-primary flex items-center justify-center text-xl mb-4 border border-blue-100">
                                            <i className={`fa-solid ${item.icon}`}></i>
                                        </div>
                                        <h4 className="font-bold text-slate-900 text-sm mb-2">{item.title}</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-32 text-center border-t border-slate-100 pt-16">
                        <AnimatedSection>
                            <h3 className="text-sm font-bold text-slate-400 mb-8 uppercase tracking-widest">Trusted Technology Ecosystem</h3>
                            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 opacity-70">
                                {["AWS", "Azure", "Private Cloud", "Linux", "Kubernetes", "SAP", "Salesforce", "PostgreSQL", "Docker", "AI", "IoT", "Security"].map((tech, i) => (
                                    <span key={i} className="text-xl font-extrabold text-slate-400 hover:text-primary transition-colors cursor-default">{tech}</span>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            <section className="py-24 bg-slate-900/70 relative overflow-hidden">
                <Container className="relative z-10">
                    <div className="text-center mb-16">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
                            <p className="text-slate-400 text-lg max-w-2xl mx-auto">We provide tailored infrastructure and operations for highly regulated and mission-critical sectors.</p>
                        </AnimatedSection>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: "fa-heart-pulse", title: "Healthcare", slug: "healthcare" },
                            { icon: "fa-building-columns", title: "Finance & Banking", slug: "banking" },
                            { icon: "fa-industry", title: "Manufacturing", slug: "manufacturing" },
                            { icon: "fa-store", title: "Retail & E-commerce", slug: "retail" },
                            { icon: "fa-graduation-cap", title: "Education", slug: "education" },
                            { icon: "fa-user-tie", title: "Professional Services", slug: "professional-services" },
                            { icon: "fa-truck-fast", title: "Logistics & Transportation", slug: "logistics" },
                            { icon: "fa-landmark", title: "Government & Public Sector", slug: "government" }
                        ].map((item, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.05} direction="up">
                                <Link href={`/industries/${item.slug}`} className="flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-primary hover:border-primary transition-all group cursor-pointer h-full backdrop-blur-sm">
                                    <i className={`fa-solid ${item.icon} text-4xl text-slate-400 group-hover:text-white mb-4 transition-colors`}></i>
                                    <span className="font-bold text-slate-300 group-hover:text-white transition-colors text-center">{item.title}</span>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>

                    <div className="mt-24 text-center">
                        <AnimatedSection direction="up" delay={0.2}>
                            <h3 className="text-2xl font-bold text-white mb-6">Explore Our Resources</h3>
                            <Link href="/resources" className="bg-transparent hover:bg-white text-white hover:text-slate-900 border-2 border-white px-10 py-4 rounded-md font-bold transition-all shadow-lg inline-block">
                                Explore All Resources <i className="fa-solid fa-arrow-right ml-2"></i>
                            </Link>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>
        </div>
    );
}
