//import './global.css';
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "../stack";
import { inter } from '@/app/ui/font';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from '@/components/ui/sonner';
//import ResponsiveComponent from '@/components/ui/ResponsiveComponent';


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Merxpress",
  description: "Your favorite online shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
//className={`${geistSans.variable}
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${geistMono.variable} antialiased`}
      ><StackProvider app={stackServerApp}><StackTheme>
        {children}
        <Toaster richColors />
      </StackTheme></StackProvider></body>
    </html>
  );
}
