"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Briefcase, DollarSign, Clock } from "lucide-react"
import { motion } from "framer-motion"

export default function FindWorkPage() {
  const [mounted, setMounted] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [location, setLocation] = useState("")
  const [jobType, setJobType] = useState("")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const jobs = [
    {
      id: 1,
      title: "Restaurant Manager",
      company: "Gourmet Dining",
      location: "New York, NY",
      type: "Full-time",
      salary: "$50K - $65K",
      posted: "2 days ago",
      logo: "🍽️",
      description:
        "Experienced restaurant manager needed to oversee daily operations, staff management, and customer service excellence.",
    },
    {
      id: 2,
      title: "Head Chef",
      company: "Luxury Resort",
      location: "Miami, FL",
      type: "Full-time",
      salary: "$60K - $80K",
      posted: "1 week ago",
      logo: "👨‍🍳",
      description:
        "Creative head chef needed to design menus, manage kitchen staff, and maintain high culinary standards.",
    },
    {
      id: 3,
      title: "Hotel Receptionist",
      company: "Grand Hotel",
      location: "Las Vegas, NV",
      type: "Part-time",
      salary: "$35K - $45K",
      posted: "3 days ago",
      logo: "🏨",
      description:
        "Friendly receptionist needed to welcome guests, manage check-ins/check-outs, and provide excellent customer service.",
    },
    {
      id: 4,
      title: "Event Coordinator",
      company: "Elite Events",
      location: "Los Angeles, CA",
      type: "Full-time",
      salary: "$45K - $60K",
      posted: "Just now",
      logo: "🎉",
      description:
        "Detail-oriented event coordinator to plan and execute corporate and social events from concept to completion.",
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#1B5E20] text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-4">Find Your Perfect Job</h1>
            <p className="text-xl mb-8">
              Browse through thousands of job opportunities and take the next step in your career
            </p>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Job title or keyword"
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Location"
                    className="pl-10"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <Select value={jobType} onValueChange={setJobType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="temporary">Temporary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full mt-4 bg-[#4CAF50] hover:bg-[#3d8b40]">Search Jobs</Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Job Opportunities</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 text-2xl bg-gray-100 rounded-full">
                    {job.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">{job.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Briefcase className="w-4 h-4 mr-1" />
                    {job.type}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign className="w-4 h-4 mr-1" />
                    {job.salary}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {job.posted}
                  </div>
                </div>

                <div className="mt-6 flex justify-between">
                  <Button variant="outline" size="sm">
                    Save Job
                  </Button>
                  <Button className="bg-[#4CAF50] hover:bg-[#3d8b40]" size="sm">
                    Apply Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-[#4CAF50] hover:bg-[#3d8b40] px-8">View All Jobs</Button>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How to Find Work with JobAway</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Create Your Profile",
                description: "Sign up and complete your profile with your skills, experience, and preferences.",
                icon: "👤",
                step: "01",
              },
              {
                title: "Search for Jobs",
                description: "Browse through our extensive job listings or set up job alerts for new opportunities.",
                icon: "🔍",
                step: "02",
              },
              {
                title: "Apply & Get Hired",
                description: "Apply for positions that match your skills and connect with employers directly.",
                icon: "✅",
                step: "03",
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="relative inline-flex items-center justify-center w-20 h-20 mx-auto mb-6 text-3xl bg-[#E8F5E9] rounded-full text-[#4CAF50]">
                  {step.icon}
                  <span className="absolute px-2 py-1 text-xs font-bold text-white rounded-full -top-2 -right-2 bg-[#4CAF50]">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#1B5E20] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Job Search?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Create your profile today and get matched with the perfect job opportunities.
          </p>
          <Button className="bg-white text-[#1B5E20] hover:bg-gray-100 px-8 py-6 text-lg font-bold">
            Create Your Profile
          </Button>
        </div>
      </div>
    </div>
  )
}
