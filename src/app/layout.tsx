import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Somethinc — Local Beauty, Real Results",
  description:
    "Somethinc adalah brand kecantikan lokal Indonesia dengan produk skincare dan makeup berbasis riset, terdaftar BPOM dan bersertifikat halal.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
