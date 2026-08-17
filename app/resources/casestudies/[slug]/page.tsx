import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Data repository for the detailed case studies matching the main index
const CASE_STUDIES_DATA: Record<string, {
    title: string;
    industry: string;
    heroImage: string;
    summary: string;
    date: string;
    client: string;
    metrics: { label: string; value: string }[];
    challenge: string;
    solution: string[];
    results: string[];
}> = {
    'financial-modernization': {
        title: 'Modernizing Infrastructure for a Leading Financial Institution',
        industry: 'Financial Services',
        heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
        summary: 'CloudCom Networks helped a leading financial services firm modernize their infrastructure, enhance security, and ensure strict regulatory compliance—driving significant system stability and cost reductions.',
        date: 'April 2026',
        client: 'Global Apex Financial Group',
        metrics: [
            { label: 'System Uptime Achieved', value: '99.99%' },
            { label: 'Reduction in Infrastructure Costs', value: '45%' },
            { label: 'Incident Response Acceleration', value: '3.5x' }
        ],
        challenge: 'The client was relying on fragmented, legacy on-premise servers across 12 regional datacenters. This setup created severe bottlenecks during high-frequency trading hours and made compliance audits labor-intensive and error-prone.',
        solution: [
            'Architected a hybrid cloud infrastructure utilizing redundant cloud nodes for immediate failover.',
            'Implemented AI-driven continuous threat monitoring and zero-trust network access (ZTNA) protocols.',
            'Automated compliance reporting workflows tailored to global financial regulations.'
        ],
        results: [
            'Eliminated latency bottlenecks, enabling sub-millisecond transaction processing.',
            'Reduced ongoing maintenance overhead by 45% within the first two quarters.',
            'Passed all external regulatory audits with zero compliance flags.'
        ]
    },
    'healthcare-cloud-migration': {
        title: 'Secure & Scalable Cloud Migration for Regional Healthcare',
        industry: 'Healthcare',
        heroImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
        summary: 'Enabled secure patient data management and seamless EHR access across 50+ clinics with full HIPAA compliance.',
        date: 'January 2026',
        client: 'Midwest Health Partners',
        metrics: [
            { label: 'Clinics Successfully Migrated', value: '50+' },
            { label: 'Data Retrieval Speed Up', value: '60%' },
            { label: 'Security Compliance', value: '100% HIPAA' }
        ],
        challenge: 'Managing electronic health records (EHR) across 50+ remote clinics led to slow data retrieval times, frequent synchronization failures, and heightened vulnerability to localized ransomware threats.',
        solution: [
            'Migrated core EHR databases to a secure, end-to-end encrypted cloud environment.',
            'Established SD-WAN connections across all clinic locations for prioritized medical traffic.',
            'Deployed automated off-site backups with strict role-based access controls.'
        ],
        results: [
            'Reduced EHR sync times from minutes to seconds, improving patient intake flow.',
            'Ensured 100% HIPAA and SOC2 compliance across all endpoints.',
            'Centralized IT management, reducing remote troubleshooting tickets by 70%.'
        ]
    },
    'retail-unified-communications': {
        title: 'Unified Communications Driving Retail Connectivity',
        industry: 'Retail',
        heroImage: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80',
        summary: 'Implemented an advanced UCaaS platform to seamlessly connect 500+ retail stores with corporate headquarters and logistics hubs.',
        date: 'March 2026',
        client: 'Vanguard Retail Syndicate',
        metrics: [
            { label: 'Stores Connected', value: '500+' },
            { label: 'Communication Cost Savings', value: '38%' },
            { label: 'Deployment Timeline', value: '6 Weeks' }
        ],
        challenge: 'A rapidly expanding retail chain struggled with disparate phone systems, lack of internal collaboration tools, and high communication overhead across over 500 store footprints.',
        solution: [
            'Deployed a centralized Unified Communications as a Service (UCaaS) solution seamlessly replacing legacy PBX systems.',
            'Integrated inventory alerts and store-to-warehouse messaging directly into handheld associate terminals.',
            'Provided centralized cloud administration for instant onboarding of new store locations.'
        ],
        results: [
            'Connected over 500 stores into a single, cohesive communication fabric in just 6 weeks.',
            'Decreased monthly telecom expenditures by 38% network-wide.',
            'Improved inventory inquiry response times between store floors and distribution centers.'
        ]
    }
};

interface PageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return Object.keys(CASE_STUDIES_DATA).map((slug) => ({
        slug,
    }));
}

