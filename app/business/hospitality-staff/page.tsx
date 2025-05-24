"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Building, Star, Clock, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function HospitalityStaffPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#1B5E20] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl font-bold mb-4">Hospitality Staff Solutions</h1>
              <p className="text-xl mb-6">
                Find qualified hospitality professionals to elevate your business. From servers and bartenders to
                managers and chefs, we connect you with the talent you need.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-2 text-[#7CFC00]" />
                  <p>Access to a diverse pool of pre-screened hospitality professionals</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-2 text-[#7CFC00]" />
                  <p>Flexible staffing solutions for seasonal demands and special events</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-2 text-[#7CFC00]" />
                  <p>Reduce hiring costs and time with our streamlined process</p>
                </div>
              </div>
              <Button className="mt-8 bg-white text-[#1B5E20] hover:bg-gray-100 px-8 py-6 text-lg font-bold">
                Request Staff Now
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block"
            >
              <Image
                src="/restaurant-staff-team.png"
                alt="Hospitality Staff"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Hospitality Staffing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive staffing solutions for all your hospitality needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Restaurant Staff",
                description: "Servers, bartenders, hosts, bussers, and kitchen staff for restaurants of all sizes.",
                icon: <Users className="w-10 h-10 text-[#4CAF50]" />,
              },
              {
                title: "Hotel Personnel",
                description: "Front desk agents, concierge, housekeeping, and management staff for hotels and resorts.",
                icon: <Building className="w-10 h-10 text-[#4CAF50]" />,
              },
              {
                title: "Event Staff",
                description: "Temporary staff for conferences, weddings, corporate events, and special occasions.",
                icon: <Star className="w-10 h-10 text-[#4CAF50]" />,
              },
              {
                title: "Culinary Professionals",
                description: "Executive chefs, sous chefs, line cooks, and pastry chefs for your culinary needs.",
                icon: <Users className="w-10 h-10 text-[#4CAF50]" />,
              },
              {
                title: "Management Positions",
                description: "General managers, assistant managers, and department heads for hospitality businesses.",
                icon: <Building className="w-10 h-10 text-[#4CAF50]" />,
              },
              {
                title: "Temporary Staffing",
                description: "Short-term staff for seasonal demands, special projects, or to cover employee absences.",
                icon: <Clock className="w-10 h-10 text-[#4CAF50]" />,
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href="#" className="text-[#4CAF50] font-medium flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Our Staffing Process Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, efficient process to connect you with qualified hospitality professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Submit Request",
                description: "Tell us about your staffing needs, including positions, skills, and timeframe.",
                step: "01",
              },
              {
                title: "Review Candidates",
                description: "We'll match you with pre-screened candidates that fit your requirements.",
                step: "02",
              },
              {
                title: "Interview & Select",
                description: "Interview your top choices and select the perfect staff for your business.",
                step: "03",
              },
              {
                title: "Onboard & Manage",
                description: "We handle paperwork and provide ongoing support for your new team members.",
                step: "04",
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="relative inline-flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-[#E8F5E9] rounded-full">
                  <span className="text-[#4CAF50] text-2xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from businesses that have transformed their hospitality staffing with JobAway
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "JobAway has been instrumental in helping us staff our restaurant during peak seasons. The quality of candidates is exceptional.",
                name: "Michael Chen",
                position: "Restaurant Owner",
                company: "Gourmet Dining",
              },
              {
                quote:
                  "We've reduced our hiring time by 60% since partnering with JobAway. Their hospitality staff are professional and well-trained.",
                name: "Sarah Johnson",
                position: "HR Director",
                company: "Grand Hotel Chain",
              },
              {
                quote:
                  "For our corporate events, we exclusively use JobAway's staffing services. They understand our needs and always deliver.",
                name: "David Miller",
                position: "Events Manager",
                company: "Elite Events",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-gray-50 p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4 text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#1B5E20] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Hospitality Staffing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect with our team today to discuss your specific staffing needs and discover how JobAway can help your
            business thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#1B5E20] hover:bg-gray-100 px-8 py-6 text-lg font-bold">
              Request Staff
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-bold">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
