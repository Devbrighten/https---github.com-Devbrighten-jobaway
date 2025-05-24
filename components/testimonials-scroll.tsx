"use client"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  quote: string
  name: string
  title: string
  image: string
}

export default function TestimonialsScroll() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Company was impressed by the personal approach of their recruitment team for the improvement. They kept informed at every stage of the task.",
      name: "Franklin Bailey",
      title: "CEO, JobAway",
      image: "/testimonial-1.jpg",
    },
    {
      quote:
        "The JobAway team understood our staffing needs perfectly and provided us with exceptional candidates who have become valuable members of our team.",
      name: "Sarah Johnson",
      title: "HR Director, Grand Hotels",
      image: "/testimonial-2.jpg",
    },
    {
      quote:
        "Their industry expertise and personalized approach to recruitment has made them our go-to staffing partner for all our hiring needs.",
      name: "Michael Chen",
      title: "Operations Manager, Fine Dining Co",
      image: "/testimonial-3.jpg",
    },
    {
      quote:
        "JobAway's ability to find qualified staff during our peak seasons has been invaluable. Their temporary staffing solutions are reliable and efficient.",
      name: "Emma Rodriguez",
      title: "Restaurant Owner, Taste of Italy",
      image: "/testimonial-4.jpg",
    },
    {
      quote:
        "We've reduced our hiring time by 40% since partnering with JobAway. Their executive search team found us the perfect leadership candidates.",
      name: "David Thompson",
      title: "CEO, Luxury Resorts International",
      image: "/testimonial-5.jpg",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)

  const nextTestimonial = () => {
    if (isAnimating || currentIndex === testimonials.length - 1) return
    setIsAnimating(true)
    setCurrentIndex((prev) => prev + 1)
  }

  const prevTestimonial = () => {
    if (isAnimating || currentIndex === 0) return
    setIsAnimating(true)
    setCurrentIndex((prev) => prev - 1)
  }

  useEffect(() => {
    const animateSlide = async () => {
      await controls.start({
        x: `-${currentIndex * 100}%`,
        transition: { type: "spring", stiffness: 300, damping: 30 },
      })
      setIsAnimating(false)
    }
    animateSlide()
  }, [currentIndex, controls])

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < testimonials.length - 1) {
        nextTestimonial()
      } else {
        setCurrentIndex(0)
      }
    }, 6000)

    return () => clearInterval(interval)
  }, [currentIndex, testimonials.length])

  return (
    <section className="py-16 bg-[#f5f5f0] overflow-hidden">
      <div className="container px-4 mx-auto md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
          <div className="w-24 h-1 mx-auto my-4 bg-green-500 rounded"></div>
        </div>

        <div className="relative max-w-4xl mx-auto" ref={containerRef}>
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={controls}
              initial={{ x: 0 }}
              style={{ width: `${testimonials.length * 100}%` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0" style={{ width: `${100 / testimonials.length}%` }}>
                  <div className="flex flex-col md:flex-row items-center gap-8 px-4">
                    <div className="w-full md:w-1/3 flex justify-center">
                      <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-2/3">
                      <div className="text-5xl text-green-500 mb-4">"</div>
                      <p className="text-xl text-gray-800 italic mb-6">{testimonial.quote}</p>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className={`absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center z-10 transition-opacity ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100 hover:bg-gray-50"
            }`}
            disabled={currentIndex === 0 || isAnimating}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className={`absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center z-10 transition-opacity ${
              currentIndex === testimonials.length - 1
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100 hover:bg-gray-50"
            }`}
            disabled={currentIndex === testimonials.length - 1 || isAnimating}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-green-500 w-6" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