export default async function CaseStudyDetail({ params }: PageProps) {
    const resolvedParams = await params;
    const study = CASE_STUDIES_DATA[resolvedParams.slug];

    if (!study) {
        notFound();
    }

    return (
        <div className="animate-fade-in">
            {/* Header Section */}
            <section className="bg-gradient-hero border-b border-white/10 pt-16 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="text-primary font-semibold text-xs mb-4 flex items-center gap-2">
                        <Link href="/" className="hover:underline">Home</Link>
                        <i className="fa-solid fa-chevron-right text-[8px] text-slate-500"></i>
                        <Link href="/resources/casestudies" className="hover:underline">Case Studies</Link>
                        <i className="fa-solid fa-chevron-right text-[8px] text-slate-500"></i>
                        <span className="text-slate-300">{study.industry}</span>
                    </div>
                    
                    <span className="inline-block bg-primary/20 border border-primary/40 text-primary text-[10px] font-bold uppercase px-3 py-1 rounded mb-4">
                        {study.industry} Case Study
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        {study.title}
                    </h1>
                    <p className="text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed">
                        {study.summary}
                    </p>
                </div>
            </section>

            <div className="h-4 bg-slateBg"></div>

            {/* Main Content Body */}
            <section className="py-16 bg-slateBg min-h-screen">
                <div className="container mx-auto px-6 max-w-5xl">
                    
                    {/* Hero Image & Metrics Bar */}
                    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-12">
                        <div className="h-64 md:h-96 w-full relative bg-slate-900">
                            <img 
                                src={study.heroImage} 
                                alt={study.title} 
                                className="w-full h-full object-cover opacity-85"
                            />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 bg-slate-50/50 p-6">
                            {study.metrics.map((metric, idx) => (
                                <div key={idx} className="p-4 text-center">
                                    <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">
                                        {metric.value}
                                    </div>
                                    <div className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                                        {metric.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Case Study Deep Dive Layout */}
                    <div className="grid lg:grid-cols-3 gap-12">
                        
                        {/* Narrative Left Column */}
                        <div className="lg:col-span-2 space-y-10">
                            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <i className="fa-solid fa-triangle-exclamation text-rose-500"></i>
                                    The Challenge
                                </h2>
                                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                                    {study.challenge}
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <i className="fa-solid fa-gears text-primary"></i>
                                    The Solution
                                </h2>
                                <ul className="space-y-3">
                                    {study.solution.map((item, idx) => (
                                        <li key={idx} className="text-xs md:text-sm text-slate-600 flex items-start gap-3">
                                            <span className="w-5 h-5 rounded-full bg-blue-50 text-primary flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                                                {idx + 1}
                                            </span>
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <i className="fa-solid fa-chart-line text-emerald-600"></i>
                                    The Results
                                </h2>
                                <ul className="space-y-3">
                                    {study.results.map((item, idx) => (
                                        <li key={idx} className="text-xs md:text-sm text-slate-600 flex items-start gap-3">
                                            <i className="fa-solid fa-check text-emerald-500 mt-1"></i>
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Sidebar Info & CTA */}
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
                                    Project Overview
                                </h3>
                                <div className="space-y-4 text-xs">
                                    <div>
                                        <span className="block text-slate-400 font-medium">Client</span>
                                        <span className="font-bold text-slate-900 text-sm">{study.client}</span>
                                    </div>
                                    <div>
                                        <span className="block text-slate-400 font-medium">Industry</span>
                                        <span className="font-bold text-slate-900 text-sm">{study.industry}</span>
                                    </div>
                                    <div>
                                        <span className="block text-slate-400 font-medium">Completion Date</span>
                                        <span className="font-bold text-slate-900 text-sm">{study.date}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-darkBg text-white border border-slate-800 rounded-xl p-6 shadow-sm text-center">
                                <h3 className="text-base font-bold mb-2">Ready for Similar Results?</h3>
                                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                                    Let our architecture team design a tailored cloud infrastructure and communication plan for your business.
                                </p>
                                <Link 
                                    href="/contact" 
                                    className="block w-full bg-primary hover:bg-primaryHover text-white text-xs font-bold py-3 rounded transition-colors shadow-md"
                                >
                                    Schedule a Consultation &rarr;
                                </Link>
                            </div>

                            <Link 
                                href="/resources/casestudies"
                                className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-primary transition-colors"
                            >
                                &larr; Back to all Case Studies
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
