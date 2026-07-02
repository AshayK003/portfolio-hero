import type { Metadata, Viewport } from "next"
import { Outfit, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-aeonik",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-input",
})

export const metadata: Metadata = {
  title: "Ashay Kushwaha — Systems Builder",
  description:
    "Building real-world systems that solve real problems. Open-source tools for cybersecurity, climate policy, causal inference, and social impact.",
  openGraph: {
    title: "Ashay Kushwaha — Systems Builder",
    description:
      "Building real-world systems that solve real problems. Open-source tools for cybersecurity, climate policy, causal inference, and social impact.",
    type: "website",
    locale: "en_US",
    siteName: "Ashay Kushwaha",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashay Kushwaha — Systems Builder",
    description:
      "Building real-world systems that solve real problems. Open-source tools for cybersecurity, climate policy, causal inference, and social impact.",
    creator: "@sentinelcipher",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://ashaykushwaha.dev"),
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  )
}
