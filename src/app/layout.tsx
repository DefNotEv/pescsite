import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Purdue Engineering Student Council",
  description:
    "Serving Students, Serving Industry, Serving the Community. Purdue Engineering Student Council official site.",
  icons: {
    icon: [
      { url: "favicon.ico", sizes: "any" },
      { url: "logo.png", sizes: "32x32", type: "image/png" },
      { url: "logogold.png", sizes: "any", type: "image/png" }
    ],
    apple: "logogold.png",
    shortcut: "logo.png",
  },
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
