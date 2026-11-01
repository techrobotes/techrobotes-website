'use client';

import React from 'react';

export default function ClinicsSolutionPage() {
  return (
    <div className="bg-[#0b0f19] text-slate-100 min-h-screen">
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
  );
}