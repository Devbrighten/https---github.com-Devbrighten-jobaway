"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    })
    // Show success message or redirect
    alert("Message sent successfully!")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="py-12 text-center">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact us
        </motion.h1>
        <div className="flex items-center justify-center gap-2 text-sm">
          <Link href="/" className="text-[#4CAF50] hover:underline">
            Home
          </Link>
          <span>-</span>
          <span>Contact us</span>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 overflow-hidden rounded-lg shadow-md">
          {/* Contact Information */}
          <motion.div
            className="bg-[#1B5E20] text-white p-8 md:p-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

            <div className="space-y-8">
              {/* Corporate Office */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-[#7CFC00] rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#1B5E20]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Corporate Office</h3>
                  <p className="text-white/80">0233 Brisbane Cir.</p>
                  <p className="text-white/80">Shiloh, Australia 61063</p>
                </div>
              </div>

              {/* Main Warehouse */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-[#7CFC00] rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#1B5E20]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Main Warehouse</h3>
                  <p className="text-white/80">10445 Brisbane Cir.</p>
                  <p className="text-white/80">Shiloh, Australia 61063</p>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-[#7CFC00] rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#1B5E20]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email Address</h3>
                  <p className="text-white/80">support@example.com</p>
                  <p className="text-white/80">contact@example.com</p>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-[#7CFC00] rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#1B5E20]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone Number</h3>
                  <p className="text-white/80">(+208) 544-0141</p>
                  <p className="text-white/80">(+208) 544-0142</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 md:p-12 col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Write Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[150px]"
                />
              </div>

              <div>
                <Button type="submit" className="bg-[#7CFC00] hover:bg-[#6BE400] text-black font-medium px-8 py-3">
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
