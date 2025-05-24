"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Framer Motion variants for animations
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
}

const slideUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
}

// Image zoom modal variants
const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
}

const imageZoomVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
}

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Function to handle image click and open modal
  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Overlapping Images */}
      <section className="relative bg-white overflow-hidden pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="z-10 order-2 lg:order-1">
              <div className="inline-block px-3 py-1 text-xs sm:text-sm rounded-lg bg-[#E8F5E9] text-[#4CAF50] mb-4">
                ABOUT US
              </div>
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight"
                variants={slideUp}
              >
                The Leading Hospitality <span className="text-[#4CAF50] block sm:inline">Platform</span>
              </motion.h1>
              <motion.p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 leading-relaxed" variants={slideUp}>
                JobAway provides access to a diverse pool of qualified candidates with specialized skills in hospitality
                management, connecting businesses with the talent they need to thrive.
              </motion.p>

              <motion.ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4" variants={slideUp}>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base">
                    Helping businesses maintain service excellence through quality staffing
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base">
                    Providing scalability that allows businesses to adjust staffing needs
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base">
                    Creating meaningful career opportunities for hospitality professionals
                  </span>
                </li>
              </motion.ul>

              <motion.div
                className="mt-6 sm:mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Button className="w-full sm:w-auto rounded-full bg-[#4CAF50] hover:bg-[#3d8b40] text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Overlapping Images */}
            <motion.div
              className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] order-1 lg:order-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main image */}
              <motion.div
                className="absolute top-0 right-0 w-[75%] sm:w-[80%] h-[60%] sm:h-[70%] rounded-lg overflow-hidden shadow-xl z-20 cursor-pointer group"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                onClick={() => handleImageClick("/business-meeting-dark.png")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Image
                  src="/business-meeting-dark.png"
                  alt="Modern Office Interior"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 75vw, (max-width: 1024px) 40vw, 30vw"
                />
                <div className="absolute inset-0 bg-white/0 transition-all duration-300 group-hover:bg-white/20 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/30 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white sm:w-6 sm:h-6"
                      >
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14 21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Overlapping image 1 */}
              <motion.div
                className="absolute bottom-0 left-0 w-[60%] sm:w-[65%] h-[45%] sm:h-[55%] rounded-lg overflow-hidden shadow-xl z-10 cursor-pointer group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                onClick={() => handleImageClick("/happy-employees.webp")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Image
                  src="/happy-employees.webp"
                  alt="Team Meeting"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 60vw, (max-width: 1024px) 35vw, 25vw"
                />
                <div className="absolute inset-0 bg-white/0 transition-all duration-300 group-hover:bg-white/20 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/30 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white sm:w-6 sm:h-6"
                      >
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14 21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative element */}
              <motion.div
                className="absolute top-[15%] sm:top-[20%] left-[2%] sm:left-[5%] w-[35%] sm:w-[40%] h-[35%] sm:h-[40%] bg-[#E8F5E9] rounded-lg z-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vision Section with Interior Design Style */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Overlapping Images with Interior Design Style */}
            <motion.div
              className="relative h-[300px] sm:h-[400px] md:h-[500px] order-2 lg:order-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Main image */}
              <motion.div
                className="absolute top-[8%] sm:top-[10%] right-[3%] sm:right-[5%] w-[70%] sm:w-[75%] h-[55%] sm:h-[65%] rounded-lg overflow-hidden shadow-xl z-20 cursor-pointer group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                onClick={() => handleImageClick("/business-discussion-laptop.png")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Image
                  src="/business-discussion-laptop.png"
                  alt="Luxury Hotel Lobby"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 30vw"
                />
                <div className="absolute inset-0 bg-white/0 transition-all duration-300 group-hover:bg-white/20 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/30 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white sm:w-6 sm:h-6"
                      >
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14 21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Overlapping image */}
              <motion.div
                className="absolute bottom-[3%] sm:bottom-[5%] left-[8%] sm:left-[10%] w-[55%] sm:w-[60%] h-[40%] sm:h-[50%] rounded-lg overflow-hidden shadow-xl z-10 cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                onClick={() => handleImageClick("/modern-office-plants.png")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Image
                  src="/modern-office-plants.png"
                  alt="Restaurant Interior"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 55vw, (max-width: 1024px) 35vw, 25vw"
                />
                <div className="absolute inset-0 bg-white/0 transition-all duration-300 group-hover:bg-white/20 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/30 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white sm:w-6 sm:h-6"
                      >
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14 21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative element */}
              <motion.div
                className="absolute top-[3%] sm:top-[5%] left-0 w-[40%] sm:w-[45%] h-[35%] sm:h-[45%] border-2 border-[#4CAF50] rounded-lg z-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              />
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 text-xs sm:text-sm rounded-lg bg-[#E8F5E9] text-[#4CAF50] mb-4">
                OUR VISION
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Creating Excellence in Hospitality Staffing
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                We envision a world where hospitality businesses have seamless access to qualified talent, and where
                hospitality professionals can build rewarding careers with opportunities for growth and development.
              </p>

              <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1B5E20] text-white">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                    </svg>
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h3 className="text-lg sm:text-xl font-semibold">Building Communities</h3>
                    <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                      We're creating a community where hospitality professionals can connect, learn, and grow together.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1B5E20] text-white">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                    </svg>
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h3 className="text-lg sm:text-xl font-semibold">Elevating Standards</h3>
                    <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                      We're raising the bar for hospitality staffing, ensuring excellence at every level of service.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1B5E20] text-white">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                    </svg>
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h3 className="text-lg sm:text-xl font-semibold">Continuous Learning</h3>
                    <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                      We provide resources and opportunities for professional development and growth in the hospitality
                      industry.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section with Modern Design */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <motion.div
              className="inline-block px-3 py-1 text-xs sm:text-sm rounded-lg bg-[#E8F5E9] text-[#4CAF50] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              OUR STORY
            </motion.div>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              From Vision to Reality
            </motion.h2>
            <motion.p
              className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              JobAway was founded in 2015 by a team of hospitality professionals who recognized the challenges both
              employers and job seekers faced in the industry. What started as a small local staffing agency has grown
              into a comprehensive platform serving clients nationwide.
            </motion.p>
          </div>

          {/* Timeline with Interior Design Style */}
          <div className="relative">
            {/* Vertical line - Hidden on mobile, shown on larger screens */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#E8F5E9]"></div>

            <div className="relative z-10">
              {[
                {
                  year: "2015",
                  title: "The Beginning",
                  description: "JobAway was founded with a mission to transform hospitality staffing.",
                  image: "/startup-team1.jpg",
                },
                {
                  year: "2017",
                  title: "Digital Transformation",
                  description:
                    "Launched our online platform, making it easier for candidates and employers to connect.",
                  image: "/tech-office1.jpg",
                },
                {
                  year: "2019",
                  title: "National Expansion",
                  description: "Expanded our services nationwide, connecting talent across the country.",
                  image: "/team-celebration1.jpg",
                },
                {
                  year: "2023",
                  title: "Innovation & Growth",
                  description: "Introduced AI-powered matching and expanded into new hospitality sectors.",
                  image: "/modern-workspace1.webp",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`flex flex-col md:flex-row items-center mb-8 sm:mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div
                    className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8 lg:pr-12 md:text-right" : "md:pl-8 lg:pl-12"} mb-6 md:mb-0`}
                  >
                    <div className="inline-block px-3 py-1 text-xs sm:text-sm rounded-lg bg-[#E8F5E9] text-[#4CAF50] mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
                  </div>

                  {/* Center dot - Hidden on mobile */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#4CAF50] border-2 sm:border-4 border-white"></div>

                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-8 lg:pl-12" : "md:pr-8 lg:pr-12"}`}>
                    <div
                      className="relative h-32 sm:h-40 md:h-48 rounded-lg overflow-hidden shadow-lg cursor-pointer group"
                      onClick={() => handleImageClick(item.image)}
                    >
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-white/0 transition-all duration-300 group-hover:bg-white/20 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                        <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/30 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-white sm:w-5 sm:h-5"
                            >
                              <path d="M15 3h6v6"></path>
                              <path d="M10 14 21 3"></path>
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Modern Design */}
      <section className="py-12 sm:py-16 bg-[#1B5E20] text-white">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { number: "5K+", label: "Jobs Filled" },
              { number: "95%", label: "Client Satisfaction" },
              { number: "1K+", label: "Partner Companies" },
              { number: "8+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#7CFC00]">{stat.number}</div>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Interior Design Style */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <motion.div
              className="inline-block px-3 py-1 text-xs sm:text-sm rounded-lg bg-[#E8F5E9] text-[#4CAF50] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              OUR TEAM
            </motion.div>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Meet the Experts Behind JobAway
            </motion.h2>
            <motion.p
              className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed"
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
                <div
                  className="relative overflow-hidden rounded-lg aspect-[3/4] mb-4 cursor-pointer"
                  onClick={() => handleImageClick(member.image)}
                >
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
                        <a href="#" className="text-white hover:text-[#7CFC00] transition-colors">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                          </svg>
                        </a>
                        <a href="#" className="text-white hover:text-[#7CFC00] transition-colors">
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
                        <a href="#" className="text-white hover:text-[#7CFC00] transition-colors">
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
                <p className="text-sm sm:text-base text-[#4CAF50]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 bg-[#1B5E20] relative">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block px-3 sm:px-4 py-1 text-xs sm:text-sm rounded-full bg-[#4CAF50] text-white mb-4">
              WHY US
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Why Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Card 1 */}
            <motion.div
              className="bg-white p-6 sm:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#1B5E20] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-[#164A18] cursor-pointer">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sm:w-8 sm:h-8"
                  >
                    <path
                      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                      fill="white"
                    />
                    <path
                      d="M17.5 21C18.8807 21 20 19.8807 20 18.5C20 17.1193 18.8807 16 17.5 16C16.1193 16 15 17.1193 15 18.5C15 19.8807 16.1193 21 17.5 21Z"
                      fill="white"
                    />
                    <path
                      d="M6.5 21C7.88071 21 9 19.8807 9 18.5C9 17.1193 7.88071 16 6.5 16C5.11929 16 4 17.1193 4 18.5C4 19.8807 5.11929 21 6.5 21Z"
                      fill="white"
                    />
                    <path
                      d="M17.5 16C16.7044 16 15.9413 16.2842 15.3 16.7604C14.8392 15.4425 13.5004 14.5 12 14.5C10.4996 14.5 9.16079 15.4425 8.7 16.7604C8.05871 16.2842 7.29565 16 6.5 16"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4">Retain Top Talent</h3>
              <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                Providing clear career paths and growth opportunities is key to retaining top talent.
              </p>
              <div className="flex justify-center mt-4 sm:mt-6">
                <a href="#" className="inline-flex items-center text-[#4CAF50] font-medium text-sm sm:text-base">
                  Learn More <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </a>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-white p-6 sm:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#1B5E20] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-[#164A18] cursor-pointer">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sm:w-8 sm:h-8"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4">Stay Compliant</h3>
              <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                Educate employees about compliance requirements through regular training.
              </p>
              <div className="flex justify-center mt-4 sm:mt-6">
                <a href="#" className="inline-flex items-center text-[#4CAF50] font-medium text-sm sm:text-base">
                  Learn More <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </a>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="bg-white p-6 sm:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#1B5E20] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-[#164A18] cursor-pointer">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sm:w-8 sm:h-8"
                  >
                    <path
                      d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 22V12H16V22"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 8.5L12 5L17 8.5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4">Improve Employee</h3>
              <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                Invest in employee training and development programs to enhance skills and knowledge.
              </p>
              <div className="flex justify-center mt-4 sm:mt-6">
                <a href="#" className="inline-flex items-center text-[#4CAF50] font-medium text-sm sm:text-base">
                  Learn More <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section with Modern Design */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Transform Your Hospitality Staffing?
            </motion.h2>
            <motion.p
              className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Whether you're looking for your next career opportunity or searching for qualified talent, JobAway is here
              to help.
            </motion.p>

            <motion.div
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Button className="w-full sm:w-auto bg-[#4CAF50] text-white hover:bg-[#3d8b40] rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg">
                Find Jobs
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto text-[#1B5E20] border-[#1B5E20] hover:bg-[#E8F5E9] rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg"
              >
                For Employers
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalVariants}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
              variants={imageZoomVariants}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage || "/placeholder.svg"}
                  alt="Zoomed image"
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              <button
                className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                onClick={closeModal}
              >
                <X className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { CheckCircle, Play, ArrowRight } from "lucide-react"
// import { motion } from "framer-motion"

// // Framer Motion variants for animations
// const fadeIn = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.6 } },
// }

// const slideUp = {
//   hidden: { y: 30, opacity: 0 },
//   visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
// }

// export default function AboutPage() {
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) {
//     return null
//   }

//   return (
//     <>
//       {/* Hero Section with Overlapping Images */}
//       <section className="relative bg-white overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
//         <div className="container px-4 mx-auto md:px-6 lg:px-8">
//           <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
//             <motion.div initial="hidden" animate="visible" variants={fadeIn} className="z-10">
//               <div className="inline-block px-3 py-1 text-sm rounded-lg bg-[#E8F5E9] text-[#4CAF50]">ABOUT US</div>
//               <motion.h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl" variants={slideUp}>
//                 The Leading Hospitality <span className="text-[#4CAF50]">Platform</span>
//               </motion.h1>
//               <motion.p className="mt-6 text-lg text-gray-600" variants={slideUp}>
//                 JobAway provides access to a diverse pool of qualified candidates with specialized skills in hospitality
//                 management, connecting businesses with the talent they need to thrive.
//               </motion.p>

//               <motion.ul className="mt-6 space-y-4" variants={slideUp}>
//                 <li className="flex items-start">
//                   <CheckCircle className="w-5 h-5 mr-2 text-[#4CAF50]" />
//                   <span>Helping businesses maintain service excellence through quality staffing</span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="w-5 h-5 mr-2 text-[#4CAF50]" />
//                   <span>Providing scalability that allows businesses to adjust staffing needs</span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="w-5 h-5 mr-2 text-[#4CAF50]" />
//                   <span>Creating meaningful career opportunities for hospitality professionals</span>
//                 </li>
//               </motion.ul>

//               <motion.div
//                 className="mt-8"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6, duration: 0.5 }}
//               >
//                 <Button className="rounded-full bg-[#4CAF50] hover:bg-[#3d8b40] text-white px-6 py-6 text-lg">
//                   Learn More <ArrowRight className="ml-2 h-5 w-5" />
//                 </Button>
//               </motion.div>
//             </motion.div>

//             {/* Overlapping Images */}
//             <motion.div
//               className="relative h-[500px] md:h-[600px]"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8 }}
//             >
//               {/* Main image */}
//               <motion.div
//                 className="absolute top-0 right-0 w-[80%] h-[70%] rounded-lg overflow-hidden shadow-xl z-20"
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.3, duration: 0.6 }}
//               >
//        {/* pheli img ===============================================================================================================================================*/}
//                 <Image src="/business-meeting-dark.png" alt="Modern Office Interior" fill className="object-cover" />
//               </motion.div>

//               {/* Overlapping image 1 */}
//               <motion.div
//                 className="absolute bottom-0 left-0 w-[65%] h-[55%] rounded-lg overflow-hidden shadow-xl z-10"
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5, duration: 0.6 }}
//               >
//                 <Image src="/happy-employees.webp" alt="Team Meeting" fill className="object-cover" />
//               </motion.div>

