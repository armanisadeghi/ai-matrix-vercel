// app/layout.tsx
import '#/styles/globals.css';
import { AddressBar } from '#/ui/address-bar';
import Byline from '#/ui/byline';
import { GlobalNav } from '#/ui/global-nav';
import { ThemeProvider } from '#/app/context/themeContext';
import Header from '#/ui/global-header';
import StyledHeader from '#/ui/header'; // Ensure this import does not conflict
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'AI Matrix | Next-Generation AI Automation Framework',
    template: '%s | Next.js App Router',
  },
  metadataBase: new URL('https://app-router.vercel.app'),
  description:
    'AI Matrix is an AI Automation Framework that bridges the gap between current AI capabilities and real-world business needs with groundbreaking automation.',
  openGraph: {
    title: 'AI Matrix Next-Generation AI Automation Framework',
    description:
      'AI Matrix is an AI Automation Framework that bridges the gap between current AI capabilities and real-world business needs with groundbreaking automation.',
    images: [`/api/og?title=Next.js App Router`],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang="en" className="[color-scheme:dark]">
        <body className="overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')] pb-36">
          <Header />
          <StyledHeader />
          <GlobalNav />
          <div className="lg:pl-72">
            <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
              <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
                <div className="rounded-lg bg-black">
                  <AddressBar />
                </div>
              </div>
              <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
                <div className="rounded-lg bg-black p-3.5 lg:p-6">
                  {children}
                </div>
              </div>
              <Byline className="fixed sm:hidden" />
            </div>
          </div>
        </body>
      </html>
    </ThemeProvider>
  );
}
