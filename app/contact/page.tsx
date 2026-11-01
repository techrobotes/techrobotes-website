'use client';

import React from 'react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-between selection:bg-emerald-500 selection:text-slate-950">
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
          <Link href="/contact" className="text-emerald-400 font-bold">Contact Us</Link>
        </div>
        <a 
          href="https://app.techrobotes.io" 
          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition-all shadow-lg shadow-emerald-500/20"
        >
          Launch App
        </a>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center p-6 my-12">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6 shadow-xl text-left">
          <h1 className="text-3xl font-bold text-center text-white">Get in Touch</h1>
          <p className="text-slate-400 text-center text-sm">
            Have custom enterprise requirements or setup questions? Contact our technical team.
          </p>

          <div className="space-y-4">
            {/* Email Card */}
            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                Email Address
              </span>
              <a
                href="mailto:techsrobotes@gmail.com"
                className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium text-sm flex items-center justify-between"
              >
                <span>techsrobotes@gmail.com</span>
                <span className="text-xs text-slate-400 font-normal">Send Email &rarr;</span>
              </a>
            </div>

            {/* WhatsApp Support Card */}
            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                WhatsApp Support
              </span>
              <a
                href="https://wa.me/923227427652?text=Hi%20TechRobotes%20Team%2C%20I%20have%20a%20question"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium text-sm flex items-center justify-between"
              >
                <span>Direct Support Available via Live Chat</span>
                <span className="text-xs text-slate-400 font-normal">Open Chat &rarr;</span>
              </a>
            </div>
          </div>

          {/* Dashboard CTA */}
          <a
            href="https://app.techrobotes.io"
            className="w-full block text-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20"
          >
            Access Platform Dashboard
          </a>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="w-full border-t border-slate-800/60 bg-slate-950 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; 2026 TechRobotes. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
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