//               {/* Decorative element */}
//               <motion.div
//                 className="absolute top-[20%] left-[5%] w-[40%] h-[40%] bg-[#E8F5E9] rounded-lg z-0"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.2, duration: 0.6 }}
//               />

//               {/* Play button overlay */}
//               <motion.div
//                 className="absolute top-[30%] right-[30%] z-30"
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.7, duration: 0.5 }}
//               >
//                 {/* <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300">
//                   <div className="flex items-center justify-center w-14 h-14 bg-[#4CAF50] rounded-full">
//                     <Play className="w-6 h-6 ml-1 text-white" />
//                   </div>
//                 </div> */}
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Our Vision Section with Interior Design Style */}
//       <section className="py-20 bg-gray-50">
//         <div className="container px-4 mx-auto md:px-6 lg:px-8">
//           <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
//             {/* Overlapping Images with Interior Design Style */}
//             <motion.div
//               className="relative h-[500px]"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               {/* Main image */}
//               <motion.div
//                 className="absolute top-[10%] right-[5%] w-[75%] h-[65%] rounded-lg overflow-hidden shadow-xl z-20"
//                 initial={{ opacity: 0, x: -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.3, duration: 0.6 }}
//               >
//                 <Image src="/business-discussion-laptop.png" alt="Luxury Hotel Lobby" fill className="object-cover" />
//               </motion.div>

