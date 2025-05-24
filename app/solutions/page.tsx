"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, CheckCircle, ArrowRight } from "lucide-react"
import SolutionsGrid from "@/components/solutions-grid"
import SplitHeroSection from "@/components/split-hero-section"
import ProfessionalsScroll from "@/components/professionals-scroll"
import TestimonialsScroll from "@/components/testimonials-scroll"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function WorkforceSystemPage() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <Link href="/solutions" className="text-gray-600 hover:text-gray-900">
              Our Solutions
            </Link>
           
          </div>
        </div>
      </div>

     

      
      
      {/* Solutions Grid Section */}
      <SolutionsGrid
        title="Inspiring Staffing Solutions"
        description="Explore our comprehensive range of staffing and workforce management solutions"
      />
 {/* Split Hero Section */}
      <SplitHeroSection />

      {/* Professionals Scroll Section */}
      <ProfessionalsScroll />
      {/* Testimonials Scroll Section */}
      {/* <TestimonialsScroll /> */}


     
      {/* CTA Section */}
      {/* <section className="py-16 bg-green-700 text-white">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Workforce?</h2>
            <p className="text-lg text-white/80 mb-8">
              Contact our team today to schedule a personalized demo and see how our workforce system can transform your
              business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="rounded-full bg-white text-green-700 hover:bg-gray-100 px-8 py-6 text-lg">
                Request a Demo
              </Button>
              <Button
                variant="outline"
                className="rounded-full text-green-700 border-white  hover:bg-white/10 px-8 py-6 text-lg"
              >
                Talk to an Expert
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}
