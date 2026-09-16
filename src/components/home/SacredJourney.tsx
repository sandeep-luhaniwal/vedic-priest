import Image from 'next/image'
import React from 'react'
import Heading from '../common/Heading'
import { AppleIcon, GooglePlayIcon } from '../common/Icon'
import Paragraph from '../common/Paragraph'

const SacredJourney: React.FC = () => {
  return (
    <section id="download" className="relative w-full bg-dark-orange py-12 md:py-14 lg:py-17.5 overflow-hidden">
      {/* Decorative Rotating Zodiac Wheels on Left & Right */}
      <div className="absolute -left-32 -bottom-32 sm:-left-40 sm:-bottom-40 md:-left-44 md:-bottom-44 lg:-left-52 lg:-bottom-52 xl:-left-52 xl:-bottom-52 2xl:-left-56 2xl:-bottom-56 w-64 sm:w-80 md:w-96 lg:w-110 pointer-events-none select-none">
        <Image
          src="/images/webp/virago-roate.webp"
          alt="Zodiac Rotation Left"
          width={440}
          height={440}
          className="w-full h-auto object-contain opacity-25 animate-spin-20s"
        />
      </div>

      <div className="absolute -right-32 -top-32 sm:-right-40 sm:-top-40 md:-right-44 md:-top-44 lg:-right-52 lg:-top-52 xl:-right-52 xl:-top-52 2xl:-right-56 2xl:-top-56 w-64 sm:w-80 md:w-96 lg:w-110 pointer-events-none select-none">
        <Image
          src="/images/webp/virago-roate.webp"
          alt="Zodiac Rotation Right"
          width={440}
          height={440}
          className="w-full h-auto object-contain opacity-25 animate-spin-20s"
        />
      </div>
      <div className="custom-container relative z-10">
        {/* Centered Content Block */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          {/* 42px Heading */}
          <Heading
            size="default"
            as="h2"
            className="text-white "
          >
            Begin Your Sacred Journey.
          </Heading>

          {/* Subtitle */}
          <Paragraph
            size="base"
            className="pt-4 md:pt-5 text-white/65 font-normal text-center max-w-md"
          >
            Discover trusted spiritual services, authentic traditions, and meaningful sacred learning with My Priest.
          </Paragraph>

          {/* App Store & Google Play Badges (44px gap) */}
          <div className="pt-8 md:pt-10 lg:pt-11 flex flex-wrap items-center justify-center gap-4">
            {/* App Store Button */}
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-black px-4 py-2.5 text-white transition-all duration-300 hover:bg-black hover:shadow-lg active:scale-95"
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
              className="inline-flex items-center gap-3 rounded-xl bg-black px-4 py-2.5 text-white transition-all duration-300 hover:bg-black hover:shadow-lg active:scale-95"
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
