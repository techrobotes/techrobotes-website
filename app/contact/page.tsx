'use client';

import React from 'react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-emerald-500 selection:text-slate-950">
      {/* Header Navigation Matching Landing Page Design */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Brand Logo with TR Circuit Icon */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <svg
              className="w-10 h-10 text-emerald-400"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M 10 20 L 90 20 M 50 20 L 50 85 M 25 35 L 75 35 M 35 50 L 65 50 M 40 65 L 60 65" />
              <circle cx="10" cy="20" r="4" fill="currentColor" />
              <circle cx="90" cy="20" r="4" fill="currentColor" />
              <circle cx="50" cy="85" r="4" fill="currentColor" />
            </svg>
            <span className="text-2xl font-black tracking-tight text-white">
              TechRobotes<span className="text-emerald-400">.io</span>
            </span>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/features" className="text-slate-300 hover:text-emerald-400 transition-colors">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-slate-300 hover:text-emerald-400 transition-colors">
              How It Works
            </Link>
            <Link href="/#pricing" className="text-slate-300 hover:text-emerald-400 transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-emerald-400 font-semibold">
              Contact Us
            </Link>
          </nav>

          {/* Launch App Button */}
          <a
            href="https://app.techrobotes.io"
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl transition-all shadow-md hover:shadow-emerald-500/20 text-sm"
          >
            Launch App
          </a>
        </div>
      </header>

      {/* Main Contact Section */}
      <main className="flex-1 flex items-center justify-center p-6 my-8">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6 shadow-2xl">
          <h1 className="text-3xl font-bold text-center text-white">Get in Touch</h1>
          <p className="text-slate-400 text-center text-sm leading-relaxed">
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

          {/* Platform Dashboard CTA */}
          <a
            href="https://app.techrobotes.io"
            className="w-full block text-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-4 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/20"
          >
            Access Platform Dashboard
          </a>
        </div>
      </main>

      {/* Footer Section - Fixed Static Date Prerender */}
      <footer className="w-full border-t border-slate-800/80 bg-slate-950 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; 2026 TechRobotes. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-slate-300 transition-colors">
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