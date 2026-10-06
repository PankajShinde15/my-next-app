import type { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Globomatics",
  description: "Explore the Globomatics conference, sessions, and community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="site-shell">
          <header className="site-header">
            <Link className="site-brand" href="/">
              <span className="brand-mark" aria-hidden="true">G</span>
              <span>Globomatics</span>
            </Link>
            <nav className="primary-nav" aria-label="Main navigation">
              <Link href="/">Home</Link>
              <Link href="/conference">Conference</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/settings">Settings</Link>
            </nav>
          </header>
          {children}
          <footer className="site-footer">
            <span>Globomatics Conference</span>
            <span>Ideas that move us forward.</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
