"use client"

import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, Tag, Share2, Facebook, Twitter, Linkedin, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "Create a series of blog posts discussing common interview questions",
    content: `
      <p>Preparing for a job interview can be stressful. Learn about the most common questions and how to answer them effectively.</p>
      
      <h2>The Most Common Interview Questions</h2>
      
      <p>Job interviews can be nerve-wracking experiences, but with proper preparation, you can approach them with confidence. Understanding the most common interview questions and how to answer them effectively is a crucial part of this preparation.</p>
      
      <p>In this blog post, we'll explore some of the most frequently asked interview questions in the hospitality industry and provide guidance on how to craft thoughtful, impressive responses.</p>
      
      <h3>1. Tell me about yourself</h3>
      
      <p>This open-ended question is often used as an icebreaker, but it's also an opportunity to make a strong first impression. Focus on your professional background, relevant experience, and what makes you a good fit for the position. Keep your answer concise (about 1-2 minutes) and tailored to the job you're applying for.</p>
      
      <h3>2. Why are you interested in this position?</h3>
      
      <p>Employers want to know that you're genuinely interested in the role and not just applying to any available job. Research the company beforehand and mention specific aspects of the position that appeal to you. Connect these elements to your skills, experience, and career goals.</p>
      
      <h3>3. What are your strengths and weaknesses?</h3>
      
      <p>When discussing strengths, focus on qualities that are relevant to the position. For weaknesses, be honest but strategic—mention a real weakness, but emphasize how you're working to improve it. This demonstrates self-awareness and a commitment to professional growth.</p>
      
      <h2>Behavioral Questions</h2>
      
      <p>Behavioral questions ask about how you've handled specific situations in the past. The idea is that past behavior is a good predictor of future performance.</p>
      
      <h3>4. Tell me about a time when you had to deal with a difficult customer</h3>
      
      <p>In the hospitality industry, customer service skills are paramount. Use the STAR method (Situation, Task, Action, Result) to structure your answer. Describe the situation, explain your role, detail the actions you took, and share the positive outcome.</p>
      
      <h3>5. How do you handle working under pressure?</h3>
      
      <p>Hospitality jobs often involve high-pressure situations. Share a specific example of when you successfully managed stress and delivered results despite challenging circumstances. Emphasize your ability to stay calm, prioritize tasks, and maintain quality standards.</p>
      
      <h2>Preparing for Your Interview</h2>
      
      <p>Beyond knowing how to answer common questions, there are several other ways to prepare for a successful interview:</p>
      
      <ul>
        <li>Research the company thoroughly</li>
        <li>Practice your answers out loud</li>
        <li>Prepare thoughtful questions to ask the interviewer</li>
        <li>Plan your outfit and travel arrangements in advance</li>
        <li>Bring extra copies of your resume and a list of references</li>
      </ul>
      
      <p>Remember, an interview is not just about the employer evaluating you—it's also an opportunity for you to assess whether the company and position are a good fit for your skills, values, and career goals.</p>
      
      <p>By preparing thoroughly for common interview questions, you'll approach your next job interview with greater confidence and increase your chances of landing the position you want.</p>
    `,
    excerpt:
      "Preparing for a job interview can be stressful. Learn about the most common questions and how to answer them effectively.",
    category: "Business",
    tags: ["Interview", "Career Advice", "Job Search"],
    author: "Alex Beniwal",
    authorPosition: "Senior Recruitment Specialist",
    authorImage: "/professional-curly-hair-man.png",
    date: "March 20, 2023",
    readTime: "8 min read",
    image: "/blog-interview-questions.png",
    relatedPosts: [2, 3, 5],
  },
  {
    id: 2,
    title: "Explore the concept of personal branding and its impact on your career",
    content: `
      <p>In today's competitive job market, personal branding is more important than ever. Discover how to build your professional image.</p>
      
      <h2>What is Personal Branding?</h2>
      
      <p>Personal branding is the practice of marketing yourself and your career as a brand. It involves creating a consistent public image that reflects your professional identity, expertise, and values. In today's digital age, your personal brand exists whether you actively cultivate it or not—so it's better to take control of the narrative.</p>
      
      <p>Just as companies invest in their brand identity to stand out in the marketplace, professionals need to develop a personal brand to differentiate themselves in the job market and advance their careers.</p>
      
      <h2>Why Personal Branding Matters in Hospitality</h2>
      
      <p>The hospitality industry is built on relationships and reputation. A strong personal brand can:</p>
      
      <ul>
        <li>Help you stand out in a competitive job market</li>
        <li>Build trust with employers, colleagues, and clients</li>
        <li>Create opportunities for career advancement</li>
        <li>Establish you as an authority in your field</li>
        <li>Expand your professional network</li>
      </ul>
      
      <p>Whether you're a chef, hotel manager, event planner, or any other hospitality professional, your personal brand influences how others perceive you and can significantly impact your career trajectory.</p>
      
      <h2>Building Your Personal Brand</h2>
      
      <h3>1. Define Your Professional Identity</h3>
      
      <p>Start by clarifying who you are professionally. Consider your:</p>
      
      <ul>
        <li>Core values and beliefs</li>
        <li>Unique skills and expertise</li>
        <li>Professional goals and aspirations</li>
        <li>Target audience (employers, clients, industry peers)</li>
      </ul>
      
      <p>This self-reflection will help you develop an authentic personal brand that aligns with your professional identity.</p>
      
      <h3>2. Craft Your Personal Brand Statement</h3>
      
      <p>A personal brand statement is a concise expression of who you are professionally, what you specialize in, and the value you bring. It should be memorable, authentic, and tailored to your target audience.</p>
      
      <h3>3. Develop Your Online Presence</h3>
      
      <p>In today's digital world, your online presence is a crucial component of your personal brand. Focus on:</p>
      
      <ul>
        <li>Creating a professional LinkedIn profile</li>
        <li>Maintaining consistent profiles across social media platforms</li>
        <li>Sharing industry insights and thought leadership content</li>
        <li>Engaging with relevant professional communities</li>
      </ul>
      
      <h3>4. Network Strategically</h3>
      
      <p>Building relationships is essential for personal branding. Attend industry events, join professional associations, and connect with peers and mentors who can help you grow professionally.</p>
      
      <h2>Measuring the Impact of Your Personal Brand</h2>
      
      <p>How do you know if your personal branding efforts are effective? Look for indicators such as:</p>
      
      <ul>
        <li>Increased job opportunities and interview requests</li>
        <li>Growing professional network</li>
        <li>Invitations to speak at events or contribute to publications</li>
        <li>Recognition from industry peers</li>
        <li>Career advancement and salary growth</li>
      </ul>
      
      <p>Remember that personal branding is an ongoing process, not a one-time effort. Regularly assess and refine your brand as you grow professionally and as industry trends evolve.</p>
      
      <h2>Conclusion</h2>
      
      <p>In the competitive hospitality industry, a strong personal brand can be the difference between blending in and standing out. By thoughtfully developing and maintaining your professional image, you can create more opportunities, build valuable relationships, and advance your career more effectively.</p>
      
      <p>Start investing in your personal brand today—your future self will thank you.</p>
    `,
    excerpt:
      "In today's competitive job market, personal branding is more important than ever. Discover how to build your professional image.",
    category: "Analytics",
    tags: ["Personal Branding", "Career Development", "Professional Growth"],
    author: "Stefen De",
    authorPosition: "Career Development Coach",
    authorImage: "/author-stefen.png",
    date: "March 19, 2025",
    readTime: "10 min read",
    image: "/blog-personal-branding.png",
    relatedPosts: [1, 4, 6],
  },
]

