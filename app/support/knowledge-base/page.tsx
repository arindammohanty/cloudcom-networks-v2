import React from 'react';
import Link from 'next/link';
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";

export default function KnowledgeBasePage() {
    return (
        <div>
            <section className="bg-gradient-hero border-b border-white/10 pt-16 pb-20 relative overflow-hidden">
                <AnimatedSection direction="up" delay={0.1} className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Knowledge Base</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Knowledge Base</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">In-depth articles, how-to guides, and tutorials containing hundreds of practical insights from our engineering team.</p>
                </AnimatedSection>
            </section>
            
            <section className="py-20 bg-slateBg">
                <div className="container mx-auto px-6 max-w-7xl">
                    <AnimatedSection direction="up" delay={0.2} className="mb-12">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-6">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-2">Browse by Category</h2>
                                <p className="text-sm text-slate-500">Select a topic below to view related guides and documentation.</p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                        {[
                            { icon: "fa-wrench", title: "Troubleshooting", slug: "troubleshooting", desc: "Guides for common cloud and network issues, diagnostic steps, and known solutions." },
                            { icon: "fa-list-check", title: "Setup Guides", slug: "setup-guides", desc: "Step-by-step setup guides for popular tools, integrations, and platform deployments." },
                            { icon: "fa-shield", title: "Security & Compliance", slug: "security-and-compliance", desc: "Security best practices, compliance frameworks, and data protection strategies." },
                            { icon: "fa-robot", title: "AI & Automation", slug: "ai-and-automation", desc: "Automation tips, CI/CD pipelines, scripting guides, and machine learning use-cases." },
                            { icon: "fa-network-wired", title: "Network Architecture", slug: "network-architecture", desc: "Topology designs, VPC configurations, and latency optimization techniques." },
                            { icon: "fa-spell-check", title: "Glossary & Concepts", slug: "glossary-and-concepts", desc: "Clear explanations of technical terms, protocols, and foundational cloud concepts." }
                        ].map((category, idx) => (
                            <AnimatedSection key={idx} delay={0.1 + (idx * 0.05)} direction="up" className="h-full">
                                <Link href={`/support/knowledge-base/category/${category.slug}`} className="h-full bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-hover hover:-translate-y-1 transition-all flex flex-col group cursor-pointer">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center text-xl mr-4 group-hover:bg-primary group-hover:text-white transition-colors"><i className={`fa-solid ${category.icon}`}></i></div>
                                        <h3 className="font-bold text-slate-900 text-lg group-hover:text-primary transition-colors">{category.title}</h3>
                                    </div>
                                    <p className="text-sm text-slate-500 mb-6 flex-grow">{category.desc}</p>
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                                        <span className="text-xs text-slate-400 font-medium">12 Articles</span>
                                        <span className="text-primary text-[10px] font-bold uppercase tracking-wide">View Category &rarr;</span>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>

                    <div className="border-t border-slate-200 pt-16">
                        <AnimatedSection direction="up">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8">Recently Added Articles</h2>
                        </AnimatedSection>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: "Deploying a highly available Kubernetes cluster", slug: "deploying-a-highly-available-kubernetes-cluster", date: "August 12, 2026", category: "Setup Guides", time: "8 min read" },
                                { title: "Understanding Zero Trust Network Access (ZTNA)", slug: "understanding-zero-trust-network-access-ztna", date: "August 09, 2026", category: "Security & Compliance", time: "5 min read" },
                                { title: "Troubleshooting BGP route propagation delays", slug: "troubleshooting-bgp-route-propagation-delays", date: "August 05, 2026", category: "Troubleshooting", time: "12 min read" },
                                { title: "Automating database backups with AWS Lambda", slug: "automating-database-backups-with-aws-lambda", date: "July 28, 2026", category: "AI & Automation", time: "10 min read" }
                            ].map((article, idx) => (
                                <AnimatedSection key={idx} delay={0.1 * idx} direction="up">
                                    <Link href={`/support/knowledge-base/${article.slug}`} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-primary transition-colors flex items-start group">
                                        <div className="text-slate-300 text-2xl mr-4 mt-1 group-hover:text-primary transition-colors">
                                            <i className="fa-regular fa-file-alt"></i>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] font-semibold">{article.category}</span>
                                                <span className="text-[10px] text-slate-400">{article.time}</span>
                                            </div>
                                            <h4 className="font-bold text-slate-900 text-md mb-1 group-hover:text-primary transition-colors">{article.title}</h4>
                                            <p className="text-[11px] text-slate-500">Updated on {article.date}</p>
                                        </div>
                                    </Link>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
