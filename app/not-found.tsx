"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function NotFound() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#E8F5E9] flex flex-col items-center justify-center py-16 px-4">
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-[#1B5E20] text-9xl font-bold">404</h1>
        <h2 className="text-[#1B5E20] text-2xl font-semibold mt-4">Page Not Found</h2>

        <p className="text-gray-600 mt-6">This page doesn't exist or was removed! We suggest you go back to home.</p>

        <Link href="/" className="block mt-8">
          <Button className="rounded-full bg-[#7CFC00] hover:bg-[#6BE400] text-black font-medium px-8 py-6 text-lg">
            Back to Homepage
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}