//               {/* Overlapping image */}
//               <motion.div
//                 className="absolute bottom-[5%] left-[10%] w-[60%] h-[50%] rounded-lg overflow-hidden shadow-xl z-10"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.5, duration: 0.6 }}
//               >
//                 <Image src="/modern-office-plants.png" alt="Restaurant Interior" fill className="object-cover" />
//               </motion.div>

//               {/* Decorative element */}
//               <motion.div
//                 className="absolute top-[5%] left-[0%] w-[45%] h-[45%] border-2 border-[#4CAF50] rounded-lg z-0"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.2, duration: 0.6 }}
//               />
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="inline-block px-3 py-1 text-sm rounded-lg bg-[#E8F5E9] text-[#4CAF50]">OUR VISION</div>
//               <h2 className="mt-4 text-3xl font-bold">Creating Excellence in Hospitality Staffing</h2>
//               <p className="mt-6 text-lg text-gray-600">
//                 We envision a world where hospitality businesses have seamless access to qualified talent, and where
//                 hospitality professionals can build rewarding careers with opportunities for growth and development.
//               </p>

//               <div className="mt-8 space-y-6">
//                 <div className="flex">
//                   <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#1B5E20] text-white">
//                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
//                     </svg>
//                   </div>
//                   <div className="ml-4">
//                     <h3 className="text-xl font-semibold">Building Communities</h3>
//                     <p className="mt-2 text-gray-600">
//                       We're creating a community where hospitality professionals can connect, learn, and grow together.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex">
//                   <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#1B5E20] text-white">
//                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                       <path
//                         fillRule="evenodd"
//                         d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
//                         clipRule="evenodd"
//                       ></path>
//                       <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
//                     </svg>
//                   </div>
//                   <div className="ml-4">
//                     <h3 className="text-xl font-semibold">Elevating Standards</h3>
//                     <p className="mt-2 text-gray-600">
//                       We're raising the bar for hospitality staffing, ensuring excellence at every level of service.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex">
//                   <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#1B5E20] text-white">
//                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
//                     </svg>
//                   </div>
//                   <div className="ml-4">
//                     <h3 className="text-xl font-semibold">Continuous Learning</h3>
//                     <p className="mt-2 text-gray-600">
//                       We provide resources and opportunities for professional development and growth in the hospitality
//                       industry.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Our Story Section with Modern Design */}
//       <section className="py-20 bg-white">
//         <div className="container px-4 mx-auto md:px-6 lg:px-8">
//           <div className="max-w-3xl mx-auto text-center mb-16">
//             <motion.div
//               className="inline-block px-3 py-1 text-sm rounded-lg bg-[#E8F5E9] text-[#4CAF50] mb-4"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               OUR STORY
//             </motion.div>
//             <motion.h2
//               className="text-3xl font-bold"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//             >
//               From Vision to Reality
//             </motion.h2>
//             <motion.p
//               className="mt-4 text-lg text-gray-600"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3, duration: 0.6 }}
//             >
//               JobAway was founded in 2015 by a team of hospitality professionals who recognized the challenges both
//               employers and job seekers faced in the industry. What started as a small local staffing agency has grown
//               into a comprehensive platform serving clients nationwide.
//             </motion.p>
//           </div>

