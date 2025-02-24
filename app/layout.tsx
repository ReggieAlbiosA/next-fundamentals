import "@/styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from 'next/image';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import BrandLogo from '@/images/brand-logo.svg'

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased body-bg-theme`} >
        <header className="header-bg-theme min-h-[68px] flex items-center justify-center shadow-[0px_1px_4px_rgba(0,0,0,0.25)] sticky top-0 z-50">
          <div className="w-full max-w-[1200px] flex justify-between items-center">
            <div className="flex gap-x-[20px]">
                <Link href="/" id="brand-logo">
                    <Image
                      src={BrandLogo} // path relative to the public folder
                      alt="Your Brand Logo"
                      width={35}
                      height={35}
                    />
                </Link>
              
              <nav id="main-nav" className="flex gap-x-[20px]">
                <ul className="flex gap-x-[20px] items-center">
                  <li className="opacity-100 hover:opacity-90"><Link href="/blogpost">Blog Post</Link></li>
                </ul>
              </nav>
            </div>
            
            <div className="flex items-center gap-x-[25px] " id="auth-actions">
              <Link href="/signin" className="opacity-100 hover:opacity-90" id="sign-in" prefetch={false} replace>Sign In</Link>
              <Link href="/signup" className="text-[#27ae60] border-[1px] border-[#27ae60] rounded-[5px] px-[15px] py-[5px] hover:bg-[#27ae60] hover:text-white" id="sign-up" prefetch={false} replace>Sign Up</Link>
            </div>
          </div>
        </header>

        <main className="flex flex-col items-center justify-center pt-6 min-h-[calc(100vh-68px)]">{children}</main>
      
        <Analytics />
        <SpeedInsights />
        
      </body>
    </html>
  );
}


