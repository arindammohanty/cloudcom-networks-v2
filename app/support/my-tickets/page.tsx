"use client";

import React from 'react';
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from 'next/link';

export default function MyTicketsPage() {
    return (
        <div>
            <section className="bg-gradient-hero border-b border-white/10 pt-16 pb-20 relative overflow-hidden">
                <AnimatedSection direction="up" delay={0.1} className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Support <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> My Tickets</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Active Tickets</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">Track ongoing resolution tasks and administrative requests.</p>
                </AnimatedSection>
            </section>
            
            <section className="py-20 bg-slateBg min-h-screen">
                <div className="container mx-auto px-6 max-w-6xl">
                    <AnimatedSection direction="up" delay={0.2} className="flex justify-between items-center mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900">Your Support Tickets</h2>
                            <p className="text-sm text-slate-500 mt-1">Viewing all open and recently closed tickets.</p>
                        </div>
                        <Link href="/contact?interest=Support%20Ticket" className="bg-primary hover:bg-primaryHover text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center">
                            <i className="fa-solid fa-plus mr-2"></i> New Ticket
                        </Link>
                    </AnimatedSection>
                    
                    <AnimatedSection direction="up" delay={0.3} className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                            <div className="flex gap-2">
                                <button className="px-4 py-1.5 text-xs font-bold bg-white border border-slate-200 text-slate-700 rounded-lg shadow-sm">All Tickets</button>
                                <button className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">Open</button>
                                <button className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">Closed</button>
                            </div>
                            <div className="relative">
                                <i className="fa-solid fa-search absolute left-3 top-2.5 text-slate-400 text-xs"></i>
                                <input type="text" placeholder="Search tickets..." className="pl-8 pr-4 py-2 border border-slate-200 rounded-lg text-xs w-64 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[800px]">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200 text-[10px] text-slate-500 uppercase tracking-wider font-bold">
                                        <th className="p-5">Ticket ID</th>
                                        <th className="p-5">Subject</th>
                                        <th className="p-5">Category</th>
                                        <th className="p-5">Last Updated</th>
                                        <th className="p-5">Status</th>
                                        <th className="p-5 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm text-slate-700">
                                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors group cursor-pointer" onClick={() => window.location.href='/support/my-tickets/INC-9824'}>
                                        <td className="p-5 font-bold text-primary">#INC-9824</td>
                                        <td className="p-5 font-medium text-slate-900 group-hover:text-primary transition-colors">Firewall Configuration Audit Request</td>
                                        <td className="p-5 text-xs text-slate-500">Security</td>
                                        <td className="p-5 text-xs text-slate-500">2 Hours Ago</td>
                                        <td className="p-5"><span className="bg-blue-100 text-blue-700 py-1.5 px-3 rounded-full text-[10px] font-bold border border-blue-200 shadow-sm">In Progress</span></td>
                                        <td className="p-5 text-right"><Link href="/support/my-tickets/INC-9824" className="text-slate-400 hover:text-primary text-xs font-bold transition-colors">View <i className="fa-solid fa-chevron-right ml-1 text-[10px]"></i></Link></td>
                                    </tr>
                                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors group cursor-pointer" onClick={() => window.location.href='/support/my-tickets/REQ-9811'}>
                                        <td className="p-5 font-bold text-primary">#REQ-9811</td>
                                        <td className="p-5 font-medium text-slate-900 group-hover:text-primary transition-colors">SIP Trunk Capacity Expansion</td>
                                        <td className="p-5 text-xs text-slate-500">Networking</td>
                                        <td className="p-5 text-xs text-slate-500">Yesterday</td>
                                        <td className="p-5"><span className="bg-orange-100 text-orange-700 py-1.5 px-3 rounded-full text-[10px] font-bold border border-orange-200 shadow-sm">Awaiting Client</span></td>
                                        <td className="p-5 text-right"><Link href="/support/my-tickets/REQ-9811" className="text-slate-400 hover:text-primary text-xs font-bold transition-colors">View <i className="fa-solid fa-chevron-right ml-1 text-[10px]"></i></Link></td>
                                    </tr>
                                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors group cursor-pointer" onClick={() => window.location.href='/support/my-tickets/INC-9802'}>
                                        <td className="p-5 font-bold text-primary">#INC-9802</td>
                                        <td className="p-5 font-medium text-slate-900 group-hover:text-primary transition-colors">Kubernetes Node Autoscaling Failure</td>
                                        <td className="p-5 text-xs text-slate-500">Cloud Platform</td>
                                        <td className="p-5 text-xs text-slate-500">3 Days Ago</td>
                                        <td className="p-5"><span className="bg-blue-100 text-blue-700 py-1.5 px-3 rounded-full text-[10px] font-bold border border-blue-200 shadow-sm">In Progress</span></td>
                                        <td className="p-5 text-right"><Link href="/support/my-tickets/INC-9802" className="text-slate-400 hover:text-primary text-xs font-bold transition-colors">View <i className="fa-solid fa-chevron-right ml-1 text-[10px]"></i></Link></td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors group cursor-pointer bg-slate-50/50" onClick={() => window.location.href='/support/my-tickets/INC-9755'}>
                                        <td className="p-5 font-bold text-slate-400">#INC-9755</td>
                                        <td className="p-5 font-medium text-slate-500 group-hover:text-slate-700 transition-colors">VPN Connectivity Interruption</td>
                                        <td className="p-5 text-xs text-slate-400">Networking</td>
                                        <td className="p-5 text-xs text-slate-400">June 18, 2026</td>
                                        <td className="p-5"><span className="bg-slate-100 text-slate-500 py-1.5 px-3 rounded-full text-[10px] font-bold border border-slate-200">Closed</span></td>
                                        <td className="p-5 text-right"><Link href="/support/my-tickets/INC-9755" className="text-slate-400 hover:text-slate-600 text-xs font-bold transition-colors">View <i className="fa-solid fa-chevron-right ml-1 text-[10px]"></i></Link></td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors group cursor-pointer bg-slate-50/50 border-t border-slate-100" onClick={() => window.location.href='/support/my-tickets/REQ-9642'}>
                                        <td className="p-5 font-bold text-slate-400">#REQ-9642</td>
                                        <td className="p-5 font-medium text-slate-500 group-hover:text-slate-700 transition-colors">Request for new Staging Environment</td>
                                        <td className="p-5 text-xs text-slate-400">Cloud Platform</td>
                                        <td className="p-5 text-xs text-slate-400">June 02, 2026</td>
                                        <td className="p-5"><span className="bg-slate-100 text-slate-500 py-1.5 px-3 rounded-full text-[10px] font-bold border border-slate-200">Closed</span></td>
                                        <td className="p-5 text-right"><Link href="/support/my-tickets/REQ-9642" className="text-slate-400 hover:text-slate-600 text-xs font-bold transition-colors">View <i className="fa-solid fa-chevron-right ml-1 text-[10px]"></i></Link></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                            <span>Showing 5 of 24 tickets</span>
                            <div className="flex gap-2">
                                <button className="px-3 py-1 border border-slate-200 rounded bg-white text-slate-400 cursor-not-allowed">Previous</button>
                                <button className="px-3 py-1 border border-slate-200 rounded bg-white hover:bg-slate-50 text-slate-700">Next</button>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
