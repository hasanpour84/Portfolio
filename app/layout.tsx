import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: {
    default: "Mohsen Hasanpour — Independent Designer",
    template: "%s — Mohsen Hasanpour",
  },
  description:
    "A considered portfolio of product, digital, and brand work by Mohsen Hasanpour.",
  openGraph: {
    type: "website",
    title: "Mohsen Hasanpour — Independent Designer",
    description:
      "Selected work, built around meaningful problems and measurable change.",
  },
};

export const viewport: Viewport = {
  themeColor: "#c7242f",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Script id="theme-init" strategy="beforeInteractive">
          {`try {
  if (window.localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
} catch {}`}
        </Script>
        <div className="grain" aria-hidden="true" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
