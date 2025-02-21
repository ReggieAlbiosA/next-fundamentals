import "@/styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="min-h-[68px] flex items-center justify-center shadow-[0px_1px_4px_rgba(0,0,0,0.25)] sticky top-0 z-50">
          <nav>
            <ul className="flex gap-x-[20px]">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/blogpost">Blog Post</Link></li>
            </ul>
          </nav>
        </header>

        <main className="flex flex-col items-center justify-center pt-6">{children}</main>
      
        <Analytics />
      </body>
    </html>
  );
}