//           {/* Timeline with Interior Design Style */}
//           <div className="relative">
//             {/* Vertical line */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#E8F5E9]"></div>

//             <div className="relative z-10">
//               {[
//                 {
//                   year: "2015",
//                   title: "The Beginning",
//                   description: "JobAway was founded with a mission to transform hospitality staffing.",
//                   image: "/startup-team1.jpg",
//                 },
//                 {
//                   year: "2017",
//                   title: "Digital Transformation",
//                   description:
//                     "Launched our online platform, making it easier for candidates and employers to connect.",
//                   image: "/tech-office1.jpg",
//                 },
//                 {
//                   year: "2019",
//                   title: "National Expansion",
//                   description: "Expanded our services nationwide, connecting talent across the country.",
//                   image: "/team-celebration1.jpg",
//                 },
//                 {
//                   year: "2023",
//                   title: "Innovation & Growth",
//                   description: "Introduced AI-powered matching and expanded into new hospitality sectors.",
//                   image: "/modern-workspace1.webp",
//                 },
//               ].map((item, index) => (
//                 <motion.div
//                   key={item.year}
//                   className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1, duration: 0.6 }}
//                 >
//                   <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
//                     <div className="inline-block px-3 py-1 text-sm rounded-lg bg-[#E8F5E9] text-[#4CAF50] mb-2">
//                       {item.year}
//                     </div>
//                     <h3 className="text-2xl font-bold">{item.title}</h3>
//                     <p className="mt-2 text-gray-600">{item.description}</p>
//                   </div>

