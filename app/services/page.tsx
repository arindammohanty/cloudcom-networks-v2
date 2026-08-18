import React from 'react';
import Link from 'next/link';
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { 
    ArrowRight, 
    Play,
    Zap,
    Cpu,
    Shield,
    LineChart,
    Users,
    Settings,
    Server,
    ShieldCheck,
    Cloud,
    Headset,
    Search,
    PenTool,
    Box,
    Activity,
    Repeat,
    CheckCircle2,
    Rocket,
    Brain,
    PiggyBank
} from 'lucide-react';

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* HERO SECTION */}
            <section className="relative pt-24 pb-32 overflow-hidden bg-dark-navy text-white flex items-center min-h-[80vh]">
                <div className="absolute inset-0 bg-[url('/media/mesh.svg')] opacity-[0.03] mix-blend-overlay"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-cloud-blue/10 via-cloud-blue/5 to-transparent rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/4"></div>
                
                <Container className="relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="lg:w-1/2">
                            <AnimatedSection direction="up" delay={0.1}>
                                <div className="text-sm font-bold text-cloud-blue mb-4 tracking-wider uppercase">
                                    How We Help
                                </div>
                            </AnimatedSection>
                            
                            <AnimatedSection direction="up" delay={0.2}>
                                <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                                    From strategy to <br />
                                    operations. We make <br />
                                    technology <span className="text-cloud-blue">simple to run.</span>
                                </h1>
                            </AnimatedSection>
                            
                            <AnimatedSection direction="up" delay={0.3}>
                                <p className="text-lg md:text-xl text-blue-100/80 mb-10 leading-relaxed font-light">
                                    CloudCom delivers end-to-end services to design, build, secure, operate and optimise modern digital infrastructure — with a lean, agile and AI-enabled approach.
                                </p>
                            </AnimatedSection>
                            
                            <AnimatedSection direction="up" delay={0.4}>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/contact" className="w-full sm:w-auto bg-cloud-blue hover:bg-cloud-blue-hover text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all text-center flex items-center justify-center gap-2 shadow-lg shadow-cloud-blue/20">
                                        Talk to CloudCom <ArrowRight className="w-5 h-5" />
                                    </Link>
                                    <Link href="#approach" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all text-center flex items-center justify-center gap-2 backdrop-blur-sm">
                                        <Play className="w-5 h-5 text-cloud-blue" /> See How We Work
                                    </Link>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection direction="up" delay={0.5}>
                                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mt-16 p-6 border border-[#0039a6]/50 rounded-2xl bg-dark-navy/80 shadow-[0_0_30px_rgba(0,57,166,0.3)] backdrop-blur-md">
                                    <div className="flex items-center gap-4 group">
                                        <div className="p-3 bg-[#0039a6]/20 rounded-xl border border-[#0039a6]/50 group-hover:bg-[#0039a6]/40 transition-colors">
                                            <Rocket className="w-6 h-6 text-cloud-blue" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-sm">Lean & Agile</h4>
                                            <p className="text-xs text-blue-100/60 mt-0.5">Faster delivery</p>
                                        </div>
                                    </div>
                                    
                                    <div className="hidden lg:block w-px h-10 bg-[#0039a6]/50"></div>
                                    
                                    <div className="flex items-center gap-4 group">
                                        <div className="p-3 bg-[#0039a6]/20 rounded-xl border border-[#0039a6]/50 group-hover:bg-[#0039a6]/40 transition-colors">
                                            <Brain className="w-6 h-6 text-cloud-blue" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-sm">AI-Enabled</h4>
                                            <p className="text-xs text-blue-100/60 mt-0.5">Smarter operations</p>
                                        </div>
                                    </div>
                                    
                                    <div className="hidden lg:block w-px h-10 bg-[#0039a6]/50"></div>
                                    
                                    <div className="flex items-center gap-4 group">
                                        <div className="p-3 bg-[#0039a6]/20 rounded-xl border border-[#0039a6]/50 group-hover:bg-[#0039a6]/40 transition-colors">
                                            <ShieldCheck className="w-6 h-6 text-cloud-blue" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-sm">Secure by Design</h4>
                                            <p className="text-xs text-blue-100/60 mt-0.5">Zero Trust approach</p>
                                        </div>
                                    </div>
                                    
                                    <div className="hidden lg:block w-px h-10 bg-[#0039a6]/50"></div>
                                    
                                    <div className="flex items-center gap-4 group">
                                        <div className="p-3 bg-[#0039a6]/20 rounded-xl border border-[#0039a6]/50 group-hover:bg-[#0039a6]/40 transition-colors">
                                            <PiggyBank className="w-6 h-6 text-cloud-blue" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-sm">Cost-Efficient</h4>
                                            <p className="text-xs text-blue-100/60 mt-0.5">Lower overhead</p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                        
                        <div className="lg:w-1/2 relative hidden lg:block">
                             <AnimatedSection direction="left" delay={0.4} className="relative w-full h-full flex items-center justify-center min-h-[500px]">
                                {/* Hero abstract illustration matching the PDF Services page */}
                                <div className="relative w-[400px] h-[400px]">
                                    {/* Central glowing box */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20">
                                        <div className="bg-dark-navy border border-cloud-blue rounded-2xl p-6 shadow-[0_0_50px_rgba(37,99,235,0.4)] backdrop-blur-md whitespace-nowrap relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-r from-cloud-blue/10 to-transparent"></div>
                                            <h3 className="font-extrabold text-white text-xl tracking-widest relative z-10 mb-2">OPEN. SOVEREIGN. SECURE.</h3>
                                            <h4 className="font-bold text-cloud-blue text-sm tracking-[0.2em] relative z-10">LEAN. AGILE. AI-ENABLED.</h4>
                                        </div>
                                    </div>

                                    {/* Stack of server layers */}
                                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-48 z-10">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="absolute bottom-0 w-full h-20 bg-gradient-to-r from-[#0039a6] to-cloud-blue rounded-xl border border-blue-400/30 transform" style={{ transform: `translateY(-${(i-1)*30}px) scale(${1 - (i-1)*0.05})`, opacity: 1 - (i-1)*0.15, zIndex: 10-i }}>
                                                <div className="flex justify-between items-center h-full px-4 border-l-4 border-blue-400">
                                                    <div className="flex gap-2">
                                                        <div className="w-1.5 h-1.5 bg-blue-200 rounded-full animate-pulse"></div>
                                                        <div className="w-1.5 h-1.5 bg-blue-200 rounded-full"></div>
                                                    </div>
                                                    <div className="w-8 h-2 bg-blue-900/50 rounded-full"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Floating service icons */}
                                    <div className="absolute top-10 left-10 p-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm animate-[bounce_4s_infinite] flex flex-col items-center gap-1 shadow-lg">
                                        <Users className="w-6 h-6 text-cloud-blue" />
                                        <span className="text-[10px] text-white/70 font-semibold">Consulting</span>
                                    </div>
                                    <div className="absolute top-20 right-4 p-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm animate-[bounce_5s_infinite_1s] flex flex-col items-center gap-1 shadow-lg">
                                        <ShieldCheck className="w-6 h-6 text-cloud-blue" />
                                        <span className="text-[10px] text-white/70 font-semibold">Security Services</span>
                                    </div>
                                    <div className="absolute bottom-1/2 left-0 p-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm animate-[bounce_6s_infinite_0.5s] flex flex-col items-center gap-1 shadow-lg">
                                        <Settings className="w-6 h-6 text-cloud-blue" />
                                        <span className="text-[10px] text-white/70 font-semibold">Implementation</span>
                                    </div>
                                    <div className="absolute bottom-20 right-0 p-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm animate-[bounce_4.5s_infinite_1.5s] flex flex-col items-center gap-1 shadow-lg">
                                        <Cloud className="w-6 h-6 text-cloud-blue" />
                                        <span className="text-[10px] text-white/70 font-semibold">Cloud Services</span>
                                    </div>
                                    <div className="absolute -bottom-4 left-20 p-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm animate-[bounce_5.5s_infinite_2s] flex flex-col items-center gap-1 shadow-lg z-20">
                                        <Server className="w-6 h-6 text-cloud-blue" />
                                        <span className="text-[10px] text-white/70 font-semibold">Managed Services</span>
                                    </div>
                                    <div className="absolute -bottom-4 right-20 p-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm animate-[bounce_4s_infinite_0.2s] flex flex-col items-center gap-1 shadow-lg z-20">
                                        <Headset className="w-6 h-6 text-cloud-blue" />
                                        <span className="text-[10px] text-white/70 font-semibold">Support</span>
                                    </div>
                                </div>
                             </AnimatedSection>
                        </div>
                    </div>
                </Container>
            </section>

            {/* SERVICES GRID SECTION */}
            <section className="py-24 bg-slate-50 border-b border-slate-200">
                <Container>
                    <div className="text-center mb-16">
                        <AnimatedSection>
                            <h4 className="text-cloud-blue font-bold tracking-widest uppercase text-sm mb-4">Our Services</h4>
                            <h2 className="text-3xl md:text-5xl font-bold text-dark-navy mb-6 tracking-tight">Complete services across the technology lifecycle</h2>
                            <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
                                We combine deep expertise, modern tools and open technologies to deliver services that are practical, secure, scalable and aligned to your timeline and budget.
                            </p>
                        </AnimatedSection>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { 
                                icon: <Users className="w-8 h-8" />, 
                                color: "text-blue-600",
                                bg: "bg-blue-50",
                                title: "Consulting", 
                                desc: "We help you define the right technology strategy and architecture.",
                                list: ["Technology assessment", "Architecture & design", "Roadmap & planning", "Risk & compliance review"]
                            },
                            { 
                                icon: <Settings className="w-8 h-8" />, 
                                color: "text-teal-600",
                                bg: "bg-teal-50",
                                title: "Implementation", 
                                desc: "We build, integrate and deploy solutions that work for your business.",
                                list: ["Deployment & setup", "Migration & integration", "Configuration & tuning", "Testing & validation"]
                            },
                            { 
                                icon: <Server className="w-8 h-8" />, 
                                color: "text-indigo-600",
                                bg: "bg-indigo-50",
                                title: "Managed Services", 
                                desc: "We operate and optimise your systems for reliability and performance.",
                                list: ["24/7 Monitoring", "Maintenance & patching", "Performance optimisation", "Capacity management"]
                            },
                            { 
                                icon: <ShieldCheck className="w-8 h-8" />, 
                                color: "text-purple-600",
                                bg: "bg-purple-50",
                                title: "Security Services", 
                                desc: "We protect your systems, data and users with a defence-in-depth approach.",
                                list: ["Security architecture", "Hardening & compliance", "Threat monitoring", "Incident response"]
                            },
                            { 
                                icon: <Cloud className="w-8 h-8" />, 
                                color: "text-sky-500",
                                bg: "bg-sky-50",
                                title: "Cloud Services", 
                                desc: "We design, deploy and operate secure, scalable cloud environments.",
                                list: ["Cloud infrastructure", "Hosting & operations", "Backup & DR", "Cost optimisation"]
                            },
                            { 
                                icon: <Headset className="w-8 h-8" />, 
                                color: "text-violet-600",
                                bg: "bg-violet-50",
                                title: "Support", 
                                desc: "We are here when you need us - responsive, reliable and helpful.",
                                list: ["Technical assistance", "Issue resolution", "Service management", "SLA-driven support"]
                            }
                        ].map((item, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1} direction="up" className="h-full">
                                <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col group">
                                    <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="font-bold text-2xl text-dark-navy mb-3">{item.title}</h3>
                                    <p className="text-slate-600 mb-8 leading-relaxed font-medium">{item.desc}</p>
                                    
                                    <ul className="space-y-3 mb-10 flex-grow">
                                        {item.list.map((listItem, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-slate-500 font-medium">
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0"></div>
                                                {listItem}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link href={`/services/${item.title.toLowerCase().replace(/\s+/g, '-')}`} className={`${item.color} font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all pt-6 border-t border-slate-50 mt-auto`}>
                                        Learn more <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* WHY CHOOSE US & OUR APPROACH SECTION */}
            <section id="approach" className="py-24 bg-white relative overflow-hidden">
                <Container>
                    <div className="bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden p-8 md:p-12 lg:p-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                            
                            {/* Left Side: Why Choose CloudCom */}
                            <div>
                                <AnimatedSection direction="up">
                                    <h3 className="text-2xl font-bold text-dark-navy mb-10">Why organisations choose CloudCom</h3>
                                </AnimatedSection>
                                
                                <div className="space-y-8">
                                    {[
                                        { icon: <Zap className="w-6 h-6 text-cloud-blue" />, title: "Lean & Responsive", desc: "Short decision paths mean faster response and quicker delivery." },
                                        { icon: <Cpu className="w-6 h-6 text-cloud-blue" />, title: "AI-Enabled Operations", desc: "Automation and AI improve efficiency, reduce toil and drive better outcomes." },
                                        { icon: <Shield className="w-6 h-6 text-cloud-blue" />, title: "Secure by Design", desc: "Security is built in – across infrastructure, applications and operations." },
                                        { icon: <LineChart className="w-6 h-6 text-cloud-blue" />, title: "Cost-Efficient", desc: "We optimise technology and operations to reduce cost and deliver more value." }
                                    ].map((item, idx) => (
                                        <AnimatedSection key={idx} delay={idx * 0.1} direction="up" className="flex gap-5">
                                            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-dark-navy mb-1">{item.title}</h4>
                                                <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                                            </div>
                                        </AnimatedSection>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side: Our Approach */}
                            <div>
                                <AnimatedSection direction="up" delay={0.2}>
                                    <h3 className="text-2xl font-bold text-dark-navy mb-10">Our approach</h3>
                                </AnimatedSection>
                                
                                <div className="relative mb-16">
                                    {/* Timeline line */}
                                    <div className="absolute top-8 left-6 right-6 h-0.5 border-t border-dashed border-slate-300 hidden md:block"></div>
                                    
                                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                                        {[
                                            { icon: <Search className="w-5 h-5 text-cloud-blue" />, label: "Understand" },
                                            { icon: <PenTool className="w-5 h-5 text-cloud-blue" />, label: "Design" },
                                            { icon: <Box className="w-5 h-5 text-cloud-blue" />, label: "Implement" },
                                            { icon: <Activity className="w-5 h-5 text-cloud-blue" />, label: "Operate" },
                                            { icon: <Repeat className="w-5 h-5 text-cloud-blue" />, label: "Evolve" }
                                        ].map((step, idx) => (
                                            <AnimatedSection key={idx} delay={0.3 + (idx * 0.1)} direction="up" className="relative z-10 flex flex-col items-center">
                                                <div className="w-16 h-16 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-4">
                                                    {step.icon}
                                                </div>
                                                <h5 className="font-bold text-dark-navy text-sm">{step.label}</h5>
                                            </AnimatedSection>
                                        ))}
                                    </div>
                                </div>

                                <AnimatedSection direction="up" delay={0.6}>
                                    <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm">
                                        <div className="flex items-center justify-center w-12 h-12 bg-blue-50 text-cloud-blue rounded-full flex-shrink-0">
                                            <Users className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1 text-center md:text-left">
                                            <h4 className="font-bold text-dark-navy text-sm mb-1">A different kind of technology partner.</h4>
                                            <p className="text-slate-500 text-xs">Enterprise capability. Without enterprise overhead.</p>
                                        </div>
                                        <div className="flex gap-6 border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6 text-center text-xs font-semibold text-slate-700">
                                            <div>
                                                <div className="text-cloud-blue mb-1"><Zap className="w-4 h-4 mx-auto" /></div>
                                                Faster<br/>Response
                                            </div>
                                            <div>
                                                <div className="text-cloud-blue mb-1"><LineChart className="w-4 h-4 mx-auto" /></div>
                                                Lower<br/>Overhead
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            </div>

                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
