import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://elan-perfumes.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ÉLAN Perfumes — fragrâncias autorais em pequenos lotes",
    template: "%s | ÉLAN Perfumes",
  },
  description:
    "Perfumes autorais em pequenos lotes: madeiras, âmbar e flores noturnas. Peça 3 amostras grátis, descubra seu signo olfativo e receba em todo o Brasil.",
  keywords: [
    "perfume autoral",
    "fragrâncias brasileiras",
    "perfume importado",
    "amostras de perfume",
    "perfumaria",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "ÉLAN Perfumes",
    title: "ÉLAN Perfumes — fragrâncias autorais em pequenos lotes",
    description:
      "Peça 3 amostras grátis e descubra a fragrância que vira sua assinatura.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ÉLAN Perfumes — fragrâncias autorais",
    description: "Peça 3 amostras grátis e descubra sua assinatura olfativa.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}