"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import CounterCard from "@/components/counter-card"
import FAQSection from "@/components/faq-section1"
import SplitHeroSection from "@/components/split-hero-section"

// Framer Motion variants for animations
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const slideInRight = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3 } },
}

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Number.POSITIVE_INFINITY,
    repeatType: "loop",
    ease: "easeInOut",
  },
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-[#1e3a29] z-0">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/pattern-bg.png')] bg-repeat opacity-20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-900/40 via-green-800/30 to-green-700/20"></div>
          </div>

          {/* Animated gradient circles - Responsive */}
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-green-600/10 blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full bg-green-500/10 blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Decorative elements - Responsive */}
          <div className="absolute top-10 left-4 sm:top-20 sm:left-20 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 border border-white/10 rounded-full hidden md:block"></div>
          <div className="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60 border border-white/10 rounded-full hidden md:block"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] border border-white/5 rounded-full hidden lg:block"></div>
        </div>

        <div className="container relative px-4 mx-auto md:px-6 lg:px-8 z-10 py-8 sm:py-16 md:py-24 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2">
            {/* Text content */}
            <motion.div className="text-center lg:text-left" initial="hidden" animate="visible" variants={fadeIn}>
              <div className="inline-block px-3 py-1 sm:px-4 sm:py-1 mb-4 sm:mb-6 text-xs sm:text-sm rounded-full bg-white/10 backdrop-blur-sm text-white/90 border border-white/20">
                FIND YOUR DREAM JOB
              </div>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight"
                variants={slideUp}
              >
                <span className="block">Find Your Next</span>
                <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">
                  Career Here
                </span>
              </motion.h1>

              <motion.h2
                className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl font-bold text-white/90"
                variants={slideUp}
              >
                Our Open Positions
              </motion.h2>

              <motion.p
                className="max-w-2xl mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/80 lg:mx-0 leading-relaxed"
                variants={slideUp}
              >
                Explore our open positions to find roles that align with your interests and expertise. From entry-level
                positions to leadership roles in various industries.
              </motion.p>

              <motion.div
                className="flex flex-col items-center gap-3 sm:gap-4 mt-8 sm:mt-10 sm:flex-row lg:justify-start"
                variants={slideInRight}
              >
                <Link href="/job" className="w-full sm:w-auto">
                  <Button className="w-full px-6 sm:px-8 py-6 sm:py-7 text-base sm:text-lg rounded-full bg-[#4CAF50] hover:bg-[#3d8b40] text-white shadow-lg shadow-green-900/30 transition-all duration-300 hover:scale-105">
                    Find Works <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Button>
                </Link>

                <Button
                  variant="outline"
                  className="w-full sm:w-auto px-6 sm:px-8 py-6 sm:py-7 text-base sm:text-lg bg-white/10 backdrop-blur-sm rounded-full text-white border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                >
                  Hire Talents Now
                </Button>
              </motion.div>

              {/* Scroll indicator */}
              <motion.div
                className="hidden lg:flex items-center mt-12 sm:mt-16 text-white/60 text-sm"
                animate={{
                  y: [0, -10, 0],
                  transition: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    ease: "easeInOut",
                  },
                }}
              >
                <div className="mr-2">Scroll to explore</div>
                <ChevronDown className="w-4 h-4 animate-bounce" />
              </motion.div>
            </motion.div>

            {/* Profile circles container */}
            <div className="relative w-full max-w-[500px] sm:max-w-[600px] mx-auto">
              {/* Main circle background */}
              <motion.div
                className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] w-full mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {/* Center decorative elements - Responsive */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[280px] lg:h-[280px] rounded-full border-2 border-white/10 z-0"
                  animate={{
                    scale: [1, 1.1, 1],
                    transition: { duration: 8, repeat: Number.POSITIVE_INFINITY },
                  }}
                />

                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] rounded-full border border-white/20 z-0"
                  animate={{
                    scale: [1, 1.2, 1],
                    transition: { duration: 6, repeat: Number.POSITIVE_INFINITY, delay: 0.5 },
                  }}
                />

                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] rounded-full bg-white/5 z-0"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                    transition: { duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 },
                  }}
                />

                {/* Profile circles - Responsive */}
                {[
                  {
                    name: "Waiter",
                    image: "/waiter.jpg",
                    color: "#4CAF50",
                    initialPosition: { top: "-5%", left: "40%" },
                    size: "w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36",
                    delay: 0,
                    duration: 25,
                    reverse: false,
                  },
                  {
                    name: "Finance",
                    image: "/professional-man-pink.png",
                    color: "#F9A826",
                    initialPosition: { top: "40%", right: "-5%" },
                    size: "w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36",
                    delay: 0.2,
                    duration: 30,
                    reverse: true,
                  },
                  {
                    name: "Assistant",
                    image: "/professional-indian-man-smiling.png",
                    color: "#00BCD4",
                    initialPosition: { bottom: "-5%", left: "40%" },
                    size: "w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36",
                    delay: 0.4,
                    duration: 28,
                    reverse: false,
                  },
                  {
                    name: "Cleaner",
                    image: "/professional-woman-curly-hair.png",
                    color: "#FF7043",
                    initialPosition: { top: "40%", left: "-5%" },
                    size: "w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36",
                    delay: 0.6,
                    duration: 32,
                    reverse: true,
                  },
                ].map((profile, index) => (
                  <motion.div
                    key={profile.name}
                    className={`absolute z-20 overflow-hidden rounded-full shadow-xl group ${profile.size}`}
                    style={profile.initialPosition}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: profile.reverse ? [0, -360] : [0, 360],
                      transition: {
                        delay: profile.delay,
                        duration: profile.duration,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        ease: "linear",
                        opacity: { duration: 0.6 },
                        scale: { duration: 0.6 },
                      },
                    }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={profile.image || "/placeholder.svg"}
                        alt={profile.name}
                        fill
                        className="object-cover w-full h-full transition-all duration-1000"
                        sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 112px, 144px"
                      />
                      <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20"></div>
                    </div>
                    <div
                      className="absolute bottom-0 left-0 right-0 py-1 sm:py-1.5 text-center text-xs font-medium text-white"
                      style={{ backgroundColor: profile.color }}
                    >
                      {profile.name}
                    </div>

                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 rounded-full bg-white blur-md opacity-20"></div>
                    </div>
                  </motion.div>
                ))}

                {/* Floating particles - Responsive */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/30"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0.2, 0.8, 0.2],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom wave shape */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L80,80C160,64,320,32,480,32C640,32,800,64,960,69.3C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>

        {/* Parallax effect on scroll - Responsive */}
        <div
          className="absolute inset-0 pointer-events-none z-5"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          <div className="absolute top-10 sm:top-20 right-[15%] sm:right-[20%] w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full border border-white/10 hidden lg:block"></div>
          <div className="absolute bottom-20 sm:bottom-40 left-[10%] sm:left-[15%] w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full border border-white/10 hidden lg:block"></div>
        </div>
      </section>

      {/* About Us Video Section - Enhanced */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
        <div className="container px-4 mx-auto md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-2 items-center">
            {/* Video Player - Enhanced */}
            <motion.div
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100 shadow-2xl">
                {/* Main video container with responsive height */}
                <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[600px]">
                  <Image
                    src="/home.webp"
                    alt="Professional explaining hospitality staffing"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"></div>

                  {/* Play Button - Enhanced */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      {/* Outer pulsing ring - Responsive */}
                      <motion.div
                        className="absolute w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 border-2 sm:border-4 border-white/30 rounded-full"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.8, 0.3, 0.8],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Middle pulsing ring - Responsive */}
                      <motion.div
                        className="absolute w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/10 rounded-full backdrop-blur-sm"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.6, 0.4, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: 0.3,
                        }}
                      />

                      {/* Play button - Responsive */}
                      <motion.div
                        className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#4CAF50] rounded-full z-10 shadow-lg cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="w-0 h-0 border-y-[8px] sm:border-y-[10px] lg:border-y-[12px] border-y-transparent border-l-[12px] sm:border-l-[15px] lg:border-l-[18px] border-l-white ml-1"></div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Video overlay text - Responsive */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                      <p className="text-white font-medium text-sm sm:text-base lg:text-lg">Watch Our Story</p>
                      <p className="text-white/80 text-xs sm:text-sm mt-1">
                        Discover how we're transforming hospitality staffing
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Decorative elements - Responsive */}
              <div className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-[#4CAF50]/20 to-[#4CAF50]/10 rounded-xl sm:rounded-2xl -z-10 transform -rotate-12"></div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-[#7CFC00]/20 to-[#7CFC00]/10 rounded-xl sm:rounded-2xl -z-10 transform rotate-12"></div>

              {/* Floating elements - Responsive */}
              <motion.div
                className="absolute top-6 right-6 sm:top-10 sm:right-10 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-[#4CAF50] rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-12 left-6 sm:bottom-20 sm:left-10 w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-[#7CFC00] rounded-full"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>

            {/* Content - Enhanced */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 lg:pl-8"
            >
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 text-xs sm:text-sm rounded-full bg-gradient-to-r from-[#E8F5E9] to-[#F1F8E9] text-[#4CAF50] border border-[#4CAF50]/20">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#4CAF50] rounded-full mr-2 animate-pulse"></span>
                ABOUT JOBAWAY
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
                The Leading Hospitality{" "}
                <span className="bg-gradient-to-r from-[#4CAF50] to-[#7CFC00] bg-clip-text text-transparent">
                  Platform
                </span>
              </h2>

              <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                JobAway revolutionizes hospitality staffing by connecting businesses with top-tier professionals. Our
                platform provides access to a diverse pool of qualified candidates with specialized skills in
                hospitality management, customer service, and operational excellence.
              </p>

              {/* Enhanced Features List - Responsive */}
              <div className="mt-6 sm:mt-8 lg:mt-10 space-y-4 sm:space-y-6">
                {[
                  {
                    title: "Service Excellence",
                    description:
                      "We help businesses maintain the highest standards of service through carefully vetted professionals",
                    icon: "🏆",
                  },
                  {
                    title: "Scalable Solutions",
                    description:
                      "Our flexible staffing solutions allow businesses to adjust their workforce based on demand",
                    icon: "📈",
                  },
                  {
                    title: "Industry Expertise",
                    description:
                      "Deep understanding of hospitality sector needs with specialized recruitment strategies",
                    icon: "🎯",
                  },
                  {
                    title: "24/7 Support",
                    description:
                      "Round-the-clock assistance to ensure seamless operations and quick problem resolution",
                    icon: "🕐",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="flex items-start group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#E8F5E9] to-[#F1F8E9] group-hover:from-[#4CAF50] group-hover:to-[#7CFC00] transition-all duration-300">
                        <span className="text-sm sm:text-base lg:text-xl group-hover:scale-110 transition-transform duration-300">
                          {feature.icon}
                        </span>
                      </div>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-[#4CAF50] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button - Responsive */}
              <motion.div
                className="mt-6 sm:mt-8 lg:mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full bg-gradient-to-r from-[#4CAF50] to-[#7CFC00] hover:from-[#3d8b40] hover:to-[#6BE400] text-white shadow-lg shadow-green-900/30 transition-all duration-300 hover:scale-105">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </motion.div>

              {/* Stats - Responsive */}
              <motion.div
                className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                {[
                  { number: "15+", label: "Years Experience" },
                  { number: "10K+", label: "Successful Placements" },
                  { number: "500+", label: "Partner Businesses" },
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#4CAF50]">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Section with Dark Overlay and White Cards */}
      <section className="relative py-0">
        {/* Background Image with Dark Overlay */}
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
          <Image
            src="/diverse-business-meeting.jpg"
            alt="Business professionals"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Center Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
            <div className="inline-block px-3 py-1 sm:px-4 sm:py-1 mb-3 sm:mb-4 text-xs font-medium rounded-full bg-[#4CAF50]/20 text-[#4CAF50]">
              CATEGORY
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center max-w-4xl leading-tight">
              Researching Companies Before Applying
            </h2>
          </div>
        </div>

        {/* White Cards Section */}
        <div className="container px-4 mx-auto md:px-6 lg:px-8 -mt-20 sm:-mt-24 md:-mt-32 lg:-mt-40 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            {/* For Local Workers Card */}
            <motion.div
              className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-3 sm:mb-4">For Local Workers</h3>
              <p className="text-gray-600 text-center mb-6 sm:mb-8 text-sm sm:text-base">
                Join over 1 million workers who use JobAway to find flexible and temp to hire opportunities
              </p>
              <div className="flex justify-center mb-4 sm:mb-6">
                <Button className="rounded-full bg-[#7CFC00] hover:bg-[#6BE400] text-black font-medium px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base">
                  Find Work
                </Button>
              </div>
              <motion.div
                className="relative h-60 sm:h-80 lg:h-96 w-full rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/workers-meeting.png"
                  alt="Workers collaborating"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </motion.div>

            {/* For Business Owner Card */}
            <motion.div
              className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-3 sm:mb-4">For Business Owner</h3>
              <p className="text-gray-600 text-center mb-6 sm:mb-8 text-sm sm:text-base">
                Finding individuals who share your company's values and vision can contribute to a cohesive workplace
                culture
              </p>
              <div className="flex justify-center mb-4 sm:mb-6">
                <Button className="rounded-full bg-[#7CFC00] hover:bg-[#6BE400] text-black font-medium px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base">
                  Find Employee
                </Button>
              </div>
              <motion.div
                className="relative h-60 sm:h-80 lg:h-96 w-full rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/business-discussion-laptop.png"
                  alt="Business owners collaborating"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container px-4 mx-auto md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                value: "12k",
                label: "Freelance Workers",
                startValue: 0,
                endValue: 12000,
                suffix: "k",
                displayDivider: 1000,
              },
              {
                value: "95%",
                label: "Jobs Fulfillment Rate",
                startValue: 0,
                endValue: 95,
                suffix: "%",
                displayDivider: 1,
              },
              {
                value: "12k+",
                label: "Jobs Filled",
                startValue: 0,
                endValue: 12000,
                suffix: "k+",
                displayDivider: 1000,
              },
              {
                value: "825+",
                label: "Satisfied Businesses",
                startValue: 0,
                endValue: 825,
                suffix: "+",
                displayDivider: 1,
              },
            ].map((stat, index) => (
              <CounterCard
                key={stat.label}
                label={stat.label}
                startValue={stat.startValue}
                endValue={stat.endValue}
                suffix={stat.suffix}
                displayDivider={stat.displayDivider}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Automatic Scrolling Banner - Fixed overflow */}
      <div className="relative w-full overflow-hidden bg-[#7CFC00] py-4 sm:py-6 lg:py-8">
        <div className="transform -rotate-1 sm:-rotate-2 lg:-rotate-3 scale-105 sm:scale-110">
          <motion.div
            className="whitespace-nowrap flex items-center"
            animate={{ x: [0, -1000] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 20,
              ease: "linear",
            }}
          >
            {/* {[
              "Special Events",
              "General Labor",
              "Warehouse",
              "Hospitality",
              "Restaurant Staff",
              "Hotel Personnel",
              "Cleaning Services",
              "Retail",
              "Customer Service",
              "Administrative",
              "Healthcare Support",
              "Delivery",
            ].map((category, index) => (
              <div key={index} className="inline-flex items-center mx-6 sm:mx-8 lg:mx-12">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1B5E20]">{category}</span>
                <span className="text-xl sm:text-2xl lg:text-3xl text-[#1B5E20] mx-2 sm:mx-3 lg:mx-4">★</span>
              </div>
            ))} */}
            {[
  "Software Development",
  "Web Development",
  "UI/UX Design",
  "Mobile App Development",
  "Cloud Computing",
  "DevOps Engineering",
  "Data Science",
  "Cybersecurity",
  "IT Support",
  "Product Management",
  "Business Analysis",
  "Quality Assurance",
].map((category, index) => (
  <div key={index} className="inline-flex items-center mx-6 sm:mx-8 lg:mx-12">
    <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1B5E20]">{category}</span>
    <span className="text-xl sm:text-2xl lg:text-3xl text-[#1B5E20] mx-2 sm:mx-3 lg:mx-4">★</span>
  </div>
))}

            {/* Repeat categories to ensure continuous scrolling */}
            {["Special Events", "General Labor", "Warehouse", "Hospitality", "Restaurant Staff", "Hotel Personnel"].map(
              (category, index) => (
                <div key={`repeat-${index}`} className="inline-flex items-center mx-6 sm:mx-8 lg:mx-12">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1B5E20]">{category}</span>
                  <span className="text-xl sm:text-2xl lg:text-3xl text-[#1B5E20] mx-2 sm:mx-3 lg:mx-4">★</span>
                </div>
              ),
            )}
          </motion.div>
        </div>
      </div>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container px-4 mx-auto md:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold">How JobAway Works</h2>
            <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base">
              Simple steps to find your dream job or hire the perfect candidate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
            {[
              {
                title: "Create an Account",
                description: "Sign up and complete your profile with your skills and experience",
                step: "01",
                icon: "👤",
              },
              {
                title: "Search for Jobs",
                description: "Browse through our extensive job listings or post your job opening",
                step: "02",
                icon: "🔍",
              },
              {
                title: "Apply or Hire",
                description: "Apply for positions or connect with qualified candidates",
                step: "03",
                icon: "✅",
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                className="relative p-4 sm:p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 text-2xl sm:text-3xl bg-[#E8F5E9] rounded-full text-[#4CAF50]">
                  {step.icon}
                  <span className="absolute px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs font-bold text-white rounded-full -top-1 -right-1 sm:-top-2 sm:-right-2 bg-[#4CAF50]">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Hero Section */}
      <SplitHeroSection />

      {/* Team Section with Interior Design Style */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <motion.div
              className="inline-block px-3 py-1 text-xs sm:text-sm rounded-lg bg-[#E8F5E9] text-[#4CAF50] mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              OUR TEAM
            </motion.div>
            <motion.h2
              className="text-2xl sm:text-3xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Meet the Experts Behind JobAway
            </motion.h2>
            <motion.p
              className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Our team of dedicated professionals brings decades of combined experience in hospitality and staffing
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                name: "David Chen",
                role: "Founder & CEO",
                image: "/David-Chen.jpg",
                bio: "15+ years in hospitality management",
              },
              {
                name: "Sarah Williams",
                role: "Chief Operations Officer",
                image: "/professional-blonde-woman.png",
                bio: "Former hotel executive with global experience",
              },
              {
                name: "Michael Johnson",
                role: "Head of Recruitment",
                image: "/Michael Johnson.jpg",
                bio: "Specialized in talent acquisition for 10+ years",
              },
              {
                name: "Jessica Rodriguez",
                role: "Client Relations Manager",
                image: "/women.jpg",
                bio: "Expert in hospitality client management",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-3 sm:mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 sm:p-6">
                      <p className="text-white text-xs sm:text-sm">{member.bio}</p>
                      <div className="flex mt-3 sm:mt-4 space-x-2 sm:space-x-3">
                        <a href="#" className="text-white hover:text-[#7CFC00]">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                          </svg>
                        </a>
                        <a href="#" className="text-white hover:text-[#7CFC00]">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                        <a href="#" className="text-white hover:text-[#7CFC00]">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1.41 7.08c.84-.83 2.17-.83 3.01 0 .83.83.83 2.17 0 3.01-.84.83-2.17.83-3.01 0-.83-.84-.83-2.17 0-3.01z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">{member.name}</h3>
                <p className="text-[#4CAF50] text-sm sm:text-base">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container px-4 mx-auto md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-block px-3 py-1 sm:px-4 sm:py-1 text-xs sm:text-sm rounded-full bg-[#E8F5E9] text-[#4CAF50] mb-3 sm:mb-4">
              INDUSTRIES
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Industries Served</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: "🏨", title: "Hotel", count: "2853 Staffs" },
              { icon: "🍽️", title: "Hospitality", count: "2256 Staffs" },
              { icon: "👨‍🍳", title: "Kitchen", count: "1408 Staffs" },
              { icon: "🛒", title: "Retail", count: "1740 Staffs" },
              { icon: "🎉", title: "Special Events", count: "3948 Staffs" },
              { icon: "👷", title: "General Labor", count: "2984 Staffs" },
              { icon: "🚗", title: "Driving", count: "4509 Staffs" },
              { icon: "👴", title: "Senior Living", count: "1039 Staffs" },
            ].map((industry, index) => (
              <motion.div
                key={industry.title}
                className="bg-white border rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#1B5E20] group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">{industry.icon}</div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold group-hover:text-white">{industry.title}</h3>
                  <p className="text-gray-500 mt-1 group-hover:text-white/70 text-xs sm:text-sm">{industry.count}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Button className="bg-[#7CFC00] hover:bg-[#6BE400] text-black font-medium px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base">
              View All Categories
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ and How It Works Section */}
      <FAQSection />

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold">What Our Clients Say</h2>
            <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base">
              Hear from employers and job seekers who found success with JobAway
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "Hired as Restaurant Manager",
                quote:
                  "JobAway helped me find my dream job in just two weeks. The process was smooth and the team was incredibly supportive.",
                image: "/professional-woman-smiling.png",
              },
              {
                name: "Michael Chen",
                role: "Hotel Owner",
                quote:
                  "As a business owner, finding qualified staff has always been challenging. JobAway made it simple to connect with talented professionals.",
                image: "/asian-businessman.png",
              },
              {
                name: "Emily Rodriguez",
                role: "Hired as Event Coordinator",
                quote:
                  "The personalized approach at JobAway made all the difference. They understood my skills and matched me with the perfect position.",
                image: "/latina-professional-woman.png",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="p-4 sm:p-6 bg-white border rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full sm:w-[60px] sm:h-[60px]"
                  />
                  <div className="ml-3 sm:ml-4">
                    <h4 className="text-base sm:text-lg font-semibold">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">"{testimonial.quote}"</p>
                <div className="flex mt-3 sm:mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.53.588l3.462-2.53a1 1 0 00.117-.648l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
