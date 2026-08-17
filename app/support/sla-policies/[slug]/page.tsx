import React from 'react';
import Link from 'next/link';
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function generateStaticParams() {
    return [
        { slug: "standard-support-sla" },
        { slug: "enterprise-support-sla" },
        { slug: "uptime-guarantees" },
        { slug: "acceptable-use-policy" }
    ];
}

export default async function SLAPolicyDocumentPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    
    // Format the slug into a readable title
    const formattedTitle = slug 
        ? slug.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        : 'Policy Document';

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <section className="bg-slate-50 border-b border-slate-200 pt-16 pb-16">
                <AnimatedSection direction="up" delay={0.1} className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
                    <div className="text-primary font-semibold text-xs mb-6">
                        <Link href="/support/sla-policies" className="hover:underline">SLA & Policies</Link> 
                        <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-400"></i> 
                        Document
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{formattedTitle}</h1>
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500 font-medium">
                        <span className="flex items-center bg-white px-3 py-1 rounded-full border border-slate-200"><i className="fa-regular fa-calendar mr-2"></i> Effective Date: January 1, 2026</span>
                        <span className="flex items-center bg-white px-3 py-1 rounded-full border border-slate-200"><i className="fa-solid fa-code-commit mr-2"></i> Version 4.2</span>
                        <span className="flex items-center bg-white px-3 py-1 rounded-full border border-slate-200"><i className="fa-solid fa-file-pdf mr-2"></i> Download PDF</span>
                    </div>
                </AnimatedSection>
            </section>
            
            <section className="py-16 flex-grow">
                <AnimatedSection direction="up" delay={0.2} className="container mx-auto px-6 max-w-3xl">
                    <div className="prose prose-slate prose-lg max-w-none">
                        <p className="lead text-xl text-slate-600 mb-8">
                            This document outlines the official <strong>{formattedTitle}</strong> for CloudCom Networks. By utilizing our services, you agree to adhere to the practices and terms outlined below.
                        </p>
                        
                        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Scope and Application</h2>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            The terms of this policy apply to all customers, users, and entities interacting with CloudCom Networks infrastructure, APIs, and managed services globally. It supersedes any prior agreements unless explicitly stated in a custom Enterprise contract.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Core Principles</h2>
                        <ul className="space-y-4 text-slate-600 mb-8 list-disc pl-5">
                            <li><strong>Transparency:</strong> We commit to providing clear, unambiguous information regarding our operational status.</li>
                            <li><strong>Security First:</strong> All operations are governed by our ISO 27001 certified Information Security Management System.</li>
                            <li><strong>Shared Responsibility:</strong> While we secure the underlying infrastructure, customers are responsible for securing their applications and data in the cloud.</li>
                        </ul>

                        <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl mb-8">
                            <h4 className="font-bold text-slate-900 mb-2">Legal Disclaimer</h4>
                            <p className="text-sm text-slate-600 m-0 leading-relaxed">This document is provided for informational purposes only. CloudCom Networks reserves the right to modify these terms with 30 days prior notice. Continued use of services after modifications constitutes acceptance of the updated policy.</p>
                        </div>

                        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Compliance and Auditing</h2>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            We regularly undergo independent third-party audits to verify our adherence to this {formattedTitle.toLowerCase()}. Customers on our Enterprise tier may request our SOC 2 Type II report and associated attestation letters via their Technical Account Manager.
                        </p>
                    </div>

                    <div className="mt-16 pt-8 border-t border-slate-200 text-center">
                        <p className="text-sm text-slate-500 mb-4">Need clarification on this policy?</p>
                        <Link href="/contact" className="text-primary font-bold hover:underline">Contact our Legal & Compliance Team</Link>
                    </div>
                </AnimatedSection>
            </section>
        </div>
    );
}
