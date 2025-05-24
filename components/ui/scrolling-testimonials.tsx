"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"

interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  image: string
}

export default function ScrollingTestimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Maharan Deepak",
      role: "CEO",
      company: "Amaban",
      quote:
        "Recently I went through their recruitment process with Jobaway Company, and I was impressed by how the smooth and efficient these were.",
      image: "/maharan-deepak.png",
    },
    {
      name: "Evan Clement",
      role: "HR Assistant",
      company: "NFL",
      quote:
        "Company and was impressed by the personalized approach of their recruitment team. They kept me informed at every stage and ensured that I had all the information I needed to succeed.",
      image: "/evan-clement.png",
    },
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      company: "Luxury Hotels",
      quote:
        "The personalized approach of their recruitment team was exceptional. They kept me informed at every stage and ensured I had all the information I needed to succeed.",
      image: "/sarah-johnson.png",
    },
    {
      name: "Michael Chen",
      role: "Restaurant Owner",
      company: "Fine Dining Co",
      quote:
        "As a business owner, finding qualified staff has always been challenging. JobAway made it simple to connect with talented professionals who fit our culture.",
      image: "/michael-chen.png",
    },
    {
      name: "Emily Rodriguez",
      role: "Event Coordinator",
      company: "Grand Events",
      quote:
        "The personalized approach at JobAway made all the difference. They understood my skills and matched me with the perfect position that aligned with my career goals.",
      image: "/emily-rodriguez.png",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })
  const controls = useAnimation()

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <section className="py-16 bg-gray-50" ref={containerRef}>
      <div className="container px-4 mx-auto md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <div className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-green-100 text-green-800">
            TESTIMONIALS
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Love From Users</h2>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Left quote mark */}
          <div className="absolute left-0 top-1/4 text-9xl text-gray-200 opacity-50 font-serif z-0">"</div>

          {/* Right quote mark */}
          <div className="absolute right-0 bottom-1/4 text-9xl text-gray-200 opacity-50 font-serif z-0">"</div>

          {/* Testimonials slider */}
          <motion.div
            className="flex transition-all duration-500 ease-in-out"
            animate={{ x: `-${activeIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
                  <div className="w-full md:w-1/3">
                    <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={
                          testimonial.image ||
                          `/placeholder.svg?height=160&width=160&query=${encodeURIComponent(testimonial.name)}`
                        }
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-center mt-4">
                      <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-green-700">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <p className="text-lg text-gray-700 italic relative z-10">"{testimonial.quote}"</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-green-700 w-6" : "bg-gray-300"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
