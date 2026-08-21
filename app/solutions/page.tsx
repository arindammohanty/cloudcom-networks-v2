import React from 'react';
import Link from 'next/link';
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { 
    ArrowRight, 
    Shield, 
    Cloud, 
    MessageSquare, 
    Cpu, 
    Layers,
    Unlock,
    Server,
    Database,
    HardDrive,
    Activity,
    PhoneCall,
    Phone,
    Video,
    Users,
    ShieldCheck,
    Lock,
    UserCheck,
    Eye,
    RefreshCw,
    Layout,
    Settings,
    Wrench,
    Search
} from 'lucide-react';

export default function SolutionsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* HERO SECTION */}
            <section className="relative pt-24 pb-32 overflow-hidden bg-dark-navy text-white flex items-center min-h-[70vh]">
                <div className="absolute inset-0 opacity-20 bg-[url('/media/mesh.svg')] bg-repeat mix-blend-overlay"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cloud-blue/20 to-transparent pointer-events-none blur-3xl"></div>
                
                <Container className="relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-3/5">
                            <AnimatedSection direction="up" delay={0.1}>
                                <div className="text-sm font-bold text-cloud-blue mb-4 tracking-wider uppercase">
                                    Home &gt; Solutions
                                </div>
                            </AnimatedSection>
                            
                            <AnimatedSection direction="up" delay={0.2}>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                                    Solutions built for <br />
                                    <span className="text-cloud-blue">your digital future.</span>
                                </h1>
                            </AnimatedSection>
                            
                            <AnimatedSection direction="up" delay={0.3}>
                                <p className="text-lg md:text-xl text-blue-100/80 mb-12 leading-relaxed max-w-2xl font-light">
                                    CloudCom brings together the right technologies and expertise to help you build, connect, secure and scale your organisation with confidence.
                                </p>
                            </AnimatedSection>
                            
                            <AnimatedSection direction="up" delay={0.4}>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2 text-white font-semibold">
                                            <Shield className="w-5 h-5 text-cloud-blue" />
                                            Secure by Design
                                        </div>
                                        <p className="text-sm text-blue-100/60 leading-relaxed">Security built into every layer of our solutions.</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-2 text-white font-semibold">
                                            <Unlock className="w-5 h-5 text-cloud-blue" />
                                            Open & Flexible
                                        </div>
                                        <p className="text-sm text-blue-100/60 leading-relaxed">Technology choices without unnecessary lock-in.</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-2 text-white font-semibold">
                                            <Layers className="w-5 h-5 text-cloud-blue" />
                                            Built for Scale
                                        </div>
                                        <p className="text-sm text-blue-100/60 leading-relaxed">Architectures that grow with your business.</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                        
                        <div className="lg:w-2/5 relative hidden lg:block">
                             <AnimatedSection direction="left" delay={0.4} className="relative w-full h-full flex justify-center">
                                <div className="relative w-full max-w-[500px] rounded-3xl bg-slate-950/80 border border-blue-500/30 backdrop-blur-xl p-4 shadow-[0_20px_50px_rgba(0,102,204,0.25)] overflow-hidden group">
                                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-blue-900/40 text-xs font-mono text-blue-300">
                                        <span className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                                            Integrated Solution Stack
                                        </span>
                                        <span className="text-cyan-400 font-bold">4 Unified Tiers</span>
                                    </div>
                                    <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
                                        <img 
                                            src="/media/solutions-hero-stack.jpg"
                                            alt="CloudCom Multi-Layered Enterprise Digital Solutions Platform"
                                            className="w-full h-auto object-cover drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                                        />
                                    </div>
                                    <div className="mt-3 p-2.5 bg-blue-950/70 rounded-xl border border-blue-800/50 flex items-center justify-between text-xs font-medium text-blue-200">
                                        <span>Cloud · Comms · Security · AI</span>
                                        <span className="text-emerald-400 font-mono font-bold">Zero Lock-In ✓</span>
                                    </div>
                                </div>
                             </AnimatedSection>
                        </div>
                    </div>
                </Container>
            </section>

            {/* SOLUTION FAMILIES SECTION */}
            <section className="py-24 bg-slate-50 border-b border-slate-200">
                <Container>
                    <div className="text-center mb-20">
                        <AnimatedSection>
                            <h2 className="text-4xl md:text-5xl font-bold text-dark-navy mb-6 tracking-tight">Our Solution Families</h2>
                            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                                Comprehensive solution families that work together to deliver agility, security, efficiency and long-term value.
                            </p>
                        </AnimatedSection>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {/* 1. Cloud & Infrastructure */}
                        <AnimatedSection delay={0.1} direction="up" className="h-full">
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all h-full flex flex-col">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-cloud-blue flex items-center justify-center flex-shrink-0">
                                        <Cloud className="w-7 h-7" />
                                    </div>
                                    <h3 className="font-bold text-xl text-dark-navy leading-tight">Cloud &<br/>Infrastructure</h3>
                                </div>
                                <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                                    Scalable, reliable and secure cloud infrastructure to power your applications and business.
                                </p>
                                
                                <ul className="space-y-4 mb-10 flex-grow">
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-cloud-blue cursor-pointer transition-colors"><Cloud className="w-4 h-4 text-cloud-blue/70" /> Cloud Infrastructure</li>
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-cloud-blue cursor-pointer transition-colors"><Server className="w-4 h-4 text-cloud-blue/70" /> Compute</li>
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-cloud-blue cursor-pointer transition-colors"><HardDrive className="w-4 h-4 text-cloud-blue/70" /> Storage</li>
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-cloud-blue cursor-pointer transition-colors"><Database className="w-4 h-4 text-cloud-blue/70" /> Backup</li>
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-cloud-blue cursor-pointer transition-colors"><Activity className="w-4 h-4 text-cloud-blue/70" /> Disaster Recovery</li>
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-cloud-blue cursor-pointer transition-colors"><Layout className="w-4 h-4 text-cloud-blue/70" /> Application Hosting</li>
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-cloud-blue cursor-pointer transition-colors"><Server className="w-4 h-4 text-cloud-blue/70" /> Data Centre Services</li>
                                </ul>

                                <Link href="/solutions/cloud" className="text-cloud-blue font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all pt-6 border-t border-slate-100">
                                    Explore Cloud Solutions <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </AnimatedSection>

                        {/* 2. Communication & Collaboration */}
                        <AnimatedSection delay={0.2} direction="up" className="h-full">
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all h-full flex flex-col">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                                        <MessageSquare className="w-7 h-7" />
                                    </div>
                                    <h3 className="font-bold text-xl text-dark-navy leading-tight">Communication &<br/>Collaboration</h3>
                                </div>
                                <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                                    Connect teams and customers through unified communication and collaboration platforms.
                                </p>
                                
                                <ul className="space-y-4 mb-10 flex-grow">
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-green-600 cursor-pointer transition-colors"><PhoneCall className="w-4 h-4 text-green-600/70" /> UCaaS</li>
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-green-600 cursor-pointer transition-colors"><Phone className="w-4 h-4 text-green-600/70" /> Business Telephony</li>
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-green-600 cursor-pointer transition-colors"><Video className="w-4 h-4 text-green-600/70" /> Video Conferencing</li>
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-green-600 cursor-pointer transition-colors"><MessageSquare className="w-4 h-4 text-green-600/70" /> Messaging</li>
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-green-600 cursor-pointer transition-colors"><Users className="w-4 h-4 text-green-600/70" /> Collaboration</li>
                                </ul>

                                <Link href="/solutions/communication" className="text-green-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all pt-6 border-t border-slate-100 mt-auto">
                                    Explore Communication <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </AnimatedSection>

                        {/* 3. Security */}
                        <AnimatedSection delay={0.3} direction="up" className="h-full">
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all h-full flex flex-col">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                                        <Shield className="w-7 h-7" />
                                    </div>
                                    <h3 className="font-bold text-xl text-dark-navy leading-tight">Security</h3>
                                </div>
                                <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                                    Protect what matters most with end-to-end security solutions and proactive monitoring.
                                </p>
                                
                                <ul className="space-y-4 mb-10 flex-grow">
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-purple-600 cursor-pointer transition-colors"><ShieldCheck className="w-4 h-4 text-purple-600/70" /> Cybersecurity</li>
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-purple-600 cursor-pointer transition-colors"><Lock className="w-4 h-4 text-purple-600/70" /> Network Security</li>
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-purple-600 cursor-pointer transition-colors"><UserCheck className="w-4 h-4 text-purple-600/70" /> Identity & Access</li>
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-purple-600 cursor-pointer transition-colors"><Eye className="w-4 h-4 text-purple-600/70" /> Security Monitoring</li>
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-purple-600 cursor-pointer transition-colors"><RefreshCw className="w-4 h-4 text-purple-600/70" /> Backup & Recovery</li>
                                </ul>

                                <Link href="/solutions/security" className="text-purple-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all pt-6 border-t border-slate-100 mt-auto">
                                    Explore Security Solutions <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </AnimatedSection>

                        {/* 4. Digital & Business Technology */}
                        <AnimatedSection delay={0.4} direction="up" className="h-full">
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all h-full flex flex-col">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center flex-shrink-0">
                                        <Cpu className="w-7 h-7" />
                                    </div>
                                    <h3 className="font-bold text-xl text-dark-navy leading-tight">Digital & Business<br/>Technology</h3>
                                </div>
                                <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                                    Innovative digital solutions and managed services to accelerate your business outcomes.
                                </p>
                                
                                <ul className="space-y-4 mb-10 flex-grow">
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-orange-500 cursor-pointer transition-colors"><Cpu className="w-4 h-4 text-orange-500/70" /> AI & Automation</li>
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-orange-500 cursor-pointer transition-colors"><Layout className="w-4 h-4 text-orange-500/70" /> Application Hosting</li>
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-orange-500 cursor-pointer transition-colors"><Layers className="w-4 h-4 text-orange-500/70" /> Enterprise Application Services</li>
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-orange-500 cursor-pointer transition-colors"><Settings className="w-4 h-4 text-orange-500/70" /> SAP / CRM Customisation</li>
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-orange-500 cursor-pointer transition-colors"><Wrench className="w-4 h-4 text-orange-500/70" /> Managed IT Services</li>
                                </ul>

                                <Link href="/solutions/digital" className="text-orange-500 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all pt-6 border-t border-slate-100 mt-auto">
                                    Explore Digital Solutions <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* BOTTOM CTA SECTION */}
            <section className="py-24 bg-white text-center">
                <Container>
                    <AnimatedSection direction="up">
                        <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 border border-slate-200 shadow-xl overflow-hidden relative max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 text-left">
                            <div className="lg:w-1/3 flex justify-center lg:justify-start">
                                {/* Dashboard/Chart Graphic representation */}
                                <div className="relative w-64 h-64 bg-cloud-blue/5 rounded-full flex items-center justify-center">
                                    <div className="absolute inset-0 border-2 border-dashed border-cloud-blue/20 rounded-full animate-[spin_30s_linear_infinite]"></div>
                                    <div className="w-48 h-48 bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col p-6 transform -rotate-6">
                                        <div className="w-12 h-12 rounded-full bg-cloud-blue flex items-center justify-center mb-6">
                                            <Search className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="h-3 w-3/4 bg-slate-100 rounded-full mb-3"></div>
                                        <div className="h-3 w-1/2 bg-slate-100 rounded-full mb-3"></div>
                                        <div className="h-3 w-5/6 bg-slate-100 rounded-full"></div>
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-dark-navy rounded-2xl shadow-xl border border-slate-700 flex items-center justify-center transform rotate-12">
                                        <Layers className="w-10 h-10 text-white" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="lg:w-2/3">
                                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-dark-navy tracking-tight">Not sure where to start?</h2>
                                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                    Our solution architects will help you understand your challenges, assess your needs and recommend the right solution for your business.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/contact" className="bg-cloud-blue text-white hover:bg-dark-navy px-8 py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg">
                                        Talk to a Solution Architect <ArrowRight className="w-5 h-5" />
                                    </Link>
                                    <Link href="/services" className="bg-white text-dark-navy border border-slate-200 hover:border-dark-navy px-8 py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                                        View All Services <ArrowRight className="w-5 h-5" />
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
