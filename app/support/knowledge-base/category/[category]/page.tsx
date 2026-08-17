import React from 'react';
import Link from 'next/link';
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function generateStaticParams() {
    return [
        { category: "troubleshooting" },
        { category: "setup-guides" },
        { category: "security-and-compliance" },
        { category: "ai-and-automation" },
        { category: "network-architecture" },
        { category: "glossary-and-concepts" }
    ];
}

export default async function KnowledgeBaseCategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const resolvedParams = await params;
    const category = resolvedParams.category;
    
    // Format the slug into a readable title
    const formattedTitle = category 
        ? category.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        : 'Category';

    return (
        <div className="min-h-screen bg-slateBg flex flex-col">
            <section className="bg-gradient-hero pt-16 pb-20 relative overflow-hidden">
                <AnimatedSection direction="up" delay={0.1} className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                    <div className="text-primary font-semibold text-xs mb-4">
                        <Link href="/support/knowledge-base" className="hover:underline">Knowledge Base</Link> 
                        <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> 
                        {formattedTitle}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{formattedTitle}</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">Browse all articles, guides, and documentation related to {formattedTitle.toLowerCase()}.</p>
                </AnimatedSection>
            </section>
            
            <section className="py-20 flex-grow">
                <div className="container mx-auto px-6 max-w-4xl">
                    <AnimatedSection direction="up" delay={0.2} className="space-y-6">
                        {/* Placeholder Articles */}
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Link href={`/support/knowledge-base/sample-article-${i}`} key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary transition-all flex items-start group">
                                <div className="text-slate-300 text-3xl mr-5 mt-1 group-hover:text-primary transition-colors">
                                    <i className="fa-regular fa-file-alt"></i>
                                </div>
                                <div className="flex-grow">
                                    <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-primary transition-colors">Understanding {formattedTitle} Concepts - Part {i}</h3>
                                    <p className="text-sm text-slate-500 mb-3">A comprehensive overview of the fundamental concepts you need to know when working with {formattedTitle.toLowerCase()} in a modern cloud environment.</p>
                                    <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                                        <span><i className="fa-regular fa-calendar mr-1"></i> August {15 - i}, 2026</span>
                                        <span><i className="fa-regular fa-clock mr-1"></i> {i * 2 + 3} min read</span>
                                    </div>
                                </div>
                                <div className="hidden md:flex items-center text-slate-300 group-hover:text-primary transition-colors ml-4 mt-8">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </div>
                            </Link>
                        ))}
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
