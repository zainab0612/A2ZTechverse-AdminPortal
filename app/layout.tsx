import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "A2Z Techverse",
};

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`} style={{
          backgroundImage: "url('/images/Background.png')",
        }}
      >
        {children}
      </body>
    </html>
  );
}
