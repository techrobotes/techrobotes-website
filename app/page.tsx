'use client';

import React, { useState } from 'react';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Silver',
      badge: 'Startups & Shops',
      monthlyPrice: 5000,
      annualPrice: 4250,
      description: 'Essential AI chatbot capabilities for small stores & standard messaging.',
      credits: '10,000',
      models: 'Basic AI Model',
      numbers: '2 WhatsApp Numbers',
      contacts: '10,000 Contacts',
      messages: '15,000 / month',
      popular: false,
      features: [
        { text: 'AI Chatbot Enabled', enabled: true },
        { text: 'Human Handover', enabled: true },
        { text: 'Send Media & Attachments', enabled: true },
        { text: 'CSV Contact Export', enabled: true },
        { text: 'Meta Cloud API / QR Linking', enabled: true },
        { text: 'Appointment Booking', enabled: false },
        { text: 'Voice Note Understanding', enabled: false },
        { text: 'Food Menu & Orders', enabled: false },
        { text: 'Bring Your Own LLM Key', enabled: false },
      ],
    },
    {
      name: 'Gold',
      badge: 'Clinics & Services',
      monthlyPrice: 10000,
      annualPrice: 8500,
      description: 'Smart booking, voice comprehension, and interactive food/product ordering.',
      credits: '25,000',
      models: 'Basic + Pro AI Models',
      numbers: '3 WhatsApp Numbers',
      contacts: '50,000 Contacts',
      messages: '35,000 / month',
      popular: false,
      features: [
        { text: 'AI Chatbot Enabled', enabled: true },
        { text: 'Human Handover', enabled: true },
        { text: 'Appointment Booking', enabled: true },
        { text: 'Voice Note Understanding', enabled: true },
        { text: 'Food Menu & Orders (20 Services)', enabled: true },
        { text: 'Send Media & Attachments', enabled: true },
        { text: 'CSV Contact Export', enabled: true },
        { text: 'Meta Cloud API / QR Linking', enabled: true },
        { text: 'Bring Your Own LLM Key', enabled: false },
      ],
    },
    {
      name: 'Platinum',
      badge: 'BEST VALUE PER RUPEE',
      monthlyPrice: 17999,
      annualPrice: 15299,
      description: 'Expanded capacity for growing multi-staff teams & higher message volume.',
      credits: '50,000',
      models: 'Basic + Pro AI Models',
      numbers: '4 WhatsApp Numbers',
      contacts: '150,000 Contacts',
      messages: '80,000 / month',
      popular: true,
      features: [
        { text: 'AI Chatbot Enabled', enabled: true },
        { text: 'Human Handover', enabled: true },
        { text: 'Appointment Booking', enabled: true },
        { text: 'Voice Note Understanding', enabled: true },
        { text: 'Food Menu & Orders (50 Services)', enabled: true },
        { text: 'Send Media & Attachments', enabled: true },
        { text: 'CSV Contact Export', enabled: true },
        { text: 'Meta Cloud API / QR Linking', enabled: true },
        { text: 'Bring Your Own LLM Key', enabled: true },
      ],
    },
    {
      name: 'Diamond',
      badge: 'Enterprise & Agencies',
      monthlyPrice: 35999,
      annualPrice: 30599,
      description: 'Top-tier reasoning power (Max AI) for multi-branch brands and agencies.',
      credits: '90,000',
      models: 'Basic + Pro + Max AI Models',
      numbers: '5 WhatsApp Numbers',
      contacts: '500,000 Contacts',
      messages: '300,000 / month',
      popular: false,
      features: [
        { text: 'AI Chatbot Enabled', enabled: true },
        { text: 'Human Handover', enabled: true },
        { text: 'Appointment Booking', enabled: true },
        { text: 'Voice Note Understanding', enabled: true },
        { text: 'Food Menu & Orders (100 Services)', enabled: true },
        { text: 'Send Media & Attachments', enabled: true },
        { text: 'CSV Contact Export', enabled: true },
        { text: 'Meta Cloud API / QR Linking', enabled: true },
        { text: 'Bring Your Own LLM Key', enabled: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-20">
      {/* Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between border-b border-slate-800/60">
        <a href="/" className="text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
          <span className="text-emerald-500">TechRobotes</span>.io
        </a>
        <div className="flex items-center gap-4">
          <a href="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Home
          </a>
          <a 
            href="https://app.techrobotes.io" 
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition-all shadow-lg shadow-emerald-500/20"
          >
            Launch App
          </a>
        </div>
      </nav>

      {/* Hero Header */}
      <div className="max-w-4xl mx-auto text-center pt-16 px-6">
        <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold rounded-full uppercase tracking-wider">
          Official SaaS Subscriptions
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white mt-4 mb-4">
          Select Your WhatsApp AI Plan
        </h1>
        <p className="text-slate-400 text-base sm:text-lg">
          Flexible tiers configured directly with voice recognition, live handover, appointment engines, and custom LLM API keys.
        </p>

        {/* Annual Discount Toggle */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>Monthly Billing</span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 h-8 bg-slate-800 rounded-full p-1 transition-colors relative border border-slate-700"
          >
            <div className={`w-6 h-6 bg-emerald-500 rounded-full transition-transform ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`} />
          </button>
          <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
            Yearly Billing <span className="text-emerald-400 text-xs font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 ml-1">Save 15%</span>
          </span>
        </div>
      </div>

      {/* Free Trial Banner */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="bg-slate-900/80 border border-emerald-500/30 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2.5 py-0.5 rounded-full">14-DAY TRIAL</span>
              <h3 className="text-lg font-bold text-white">Free Trial Plan</h3>
            </div>
            <p className="text-slate-400 text-sm mt-1">
              Includes 250 AI credits, 1 WhatsApp number, 300 contacts, and basic AI chatbot features to evaluate your workflow.
            </p>
          </div>
          <a 
            href="https://app.techrobotes.io" 
            className="bg-slate-800 hover:bg-slate-700 text-emerald-400 font-semibold px-6 py-2.5 rounded-xl text-sm border border-emerald-500/30 transition-all whitespace-nowrap"
          >
            Start Free Trial (Rs 0)
          </a>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {plans.map((plan) => (
          <div 
            key={plan.name}
            className={`rounded-3xl p-6 flex flex-col justify-between transition-all relative ${
              plan.popular 
                ? 'bg-slate-900 border-2 border-emerald-500 shadow-2xl shadow-emerald-500/10 lg:-translate-y-2' 
                : 'bg-slate-900/50 border border-slate-800 hover:border-slate-700'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 font-black text-[10px] tracking-wider uppercase px-3 py-1 rounded-full shadow-md">
                {plan.badge}
              </div>
            )}

            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-black text-white">{plan.name}</h3>
                {!plan.popular && (
                  <span className="text-[10px] bg-slate-800 text-slate-300 font-semibold px-2 py-0.5 rounded-full border border-slate-700">
                    {plan.badge}
                  </span>
                )}
              </div>
              <p className="text-slate-400 text-xs leading-relaxed min-h-[36px] mb-6">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-slate-400 text-sm font-semibold">PKR</span>
                  <span className="text-3xl sm:text-4xl font-black text-white">
                    {(isAnnual ? plan.annualPrice : plan.monthlyPrice).toLocaleString()}
                  </span>
                  <span className="text-slate-400 text-xs">/mo</span>
                </div>
              </div>

              {/* Specifications */}
              <div className="space-y-2.5 border-t border-slate-800 pt-5 text-xs text-slate-300 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-400">AI Credits:</span>
                  <strong className="text-white">{plan.credits}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">AI Models:</span>
                  <strong className="text-white">{plan.models}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">WhatsApp Lines:</span>
                  <strong className="text-white">{plan.numbers}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Max Contacts:</span>
                  <strong className="text-white">{plan.contacts}</strong>
                </div>
              </div>

              {/* Admin Console Features List */}
              <div className="space-y-2 border-t border-slate-800/80 pt-5 text-xs">
                {plan.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    {feat.enabled ? (
                      <span className="text-emerald-400 font-bold text-sm">✓</span>
                    ) : (
                      <span className="text-slate-600 font-bold text-sm">✕</span>
                    )}
                    <span className={feat.enabled ? 'text-slate-200' : 'text-slate-500 line-through'}>
                      {feat.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a 
              href="https://app.techrobotes.io" 
              className={`mt-8 w-full py-3 rounded-xl font-bold text-sm text-center transition-all ${
                plan.popular 
                  ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20' 
                  : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
              }`}
            >
              Select {plan.name}
            </a>
          </div>
        ))}
      </div>

      {/* Feature Matrix Table */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <h2 className="text-2xl font-extrabold text-white text-center mb-8">Admin Feature Comparison Matrix</h2>
        <div className="overflow-x-auto bg-slate-900/60 border border-slate-800 rounded-2xl p-4">
          <table className="w-full text-left text-xs sm:text-sm text-slate-300">
            <thead>
              <tr className="border-b border-slate-800 text-slate-100 font-bold">
                <th className="p-3">Admin Feature Flag</th>
                <th className="p-3 text-center">Silver</th>
                <th className="p-3 text-center">Gold</th>
                <th className="p-3 text-center text-emerald-400">Platinum</th>
                <th className="p-3 text-center">Diamond</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              <tr>
                <td className="p-3 font-medium text-white">AI Chatbot</td>
                <td className="p-3 text-center text-emerald-400 font-bold">✅</td>
                <td className="p-3 text-center text-emerald-400 font-bold">✅</td>
                <td className="p-3 text-center text-emerald-400 font-bold">✅</td>
                <td className="p-3 text-center text-emerald-400 font-bold">✅</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-white">Human Handover</td>
                <td className="p-3 text-center text-emerald-400 font-bold">✅</td>
                <td className="p-3 text-center text-emerald-400 font-bold">✅</td>
                <td className="p-3 text-center text-emerald-400 font-bold">✅</td>
                <td className="p-3 text-center text-emerald-400 font-bold">✅</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-white">Appointment Booking</td>
                <td className="p-3 text-center text-slate-600">✕</td>
                <td className="p-3 text-center text-emerald-400 font-bold">✅</td>
                <td className="p-3 text-center text-emerald-400 font-bold">✅</td>
                <td className="p-3 text-center text-emerald-400 font-bold">✅</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-white">Voice Note Understanding</td>
                <td className="p-3 text-center text-slate-600">✕</td>
                <td className="p-3 text-center text-emerald-400 font-bold">✅</td>
                <td className="p-3 text-center text-emerald-400 font-bold">✅</td>
                <td className="p-3 text-center text-emerald-400 font-bold">✅</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-white">Food Menu &amp; Orders</td>
                <td className="p-3 text-center text-slate-600">✕</td>
                <td className="p-3 text-center">20 Services</td>
                <td className="p-3 text-center text-emerald-400 font-bold">50 Services</td>
                <td className="p-3 text-center">100 Services</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-white">Bring Your Own LLM Key</td>
                <td className="p-3 text-center text-slate-600">✕</td>
                <td className="p-3 text-center text-slate-600">✕</td>
                <td className="p-3 text-center text-emerald-400 font-bold">✅</td>
                <td className="p-3 text-center text-emerald-400 font-bold">✅</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-white">Send Media (Attachments &amp; Images)</td>
                <td className="p-3 text-center text-emerald-400 font-bold">✅</td>
                <td className="p-3 text-center text-emerald-400 font-bold">✅</td>
                <td className="p-3 text-center text-emerald-400 font-bold">✅</td>
                <td className="p-3 text-center text-emerald-400 font-bold">✅</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-white">CSV Contact Export</td>
                <td className="p-3 text-center text-emerald-400 font-bold">✅</td>
                <td className="p-3 text-center text-emerald-400 font-bold">✅</td>
                <td className="p-3 text-center text-emerald-400 font-bold">✅</td>
                <td className="p-3 text-center text-emerald-400 font-bold">✅</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-white">Meta Cloud API / QR Linking</td>
                <td className="p-3 text-center text-emerald-400 font-bold">✅</td>
                <td className="p-3 text-center text-emerald-400 font-bold">✅</td>
                <td className="p-3 text-center text-emerald-400 font-bold">✅</td>
                <td className="p-3 text-center text-emerald-400 font-bold">✅</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}