export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">TechRobotes Blog</h1>
      <p className="text-gray-600 mb-8">
        Insights, guides, and tutorials on WhatsApp AI automation, chatbots, and scaling your business.
      </p>
      <div className="space-y-6">
        <article className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">
            <a href="/blog/whatsapp-ai-automation-guide" className="hover:text-blue-600">
              How to Build a WhatsApp AI Chatbot for Business
            </a>
          </h2>
          <p className="text-gray-500 text-sm mb-4">Published on November 9, 2026</p>
          <p className="text-gray-700">
            Discover how integrating automated AI responses on WhatsApp can skyrocket your customer conversion rates...
          </p>
        </article>
      </div>
    </main>
  );
}