"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (!pathname) return false;
        if (pathname === path || pathname.startsWith(`${path}/`)) return true;
        if (path === '/about' && (pathname === '/company' || pathname.startsWith('/company/'))) return true;
        if (path === '/company' && (pathname === '/about' || pathname.startsWith('/about/'))) return true;
        return false;
    };

    const navLinks = [
        { name: 'Solutions', href: '/solutions' },
        { name: 'Services', href: '/services' },
        { name: 'Industries', href: '/industries' },
        { name: 'Partners', href: '/partners' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="bg-white border-b border-slate-100 sticky top-0 z-50 transition-all shadow-sm">
            <div className="container mx-auto px-6 max-w-7xl xl:max-w-[1420px] 2xl:max-w-[1500px] h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    {/* Assuming the logo is in public/media/nav_logo.png as before */}
                    <img 
                        src="/media/nav_logo.png" 
                        alt="CloudCom Networks Logo" 
                        className="h-[72px] w-auto object-contain" 
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex h-full items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name}
                            href={link.href} 
                            className={`text-sm font-medium transition-colors hover:text-cloud-blue ${
                                isActive(link.href) ? 'text-cloud-blue' : 'text-slate-600'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right Side CTA */}
                <div className="flex items-center space-x-4">
                    <Link 
                        href="/contact" 
                        className="hidden md:flex bg-cloud-blue hover:bg-cloud-blue-hover text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors items-center gap-2 shadow-sm"
                    >
                        Talk to Us <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                        className="lg:hidden text-slate-600 focus:outline-none p-2"
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-b border-slate-100 absolute w-full z-40 shadow-xl pb-4">
                    <div className="px-4 pt-2 pb-6 flex flex-col h-[80vh] overflow-y-auto">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name}
                                href={link.href} 
                                onClick={() => setIsMobileMenuOpen(false)} 
                                className={`block px-3 py-4 text-base font-medium border-b border-slate-50 transition-colors ${
                                    isActive(link.href) ? 'text-cloud-blue bg-slate-50/50' : 'text-slate-600 hover:text-cloud-blue hover:bg-slate-50/50'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link 
                            href="/contact" 
                            onClick={() => setIsMobileMenuOpen(false)} 
                            className="flex justify-center items-center gap-2 mt-6 bg-cloud-blue hover:bg-cloud-blue-hover text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors shadow-sm"
                        >
                            Talk to Us <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
