import React from 'react'
import Image from 'next/image'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import { AppleIcon, GooglePlayIcon } from '../common/Icon'
import { HERO_STATS } from '../common/Helper'

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-14 lg:py-16">
      <div className="custom-container relative z-10 flex flex-col-reverse items-center justify-between gap-10 lg:flex-row lg:gap-8">
        {/* Left Content Column */}
        <div className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
          {/* Main Heading (62px Hero Size) */}
          <Heading
            size="hero"
            as="h1"
            className="text-black font-bold tracking-tight"
          >
            One Platform.
            <br />
            <span className="text-[#FA891A]">Every Spiritual Need.</span>
          </Heading>

          {/* Subtitle / Paragraph */}
          <Paragraph
            size="default"
            color="darkblack"
            className="mt-5 max-w-xl text-[16px] md:text-[18px] lg:text-[20px] leading-[140%] text-black/65 font-normal"
          >
            Discover trusted priests, spiritual experts, sacred rituals, learning, and spiritual experiences - all in one place.
          </Paragraph>

          {/* App Store & Google Play Buttons with target="_blank" */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:flex-row lg:justify-start">
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

          {/* Stats Bar */}
          <div className="mt-10 flex w-full max-w-md items-center justify-between border-t border-black/10 pt-7 sm:max-w-lg">
            {HERO_STATS.map((stat, index) => (
              <React.Fragment key={stat.label}>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-[24px] font-bold leading-[100%] tracking-normal text-black font-sans">
                    {stat.value}
                  </span>
                  <span className="mt-2 text-[16px] font-normal leading-[100%] tracking-normal text-black/65 font-sans">
                    {stat.label}
                  </span>
                </div>
                {index < HERO_STATS.length - 1 && (
                  <div className="h-9 w-[1px] bg-black/15" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right Visual / Hero Mockup Image with 360-degree rotating background (20s) */}
        <div className="relative flex w-full items-center justify-center lg:w-1/2">
          <div className="relative flex items-center justify-center w-full max-w-[550px] aspect-square">
            {/* 360 Degree Rotating Hero Background (20s linear infinite) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
              <Image
                src="/images/webp/hero-bg.webp"
                alt="Rotating Sacred Mandala Background"
                width={620}
                height={620}
                priority
                className="w-[105%] h-[105%] max-w-none object-contain animate-spin-20s select-none pointer-events-none"
              />
            </div>

            {/* Front Hero App Mockup Image */}
            <div className="relative z-10 w-full flex items-center justify-center">
              <Image
                src="/images/webp/hero-img.webp"
                alt="VedicPriest App Mockup"
                width={550}
                height={550}
                priority
                className="h-auto w-full max-w-[480px] lg:max-w-[520px] object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero