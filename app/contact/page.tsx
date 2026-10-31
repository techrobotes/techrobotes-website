'use client';

import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-20">
      {/* Navigation Header */}
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-slate-800/60">
        <a href="/" className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="TechRobotes Logo" 
            className="h-12 w-auto object-contain mix-blend-screen drop-shadow-[0_0_12px_rgba(16,185,129,0.3)]" 
          />
          <span className="text-xl font-black text-white tracking-tight hidden sm:inline">
            <span className="text-emerald-400">TechRobotes</span>.io
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="/features" className="hover:text-emerald-400 transition-colors">Features</a>
          <a href="/how-it-works" className="hover:text-emerald-400 transition-colors">How It Works</a>
          <a href="/pricing" className="hover:text-emerald-400 transition-colors">Pricing</a>
          <a href="/contact" className="text-emerald-400 font-bold">Contact Us</a>
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
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Get in Touch</h1>
        <p className="text-slate-400 text-base sm:text-lg">
          Have custom enterprise requirements or setup questions? Contact our technical team.
        </p>
      </div>

      <div className="max-w-xl mx-auto px-6 mt-12 bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-xl">
        <div className="space-y-6">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <div className="p-4 bg-slate-800 rounded-xl text-emerald-400 font-mono text-sm border border-slate-700">
              techsrobotes@gmail.com
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              WhatsApp Support
            </label>
            <div className="p-4 bg-slate-800 rounded-xl text-emerald-400 font-mono text-sm border border-slate-700">
              Direct Support Available via Live Chat Handover
            </div>
          </div>
          <a 
            href="https://app.techrobotes.io" 
            className="block text-center w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-500/20"
          >
            Access Platform Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}