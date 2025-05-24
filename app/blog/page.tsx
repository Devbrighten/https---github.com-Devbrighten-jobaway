"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, User, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "Create a series of blog posts discussing common interview questions",
    excerpt:
      "Preparing for a job interview can be stressful. Learn about the most common questions and how to answer them effectively.",
    category: "Business",
    author: "Alex Beniwal",
    date: "March 20, 2023",
    image: "/blog-interview-questions.png",
  },
  {
    id: 2,
    title: "Explore the concept of personal branding and its impact on your career",
    excerpt:
      "In today's competitive job market, personal branding is more important than ever. Discover how to build your professional image.",
    category: "Analytics",
    author: "Stefen De",
    date: "March 19, 2025",
    image: "/blog-personal-branding.png",
  },
  {
    id: 3,
    title: "How to negotiate your salary: Tips from hiring managers",
    excerpt:
      "Negotiating your salary can be intimidating, but it's a crucial skill. Learn insider tips from experienced hiring managers.",
    category: "Career",
    author: "Maria Johnson",
    date: "March 15, 2025",
    image: "/blog-salary-negotiation.png",
  },
  {
    id: 4,
    title: "The future of remote work in the hospitality industry",
    excerpt:
      "Remote work has transformed many industries. Discover how the hospitality sector is adapting to this new work model.",
    category: "Trends",
    author: "James Wilson",
    date: "March 10, 2023",
    image: "/industry-blog.jpg",
  },
  {
    id: 5,
    title: "Essential skills for hospitality professionals in 2023",
    excerpt:
      "The hospitality industry is evolving rapidly. Learn which skills will be most valuable for career advancement this year.",
    category: "Skills",
    author: "Emily Chen",
    date: "March 5, 2023",
    image: "/training Session.jpg",
  },
  {
    id: 6,
    title: "How to create a standout resume for hospitality jobs",
    excerpt:
      "Your resume is your first impression. Discover how to craft a resume that will catch the attention of hospitality employers.",
    category: "Resume",
    author: "David Miller",
    date: "February 28, 2023",
    image: "/Interview-Preparation.jpg",
  },
]

// Categories with post counts
const categories = [
  { name: "Day Trading", count: 9 },
  { name: "Finance", count: 20 },
  { name: "Virtual Hiring", count: 25 },
  { name: "Headhunting", count: 6 },
  { name: "Promotions", count: 18 },
  { name: "Recruitment Agencies", count: 11 },
]

export default function BlogPage() {
  const [mounted, setMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  // Filter posts based on search query
  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase()),
  )

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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Blog</h1>
            <p className="mt-4 text-lg text-white/80">
              Insights, tips, and trends from the hospitality staffing industry
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-4">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="lg:sticky lg:top-24 space-y-6 sm:space-y-8">
                {/* Search Box */}
                <div className="p-4 sm:p-6 bg-white rounded-lg shadow-sm">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Search"
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                {/* Categories - Only show on desktop */}
                <div className="hidden lg:block p-4 sm:p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-lg sm:text-xl font-bold">Categories</h3>
                  <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                    {categories.map((category) => (
                      <li key={category.name} className="flex items-center justify-between">
                        <Link
                          href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-gray-700 hover:text-[#4CAF50]"
                        >
                          {category.name}
                        </Link>
                        <span className="px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded-full">
                          ({category.count})
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Latest Posts - Only show on desktop */}
                <div className="hidden lg:block p-4 sm:p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-lg sm:text-xl font-bold">Latest Posts</h3>
                  <ul className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <li key={post.id} className="flex items-start space-x-3">
                        <div className="relative flex-shrink-0 w-12 sm:w-16 h-12 sm:h-16 overflow-hidden rounded-md">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <Link
                            href={`/blog/${post.id}`}
                            className="text-xs sm:text-sm font-medium hover:text-[#4CAF50] line-clamp-2"
                          >
                            {post.title}
                          </Link>
                          <p className="mt-1 text-xs text-gray-500">{post.date}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    className="overflow-hidden bg-white rounded-lg shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="relative h-60 overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#4CAF50] hover:bg-[#3d8b40] text-white">{post.category}</Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <Link href={`/blog/${post.id}`} className="block">
                        <h2 className="text-xl font-bold hover:text-[#4CAF50] transition-colors">{post.title}</h2>
                      </Link>
                      <p className="mt-3 text-gray-600 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center mt-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          <span>By {post.author}</span>
                        </div>
                        <div className="flex items-center ml-4">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <Link href={`/blog/${post.id}`}>
                        <Button variant="link" className="p-0 mt-4 text-[#4CAF50]">
                          Read More <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="bg-[#4CAF50] text-white">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="p-4 sm:p-6 md:p-8 bg-[#E8F5E9] rounded-lg lg:p-12">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">Subscribe to Our Newsletter</h2>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-600">
                  Stay updated with the latest industry insights, job opportunities, and career advice.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 lg:items-end">
                <div className="flex w-full max-w-md flex-col sm:flex-row gap-2 sm:gap-0">
                  <Input type="email" placeholder="Enter your email" className="sm:rounded-r-none" />
                  <Button className="sm:rounded-l-none bg-[#4CAF50] hover:bg-[#3d8b40] text-white">Subscribe</Button>
                </div>
                <p className="text-xs sm:text-sm text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
