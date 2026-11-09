export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1d] text-white flex flex-col justify-between">
      <main className="max-w-4xl mx-auto px-6 py-16 w-full">
        <h1 className="text-4xl font-extrabold mb-4 tracking-tight">TechRobotes Blog</h1>
        <p className="text-gray-400 mb-12 text-lg">
          Latest insights, guides, and tutorials on WhatsApp AI automation and scaling your business.
        </p>

        <div className="space-y-6">
          {/* Published Article Card */}
          <article className="p-6 border border-gray-800 bg-[#111827] rounded-xl shadow-md transition hover:border-gray-700">
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2 block">WhatsApp Automation</span>
            <h2 className="text-2xl font-bold mb-2">
              <a href="/blog/whatsapp-ai-customer-support-guide" className="hover:text-blue-400 transition-colors">
                How to Automate WhatsApp Customer Support with AI Chatbots (Complete 2026 Guide)
              </a>
            </h2>
            <p className="text-gray-400 text-sm mb-4">Published on November 9, 2026 • 6 min read</p>
            <p className="text-gray-300">
              Discover how integrating automated AI responses on WhatsApp cuts response times to zero and drives conversions around the clock...
            </p>
          </article>
        </div>
      </main>
    </div>
  );
}