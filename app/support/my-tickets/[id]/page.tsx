"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function TicketDetailsPage() {
    const params = useParams();
    const id = params?.id as string || 'INC-0000';
    
    // Determine status style based on ID pattern
    const isClosed = id.includes('9755') || id.includes('9642');
    const isAwaiting = id.includes('9811');
    
    const statusText = isClosed ? "Closed" : isAwaiting ? "Awaiting Client" : "In Progress";
    const statusBadge = isClosed 
        ? <span className="bg-slate-100 text-slate-600 py-1.5 px-4 rounded-full text-xs font-bold border border-slate-200"><i className="fa-solid fa-lock mr-2"></i> Closed</span>
        : isAwaiting
        ? <span className="bg-orange-100 text-orange-700 py-1.5 px-4 rounded-full text-xs font-bold border border-orange-200"><i className="fa-solid fa-hourglass-half mr-2"></i> Awaiting Client</span>
        : <span className="bg-blue-100 text-blue-700 py-1.5 px-4 rounded-full text-xs font-bold border border-blue-200"><i className="fa-solid fa-spinner animate-spin mr-2"></i> In Progress</span>;

    return (
        <div className="min-h-screen bg-slateBg flex flex-col pb-20">
            <section className="bg-white border-b border-slate-200 pt-16 pb-8">
                <AnimatedSection direction="up" delay={0.1} className="container mx-auto px-6 max-w-5xl">
                    <div className="text-primary font-semibold text-xs mb-6">
                        <Link href="/support/my-tickets" className="hover:underline">My Tickets</Link> 
                        <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-400"></i> 
                        #{id}
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Request Details: #{id}</h1>
                            <p className="text-sm text-slate-500">Opened on August 14, 2026 by John Doe</p>
                        </div>
                        <div>
                            {statusBadge}
                        </div>
                    </div>
                </AnimatedSection>
            </section>
            
            <section className="pt-10 flex-grow">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="flex flex-col lg:flex-row gap-8">
                        
                        {/* Main Thread */}
                        <div className="lg:w-2/3 space-y-6">
                            <AnimatedSection direction="up" delay={0.2}>
                                {/* Original Request */}
                                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                                    <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center font-bold">JD</div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-sm">John Doe</h4>
                                                <p className="text-xs text-slate-500">Customer</p>
                                            </div>
                                        </div>
                                        <span className="text-xs text-slate-400">Aug 14, 09:30 AM</span>
                                    </div>
                                    <div className="prose prose-sm text-slate-700 max-w-none">
                                        <p>Hello Support Team,</p>
                                        <p>I need assistance with configuring our firewall rules for the new staging environment. We recently provisioned the environment but are unable to route external traffic to the load balancer.</p>
                                        <p>Can you please review the attached configuration or advise on the correct VPC settings?</p>
                                        <p>Thanks,<br/>John</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                            
                            <AnimatedSection direction="up" delay={0.3}>
                                {/* Support Reply */}
                                <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 shadow-sm ml-8">
                                    <div className="flex items-center justify-between border-b border-blue-100 pb-4 mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold"><i className="fa-solid fa-headset"></i></div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-sm">Sarah Jenkins</h4>
                                                <p className="text-xs text-primary font-medium">CloudCom Support Engineer</p>
                                            </div>
                                        </div>
                                        <span className="text-xs text-slate-400">Aug 14, 10:15 AM</span>
                                    </div>
                                    <div className="prose prose-sm text-slate-700 max-w-none">
                                        <p>Hi John,</p>
                                        <p>Thank you for reaching out. I've taken a look at your staging environment configuration.</p>
                                        <p>It appears that the inbound security group rules attached to your load balancer are currently restricted to a specific internal subnet. To allow external traffic, you will need to add an inbound rule allowing TCP on port 80/443 from <code>0.0.0.0/0</code>.</p>
                                        <p>Please refer to our <Link href="/support/knowledge-base/configuring-vpc-peering" className="text-primary hover:underline">VPC Configuration Guide</Link> for step-by-step instructions. Let me know if you'd like me to apply these changes for you.</p>
                                        <p>Best regards,<br/>Sarah</p>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {!isClosed && (
                                <AnimatedSection direction="up" delay={0.4}>
                                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mt-8">
                                        <h4 className="font-bold text-slate-900 mb-4">Reply to Ticket</h4>
                                        <textarea 
                                            rows={5} 
                                            placeholder="Type your response here..." 
                                            className="w-full border border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none mb-4"
                                        ></textarea>
                                        <div className="flex justify-between items-center">
                                            <button className="text-slate-500 hover:text-primary text-sm font-medium transition-colors"><i className="fa-solid fa-paperclip mr-2"></i> Attach File</button>
                                            <button className="bg-primary hover:bg-primaryHover text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-colors shadow-sm">Send Reply</button>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="lg:w-1/3">
                            <AnimatedSection direction="up" delay={0.3}>
                                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden sticky top-32">
                                    <div className="p-5 border-b border-slate-100 bg-slate-50 font-bold text-slate-900">
                                        Ticket Metadata
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <div>
                                            <span className="block text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Status</span>
                                            <span className="text-sm font-medium text-slate-900">{statusText}</span>
                                        </div>
                                        <div>
                                            <span className="block text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Category</span>
                                            <span className="text-sm font-medium text-slate-900">Cloud Platform</span>
                                        </div>
                                        <div>
                                            <span className="block text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Priority</span>
                                            <span className="text-sm font-medium text-slate-900 flex items-center"><span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span> Standard</span>
                                        </div>
                                        <div className="pt-4 border-t border-slate-100">
                                            <button className="w-full text-center text-sm font-bold text-red-500 hover:text-red-600 transition-colors">
                                                Close Ticket
                                            </button>
                                        </div>
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
