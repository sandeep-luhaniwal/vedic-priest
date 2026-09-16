'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import NavBar from '@/src/components/common/NavBar'
import Footer from '@/src/components/common/Footer'
import Heading from '@/src/components/common/Heading'

const ShieldIcon: React.FC = () => (
  <svg
    className="w-4 h-4 text-primary-orange"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
      stroke="#FA891A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const LoadingSkeleton: React.FC = () => (
  <div className="flex flex-col items-center justify-center py-12">
    {/* Animated Spinner with Vedic orange glow */}
    <div className="relative mb-6">
      <div className="h-12 w-12 rounded-full border-4 border-primary-orange/20 border-t-primary-orange animate-spin" />
    </div>
    <p className="text-sm font-medium text-black/60 mb-8 animate-pulse">
      Loading Privacy Policy...
    </p>

    {/* Skeleton placeholder bars */}
    <div className="w-full space-y-5 animate-pulse">
      <div className="h-6 bg-black/10 rounded-md w-2/5" />
      <div className="space-y-2.5">
        <div className="h-4 bg-black/8 rounded w-full" />
        <div className="h-4 bg-black/8 rounded w-11/12" />
        <div className="h-4 bg-black/8 rounded w-4/5" />
      </div>

      <div className="h-6 bg-black/10 rounded-md w-1/3 pt-4" />
      <div className="space-y-2.5">
        <div className="h-4 bg-black/8 rounded w-full" />
        <div className="h-4 bg-black/8 rounded w-5/6" />
        <div className="h-4 bg-black/8 rounded w-3/4" />
      </div>

      <div className="h-6 bg-black/10 rounded-md w-2/5 pt-4" />
      <div className="space-y-2.5">
        <div className="h-4 bg-black/8 rounded w-full" />
        <div className="h-4 bg-black/8 rounded w-11/12" />
      </div>
    </div>
  </div>
)

const DEFAULT_PRIVACY = `
  <h2>1. Information We Collect</h2>
  <p>We collect personal information that you provide when registering, booking ritual services, requesting astrological charts, or contacting customer support. This may include your name, email address, phone number, location, birth chart details (for astrological services), and payment details.</p>
  
  <h2>2. How We Use Your Information</h2>
  <ul>
    <li>To facilitate seamless bookings between devotees and verified priests/astrologers.</li>
    <li>To generate personalized daily Panchang, auspicious muhurat timings, and spiritual insights.</li>
    <li>To process payments securely through encrypted payment gateways.</li>
    <li>To verify credentials of spiritual professionals and ensure platform trust and safety.</li>
  </ul>
  
  <h2>3. Sacred Data Confidentiality & Protection</h2>
  <p>We treat all personal birth data, family gotra details, astrological charts, and private ceremony recordings with the strictest confidentiality. We do not sell, rent, or trade your personal spiritual details to third-party advertisers.</p>
  
  <h2>4. Security Measures</h2>
  <p>VedicPriest implements industry-standard SSL encryption, secure data storage, and strict access controls to safeguard your personal data from unauthorized access, alteration, or disclosure.</p>
`

export default function PrivacyPolicyPage() {
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    let isMounted = true

    const fetchPrivacy = async () => {
      try {
        setLoading(true)
        const res = await fetch('/api/cms?type=privacy')
        const json = await res.json()

        if (isMounted) {
          if (json.success && json.data) {
            setContent(json.data)
          } else {
            setContent(DEFAULT_PRIVACY)
          }
        }
      } catch (err) {
        console.error('Error fetching privacy policy:', err)
        if (isMounted) {
          setContent(DEFAULT_PRIVACY)
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchPrivacy()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-light-white">
      <NavBar />

      <main className="flex-1">
        {/* Hero Header Section */}
        <section className="relative w-full bg-linear-to-b from-[#FFF5EC] via-[#FFF9F5] to-light-white pt-8 pb-10 md:pt-12 md:pb-14 border-b border-black/5 overflow-hidden">
          <div className="custom-container">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-black/60 mb-5 font-medium">
              <Link href="/" className="hover:text-primary-orange transition-colors">
                Home
              </Link>
              <span className="text-black/35">/</span>
              <span className="text-primary-orange font-semibold">Privacy policy</span>
            </nav>

            {/* Badge / Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0E2] border border-primary-orange/30 text-primary-orange text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
              <ShieldIcon />
              <span>PRIVACY POLICY</span>
            </div>

            {/* Title & Subtitle Flex Row */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 md:gap-6">
              <Heading size="hero" as="h1" className="text-black font-extrabold tracking-tight">
                Privacy policy
              </Heading>
              <p className="text-sm sm:text-base text-black/65 max-w-md font-normal leading-relaxed">
                Please read our privacy policy carefully before utilizing our services.
              </p>
            </div>
          </div>
        </section>

        {/* Content Card Section with dynamic loading */}
        <section className="py-10 md:py-14 lg:py-16">
          <div className="custom-container">
            <div className="rounded-[20px] bg-white p-6 sm:p-10 md:p-14 border border-black/8 shadow-[0_0_15px_rgba(0,0,0,0.04)] min-h-[320px]">
              {loading ? (
                <LoadingSkeleton />
              ) : (
                <div
                  className="cms-content"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
