"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Mail, Lock, Target, ShieldCheck } from "lucide-react";

// Comprehensive list of global country codes
const COUNTRY_CODES = [
    { code: '+91', country: 'IN' }, { code: '+1', country: 'US/CA' }, { code: '+44', country: 'UK' },
    { code: '+61', country: 'AU' }, { code: '+81', country: 'JP' }, { code: '+49', country: 'DE' },
    { code: '+33', country: 'FR' }, { code: '+39', country: 'IT' }, { code: '+86', country: 'CN' },
    { code: '+7', country: 'RU/KZ' }, { code: '+55', country: 'BR' }, { code: '+52', country: 'MX' },
    { code: '+34', country: 'ES' }, { code: '+31', country: 'NL' }, { code: '+46', country: 'SE' },
    { code: '+41', country: 'CH' }, { code: '+65', country: 'SG' }, { code: '+60', country: 'MY' },
    { code: '+62', country: 'ID' }, { code: '+63', country: 'PH' }, { code: '+64', country: 'NZ' },
    { code: '+82', country: 'KR' }, { code: '+27', country: 'ZA' }, { code: '+971', country: 'AE' },
    { code: '+966', country: 'SA' }, { code: '+92', country: 'PK' }, { code: '+880', country: 'BD' },
    { code: '+94', country: 'LK' }, { code: '+977', country: 'NP' }, { code: '+93', country: 'AF' },
    { code: '+20', country: 'EG' }, { code: '+234', country: 'NG' }, { code: '+254', country: 'KE' },
    { code: '+54', country: 'AR' }, { code: '+56', country: 'CL' }, { code: '+57', country: 'CO' },
    { code: '+51', country: 'PE' }, { code: '+58', country: 'VE' }, { code: '+32', country: 'BE' },
    { code: '+43', country: 'AT' }, { code: '+45', country: 'DK' }, { code: '+47', country: 'NO' },
    { code: '+48', country: 'PL' }, { code: '+351', country: 'PT' }, { code: '+353', country: 'IE' },
    { code: '+358', country: 'FI' }, { code: '+380', country: 'UA' }, { code: '+420', country: 'CZ' },
    { code: '+36', country: 'HU' }, { code: '+40', country: 'RO' }, { code: '+30', country: 'GR' },
    { code: '+90', country: 'TR' }, { code: '+98', country: 'IR' }, { code: '+964', country: 'IQ' },
    { code: '+972', country: 'IL' }, { code: '+965', country: 'KW' }, { code: '+974', country: 'QA' },
    // Add more as needed, but this covers the vast majority of international traffic
];

