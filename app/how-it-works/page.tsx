'use client';

import React from 'react';
import Link from 'next/link';

export default function HowItWorksPage() {
  const steps = [
    {
      step: '01',
      title: 'Link Your WhatsApp Business Number',
      description: 'Connect your number via simple QR code scan or standard Meta Cloud API credentials in under 2 minutes.',
    },
    {
      step: '02',
      title: 'Configure AI Knowledge & System Rules',
      description: 'Upload your service menus, FAQs, business operating hours, or calendar availability into your custom agent portal.',
    },
    {
      step: '03',
      title: 'Enable Automated Workflows',
      description: 'Activate automated voice note processing, appointment slot reservation, and instant human handover triggers.',
    },
    {
      step: '04',
      title: 'Scale Sales & Monitor Analytics',
      description: 'Track ongoing customer conversations, review order logs, and export leads effortlessly to CSV.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-between selection:bg-emerald-500 selection:text-slate-950">
      <div>
        {/* Navigation Header */}
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-slate-800/60 w-full">
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="TechRobotes Logo" 
              className="h-16 w-auto object-contain brightness-130 contrast-125 drop-shadow-[0_0_16px_rgba(16,185,129,0.7)] group-hover:scale-105 transition-all" 
            />
            <span className="text-xl sm:text-2xl font-black text-white tracking-tight hidden sm:inline">
              <span className="text-emerald-400">TechRobotes</span>.io
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <Link href="/features" className="hover:text-emerald-400 transition-colors">Features</Link>
            <Link href="/how-it-works" className="text-emerald-400 font-bold">How It Works</Link>
            <Link href="/pricing" className="hover:text-emerald-400 transition-colors">Pricing</Link>
            <Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link>
          </div>
          <a 
            href="https://app.techrobotes.io" 
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition-all shadow-lg shadow-emerald-500/20"
          >
            Launch App
          </a>
        </nav>

        {/* Main Content */}
        <main className="pb-20">
          <div className="max-w-4xl mx-auto text-center pt-16 px-6">
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">How TechRobotes Works</h1>
            <p className="text-slate-400 text-base sm:text-lg">Deploy your customized WhatsApp AI assistant in 4 streamlined steps.</p>
          </div>

          <div className="max-w-5xl mx-auto px-6 mt-16 space-y-8 text-left">
            {steps.map((item, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-6 hover:border-emerald-500/40 transition-colors">
                <div className="text-4xl font-black text-emerald-500 bg-emerald-500/10 px-6 py-3 rounded-2xl border border-emerald-500/25 shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Footer Section */}
      <footer className="w-full border-t border-slate-800/60 bg-slate-950 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; 2026 TechRobotes. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}