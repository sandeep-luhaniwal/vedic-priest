import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import { ASTROLOGERS_DATA } from '../common/Helper'

const AstrologyGuidance: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden py-14 md:py-[70px] bg-[#060714]">
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
        <div className="flex flex-col max-w-2xl">
          {/* 42px Section Heading */}
          <Heading
            size="default"
            as="h2"
            className="text-white font-extrabold tracking-tight leading-tight"
          >
            Astrology Guidance Written in the Stars.
          </Heading>

          <Paragraph
            size="base"
            className="mt-3 text-[15px] md:text-[16px] text-white/70 font-normal leading-relaxed"
          >
            Connect with experienced astrologers for personalized guidance and meaningful conversations.
          </Paragraph>
        </div>

        {/* 3 Astrologers Cards Grid with 24px gap */}
        <div className="mt-11 grid grid-cols-1 md:grid-cols-3 gap-6">
          {ASTROLOGERS_DATA.map((astrologer) => (
            <div
              key={astrologer.id}
              className="flex flex-col justify-between rounded-[14px] bg-white/[0.05] p-5 border border-white/25 backdrop-blur-md shadow-[0_0_8px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/[0.08]"
            >
              <div>
                {/* Top Profile Header */}
                <div className="flex items-center gap-3.5">
                  <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full border border-white/20 shadow-sm">
                    <Image
                      src={astrologer.image}
                      alt={astrologer.name}
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-[18px] md:text-[20px] font-bold text-white leading-tight">
                      {astrologer.name}
                    </h3>
                    <div className="mt-1 flex items-center gap-1 text-[13px] md:text-[14px] font-medium text-[#3DC244]">
                      <span>✓</span>
                      <span>{astrologer.role}</span>
                    </div>
                  </div>
                </div>

                {/* Status & Pricing Row */}
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[15px] font-medium text-white">
                    <span className="h-2 w-2 rounded-full bg-[#3DC244] animate-pulse" />
                    <span>{astrologer.status}</span>
                  </div>

                  <span className="text-[18px] md:text-[20px] font-bold text-[#FA891A]">
                    {astrologer.rate}
                  </span>
                </div>
              </div>

              {/* Consult Now Pill Button */}
              <div className="mt-5">
                <Link
                  href={`#consult-${astrologer.id}`}
                  className="flex h-[45px] w-full items-center justify-center rounded-[55px] border border-white/25 bg-white/[0.25] px-5 py-2.5 text-[15px] font-medium text-white transition-all duration-300 hover:bg-[#FA891A] hover:border-[#FA891A] active:scale-[0.99] shadow-sm"
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
