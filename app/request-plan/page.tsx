'use client';

import React, { useState } from 'react';

export default function RequestPlanPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      // Replace https://formspree.io/f/your-formspree-id with your actual Formspree endpoint if desired,
      // or handle the post request. 
      const response = await fetch('https://formspree.io/f/mbggppbj', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-[#0b0f19] text-slate-100 min-h-screen py-16">
      <div className="max-w-xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
            Account Provisioning
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">Request Your Plan &amp; Setup</h1>
          <p className="text-slate-400 text-sm">
            Fill out your details below. Once submitted, our team will review your request and provision your dashboard credentials instantly.
          </p>
        </div>

        {submitted ? (
          <div className="bg-slate-900 border border-emerald-500/30 p-8 rounded-3xl text-center shadow-xl">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-white mb-2">Request Submitted Successfully!</h3>
            <p className="text-slate-400 text-sm mb-6">
              Thank you! We have received your information. Your account will be activated and your login credentials will be emailed to you shortly.
            </p>
            <a 
              href="/" 
              className="inline-block bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all"
            >
              Back to Home
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl space-y-6 shadow-2xl">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Full Name *</label>
              <input 
                type="text" 
                name="name" 
                required 
                placeholder="Muhammad Hassan" 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500 transition-all" 
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Email Address (For Login) *</label>
              <input 
                type="email" 
                name="email" 
                required 
                placeholder="client@example.com" 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500 transition-all" 
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Company / Business Name</label>
              <input 
                type="text" 
                name="company" 
                placeholder="Your Business Name" 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500 transition-all" 
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Select Package / Plan *</label>
              <select 
                name="plan" 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500 transition-all"
              >
                <option value="Free Trial">Free Trial (WhatsApp AI Bot)</option>
                <option value="Starter Plan">Starter Plan</option>
                <option value="Pro Plan">Pro Plan</option>
                <option value="Enterprise Plan">Enterprise Plan</option>
              </select>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20 text-center cursor-pointer"
            >
              {loading ? 'Submitting Details...' : 'Submit Request & Setup Account'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}