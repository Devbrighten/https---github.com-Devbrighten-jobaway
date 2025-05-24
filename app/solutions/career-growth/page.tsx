"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, CheckCircle, ArrowRight, Award, BookOpen, Users, Target, TrendingUp, Zap } from "lucide-react"
import CareerPathTabs from "@/components/career-path-tabs"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

export default function CareerGrowthPage() {
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
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <span className="text-gray-900 font-medium">Career Growth</span>
          </div>
        </div>
      </div>

      {/* Hero Section with elegant design elements */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f8f9fa] rounded-bl-[100px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#f0f2f5] rounded-tr-[80px] z-0"></div>

        <div className="container relative z-10 px-4 mx-auto md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <div className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-green-100 text-green-800 font-medium">
                CAREER GROWTH & DEVELOPMENT
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Unlock Your <span className="text-[#4CAF50]">Professional</span> Potential
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our career growth program fosters a culture where individuals achieve their professional goals through
                personalized development plans, mentorship, and continuous learning opportunities tailored to the
                interior design industry.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  "Personalized career planning with industry experts",
                  "Specialized skill development for interior design professionals",
                  "One-on-one mentorship with established designers",
                  "Clear leadership advancement pathways",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 bg-green-100 rounded-full p-1 mr-3 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="rounded-full bg-[#4CAF50] hover:bg-[#3d8b40] text-white px-8 py-6 text-lg shadow-lg shadow-green-100">
                  Start Your Growth Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg"
                >
                  Explore Programs
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/career-growth-hero.jpg" alt="Career Growth" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                {/* Floating elements */}
                <motion.div
                  className="absolute top-10 right-10 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Career Advancement</p>
                      <p className="font-medium text-gray-900">+45% Promotion Rate</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <Award className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Professional Growth</p>
                      <p className="font-medium text-gray-900">Industry Recognition</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-100 rounded-2xl -z-10 transform rotate-6"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gray-100 rounded-2xl -z-10 transform -rotate-6"></div>
              <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 w-20 h-20 bg-yellow-100 rounded-full -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================================================================================================================================================== */}


      
{/* ============================================================================================================================================================ */}
      {/* Career Path Tabs Section - NEW */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-amber-100 text-amber-800 font-medium">
              DESIGN CAREER PATHS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Finding You The Leaders Of Tomorrow</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore different career paths in the interior design industry and discover opportunities for growth and
              advancement in your professional journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CareerPathTabs />
          </motion.div>
        </div>
      </section>



{/* ===================================================================================================================================================== */}
      {/* Career Path Visualization */}
      {/* <section className="py-20 bg-[#f8f9fa]">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-blue-100 text-blue-800 font-medium">
              YOUR CAREER JOURNEY
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Design Your Career Path</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our structured approach helps you navigate your professional journey with clarity and purpose, from
              entry-level positions to leadership roles in the interior design industry.
            </p>
          </motion.div>

          <div className="relative">
         
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>

            <motion.div
              className="space-y-16 md:space-y-0 relative z-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  level: "Entry Level",
                  title: "Foundation Building",
                  description:
                    "Develop core design skills and industry knowledge through hands-on projects and structured learning.",
                  skills: ["Design Fundamentals", "Software Proficiency", "Client Communication"],
                  icon: <BookOpen className="h-6 w-6 text-blue-600" />,
                  color: "bg-blue-100",
                  textColor: "text-blue-600",
                  position: "md:ml-0 md:mr-auto md:text-right",
                  connector: "md:left-1/2 md:right-auto",
                },
                {
                  level: "Mid Level",
                  title: "Specialization & Growth",
                  description:
                    "Deepen expertise in your chosen design niche and take on more complex projects with greater autonomy.",
                  skills: ["Project Management", "Advanced Design Techniques", "Team Collaboration"],
                  icon: <Target className="h-6 w-6 text-green-600" />,
                  color: "bg-green-100",
                  textColor: "text-green-600",
                  position: "md:mr-0 md:ml-auto md:text-left",
                  connector: "md:right-1/2 md:left-auto",
                },
                {
                  level: "Senior Level",
                  title: "Leadership Development",
                  description:
                    "Refine leadership skills and strategic thinking to guide teams and influence organizational direction.",
                  skills: ["Team Leadership", "Strategic Planning", "Client Relationship Management"],
                  icon: <Users className="h-6 w-6 text-purple-600" />,
                  color: "bg-purple-100",
                  textColor: "text-purple-600",
                  position: "md:ml-0 md:mr-auto md:text-right",
                  connector: "md:left-1/2 md:right-auto",
                },
                {
                  level: "Executive Level",
                  title: "Industry Leadership",
                  description:
                    "Shape the future of design through thought leadership, innovation, and organizational vision.",
                  skills: ["Organizational Strategy", "Industry Influence", "Business Development"],
                  icon: <Award className="h-6 w-6 text-amber-600" />,
                  color: "bg-amber-100",
                  textColor: "text-amber-600",
                  position: "md:mr-0 md:ml-auto md:text-left",
                  connector: "md:right-1/2 md:left-auto",
                },
              ].map((stage, index) => (
                <motion.div key={stage.level} className={`relative md:w-1/2 ${stage.position}`} variants={staggerItem}>
                  
                  <div className={`absolute top-8 ${stage.connector} w-8 h-1 ${stage.color} hidden md:block`}></div>

                 
                  <div
                    className={`absolute top-6 left-1/2 w-5 h-5 ${stage.color} border-4 border-white rounded-full transform -translate-x-1/2 hidden md:block`}
                  ></div>

                  <div className="bg-white rounded-xl shadow-lg p-8 md:mx-8 relative">
                  
                    <div
                      className={`absolute -left-3 top-8 w-6 h-6 ${stage.color} rounded-full flex items-center justify-center md:hidden`}
                    >
                      {index + 1}
                    </div>

                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full ${stage.color} flex items-center justify-center mr-4`}>
                        {stage.icon}
                      </div>
                      <div>
                        <span className={`text-sm font-medium ${stage.textColor}`}>{stage.level}</span>
                        <h3 className="text-xl font-bold text-gray-900">{stage.title}</h3>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">{stage.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {stage.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* ===================================================================================================================================================== */}

      {/* Career Development Programs with elegant cards */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-green-100 text-green-800 font-medium">
              TAILORED PROGRAMS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Career Development Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive programs are designed to help you advance at every stage of your career in the interior
              design and architectural fields.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Entry-Level Acceleration",
                description:
                  "Designed for those starting their careers in interior design, focusing on essential skills and industry knowledge.",
                icon: <Zap className="h-8 w-8 text-amber-500" />,
                color: "bg-amber-50",
                borderColor: "border-amber-200",
                features: ["Design fundamentals", "Software training", "Industry standards", "Portfolio development"],
              },
              {
                title: "Mid-Career Enhancement",
                description:
                  "For design professionals looking to expand their expertise and take on greater responsibilities in their firms.",
                icon: <TrendingUp className="h-8 w-8 text-green-500" />,
                color: "bg-green-50",
                borderColor: "border-green-200",
                features: ["Advanced design techniques", "Project management", "Client relations", "Team leadership"],
              },
              {
                title: "Leadership Development",
                description:
                  "Preparing high-potential designers for management and executive positions through advanced training.",
                icon: <Award className="h-8 w-8 text-purple-500" />,
                color: "bg-purple-50",
                borderColor: "border-purple-200",
                features: [
                  "Strategic planning",
                  "Design direction",
                  "Business development",
                  "Organizational leadership",
                ],
              },
              {
                title: "Specialized Skill Building",
                description:
                  "Focused programs to develop expertise in specific areas relevant to your interior design career path.",
                icon: <Target className="h-8 w-8 text-blue-500" />,
                color: "bg-blue-50",
                borderColor: "border-blue-200",
                features: ["Sustainable design", "Hospitality spaces", "Residential luxury", "Commercial environments"],
              },
              {
                title: "Career Transition Support",
                description:
                  "Guidance and training for professionals looking to change specialties within the design industry.",
                icon: <ChevronRight className="h-8 w-8 text-rose-500" />,
                color: "bg-rose-50",
                borderColor: "border-rose-200",
                features: ["Skills assessment", "Gap analysis", "Targeted training", "Network building"],
              },
              {
                title: "Continuous Professional Development",
                description:
                  "Ongoing learning opportunities to stay current with interior design trends and best practices.",
                icon: <BookOpen className="h-8 w-8 text-cyan-500" />,
                color: "bg-cyan-50",
                borderColor: "border-cyan-200",
                features: [
                  "Trend workshops",
                  "Certification preparation",
                  "Industry conferences",
                  "Peer learning groups",
                ],
              },
            ].map((program, index) => (
              <motion.div
                key={program.title}
                className={`group bg-white rounded-xl overflow-hidden shadow-lg border ${program.borderColor} hover:shadow-xl transition-all duration-500`}
                variants={staggerItem}
              >
                <div className={`${program.color} p-6`}>
                  <div className="flex items-center">
                    <div className="bg-white rounded-lg p-3 mr-4 shadow-sm">{program.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6">{program.description}</p>

                  <div className="space-y-3 mb-6">
                    {program.features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="#"
                    className="inline-flex items-center text-[#4CAF50] font-medium hover:text-[#3d8b40] transition-colors group-hover:underline"
                  >
                    Learn more <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================================================================================================================================================== */}

      {/* Success Stories with elegant design */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-green-100 text-green-500 font-medium">
              INSPIRING JOURNEYS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how our career growth programs have helped design professionals achieve their goals and transform
              their careers in the interior design industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                name: "James Wilson",
                before: "Junior Designer",
                after: "Design Studio Director",
                quote:
                  "The career development program at JobAway gave me the skills and confidence to advance from a junior designer to directing my own studio in just four years. The mentorship and specialized training were invaluable.",
                image: "/Design-Studio-Director.webp",
                color: "bg-blue-100",
                textColor: "text-blue-600",
              },
              {
                name: "Elena Rodriguez",
                before: "Interior Design Assistant",
                after: "Hospitality Design Director",
                quote:
                  "Through JobAway's leadership program and specialized training, I was able to climb the career ladder and now oversee design for a luxury hotel chain. The structured approach to career development made all the difference.",
                image: "/woman.jpg",
                color: "bg-green-100",
                textColor: "text-green-600",
              },
              
            ].map((story, index) => (
              <motion.div
                key={story.name}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl relative z-10">
                  <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-24 h-24 rounded-full bg-[#4CAF50]/10 -z-10"></div>

                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="relative">
                        <div className="relative w-32 h-32 rounded-xl overflow-hidden mx-auto md:mx-0 border-4 border-white shadow-lg">
                          <Image
                            src={story.image || "/placeholder.svg?height=128&width=128&query=interior+designer"}
                            alt={story.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div
                          className={`absolute -bottom-3 -right-3 ${story.color} rounded-lg px-3 py-1 text-sm font-medium ${story.textColor}`}
                        >
                          {story.after}
                        </div>
                      </div>

                      <div className="text-center md:text-left mt-6">
                        <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                        <p className={`${story.textColor} font-medium`}>
                          {story.before} → {story.after}
                        </p>
                      </div>
                    </div>

                    <div className="md:w-2/3">
                      <div className="text-4xl text-[#4CAF50] mb-4">"</div>
                      <p className="text-lg text-gray-700 italic leading-relaxed">{story.quote}</p>
                      <div className="mt-6 flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-2 text-gray-600">Career Transformation</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-green-100 -z-10 hidden lg:block"></div>
                <div className="absolute bottom-0 right-0 transform translate-x-1/3 translate-y-1/3 w-32 h-32 rounded-full bg-blue-100/50 -z-10 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* <Button className="rounded-full bg-[#4CAF50] hover:bg-[#3d8b40] text-white px-8 py-6 text-lg shadow-lg shadow-green-100">
              Read More Success Stories <ChevronRight className="ml-2 h-5 w-5" />
            </Button> */}
          </motion.div>
        </div>
      </section>
{/* ===================================================================================================================================================== */}


      {/* Statistics Section */}
      {/* <section className="py-20 bg-white">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "94%",
                label: "Career Satisfaction",
                description: "of program participants report higher job satisfaction",
                icon: <Users className="h-6 w-6 text-green-500" />,
                color: "bg-green-100",
              },
              {
                number: "78%",
                label: "Promotion Rate",
                description: "of designers advance to higher positions within 2 years",
                icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
                color: "bg-blue-100",
              },
              {
                number: "45%",
                label: "Salary Increase",
                description: "average salary growth after completing our programs",
                icon: <DollarSign className="h-6 w-6 text-amber-500" />,
                color: "bg-amber-100",
              },
              {
                number: "1200+",
                label: "Success Stories",
                description: "design professionals have transformed their careers",
                icon: <Award className="h-6 w-6 text-purple-500" />,
                color: "bg-purple-100",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mb-6`}>
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-xl font-medium text-[#4CAF50] mb-2">{stat.label}</p>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* -------------------------======================================================================================================================================================= */}

      {/* CTA Section with elegant design */}
      {/* <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#1e3a29]">
          <div className="absolute inset-0 bg-[url('/interior-design-pattern.jpg')] mix-blend-overlay opacity-10"></div>
        </div>

        
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full transform translate-x-1/3 translate-y-1/3"></div>

        <div className="container relative z-10 px-4 mx-auto md:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Advance Your Design Career?</h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Take the first step toward your professional growth by connecting with our career development specialists.
              Let's create a personalized plan for your success in the interior design industry.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button className="rounded-full bg-white text-[#1e3a29] hover:bg-gray-100 px-8 py-6 text-lg shadow-xl">
                Schedule a Career Consultation
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                Explore Programs
              </Button>
            </div>

            <div className="mt-12 pt-12 border-t border-white/20">
              <p className="text-white/60 mb-6">Trusted by leading design firms and professionals</p>
              <div className="flex flex-wrap justify-center gap-8 items-center">
                {[1, 2, 3, 4, 5].map((logo) => (
                  <div
                    key={logo}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 h-16 w-32 flex items-center justify-center"
                  >
                    <div className="text-white/80 font-medium">Design Partner {logo}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      
    </div>
  )
}

// Additional components
function DollarSign(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22"></line>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  )
}
