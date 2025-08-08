import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// ❌ DO NOT import Head from 'next/head' here

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get Your Book",
  description: "Spread happiness through books",
  // This is the correct way to add the favicon
  icons: {
    icon: "/favicon.ico"
  },
  keywords: ['GYB','gyb nitp','get your book nitp', 'Get Your Book', 'NIT Patna', 'Social Service NITP', 'getyourbook', 'GYB NIT Patna','GYB NITP', 'Community Service NITP'],

  openGraph: {
    title: "Get Your Book",
    description: "Spread happiness through books",
    url: "https://getyourbook-nitp.vercel.app",
    siteName: "Get Your Book",
    images: [
      {
        url: "https://getyourbook-nitp.vercel.app/logo.png",
        width: 800,
        height: 600,
        alt: "Get Your Book Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
    twitter: {
    card: 'summary_large_image',
    images: ['https://getyourbook-nitp.vercel.app/logo.png'],
  }
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* ❌ The <Head> component has been removed */}
      <body className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}