//                   {/* Center dot */}
//                   <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#4CAF50] border-4 border-white"></div>

//                   <div className={`w-1/2 ${index % 2 === 0 ? "pl-12" : "pr-12"}`}>
//                     <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
//                       <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section with Modern Design */}
//       <section className="py-16 bg-[#1B5E20] text-white">
//         <div className="container px-4 mx-auto md:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               { number: "5K+", label: "Jobs Filled" },
//               { number: "95%", label: "Client Satisfaction" },
//               { number: "1K+", label: "Partner Companies" },
//               { number: "8+", label: "Years Experience" },
//             ].map((stat, index) => (
//               <motion.div
//                 key={stat.label}
//                 className="text-center"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
//               >
//                 <div className="text-5xl font-bold text-[#7CFC00]">{stat.number}</div>
//                 <p className="mt-2 text-white/80">{stat.label}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section with Interior Design Style */}
//       <section className="py-20 bg-gray-50">
//         <div className="container px-4 mx-auto md:px-6 lg:px-8">
//           <div className="max-w-3xl mx-auto text-center mb-16">
//             <motion.div
//               className="inline-block px-3 py-1 text-sm rounded-lg bg-[#E8F5E9] text-[#4CAF50] mb-4"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               OUR TEAM
//             </motion.div>
//             <motion.h2
//               className="text-3xl font-bold"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//             >
//               Meet the Experts Behind JobAway
//             </motion.h2>
//             <motion.p
//               className="mt-4 text-lg text-gray-600"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3, duration: 0.6 }}
//             >
//               Our team of dedicated professionals brings decades of combined experience in hospitality and staffing
//             </motion.p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 name: "David Chen",
//                 role: "Founder & CEO",
//                 image: "/David-Chen.jpg",
//                 bio: "15+ years in hospitality management",
//               },
//               {
//                 name: "Sarah Williams",
//                 role: "Chief Operations Officer",
//                 image: "/professional-blonde-woman.png",
//                 bio: "Former hotel executive with global experience",
//               },
//               {
//                 name: "Michael Johnson",
//                 role: "Head of Recruitment",
//                 image: "/Michael Johnson.jpg",
//                 bio: "Specialized in talent acquisition for 10+ years",
//               },
//               {
//                 name: "Jessica Rodriguez",
//                 role: "Client Relations Manager",
//                 image: "/women.jpg",
//                 bio: "Expert in hospitality client management",
//               },
//             ].map((member, index) => (
//               <motion.div
//                 key={member.name}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
//                 className="group"
//               >
//                 <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-4">
//                   <Image
//                     src={member.image || "/placeholder.svg"}
//                     alt={member.name}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
//                     <div className="p-6">
//                       <p className="text-white text-sm">{member.bio}</p>
//                       <div className="flex mt-4 space-x-3">
//                         <a href="#" className="text-white hover:text-[#7CFC00]">
//                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                             <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
//                           </svg>
//                         </a>
//                         <a href="#" className="text-white hover:text-[#7CFC00]">
//                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                             <path
//                               fillRule="evenodd"
//                               d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                         </a>
//                         <a href="#" className="text-white hover:text-[#7CFC00]">
//                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                             <path
//                               fillRule="evenodd"
//                               d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1.41 7.08c.84-.83 2.17-.83 3.01 0 .83.83.83 2.17 0 3.01-.84.83-2.17.83-3.01 0-.83-.84-.83-2.17 0-3.01z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <h3 className="text-xl font-semibold">{member.name}</h3>
//                 <p className="text-[#4CAF50]">{member.role}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials with Interior Design Style */}
//       {/* <section className="py-20 bg-white">
//         <div className="container px-4 mx-auto md:px-6 lg:px-8">
//           <div className="max-w-3xl mx-auto text-center mb-16">
//             <motion.div
//               className="inline-block px-3 py-1 text-sm rounded-lg bg-[#E8F5E9] text-[#4CAF50] mb-4"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               TESTIMONIALS
//             </motion.div>
//             <motion.h2
//               className="text-3xl font-bold"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//             >
//               What Our Clients Say
//             </motion.h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 quote:
//                   "JobAway transformed our staffing process. We've found exceptional talent that aligns perfectly with our company culture.",
//                 name: "Robert Thompson",
//                 position: "General Manager, Luxury Hotel Group",
//                 image: "/executive-man.png",
//               },
//               {
//                 quote:
//                   "The quality of candidates we've hired through JobAway has significantly improved our customer service ratings.",
//                 name: "Amanda Chen",
//                 position: "Restaurant Owner",
//                 image: "/restaurant-owner.png",
//               },
//               {
//                 quote:
//                   "As a job seeker, JobAway connected me with opportunities that perfectly matched my skills and career goals.",
//                 name: "James Wilson",
//                 position: "Executive Chef",
//                 image: "/chef-portrait.png",
//               },
//             ].map((testimonial, index) => (
//               <motion.div
//                 key={testimonial.name}
//                 className="bg-gray-50 p-8 rounded-lg relative"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
//               >


               
//                 <div className="absolute top-6 right-8 text-[#E8F5E9] text-6xl font-serif">"</div>

