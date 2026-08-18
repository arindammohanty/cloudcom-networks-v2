"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { Shield, Zap, Target, Users, Globe, Lightbulb, CheckCircle2, Rocket } from "lucide-react";

export default function CompanyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-dark-navy text-white">
        <div className="absolute inset-0 bg-mesh opacity-50"></div>
        <Container className="relative z-10 text-center">
          <AnimatedSection direction="up">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              About <span className="text-cloud-blue">CloudCom</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Empowering organizations through secure, scalable, and intelligent digital infrastructure solutions since day one.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section id="vision" className="py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection direction="right">
              <div className="p-10 bg-slate-50 rounded-2xl border border-gray-100 h-full">
                <Target className="w-12 h-12 text-cloud-blue mb-6" />
                <h2 className="text-3xl font-bold text-dark-navy mb-4">Our Mission</h2>
                <p className="text-text-secondary text-lg leading-relaxed">
                  To enable organizations with reliable, secure, and future-ready technology platforms by delivering world-class cloud infrastructure, enterprise communication systems, Cybersecurity solutions, managed services, and digital transformation initiatives built on open standards and modern engineering practices.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="left">
              <div className="p-10 bg-dark-navy text-white rounded-2xl h-full shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cloud-blue/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <Globe className="w-12 h-12 text-sky-blue mb-6 relative z-10" />
                <h2 className="text-3xl font-bold mb-4 relative z-10">Our Vision</h2>
                <p className="text-gray-300 text-lg leading-relaxed relative z-10">
                  To become a globally recognized provider of secure, scalable, and intelligent digital infrastructure solutions that empower organizations through innovation, cloud technologies, enterprise communications, Cybersecurity, and automation.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Our Principles */}
      <section id="principles" className="py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <AnimatedSection>
              <div className="text-cloud-blue font-bold tracking-widest text-sm uppercase mb-4">Our Principles</div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-navy mb-4">The way we work. The way we build.</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">Our principles guide every decision we make and every solution we deliver.</p>
            </AnimatedSection>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {[
              { icon: <Shield className="w-8 h-8 text-cloud-blue mx-auto" />, title: "Security First", desc: "Security is designed in, not added on. We follow a zero trust approach across everything we build." },
              { icon: <svg className="w-8 h-8 text-cloud-blue mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>, title: "Open Technology", desc: "We use open standards and technologies to ensure flexibility, choice and long-term independence." },
              { icon: <Users className="w-8 h-8 text-cloud-blue mx-auto" />, title: "Customer First", desc: "We listen, understand and align technology with your goals, timeline and business outcomes." },
              { icon: <svg className="w-8 h-8 text-cloud-blue mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, title: "Engineering Excellence", desc: "We take pride in clean architecture, thoughtful design and robust engineering practices." },
              { icon: <svg className="w-8 h-8 text-cloud-blue mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>, title: "Long-Term Partnership", desc: "We build lasting relationships based on trust, transparency and shared success." }
            ].map((value, idx) => (
              <AnimatedSection key={value.title} delay={idx * 0.1}>
                <div className="flex flex-col h-full items-center">
                  <div className="mb-6 w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-dark-navy mb-3">{value.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{value.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Experience & Lean Team */}
      <section className="py-24 bg-white border-t border-slate-100">
        <Container className="max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-stretch">
            
            {/* Left Column */}
            <AnimatedSection direction="right" className="flex flex-col gap-6 lg:w-[60%]">
              {/* Top: Title and Text */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-dark-navy mb-4">A lean team. Senior expertise.</h2>
                <div className="w-12 h-1 bg-cloud-blue rounded-full mb-4"></div>
                <p className="text-sm text-slate-600 leading-relaxed max-w-lg">
                  CloudCom is deliberately lean. Our team brings senior experience across architecture, infrastructure, security, cloud and operations.
                </p>
              </div>
              
              {/* Middle: Small Box and Image */}
              <div className="flex flex-col sm:flex-row gap-6 mt-2">
                <div className="sm:w-1/2 flex items-center gap-4 p-5 bg-[#f8fafc] rounded-xl border border-slate-100">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-cloud-blue" />
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    We combine expertise with modern tools, automation and AI to deliver better outcomes with greater efficiency.
                  </p>
                </div>
                <div className="sm:w-1/2 rounded-xl overflow-hidden shadow-sm h-[140px] sm:h-auto min-h-[140px]">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                    alt="Team collaborating" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              
              {/* Bottom: Wide CTA Box */}
              <div className="p-5 bg-[#f8fafc] rounded-xl border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-6 h-6 text-cloud-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-navy text-sm mb-1">Let's build what's next. Together.</h4>
                    <p className="text-xs text-slate-500">We're ready to understand your challenges and help you move forward.</p>
                  </div>
                </div>
                <Link href="/contact" className="w-full sm:w-auto bg-cloud-blue hover:bg-cloud-blue-hover text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors text-center whitespace-nowrap shadow-md">
                  Talk to CloudCom →
                </Link>
              </div>
            </AnimatedSection>
            
            {/* Right Column */}
            <AnimatedSection direction="left" className="flex flex-col lg:w-[40%]">
              <h3 className="text-xl md:text-2xl font-bold text-dark-navy mb-4">Why organisations trust CloudCom</h3>
              <div className="w-12 h-1 bg-cloud-blue rounded-full mb-8"></div>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Independent and technology-neutral approach",
                  "Focus on business outcomes, not just technology",
                  "Transparent, honest and straightforward",
                  "Aligned to your timeline and budget",
                  "Committed to long-term success"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-cloud-blue mr-3 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto pt-6 border-t border-slate-100">
                <div className="text-cloud-blue font-bold text-lg md:text-xl tracking-tight">
                  Enterprise capability. Without enterprise overhead.
                </div>
              </div>
            </AnimatedSection>

          </div>
        </Container>
      </section>
    </div>
  );
}
