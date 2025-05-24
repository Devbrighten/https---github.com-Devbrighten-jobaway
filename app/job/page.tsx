"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, MapPin, Briefcase, DollarSign, Clock, Filter, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export default function JobPage() {
  const [mounted, setMounted] = useState(false)
  const [salaryRange, setSalaryRange] = useState([30000])
  const [showFilters, setShowFilters] = useState(false)

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
    {
      id: 5,
      title: "Bartender",
      company: "Upscale Lounge",
      location: "Austin, TX",
      type: "Part-time",
      salary: "$30K - $45K",
      posted: "5 days ago",
      logo: "🍸",
      description:
        "Experienced bartender with knowledge of classic and creative cocktails to provide excellent service in a high-end lounge.",
    },
    {
      id: 6,
      title: "Housekeeping Supervisor",
      company: "Boutique Hotel",
      location: "Chicago, IL",
      type: "Full-time",
      salary: "$40K - $50K",
      posted: "1 day ago",
      logo: "🧹",
      description:
        "Supervisor needed to oversee housekeeping staff, maintain cleanliness standards, and manage inventory.",
    },
    {
      id: 7,
      title: "Sous Chef",
      company: "Fine Dining Restaurant",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$55K - $70K",
      posted: "2 weeks ago",
      logo: "🍲",
      description:
        "Talented sous chef to assist the head chef, manage kitchen operations, and maintain food quality standards.",
    },
    {
      id: 8,
      title: "Concierge",
      company: "Luxury Hotel Chain",
      location: "Boston, MA",
      type: "Full-time",
      salary: "$40K - $55K",
      posted: "3 days ago",
      logo: "🔑",
      description: "Knowledgeable concierge to assist guests with recommendations, reservations, and special requests.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1B5E20] text-white">
        <div className="container px-4 py-16 mx-auto md:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Find Your Perfect Job</h1>
            <p className="mt-4 text-lg text-white/80">
              Browse through our extensive collection of hospitality jobs and take the next step in your career
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl p-4 mx-auto mt-8 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input type="text" placeholder="Job title or keyword" className="pl-10" />
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input type="text" placeholder="Location" className="pl-10" />
                </div>
              </div>
              <Button className="bg-[#4CAF50] hover:bg-[#3d8b40] text-white">Search Jobs</Button>
            </div>

            <Button
              variant="ghost"
              className="flex items-center mt-4 text-[#4CAF50]"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-4 h-4 mr-2" />
              Advanced Filters
              <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </Button>

            {showFilters && (
              <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Job Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="temporary">Temporary</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Experience Level</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Entry Level</SelectItem>
                      <SelectItem value="mid">Mid Level</SelectItem>
                      <SelectItem value="senior">Senior Level</SelectItem>
                      <SelectItem value="executive">Executive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Salary Range (${salaryRange[0] / 1000}K)
                  </label>
                  <Slider defaultValue={[30000]} max={150000} step={5000} onValueChange={setSalaryRange} />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Date Posted</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="24h">Last 24 hours</SelectItem>
                      <SelectItem value="3d">Last 3 days</SelectItem>
                      <SelectItem value="7d">Last 7 days</SelectItem>
                      <SelectItem value="14d">Last 14 days</SelectItem>
                      <SelectItem value="30d">Last 30 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold">Filter Jobs</h3>

                <div className="mt-6">
                  <h4 className="font-medium">Job Categories</h4>
                  <div className="mt-2 space-y-2">
                    {[
                      "Restaurant",
                      "Hotel",
                      "Event Planning",
                      "Catering",
                      "Cruise Ship",
                      "Resort",
                      "Bar & Nightclub",
                    ].map((category) => (
                      <div key={category} className="flex items-center">
                        <Checkbox id={`category-${category}`} />
                        <label
                          htmlFor={`category-${category}`}
                          className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium">Job Type</h4>
                  <div className="mt-2 space-y-2">
                    {["Full-time", "Part-time", "Contract", "Temporary", "Internship"].map((type) => (
                      <div key={type} className="flex items-center">
                        <Checkbox id={`type-${type}`} />
                        <label
                          htmlFor={`type-${type}`}
                          className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium">Experience Level</h4>
                  <div className="mt-2 space-y-2">
                    {["Entry Level", "Mid Level", "Senior Level", "Executive"].map((level) => (
                      <div key={level} className="flex items-center">
                        <Checkbox id={`level-${level}`} />
                        <label
                          htmlFor={`level-${level}`}
                          className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {level}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium">Salary Range</h4>
                  <div className="mt-4">
                    <Slider defaultValue={[30000]} max={150000} step={5000} onValueChange={setSalaryRange} />
                    <div className="mt-2 text-sm text-gray-600">Up to ${salaryRange[0].toLocaleString()}</div>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-[#4CAF50] hover:bg-[#3d8b40] text-white">Apply Filters</Button>
              </div>
            </div>

            {/* Job Listings */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Available Jobs</h2>
                <div className="text-sm text-gray-600">Showing {jobs.length} jobs</div>
              </div>

              <div className="space-y-6">
                {jobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    className="p-6 transition-all duration-300 bg-white border rounded-lg shadow-sm hover:shadow-md hover:border-[#4CAF50]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                  >
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-12 h-12 mr-4 text-2xl bg-gray-100 rounded-full">
                        {job.logo}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div>
                            <h3 className="text-lg font-semibold">{job.title}</h3>
                            <p className="mt-1 text-sm text-gray-600">{job.company}</p>
                          </div>
                          <div className="px-3 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                            {job.posted}
                          </div>
                        </div>

                        <p className="mt-3 text-sm text-gray-600">{job.description}</p>

                        <div className="flex flex-wrap gap-3 mt-4">
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
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-end gap-3 mt-6">
                      <Button variant="outline" size="sm">
                        Save Job
                      </Button>
                      <Button className="bg-[#4CAF50] hover:bg-[#3d8b40] text-white" size="sm">
                        Apply Now
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <Button variant="outline" className="mx-1">
                  Previous
                </Button>
                <Button variant="outline" className="mx-1 bg-[#4CAF50] text-white">
                  1
                </Button>
                <Button variant="outline" className="mx-1">
                  2
                </Button>
                <Button variant="outline" className="mx-1">
                  3
                </Button>
                <Button variant="outline" className="mx-1">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Employers Section */}
      {/* <section className="py-16 bg-white">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold">Featured Employers</h2>
            <p className="mt-4 text-gray-600">Top companies that trust JobAway for their staffing needs</p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-6 bg-gray-50 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Image
                  src={`/placeholder.svg?height=80&width=120&query=company logo ${index + 1}`}
                  alt={`Company ${index + 1}`}
                  width={120}
                  height={80}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Job Seeker Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold">Job Seeker Resources</h2>
            <p className="mt-4 text-gray-600">Helpful tips and resources to boost your job search</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "Resume Writing Tips",
                description: "Learn how to create a standout resume that will catch employers' attention.",
                image: "/Resume-Writing-Tips.jpg",
              },
              {
                title: "Interview Preparation",
                description: "Prepare for your interviews with our comprehensive guide and practice questions.",
                image: "/Interview-Preparation.jpg",
              },
              {
                title: "Career Advancement",
                description: "Discover strategies to advance your career in the hospitality industry.",
                image: "/Career-Advancement.jpg",
              },
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                className="overflow-hidden bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Image
                  src={resource.image || "/placeholder.svg"}
                  alt={resource.title}
                  width={400}
                  height={200}
                  className="object-cover w-full h-48"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{resource.title}</h3>
                  <p className="mt-2 text-gray-600">{resource.description}</p>
                  <Button variant="link" className="mt-4 p-0 text-[#4CAF50]">
                    Read More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-[#1B5E20] text-white">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold">Can't Find What You're Looking For?</h2>
              <p className="mt-4 text-white/80">
                Upload your resume and let employers find you. Our team will also review your profile and alert you to
                matching opportunities.
              </p>
              <div className="flex flex-col gap-4 mt-8 sm:flex-row">
                <Button className="bg-white text-[#1B5E20] hover:bg-white/90">Upload Your Resume</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Create Job Alert
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="lg:text-right"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/diverse-business-meeting.png"
                alt="Upload Resume"
                width={500}
                height={300}
                className="inline-block rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section> */}
    </>
  )
}
