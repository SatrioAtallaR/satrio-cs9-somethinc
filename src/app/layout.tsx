import type { Metadata } from "next";
import { Syne, DM_Sans, Azeret_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-azeret-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Somethinc — Local Beauty, Real Results",
  description:
    "Somethinc adalah brand kecantikan lokal Indonesia dengan produk skincare dan makeup berbasis riset, terdaftar BPOM dan bersertifikat halal.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${syne.variable} ${dmSans.variable} ${azeretMono.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning className="font-body text-ink antialiased bg-off">{children}</body>
    </html>
  );
}
