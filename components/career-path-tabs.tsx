"use client"
import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface TabContent {
  title: string
  description: string
  image: string
}

export default function CareerPathTabs() {
  const [activeTab, setActiveTab] = useState(0)
  const [hoverTab, setHoverTab] = useState<number | null>(null)

  const tabs: TabContent[] = [
    {
      title: "Interior Design Specialist",
      description:
        "Specialize in creating beautiful, functional interior spaces that reflect clients' needs and aesthetics. Master color theory, space planning, and material selection to transform environments.",
      // image: "/interior-design-specialist.jpg",
      image: "/men2.jpg",
    },
    {
      title: "Design Project Manager",
      description:
        "Lead design projects from concept to completion, coordinating teams of designers, contractors, and vendors. Ensure projects meet quality standards, timelines, and budget requirements.",
      image: "/design-project-manager.jpg",
    },
    {
      title: "Design Director",
      description:
        "Guide the creative vision and strategy for design firms or departments. Oversee multiple projects, mentor design teams, and build client relationships while setting design standards.",
      image: "/Design-Director2.jpg",
    },
  ]

  return (
    <div className="w-full overflow-hidden rounded-xl shadow-xl">
      <div className="flex flex-wrap">
        {tabs.map((tab, index) => (
          <motion.div
            key={index}
            className={`flex-1 py-6 px-4 text-center cursor-pointer transition-all duration-300 relative ${
              activeTab === index ? "bg-gradient-to-r from-[#1e3a29] to-[#2d5941] text-white" : "bg-white text-gray-700"
            }`}
            onClick={() => setActiveTab(index)}
            onHoverStart={() => setHoverTab(index)}
            onHoverEnd={() => setHoverTab(null)}
            whileHover={{
              y: activeTab === index ? 0 : -3,
              backgroundColor: activeTab === index ? "" : "#f9fafb",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <motion.h3
                className={`text-lg font-medium mb-1 ${activeTab === index ? "text-white" : "text-gray-900"}`}
                animate={{
                  scale: hoverTab === index && activeTab !== index ? 1.05 : 1,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {tab.title}
              </motion.h3>
              <motion.div
                className={`h-1 mt-2 rounded transition-all duration-300 ${
                  activeTab === index ? "bg-white" : hoverTab === index ? "bg-green-200" : "bg-transparent"
                }`}
                initial={{ width: activeTab === index ? "2rem" : "0rem" }}
                animate={{
                  width: activeTab === index ? "2rem" : hoverTab === index ? "1.5rem" : "0rem",
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </div>

            {/* Decorative dot */}
            {activeTab === index && (
              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-white rounded-full z-10"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-10 relative shadow-inner">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-green-50 rounded-full opacity-30 transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-50 rounded-full opacity-30 transform -translate-x-1/4 translate-y-1/4"></div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                className="inline-block px-3 py-1 mb-3 text-sm rounded-full bg-green-100 text-green-800 font-medium"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                CAREER PATH
              </motion.div>
              <motion.h3
                className="text-2xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {tabs[activeTab].title}
              </motion.h3>
              <motion.p
                className="text-gray-700 mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {tabs[activeTab].description}
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {["Design Expertise", "Project Management", "Client Relations", "Team Leadership"].map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-gradient-to-r from-green-100 to-green-200 text-green-800 rounded-full text-sm font-medium shadow-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              {/* Career stats */}
              <motion.div
                className="mt-8 p-4 bg-white rounded-lg shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
              >
                <h4 className="text-sm font-semibold text-gray-500 mb-3">CAREER GROWTH METRICS</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-2xl font-bold text-green-600">92%</p>
                    <p className="text-xs text-gray-500">Job Placement</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">3.5x</p>
                    <p className="text-xs text-gray-500">Salary Growth</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">4.8</p>
                    <p className="text-xs text-gray-500">Satisfaction</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={tabs[activeTab].image || "/placeholder.svg"}
                alt={tabs[activeTab].title}
                fill
                className="object-cover"
                priority={activeTab === 0}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

              {/* Floating badge */}
              <motion.div
                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-white/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Career Path</p>
                    <p className="text-sm font-bold text-gray-900">High Demand</p>
                  </div>
                </div>
              </motion.div>

              {/* Experience level indicator */}
              <motion.div
                className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {activeTab === 0
                  ? "2-5 years experience"
                  : activeTab === 1
                    ? "5-8 years experience"
                    : "8+ years experience"}
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8">
          {tabs.map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 h-2 mx-1 rounded-full ${activeTab === index ? "bg-green-600" : "bg-gray-300"}`}
              onClick={() => setActiveTab(index)}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                scale: activeTab === index ? [1, 1.2, 1] : 1,
                backgroundColor: activeTab === index ? "#059669" : "#d1d5db",
              }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// "use client"
// import { useState } from "react"
// import Image from "next/image"
// import { motion, AnimatePresence } from "framer-motion"

// interface TabContent {
//   title: string
//   description: string
//   image: string
// }

// export default function CareerPathTabs() {
//   const [activeTab, setActiveTab] = useState(0)

//   const tabs: TabContent[] = [
//     {
//       title: "Interior Design Specialist",
//       description:
//         "Specialize in creating beautiful, functional interior spaces that reflect clients' needs and aesthetics. Master color theory, space planning, and material selection to transform environments.",
//       image: "/interior-design-specialist.jpg",
//     },
//     {
//       title: "Design Project Manager",
//       description:
//         "Lead design projects from concept to completion, coordinating teams of designers, contractors, and vendors. Ensure projects meet quality standards, timelines, and budget requirements.",
//       image: "/design-project-manager.jpg",
//     },
//     {
//       title: "Design Director",
//       description:
//         "Guide the creative vision and strategy for design firms or departments. Oversee multiple projects, mentor design teams, and build client relationships while setting design standards.",
//       image: "/Design-Director2.jpg",
//     },
//   ]

//   return (
//     <div className="w-full">
//       <div className="flex">
//         {tabs.map((tab, index) => (
//           <div
//             key={index}
//             className={`flex-1 py-6 px-4 text-center cursor-pointer transition-all duration-300 relative ${
//               activeTab === index ? "bg-[#1e3a29] text-white" : "bg-white text-gray-700 hover:bg-gray-50"
//             }`}
//             onClick={() => setActiveTab(index)}
//           >
//             <div className="flex flex-col items-center justify-center h-full">
//               <h3 className={`text-lg font-medium mb-1 ${activeTab === index ? "text-white" : "text-gray-900"}`}>
//                 {tab.title}
//               </h3>
//               <div
//                 className={`w-8 h-1 mt-2 rounded transition-all duration-300 ${
//                   activeTab === index ? "bg-white" : "bg-transparent"
//                 }`}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="bg-gray-50 p-6 md:p-10 relative">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeTab}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.3 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
//           >
//             <div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">{tabs[activeTab].title}</h3>
//               <p className="text-gray-700 mb-6">{tabs[activeTab].description}</p>
//               <div className="flex flex-wrap gap-2">
//                 {["Design Expertise", "Project Management", "Client Relations", "Team Leadership"].map((skill) => (
//                   <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
//               <Image
//                 src={tabs[activeTab].image || "/placeholder.svg"}
//                 alt={tabs[activeTab].title}
//                 fill
//                 className="object-cover"
//                 priority={activeTab === 0}
//               />
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   )
// }
