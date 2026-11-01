'use client';

import React from 'react';
import Link from 'next/link';

export default function PrivacyPage() {
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
            <Link href="/how-it-works" className="hover:text-emerald-400 transition-colors">How It Works</Link>
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
        <main className="max-w-4xl mx-auto px-6 py-16 flex-1 text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">Privacy Policy</h1>
          <p className="text-slate-400 text-xs mb-8">Last Updated: November 2026</p>

          <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-3">1. Information We Collect</h2>
              <p className="text-slate-400">
                TechRobotes.io collects account information (email address, tenant preferences) and incoming/outgoing messaging metadata necessary to operate automated WhatsApp AI chatbots, appointment reservations, and customer support handovers.
              </p>
            </section>

            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-3">2. How We Use Your Data</h2>
              <p className="text-slate-400">
                Message data is processed securely through cloud LLM APIs solely to generate AI responses, transcribe audio voice notes, and trigger integration webhooks. We do not sell or rent user conversation data to third parties.
              </p>
            </section>

            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-3">3. Data Security &amp; Storage</h2>
              <p className="text-slate-400">
                All communications between WhatsApp, your application tenant, and servers are encrypted in transit using SSL/TLS protocols. Client data is securely hosted on dedicated virtual server infrastructure.
              </p>
            </section>
          </div>
        </main>
      </div>

      {/* Global Footer */}
      <footer className="w-full border-t border-slate-800/60 bg-slate-950 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; 2026 TechRobotes. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-slate-300 transition-colors font-semibold">
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