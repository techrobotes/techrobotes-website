'use client';

import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-between selection:bg-emerald-500 selection:text-slate-950">
      <div>
        {/* Main Terms of Service Content */}
        <main className="max-w-4xl mx-auto px-6 py-16 flex-1 text-left">
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
    </div>
  );
}