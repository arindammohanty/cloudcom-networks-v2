import React from 'react';
import Link from 'next/link';
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { 
    ArrowRight, Shield, Cloud, MessageSquare, Cpu, Settings,
    Lock, Unlock, Layers, Target, Users, CheckCircle2, ShieldCheck,
    Check, Zap, Server, Activity, Database, LineChart, Globe, 
    Search, PenTool, CloudLightning, Gauge, ChevronRight, Fingerprint, Flag
} from 'lucide-react';

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* HERO SECTION */}
            <section className="relative pt-24 pb-20 overflow-hidden bg-slate-50 flex items-center min-h-[90vh]">
                {/* Enhanced glowing backgrounds */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-cloud-blue/10 via-cloud-blue/5 to-transparent rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-100/50 to-transparent rounded-full blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
                
                <Container className="relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="lg:w-[55%]">
                            <AnimatedSection direction="up" delay={0.1}>
                                <div className="text-sm md:text-base font-bold text-cloud-blue mb-6 tracking-wide uppercase">
                                    Enterprise capabilities delivered without the corporate complexity.
                                </div>
                            </AnimatedSection>
                            
                            <AnimatedSection direction="up" delay={0.2}>
                                <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-dark-navy mb-8 leading-[1.05] tracking-tight">
                                    <span className="block mb-2">Build. Connect.</span>
                                    <span className="block text-cloud-blue">Secure. Scale.</span>
                                </h1>
                            </AnimatedSection>
                            
                            <AnimatedSection direction="up" delay={0.3}>
                                <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl text-balance font-light">
                                    By integrating open technologies with AI-driven engineering, CloudCom enables organisations to develop resilient digital infrastructure that is both flexible and cost-effective.
                                </p>
                            </AnimatedSection>
                            
                            <AnimatedSection direction="up" delay={0.4}>
                                <div className="flex flex-col sm:flex-row gap-5 items-center">
                                    <Link href="/solutions" className="w-full sm:w-auto bg-cloud-blue hover:bg-cloud-blue-hover text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all text-center flex items-center justify-center gap-3 shadow-lg shadow-cloud-blue/30 hover:scale-[1.02]">
                                        Explore Solutions <ArrowRight className="w-5 h-5" />
                                    </Link>
                                    <span className="hidden sm:inline text-slate-300 mx-2">|</span>
                                    <Link href="/contact" className="w-full sm:w-auto text-dark-navy hover:text-cloud-blue px-8 py-4 font-semibold text-lg transition-all text-center flex items-center justify-center gap-2 group">
                                        Talk to CloudCom <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection direction="up" delay={0.5}>
                                <div className="mt-14 text-sm md:text-base font-semibold text-slate-500 flex flex-wrap gap-x-4 gap-y-3 items-center">
                                    <span className="text-dark-navy">OPEN STANDARDS & INTEROPERABILITY</span> 
                                    <span className="w-1 h-1 rounded-full bg-slate-400"></span> 
                                    <span className="text-dark-navy">SECURITY-FIRST BY DESIGN</span>
                                    <span className="w-1 h-1 rounded-full bg-slate-400 hidden lg:block"></span> 
                                    <span className="text-dark-navy">OPERATIONAL SOVEREIGNTY</span>
                                    <span className="w-1 h-1 rounded-full bg-slate-400"></span> 
                                    <span className="text-dark-navy">ENTERPRISE-GRADE RELIABILITY</span>
                                </div>
                            </AnimatedSection>
                        </div>
                        
                        <div className="lg:w-[45%] w-full">
                             <AnimatedSection direction="left" delay={0.4} className="relative w-full h-full">
                                {/* Enhanced Abstract Graphic Representation */}
                                <div className="relative w-full aspect-square max-w-lg mx-auto">
                                    {/* Central glowing core */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cloud-blue/20 rounded-full blur-[80px]"></div>
                                    
                                    {/* Main Container Layer */}
                                    <div className="absolute inset-4 rounded-3xl bg-white/40 backdrop-blur-3xl border border-white/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] p-6 flex flex-col gap-4 z-10">
                                        
                                        {/* Top Data Bar */}
                                        <div className="w-full h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center px-6 gap-4">
                                            <div className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)] animate-pulse"></div>
                                            <div className="h-2.5 w-1/3 bg-slate-100 rounded-full"></div>
                                            <div className="h-2.5 w-1/4 bg-slate-50 rounded-full ml-auto"></div>
                                        </div>

                                        {/* Grid Layout */}
                                        <div className="flex-1 grid grid-cols-2 gap-4">
                                            {/* Left Column */}
                                            <div className="flex flex-col gap-4">
                                                <div className="flex-1 bg-gradient-to-br from-cloud-blue to-dark-navy rounded-2xl p-6 shadow-xl relative overflow-hidden group">
                                                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                                                    <Server className="w-10 h-10 text-white mb-auto" />
                                                    <div className="mt-8 space-y-3">
                                                        <div className="h-2 w-full bg-white/20 rounded-full"></div>
                                                        <div className="h-2 w-2/3 bg-white/20 rounded-full"></div>
                                                    </div>
                                                </div>
                                                <div className="h-1/3 bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center justify-between">
                                                    <Shield className="w-8 h-8 text-cloud-blue" />
                                                    <div className="flex gap-1">
                                                        {[1,2,3,4].map(i => <div key={i} className="w-1.5 h-6 bg-slate-100 rounded-full"></div>)}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right Column */}
                                            <div className="flex flex-col gap-4 pt-8">
                                                <div className="h-1/3 bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                                                        <Activity className="w-5 h-5 text-cloud-blue" />
                                                    </div>
                                                    <div className="flex-1 space-y-2">
                                                        <div className="h-2 w-full bg-slate-100 rounded-full"></div>
                                                        <div className="h-2 w-1/2 bg-slate-100 rounded-full"></div>
                                                    </div>
                                                </div>
                                                <div className="flex-1 bg-white rounded-2xl p-6 border border-slate-100 shadow-lg relative overflow-hidden">
                                                    <div className="absolute inset-0 bg-[url('/media/mesh.svg')] opacity-5"></div>
                                                    <Database className="w-10 h-10 text-slate-800 mb-6 relative z-10" />
                                                    <div className="space-y-4 relative z-10">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-2 h-2 rounded-full bg-cloud-blue"></div>
                                                            <div className="h-2 flex-1 bg-slate-100 rounded-full"></div>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-2 h-2 rounded-full bg-cloud-blue"></div>
                                                            <div className="h-2 flex-1 bg-slate-100 rounded-full"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Decorative floating elements */}
                                    <div className="absolute -left-6 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 z-20 animate-[bounce_4s_infinite]">
                                        <Lock className="w-6 h-6 text-cloud-blue" />
                                    </div>
                                    <div className="absolute -right-4 bottom-1/4 bg-dark-navy p-4 rounded-2xl shadow-xl z-20 animate-[bounce_5s_infinite_0.5s]">
                                        <Cpu className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                             </AnimatedSection>
                        </div>
                    </div>
                </Container>
            </section>

            {/* TRUSTED BY / PARTNERS SECTION */}
            <section className="py-10 bg-white border-b border-slate-100">
                <Container>
                    <div className="text-center">
                        <p className="text-sm md:text-base font-semibold text-slate-500 mb-6 tracking-wide">Trusted by organisations that value security, performance and partnership.</p>
                        <div className="flex flex-wrap justify-center items-center gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-4 text-sm md:text-base font-semibold text-slate-700">
                            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-cloud-blue" /> Security by Design</div>
                            <div className="hidden xl:block w-1 h-1 rounded-full bg-slate-300"></div>
                            <div className="flex items-center gap-2"><Unlock className="w-5 h-5 text-cloud-blue" /> Open & Standards-Based</div>
                            <div className="hidden xl:block w-1 h-1 rounded-full bg-slate-300"></div>
                            <div className="flex items-center gap-2"><Users className="w-5 h-5 text-cloud-blue" /> Customer First</div>
                            <div className="hidden xl:block w-1 h-1 rounded-full bg-slate-300"></div>
                            <div className="flex items-center gap-2"><Target className="w-5 h-5 text-cloud-blue" /> Outcome Driven</div>
                            <div className="hidden xl:block w-1 h-1 rounded-full bg-slate-300"></div>
                            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-cloud-blue" /> Long-Term Partnership</div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* BUILT DIFFERENTLY CARDS (From PDF Page 3) */}
            <section className="py-16 bg-slate-50 border-b border-slate-100">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { title: "Lean & Agile", desc: "Short decision paths. Faster decisions. Faster delivery.", icon: <Zap /> },
                            { title: "AI-Enabled", desc: "Modern tools that amplify our people and accelerate delivery.", icon: <Cpu /> },
                            { title: "Secure by Design", desc: "Security built in, not bolted on. Zero Trust approach.", icon: <Shield /> },
                            { title: "Cost-Efficient", desc: "Better outcomes with lower overhead and optimal cost.", icon: <LineChart /> },
                            { title: "Built for Scale", desc: "Architectures that grow with your business and adapt to change.", icon: <Layers /> }
                        ].map((item, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1} direction="up" className="h-full">
                                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full flex flex-col hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-cloud-blue flex items-center justify-center mb-4">
                                        {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: "w-5 h-5" })}
                                    </div>
                                    <h4 className="font-bold text-dark-navy mb-2">{item.title}</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* WHAT CLOUDCOM DOES SECTION */}
            <section className="py-32 bg-white relative">
                <Container>
                    <div className="text-center mb-20">
                        <AnimatedSection>
                            <h2 className="text-4xl md:text-5xl font-bold text-dark-navy mb-6 tracking-tight">Technology that works together.</h2>
                            <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">We bring together the essential building blocks of modern digital infrastructure to help organisations connect, protect and grow with confidence.</p>
                        </AnimatedSection>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {[
                            { icon: <Cloud className="w-12 h-12" />, title: "Cloud Infrastructure", desc: "Scalable compute, storage, hosting and cloud environments.", link: "/solutions#cloud" },
                            { icon: <MessageSquare className="w-12 h-12" />, title: "Unified Communications", desc: "Modern voice, video, messaging and collaboration.", link: "/solutions#communications" },
                            { icon: <Shield className="w-12 h-12" />, title: "Cybersecurity", desc: "Security-first infrastructure, protection and monitoring.", link: "/solutions#security" },
                            { icon: <Settings className="w-12 h-12" />, title: "Managed Infrastructure", desc: "Reliable operation, monitoring and management of IT environments.", link: "/solutions#managed" },
                            { icon: <Cpu className="w-12 h-12" />, title: "AI & Automation", desc: "Intelligent automation and AI solutions to improve productivity and decisions.", link: "/solutions#ai" }
                        ].map((item, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1} direction="up" className="h-full">
                                <div className="h-full bg-white p-10 rounded-3xl border border-slate-100 hover:border-cloud-blue/30 shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer relative overflow-hidden">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-cloud-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="mb-8 text-cloud-blue bg-blue-50/80 p-5 rounded-2xl group-hover:bg-cloud-blue group-hover:text-white transition-colors duration-300">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-bold text-dark-navy text-xl mb-4 leading-tight">{item.title}</h3>
                                    <div className="w-8 h-1 bg-slate-100 rounded-full mb-4 group-hover:bg-cloud-blue/20 transition-colors"></div>
                                    <p className="text-base text-slate-500 mb-8 flex-grow leading-relaxed">{item.desc}</p>
                                    <Link href={item.link} className="text-cloud-blue font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                                        Explore <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* OUR APPROACH - FROM PROBLEM TO PRODUCTION (Added from PDF page 5/9) */}
            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <Container>
                    <div className="text-center mb-16">
                        <AnimatedSection>
                            <span className="text-cloud-blue font-bold tracking-widest uppercase text-sm mb-4 block">Our Approach</span>
                            <h2 className="text-4xl font-bold text-dark-navy tracking-tight">From problem to production.</h2>
                        </AnimatedSection>
                    </div>

                    <div className="flex flex-col md:flex-row items-start justify-between relative max-w-5xl mx-auto">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-12 right-12 h-0.5 bg-slate-200 z-0 border-t-2 border-dashed border-slate-300"></div>

                        {[
                            { num: "01", icon: <Search className="w-8 h-8" />, title: "Understand", desc: "We understand your business, challenges, users and objectives." },
                            { num: "02", icon: <PenTool className="w-8 h-8" />, title: "Architect", desc: "We design a secure, scalable and practical technology architecture." },
                            { num: "03", icon: <CloudLightning className="w-8 h-8" />, title: "Deploy", desc: "We implement, integrate, migrate and test to bring it to life." },
                            { num: "04", icon: <Gauge className="w-8 h-8" />, title: "Operate", desc: "We monitor, manage and optimise to keep your environment running." }
                        ].map((step, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.15} direction="up" className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4 px-4 mb-10 md:mb-0">
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center text-cloud-blue mb-6 relative">
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-cloud-blue text-white flex items-center justify-center text-sm font-bold border-2 border-white">
                                        {step.num}
                                    </div>
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-dark-navy mb-3">{step.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">{step.desc}</p>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* WHY CLOUDCOM SECTION (Fully detailed from PDF page 8/9) */}
            <section className="py-32 bg-dark-navy text-white relative overflow-hidden">
                {/* Background mesh/pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-dark-navy to-dark-navy"></div>
                <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('/media/mesh.svg')] opacity-[0.05] pointer-events-none mix-blend-overlay"></div>
                
                <Container className="relative z-10">
                    <div className="text-center lg:text-left mb-20">
                        <AnimatedSection direction="up">
                            <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">Why CloudCom</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight max-w-3xl">
                                Technology built <span className="text-cloud-blue">around your business.</span>
                            </h2>
                            <p className="text-blue-100/70 text-xl mt-6 leading-relaxed max-w-2xl">
                                We combine open technology, strong security and practical engineering to build digital infrastructure you can trust and grow on&mdash;today and tomorrow.
                            </p>
                        </AnimatedSection>
                    </div>
                        
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {[
                            { 
                                icon: <Unlock className="w-8 h-8" />, 
                                title: "Open & Flexible", 
                                desc: "Technology choices without unnecessary vendor lock-in. We use open technologies and standards to give you freedom and control.",
                                checks: ["Freedom of choice", "Interoperable & portable", "Future-ready architecture"]
                            },
                            { 
                                icon: <Shield className="w-8 h-8" />, 
                                title: "Secure by Design", 
                                desc: "Security integrated into every layer of our architecture, operations and services—from infrastructure to identity.",
                                checks: ["Zero Trust principles", "Identity & access control", "Continuous protection"]
                            },
                            { 
                                icon: <Layers className="w-8 h-8" />, 
                                title: "Built for Scale", 
                                desc: "Architectures designed to grow with your organisation—supporting more users, more data and more possibilities.",
                                checks: ["Elastic & resilient", "High availability", "Performance at scale"]
                            },
                            { 
                                icon: <Target className="w-8 h-8" />, 
                                title: "Practical Technology", 
                                desc: "Solutions focused on business outcomes and measurable impact—not technology for its own sake.",
                                checks: ["Business-first approach", "Sustainable & efficient", "Measurable impact"]
                            }
                        ].map((item, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1} direction="up" className="h-full">
                                <div className="bg-white rounded-3xl p-8 h-full flex flex-col text-slate-800 shadow-2xl relative">
                                    <div className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-cloud-blue text-white flex items-center justify-center font-bold text-sm shadow-lg">
                                        0{idx + 1}
                                    </div>
                                    <div className="w-16 h-16 rounded-2xl bg-dark-navy text-white flex items-center justify-center mb-8 mt-2">
                                        {item.icon}
                                    </div>
                                    <h4 className="font-bold text-2xl mb-4 text-dark-navy">{item.title}</h4>
                                    <p className="text-slate-600 leading-relaxed mb-8 flex-grow">{item.desc}</p>
                                    
                                    <ul className="space-y-3">
                                        {item.checks.map((check, i) => (
                                            <li key={i} className="flex items-center text-sm font-semibold text-slate-700">
                                                <CheckCircle2 className="w-5 h-5 text-cloud-blue mr-3 flex-shrink-0" />
                                                {check}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Open Source Banner from PDF Page 8/9 */}
                    <AnimatedSection direction="up" delay={0.4}>
                        <div className="bg-gradient-to-r from-cloud-blue to-[#0039a6] rounded-3xl p-8 md:p-12 border border-blue-400/30 flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden">
                            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                                <Globe className="w-64 h-64 -mb-16 -mr-16" />
                            </div>
                            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 flex-shrink-0">
                                <Flag className="w-10 h-10 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Open Source. Digital Sovereignty. Your Advantage.</h3>
                                <p className="text-blue-100 text-lg leading-relaxed max-w-4xl">
                                    By embracing OSS and digital sovereignty principles, we help organisations retain control over their data, reduce licensing costs and build a more resilient future.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>
            
            {/* CTA SECTION */}
            <section className="py-24 bg-white text-center border-t border-slate-100">
                <Container>
                    <AnimatedSection direction="up">
                        <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 border border-slate-200 shadow-xl overflow-hidden relative">
                            {/* Decorative background elements inside CTA */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cloud-blue/5 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-dark-navy/5 rounded-full blur-3xl"></div>
                            
                            <div className="relative z-10">
                                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-dark-navy tracking-tight">Let's solve the technology problem.</h2>
                                <p className="text-slate-600 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                                    Tell us what you're trying to achieve. Our experts will help you understand your options and identify the best way forward.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <Link href="/contact" className="bg-cloud-blue text-white hover:bg-dark-navy px-10 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1">
                                        Talk to CloudCom <ArrowRight className="w-5 h-5" />
                                    </Link>
                                    <Link href="/solutions" className="bg-white text-dark-navy border-2 border-slate-200 hover:border-dark-navy px-10 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 hover:-translate-y-1">
                                        Explore Solutions
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>
        </div>
    );
}
