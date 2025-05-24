"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  Search,
  ChevronRight,
  ChevronDown,
  Phone,
  Mail,
  MessageSquare,
  Briefcase,
  Users,
  HelpCircle,
  X,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FAQsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [filteredFAQs, setFilteredFAQs] = useState<FAQItem[]>([])

  // FAQ data
  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "How can I prepare for an interview?",
      answer:
        "To prepare for an interview, research the company thoroughly, understand the job role and responsibilities, prepare answers to common interview questions, and have questions ready to ask the interviewer. Dress professionally, arrive early, and bring copies of your resume and references.",
      category: "candidates",
      icon: <Users className="h-5 w-5 text-blue-500" />,
    },
    {
      id: 2,
      question: "What do hiring managers look for in candidates?",
      answer:
        "Hiring managers typically look for candidates who have the required skills and experience, demonstrate a good cultural fit, show enthusiasm for the role and company, communicate effectively, and display problem-solving abilities. They also value candidates who have done their research about the company and ask thoughtful questions.",
      category: "employers",
      icon: <Briefcase className="h-5 w-5 text-green-500" />,
    },
    {
      id: 3,
      question: "How does the JobAway staffing process work?",
      answer:
        "Our staffing process begins with understanding your needs, followed by sourcing qualified candidates through our extensive network. We conduct thorough screenings and interviews, present you with the best matches, coordinate interviews, and handle all paperwork once you've selected your ideal candidate. We also provide ongoing support throughout the placement.",
      category: "general",
      icon: <HelpCircle className="h-5 w-5 text-purple-500" />,
    },
    {
      id: 4,
      question: "What industries does JobAway specialize in?",
      answer:
        "JobAway specializes in hospitality, food service, retail, events, interior design, and administrative staffing. Our expertise in these industries allows us to understand the unique requirements and find candidates with the specific skills and experience needed for success in these environments.",
      category: "general",
      icon: <HelpCircle className="h-5 w-5 text-purple-500" />,
    },
    {
      id: 5,
      question: "How quickly can you fill a position?",
      answer:
        "Our turnaround time depends on the position's complexity and requirements. For temporary roles, we can often provide candidates within 24-48 hours. For permanent positions or those requiring specialized skills, it may take 1-2 weeks to ensure we find the perfect match. We prioritize quality matches over speed to ensure long-term success.",
      category: "employers",
      icon: <Briefcase className="h-5 w-5 text-green-500" />,
    },
    {
      id: 6,
      question: "What should I include in my resume?",
      answer:
        "Your resume should include your contact information, a professional summary, work experience, education, relevant skills, and achievements. Focus on quantifiable accomplishments and tailor your resume to each job application by highlighting relevant experience. Keep it concise (1-2 pages) and ensure it's free of errors.",
      category: "candidates",
      icon: <Users className="h-5 w-5 text-blue-500" />,
    },
    {
      id: 7,
      question: "How do I create a job alert?",
      answer:
        "To create a job alert, log into your JobAway account and navigate to the 'Job Alerts' section. Specify your desired job title, location, industry, and frequency of notifications. You can create multiple alerts for different job types and modify or delete them at any time. You'll receive email notifications when matching positions become available.",
      category: "candidates",
      icon: <Users className="h-5 w-5 text-blue-500" />,
    },
    {
      id: 8,
      question: "What is the cost of using JobAway's services?",
      answer:
        "Our fee structure varies based on the service type. For temporary staffing, we charge an hourly rate that includes the employee's wages plus our service fee. For direct hire placements, we typically charge a percentage of the candidate's first-year salary. We offer volume discounts for clients with ongoing staffing needs. Contact us for a customized quote.",
      category: "employers",
      icon: <Briefcase className="h-5 w-5 text-green-500" />,
    },
    {
      id: 9,
      question: "Do you offer any guarantees on placements?",
      answer:
        "Yes, we stand behind our placements with satisfaction guarantees. For temporary staff, we offer same-day replacements if you're not satisfied. For permanent placements, we provide replacement guarantees ranging from 30-90 days depending on the position level. This ensures you receive the quality talent you expect without additional recruitment costs.",
      category: "employers",
      icon: <Briefcase className="h-5 w-5 text-green-500" />,
    },
    {
      id: 10,
      question: "How do I update my profile and resume?",
      answer:
        "To update your profile and resume, log into your JobAway account and navigate to 'My Profile'. Click on 'Edit Profile' to update your personal information, skills, and preferences. To update your resume, select 'Manage Documents' and upload your new resume or edit the existing one. Remember to keep your information current for better job matching.",
      category: "candidates",
      icon: <Users className="h-5 w-5 text-blue-500" />,
    },
  ]

  // Filter FAQs based on active tab and search query
  useEffect(() => {
    let filtered = faqs

    // Filter by category
    if (activeTab !== "all") {
      filtered = filtered.filter((faq) => faq.category === activeTab)
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (faq) => faq.question.toLowerCase().includes(query) || faq.answer.toLowerCase().includes(query),
      )
    }

    setFilteredFAQs(filtered)
  }, [activeTab, searchQuery])

  // Toggle FAQ expansion
  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id)
  }

  // Clear filters
  const clearFilters = () => {
    setActiveTab("all")
    setSearchQuery("")
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b py-4">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <span className="text-gray-900 font-medium">Frequently Asked Questions</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/FAQ_Hero Banner.png" alt="FAQ Hero" fill className="object-cover opacity-15" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-green-600/20"></div>
        </div>

        <div className="container relative z-10 px-4 mx-auto md:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How can we help you?</h1>
            <p className="text-lg text-gray-600 mb-8">
              Find answers to frequently asked questions about our staffing services, job application process, and more.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                placeholder="Search for questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  onClick={() => setSearchQuery("")}
                >
                  <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* FAQ Content */}
      <section className="py-12">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">FAQ Categories</h3>

                {/* Category Tabs */}
                <div className="space-y-2">
                  {[
                    { id: "all", label: "All FAQs", icon: <HelpCircle className="h-5 w-5" /> },
                    { id: "general", label: "General", icon: <MessageSquare className="h-5 w-5" /> },
                    { id: "candidates", label: "For Candidates", icon: <Users className="h-5 w-5" /> },
                    { id: "employers", label: "For Employers", icon: <Briefcase className="h-5 w-5" /> },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      className={`flex items-center w-full px-4 py-3 rounded-lg transition-all ${
                        activeTab === tab.id ? "bg-green-100 text-green-800" : "hover:bg-gray-100 text-gray-700"
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <span className={`mr-3 ${activeTab === tab.id ? "text-green-600" : "text-gray-500"}`}>
                        {tab.icon}
                      </span>
                      <span className="font-medium">{tab.label}</span>
                      {activeTab === tab.id && (
                        <span className="ml-auto bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">
                          {tab.id === "all" ? faqs.length : faqs.filter((faq) => faq.category === tab.id).length}
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Popular Resources */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Resources</h3>
                  <ul className="space-y-3">
                    {[
                      { label: "Resume Writing Guide", icon: <Clock /> },
                      { label: "Interview Preparation", icon: <Clock /> },
                      { label: "Hiring Best Practices", icon: <Clock /> },
                    ].map((resource, index) => (
                      <li key={index}>
                        <Link
                          href="#"
                          className="flex items-center text-gray-600 hover:text-green-600 transition-colors"
                        >
                          <span className="mr-2 text-gray-400">{resource.icon}</span>
                          {resource.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {activeTab === "all"
                        ? "All FAQs"
                        : activeTab === "general"
                          ? "General FAQs"
                          : activeTab === "candidates"
                            ? "Candidate FAQs"
                            : "Employer FAQs"}
                    </h2>
                    <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                      {filteredFAQs.length} {filteredFAQs.length === 1 ? "question" : "questions"}
                    </span>
                  </div>
                </div>

                {/* FAQ List */}
                <div className="divide-y divide-gray-200">
                  {filteredFAQs.length > 0 ? (
                    filteredFAQs.map((faq) => (
                      <motion.div
                        key={faq.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="group"
                      >
                        <button
                          className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                          onClick={() => toggleFAQ(faq.id)}
                        >
                          <div className="flex items-center text-left">
                            <span className="mr-4 flex-shrink-0">{faq.icon}</span>
                            <span className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                              {faq.question}
                            </span>
                          </div>
                          <ChevronDown
                            className={`h-5 w-5 text-gray-500 transition-transform ${
                              expandedFAQ === faq.id ? "transform rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {expandedFAQ === faq.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-5 pt-2 text-gray-600 bg-gray-50">
                                <div className="pl-12">
                                  <p className="leading-relaxed">{faq.answer}</p>
                                  <div className="mt-4 flex items-center text-sm">
                                    <span className="text-gray-500">Was this helpful?</span>
                                    <button className="ml-4 px-3 py-1 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors">
                                      Yes
                                    </button>
                                    <button className="ml-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
                                      No
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))
                  ) : (
                    <div className="py-12 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                        <Search className="h-6 w-6 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                      <p className="text-gray-500 mb-6">We couldn't find any FAQs matching your criteria.</p>
                      <Button variant="outline" onClick={clearFilters} className="rounded-full">
                        Clear Filters
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              {/* Support Section */}
              <div className="mt-8 bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
                    <p className="text-gray-600 mb-6">
                      If you couldn't find the answer to your question, our support team is here to help.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                          <Phone className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Call us at</p>
                          <p className="font-medium text-gray-900">(555) 123-4567</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                          <Mail className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Email us at</p>
                          <p className="font-medium text-gray-900">support@jobaway.com</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8">
                      <Button className="rounded-full bg-[#1B5E20] hover:bg-[#0d4a15] text-white">
                        Contact Support
                      </Button>
                    </div>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <Image src="/career-growth.jpg" alt="Support Team" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                      <p className="font-medium text-gray-900">
                        "Our team typically responds within 2 hours during business hours."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// TypeScript interface for FAQ items
interface FAQItem {
  id: number
  question: string
  answer: string
  category: string
  icon: React.ReactNode
}