function ContactFormContent() {
    const searchParams = useSearchParams();
    const interestParam = searchParams.get('interest');

    // Added countryCode to state, defaulting to +91
    const [formData, setFormData] = useState({
        name: '', designation: '', email: '', countryCode: '+91', phone: '', company: '', requirement: '', message: ''
    });

    useEffect(() => {
        if (interestParam) {
            setFormData(prev => ({ ...prev, requirement: interestParam }));
        }
    }, [interestParam]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Specialized handler to enforce strict 10-digit numerical entry for the phone number
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numericValue = e.target.value.replace(/\D/g, ''); // Strip all non-numeric characters
        if (numericValue.length <= 10) {
            setFormData(prev => ({ ...prev, phone: numericValue }));
        }
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const trackedSection = interestParam ? interestParam : 'General Inquiry (Direct Visit)';
        
        // Format the phone number properly if it was provided
        const formattedPhone = formData.phone ? `${formData.countryCode} ${formData.phone}` : 'Not Provided';
        
        const popupMessage = `
--- COMMUNICATION DISPATCH RECORD ---
Target Section: ${trackedSection}

User Details:
Name: ${formData.name}
Designation: ${formData.designation || 'Not Provided'}
Email: ${formData.email}
Phone: ${formattedPhone}
Company: ${formData.company || 'Not Provided'}

Message Contents:
Requirement: ${formData.requirement}
Message: ${formData.message}

(This payload will be routed to the backend communications handler)
        `.trim();

        alert(popupMessage);
        
        // Reset form, keeping the default +91 country code intact
        setFormData({ name: '', designation: '', email: '', countryCode: '+91', phone: '', company: '', requirement: '', message: '' });
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" required className="w-full px-4 py-2.5 rounded border border-slate-200 text-xs outline-none focus:border-cloud-blue text-slate-900" />
                </div>
                <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Designation (Optional)</label>
                    <input type="text" name="designation" value={formData.designation} onChange={handleInputChange} placeholder="Your designation" className="w-full px-4 py-2.5 rounded border border-slate-200 text-xs outline-none focus:border-cloud-blue text-slate-900" />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Organisation / Company *</label>
                    <input type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Enter your organisation or company name" required className="w-full px-4 py-2.5 rounded border border-slate-200 text-xs outline-none focus:border-cloud-blue text-slate-900" />
                </div>
                <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="name@company.com" required className="w-full px-4 py-2.5 rounded border border-slate-200 text-xs outline-none focus:border-cloud-blue text-slate-900" />
                </div>
                
                <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                    <div className="flex">
                        <select 
                            name="countryCode" 
                            value={formData.countryCode} 
                            onChange={handleInputChange}
                            className="px-2 py-2.5 rounded-l border border-r-0 border-slate-200 text-xs outline-none focus:border-cloud-blue text-slate-900 bg-white"
                        >
                            {COUNTRY_CODES.map((item) => (
                                <option key={item.code} value={item.code}>
                                    {item.country} ({item.code})
                                </option>
                            ))}
                        </select>
                        <input 
                            type="tel" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handlePhoneChange} 
                            placeholder="+91 98765 43210" 
                            pattern="\d{10}"
                            minLength={10}
                            maxLength={10}
                            title="Please enter exactly 10 digits"
                            required
                            className="w-full px-4 py-2.5 rounded-r border border-slate-200 text-xs outline-none focus:border-cloud-blue text-slate-900" 
                        />
                    </div>
                </div>
                
                <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Requirement *</label>
                    <select name="requirement" value={formData.requirement} onChange={handleInputChange} required className="w-full px-4 py-2.5 rounded border border-slate-200 text-xs outline-none focus:border-cloud-blue text-slate-900 bg-white">
                        <option value="" disabled>Select your requirement</option>
                        <option value="Cloud & Infrastructure">Cloud & Infrastructure</option>
                        <option value="Communication & Collaboration">Communication & Collaboration</option>
                        <option value="Security">Security</option>
                        <option value="Digital & Business Technology">Digital & Business Technology</option>
                        <option value="Managed Services">Managed Services</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-xs font-semibold text-slate-700 mb-1">Message *</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell us more about your goals and how we can help..." required rows={5} className="w-full px-4 py-2.5 rounded border border-slate-200 text-xs outline-none focus:border-cloud-blue resize-none text-slate-900"></textarea>
            </div>
            <div className="mb-6 flex items-start">
                <input type="checkbox" id="terms" className="mt-0.5 mr-2" required />
                <label htmlFor="terms" className="text-[10px] text-slate-500">I agree to the Privacy Policy and Terms of Service.</label>
            </div>
            <button type="submit" className="w-full bg-cloud-blue hover:bg-cloud-blue-hover text-white px-6 py-3 rounded-lg text-sm font-bold transition-colors shadow-md flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                Send Enquiry
            </button>
        </form>
    );
}

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-dark-navy pt-24 pb-20 relative overflow-hidden text-white">
                 <div className="absolute inset-0 z-0 opacity-10 bg-[url('/media/mesh.svg')] mix-blend-overlay"></div>
                 <div className="container mx-auto px-6 max-w-7xl relative z-10">
                     <AnimatedSection direction="up" className="max-w-2xl">
                         <div className="text-cloud-blue font-bold tracking-widest text-sm uppercase mb-4">Contact Us</div>
                         <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Let's build<br/><span className="text-cloud-blue">something better.</span></h1>
                         <p className="text-xl text-blue-100/80 mb-10 leading-relaxed font-light">Tell us what you're trying to achieve.<br/>Our team will help you identify the right<br/>technology approach.</p>
                     </AnimatedSection>
                 </div>
            </section>

            <section className="py-16 bg-slate-50 relative z-20 min-h-screen">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-8 mb-16">
                        {/* Contact Form Wrapper */}
                        <AnimatedSection delay={0.2} direction="up" className="lg:w-2/3 bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-cloud-blue">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-dark-navy">Send us an enquiry</h3>
                                    <p className="text-slate-500 text-xs mt-1">All fields marked with * are required.</p>
                                </div>
                            </div>
                            
                            {/* Suspense boundary required by Next.js when using useSearchParams */}
                            <Suspense fallback={<div className="text-slate-500 text-sm py-4">Loading form framework...</div>}>
                                <ContactFormContent />
                            </Suspense>
                        </AnimatedSection>

                        {/* Contact Info Cards */}
                        <AnimatedSection delay={0.1} direction="up" className="lg:w-1/3">
                            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 h-full">
                                <h3 className="text-xl font-bold text-dark-navy mb-6">Get in touch</h3>
                                <div className="mb-6">
                                    <h4 className="font-bold text-cloud-blue text-sm">CloudCom Networks Private Limited</h4>
                                    <p className="text-slate-500 text-xs mt-1">Bhubaneswar, Odisha, India</p>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="w-10 h-10 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center mr-4 flex-shrink-0">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-dark-navy text-sm">Email</h4>
                                            <p className="text-slate-600 text-xs mt-1">hello@cloudcomnet.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-10 h-10 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center mr-4 flex-shrink-0">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-dark-navy text-sm">Phone</h4>
                                            <p className="text-slate-600 text-xs mt-1">+91 86060 14781</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-10 h-10 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center mr-4 flex-shrink-0">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-dark-navy text-sm">Website</h4>
                                            <p className="text-slate-600 text-xs mt-1">www.cloudcomnet.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Our Commitment */}
                    <AnimatedSection direction="up" delay={0.3} className="mb-20">
                        <div className="bg-slate-50/50 rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/3 text-center md:text-left">
                                <div className="text-cloud-blue font-bold tracking-widest text-xs uppercase mb-3">Our Commitment</div>
                                <h3 className="text-2xl font-bold text-dark-navy mb-4">Real people. Real conversations.</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    We believe the best solutions come from understanding your challenges. Expect a clear, honest and helpful response from our team.
                                </p>
                            </div>
                            
                            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-cloud-blue flex-shrink-0 shadow-sm">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark-navy text-sm">No spam. Ever.</h4>
                                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">We respect your inbox.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-cloud-blue flex-shrink-0 shadow-sm">
                                        <Lock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark-navy text-sm">Confidential by default.</h4>
                                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">Your information is always kept private.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-cloud-blue flex-shrink-0 shadow-sm">
                                        <Target className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark-navy text-sm">Solution focused.</h4>
                                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">We listen, understand and recommend what's right.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-cloud-blue flex-shrink-0 shadow-sm">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark-navy text-sm">Long-term partners.</h4>
                                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">We grow with you, every step of the way.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Offices */}
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-slate-900">Our Offices</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <AnimatedSection delay={0.1} direction="up" className="h-full">
                            <div className="h-full bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                                <i className="fa-regular fa-building text-3xl text-primary mb-3"></i>
                                <h4 className="font-bold text-slate-900 text-sm mb-1">Registered Office</h4>
                                <p className="text-[11px] text-slate-500">Bhubaneswar, Odisha, India</p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={0.2} direction="up" className="h-full">
                            <div className="h-full bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                                <i className="fa-solid fa-handshake text-3xl text-primary mb-3"></i>
                                <h4 className="font-bold text-slate-900 text-sm mb-1">Sales Enquiries</h4>
                                <p className="text-[11px] text-slate-500">sales@cloudcomnet.com</p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={0.3} direction="up" className="h-full">
                            <div className="h-full bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                                <i className="fa-solid fa-headset text-3xl text-primary mb-3"></i>
                                <h4 className="font-bold text-slate-900 text-sm mb-1">Support & Services</h4>
                                <p className="text-[11px] text-slate-500">support@cloudcomnet.com</p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </div>
    );
}
