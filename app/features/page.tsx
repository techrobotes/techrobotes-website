'use client';

import React from 'react';
import Link from 'next/link';

export default function FeaturesPage() {
  const featureList = [
    {
      title: 'Appointment Booking Engine',
      description: 'Fully integrated calendar system allowing clients to schedule, reschedule, and cancel appointments directly inside WhatsApp chats without human intervention.',
      icon: '📅',
    },
    {
      title: 'Voice Note Understanding',
      description: 'Uses speech-to-text models to automatically transcribe incoming audio messages and deliver precise AI-generated responses.',
      icon: '🎙️',
    },
    {
      title: 'Live Human Handover',
      description: 'Detects when a customer requires complex assistance and transfers the chat to your support agents with real-time browser alerts.',
      icon: '👤',
    },
    {
      title: 'Food Menu & E-Commerce Orders',
      description: 'Interactive catalogs allowing users to browse items, customize selections, and complete pickup or delivery orders directly in WhatsApp.',
      icon: '🍔',
    },
    {
      title: 'Bring Your Own LLM Key',
      description: 'Connect your own OpenAI or Google Gemini API keys directly into your tenant account for maximum privacy and cost efficiency.',
      icon: '🔑',
    },
    {
      title: 'CSV Contact Export & Media Handling',
      description: 'Export structured lead databases to CSV and automatically process documents, PDFs, voice notes, and images in conversation.',
      icon: '📁',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-between selection:bg-emerald-500 selection:text-slate-950">
      <div>
        {/* Main Content */}
        <main className="pb-20">
          <div className="max-w-4xl mx-auto text-center pt-16 px-6">
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Core Platform Capabilities</h1>
            <p className="text-slate-400 text-base sm:text-lg">
              Discover the full suite of features powering high-converting WhatsApp automation.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-6 mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {featureList.map((item, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/40 transition-colors">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}