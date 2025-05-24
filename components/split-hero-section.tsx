"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

export default function SplitHeroSection() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Professions */}
        <motion.div
          className="relative bg-[#f5f5f0] min-h-[500px] sm:min-h-[600px] lg:min-h-[650px] flex items-center overflow-hidden order-2 lg:order-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          {/* Background decorative elements - Responsive */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] rounded-full bg-[#e9e9e0] -right-[150px] sm:-right-[200px] lg:-right-[300px] -top-[50px] sm:-top-[75px] lg:-top-[100px]"></div>
            <div className="absolute w-[150px] sm:w-[200px] lg:w-[300px] h-[150px] sm:h-[200px] lg:h-[300px] rounded-full bg-[#e0e0d8] left-[5%] sm:left-[8%] lg:left-[10%] bottom-[5%] opacity-50"></div>
            <div className="absolute w-[60px] sm:w-[80px] lg:w-[100px] h-[60px] sm:h-[80px] lg:h-[100px] rounded-full bg-green-100 right-[15%] sm:right-[18%] lg:right-[20%] top-[15%] sm:top-[18%] lg:top-[20%] opacity-30"></div>
            <div className="absolute w-[30px] sm:w-[40px] lg:w-[50px] h-[30px] sm:h-[40px] lg:h-[50px] rounded-full bg-green-200 left-[25%] sm:left-[28%] lg:left-[30%] top-[12%] sm:top-[13%] lg:top-[15%] opacity-20"></div>
          </div>

          {/* Content with responsive styling */}
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 xl:px-16 py-8 sm:py-12 lg:py-16 w-full max-w-xl mx-auto lg:ml-auto lg:mr-0">
            <motion.div
              className="bg-white/40 backdrop-blur-md p-4 sm:p-6 lg:p-8 rounded-xl border border-white/30 shadow-2xl"
              variants={slideIn}
            >
              <div className="w-12 sm:w-14 lg:w-16 h-1 bg-green-500 mb-4 sm:mb-5 lg:mb-6 rounded-full"></div>
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight"
                variants={slideIn}
              >
                Professions Hiring
              </motion.h2>
              <motion.p
                className="text-gray-700 mb-6 sm:mb-7 lg:mb-8 text-base sm:text-lg leading-relaxed"
                variants={slideIn}
              >
                This dynamic hiring landscape presents a wealth of opportunities for professionals across various
                industries seeking growth and advancement.
              </motion.p>
              <motion.div variants={slideIn}>
                <Link href="/job">
                  <Button className="w-full sm:w-auto rounded-full bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg group transition-all duration-300 shadow-lg shadow-green-500/20">
                    Explore Professions
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Image with responsive styling */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-3/4 z-0">
            <div className="relative h-full w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f5f5f0]/90 via-[#f5f5f0]/60 to-transparent z-10"></div>
              <Image
                src="/women.jpg"
                alt="Professional Woman"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 75vw"
                quality={95}
                style={{
                  objectPosition: "70% center",
                  transformOrigin: "center",
                  transform: "scale(1.05)",
                }}
              />
              {/* Responsive decorative elements */}
              <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 right-6 sm:right-8 lg:right-10 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 border-2 sm:border-3 lg:border-4 border-white/30 rounded-full z-5 hidden md:block"></div>
              <div className="absolute top-12 sm:top-16 lg:top-20 left-[10%] sm:left-[12%] lg:left-[15%] w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 border border-white/20 rounded-full z-5 hidden md:block"></div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Industries */}
        <motion.div
          className="relative bg-[#1e3a29] min-h-[500px] sm:min-h-[600px] lg:min-h-[650px] flex items-center text-white overflow-hidden order-1 lg:order-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          {/* Background decorative elements - Responsive */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] rounded-full bg-[#2a4a39] -left-[150px] sm:-left-[200px] lg:-left-[300px] -bottom-[50px] sm:-bottom-[75px] lg:-bottom-[100px]"></div>
            <div className="absolute w-[150px] sm:w-[200px] lg:w-[300px] h-[150px] sm:h-[200px] lg:h-[300px] rounded-full bg-[#2a4a39] right-[5%] sm:right-[8%] lg:right-[10%] top-[5%] opacity-50"></div>
            <div className="absolute w-[60px] sm:w-[80px] lg:w-[100px] h-[60px] sm:h-[80px] lg:h-[100px] rounded-full bg-green-900/30 left-[15%] sm:left-[18%] lg:left-[20%] top-[15%] sm:top-[18%] lg:top-[20%] opacity-30"></div>
            <div className="absolute w-[30px] sm:w-[40px] lg:w-[50px] h-[30px] sm:h-[40px] lg:h-[50px] rounded-full bg-green-800/20 right-[25%] sm:right-[28%] lg:right-[30%] top-[12%] sm:top-[13%] lg:top-[15%] opacity-20"></div>
          </div>

          {/* Content with responsive styling */}
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 xl:px-16 py-8 sm:py-12 lg:py-16 w-full max-w-xl mx-auto lg:ml-0 lg:mr-auto">
            <motion.div
              className="bg-[#1e3a29]/60 backdrop-blur-md p-4 sm:p-6 lg:p-8 rounded-xl border border-white/20 shadow-2xl"
              variants={slideInRight}
            >
              <div className="w-12 sm:w-14 lg:w-16 h-1 bg-green-500 mb-4 sm:mb-5 lg:mb-6 rounded-full"></div>
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight"
                variants={slideInRight}
              >
                Industries Hiring
              </motion.h2>
              <motion.p
                className="text-white/90 mb-6 sm:mb-7 lg:mb-8 text-base sm:text-lg leading-relaxed"
                variants={slideInRight}
              >
                The current job market is dynamic, with numerous industries actively seeking new talent to drive
                innovation and growth in today's competitive landscape.
              </motion.p>
              <motion.div variants={slideInRight}>
                <Link href="/solutions/workforce">
                  <Button className="w-full sm:w-auto rounded-full bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg group transition-all duration-300 shadow-lg shadow-green-500/20">
                    Explore Industries
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Image with responsive styling */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-3/4 z-0">
            <div className="relative h-full w-full">
              <div className="absolute inset-0 bg-gradient-to-l from-[#1e3a29]/90 via-[#1e3a29]/60 to-transparent z-10"></div>
              <Image
                src="/Industries-Hiring.jpg"
                alt="Professional Man with Laptop"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 75vw"
                quality={95}
                style={{
                  objectPosition: "30% center",
                  transformOrigin: "center",
                  transform: "scale(1.05)",
                }}
              />
              {/* Responsive decorative elements */}
              <div className="absolute top-6 sm:top-8 lg:top-10 left-6 sm:left-8 lg:left-10 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 border-2 sm:border-3 lg:border-4 border-white/20 rounded-full z-5 hidden md:block"></div>
              <div className="absolute bottom-12 sm:bottom-16 lg:bottom-20 right-[10%] sm:right-[12%] lg:right-[15%] w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 border border-white/10 rounded-full z-5 hidden md:block"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


