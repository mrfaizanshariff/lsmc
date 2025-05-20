import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LSMC - Premium Lighting Solutions',
  description: 'Leading manufacturer of indoor, outdoor lighting fixtures and production equipment in Saudi Arabia',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        
        </ThemeProvider>
        <script src="https://cdn.botpress.cloud/webchat/v2.5/inject.js"></script>
<script src="https://files.bpcontent.cloud/2025/05/20/17/20250520174259-6MW4VKCD.js"></script>
      </body>
    </html>
  );
}