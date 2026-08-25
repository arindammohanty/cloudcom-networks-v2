import React from 'react';
import Link from 'next/link';
import { 
    MapPin, Mail, Phone, ArrowRight, Shield, Globe
} from 'lucide-react';

export default function Footer() {
    return (
        <>
            {/* CTA Pre-Footer Banner */}
            <section className="bg-gradient-blue relative overflow-hidden py-16 mt-auto">
                <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&h=800&q=80')] bg-cover bg-left opacity-20 mix-blend-screen pointer-events-none"></div>
                <div className="container mx-auto px-6 max-w-7xl xl:max-w-[1420px] 2xl:max-w-[1500px] relative z-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to Transform Your Communication and Infrastructure?</h2>
                        <p className="text-sm text-blue-200 max-w-2xl">Let's discuss how CloudCom Networks can help your organization build a secure, scalable, and future-ready digital foundation.</p>
                    </div>
                    <Link href="/contact?interest=General%20Inquiry%20(Footer%20Banner)" className="bg-white text-slate-900 hover:bg-slate-100 px-6 py-3.5 rounded-xl text-sm font-bold transition-all inline-flex items-center gap-2 shadow-lg hover:scale-105 whitespace-nowrap">
                        Get in Touch <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* Main Footer */}
            <footer className="bg-darkBg border-t border-slate-800 pt-16 pb-8">
                <div className="container mx-auto px-6 max-w-7xl xl:max-w-[1420px] 2xl:max-w-[1500px]">
                    
                    {/* Top Columns Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
                        {/* Company Info & Social Links */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-2 mb-4">
                                <img
                                    src="/media/fot_logo.png"
                                    alt="CloudCom Networks Logo"
                                    className="h-auto w-44 object-contain rounded-xl"
                                />
                            </div>
                            <p className="text-xs text-slate-400 mb-6 leading-relaxed pr-4">
                                Building secure communications and resilient digital infrastructure for a connected, sovereign, and AI-enabled tomorrow.
                            </p>
                            
                            {/* Social Media Links */}
                            <div className="flex items-center space-x-3 mb-6">
                                <Link 
                                    href="https://linkedin.com/company/cloudcom-networks" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    title="CloudCom on LinkedIn"
                                    className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:bg-cloud-blue hover:text-white hover:border-cloud-blue transition-all"
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                                    </svg>
                                </Link>
                                <Link 
                                    href="https://twitter.com/cloudcomnet" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    title="CloudCom on X (Twitter)"
                                    className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:bg-cloud-blue hover:text-white hover:border-cloud-blue transition-all"
                                >
                                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                </Link>
                                <Link 
                                    href="https://youtube.com/@cloudcomnetworks" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    title="CloudCom on YouTube"
                                    className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:bg-cloud-blue hover:text-white hover:border-cloud-blue transition-all"
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                    </svg>
                                </Link>
                                <Link 
                                    href="https://github.com/arindammohanty/cloudcom-networks-website" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    title="CloudCom on GitHub"
                                    className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:bg-cloud-blue hover:text-white hover:border-cloud-blue transition-all"
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                                    </svg>
                                </Link>
                                <Link 
                                    href="mailto:hello@cloudcomnet.com" 
                                    title="Email CloudCom Networks"
                                    className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:bg-cloud-blue hover:text-white hover:border-cloud-blue transition-all"
                                >
                                    <Mail className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-white font-bold text-sm mb-5 tracking-wide">Quick Links</h4>
                            <ul className="space-y-2.5 text-xs font-medium text-slate-400">
                                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                                <li><Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
                                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                                <li><Link href="/industries" className="hover:text-white transition-colors">Industries</Link></li>
                                <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
                                <li><Link href="/partners" className="hover:text-white transition-colors">Partners</Link></li>
                                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                            </ul>
                        </div>

                        {/* Solutions */}
                        <div>
                            <h4 className="text-white font-bold text-sm mb-5 tracking-wide">Solutions</h4>
                            <ul className="space-y-2.5 text-xs font-medium text-slate-400">
                                <li><Link href="/solutions/cloud" className="hover:text-white transition-colors">Enterprise Cloud</Link></li>
                                <li><Link href="/solutions/communications" className="hover:text-white transition-colors">Enterprise Comms</Link></li>
                                <li><Link href="/solutions/applications" className="hover:text-white transition-colors">Enterprise Applications</Link></li>
                                <li><Link href="/solutions/managed-operations" className="hover:text-white transition-colors">Managed Operations</Link></li>
                                <li><Link href="/solutions/security" className="hover:text-white transition-colors">Cybersecurity</Link></li>
                                <li><Link href="/solutions/iot-edge" className="hover:text-white transition-colors">IoT & Edge</Link></li>
                                <li><Link href="/solutions/business-operations" className="hover:text-white transition-colors">Business Operations</Link></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-white font-bold text-sm mb-5 tracking-wide">Services</h4>
                            <ul className="space-y-2.5 text-xs font-medium text-slate-400">
                                <li><Link href="/services/consulting" className="hover:text-white transition-colors">Advisory & Consulting</Link></li>
                                <li><Link href="/services/implementation" className="hover:text-white transition-colors">Architecture & Deploy</Link></li>
                                <li><Link href="/services/managed-services" className="hover:text-white transition-colors">Managed Services</Link></li>
                                <li><Link href="/services/cloud-migration" className="hover:text-white transition-colors">Cloud Migration</Link></li>
                                <li><Link href="/services/security-audit" className="hover:text-white transition-colors">Security Assessment</Link></li>
                                <li><Link href="/support" className="hover:text-white transition-colors">Support Portal</Link></li>
                            </ul>
                        </div>

                        {/* Contact info */}
                        <div>
                            <h4 className="text-white font-bold text-sm mb-5 tracking-wide">Contact</h4>
                            <ul className="space-y-2.5 text-xs font-medium text-slate-400">
                                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Sales</Link></li>
                                <li><Link href="mailto:hello@cloudcomnet.com" className="hover:text-white transition-colors">hello@cloudcomnet.com</Link></li>
                                <li><Link href="tel:+918606014781" className="hover:text-white transition-colors">+91 86060 14781</Link></li>
                                <li><Link href="/support" className="hover:text-white transition-colors">24/7 SLA Support</Link></li>
                                <li><Link href="/support/sla-policies" className="hover:text-white transition-colors">SLA Policies</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Global Office Locations Strip */}
                    <div className="border-t border-slate-800/80 pt-8 pb-8">
                        <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-cloud-blue" />
                            Our Global Office Locations
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Malaysia Office */}
                            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 flex items-start gap-3.5">
                                <div className="w-8 h-8 rounded-xl bg-blue-900/40 text-blue-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Globe className="w-4 h-4" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-white mb-1">Malaysia Office (APAC Hub)</div>
                                    <p className="text-[11px] text-slate-400 leading-relaxed">
                                        A-10-11, Brickfields, 50470 Kuala Lumpur, Federal Territory of Kuala Lumpur
                                    </p>
                                </div>
                            </div>

                            {/* India Office */}
                            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 flex items-start gap-3.5">
                                <div className="w-8 h-8 rounded-xl bg-indigo-900/40 text-indigo-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Globe className="w-4 h-4" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-white mb-1">India Office (Engineering Centre)</div>
                                    <p className="text-[11px] text-slate-400 leading-relaxed">
                                        HIG-425, Kalinga Vihar, Phase-V, Bhubaneshwar, Odisha
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Copyright & Legal */}
                    <div className="border-t border-slate-800/80 pt-6 flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-500">
                        <p>&copy; 2026 CloudCom Networks Private Limited. All Rights Reserved.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0 font-medium">
                            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
