import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Top Announcement Bar */}
      <div className="bg-emerald-600/20 text-emerald-400 text-xs sm:text-sm py-2 text-center border-b border-emerald-500/20 font-medium">
        🚀 New Feature: Automatic Google Calendar & Live Order Sync is now live!
      </div>

      {/* Navigation Header */}
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between border-b border-slate-800/60">
        <div className="text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
          <span className="text-emerald-500">TechRobotes</span>.io
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-emerald-400 transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-emerald-400 transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing</a>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="https://app.techrobotes.io/login" 
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Log In
          </a>
          <a 
            href="https://app.techrobotes.io/register" 
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
            Automate 80% of Support, <span className="text-emerald-400">Bookings & Sales</span> on WhatsApp
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0">
            Deploy custom AI chatbots on WhatsApp Business. Schedule appointments, process restaurant orders, and hand over complex chats to live human agents effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="https://app.techrobotes.io/register" 
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-4 rounded-xl text-base transition-all text-center shadow-xl shadow-emerald-500/25"
            >
              Start Free Trial
            </a>
            <a 
              href="#features" 
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
              I'd like to book a dinner table for 4 people at 8 PM.
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

      {/* Features Grid */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white mb-4">Built for Every Business Workflow</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From automated restaurant menus to smart calendars and team routing—TechRobotes handles end-to-end messaging.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/40 transition-colors">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 text-2xl font-bold mb-6">
              📅
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Calendar & Appointments</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Automate appointment bookings, clinic schedules, or client calls with real-time calendar synchronization and WhatsApp reminders.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/40 transition-colors">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 text-2xl font-bold mb-6">
              🍔
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Restaurant & E-Commerce</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Show interactive menus, take food orders, process item catalogs, and manage delivery confirmations directly inside WhatsApp.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/40 transition-colors">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 text-2xl font-bold mb-6">
              👤
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Live Human Handover</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              When a query requires personal attention, the AI instantly notifies your support team and seamlessly routes the chat to a live agent.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-slate-900/40 py-20 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white mb-4">Launch in 3 Simple Steps</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-black text-emerald-500 mb-4">01</div>
              <h4 className="text-lg font-bold text-white mb-2">Connect Your Number</h4>
              <p className="text-slate-400 text-sm">Link your WhatsApp Business API account in under 2 minutes.</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-black text-emerald-500 mb-4">02</div>
              <h4 className="text-lg font-bold text-white mb-2">Train Your AI Agent</h4>
              <p className="text-slate-400 text-sm">Upload your business FAQs, services, menus, or calendar rules.</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-black text-emerald-500 mb-4">03</div>
              <h4 className="text-lg font-bold text-white mb-2">Automate & Convert</h4>
              <p className="text-slate-400 text-sm">Sit back as your AI answers inquiries, takes orders, and schedules bookings 24/7.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-r from-emerald-600/20 via-slate-900 to-emerald-600/20 border border-emerald-500/30 rounded-3xl p-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Ready to Automate Your Business on WhatsApp?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8 text-sm sm:text-base">
            Start your free trial today and experience full WhatsApp automation with calendar sync, live agent routing, and e-commerce features.
          </p>
          <a 
            href="https://app.techrobotes.io/register" 
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-10 py-4 rounded-xl text-base transition-all shadow-xl shadow-emerald-500/25"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} TechRobotes.io. All rights reserved.</p>
      </footer>
    </div>
  );
}