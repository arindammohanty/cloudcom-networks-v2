import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Sitemap | CloudComNet',
    description: 'Navigate the CloudComNet website easily using our comprehensive sitemap.',
};

export default function SitemapPage() {
    
    // Structured data representing the directories found in ccn-web-ari
    const siteStructure = [
        {
            title: "Navigation",
            icon: "fa-solid fa-compass",
            links: [
                { name: "Home", url: "/" },
                { name: "About Us", url: "/about" },
                { name: "Solutions", url: "/solutions" },
                { name: "Services", url: "/services" },
                { name: "Industries", url: "/industries" },
                { name: "Partners", url: "/partners" },
                { name: "Contact", url: "/contact" },
            ]
        },
        {
            title: "Solutions",
            icon: "fa-solid fa-server",
            links: [
                { name: "All Solutions Overview", url: "/solutions" },
                { name: "Cloud Infrastructure", url: "/solutions/cloud" },
                { name: "Unified Communications", url: "/solutions/communications" },
                { name: "Cybersecurity", url: "/solutions/security" },
                { name: "Digital & Business Technology", url: "/solutions/digital" },
                { name: "Enterprise Applications", url: "/solutions/applications" },
                { name: "Managed Operations", url: "/solutions/managed-operations" },
                { name: "AI & Automation", url: "/solutions/ai-automation" },
                { name: "IoT & Edge", url: "/solutions/iot-edge" },
                { name: "Business Operations", url: "/solutions/business-operations" },
            ]
        },
        {
            title: "Services",
            icon: "fa-solid fa-gears",
            links: [
                { name: "All Services Overview", url: "/services" },
                { name: "Advisory & Consulting", url: "/services/consulting" },
                { name: "Architecture & Implementation", url: "/services/implementation" },
                { name: "Managed Services", url: "/services/managed-services" },
                { name: "Security Services", url: "/services/security-services" },
                { name: "Cloud Services", url: "/services/cloud-services" },
                { name: "Cloud Migration", url: "/services/cloud-migration" },
                { name: "Security Assessment", url: "/services/security-audit" },
                { name: "Technical Support", url: "/services/support" },
            ]
        },
        {
            title: "Support",
            icon: "fa-solid fa-headset",
            links: [
                { name: "Support Portal", url: "/support" },
                { name: "Help Center", url: "/support/help-center" },
                { name: "Knowledge Base", url: "/support/knowledge-base" },
                { name: "My Tickets", url: "/support/my-tickets" },
                { name: "Service Status", url: "/support/service-status" },
                { name: "SLA Policies", url: "/support/sla-policies" },
            ]
        },
        {
            title: "Legal & Privacy",
            icon: "fa-solid fa-scale-balanced",
            links: [
                { name: "Cookie Agreement Policy", url: "/cookies" },
                { name: "Privacy Policy", url: "/privacy" },
                { name: "Terms of Service", url: "/terms" },
            ]
        }
    ];

    return (
        <div className="animate-fade-in bg-slateBg min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-hero pt-16 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10 bg-slate-900 mix-blend-screen"></div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Website Sitemap</h1>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto">A complete overview of the CloudComNet platform.</p>
                </div>
            </section>

            {/* Sitemap Grid */}
            <section className="py-16 relative z-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        {siteStructure.map((category, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-primary flex items-center justify-center text-lg mr-4">
                                        <i className={category.icon}></i>
                                    </div>
                                    <h2 className="text-xl font-bold text-slate-900">{category.title}</h2>
                                </div>
                                <ul className="space-y-3">
                                    {category.links.map((link, linkIndex) => (
                                        <li key={linkIndex} className="flex items-center group">
                                            <i className="fa-solid fa-angle-right text-[10px] text-slate-300 mr-3 group-hover:text-primary transition-colors"></i>
                                            <Link 
                                                href={link.url} 
                                                className="text-sm text-slate-600 hover:text-primary hover:font-medium transition-all"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </div>
    );
}
