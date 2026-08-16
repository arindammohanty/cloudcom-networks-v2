import React from 'react';
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";

export default function ServiceStatusPage() {
    return (
        <div>
             <section className="bg-gradient-hero border-b border-white/10 pt-16 pb-20 relative overflow-hidden">
                <AnimatedSection direction="up" delay={0.1} className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Support <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Service Status</div>
                    <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
                        <div className="lg:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Service Status</h1>
                            <p className="text-lg text-slate-300 mb-8">Real-time status and performance of CloudCom Networks services and platforms.</p>
                        </div>
                        <div className="lg:w-1/3 w-full">
                            <div className="bg-green-500/20 border border-green-500/30 rounded-2xl p-6 flex items-center shadow-[0_0_30px_rgba(34,197,94,0.15)] relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <i className="fa-solid fa-check-circle text-8xl text-green-400"></i>
                                </div>
                                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl mr-5 shadow-lg shadow-green-500/30 flex-shrink-0 relative z-10 animate-pulse">
                                    <i className="fa-solid fa-check"></i>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="font-bold text-white text-xl mb-1">All Systems Operational</h3>
                                    <p className="text-green-200 text-sm">Last updated: Just now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </section>

            <section className="py-20 bg-slateBg">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <AnimatedSection direction="up" delay={0.1}>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Current Status</h2>
                            </AnimatedSection>
                            
                            <AnimatedSection direction="up" delay={0.2}>
                                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm divide-y divide-slate-100 mb-10 overflow-hidden">
                                    {[
                                        { name: "Cloud Platform", desc: "Compute, block storage, and managed databases", icon: "fa-cloud" },
                                        { name: "Network Services", desc: "Core network, global routing, and DNS resolution", icon: "fa-network-wired" },
                                        { name: "UCaaS Platform", desc: "Voice, video conferencing, and team messaging", icon: "fa-comments" },
                                        { name: "Management Console", desc: "Customer portal and administrative dashboards", icon: "fa-laptop-code" },
                                        { name: "API Gateway", desc: "RESTful APIs and webhook delivery services", icon: "fa-code-branch" }
                                    ].map((service, idx) => (
                                        <div key={idx} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                            <div className="flex items-center">
                                                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 text-slate-600 flex items-center justify-center text-xl mr-5"><i className={`fa-solid ${service.icon}`}></i></div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 text-md">{service.name}</h4>
                                                    <p className="text-xs text-slate-500">{service.desc}</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end">
                                                <span className="bg-green-100 border border-green-200 text-green-700 text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center"><span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span> Operational</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </AnimatedSection>

                            <AnimatedSection direction="up" delay={0.3}>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Past Incidents</h2>
                                <div className="space-y-6">
                                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm relative pl-10">
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-200 rounded-l-2xl"></div>
                                        <h4 className="font-bold text-slate-900 text-lg mb-2">No incidents reported today.</h4>
                                        <p className="text-sm text-slate-500">August 16, 2026</p>
                                    </div>
                                    
                                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm relative pl-10">
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-400 rounded-l-2xl"></div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] font-bold">Resolved</span>
                                            <span className="text-xs text-slate-500">August 12, 2026</span>
                                        </div>
                                        <h4 className="font-bold text-slate-900 text-lg mb-4">Elevated Latency on European SIP Trunks</h4>
                                        <div className="space-y-4 text-sm text-slate-600">
                                            <div>
                                                <strong className="text-slate-900">Resolved</strong> - The network routing issue has been fully mitigated. All European SIP traffic is operating at normal latency levels. <br/><span className="text-xs text-slate-400">Aug 12, 14:30 UTC</span>
                                            </div>
                                            <div>
                                                <strong className="text-slate-900">Monitoring</strong> - A fix has been implemented by our upstream transit provider. We are monitoring the connection metrics. <br/><span className="text-xs text-slate-400">Aug 12, 13:45 UTC</span>
                                            </div>
                                            <div>
                                                <strong className="text-slate-900">Investigating</strong> - We are currently investigating reports of elevated latency (approx. +40ms) affecting outbound calls from the EU-Central region. <br/><span className="text-xs text-slate-400">Aug 12, 13:10 UTC</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                        
                        <div>
                            <AnimatedSection direction="up" delay={0.4}>
                                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm mb-8 sticky top-32">
                                    <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center"><i className="fa-solid fa-chart-line text-primary mr-3"></i> Uptime Overview</h3>
                                    <div className="space-y-6">
                                        <div>
                                            <div className="flex justify-between text-sm mb-2"><span className="font-medium text-slate-700">Cloud Platform</span> <span className="font-bold text-green-600">100.00%</span></div>
                                            <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div></div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-sm mb-2"><span className="font-medium text-slate-700">Network Services</span> <span className="font-bold text-green-600">99.99%</span></div>
                                            <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-green-500 h-2 rounded-full" style={{ width: '99.9%' }}></div></div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-sm mb-2"><span className="font-medium text-slate-700">UCaaS Platform</span> <span className="font-bold text-green-600">99.98%</span></div>
                                            <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-green-500 h-2 rounded-full" style={{ width: '99.9%' }}></div></div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-sm mb-2"><span className="font-medium text-slate-700">Management Console</span> <span className="font-bold text-green-600">100.00%</span></div>
                                            <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div></div>
                                        </div>
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                                        <p className="text-xs text-slate-500 mb-4">Subscribe to receive email or SMS notifications during service interruptions.</p>
                                        <button className="w-full bg-white border-2 border-slate-200 hover:border-primary hover:text-primary text-slate-700 font-bold py-3 px-4 rounded-xl transition-colors text-sm">
                                            Subscribe to Updates
                                        </button>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
