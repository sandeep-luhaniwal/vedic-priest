import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import { PRIEST_FEATURES } from '../common/Helper'
import { renderPriestFeatureIcon } from '../common/Icon'

const FindRightPriest: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 md:py-[70px]">
      <div className="custom-container">
        <div className="flex flex-col-reverse items-center justify-between gap-10 lg:flex-row lg:gap-14">
          {/* Left Content Column */}
          <div className="flex w-full flex-col lg:w-1/2">
            {/* 42px Section Heading */}
            <Heading
              size="default"
              as="h2"
              className="text-black font-extrabold tracking-tight leading-tight"
            >
              Find the Right Priest
              <br />
              for Your Ritual.
            </Heading>

            {/* Subtitle / Paragraph */}
            <Paragraph
              size="base"
              color="darkblack"
              className="mt-3 text-[15px] md:text-[16px] text-black/65 font-normal leading-relaxed"
            >
              Filter by tradition, language and availability, then book with confidence.
            </Paragraph>

            {/* 4 Features List mapped from PRIEST_FEATURES */}
            <div className="mt-8 flex flex-col gap-6 md:gap-7">
              {PRIEST_FEATURES.map((feature) => (
                <div key={feature.id} className="flex items-start gap-4">
                  {/* Icon Box with soft orange background */}
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[8px] bg-[#FA891A]/10">
                    {renderPriestFeatureIcon(feature.iconKey)}
                  </div>

                  {/* Title & Description */}
                  <div className="flex flex-col">
                    <h3 className="text-[17px] md:text-[18px] font-bold text-black leading-snug">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-[14px] md:text-[15px] text-black/65 font-normal leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Outline Orange CTA Button */}
            <div className="mt-8 md:mt-10">
              <Link
                href="#book-a-priest"
                className="inline-flex items-center justify-center rounded-[55px] border border-[#FA891A] bg-transparent px-7 py-3 text-[16px] font-medium text-[#FA891A] transition-all duration-300 hover:bg-[#FA891A] hover:text-white shadow-sm active:scale-95"
              >
                Book a Priest
              </Link>
            </div>
          </div>

          {/* Right Visual / Ritual Mockup Image */}
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="relative w-full max-w-[480px] lg:max-w-[520px] transition-transform duration-500 hover:scale-[1.01]">
              <Image
                src="/images/webp/ritual-img.webp"
                alt="Find the Right Priest for Your Ritual Mockup"
                width={550}
                height={600}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FindRightPriest