// Related posts data
const relatedPostsData = [
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
    date: "March 10, 2025",
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

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const postId = Number.parseInt(params.id)
  const post = blogPosts.find((p) => p.id === postId)

  if (!post) {
    return (
      <div className="container px-4 py-16 mx-auto text-center md:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Blog Post Not Found</h1>
        <p className="mt-4 text-gray-600">{`The blog post you're looking for doesn't exist.`}</p>
        <Link href="/blog">
          <Button className="mt-6 bg-[#4CAF50] hover:bg-[#3d8b40] text-white">Back to Blog</Button>
        </Link>
      </div>
    )
  }

  // Get related posts
  const relatedPosts = post.relatedPosts
    ? post.relatedPosts.map((id) => relatedPostsData.find((p) => p.id === id)).filter(Boolean)
    : []

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-[#1B5E20]">
        <div className="absolute inset-0 opacity-20 bg-pattern"></div>
        <div className="container relative px-4 py-8 sm:py-12 md:py-16 mx-auto md:px-6 lg:px-8 max-w-7xl">
          <Link href="/blog" className="inline-flex items-center text-white hover:underline mb-4 sm:mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          <motion.div
            className="max-w-3xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-3 sm:mb-4 bg-white text-[#1B5E20]">{post.category}</Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-6 text-white/80">
              <div className="flex items-center">
                <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="text-xs sm:text-sm">By {post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="text-xs sm:text-sm">{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="text-xs sm:text-sm">{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container px-4 mx-auto -mt-8 sm:-mt-12 md:-mt-16 md:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] rounded-lg overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
          />
        </motion.div>
      </div>

      {/* Blog Content */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container px-4 mx-auto md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <motion.div
                className="p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div
                  className="prose prose-sm sm:prose-base lg:prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                ></div>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t">
                  <Tag className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                  {post.tags?.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs sm:text-sm text-gray-700">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Share */}
                <div className="flex flex-wrap items-center mt-6 sm:mt-8 pt-6 sm:pt-8 border-t">
                  <span className="mr-3 sm:mr-4 text-sm sm:text-base font-medium">Share this post:</span>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" className="h-8 w-8 sm:h-9 sm:w-9 rounded-full">
                      <Facebook className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="sr-only">Share on Facebook</span>
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8 sm:h-9 sm:w-9 rounded-full">
                      <Twitter className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="sr-only">Share on Twitter</span>
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8 sm:h-9 sm:w-9 rounded-full">
                      <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="sr-only">Share on LinkedIn</span>
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8 sm:h-9 sm:w-9 rounded-full">
                      <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="sr-only">Copy link</span>
                    </Button>
                  </div>
                </div>

                {/* Author */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 sm:p-6 mt-6 sm:mt-8 bg-gray-50 rounded-lg">
                  <div className="relative flex-shrink-0 w-16 h-16 overflow-hidden rounded-full">
                    <Image
                      src={post.authorImage || "/professional-curly-hair-man.png"}
                      alt={post.author}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-base sm:text-lg font-semibold">{post.author}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{post.authorPosition}</p>
                    <p className="mt-2 text-xs sm:text-sm text-gray-700">
                      A seasoned professional with extensive experience in the hospitality industry, specializing in
                      recruitment and career development.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 order-1 lg:order-2 mb-6 lg:mb-0">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Related Posts */}
                <motion.div
                  className="p-4 sm:p-6 bg-white rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <h3 className="text-lg sm:text-xl font-bold">Related Posts</h3>
                  <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
                    {relatedPosts.map((relatedPost) => (
                      <div key={relatedPost?.id} className="flex items-start space-x-3 sm:space-x-4">
                        <div className="relative flex-shrink-0 w-16 sm:w-20 h-16 sm:h-20 overflow-hidden rounded-md">
                          <Image
                            src={relatedPost?.image || "/Interview-Preparation.jpg"}
                            alt={relatedPost?.title || ""}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 64px, 80px"
                          />
                        </div>
                        <div>
                          <Link
                            href={`/blog/${relatedPost?.id}`}
                            className="text-sm sm:text-base font-medium hover:text-[#4CAF50] line-clamp-2 transition-colors"
                          >
                            {relatedPost?.title}
                          </Link>
                          <p className="mt-1 text-xs text-gray-500">{relatedPost?.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Categories */}
                <motion.div
                  className="p-4 sm:p-6 bg-white rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <h3 className="text-lg sm:text-xl font-bold">Categories</h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Business", "Career", "Analytics", "Trends", "Skills", "Resume"].map((category) => (
                      <Link key={category} href={`/blog/category/${category.toLowerCase()}`}>
                        <Badge variant="outline" className="text-gray-700 hover:bg-gray-100 transition-colors">
                          {category}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* Newsletter */}
                <motion.div
                  className="p-4 sm:p-6 bg-[#E8F5E9] rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <h3 className="text-lg sm:text-xl font-bold">Subscribe</h3>
                  <p className="mt-2 text-sm text-gray-700">Get the latest posts delivered straight to your inbox.</p>
                  <div className="mt-4 space-y-2">
                    <Input type="email" placeholder="Your email address" className="w-full" />
                    <Button className="w-full bg-[#4CAF50] hover:bg-[#3d8b40] text-white">Subscribe</Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Posts */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center">More Articles</h2>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 mt-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPostsData
              .filter((p) => !post.relatedPosts?.includes(p.id))
              .slice(0, 3)
              .map((post, index) => (
                <motion.div
                  key={post.id}
                  className="overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/Interview-Preparation.jpg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#4CAF50] hover:bg-[#3d8b40] text-white">{post.category}</Badge>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <Link href={`/blog/${post.id}`} className="block">
                      <h3 className="text-base sm:text-lg font-bold hover:text-[#4CAF50] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600 line-clamp-2">{post.excerpt}</p>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        <span>By {post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
          <div className="mt-8 sm:mt-12 text-center">
            <Link href="/blog">
              <Button className="bg-[#4CAF50] hover:bg-[#3d8b40] text-white px-6 sm:px-8 py-2 sm:py-3">
                View All Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
