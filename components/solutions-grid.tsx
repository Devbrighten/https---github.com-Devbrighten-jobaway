"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight, Search } from "lucide-react"

interface Solution {
  title: string
  description: string
  image: string
  link: string
  category?: string
}

interface SolutionsGridProps {
  title?: string
  description?: string
  solutions?: Solution[]
}

export default function SolutionsGrid({
  title = "Inspiring Staffing Solutions",
  description,
  solutions,
}: SolutionsGridProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  // Default solutions if none provided
  const defaultSolutions: Solution[] = [
    {
      title: "Training Session",
      description:
        "These experts guide new employees through interactive workshops designed to enhance skills and ensure a smooth onboarding process.",
      image: "/Training Session.jpg",
      link: "/solutions/training",
      category: "Training",
    },
    {
      title: "Executive Search",
      description:
        "Our executive search services are customized to meet your specific leadership needs, identifying high-caliber executives who can drive your organization forward.",
      image: "/Executive-Search.jpeg",
      link: "/solutions/executive-search",
      category: "Recruitment",
    },
    {
      title: "Temporary Jobs",
      description:
        "Apply for our temporary jobs and become part of our talent pool. Find flexible positions that match your skills and schedule in the hospitality industry.",
      image: "/Temporary-Jobs.webp",
      link: "/solutions/temporary-jobs",
      category: "Employment",
    },
    {
      title: "Payroll Services",
      description:
        "Utilizing a reliable payroll service can significantly improve operational efficiency, ensure compliance, and free up valuable time for your core business activities.",
      image: "/Payroll-Services1.png",
      link: "/solutions/payroll",
      category: "Management",
    },
    {
      title: "Workforce System",
      description:
        "This system leverages advanced technologies such as Applicant Tracking, Scheduling, and Performance Management to optimize your workforce operations.",
      image: "/Workforce-System.jpg",
      link: "/solutions/workforce",
      category: "Technology",
    },
    {
      title: "Career Growth",
      description:
        "Career growth is about fostering a culture where individuals can achieve their professional goals through continuous learning and development opportunities.",
      image: "/Career-Growth.jpg",
      link: "/solutions/career-growth",
      category: "Development",
    },
  ]

  const displaySolutions = solutions || defaultSolutions

  // Get unique categories for filtering
  const categories = ["All", ...new Set(displaySolutions.map((solution) => solution.category || "Other"))]

  // Filter solutions based on active filter
  const filteredSolutions =
    activeFilter && activeFilter !== "All"
      ? displaySolutions.filter((solution) => solution.category === activeFilter)
      : displaySolutions

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto md:px-6 lg:px-8">
        {(title || description) && (
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title && (
              <div className="relative inline-block">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-500 rounded"></div>
              </div>
            )}
            {description && <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg">{description}</p>}
          </motion.div>
        )}

        {/* Category filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category || (category === "All" && !activeFilter)
                  ? "bg-green-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSolutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={solution.image || "/placeholder.svg?height=300&width=500&query=business meeting"}
                  alt={solution.title}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70"></div>

                {/* Category badge */}
                {solution.category && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                    {solution.category}
                  </div>
                )}
              </div>

              <div className="p-6 relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {solution.title}
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-3 text-sm md:text-base">{solution.description}</p>

                <div className="flex justify-between items-center">
                  <Link href={solution.link}>
                    <Button
                      variant="outline"
                      className={`rounded-full px-6 border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition-all duration-300 group-hover:pl-8`}
                    >
                      View Details
                      <ChevronRight
                        className={`ml-1 h-4 w-4 transition-all duration-300 ${
                          hoveredIndex === index ? "translate-x-1" : ""
                        }`}
                      />
                    </Button>
                  </Link>

                  {/* <Link
                    href={solution.link}
                    className="p-2 rounded-full bg-gray-100 hover:bg-green-100 transition-colors duration-300"
                  >
                    <Search className="h-4 w-4 text-gray-500 hover:text-green-600" />
                  </Link> */}
                </div>
              </div>

              {/* Animated corner accent */}
              <div
                className={`absolute top-0 right-0 w-16 h-16 bg-green-500/10 transition-all duration-500 ${
                  hoveredIndex === index ? "scale-100" : "scale-0"
                } origin-top-right`}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* View all solutions button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/solutions">
            <Button className="rounded-full bg-[#1e3a29] hover:bg-[#162a1e] text-white px-8 py-6 text-lg group">
              Explore All Solutions
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
