import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactBar from "@/components/contact-bar"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JobAway - Staffing Agency",
  description: "Find your next career with JobAway staffing agency",
    generator: 'v0.dev',
     icons: {
    icon: "/favicon.ico",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, "min-h-screen flex flex-col")}>
        <ContactBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
