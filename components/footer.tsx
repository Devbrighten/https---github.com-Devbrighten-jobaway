"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer>
      {/* Subscribe Section */}
      <div className="pt-12 px-4 pb-0 bg-[#F5F5F0]">
        <div className="mx-auto max-w-[1300px]">
          <div className="bg-[#1B5E20] rounded-lg py-10 px-16">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Subscribe for <span className="text-[#7CFC00]">latest update</span>
              </h2>
              <div className="flex w-full max-w-md mt-6 md:mt-0">
                <div className="bg-white rounded-full flex w-full overflow-hidden">
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="border-0 rounded-none bg-transparent text-black placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 h-14 px-6 text-lg"
                  />
                  <Button className="rounded-full bg-[#7CFC00] hover:bg-[#6BE400] text-black font-semibold px-8 h-14 text-lg">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#F5F5F0] pt-16 pb-10 relative">
        <div className="mx-auto max-w-[1300px] px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="flex flex-col">
              <Link href="/" className="inline-block mb-3">
                <div className="flex items-center gap-2">
                  <div className="relative h-10 w-10">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                        fill="#4CAF50"
                      />
                    </svg>
                  </div>
                  <span className="text-xl font-bold">JobAway</span>
                </div>
              </Link>
              <p className="text-gray-600 mb-4 text-sm">
                Since 2018, JobAway has connecting hospitality workers to thousands of business, private events and
                universities.
              </p>
              <div className="flex gap-3">
                <Link href="#" className="block">
                  <div className="bg-black text-white rounded-lg p-1.5 w-[120px]">
                    <div className="flex flex-col items-center">
                      <div className="text-[10px]">DOWNLOAD ON</div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.5,2H8.5L3,7.5v9L8.5,22h9l5.5-5.5v-9L17.5,2z M12,17.5c-2.75,0-5-5s2.25-5,5-5s5,2.25,5,5S14.75,17.5,12,17.5z" />
                        </svg>
                        <div className="text-sm font-bold">App Store</div>
                      </div>
                    </div>
                  </div>
                </Link>
                {/* <Link href="#" className="block">
                  <div className="bg-black text-white rounded-lg p-1.5 w-[120px]">
                    <div className="flex flex-col items-center">
                      <div className="text-[10px]">GET IT ON</div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>
                        <div className="text-sm font-bold">Google Play</div>
                      </div>
                    </div>
                  </div>
                </Link> */}
              </div>
            </div>

            {/* For Workers */}
            <div className="flex flex-col">
              <h3 className="text-lg font-bold mb-3">For Workers</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/workers/find-work" className="text-gray-600 hover:text-[#4CAF50] text-sm">
                    Find Work
                  </Link>
                </li>
                <li>
                  <Link href="/workers/jobs-dubai" className="text-gray-600 hover:text-[#4CAF50] text-sm">
                    Jobs in Dubai
                  </Link>
                </li>
                <li>
                  <Link href="/workers/jobs-virginia" className="text-gray-600 hover:text-[#4CAF50] text-sm">
                    Jobs in Virginia
                  </Link>
                </li>
                <li>
                  <Link href="/workers/jobs-california" className="text-gray-600 hover:text-[#4CAF50] text-sm">
                    Jobs in California
                  </Link>
                </li>
                <li>
                  <Link href="/workers/jobs-alaska" className="text-gray-600 hover:text-[#4CAF50] text-sm">
                    Jobs in Alaska
                  </Link>
                </li>
              </ul>
            </div>

            {/* For Business */}
            <div className="flex flex-col">
              <h3 className="text-lg font-bold mb-3">For Business</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/business/merchandising" className="text-gray-600 hover:text-[#4CAF50] text-sm">
                    Merchandising
                  </Link>
                </li>
                <li>
                  <Link href="/business/hospitality-staff" className="text-gray-600 hover:text-[#4CAF50] text-sm">
                    Hospitality Staff
                  </Link>
                </li>
                <li>
                  <Link href="/business/general-labour" className="text-gray-600 hover:text-[#4CAF50] text-sm">
                    General Labour
                  </Link>
                </li>
                <li>
                  <Link href="/business/car-drivers" className="text-gray-600 hover:text-[#4CAF50] text-sm">
                    Car Drivers
                  </Link>
                </li>
                <li>
                  <Link href="/business/bus-driver" className="text-gray-600 hover:text-[#4CAF50] text-sm">
                    Bus Driver
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col">
              <h3 className="text-lg font-bold mb-3">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/company/about-us" className="text-gray-600 hover:text-[#4CAF50] text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/company/career" className="text-gray-600 hover:text-[#4CAF50] text-sm">
                    Career
                  </Link>
                </li>
                <li>
                  <Link href="/company/partners" className="text-gray-600 hover:text-[#4CAF50] text-sm">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="/company/blog" className="text-gray-600 hover:text-[#4CAF50] text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/company/clients" className="text-gray-600 hover:text-[#4CAF50] text-sm">
                    Clients
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help & Support */}
            <div className="flex flex-col">
              <h3 className="text-lg font-bold mb-3">Help & Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/support/contact-us" className="text-gray-600 hover:text-[#4CAF50] text-sm">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/support/faq" className="text-gray-600 hover:text-[#4CAF50] text-sm">
                    General FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/support/center" className="text-gray-600 hover:text-[#4CAF50] text-sm">
                    Support Center
                  </Link>
                </li>
                <li>
                  <Link href="/support/privacy-policy" className="text-gray-600 hover:text-[#4CAF50] text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/support/terms" className="text-gray-600 hover:text-[#4CAF50] text-sm">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#7CFC00] hover:bg-[#6BE400] w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
        >
          <ChevronUp className="h-6 w-6 text-black" />
        </button>
      </div>
    </footer>
  )
}