//                 <p className="text-gray-700 relative z-10 mb-6">{testimonial.quote}</p>

//                 <div className="flex items-center">
//                   <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
//                     <Image
//                       src={testimonial.image || "/placeholder.svg"}
//                       alt={testimonial.name}
//                       width={48}
//                       height={48}
//                       className="object-cover w-full h-full"
//                     />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold">{testimonial.name}</h4>
//                     <p className="text-sm text-gray-600">{testimonial.position}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* Why Choose Us Section */}
//       <section className="py-16 bg-[#1B5E20] relative">
//         <div className="container px-4 mx-auto md:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <div className="inline-block px-4 py-1 text-sm rounded-full bg-[#4CAF50] text-white mb-4">WHY US</div>
//             <h2 className="text-4xl font-bold text-white">Why Choose Us</h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {/* Card 1 */}
//             <motion.div
//               className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="flex justify-center mb-6">
//                 <div className="w-16 h-16 rounded-full bg-[#1B5E20] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-[#164A18] cursor-pointer">
//                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path
//                       d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
//                       fill="white"
//                     />
//                     <path
//                       d="M17.5 21C18.8807 21 20 19.8807 20 18.5C20 17.1193 18.8807 16 17.5 16C16.1193 16 15 17.1193 15 18.5C15 19.8807 16.1193 21 17.5 21Z"
//                       fill="white"
//                     />
//                     <path
//                       d="M6.5 21C7.88071 21 9 19.8807 9 18.5C9 17.1193 7.88071 16 6.5 16C5.11929 16 4 17.1193 4 18.5C4 19.8807 5.11929 21 6.5 21Z"
//                       fill="white"
//                     />
//                     <path
//                       d="M17.5 16C16.7044 16 15.9413 16.2842 15.3 16.7604C14.8392 15.4425 13.5004 14.5 12 14.5C10.4996 14.5 9.16079 15.4425 8.7 16.7604C8.05871 16.2842 7.29565 16 6.5 16"
//                       stroke="white"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//               </div>
//               <h3 className="text-xl font-bold text-center mb-4">Retain Top Talent</h3>
//               <p className="text-gray-600 text-center">
//                 Providing clear career paths and growth opportunities is key to retaining top talent.
//               </p>
//               <div className="flex justify-center mt-6">
//                 <a href="#" className="inline-flex items-center text-[#4CAF50] font-medium">
//                   Learn More <ArrowRight className="ml-2 h-4 w-4" />
//                 </a>
//               </div>
//             </motion.div>

