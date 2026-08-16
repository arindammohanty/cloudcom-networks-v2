"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";

export default function SupportPortalPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            alert(`Searching Knowledge Base for: "${searchQuery}"\n(This would normally redirect to /support/knowledge-base?q=${encodeURIComponent(searchQuery)})`);
            setSearchQuery('');
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
             <section className="bg-gradient-hero border-b border-white/10 pt-16 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                    <AnimatedSection direction="up" delay={0.1}>
                        <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Support Portal</div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Welcome to Support</h1>
                        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">How can we help you today? Raise a request, track progress, check service health, and find expert documentation.</p>
                        
                        <form onSubmit={handleSearchSubmit} className="relative max-w-2xl mx-auto flex shadow-2xl">
                            <i className="fa-solid fa-magnifying-glass absolute left-6 top-4 text-slate-400 z-10 text-lg"></i>
                            <input 
                                type="text" 
                                placeholder="Search for help articles, services, or solutions..." 
                                className="w-full bg-white pl-14 pr-4 py-4 rounded-l-xl text-sm border-0 focus:ring-2 focus:ring-primary outline-none text-[#0b1121] placeholder:text-slate-400 relative z-0" 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button type="submit" className="bg-primary hover:bg-primaryHover text-white px-8 py-4 rounded-r-xl font-bold text-sm transition-colors whitespace-nowrap z-10 flex items-center">
                                Search <i className="fa-solid fa-arrow-right ml-2 hidden sm:inline"></i>
                            </button>
                        </form>
                    </AnimatedSection>
                </div>
            </section>
            
            <section className="py-20 bg-slateBg flex-grow">
                <div className="container mx-auto px-6 max-w-7xl">
                    <AnimatedSection direction="up" delay={0.2} className="mb-12 text-center md:text-left">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Quick Actions</h2>
                        <p className="text-sm text-slate-500">Select an option below to get started with your request.</p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        <AnimatedSection delay={0.1} direction="up" className="h-full">
                            <Link href="/contact?interest=Support%20Ticket" className="h-full bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-hover hover:-translate-y-1 transition-all group block relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="w-14 h-14 bg-blue-50 text-primary rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform"><i className="fa-solid fa-pen-to-square"></i></div>
                                <h3 className="font-bold text-slate-900 text-lg mb-2">Raise a Ticket</h3>
                                <p className="text-sm text-slate-500 mb-4">Submit a technical support request to our engineering team.</p>
                                <span className="text-primary text-xs font-bold uppercase tracking-wide group-hover:underline">Create Ticket &rarr;</span>
                            </Link>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2} direction="up" className="h-full">
                            <Link href="/support/my-tickets" className="h-full bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-hover hover:-translate-y-1 transition-all group block relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform"><i className="fa-solid fa-list-check"></i></div>
                                <h3 className="font-bold text-slate-900 text-lg mb-2">My Tickets</h3>
                                <p className="text-sm text-slate-500 mb-4">View and track the status of your open and resolved requests.</p>
                                <span className="text-emerald-600 text-xs font-bold uppercase tracking-wide group-hover:underline">View Tickets &rarr;</span>
                            </Link>
                        </AnimatedSection>

                        <AnimatedSection delay={0.3} direction="up" className="h-full">
                            <Link href="/support/knowledge-base" className="h-full bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-hover hover:-translate-y-1 transition-all group block relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform"><i className="fa-solid fa-book-open-reader"></i></div>
                                <h3 className="font-bold text-slate-900 text-lg mb-2">Knowledge Base</h3>
                                <p className="text-sm text-slate-500 mb-4">Browse our comprehensive library of articles and tutorials.</p>
                                <span className="text-purple-600 text-xs font-bold uppercase tracking-wide group-hover:underline">Browse Articles &rarr;</span>
                            </Link>
                        </AnimatedSection>

                        <AnimatedSection delay={0.4} direction="up" className="h-full">
                            <Link href="/support/service-status" className="h-full bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-hover hover:-translate-y-1 transition-all group block relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform"><i className="fa-solid fa-heart-pulse"></i></div>
                                <h3 className="font-bold text-slate-900 text-lg mb-2">System Status</h3>
                                <p className="text-sm text-slate-500 mb-4">Check live operational health and past incident reports.</p>
                                <span className="text-orange-600 text-xs font-bold uppercase tracking-wide group-hover:underline">Check Status &rarr;</span>
                            </Link>
                        </AnimatedSection>
                    </div>

                    <div className="border-t border-slate-200 pt-16">
                        <div className="flex flex-col lg:flex-row gap-8 items-center bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm">
                            <div className="lg:w-1/2">
                                <AnimatedSection direction="up" delay={0.2}>
                                    <div className="inline-block bg-blue-50 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4">Enterprise Support</div>
                                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Need Dedicated Assistance?</h2>
                                    <p className="text-slate-600 mb-6 leading-relaxed">Upgrade to our Premium Enterprise Support tier and get a dedicated Technical Account Manager (TAM), guaranteed 15-minute SLA response times, and 24/7 phone access to our level 3 engineering team.</p>
                                    <ul className="space-y-3 mb-8">
                                        <li className="flex items-center text-sm text-slate-700 font-medium"><i className="fa-solid fa-check text-green-500 mr-3"></i> Dedicated Technical Account Manager</li>
                                        <li className="flex items-center text-sm text-slate-700 font-medium"><i className="fa-solid fa-check text-green-500 mr-3"></i> 15-Minute Critical Response SLA</li>
                                        <li className="flex items-center text-sm text-slate-700 font-medium"><i className="fa-solid fa-check text-green-500 mr-3"></i> 24/7 Priority Phone Routing</li>
                                    </ul>
                                    <Link href="/contact?interest=Enterprise%20Support" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-md inline-flex items-center">
                                        Upgrade Support Plan
                                    </Link>
                                </AnimatedSection>
                            </div>
                            <div className="lg:w-1/2 w-full">
                                <AnimatedSection direction="right" delay={0.3}>
                                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex items-center justify-center relative overflow-hidden min-h-[300px]">
                                        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center mix-blend-multiply"></div>
                                        <div className="relative z-10 text-center">
                                            <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center text-4xl text-primary mx-auto mb-6">
                                                <i className="fa-solid fa-headset"></i>
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">We're here for you</h3>
                                            <p className="text-sm text-slate-500 max-w-xs mx-auto">Our global team of experts is ready to solve your most complex architectural challenges.</p>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
