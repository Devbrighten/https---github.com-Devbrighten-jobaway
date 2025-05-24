"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  {
    title: "Home",
    href: "/",
    hasDropdown: false,
  },
  {
    title: "About",
    href: "/about",
    hasDropdown: false,
  },
  {
    title: "Solutions",
    href: "/solutions",
    hasDropdown: true,
    dropdownItems: [
      { title: "Our Solutions", href: "/solutions" },
      
      { title: "Career Growth", href: "/solutions/career-growth" },
 
      { title: "Workforce System", href: "/solutions/workforce" },
      // { title: "Temporary Jobs", href: "/solutions/temporary-jobs" },
      //      { title: "Payroll Services", href: "/solutions/payroll" },
      //      { title: "Executive Search", href: "/solutions/executive-search" },
      // { title: "Training Session", href: "/solutions/training" },
    ],
  },
  {
    title: "Pages",
    href: "/pages",
    hasDropdown: true,
    dropdownItems: [
      { title: "Job", href: "/job" },
      // { title: "Portfolio", href: "/portfolio" },
      // { title: "Our Team", href: "/team" },
      { title: "FAQ's", href: "/faqs" },
      // { title: "Testimonials", href: "/testimonials" },
      { title: "Login", href: "/login" },
      { title: "Sign Up", href: "/signup" },
      { title: "404", href: "/404" },
    ],
  },
  {
    title: "Blog",
    href: "/blog",
    hasDropdown: true,
    dropdownItems: [
      { title: "Blog Grid", href: "/blog" },
      { title: "Blog Details", href: "/blog/1" },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
    hasDropdown: false,
  },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  // For mobile - toggle dropdown on click
  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                fill="#4CAF50"
              />
            </svg>
          </div>
          <span className="text-xl font-bold">JobAway</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-1">
          <nav className="flex items-center">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                ref={(el) => {
                  dropdownRefs.current[item.title] = el;
                       }}

                onMouseEnter={() => setHoveredItem(item.title)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.hasDropdown ? (
                  <div className="relative">
                    <Link
                      href={item.href}
                      className={`flex items-center px-4 py-2 text-base font-medium transition-colors hover:text-[#4CAF50] ${
                        hoveredItem === item.title ? "text-[#4CAF50]" : "text-gray-700"
                      }`}
                    >
                      {item.title}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform ${
                          hoveredItem === item.title ? "rotate-180" : ""
                        }`}
                      />
                    </Link>
                    {hoveredItem === item.title && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4CAF50]"></div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="relative block px-4 py-2 text-base font-medium text-gray-700 hover:text-[#4CAF50]"
                  >
                    {item.title}
                  </Link>
                )}

                <AnimatePresence>
                  {item.hasDropdown && hoveredItem === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full z-50 mt-1 min-w-[220px] rounded-md bg-white py-2 shadow-lg"
                    >
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.title}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#4CAF50]"
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button type="button" className="hidden rounded-full p-2 text-gray-700 lg:flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </button>

          <div className="hidden items-center gap-4 lg:flex">
            <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Log In
            </Link>
            <Link href="/signup">
              <Button className="rounded-full bg-[#4CAF50] hover:bg-[#3d8b40] text-white">Get Started</Button>
            </Link>
          </div>

          <button type="button" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white shadow-xl p-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="relative h-8 w-8">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                      fill="#4CAF50"
                    />
                  </svg>
                </div>
                <span className="text-lg font-bold">JobAway</span>
              </Link>
              <button type="button" onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <div className="space-y-1 py-3">
              {navItems.map((item) => (
                <div key={item.title} className="mb-2">
                  {item.hasDropdown ? (
                    <div className="space-y-1">
                      <button
                        onClick={() => toggleDropdown(item.title)}
                        className="flex w-full items-center justify-between px-3 py-2 text-base font-medium text-gray-700"
                      >
                        {item.title}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            activeDropdown === item.title ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.title && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 space-y-1">
                              {item.dropdownItems?.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.title}
                                  href={dropdownItem.href}
                                  className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {dropdownItem.title}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <Link
                href="/login"
                className="block w-full text-center px-4 py-2 mb-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log In
              </Link>
              <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full rounded-full bg-[#4CAF50] hover:bg-[#3d8b40] text-white">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