//             {/* Card 2 */}
//             <motion.div
//               className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//             >
//               <div className="flex justify-center mb-6">
//                 <div className="w-16 h-16 rounded-full bg-[#1B5E20] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-[#164A18] cursor-pointer">
//                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path
//                       d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
//                       stroke="white"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M9 12L11 14L15 10"
//                       stroke="white"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//               </div>
//               <h3 className="text-xl font-bold text-center mb-4">Stay Compliant</h3>
//               <p className="text-gray-600 text-center">
//                 Educate employees about compliance requirements through regular training.
//               </p>
//               <div className="flex justify-center mt-6">
//                 <a href="#" className="inline-flex items-center text-[#4CAF50] font-medium">
//                   Learn More <ArrowRight className="ml-2 h-4 w-4" />
//                 </a>
//               </div>
//             </motion.div>

//             {/* Card 3 */}
//             <motion.div
//               className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.4, duration: 0.5 }}
//             >
//               <div className="flex justify-center mb-6">
//                 <div className="w-16 h-16 rounded-full bg-[#1B5E20] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-[#164A18] cursor-pointer">
//                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path
//                       d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
//                       stroke="white"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M8 22V12H16V22"
//                       stroke="white"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M7 8.5L12 5L17 8.5"
//                       stroke="white"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//               </div>
//               <h3 className="text-xl font-bold text-center mb-4">Improve Employee</h3>
//               <p className="text-gray-600 text-center">
//                 Invest in employee training and development programs to enhance skills and knowledge.
//               </p>
//               <div className="flex justify-center mt-6">
//                 <a href="#" className="inline-flex items-center text-[#4CAF50] font-medium">
//                   Learn More <ArrowRight className="ml-2 h-4 w-4" />
//                 </a>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section with Modern Design */}
//       <section className="py-20 bg-white">
//         <div className="container px-4 mx-auto md:px-6 lg:px-8">
//           <div className="max-w-4xl mx-auto text-center">
//             <motion.h2
//               className="text-3xl md:text-4xl font-bold"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               Ready to Transform Your Hospitality Staffing?
//             </motion.h2>
//             <motion.p
//               className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//             >
//               Whether you're looking for your next career opportunity or searching for qualified talent, JobAway is here
//               to help.
//             </motion.p>

//             <motion.div
//               className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.4, duration: 0.6 }}
//             >
//               <Button className="bg-[#4CAF50] text-white hover:bg-[#3d8b40] rounded-full px-8 py-6 text-lg">
//                 Find Jobs
//               </Button>
//               <Button
//                 variant="outline"
//                 className="text-[#1B5E20] border-[#1B5E20] hover:bg-[#E8F5E9] rounded-full px-8 py-6 text-lg"
//               >
//                 For Employers
//               </Button>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }
