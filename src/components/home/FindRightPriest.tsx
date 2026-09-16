import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import { PRIEST_FEATURES } from '../common/Helper'
import { renderPriestFeatureIcon } from '../common/Icon'

const FindRightPriest: React.FC = () => {
  return (
    <section className="w-full bg-white pt-12 md:pt-14 lg:pt-17.5">
      <div className="custom-container">
        <div className="flex flex-col-reverse items-center justify-between gap-10 xl:gap-0 lg:flex-row">
          {/* Left Content Column */}
          <div className="flex w-full flex-col lg:w-1/2 pb-12 md:pb-14 lg:pb-17.5 lg:pe-10">
            {/* 42px Section Heading */}
            <Heading
              size="default"
              as="h2"
              className="text-black"
            >
              Find the Right Priest
              <br />
              for Your Ritual.
            </Heading>

            {/* Subtitle / Paragraph */}
            <Paragraph
              size="base"
              color="darkblack"
              className="pt-4 md:pt-5 text-black/65 font-normal "
            >
              Filter by tradition, language and availability, then book with confidence.
            </Paragraph>

            {/* 4 Features List mapped from PRIEST_FEATURES */}
            <div className="py-8 md:py-10 lg:py-11 flex flex-col gap-4 md:gap-6">
              {PRIEST_FEATURES.map((feature) => (
                <div key={feature.id} className="flex items-start gap-4">
                  {/* Icon Box with soft orange background */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-primary-orange/10">
                    {renderPriestFeatureIcon(feature.iconKey)}
                  </div>

                  {/* Title & Description */}
                  <div className="flex flex-col">
                    <h3 className="text-base md:text-lg font-bold text-black leading-snug">
                      {feature.title}
                    </h3>
                    <p className="mt-2 md:mt-3  font-normal ">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Outline Orange CTA Button */}
            <div>
              <Link
                href="#book-a-priest"
                className="inline-flex items-center justify-center rounded-[55px] border border-primary-orange bg-transparent px-7 py-3 text-[16px] font-medium text-primary-orange transition-all duration-300 hover:bg-primary-orange hover:text-white shadow-sm active:scale-95"
              >
                Book a Priest
              </Link>
            </div>
          </div>

          {/* Right Visual / Ritual Mockup Image */}
          <div className="flex w-full items-end justify-center xl:justify-start lg:w-1/2">
            <div className="relative w-full transition-transform duration-500 hover:scale-[1.01]">
              <Image
                src="/images/webp/ritual-img.webp"
                alt="Find the Right Priest for Your Ritual Mockup"
                width={550}
                height={600}
                priority
                className="h-auto w-full xl:scale-105 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FindRightPriest
