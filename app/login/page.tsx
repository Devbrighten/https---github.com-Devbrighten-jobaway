"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { motion } from "framer-motion"

export default function LoginPage() {
  const [mounted, setMounted] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log({ email, password, rememberMe })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F8FAF5] py-16">
      <div className="container px-4 mx-auto">
        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">Login</h1>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-[#4CAF50]">
                Home
              </Link>
              <span>-</span>
              <span>Login</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-12"
                />
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password <span className="text-red-500">*</span>
                  </label>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full h-12"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 rounded-full bg-[#7CFC00] hover:bg-[#6BE400] text-black font-semibold"
              >
                Log In
              </Button>

              <div className="text-center my-4 text-sm text-gray-500">Or</div>

              <div className="space-y-3">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-12 rounded-full flex items-center justify-center gap-2"
                >
                  <Image src="/google-icon.png" alt="Google" width={20} height={20} />
                  Continue with Google
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-12 rounded-full flex items-center justify-center gap-2"
                >
                  <Image src="/facebook-icon.png" alt="Facebook" width={20} height={20} />
                  Continue with Facebook
                </Button>
              </div>

              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    className="border-gray-300"
                  />
                  <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                    Remember me
                  </label>
                </div>

                <Link href="/forgot-password" className="text-sm text-[#4CAF50] hover:underline">
                  Forgot password?
                </Link>
              </div>

              <div className="text-center mt-6 text-sm">
                <span className="text-gray-600">Not registered yet?</span>{" "}
                <Link href="/signup" className="text-[#4CAF50] hover:underline font-medium">
                  Create an Account
                </Link>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
