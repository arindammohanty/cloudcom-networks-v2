"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SupportLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    
    const navItems = [
        { path: '/support', icon: 'fa-life-ring', label: 'Support Portal', exact: true },
        { path: '/support/help-center', icon: 'fa-circle-question', label: 'Help Center' },
        { path: '/support/knowledge-base', icon: 'fa-book', label: 'Knowledge Base' },
        { path: '/support/service-status', icon: 'fa-heart-pulse', label: 'Service Status' },
        { path: '/support/sla-policies', icon: 'fa-file-contract', label: 'SLA & Policies' }
    ];

    return (
        <>
            <div className="bg-white border-b border-slate-200 sticky top-20 z-40">
                <div className="mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 2xl:px-16 w-full max-w-[1720px] 2xl:max-w-[1800px] overflow-x-auto">
                    <div className="flex justify-between items-center py-4 min-w-max">
                        {navItems.map((item) => {
                            const isActive = item.exact ? pathname === item.path : pathname?.startsWith(item.path);
                            
                            return (
                                <Link 
                                    key={item.path} 
                                    href={item.path} 
                                    className={`flex flex-col items-center px-6 transition-colors pb-2 ${isActive ? 'text-primary border-b-2 border-primary' : 'text-slate-500 hover:text-primary border-transparent'}`}
                                >
                                    <i className={`fa-solid ${item.icon} text-xl mb-1`}></i>
                                    <span className="text-[10px] font-bold uppercase tracking-wide">{item.label}</span>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
            
            {children}
        </>
    );
}
