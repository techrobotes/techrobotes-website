import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://techrobotes.io'),
  title: {
    default: 'TechRobotes | WhatsApp AI Chatbot & Customer Support Automation',
    template: '%s | TechRobotes',
  },
  description:
    'Automate support, lead qualification, bookings, and sales on WhatsApp with custom AI chatbots.',
  keywords: [
    'WhatsApp AI Chatbot',
    'WhatsApp Automation Tool',
    'AI Customer Service WhatsApp',
    'WhatsApp SaaS Platform',
  ],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'TechRobotes - WhatsApp AI Chatbot Solution',
    description: 'Automate 80% of your customer support on WhatsApp instantly.',
    url: 'https://techrobotes.io',
    siteName: 'TechRobotes',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-slate-950 text-slate-100 font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}