import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechRobotes.io - WhatsApp AI Automation SaaS",
  description: "WhatsApp AI automation platform for customer support and appointment bookings.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-slate-100 min-h-screen flex flex-col justify-between`}>
        
        {/* GLOBAL NAVIGATION HEADER (Appears on every page) */}
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
            <Link href="/solutions/clinics" className="hover:text-emerald-400 transition-colors text-emerald-400 font-semibold">Clinics</Link>
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

        {/* MAIN PAGE CONTENT */}
        <main className="flex-grow">{children}</main>

        {/* GLOBAL FOOTER (Appears on every page) */}
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

      </body>
    </html>
  );
}