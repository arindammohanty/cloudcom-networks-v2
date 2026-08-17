import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight, CheckCircle2, Server, Users, Settings, ShieldCheck, Cloud, Headset } from 'lucide-react';

const servicesData = {
    'consulting': {
        title: 'Consulting',
        icon: <Users className="w-12 h-12 text-blue-600" />,
        bg: 'bg-blue-50',
        desc: 'We help you define the right technology strategy and architecture to align with your business goals.',
        details: 'Our consulting engagements start with understanding your business objectives. We then assess your current technology landscape, identify gaps, and design a modern, scalable architecture that provides a foundation for growth and innovation.',
        features: [
            "Technology assessment and maturity modeling", 
            "Enterprise architecture & solution design", 
            "Digital transformation roadmap & planning", 
            "Security, risk & compliance review",
            "Vendor evaluation and technology selection"
        ]
    },
    'implementation': {
        title: 'Implementation',
        icon: <Settings className="w-12 h-12 text-teal-600" />,
        bg: 'bg-teal-50',
        desc: 'We build, integrate and deploy solutions that work seamlessly for your business.',
        details: 'Moving from design to reality requires precision and experience. Our implementation teams use agile methodologies to deploy, configure, and integrate complex technology solutions with minimal disruption to your daily operations.',
        features: [
            "End-to-end deployment & setup", 
            "Data migration & systems integration", 
            "Performance configuration & tuning", 
            "Rigorous testing, QA & validation",
            "Knowledge transfer and team training"
        ]
    },
    'managed-services': {
        title: 'Managed Services',
        icon: <Server className="w-12 h-12 text-indigo-600" />,
        bg: 'bg-indigo-50',
        desc: 'We operate and optimise your systems for continuous reliability and performance.',
        details: 'Free your internal teams from day-to-day operations. Our managed services provide proactive monitoring, maintenance, and optimization of your IT infrastructure, ensuring maximum uptime and efficiency while reducing operational overhead.',
        features: [
            "24/7/365 Proactive monitoring", 
            "Routine maintenance & security patching", 
            "Continuous performance optimisation", 
            "Proactive capacity management & planning",
            "Detailed operational reporting"
        ]
    },
    'security-services': {
        title: 'Security Services',
        icon: <ShieldCheck className="w-12 h-12 text-purple-600" />,
        bg: 'bg-purple-50',
        desc: 'We protect your systems, data and users with a comprehensive defence-in-depth approach.',
        details: 'In an era of sophisticated threats, security cannot be an afterthought. We implement robust, zero-trust security frameworks that protect your critical assets without impeding your team’s ability to work effectively.',
        features: [
            "Zero-trust security architecture design", 
            "System hardening & compliance audits", 
            "24/7 Threat monitoring and detection", 
            "Rapid incident response & forensics",
            "Vulnerability management"
        ]
    },
    'cloud-services': {
        title: 'Cloud Services',
        icon: <Cloud className="w-12 h-12 text-sky-500" />,
        bg: 'bg-sky-50',
        desc: 'We design, deploy and operate secure, scalable cloud environments tailored to your needs.',
        details: 'Whether you are migrating to the cloud, operating a hybrid environment, or building cloud-native applications, our experts help you leverage the full potential of cloud technology for agility, resilience, and cost savings.',
        features: [
            "Cloud infrastructure design & deployment", 
            "Managed cloud hosting & operations", 
            "Automated Backup & Disaster Recovery (DR)", 
            "Cloud financial management (FinOps)",
            "Multi-cloud and hybrid networking"
        ]
    },
    'support': {
        title: 'Support',
        icon: <Headset className="w-12 h-12 text-violet-600" />,
        bg: 'bg-violet-50',
        desc: 'We are here when you need us - responsive, reliable and deeply technical.',
        details: 'When things go wrong, you need a partner who can resolve issues quickly. Our support teams provide deep technical expertise and adhere to strict SLAs to ensure your business experiences minimal downtime and maximum productivity.',
        features: [
            "Tiered technical assistance (L1 to L3)", 
            "Rapid issue resolution and root-cause analysis", 
            "ITIL-aligned service management", 
            "Strict SLA-driven support delivery",
            "Dedicated Technical Account Managers"
        ]
    }
};

export function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug,
    }));
}

export default async function ServiceDetailPage({ 
    params 
}: { 
    params: Promise<{ slug: string }> 
}) {
    const resolvedParams = await params;
    const service = servicesData[resolvedParams.slug as keyof typeof servicesData];

    if (!service) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 pb-24">
            {/* Minimal Hero */}
            <section className="bg-dark-navy text-white pt-24 pb-20">
                <Container>
                    <AnimatedSection direction="up" delay={0.1}>
                        <Link href="/services" className="text-cloud-blue text-sm font-semibold mb-8 flex items-center hover:text-white transition-colors">
                            &larr; Back to all Services
                        </Link>
                    </AnimatedSection>
                    <AnimatedSection direction="up" delay={0.2}>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mt-4">
                            <div className={`w-24 h-24 rounded-3xl ${service.bg} flex items-center justify-center flex-shrink-0 border-2 border-white/10 shadow-xl`}>
                                {service.icon}
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
                                <p className="text-xl text-blue-100 max-w-2xl font-light">{service.desc}</p>
                            </div>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Content Section */}
            <section className="pt-16">
                <Container>
                    <AnimatedSection direction="up" delay={0.3}>
                        <div className="bg-white rounded-3xl p-8 md:p-16 border border-slate-200 shadow-xl max-w-5xl mx-auto relative z-10">
                            <h2 className="text-2xl font-bold text-dark-navy mb-6">Overview</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-12">
                                {service.details}
                            </p>

                            <h3 className="text-xl font-bold text-dark-navy mb-6">Key Capabilities</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-16">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-slate-700 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-cloud-blue mr-3 mt-0.5 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 mt-8 text-center">
                                <h3 className="text-xl font-bold text-dark-navy mb-4">Ready to get started?</h3>
                                <p className="text-slate-600 mb-6">Talk to our experts to learn how our {service.title.toLowerCase()} can accelerate your business.</p>
                                <Link href={`/contact?interest=${encodeURIComponent(service.title)}`} className="inline-flex bg-cloud-blue hover:bg-cloud-blue-hover text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg shadow-cloud-blue/20">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>
        </div>
    );
}
