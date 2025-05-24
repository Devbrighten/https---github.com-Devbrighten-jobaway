
"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface CounterCardProps {
  label: string
  startValue: number
  endValue: number
  suffix: string
  displayDivider: number
  delay?: number
}

export default function CounterCard({
  label,
  startValue,
  endValue,
  suffix,
  displayDivider,
  delay = 0,
}: CounterCardProps) {
  const [count, setCount] = useState(startValue)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      const duration = 2000 // 2 seconds
      const interval = 20 // Update every 20ms
      const steps = duration / interval
      const increment = (endValue - startValue) / steps

      let timer: NodeJS.Timeout
      let currentCount = startValue

      const updateCounter = () => {
        currentCount += increment
        if (currentCount >= endValue) {
          currentCount = endValue
          setCount(currentCount)
          clearInterval(timer)
        } else {
          setCount(currentCount)
        }
      }

      timer = setInterval(updateCounter, interval)

      return () => clearInterval(timer)
    }
  }, [isInView, startValue, endValue])

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
    >
      {/* Background with gradient and hover effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#4CAF50]/10 to-[#7CFC00]/10 rounded-full transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-300"></div>
      <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-br from-[#4CAF50]/5 to-[#7CFC00]/5 rounded-full transform -translate-x-2 translate-y-2 group-hover:scale-110 transition-transform duration-300"></div>

      {/* Content */}
      <div className="relative text-center p-4 sm:p-6 md:p-8 border border-gray-100 rounded-xl bg-white/80 backdrop-blur-sm group-hover:border-[#4CAF50]/20 transition-all duration-300">
        {/* Counter Number */}
        <motion.div
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#4CAF50] to-[#7CFC00] bg-clip-text text-transparent mb-2 sm:mb-3"
          initial={{ scale: 0.8 }}
          animate={{ scale: isInView ? 1 : 0.8 }}
          transition={{ delay: delay + 0.2, duration: 0.5, ease: "easeOut" }}
        >
          {Math.round(count / displayDivider)}
          {suffix}
        </motion.div>

        {/* Label */}
        <motion.p
          className="text-xs sm:text-sm md:text-base text-gray-600 font-medium leading-tight px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: delay + 0.4, duration: 0.5 }}
        >
          {label}
        </motion.p>

        {/* Progress indicator */}
        <motion.div
          className="mt-3 sm:mt-4 w-full h-1 bg-gray-200 rounded-full overflow-hidden"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isInView ? 1 : 0 }}
          transition={{ delay: delay + 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[#4CAF50] to-[#7CFC00] rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: isInView ? "100%" : "0%" }}
            transition={{ delay: delay + 0.8, duration: 1.2, ease: "easeOut" }}
          />
        </motion.div>

        {/* Floating icon */}
        <motion.div
          className="absolute top-2 sm:top-3 left-2 sm:left-3 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-[#4CAF50] to-[#7CFC00] rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          animate={{
            y: [0, -4, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: delay + 1,
          }}
        >
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
        </motion.div>

        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-[#4CAF50]/20 opacity-0 group-hover:opacity-100"
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  )
}




// "use client"

// import { useState, useEffect, useRef } from "react"
// import { motion, useInView } from "framer-motion"

// interface CounterCardProps {
//   label: string
//   startValue: number
//   endValue: number
//   suffix: string
//   displayDivider: number
//   delay?: number
// }

// export default function CounterCard({
//   label,
//   startValue,
//   endValue,
//   suffix,
//   displayDivider,
//   delay = 0,
// }: CounterCardProps) {
//   const [count, setCount] = useState(startValue)
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   useEffect(() => {
//     if (isInView) {
//       const duration = 2000 // 2 seconds
//       const interval = 20 // Update every 20ms
//       const steps = duration / interval
//       const increment = (endValue - startValue) / steps

//       let timer: NodeJS.Timeout
//       let currentCount = startValue

//       const updateCounter = () => {
//         currentCount += increment
//         if (currentCount >= endValue) {
//           currentCount = endValue
//           setCount(currentCount)
//           clearInterval(timer)
//         } else {
//           setCount(currentCount)
//         }
//       }

//       timer = setInterval(updateCounter, interval)

//       return () => clearInterval(timer)
//     }
//   }, [isInView, startValue, endValue])

//   return (
//     <motion.div
//       ref={ref}
//       className="text-center p-8 border rounded-lg"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
//       transition={{ delay, duration: 0.5 }}
//     >
//       <div className="text-5xl font-bold text-gray-900">
//         {Math.round(count / displayDivider)}
//         {suffix}
//       </div>
//       <p className="mt-2 text-gray-600">{label}</p>
//     </motion.div>
//   )
// }
