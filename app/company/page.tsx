"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { 
    Shield, Zap, Target, Users, Globe, Lightbulb, 
    CheckCircle2, Rocket, ArrowRight, Check, Compass,
    Award, Layers, Server, Sparkles, Building2, 
    Lock, RefreshCw, Terminal, TrendingUp, ShieldCheck,
    Cpu, ArrowUpRight
} from "lucide-react";

export default function CompanyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. HERO SECTION (PDF Page 17) */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-dark-navy via-[#072159] to-[#04153a] text-white">
        {/* Ambient Lights & Grid */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-cloud-blue/20 via-sky-blue/10 to-transparent rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-900/40 via-cloud-blue/10 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection direction="up">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-900/60 border border-blue-500/40 text-blue-300 text-xs md:text-sm font-bold uppercase tracking-widest mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cloud-blue animate-ping" />
                ABOUT CLOUDCOM
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6">
                Technology with purpose. <br />
                <span className="text-cloud-blue">Partnership with trust.</span>
              </h1>

              <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed font-light mb-8 max-w-3xl mx-auto">
                CloudCom Networks Private Limited is a technology company focused on cloud, communication, infrastructure and cybersecurity solutions. We help organisations design, build, secure and operate modern digital infrastructure through open technologies, AI-enabled engineering and a lean, agile approach.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link 
                  href="/solutions"
                  className="w-full sm:w-auto bg-cloud-blue hover:bg-cloud-blue-hover text-white px-8 py-4 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-cloud-blue/30 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Explore Solutions <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 border border-slate-700 bg-white/5 hover:bg-white/10 text-white hover:scale-[1.02] active:scale-[0.98]"
                >
                  Get in Touch <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Feature Pill Tags */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-6 border-t border-slate-700/50">
                {[
                  'Open Standards & OSS', 
                  'Zero Trust Security', 
                  '24/7 Managed Operations', 
                  'Lean & AI-Enabled'
                ].map((pill, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-slate-800/80 text-slate-200 border border-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cloud-blue" />
                    {pill}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* 2. VISION & MISSION SECTION (PDF Page 17) */}
      <section id="vision" className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-8 sm:p-12 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-cloud-blue/50 hover:shadow-xl transition-all"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-cloud-blue"></div>
              <div>
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-cloud-blue flex items-center justify-center mb-8 border border-blue-100 shadow-xs group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-cloud-blue mb-2 block">
                  Core Purpose
                </span>
                <h2 className="text-3xl font-extrabold text-dark-navy mb-4">Our Mission</h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light mb-6">
                  To enable organisations with reliable, secure, and future-ready technology platforms by delivering world-class cloud infrastructure, enterprise communication systems, Cybersecurity solutions, managed services, and digital transformation initiatives built on open standards and modern engineering practices.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200/80 flex items-center gap-2 text-xs font-bold text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                <span>Delivering practical, secure and scalable outcomes</span>
              </div>
            </motion.div>
            
            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-8 sm:p-12 bg-gradient-to-b from-dark-navy via-[#072159] to-[#04153a] text-white rounded-3xl shadow-2xl flex flex-col justify-between relative overflow-hidden border border-blue-500/30 group hover:border-blue-400/60 transition-all"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cloud-blue to-emerald-400"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-cloud-blue/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-blue-900/60 text-sky-300 flex items-center justify-center mb-8 border border-blue-400/30 shadow-xs group-hover:scale-110 transition-transform">
                  <Compass className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-2 block">
                  Future Horizon
                </span>
                <h2 className="text-3xl font-extrabold mb-4 text-white">Our Vision</h2>
                <p className="text-blue-100/90 text-base sm:text-lg leading-relaxed font-light mb-6">
                  To become a globally recognized provider of secure, scalable, and intelligent digital infrastructure solutions that empower organisations through innovation, cloud technologies, enterprise communications, Cybersecurity, and automation.
                </p>
              </div>

              <div className="relative z-10 pt-6 border-t border-blue-900/60 flex items-center gap-2 text-xs font-bold text-blue-200">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Enabling digital sovereignty and technological independence</span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 3. OUR PRINCIPLES (PDF Page 17) */}
      <section id="principles" className="py-24 bg-slate-50 border-b border-slate-200/80">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedSection>
              <span className="text-cloud-blue font-bold tracking-widest text-xs uppercase mb-3 block">
                Our Core Principles
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-navy tracking-tight mb-4">
                The way we work. The way we build.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
                Our principles guide every architectural decision we make and every solution we deliver.
              </p>
            </AnimatedSection>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { 
                icon: <ShieldCheck className="w-7 h-7 text-emerald-600" />, 
                title: "Security First", 
                desc: "Security is designed in, not added on. We follow a zero trust approach across everything we build.",
                tag: "Zero Trust"
              },
              { 
                icon: <Terminal className="w-7 h-7 text-cloud-blue" />, 
                title: "Open Technology", 
                desc: "We use open standards and technologies to ensure flexibility, choice and long-term independence.",
                tag: "Open Source"
              },
              { 
                icon: <Users className="w-7 h-7 text-purple-600" />, 
                title: "Customer First", 
                desc: "We listen, understand and align technology with your goals, timeline and business outcomes.",
                tag: "Outcome Driven"
              },
              { 
                icon: <Cpu className="w-7 h-7 text-amber-500" />, 
                title: "Engineering Excellence", 
                desc: "We take pride in clean architecture, thoughtful design and robust engineering practices.",
                tag: "Clean Arch"
              },
              { 
                icon: <Globe className="w-7 h-7 text-indigo-600" />, 
                title: "Long-Term Partnership", 
                desc: "We build lasting relationships based on trust, transparency and shared success.",
                tag: "Single SLA"
              }
            ].map((value, idx) => (
              <AnimatedSection key={value.title} delay={idx * 0.08} direction="up" className="h-full">
                <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:-translate-y-1.5 transition-all h-full flex flex-col justify-between group">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 transition-transform">
                      {value.icon}
                    </div>
                    <span className="text-[10px] font-bold font-mono text-cloud-blue bg-blue-50 px-2.5 py-0.5 rounded-full mb-3 inline-block">
                      {value.tag}
                    </span>
                    <h3 className="text-lg font-bold text-dark-navy mb-3">{value.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">{value.desc}</p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-100 flex items-center text-xs font-semibold text-cloud-blue">
                    <span>Principle 0{idx + 1}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. DECADES OF REAL-WORLD EXPERIENCE (PDF Page 17) */}
      <section className="py-24 bg-dark-navy text-white relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cloud-blue/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mb-16">
            <AnimatedSection>
              <span className="text-cloud-blue font-bold tracking-widest text-xs uppercase mb-3 block">
                Proven Track Record
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                Decades of real-world experience. <br />
                <span className="text-cloud-blue">Built on trust.</span>
              </h2>
              <p className="text-blue-100/80 text-base sm:text-lg leading-relaxed font-light">
                Our leadership brings decades of hands-on experience in building and operating secure, scalable and resilient systems. We have successfully delivered mission-critical platforms for government, enterprises and service providers.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Open Source Expertise",
                desc: "Deep experience with open source technologies in secure, large scale enterprise environments.",
                icon: <Terminal className="w-6 h-6 text-cloud-blue" />,
                metric: "100% Open"
              },
              {
                title: "Built for Scale",
                desc: "Proven ability to design and operate platforms that scale, perform and remain reliable under demanding workloads.",
                icon: <Layers className="w-6 h-6 text-emerald-400" />,
                metric: "99.999% SLA"
              },
              {
                title: "Secure by Design",
                desc: "Strong focus on security architecture, hardening, regulatory compliance, and continuous Zero Trust improvement.",
                icon: <Shield className="w-6 h-6 text-sky-400" />,
                metric: "Zero Trust"
              },
              {
                title: "Practical & Reliable",
                desc: "We prefer solutions that are simple, effective, maintainable and business-ready over unnecessary corporate bloat.",
                icon: <Award className="w-6 h-6 text-amber-400" />,
                metric: "ROI Focused"
              }
            ].map((card, idx) => (
              <AnimatedSection key={card.title} delay={idx * 0.1} direction="up" className="h-full">
                <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-7 h-full flex flex-col justify-between hover:border-cloud-blue/50 hover:bg-slate-800/80 transition-all group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-blue-950/80 border border-blue-800/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                        {card.icon}
                      </div>
                      <span className="text-[11px] font-mono font-bold text-cloud-blue bg-blue-950 px-2.5 py-1 rounded-full border border-blue-800/40">
                        {card.metric}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">{card.desc}</p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center text-xs font-semibold text-slate-500">
                    <span>Verified Delivery Pillar</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. A LEAN TEAM. SENIOR EXPERTISE (PDF Page 17) */}
      <section className="py-24 bg-white border-t border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <AnimatedSection direction="right">
                <span className="text-cloud-blue font-bold tracking-widest text-xs uppercase mb-2 block">
                  Agile Execution
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-navy tracking-tight mb-4">
                  A lean team. Senior expertise.
                </h2>
                <div className="w-14 h-1 bg-cloud-blue rounded-full mb-6"></div>
                <p className="text-base text-slate-600 leading-relaxed font-light max-w-2xl mb-6">
                  CloudCom is deliberately lean. Our team brings senior experience across architecture, infrastructure, security, cloud and operations. We cut out bureaucratic handoffs so you get direct access to technical leaders.
                </p>

                {/* Efficiency Box with AI & Automation */}
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/90 flex items-start gap-4 mb-6 shadow-2xs">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-cloud-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-dark-navy mb-1">AI-Enabled Modern Engineering</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                      We combine senior human expertise with modern tools, automation and AI to eliminate routine toil and deliver better outcomes with 4x shorter turnaround cycles.
                    </p>
                  </div>
                </div>

                {/* Bottom CTA Box */}
                <div className="p-6 bg-gradient-to-r from-blue-50 via-slate-50 to-blue-50/50 rounded-2xl border border-blue-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cloud-blue text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-cloud-blue/20">
                      <Rocket className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark-navy text-sm mb-1">Let&apos;s build what&apos;s next. Together.</h3>
                      <p className="text-xs text-slate-500">We&apos;re ready to understand your challenges and help you move forward.</p>
                    </div>
                  </div>
                  <Link 
                    href="/contact" 
                    className="w-full sm:w-auto bg-cloud-blue hover:bg-cloud-blue-hover text-white px-6 py-3 rounded-xl text-xs font-bold transition-all text-center whitespace-nowrap shadow-md shadow-cloud-blue/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                  >
                    Talk to CloudCom <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimatedSection>
            </div>
            
            {/* Right Column (5 cols): Why Organisations Trust CloudCom */}
            <div className="lg:col-span-5">
              <AnimatedSection direction="left">
                <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-cloud-blue/10 rounded-full blur-3xl pointer-events-none"></div>

                  <h3 className="text-2xl font-bold text-white mb-2">Why organisations trust CloudCom</h3>
                  <div className="w-12 h-1 bg-cloud-blue rounded-full mb-8"></div>
                  
                  <ul className="space-y-4 mb-10">
                    {[
                      "Independent and technology-neutral approach",
                      "Focus on business outcomes, not just technology",
                      "Transparent, honest and straightforward communication",
                      "Aligned directly to your timeline and budget",
                      "Committed to long-term operational success"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-300 font-medium">
                        <div className="p-1 rounded-md bg-emerald-500/20 text-emerald-400 mr-3 mt-0.5 flex-shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-6 border-t border-slate-800">
                    <div className="text-cloud-blue font-bold text-base md:text-lg tracking-tight">
                      Enterprise capability. Without enterprise overhead.
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}
