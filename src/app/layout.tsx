import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ConsoleCredit } from "../components/ConsoleCredit"

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-display",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono2",
})

export const metadata: Metadata = {
  title: "Ashay Kushwaha — Systems Builder",
  description:
    "I build systems that turn complexity into tools anyone can use. 18 open-source systems — risk models, causal engines, breach analytics — MIT-licensed, tested, deployed.",
  openGraph: {
    title: "Ashay Kushwaha — Systems Builder",
    description:
      "I build systems that turn complexity into tools anyone can use. 18 open-source systems — MIT-licensed, tested, deployed.",
    type: "website",
    locale: "en_US",
    siteName: "Ashay Kushwaha",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashay Kushwaha — Systems Builder",
    description:
      "I build systems that turn complexity into tools anyone can use.",
    creator: "@sentinelcipher",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://sentinelcipher3301.netlify.app"),
}

export const viewport: Viewport = {
  themeColor: "#F5F3EE",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${mono.variable} ${geistMono.variable}`}>
      <body>
        <ConsoleCredit />
        {children}
      </body>
    </html>
  )
}
