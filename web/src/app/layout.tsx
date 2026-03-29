import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Baldo Vino",
    template: "%s · Baldo Vino",
  },
  description:
    "Enoteca Ristorante Gourmet e Bistrot Bibendum — Palazzo Cancellieri, Pistoia.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
