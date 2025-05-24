"use client"
import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Professional {
  name: string
  role: string
  image: string
  color: string
  rating?: number
  specialty?: string
}

export default function ProfessionalsScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const professionals: Professional[] = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      image: "/Industries-Hiring.jpg",
      color: "bg-pink-100",
      rating: 4.9,
      specialty: "Brand Strategy",
    },
    {
      name: "Emily Rodriguez",
      role: "HR Specialist",
      image: "/men.jpg",
      color: "bg-blue-100",
      rating: 4.8,
      specialty: "Talent Acquisition",
    },
    {
      name: "Jessica Chen",
      role: "Financial Analyst",
      image: "/latina-professional-woman.png",
      color: "bg-purple-100",
      rating: 4.7,
      specialty: "Investment Strategy",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 bg-[#f8f8f2] overflow-hidden" ref={containerRef}>
      <div className="container px-4 mx-auto md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-green-100 text-green-800 font-medium">
            OUR TALENT NETWORK
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Talented Professionals</h2>
          <div className="w-24 h-1 mx-auto bg-green-500 rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our network includes highly skilled professionals across various industries ready to bring their expertise
            to your organization
          </p>
        </motion.div>

        {/* Centered grid for the 3 professionals */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mx-auto max-w-6xl"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {professionals.map((professional, index) => (
            <motion.div
              key={professional.name}
              className="w-full max-w-[320px] group"
              variants={itemVariants}
              whileHover={{ y: -15, transition: { duration: 0.3 } }}
            >
              <div
                className={`relative h-[450px] w-full rounded-2xl overflow-hidden ${professional.color} p-5 transition-all duration-500 group-hover:shadow-2xl`}
              >
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full border-2 border-white/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-20 left-4 w-12 h-12 rounded-full border border-white/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>

                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

                {/* Main image with enhanced quality */}
                <div className="relative h-full w-full rounded-xl overflow-hidden">
                  <Image
                    src={professional.image || "/placeholder.svg"}
                    alt={professional.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={95}
                    className="object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:filter group-hover:brightness-110"
                    style={{
                      transformOrigin: "center",
                    }}
                    priority={index < 2}
                  />

                  {/* Overlay effects on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <div className="absolute inset-0 bg-[#1e3a29]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {/* Rating */}
                  <div className="flex items-center mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(professional.rating || 0) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm">{professional.rating}</span>
                  </div>

                  {/* Name and role */}
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-green-300 transition-colors duration-300">
                    {professional.name}
                  </h3>
                  <p className="text-white/90 mb-2">{professional.role}</p>

                  {/* Specialty badge */}
                  <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {professional.specialty}
                  </div>

                  {/* Button with enhanced hover effect */}
                  <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <Button className="rounded-full bg-green-500 hover:bg-green-600 text-white w-full shadow-lg shadow-green-500/20 group">
                      View Profile
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            ...itemVariants,
            visible: {
              ...itemVariants.visible,
              transition: { delay: 0.6, duration: 0.6 },
            },
          }}
        >
          <Button className="rounded-full bg-[#1e3a29] hover:bg-[#162a1e] text-white px-8 py-6 text-lg shadow-xl shadow-green-900/10 group">
            View All Professionals
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
