import React from 'react';
import Link from 'next/link';
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function ResourcesMainPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-gradient-hero border-b border-white/10 pt-16 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-screen"></div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <AnimatedSection direction="up" className="flex flex-col md:flex-row items-center gap-10">
                        <div className="md:w-3/5">
                            <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Resources</div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Resources for Insights, <br/><span className="text-blue-400">Knowledge & Growth</span></h1>
                            <p className="text-lg text-slate-300">Stay informed with expert insights, technical resources, and industry perspectives to help you navigate the evolving world of communications, cloud, and digital infrastructure.</p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
            
            <div className="h-4 bg-slateBg"></div>

            <section className="py-16 bg-slateBg">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Featured Resources</h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        
                        <AnimatedSection delay={0.1} direction="up" className="h-full">
                            <Link href="/resources/blog" className="h-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-card transition-shadow flex flex-col group cursor-pointer">
                                <div className="h-48 bg-slate-900 relative">
                                    <span className="absolute top-4 left-4 bg-primary text-white text-[9px] font-bold uppercase px-2 py-1 rounded shadow-sm z-10">Blog</span>
                                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover opacity-80 mix-blend-screen group-hover:scale-105 transition-transform duration-500" alt="Blog" />
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <p className="text-[10px] text-slate-400 mb-2">May 15, 2026</p>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">Why Open Standards Matter in Modern Communications</h3>
                                    <p className="text-[11px] text-slate-600 mb-4 line-clamp-3">Exploring how open standards drive interoperability, reduce costs, and future-proof your infrastructure.</p>
                                    <span className="text-primary font-bold text-[11px] uppercase tracking-wide mt-auto">Read More &rarr;</span>
                                </div>
                            </Link>
                        </AnimatedSection>
                        
                        <AnimatedSection delay={0.2} direction="up" className="h-full">
                            <Link href="/resources/whitepapers" className="h-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-card transition-shadow flex flex-col group cursor-pointer">
                                <div className="h-48 bg-slate-900 relative">
                                    <span className="absolute top-4 left-4 bg-slate-700 text-white text-[9px] font-bold uppercase px-2 py-1 rounded shadow-sm z-10">Whitepaper</span>
                                    <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover opacity-80 mix-blend-screen group-hover:scale-105 transition-transform duration-500" alt="Whitepaper" />
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <p className="text-[10px] text-slate-400 mb-2">April 28, 2026</p>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">Building a Secure Communication Infrastructure</h3>
                                    <p className="text-[11px] text-slate-600 mb-4 line-clamp-3">A deep dive into security-first design principles for communications and collaboration platforms.</p>
                                    <span className="text-primary font-bold text-[11px] uppercase tracking-wide mt-auto">Read More &rarr;</span>
                                </div>
                            </Link>
                        </AnimatedSection>
                        
                        <AnimatedSection delay={0.3} direction="up" className="h-full">
                            <Link href="/resources/casestudies" className="h-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-card transition-shadow flex flex-col group cursor-pointer">
                                <div className="h-48 bg-slate-900 relative">
                                    <span className="absolute top-4 left-4 bg-purple-600 text-white text-[9px] font-bold uppercase px-2 py-1 rounded shadow-sm z-10">Case Study</span>
                                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover opacity-80 mix-blend-screen group-hover:scale-105 transition-transform duration-500" alt="Case Study" />
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <p className="text-[10px] text-slate-400 mb-2">March 10, 2026</p>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">Modernizing Enterprise Communication for Excellence</h3>
                                    <p className="text-[11px] text-slate-600 mb-4 line-clamp-3">How an organization transformed its communication infrastructure for better performance.</p>
                                    <span className="text-primary font-bold text-[11px] uppercase tracking-wide mt-auto">Read More &rarr;</span>
                                </div>
                            </Link>
                        </AnimatedSection>

                    </div>

                    {/* Library Stats */}
                    <AnimatedSection delay={0.4} direction="up">
                        <div className="bg-white rounded-2xl border border-slate-200 p-10 flex flex-col md:flex-row justify-between items-center shadow-sm">
                            <div className="md:w-1/3 mb-6 md:mb-0">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Resource Library</h3>
                                <p className="text-xs text-slate-500 mb-4">Access our comprehensive library of resources designed to help you make informed decisions.</p>
                                {/* Removed redundant button here */}
                            </div>
                            <div className="md:w-2/3 flex justify-around w-full">
                                <div className="text-center">
                                    <i className="fa-solid fa-file-lines text-2xl text-primary mb-2"></i>
                                    <h4 className="text-3xl font-bold text-slate-900 mb-1">25+</h4>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase">Whitepapers</p>
                                </div>
                                <div className="text-center">
                                    <i className="fa-solid fa-pen-nib text-2xl text-primary mb-2"></i>
                                    <h4 className="text-3xl font-bold text-slate-900 mb-1">40+</h4>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase">Blog Articles</p>
                                </div>
                                <div className="text-center">
                                    <i className="fa-solid fa-briefcase text-2xl text-primary mb-2"></i>
                                    <h4 className="text-3xl font-bold text-slate-900 mb-1">15+</h4>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase">Case Studies</p>
                                </div>
                                <div className="text-center">
                                    <i className="fa-solid fa-video text-2xl text-primary mb-2"></i>
                                    <h4 className="text-3xl font-bold text-slate-900 mb-1">20+</h4>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase">Webinars</p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
