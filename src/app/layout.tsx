import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/section";
import { CursorHalo } from "@/components/cursor-halo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jiawei Li — AI × Quant Engineer",
  description:
    "AI Engineer with a dual background in Quantitative Finance and Multimodal Generative AI. Currently building VLM industrial drawing pipelines at IndustrialMind.ai.",
  metadataBase: new URL("https://jiaweili.dev"),
  openGraph: {
    title: "Jiawei Li — AI × Quant Engineer",
    description:
      "From millisecond alpha factors to 72B vision-language deployments.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ScrollProgress />
        <CursorHalo />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
