'use client';

import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-between">
      {/* Header */}
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-slate-800/60 w-full">
        <a href="/" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="TechRobotes Logo" className="h-16 w-auto object-contain" />
          <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
            <span className="text-emerald-400">TechRobotes</span>.io
          </span>
        </a>
        <a href="https://app.techrobotes.io" className="bg-emerald-500 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm">
          Launch App
        </a>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 flex-1">
        <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          At TechRobotes.io, we prioritize user privacy and data security. This Privacy Policy outlines how we collect, use, and protect your information when utilizing our WhatsApp AI automation platform.
        </p>
        <h2 className="text-xl font-bold text-white mt-8 mb-3">Data Collection & Messaging</h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          We process incoming and outgoing messages solely to deliver automated chatbot responses, calendar scheduling, and live support handover. Your data is encrypted in transit and at rest.
        </p>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-800/60 bg-slate-950 py-8">
        <div className="max-w-7xl mx-auto px-6 flex justify-between text-xs text-slate-500">
          <p>&copy; 2026 TechRobotes. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}