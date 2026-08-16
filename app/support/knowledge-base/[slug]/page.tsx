"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function KnowledgeBaseArticlePage() {
    const params = useParams();
    const slug = params?.slug as string;
    
    // Format the slug into a readable title
    const formattedTitle = slug 
        ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        : 'Article';

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <section className="bg-slate-50 border-b border-slate-200 pt-16 pb-16">
                <AnimatedSection direction="up" delay={0.1} className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
                    <div className="text-primary font-semibold text-xs mb-6">
                        <Link href="/support/knowledge-base" className="hover:underline">Knowledge Base</Link> 
                        <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-400"></i> 
                        <Link href="/support/knowledge-base/category/general" className="hover:underline">General</Link> 
                        <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-400"></i>
                        Article
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{formattedTitle}</h1>
                    <div className="flex items-center justify-center gap-6 text-sm text-slate-500 font-medium">
                        <span className="flex items-center"><i className="fa-regular fa-calendar mr-2"></i> Last updated: August 16, 2026</span>
                        <span className="flex items-center"><i className="fa-regular fa-clock mr-2"></i> 8 min read</span>
                        <span className="flex items-center"><i className="fa-regular fa-user mr-2"></i> CloudCom Engineering</span>
                    </div>
                </AnimatedSection>
            </section>
            
            <section className="py-16 flex-grow">
                <AnimatedSection direction="up" delay={0.2} className="container mx-auto px-6 max-w-3xl">
                    <div className="prose prose-slate prose-lg max-w-none">
                        <p className="lead text-xl text-slate-600 mb-8">
                            This article provides a comprehensive overview of <strong>{formattedTitle}</strong>. Follow these instructions carefully to ensure your configuration is secure and fully optimized for production workloads.
                        </p>
                        
                        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Introduction</h2>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            When configuring systems in a modern cloud-native architecture, understanding the nuances of the underlying platform is critical. This guide covers best practices, common pitfalls, and a step-by-step walkthrough to get you up and running quickly.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-xl mb-8">
                            <h4 className="flex items-center text-primary font-bold mb-2"><i className="fa-solid fa-circle-info mr-2"></i> Important Note</h4>
                            <p className="text-sm text-slate-700 m-0">Before proceeding with these steps, ensure you have Administrator or Organization Owner permissions within the CloudCom Management Console.</p>
                        </div>

                        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Step-by-Step Configuration</h2>
                        <ul className="space-y-4 text-slate-600 mb-8 list-decimal pl-5">
                            <li>Log in to the Management Console and navigate to the Settings panel.</li>
                            <li>Select the target resource from the dropdown menu in the upper right corner.</li>
                            <li>Click on <strong>Advanced Configuration</strong> to reveal the underlying JSON editor.</li>
                            <li>Apply the parameters as defined in your organization's compliance policy.</li>
                        </ul>

                        <div className="bg-slate-900 rounded-xl p-6 mb-8 overflow-x-auto text-sm text-slate-300 font-mono">
                            {`{
  "configuration": {
    "enabled": true,
    "mode": "strict",
    "timeout": 3000,
    "retries": 3
  }
}`}
                        </div>

                        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Verifying the Changes</h2>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Once applied, changes typically propagate across the global network within 2-3 minutes. You can verify the successful deployment by checking the Audit Logs in your dashboard, or by querying the resource directly via the REST API.
                        </p>
                    </div>

                    <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-bold text-slate-700">Was this article helpful?</span>
                            <button className="w-10 h-10 rounded-full bg-slate-100 hover:bg-green-100 hover:text-green-600 text-slate-500 flex items-center justify-center transition-colors"><i className="fa-regular fa-thumbs-up"></i></button>
                            <button className="w-10 h-10 rounded-full bg-slate-100 hover:bg-red-100 hover:text-red-600 text-slate-500 flex items-center justify-center transition-colors"><i className="fa-regular fa-thumbs-down"></i></button>
                        </div>
                        <Link href="/contact?interest=Support%20Ticket" className="text-sm font-bold text-primary hover:underline">Still need help? Contact Support</Link>
                    </div>
                </AnimatedSection>
            </section>
        </div>
    );
}
