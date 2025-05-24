"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const faqs: FAQItem[] = [
    {
      question: "How Can I Prepare for an Interview?",
      answer:
        "To prepare for an interview, research the company, understand the job role and responsibilities, and prepare questions to ask the interviewer.",
    },
    {
      question: "Hiring Managers and Candidates?",
      answer:
        "Our platform connects hiring managers with qualified candidates based on skills, experience, and cultural fit. We streamline the recruitment process for both parties.",
    },
    {
      question: "Clarifying Recruitment Concepts?",
      answer:
        "We simplify complex recruitment terminology and processes, making it easier for both employers and job seekers to navigate the hiring landscape.",
    },
    {
      question: "Employers look for in candidates?",
      answer:
        "Employers typically look for relevant skills, experience, cultural fit, adaptability, and a positive attitude. Our platform helps highlight these qualities in candidates.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index)
  }

  return (
    <section className="py-12 sm:py-16 bg-[#F5F5F0]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* FAQ Section */}
          <div className="order-2 lg:order-1">
            <div className="inline-block px-3 sm:px-4 py-1 text-xs sm:text-sm rounded-full bg-[#E8F5E9] text-[#4CAF50] mb-3 sm:mb-4">
              GENERAL FAQS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <button
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="text-base sm:text-lg font-medium text-gray-900 pr-2">{faq.question}</h3>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-[#4CAF50]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-white border-t border-gray-100">
                          <p className="text-sm sm:text-base text-gray-600">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* How It Works Section */}
          <div className="bg-[#1B5E20] text-white p-5 sm:p-6 md:p-8 rounded-lg order-1 lg:order-2">
            <div className="inline-block px-3 sm:px-4 py-1 text-xs sm:text-sm rounded-full bg-[#4CAF50] text-white mb-3 sm:mb-4">
              THE PROCESS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">How it Works</h2>

            <div className="space-y-8 sm:space-y-10 md:space-y-12 relative">
              {/* Timeline line */}
              <div className="absolute left-[18px] sm:left-[22px] top-[40px] bottom-0 w-[2px] bg-white/30"></div>

              {/* Step 1 */}
              <motion.div
                className="flex gap-4 sm:gap-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#1B5E20] flex items-center justify-center text-lg sm:text-xl font-bold z-10">
                  1
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Sign up, It's Free!</h3>
                  <p className="text-sm sm:text-base text-white/80">
                    Our team will set up your account and help you build job to easy-to-use web dashboard.
                  </p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                className="flex gap-4 sm:gap-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#1B5E20] flex items-center justify-center text-lg sm:text-xl font-bold z-10">
                  2
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Find best Deals and Invest</h3>
                  <p className="text-sm sm:text-base text-white/80">
                    Create and post anywhere from 1-100 job openings with just a few clicks. customize your own.
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                className="flex gap-4 sm:gap-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#1B5E20] flex items-center justify-center text-lg sm:text-xl font-bold z-10">
                  3
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Get you profit back</h3>
                  <p className="text-sm sm:text-base text-white/80">
                    View bios, reviews, and rosters before workers arrive on the job, and post reviews and pay,
                    effortlessly.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
