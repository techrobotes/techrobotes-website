'use client';

import React from 'react';

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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-20">
      {/* Navigation Header */}
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between border-b border-slate-800/60">
        <a href="/" className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="TechRobotes Logo" 
            className="h-10 w-auto object-contain" 
          />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="/features" className="hover:text-emerald-400 transition-colors">Features</a>
          <a href="/how-it-works" className="text-emerald-400 font-bold">How It Works</a>
          <a href="/pricing" className="hover:text-emerald-400 transition-colors">Pricing</a>
          <a href="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</a>
        </div>
        <a 
          href="https://app.techrobotes.io" 
          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition-all shadow-lg shadow-emerald-500/20"
        >
          Launch App
        </a>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center pt-16 px-6">
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">How TechRobotes Works</h1>
        <p className="text-slate-400 text-base sm:text-lg">Deploy your customized WhatsApp AI assistant in 4 streamlined steps.</p>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-16 space-y-8">
        {steps.map((item, idx) => (
          <div key={idx} className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="text-4xl font-black text-emerald-500 bg-emerald-500/10 px-6 py-3 rounded-2xl border border-emerald-500/20">
              {item.step}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}