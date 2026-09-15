import React from 'react'
import Link from 'next/link'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import { AppleIcon, GooglePlayIcon } from '../common/Icon'

const ZodiacWheel: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
    aria-hidden="true"
  >
    <circle cx="200" cy="200" r="190" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="4 4" />
    <circle cx="200" cy="200" r="170" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" />
    <circle cx="200" cy="200" r="140" stroke="white" strokeWidth="1" strokeOpacity="0.35" />
    <circle cx="200" cy="200" r="100" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="6 3" />
    <circle cx="200" cy="200" r="60" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
    <circle cx="200" cy="200" r="30" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
    <circle cx="200" cy="200" r="8" fill="white" fillOpacity="0.6" />
    {/* 12 Astrological Rays */}
    {Array.from({ length: 12 }).map((_, i) => {
      const angle = (i * 30 * Math.PI) / 180
      const x1 = 200 + 60 * Math.cos(angle)
      const y1 = 200 + 60 * Math.sin(angle)
      const x2 = 200 + 170 * Math.cos(angle)
      const y2 = 200 + 170 * Math.sin(angle)
      return (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="white"
          strokeWidth="1"
          strokeOpacity="0.3"
        />
      )
    })}
    {/* Sunburst Rays from center */}
    {Array.from({ length: 24 }).map((_, i) => {
      const angle = (i * 15 * Math.PI) / 180
      const x1 = 200 + 32 * Math.cos(angle)
      const y1 = 200 + 32 * Math.sin(angle)
      const x2 = 200 + 52 * Math.cos(angle)
      const y2 = 200 + 52 * Math.sin(angle)
      return (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="white"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
      )
    })}
    {/* Outer ticks */}
    {Array.from({ length: 36 }).map((_, i) => {
      const angle = (i * 10 * Math.PI) / 180
      const x1 = 200 + 170 * Math.cos(angle)
      const y1 = 200 + 170 * Math.sin(angle)
      const x2 = 200 + 180 * Math.cos(angle)
      const y2 = 200 + 180 * Math.sin(angle)
      return (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="white"
          strokeWidth="1"
          strokeOpacity="0.3"
        />
      )
    })}
  </svg>
)

const SacredJourney: React.FC = () => {
  return (
    <section className="relative w-full bg-[#F55300] py-12 md:py-[70px] overflow-hidden">
      {/* Decorative Zodiac Wheels on Left & Right */}
      <ZodiacWheel className="absolute -left-28 sm:-left-20 top-1/2 -translate-y-1/2 w-[340px] sm:w-[440px] h-[340px] sm:h-[440px] opacity-25 pointer-events-none" />
      <ZodiacWheel className="absolute -right-28 sm:-right-20 top-1/2 -translate-y-1/2 w-[340px] sm:w-[440px] h-[340px] sm:h-[440px] opacity-25 pointer-events-none" />

      <div className="custom-container relative z-10">
        {/* Centered Content Block */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          {/* 42px Heading */}
          <Heading
            size="default"
            as="h2"
            className="text-white font-extrabold tracking-tight leading-tight"
          >
            Begin Your Sacred Journey.
          </Heading>

          {/* Subtitle */}
          <Paragraph
            size="base"
            className="mt-3 text-[15px] md:text-[16px] text-white/90 font-normal leading-relaxed text-center max-w-xl"
          >
            Discover trusted spiritual services, authentic traditions, and meaningful sacred learning with My Priest.
          </Paragraph>

          {/* App Store & Google Play Badges (44px gap) */}
          <div className="mt-[44px] flex flex-wrap items-center justify-center gap-4">
            {/* App Store Button */}
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-black px-4 py-2.5 text-white transition-all duration-300 hover:bg-[#FA891A] hover:shadow-lg active:scale-95"
            >
              <AppleIcon className="h-7 w-7 fill-current" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase leading-none tracking-wide text-white/80">
                  Download on the
                </span>
                <span className="text-[16px] font-semibold leading-tight text-white">
                  App Store
                </span>
              </div>
            </a>

            {/* Google Play Button */}
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-black px-4 py-2.5 text-white transition-all duration-300 hover:bg-[#FA891A] hover:shadow-lg active:scale-95"
            >
              <GooglePlayIcon className="h-7 w-7 fill-current" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase leading-none tracking-wide text-white/80">
                  GET IT ON
                </span>
                <span className="text-[16px] font-semibold leading-tight text-white">
                  Google Play
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SacredJourney
