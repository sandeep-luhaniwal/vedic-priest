import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import { ASTROLOGERS_DATA } from '../common/Helper'

const AstrologyGuidance: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-14 lg:py-17.5 bg-[#060714]">
      {/* Background Star Video */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <video
          src="/images/video/star.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60"
        />
        {/* Dark Star Backdrop Overlay */}
        <div className="absolute inset-0 bg-[#060714]/65 backdrop-blur-[1px]" />
      </div>

      {/* Content Container */}
      <div className="custom-container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col">
          {/* 42px Section Heading */}
          <Heading
            size="default"
            as="h2"
            className="text-white"
          >
            Astrology Guidance Written in the Stars.
          </Heading>

          <Paragraph
            size="base"
            className="pt-4 md:pt-5 text-white/65 font-normal"
          >
            Connect with experienced astrologers for personalized guidance and meaningful conversations.
          </Paragraph>
        </div>

        {/* 3 Astrologers Cards Grid with 24px gap */}
        <div className="pt-8 md:pt-10 lg:pt-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ASTROLOGERS_DATA.map((astrologer) => (
            <div
              key={astrologer.id}
              className="flex flex-col justify-between rounded-lg bg-white/5 p-4 lg:p-5 border border-white/25 backdrop-blur-md shadow-[0_0_8px_rgba(0,0,0,0.12)] transition-all duration-300 hover:border-white/40 hover:bg-white/10"
            >
              <div>
                {/* Top Profile Header */}
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/20 shadow-sm">
                    <Image
                      src={astrologer.image}
                      alt={astrologer.name}
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {astrologer.name}
                    </h3>
                    <div className="mt-1 flex items-center gap-1 text-sm md:text-base text-theme-green">
                      <span>✓</span>
                      <span>{astrologer.role}</span>
                    </div>
                  </div>
                </div>

                {/* Status & Pricing Row */}
                <div className="mt-4 md:mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-sm md:text-base font-medium text-white">
                    <span className="h-2 w-2 rounded-full bg-theme-green animate-pulse" />
                    <span>{astrologer.status}</span>
                  </div>

                  <span className="text-sm md:text-base font-bold text-primary-orange">
                    {astrologer.rate}
                  </span>
                </div>
              </div>

              {/* Consult Now Pill Button */}
              <div className="mt-4 md:mt-5">
                <Link
                  href={`#consult-${astrologer.id}`}
                  className="flex h-11.5 w-full items-center justify-center rounded-[55px] border border-white/25 bg-white/25 px-5 py-2.5 text-sm md:text-base font-medium text-white transition-all duration-300 hover:bg-primary-orange hover:border-primary-orange shadow-sm"
                >
                  Consult Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AstrologyGuidance
