import React from 'react';
import Link from 'next/link';
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { 
    CheckCircle2, 
    ShieldCheck, 
    Rocket, 
    Landmark, 
    GraduationCap, 
    HeartPulse, 
    Building2, 
    Building,
    Clock,
    TrendingUp,
    PiggyBank,
    BarChart3
} from 'lucide-react';

export default function IndustriesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* HERO SECTION */}
            <section className="bg-dark-navy pt-32 pb-24 relative overflow-hidden text-white">
                <div className="absolute inset-0 opacity-10 bg-[url('/media/mesh.svg')] mix-blend-overlay"></div>
                <Container className="relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
                        <div className="lg:w-[55%] xl:w-3/5">
                            <AnimatedSection direction="up">
                                <div className="text-cloud-blue font-bold tracking-widest text-xs uppercase mb-4">INDUSTRIES WE SERVE</div>
                                <h1 className="text-4xl md:text-5xl lg:text-[52px] xl:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">
                                    Technology that understands your world.
                                    <span className="block text-cloud-blue mt-2">Solutions that move your mission forward.</span>
                                </h1>
                                <p className="text-lg text-blue-100/80 mb-12 leading-relaxed max-w-xl font-light">
                                    CloudCom partners with organisations across industries to design, build, secure and operate technology that is open, sovereign, secure and future-ready.
                                </p>
                                
                                <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                                    <div className="flex items-start gap-3">
                                        <ShieldCheck className="w-6 h-6 text-cloud-blue flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-white text-sm">Open. Sovereign. Secure.</h4>
                                            <p className="text-xs text-blue-100/60 mt-1">Technology you can trust and have control over.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Rocket className="w-6 h-6 text-cloud-blue flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-white text-sm">Lean. Agile. AI-Enabled.</h4>
                                            <p className="text-xs text-blue-100/60 mt-1">Faster outcomes. Greater flexibility. Lower overhead.</p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                        <div className="lg:w-[45%] xl:w-2/5 hidden lg:block relative">
                            <AnimatedSection direction="left" delay={0.2} className="relative h-[400px] flex items-center justify-end xl:justify-center">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cloud-blue/20 rounded-full blur-[100px]"></div>
                                <div className="relative grid grid-cols-2 gap-4 xl:gap-6 w-full max-w-[380px]">
                                    <div className="bg-[#0039a6]/20 border border-[#0039a6]/50 p-5 rounded-xl backdrop-blur-sm flex flex-col items-center justify-center gap-3 text-center shadow-lg">
                                        <ShieldCheck className="w-8 h-8 text-cloud-blue" />
                                        <span className="text-sm font-semibold text-white/90">Secure Infrastructure</span>
                                    </div>
                                    <div className="bg-[#0039a6]/20 border border-[#0039a6]/50 p-5 rounded-xl backdrop-blur-sm flex flex-col items-center justify-center gap-3 text-center shadow-lg">
                                        <Rocket className="w-8 h-8 text-cloud-blue" />
                                        <span className="text-sm font-semibold text-white/90">Operational Excellence</span>
                                    </div>
                                    <div className="bg-[#0039a6]/20 border border-[#0039a6]/50 p-5 rounded-xl backdrop-blur-sm flex flex-col items-center justify-center gap-3 text-center shadow-lg">
                                        <BarChart3 className="w-8 h-8 text-cloud-blue" />
                                        <span className="text-sm font-semibold text-white/90">Data Sovereignty</span>
                                    </div>
                                    <div className="bg-[#0039a6]/20 border border-[#0039a6]/50 p-5 rounded-xl backdrop-blur-sm flex flex-col items-center justify-center gap-3 text-center shadow-lg">
                                        <TrendingUp className="w-8 h-8 text-cloud-blue" />
                                        <span className="text-sm font-semibold text-white/90">Scalable Solutions</span>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </Container>
            </section>

            {/* MAIN CONTENT */}
            <section className="py-24 bg-slate-50 relative z-20">
                <Container>
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <AnimatedSection direction="up">
                            <span className="text-cloud-blue font-bold tracking-widest text-xs uppercase mb-4 block">INDUSTRIES</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-dark-navy mb-6">Solutions tailored to industry realities.</h2>
                            <p className="text-lg text-slate-500">
                                Every industry has unique challenges. CloudCom combines deep technology expertise, modern platforms and lean delivery to help you achieve your goals - faster and smarter.
                            </p>
                        </AnimatedSection>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                        {[
                            { 
                                icon: <Landmark className="w-8 h-8 text-cloud-blue" />, 
                                title: "Government & Public Sector", 
                                desc: "Secure, transparent and citizen-centric digital services built on open and sovereign technologies.", 
                                checks: ["Digital transformation & e-Governance", "Data sovereignty & security", "Secure communication & collaboration", "IT infrastructure modernisation"],
                                slug: "government" 
                            },
                            { 
                                icon: <GraduationCap className="w-8 h-8 text-cloud-blue" />, 
                                title: "Education", 
                                desc: "Empowering institutions with secure, scalable and collaborative technology for better learning outcomes.", 
                                checks: ["Digital campus & collaboration", "Learning platforms & LMS", "Secure data & identity management", "Cloud infrastructure for education"],
                                slug: "education" 
                            },
                            { 
                                icon: <HeartPulse className="w-8 h-8 text-cloud-blue" />, 
                                title: "Healthcare", 
                                desc: "Deliver better care with secure data, connected systems and intelligent digital infrastructure.", 
                                checks: ["Electronic health records (EHR)", "Telemedicine & virtual care", "Data security & compliance", "High-availability infrastructure"],
                                slug: "healthcare" 
                            },
                            { 
                                icon: <Building2 className="w-8 h-8 text-cloud-blue" />, 
                                title: "BFSI", 
                                desc: "Strengthen resilience, ensure compliance and deliver trusted digital experiences across financial services.", 
                                checks: ["Secure infrastructure & networks", "Regulatory compliance & risk management", "Data protection & governance", "Business continuity & DR"],
                                slug: "bfsi" 
                            },
                            { 
                                icon: <Building className="w-8 h-8 text-cloud-blue" />, 
                                title: "Enterprises", 
                                desc: "Modernise operations, improve agility and drive growth with secure and scalable technology.", 
                                checks: ["Cloud & hybrid infrastructure", "Process automation & integration", "Collaboration & productivity", "IT operations & optimisation"],
                                slug: "enterprises" 
                            },
                            { 
                                icon: <Rocket className="w-8 h-8 text-cloud-blue" />, 
                                title: "Startups & SMEs", 
                                desc: "Do more with less. Scalable, flexible and cost-efficient technology to help you launch, grow and scale.", 
                                checks: ["Cloud infrastructure & hosting", "DevOps & automation", "Security & compliance essentials", "Cost optimisation & managed support"],
                                slug: "startups" 
                            }
                        ].map((item, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1} direction="up" className="h-full">
                                <div className="bg-white rounded-2xl border border-slate-200 p-8 h-full flex flex-col hover:border-cloud-blue/30 hover:shadow-xl hover:shadow-cloud-blue/5 transition-all group">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-cloud-blue group-hover:text-white transition-colors">
                                            {React.cloneElement(item.icon, { className: "w-7 h-7" })}
                                        </div>
                                        <div className="pt-2">
                                            <h3 className="text-xl font-bold text-dark-navy">{item.title}</h3>
                                        </div>
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
                                    
                                    <ul className="space-y-3 mb-8">
                                        {item.checks.map((check, i) => (
                                            <li key={i} className="flex items-start text-xs font-medium text-slate-700">
                                                <CheckCircle2 className="w-4 h-4 text-cloud-blue mr-3 flex-shrink-0 mt-0.5" />
                                                <span className="leading-snug">{check}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    <Link href={`/industries/${item.slug}`} className="text-cloud-blue text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                                        Learn more <i className="fa-solid fa-arrow-right text-xs"></i>
                                    </Link>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* HORIZONTAL FEATURE BAR */}
                    <AnimatedSection direction="up" delay={0.3}>
                        <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm flex flex-col lg:flex-row gap-12 items-center justify-between">
                            <div className="lg:w-1/3 text-center lg:text-left">
                                <h3 className="text-2xl font-bold text-dark-navy mb-2">A different kind of technology partner.</h3>
                                <p className="text-cloud-blue font-bold">Enterprise capability.<br/><span className="text-dark-navy">Without enterprise overhead.</span></p>
                            </div>
                            
                            <div className="lg:w-2/3 flex flex-wrap justify-between gap-8">
                                <div className="flex flex-col items-center text-center max-w-[120px]">
                                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-cloud-blue mb-4">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-dark-navy text-sm mb-2">Faster Response</h4>
                                    <p className="text-[10px] text-slate-500 leading-relaxed">Short decision paths means faster action and delivery.</p>
                                </div>
                                <div className="flex flex-col items-center text-center max-w-[120px]">
                                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-cloud-blue mb-4">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-dark-navy text-sm mb-2">Greater Flexibility</h4>
                                    <p className="text-[10px] text-slate-500 leading-relaxed">Adapt quickly to changing needs and emerging opportunities.</p>
                                </div>
                                <div className="flex flex-col items-center text-center max-w-[120px]">
                                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-cloud-blue mb-4">
                                        <PiggyBank className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-dark-navy text-sm mb-2">Lower Overhead</h4>
                                    <p className="text-[10px] text-slate-500 leading-relaxed">Optimised operations reduce cost and maximise value.</p>
                                </div>
                                <div className="flex flex-col items-center text-center max-w-[120px]">
                                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-cloud-blue mb-4">
                                        <BarChart3 className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-dark-navy text-sm mb-2">Better Outcomes</h4>
                                    <p className="text-[10px] text-slate-500 leading-relaxed">Aligned solutions that deliver measurable business impact.</p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>
        </div>
    );
}
