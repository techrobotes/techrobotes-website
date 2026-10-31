'use client';

import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Top Announcement Bar */}
      <div className="bg-emerald-600/20 text-emerald-400 text-xs sm:text-sm py-2 text-center border-b border-emerald-500/20 font-medium">
        🚀 New Feature: Automatic Google Calendar &amp; Live Order Sync is now live!
      </div>

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
          <a href="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</a>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="https://app.techrobotes.io" 
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Log In
          </a>
          <a 
            href="https://app.techrobotes.io" 
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition-all shadow-lg shadow-emerald-500/20"
          >
            Launch App
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-6">
            Complete WhatsApp AI SaaS
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight mb-6">
            Automate 80% of Support, <span className="text-emerald-400">Bookings &amp; Sales</span> on WhatsApp
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0">
            Deploy custom AI chatbots on WhatsApp Business. Schedule appointments, process restaurant orders, understand voice messages, and hand over complex chats to live human agents effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="https://app.techrobotes.io" 
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-4 rounded-xl text-base transition-all text-center shadow-xl shadow-emerald-500/25"
            >
              Start Free Trial
            </a>
            <a 
              href="/features" 
              className="bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 font-semibold px-8 py-4 rounded-xl text-base transition-all text-center"
            >
              Explore Capabilities
            </a>
          </div>
        </div>

        {/* Interactive Chat Simulator Mockup */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center font-bold text-emerald-400">
              TR
            </div>
            <div>
              <div className="font-bold text-sm text-white">TechRobotes AI Assistant</div>
              <div className="text-xs text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span> Online
              </div>
            </div>
          </div>
          <div className="space-y-3 text-xs sm:text-sm">
            <div className="bg-slate-800/80 rounded-2xl p-3 max-w-[80%] text-slate-200">
              Hello! Welcome to TechRobotes. How can I assist your business today?
            </div>
            <div className="bg-emerald-600/30 border border-emerald-500/30 rounded-2xl p-3 max-w-[80%] ml-auto text-emerald-100">
              I&apos;d like to book a dinner table for 4 people at 8 PM.
            </div>
            <div className="bg-slate-800/80 rounded-2xl p-3 max-w-[80%] text-slate-200">
              ✅ Table for 4 confirmed for 8:00 PM tonight! Your calendar invite and SMS confirmation have been sent.
            </div>
            <div className="bg-emerald-600/30 border border-emerald-500/30 rounded-2xl p-3 max-w-[80%] ml-auto text-emerald-100">
              Can I speak with a staff member directly?
            </div>
            <div className="bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded-2xl p-3 max-w-[80%] text-slate-200">
              🔔 Conversation transferred to Human Support Specialist. An agent is joining now!
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Summary */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white mb-4">Enterprise Automation Modules</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Everything your business needs to turn WhatsApp into an automated revenue engine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl">
            <div className="text-3xl mb-4">📅</div>
            <h3 className="text-xl font-bold text-white mb-2">Appointment Booking</h3>
            <p className="text-slate-400 text-sm">Synchronize bookings, clinic slots, and client schedules automatically inside WhatsApp.</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl">
            <div className="text-3xl mb-4">🎙️</div>
            <h3 className="text-xl font-bold text-white mb-2">Voice Note Intelligence</h3>
            <p className="text-slate-400 text-sm">Transcribe incoming customer voice notes automatically and process replies with full context.</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl">
            <div className="text-3xl mb-4">🍔</div>
            <h3 className="text-xl font-bold text-white mb-2">Food Menus &amp; Catalog Orders</h3>
            <p className="text-slate-400 text-sm">Display visual menus, calculate order totals, and capture delivery details seamlessly.</p>
          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">
          <h2 className="text-3xl font-bold text-white mb-4">Start Automating Your WhatsApp Support Today</h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto mb-6">Experience 24/7 AI-driven customer interaction with zero coding required.</p>
          <a href="https://app.techrobotes.io" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3 rounded-xl transition-all">Get Started Free</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-500">
        <p>© 2026 TechRobotes.io. All rights reserved.</p>
      </footer>
    </div>
  );
}