"use client"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Calendar,
  Clock,
  BarChart,
  Users,
  Award,
  Zap,
  Star,
  TrendingUp,
  Briefcase,
} from "lucide-react"
import { useRef } from "react"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function WorkforceSystemPage() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0])

  // Testimonial data
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "HR Director, Luxury Hotels Group",
      image: "/Interior-Design-Specialist.jpg",
      quote:
        "The workforce management system has revolutionized how we handle staffing across our 15 locations. The time saved on scheduling alone has been worth the investment.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "Operations Manager, Fine Dining Chain",
      image: "/michael-chen.jpg",
      quote:
        "We've reduced overtime costs by 22% and improved employee satisfaction scores. The mobile app makes it easy for staff to manage their schedules.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      position: "Talent Acquisition Lead, Resort Collection",
      image: "/Industries-Hiring.jpg",
      quote:
        "The applicant tracking system has streamlined our hiring process, especially for seasonal staff. We can now onboard new employees 40% faster.",
      rating: 5,
    },
  ]

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="flex items-center text-sm overflow-x-auto whitespace-nowrap">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400 flex-shrink-0" />
            <Link href="/solutions" className="text-gray-600 hover:text-gray-900">
              Our Solutions
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400 flex-shrink-0" />
            <span className="text-gray-900 font-medium">Workforce System</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="relative z-10">
              <motion.div
                className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-green-100 text-green-800 font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                WORKFORCE SYSTEM
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Advanced Workforce Management
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                This system leverages advanced technologies such as Applicant Tracking, Scheduling, and Performance
                Management to optimize your workforce operations and drive business success.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    text: "Streamlined recruitment and onboarding",
                    icon: <Users className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />,
                  },
                  {
                    text: "Intelligent staff scheduling",
                    icon: <Calendar className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />,
                  },
                  {
                    text: "Real-time performance analytics",
                    icon: <BarChart className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />,
                  },
                  {
                    text: "Mobile-friendly employee self-service",
                    icon: <Zap className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    {item.icon}
                    <p className="text-gray-700">{item.text}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <Button className="rounded-full bg-[#4CAF50] hover:bg-[#3d8b40] text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Schedule a Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/Design-Director2.jpg" alt="Workforce System" fill className="object-cover" />

                {/* Floating stats cards */}
                <motion.div
                  className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg hidden md:block"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Efficiency Increase</p>
                      <p className="text-lg font-bold text-gray-900">+35%</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg hidden md:block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Time Saved</p>
                      <p className="text-lg font-bold text-gray-900">12hrs/week</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-100 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gray-100 rounded-lg -z-10"></div>

              {/* Animated circles */}
              <motion.div
                className="absolute -bottom-3 right-1/4 w-6 h-6 bg-green-400 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -top-3 left-1/3 w-4 h-4 bg-blue-400 rounded-full"
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 4,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-0" ref={targetRef}>
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <motion.div className="text-center mb-16" style={{ opacity, y }}>
            <div className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-blue-100 text-blue-800 font-medium">
              POWERFUL FEATURES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key System Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive workforce management system includes everything you need to optimize your staffing
              operations and drive efficiency across your organization.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                title: "Applicant Tracking",
                description:
                  "Streamline your recruitment process with automated job postings, candidate screening, and interview scheduling.",
                icon: <Users className="h-6 w-6 text-white" />,
                color: "bg-gradient-to-br from-blue-500 to-blue-600",
              },
              {
                title: "Staff Scheduling",
                description:
                  "Create optimal schedules based on forecasted demand, employee availability, and labor budget constraints.",
                icon: <Calendar className="h-6 w-6 text-white" />,
                color: "bg-gradient-to-br from-green-500 to-green-600",
              },
              {
                title: "Time & Attendance",
                description:
                  "Accurately track employee hours with digital time clocks, mobile check-in, and automated timesheet approval.",
                icon: <Clock className="h-6 w-6 text-white" />,
                color: "bg-gradient-to-br from-amber-500 to-amber-600",
              },
              {
                title: "Performance Management",
                description:
                  "Set goals, conduct evaluations, and track employee performance metrics to drive continuous improvement.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                color: "bg-gradient-to-br from-purple-500 to-purple-600",
              },
              {
                title: "Learning Management",
                description:
                  "Deliver and track training programs to ensure your staff has the skills needed for success.",
                icon: <Award className="h-6 w-6 text-white" />,
                color: "bg-gradient-to-br from-rose-500 to-rose-600",
              },
              {
                title: "Analytics & Reporting",
                description:
                  "Gain insights into labor costs, productivity, and other key metrics with customizable dashboards and reports.",
                icon: <TrendingUp className="h-6 w-6 text-white" />,
                color: "bg-gradient-to-br from-cyan-500 to-cyan-600",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                variants={staggerItem}
                whileHover={{ scale: 1.03 }}
              >
                <div className={`${feature.color} p-4`}>
                  <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <Link
                    href="#"
                    className="text-green-600 font-medium flex items-center hover:text-green-700 transition-colors"
                  >
                    Learn more <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - NEW */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-purple-100 text-purple-800 font-medium">
              CLIENT TESTIMONIALS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from businesses that have transformed their workforce management with our comprehensive system.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white rounded-xl shadow-lg p-8 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                {/* Quote mark */}
                <div className="absolute top-6 right-6 text-6xl text-green-100 font-serif">"</div>

                {/* Testimonial content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="relative w-16 h-16 mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="rounded-full object-cover border-2 border-white shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 relative z-10">"{testimonial.quote}"</p>

                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-b-xl"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* <Button className="rounded-full bg-white text-green-700 border border-green-200 hover:bg-green-50 px-6 py-2 shadow-sm">
              View More Success Stories <ChevronRight className="ml-1 h-4 w-4" />
            </Button> */}
          </motion.div>
        </div>
      </section>

      {/* Case Study Section */}
      {/* <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-amber-100 text-amber-800 font-medium">
              SUCCESS STORY
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transforming Hospitality Operations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how our workforce system transformed operations for a leading hospitality group, driving efficiency
              and improving guest satisfaction.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 sm:h-80 lg:h-auto">
                <Image src="/case-study-hotel.jpg" alt="Luxury Hotel Group" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-block px-3 py-1 mb-2 text-xs rounded-full bg-white/90 backdrop-blur-sm text-gray-900 font-medium">
                    CASE STUDY
                  </div>
                  <h3 className="text-2xl font-bold text-white">Luxury Hotel Group</h3>
                  <p className="text-white/90 text-sm">15 locations across North America</p>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <Briefcase className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="text-2xl font-bold">The Challenge</h3>
                </div>
                <p className="text-gray-700 mb-8">
                  A chain of 15 luxury hotels struggled with inefficient scheduling, high overtime costs, and slow
                  seasonal hiring processes, impacting both operational efficiency and guest satisfaction.
                </p>

                <div className="flex items-center mb-6">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="text-2xl font-bold">The Results</h3>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    {
                      text: "30% reduction in time spent on scheduling",
                      highlight: "30%",
                    },
                    {
                      text: "22% decrease in overtime costs",
                      highlight: "22%",
                    },
                    {
                      text: "15% improvement in employee satisfaction scores",
                      highlight: "15%",
                    },
                    {
                      text: "40% faster hiring process for seasonal staff",
                      highlight: "40%",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-gray-700">
                          <span className="font-bold text-green-600">{item.highlight}</span>{" "}
                          {item.text.substring(item.text.indexOf(" "))}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Button className="rounded-full bg-[#4CAF50] hover:bg-[#3d8b40] text-white px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300">
                  Read Full Case Study <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-16 md:py-24 bg-gradient-to-br from-green-700 to-green-800 text-white">
        <div className="container px-4 mx-auto md:px-6 lg:px-8 relative overflow-hidden">
         
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full transform translate-x-1/3 translate-y-1/3"></div>

          <motion.div
            className="text-center max-w-3xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Workforce?</h2>
            <p className="text-lg text-white/90 mb-8">
              Contact our team today to schedule a personalized demo and see how our workforce system can transform your
              business operations and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="rounded-full bg-white text-green-700 hover:bg-gray-100 px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                Talk to an Expert
              </Button>
            </div>

            <motion.div
              className="mt-12 pt-12 border-t border-white/20 flex flex-wrap justify-center gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="text-center">
                <p className="text-3xl font-bold">500+</p>
                <p className="text-sm text-white/80">Businesses Served</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">98%</p>
                <p className="text-sm text-white/80">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">25%</p>
                <p className="text-sm text-white/80">Average Cost Savings</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">24/7</p>
                <p className="text-sm text-white/80">Support Available</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section> */}
    </div>
  )
}
