export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-emerald-500 selection:text-slate-950">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight text-emerald-400">
            TechRobotes<span className="text-white">.io</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm text-slate-300">
            <a href="#features" className="hover:text-emerald-400 transition">Features</a>
            <a href="#pricing" className="hover:text-emerald-400 transition">Pricing</a>
          </nav>
          <a
            href="https://app.techrobotes.io"
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-4 py-2 rounded-lg font-medium text-sm transition"
          >
            Launch App
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800 rounded-full mb-6">
          Next-Gen WhatsApp Automation
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Automate 80% of Support & Sales on <span className="text-emerald-400">WhatsApp</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Deploy custom-trained AI Chatbots on your WhatsApp Business account. Answer FAQs 24/7, qualify leads, and increase sales automatically.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://app.techrobotes.io"
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-6 py-3 rounded-xl font-bold transition shadow-lg shadow-emerald-500/20"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-800">
        <h2 className="text-3xl font-bold text-center mb-12">Built for Automated Growth</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-semibold mb-2 text-emerald-400">24/7 Instant Answers</h3>
            <p className="text-slate-400 text-sm">Train the AI on your docs, FAQs, and product catalogs to handle customer queries instantly.</p>
          </div>
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-semibold mb-2 text-emerald-400">Lead Capture</h3>
            <p className="text-slate-400 text-sm">Automatically ask qualifying questions and store customer leads directly in your app dashboard.</p>
          </div>
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-semibold mb-2 text-emerald-400">Seamless Integration</h3>
            <p className="text-slate-400 text-sm">Connect your WhatsApp number smoothly via app.techrobotes.io without technical hassle.</p>
          </div>
        </div>
      </section>
    </main>
  );
}