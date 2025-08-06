import { Geist, Geist_Mono , Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  icons: {
    icon: "/favicon.ico",
  },
  keywords: ['GYB', 'Get Your Book', 'NIT Patna', 'Social Service NITP', 'getyourbook', 'GYB NIT Patna','GYB NITP', 'Community Service NITP'],
  openGraph: {
    title: "Get Your Book",
    description: "Spread happiness through books",
    url: "https://getyourbook-nitp.vercel.app/",
    siteName: "Get Your Book",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "https://getyourbook-nitp.vercel.app",
            "logo": "/favicon.ico"
          })}
        </script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
