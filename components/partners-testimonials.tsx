"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  position: string
  company?: string
  testimonial: string
  image: string
}

export default function PartnersTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const testimonialsRef = useRef<HTMLDivElement>(null)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Franklin Bailey",
      position: "Sale Manager",
      testimonial:
        "Recently I went through their recruitment process with Jobaway Company, and I was impressed by how smooth and efficient these were.",
      image: "/professional-curly-hair-man.png",
    },
    {
      id: 2,
      name: "Evan Clement",
      position: "Manager, Cypertech",
      testimonial:
        "I had a fantastic experience throughout the recruitment process with Jobaway team. The communication was clear, interview process was well-organized",
      image: "/professional-blonde-man.png",
    },
    {
      id: 3,
      name: "Ashitaka Dai",
      position: "Art Director",
      testimonial:
        "Company and was impressed by the main personalized approach of their recruitment team. They kept me informed at every stage and ensured that I had all",
      image: "/asian-man-beard.png",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      position: "HR Director, Luxury Hotels",
      testimonial:
        "JobAway has transformed our hiring process. We've reduced time-to-hire by 40% and found exceptional talent for our hospitality positions.",
      image: "/professional-blonde-woman.png",
    },
    {
      id: 5,
      name: "Michael Chen",
      position: "Operations Manager",
      testimonial:
        "As someone who's worked with multiple staffing agencies, I can confidently say JobAway offers the most personalized service in the industry.",
      image: "/asian-businessman-smiling.png",
    },
  ]

  const visibleTestimonials = 3
  const maxIndex = testimonials.length - visibleTestimonials

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= maxIndex) {
          return 0
        }
        return prevIndex + 1
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [maxIndex, isHovered])

  const scroll = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1))
    } else {
      setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1))
    }
  }

  return (
    <section className="py-16 bg-[#1B5E20] text-white relative overflow-hidden">
      <div className="container px-4 mx-auto md:px-6 lg:px-8">
        <div className="flex justify-center mb-4">
          <div className="inline-block px-4 py-1 text-sm rounded-full bg-[#4CAF50] text-white">TESTIMONIALS</div>
        </div>
        <h2 className="text-4xl font-bold text-center mb-12">Words From Our Partners</h2>

        <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          {/* Navigation buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm"
            aria-label="Previous testimonial"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm"
            aria-label="Next testimonial"
            disabled={currentIndex === maxIndex}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Testimonials container */}
          <div className="overflow-hidden px-10">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * 33.33}%` }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-[calc(33.33%-16px)] flex-shrink-0">
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Testimonial card */}
                    <div className="bg-white rounded-lg p-6 shadow-lg relative">
                      {/* Profile and content */}
                      <div className="flex items-start mb-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900">{testimonial.name}</h3>
                          <p className="text-gray-500">{testimonial.position}</p>
                        </div>
                      </div>

                      <p className="text-gray-700 relative z-10">{testimonial.testimonial}</p>

                      {/* Quote mark */}
                      <div className="absolute top-6 right-6">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M0 30V60H30V30H10C10 13.4315 23.4315 0 40 0H45V10H40C28.9543 10 20 18.9543 20 30H0Z"
                            fill="#E8F5E9"
                            fillOpacity="0.3"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Speech bubble pointer */}
                    <div
                      className="absolute w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-white border-r-[20px] border-r-transparent"
                      style={{ top: "100%", left: "40px", marginTop: "-1px" }}
                    ></div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-12">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${index === currentIndex ? "bg-white" : "bg-white/30"}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


