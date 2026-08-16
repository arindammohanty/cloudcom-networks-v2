import React from 'react';
import Link from 'next/link';
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";

export default function HelpCenterPage() {
    return (
        <div>
            <section className="bg-gradient-hero border-b border-white/10 pt-16 pb-20 relative overflow-hidden">
                <AnimatedSection direction="up" delay={0.1} className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Help Center</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Help Center</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">Fast, friendly help when you need it. Our Help Center is your one-stop destination for quick answers.</p>
                    <div className="relative max-w-2xl mx-auto flex mt-10 shadow-2xl">
                        <i className="fa-solid fa-magnifying-glass absolute left-6 top-4 text-slate-400 z-10 text-lg"></i>
                        <input type="text" placeholder="Search for solutions by keyword or topic..." className="w-full bg-white pl-14 pr-4 py-4 rounded-l-xl text-sm border-0 focus:ring-2 focus:ring-primary outline-none text-[#0b1121] placeholder:text-slate-400 relative z-0" />
                        <button className="bg-primary hover:bg-primaryHover text-white px-8 py-4 rounded-r-xl font-bold text-sm transition-colors z-10 flex items-center">Search <i className="fa-solid fa-arrow-right ml-2 hidden sm:inline"></i></button>
                    </div>
                </AnimatedSection>
            </section>
            
            <section className="py-20 bg-slateBg">
                <div className="container mx-auto px-6 max-w-7xl">
                    <AnimatedSection direction="up" delay={0.2} className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">How can we help you today?</h2>
                        <p className="text-sm text-slate-500">Choose a category to find the answers you need.</p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        <AnimatedSection delay={0.1} direction="up" className="h-full">
                            <Link href="/support/knowledge-base" className="h-full bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-hover hover:-translate-y-1 transition-all text-center group block relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="w-16 h-16 mx-auto bg-blue-50 text-primary rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform"><i className="fa-solid fa-book-open"></i></div>
                                <h3 className="font-bold text-slate-900 text-lg mb-3">Browse Articles</h3>
                                <p className="text-sm text-slate-500">Dive into our comprehensive guides and video tutorials.</p>
                            </Link>
                        </AnimatedSection>
                        
                        <AnimatedSection delay={0.2} direction="up" className="h-full">
                            <Link href="/contact?interest=Support%20Ticket" className="h-full bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-hover hover:-translate-y-1 transition-all text-center group block relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-600 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform"><i className="fa-solid fa-ticket"></i></div>
                                <h3 className="font-bold text-slate-900 text-lg mb-3">Submit a Ticket</h3>
                                <p className="text-sm text-slate-500">Submit a support ticket directly to our technical team.</p>
                            </Link>
                        </AnimatedSection>
                        
                        <AnimatedSection delay={0.3} direction="up" className="h-full">
                            <Link href="/support/service-status" className="h-full bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-hover hover:-translate-y-1 transition-all text-center group block relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="w-16 h-16 mx-auto bg-green-50 text-green-600 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform"><i className="fa-solid fa-heart-pulse"></i></div>
                                <h3 className="font-bold text-slate-900 text-lg mb-3">System Status</h3>
                                <p className="text-sm text-slate-500">Check real-time system status and maintenance updates.</p>
                            </Link>
                        </AnimatedSection>
                        
                        <AnimatedSection delay={0.4} direction="up" className="h-full">
                            <Link href="/contact?interest=Support%20Call" className="h-full bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-hover hover:-translate-y-1 transition-all text-center group block relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="w-16 h-16 mx-auto bg-purple-50 text-purple-600 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform"><i className="fa-solid fa-phone"></i></div>
                                <h3 className="font-bold text-slate-900 text-lg mb-3">Schedule a Call</h3>
                                <p className="text-sm text-slate-500">Book a quick 1-on-1 session with our support engineers.</p>
                            </Link>
                        </AnimatedSection>
                    </div>

                    <div className="border-t border-slate-200 pt-16">
                        <AnimatedSection direction="up">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Popular Topics</h2>
                        </AnimatedSection>
                        <div className="grid md:grid-cols-3 gap-8">
                            <AnimatedSection delay={0.1} direction="up">
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-full">
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center"><i className="fa-solid fa-cloud text-primary mr-3 text-xl"></i> Cloud Infrastructure</h3>
                                    <ul className="space-y-3">
                                        <li><Link href="/support/knowledge-base/provisioning-a-new-vm-instance" className="text-sm text-slate-600 hover:text-primary transition-colors flex items-center"><i className="fa-regular fa-file-lines mr-2 text-slate-400"></i> Provisioning a new VM instance</Link></li>
                                        <li><Link href="/support/knowledge-base/configuring-vpc-peering" className="text-sm text-slate-600 hover:text-primary transition-colors flex items-center"><i className="fa-regular fa-file-lines mr-2 text-slate-400"></i> Configuring VPC Peering</Link></li>
                                        <li><Link href="/support/knowledge-base/expanding-block-storage-volumes" className="text-sm text-slate-600 hover:text-primary transition-colors flex items-center"><i className="fa-regular fa-file-lines mr-2 text-slate-400"></i> Expanding Block Storage volumes</Link></li>
                                        <li><Link href="/support/knowledge-base/optimizing-cloud-spend" className="text-sm text-slate-600 hover:text-primary transition-colors flex items-center"><i className="fa-regular fa-file-lines mr-2 text-slate-400"></i> Optimizing cloud spend</Link></li>
                                    </ul>
                                </div>
                            </AnimatedSection>
                            <AnimatedSection delay={0.2} direction="up">
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-full">
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center"><i className="fa-solid fa-shield-halved text-primary mr-3 text-xl"></i> Security & Access</h3>
                                    <ul className="space-y-3">
                                        <li><Link href="/support/knowledge-base/setting-up-mfa-for-your-org" className="text-sm text-slate-600 hover:text-primary transition-colors flex items-center"><i className="fa-regular fa-file-lines mr-2 text-slate-400"></i> Setting up MFA for your Org</Link></li>
                                        <li><Link href="/support/knowledge-base/managing-iam-roles-and-policies" className="text-sm text-slate-600 hover:text-primary transition-colors flex items-center"><i className="fa-regular fa-file-lines mr-2 text-slate-400"></i> Managing IAM Roles & Policies</Link></li>
                                        <li><Link href="/support/knowledge-base/rotating-api-keys-safely" className="text-sm text-slate-600 hover:text-primary transition-colors flex items-center"><i className="fa-regular fa-file-lines mr-2 text-slate-400"></i> Rotating API Keys safely</Link></li>
                                        <li><Link href="/support/knowledge-base/audit-log-retention-policies" className="text-sm text-slate-600 hover:text-primary transition-colors flex items-center"><i className="fa-regular fa-file-lines mr-2 text-slate-400"></i> Audit log retention policies</Link></li>
                                    </ul>
                                </div>
                            </AnimatedSection>
                            <AnimatedSection delay={0.3} direction="up">
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-full">
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center"><i className="fa-solid fa-file-invoice text-primary mr-3 text-xl"></i> Billing & Account</h3>
                                    <ul className="space-y-3">
                                        <li><Link href="/support/knowledge-base/understanding-your-monthly-invoice" className="text-sm text-slate-600 hover:text-primary transition-colors flex items-center"><i className="fa-regular fa-file-lines mr-2 text-slate-400"></i> Understanding your monthly invoice</Link></li>
                                        <li><Link href="/support/knowledge-base/upgrading-your-support-plan" className="text-sm text-slate-600 hover:text-primary transition-colors flex items-center"><i className="fa-regular fa-file-lines mr-2 text-slate-400"></i> Upgrading your Support Plan</Link></li>
                                        <li><Link href="/support/knowledge-base/managing-payment-methods" className="text-sm text-slate-600 hover:text-primary transition-colors flex items-center"><i className="fa-regular fa-file-lines mr-2 text-slate-400"></i> Managing Payment Methods</Link></li>
                                        <li><Link href="/support/knowledge-base/consolidating-child-accounts" className="text-sm text-slate-600 hover:text-primary transition-colors flex items-center"><i className="fa-regular fa-file-lines mr-2 text-slate-400"></i> Consolidating child accounts</Link></li>
                                    </ul>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Need More Help Banner */}
            <section className="py-16 bg-white border-t border-slate-200">
                <Container className="max-w-5xl text-center">
                    <AnimatedSection direction="up">
                        <div className="bg-slate-900 rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-xl">
                            <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center mix-blend-screen"></div>
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between text-left">
                                <div className="md:w-2/3 mb-6 md:mb-0 pr-0 md:pr-10">
                                    <h2 className="text-3xl font-bold text-white mb-4">Still need help?</h2>
                                    <p className="text-slate-300 text-sm leading-relaxed">Our certified engineers are available 24/7 to assist you with any technical issues, architectural questions, or critical emergencies.</p>
                                </div>
                                <div className="md:w-1/3 flex justify-end w-full md:w-auto">
                                    <Link href="/contact" className="bg-primary hover:bg-primaryHover text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/30 inline-flex items-center whitespace-nowrap">
                                        Contact Support <i className="fa-solid fa-arrow-right ml-2"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>
        </div>
    );
}
