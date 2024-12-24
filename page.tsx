'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, ChevronDown, ChevronUp } from 'lucide-react'; 
import { signIn } from "next-auth/react";
import Navbar from './Navbar';  // Import Navbar from the pages folder

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqData = [
    { question: "What do we do?", answer: "We proudly empower the vibrant technical community at VJIT Hyderabad by fostering innovation, collaboration, and growth through dynamic workshops, impactful projects, and inspiring events. Together, we cultivate a culture of excellence and creativity." },
    { question: "How does support work?", answer: "Our support team is available via Discord and email to assist with any queries or issues." },
    { question: "How to book tickets?", answer: "Tickets for our events can be booked through our website or mobile app. Look for the 'Events' section." },
    { question: "How to attend events?", answer: "Once you've booked a ticket, you'll receive an email with all the details on how to attend, whether it's online or in-person." },
    { question: "What kind of events do you organize?", answer: "We organize a variety of events including coding workshops, tech talks, hackathons, and networking sessions." }
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="border-b bg-white"> 
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dss%20logo-R8VwfqJHCrweUkR0ODY8tDHENw8x2b.jpeg"
              alt="DSS Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-xl weight-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">Devloper Student Society(DSS)</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 text-black">
            {["Home", "About Us", "Team", "Events", "Resources", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium transition-colors hover:text-blue-500 hover:border-b-2 hover:border-yellow-500"
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <button 
              className="border border-blue-500 hover:bg-blue-500 hover:text-white transition-colors px-4 py-2 rounded-md text-sm font-medium text-black"
            >
              Sign In
            </button>
            <button 
              className="md:hidden" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              title="Toggle Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden border-t p-4 bg-white"> 
            <nav className="flex flex-col space-y-4">
              {["Home", "About Us", "Team", "Events", "Resources", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm font-medium transition-colors hover:text-blue-500"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Add the Navbar component here */}
      <Navbar />

      <main className="flex-1 bg-white"> 
        {/* Hero Section */}
        <section className="container px-10 py-10 md:py-26 bg-white"> 
          <div className="text-center max-w-3xl mx-auto space-y-6">
            < h1 className="text-2xl font-bold tracking-tight sm:text-4xl xl:text-5xl bg-gradient-to-r from-red-500 via-blue-500 to-green-500 bg-clip-text text-transparent">
              Empowering Technical Community at VJIT Hyderabad
            </h1>
            <p className="text-gray-500 md:text-xl">
              A student driven community that aims the best of the community. Join us to explore, innovate, and grow in the tech world.
            </p>
            <button 
              className="mt-4 bg-blue-500 hover:bg-blue-600 transition-colors text-white px-6 py-3 rounded-md text-lg font-medium"
              onClick={() => signIn("google")} // Trigger Google login
            >
              Join Us
            </button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container px-4 py-12 md:py-24 bg-white"> 
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
              Empowering Future Innovators
            </h2>
            <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl">
              At DSS, we believe in the power of technology to transform lives and communities. Our mission is to foster a collaborative environment where students can enhance their skills, connect with industry experts, and work on real-world projects. Together, we inspire creativity and innovation!
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow bg-white"> 
              <div className="text-4xl font-bold text-red-500">40k</div>
              <div className="text-sm text-gray-500">Students each month</div>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow bg-white"> 
              <div className="text-4xl font-bold text-blue-500">120+</div>
              <div className="text-sm text-gray-500">Workshops we held</div>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow bg-white"> 
              <div className="text-4xl font-bold text-green-500">500+</div>
              <div className="text-sm text-gray-500">Active users community</div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container px-4 py-12 md:py-24 bg-white"> 
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
              Transforming Ideas into Reality
            </h2>
            <p className="text-gray-500 md:text-xl">
              Hear from our members who have turned their ideas into successful projects through DSS. Their journeys reflect the passion and innovation fostered within our community.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg border hover:border-yellow-500 bg-white p-6 transition-all hover:shadow-lg">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-black">Kaushik Katikala</div>
                    <div className="text-sm text-gray-500">Student</div>
                  </div>
                </div>
                <p className="mt-4 text-gray-500">
                  Joining DSS has been a transformative experience for me. The hands-on projects and collaborative environment have helped me sharpen my coding skills and build real-world applications. I&apos;ve made lifelong friends and mentors here!
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container px-4 py-12 md:py-24 bg-white"> 
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-black">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border rounded-lg hover:border-blue-500 overflow-hidden bg-white text-black"> 
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="flex justify-between items-center w-full p-4 text-left"
                  >
                    <span className="font-medium">{faq.question}</span>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-blue-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="p-4 bg-white"> 
                      <p className="text-gray-500">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-sm text-gray-500">
              Still need help?{" "}
              <Link href="/contact" className="text-blue-500 hover:text-blue-600 hover:underline">
                Contact Us
              </Link>
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white"> 
        <div className="container px-4 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dss%20logo-R8VwfqJHCrweUkR0ODY8tDHENw8x2b.jpeg"
                  alt="DSS Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-red-500 via-blue-500 to-green-500 bg-clip-text text-transparent">DSS</span>
              </div>
              <p className="text-sm text-gray-500">Want to get updated to early tech</p>
              <button 
                className="mt-4 border border-green-500 hover:bg-green-500 hover:text-white transition-colors px-4 py-2 rounded-md text-sm font-medium text-black"
              >
                Join Us
              </button>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-blue-500">CLUB</h3>
              <ul className="space-y-2 text-sm text-black">
                {["Home", "About Us", "Events", "Resources"].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="hover:text-blue-500 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-green-500">SUPPORT</h3>
              <ul className="space-y-2 text-sm text-black">
                {["GitHub", "Help", "Discord"].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`/${item.toLowerCase()}`}
                      className="hover:text-green-500 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-red-500">LEGAL</h3>
              <ul className="space-y-2 text-sm text-black">
                {["Conditions", "Privacy", "Cookies"].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`/${item.toLowerCase()}`}
                      className="hover:text-red-500 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-gray-500">
            ©2024 DSS - All rights reserved
          </div>
        </div>
      </footer>
    </div>
  )
}