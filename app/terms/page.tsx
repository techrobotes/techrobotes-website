'use client';

import React from 'react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-between selection:bg-emerald-500 selection:text-slate-950">
      <div>
        {/* Navigation Header */}
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-slate-800/60 w-full">
          <a href="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="TechRobotes Logo" 
              className="h-16 w-auto object-contain brightness-130 contrast-125 drop-shadow-[0_0_16px_rgba(16,185,129,0.7)] group-hover:scale-105 transition-all" 
            />
            <span className="text-xl sm:text-2xl font-black text-white tracking-tight hidden sm:inline">
              <span className="text-emerald-400">TechRobotes</span>.io
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="/features" className="hover:text-emerald-400 transition-colors">Features</a>
            <a href="/how-it-works" className="hover:text-emerald-400 transition-colors">How It Works</a>
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

        {/* Main Terms of Service Content */}
        <main className="max-w-4xl mx-auto px-6 py-16 flex-1">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">Terms of Service</h1>
          <p className="text-slate-400 text-xs mb-8">Last Updated: November 2026</p>

          <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-3">1. Acceptance of Terms</h2>
              <p className="text-slate-400">
                By creating an account or accessing the services provided by <strong className="text-white">TechRobotes.io</strong>, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our automated WhatsApp AI platform or tenant dashboard (`app.techrobotes.io`).
              </p>
            </section>

            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-3">2. Description of Service</h2>
              <p className="text-slate-400">
                TechRobotes provides cloud-hosted SaaS tools enabling businesses to build, train, and deploy AI-driven conversational assistants on WhatsApp Business. Services include automated messaging, appointment booking, voice note transcription, and live human support handover.
              </p>
            </section>

            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-3">3. Acceptable Use &amp; Compliance</h2>
              <p className="text-slate-400 mb-3">
                You agree to use TechRobotes solely for lawful business operations and in strict accordance with Meta&apos;s WhatsApp Business Messaging Policies.
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-400">
                <li>You may not use our platform to send unsolicited bulk messaging (SPAM).</li>
                <li>You are responsible for obtaining explicit customer opt-ins before initiating automated messaging.</li>
                <li>You may not upload or transmit illegal, abusive, or harmful content through automated bots.</li>
              </ul>
            </section>

            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-3">4. Subscriptions &amp; Billing</h2>
              <p className="text-slate-400">
                Subscriptions (Silver, Gold, Platinum, Diamond) are billed on a recurring monthly or annual basis in USD ($). AI credit usage, contact limits, and WhatsApp line allotments are tied to your active plan tier. You may upgrade, downgrade, or cancel your subscription at any time within your tenant dashboard.
              </p>
            </section>

            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-3">5. Limitation of Liability</h2>
              <p className="text-slate-400">
                TechRobotes.io is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. While we maintain enterprise uptime and server security, we are not liable for temporary service interruptions caused by third-party APIs, Meta Cloud updates, or network downtime.
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
            <a href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-slate-300 transition-colors font-semibold">
              Terms of Service
            </a>
            <a href="/contact" className="hover:text-slate-300 transition-colors">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}