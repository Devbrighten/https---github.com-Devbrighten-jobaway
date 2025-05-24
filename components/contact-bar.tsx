"use client"

import { useState, useEffect } from "react"
import { Phone, Mail, Facebook, Twitter, Linkedin, Globe } from "lucide-react"
import Link from "next/link"

export default function ContactBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <div
      className={`bg-[#1B5E20] text-white py-2 transition-transform duration-300 hidden md:block ${
        isVisible ? "transform-none" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2 text-[#7CFC00]" />
            <span className="text-sm">Call: +91 1234567890</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2 text-[#7CFC00]" />
            <span className="text-sm">Mail: jobinfo@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm mr-2">SHARE:</span>
          <Link href="#" className="text-white hover:text-[#7CFC00]">
            <Facebook className="w-4 h-4" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-white hover:text-[#7CFC00]">
            <Twitter className="w-4 h-4" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-white hover:text-[#7CFC00]">
            <Linkedin className="w-4 h-4" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="#" className="text-white hover:text-[#7CFC00]">
            <Globe className="w-4 h-4" />
            <span className="sr-only">Website</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
