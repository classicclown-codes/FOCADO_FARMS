import type { Metadata } from 'next';
import './globals.css';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'Focado Farms & Resorts Ltd. | Premium Pig Breeding Stock in Nigeria',
  description: 'Premium pig breeding stock, healthy genetics, vaccinated animals, and expert farm support for serious farmers and livestock investors in Nigeria.',
  keywords: ['pig breeding', 'livestock Nigeria', 'piglets', 'farming support', 'agriculture'],
  openGraph: {
    title: 'Focado Farms & Resorts Ltd.',
    description: 'Premium pig breeding stock for farmers who want better returns.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
