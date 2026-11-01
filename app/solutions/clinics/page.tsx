'use client';

import React from 'react';
import Link from 'next/link';

export default function ClinicsSolutionPage() {
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

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
          <span className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-6">
            Industry Solution: Healthcare &amp; Clinics
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight mb-6">
            WhatsApp AI Appointment Booking <span className="text-emerald-400">for Modern Clinics</span>
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Eliminate missed calls and front desk backlog. Let patients schedule, reschedule, and manage doctor consultations 24/7 directly on WhatsApp with automatic Google Calendar sync.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://app.techrobotes.io" 
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-4 rounded-xl text-base transition-all shadow-xl shadow-emerald-500/25"
            >
              Deploy Clinic Bot Free
            </a>
          </div>
        </section>

        {/* Value Features Grid */}
        <section className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-900">
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl">
              <div className="text-3xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-white mb-2">Automated Scheduling</h3>
              <p className="text-slate-400 text-sm">Patients pick open time slots through simple chat prompts, updating your calendar instantly.</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl">
              <div className="text-3xl mb-4">🔔</div>
              <h3 className="text-xl font-bold text-white mb-2">Smart Reminders</h3>
              <p className="text-slate-400 text-sm">Drastically reduce no-shows with automated WhatsApp appointment reminders sent before visits.</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl">
              <div className="text-3xl mb-4">👤</div>
              <h3 className="text-xl font-bold text-white mb-2">Instant Staff Handover</h3>
              <p className="text-slate-400 text-sm">Complex medical inquiries are handed over smoothly to human coordinators in real-time.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Global Footer */}
      <footer className="w-full border-t border-slate-800/60 bg-slate-950 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; 2026 TechRobotes. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}