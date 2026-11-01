'use client';

import React from 'react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-between selection:bg-emerald-500 selection:text-slate-950">
      <div>
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
    </div>
  );
}