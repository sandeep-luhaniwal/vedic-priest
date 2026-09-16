import React from 'react'
import Link from 'next/link'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'

const BringPoojaHome: React.FC = () => {
  return (
    <section className="w-full bg-dark-orange py-12 md:py-14 lg:py-17.5">
      <div className="custom-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          {/* Left Content Column */}
          <div className="flex w-full flex-col items-start lg:w-1/2">
            {/* 42px Section Heading */}
            <Heading
              size="default"
              as="h2"
              className="text-white"
            >
              Bring the Pooja Home.
            </Heading>

            {/* Subtitle */}
            <Paragraph
              size="base"
              className="pt-4 md:pt-5 max-w-md text-white/65 font-normal"
            >
              Join sacred rituals streamed live from temples across India, or host one for your own family occasion.
            </Paragraph>

            {/* Outline White CTA Button */}
            <div className="mt-8">
              <Link
                href="#live-pooja"
                className="inline-flex items-center justify-center rounded-[55px] border border-white bg-transparent px-6 py-2.5 text-sm md:text-base font-medium text-white transition-all duration-300 hover:bg-white hover:text-dark-orange shadow-sm active:scale-95"
              >
                Join Live Pooja
              </Link>
            </div>
          </div>

          {/* Right Live Video Player Column */}
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="relative w-full overflow-hidden rounded-lg shadow-2xl transition-transform duration-500 bg-black">
              {/* Video Element */}
              <video
                src="/images/video/pooja.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-80 sm:h-90 md:h-95 w-full object-cover"
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
              <div className="absolute bottom-0 left-0 right-0 z-10 bg-linear-to-t from-black/90 via-black/50 to-transparent p-5 pt-20 text-left">
                <h3 className="text-lg md:text-xl font-bold text-white">
                  Satyanarayan Katha
                </h3>
                <p className="mt-1 text-sm md:text-base text-white/85 font-normal">
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
