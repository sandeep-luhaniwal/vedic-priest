'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import NavBar from '@/src/components/common/NavBar'
import Footer from '@/src/components/common/Footer'
import Heading from '@/src/components/common/Heading'

const DocumentIcon: React.FC = () => (
  <svg
    className="w-4 h-4 text-primary-orange"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z"
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
      Loading Terms and Conditions...
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

const DEFAULT_TERMS = `
  <h2>1. Acceptance of Terms</h2>
  <p>By accessing or using the VedicPriest platform (website, mobile applications, and associated services), you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, please do not use our services.</p>
  
  <h2>2. Description of Services</h2>
  <p>VedicPriest serves as a premier spiritual technology platform connecting devotees with verified priests, certified Vedic astrologers, spiritual tutors, and ritual samagri vendors. VedicPriest facilitates discovery, scheduling, transparent communication, and secure transactions.</p>
  
  <h2>3. Professional Verification & Ritual Conduct</h2>
  <p>All priests and spiritual professionals on our platform undergo a structured 5-step verification process, including identity checks and qualification reviews. Devotees are encouraged to specify their unique lineage traditions during booking.</p>
  
  <h2>4. Bookings, Payments & Cancellations</h2>
  <ul>
    <li><strong>Booking Confirmation:</strong> A booking is confirmed once the initial schedule is accepted and payment is processed securely.</li>
    <li><strong>Pricing Transparency:</strong> All service charges and samagri kit fees are communicated upfront with no hidden surcharges.</li>
    <li><strong>Cancellations:</strong> Cancellations made at least 24 hours prior to the scheduled muhurat time are eligible for refund.</li>
  </ul>
  
  <h2>5. Limitation of Liability</h2>
  <p>Astrological consultations, horoscope analyses, and spiritual guidance are based on traditional Vedic principles and interpretations. They are intended for spiritual enrichment and personal reflection.</p>
`

export default function TermsConditionsPage() {
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    let isMounted = true

    const fetchTerms = async () => {
      try {
        setLoading(true)
        const res = await fetch('/api/cms?type=terms')
        const json = await res.json()

        if (isMounted) {
          if (json.success && json.data) {
            setContent(json.data)
          } else {
            setContent(DEFAULT_TERMS)
          }
        }
      } catch (err) {
        console.error('Error fetching terms:', err)
        if (isMounted) {
          setContent(DEFAULT_TERMS)
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchTerms()

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
              <span className="text-primary-orange font-semibold">Terms and conditions</span>
            </nav>

            {/* Badge / Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0E2] border border-primary-orange/30 text-primary-orange text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
              <DocumentIcon />
              <span>TERMS OF SERVICE</span>
            </div>

            {/* Title & Subtitle Flex Row */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 md:gap-6">
              <Heading size="hero" as="h1" className="text-black font-extrabold tracking-tight">
                Terms and conditions
              </Heading>
              <p className="text-sm sm:text-base text-black/65 max-w-md font-normal leading-relaxed">
                Please read these terms carefully before utilizing our services.
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
