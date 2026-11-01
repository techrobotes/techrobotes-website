'use client';

import React from 'react';

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6 shadow-xl">
        <h1 className="text-3xl font-bold text-center">Get in Touch</h1>
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
          className="w-full block text-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-4 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/20"
        >
          Access Platform Dashboard
        </a>
      </div>
    </div>
  );
}