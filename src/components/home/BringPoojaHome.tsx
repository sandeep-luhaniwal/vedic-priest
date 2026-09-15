import React from 'react'
import Link from 'next/link'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'

const BringPoojaHome: React.FC = () => {
  return (
    <section className="w-full bg-[#F55300] py-12 md:py-[70px]">
      <div className="custom-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          {/* Left Content Column */}
          <div className="flex w-full flex-col items-start lg:w-1/2">
            {/* 42px Section Heading */}
            <Heading
              size="default"
              as="h2"
              className="text-white font-extrabold tracking-tight leading-tight"
            >
              Bring the Pooja Home.
            </Heading>

            {/* Subtitle */}
            <Paragraph
              size="base"
              className="mt-4 max-w-lg text-[15px] md:text-[16px] text-white/85 font-normal leading-relaxed"
            >
              Join sacred rituals streamed live from temples across India, or host one for your own family occasion.
            </Paragraph>

            {/* Outline White CTA Button */}
            <div className="mt-8">
              <Link
                href="#live-pooja"
                className="inline-flex items-center justify-center rounded-[55px] border border-white bg-transparent px-6 py-2.5 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#F55300] shadow-sm active:scale-95"
              >
                Join Live Pooja
              </Link>
            </div>
          </div>

          {/* Right Live Video Player Column */}
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="relative w-full max-w-[540px] overflow-hidden rounded-[16px] shadow-2xl transition-transform duration-500 hover:scale-[1.01] bg-black">
              {/* Video Element */}
              <video
                src="/images/video/pooja.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-[320px] sm:h-[360px] md:h-[380px] w-full object-cover"
              />

              {/* Top Left: Live Now Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full bg-red-600/90 px-3 py-1 text-[12px] font-semibold text-white backdrop-blur-sm shadow-md">
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                Live Now
              </div>

              {/* Top Right: Viewers Badge */}
              <div className="absolute top-4 right-4 z-10 rounded-full bg-black/50 px-3 py-1 text-[12px] font-medium text-white backdrop-blur-sm">
                1,204 watching
              </div>

              {/* Bottom Gradient Overlay with Katha Info */}
              <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 pt-12 text-left">
                <h3 className="text-[18px] md:text-[20px] font-bold text-white leading-snug">
                  Satyanarayan Katha
                </h3>
                <p className="mt-1 text-[13px] md:text-[14px] text-white/85 font-normal">
                  Pandit Rajesh Sharma • 124 devotees joined
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BringPoojaHome