// "use client"
// import Image from "next/image"
// import Link from "next/link"
// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"

// // Animation variants
// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// }

// const slideIn = {
//   hidden: { opacity: 0, x: -50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
// }

// const slideInRight = {
//   hidden: { opacity: 0, x: 50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
// }

// export default function SplitHeroSection() {
//   return (
//     <section className="w-full">
//       <div className="grid grid-cols-1 lg:grid-cols-2">
//         {/* Left Side - Professions */}
//         <motion.div
//           className="relative bg-[#f5f5f0] min-h-[500px] flex items-center"
//           initial="hidden"
//           animate="visible"
//           variants={fadeIn}
//         >
//           <div className="absolute inset-0 overflow-hidden">
//             <div className="absolute w-[600px] h-[600px] rounded-full bg-[#e9e9e0] -right-[200px] -top-[100px]"></div>
//           </div>
//           <div className="relative z-10 px-8 py-16 lg:px-16 max-w-xl mx-auto lg:ml-auto lg:mr-0">
//             <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" variants={slideIn}>
//               Professions Hiring
//             </motion.h2>
//             <motion.p className="text-gray-700 mb-8" variants={slideIn}>
//               This dynamic hiring landscape presents a wealth of opportunities for professionals across various
//               industries seeking growth and advancement.
//             </motion.p>
//             <motion.div variants={slideIn}>
//               <Link href="/solutions/executive-search">
//                 <Button className="rounded-full bg-green-500 hover:bg-green-600 text-white">Professions</Button>
//               </Link>
//             </motion.div>
//           </div>
//           <div className="absolute bottom-0 left-0 h-full w-1/2 z-0">
//             <div className="relative h-full w-full">
//               <Image
//                 src="/Professions-Hiring.webp"
//                 alt="Professional Woman"
//                 fill
//                 className="object-contain object-bottom"
//               />
//             </div>
//           </div>
//         </motion.div>

//         {/* Right Side - Industries */}
//         <motion.div
//           className="relative bg-[#1e3a29] min-h-[500px] flex items-center text-white"
//           initial="hidden"
//           animate="visible"
//           variants={fadeIn}
//         >
//           <div className="relative z-10 px-8 py-16 lg:px-16 max-w-xl mx-auto lg:ml-0 lg:mr-auto">
//             <motion.h2 className="text-3xl md:text-4xl font-bold text-white mb-4" variants={slideInRight}>
//               Industries Hiring
//             </motion.h2>
//             <motion.p className="text-white/80 mb-8" variants={slideInRight}>
//               The current job market is dynamic, with numerous industries actively seeking new talent to drive
//               innovation and growth in today's competitive landscape.
//             </motion.p>
//             <motion.div variants={slideInRight}>
//               <Link href="/solutions/workforce">
//                 <Button className="rounded-full bg-green-500 hover:bg-green-600 text-white">Industries</Button>
//               </Link>
//             </motion.div>
//           </div>
//           <div className="absolute bottom-0 right-0 h-full w-1/2 z-0">
//             <div className="relative h-full w-full">
//               <Image
//                 src="/Industries-Hiring.jpg"
//                 alt="Professional Man with Laptop"
//                 fill
//                 className="object-contain object-bottom"
//               />
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
