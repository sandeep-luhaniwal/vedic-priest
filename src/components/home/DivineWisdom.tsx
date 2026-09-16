import React from 'react'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import { PANCHANG_DATA } from '../common/Helper'
import { CircleRotate } from '../common/Icon'

const DivineWisdom: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 md:py-14 lg:py-17.5 overflow-hidden">
      <div className="custom-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          {/* Left Content Column */}
          <div className="flex w-full flex-col lg:w-1/2">
            {/* 42px Section Heading */}
            <Heading
              size="default"
              as="h2"
              className="text-black"
            >
              Begin Your Day with Divine
              <br />
              Wisdom.
            </Heading>

            {/* Subtitle / Description */}
            <Paragraph
              size="base"
              color="darkblack"
              className="pt-4 md:pt-5 font-normal max-w-132"
            >
              Explore daily Panchang, auspicious timings, Rahu Kalam, Muhurat, Nakshatra and spiritual insights.
            </Paragraph>
          </div>

          {/* Right Panchang Widget Card */}
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="relative w-full max-w-154.5">
              {/* Figma Frame 1984078162: Warm Glow Shadow Layer (#FA891A 15%, Radius 43.92px, Layer blur 64) */}
              <div
                className="absolute block -inset-4 sm:-inset-6 rounded-[44px] bg-primary-orange/20 blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Card (Frame 618 x 326 Hug, Radius 9.44px, Padding 20px, Shadow [0 0 8px rgba(0,0,0,0.12)]) */}
              <div className="relative  rounded-[10px] bg-white p-6 sm:p-7 border border-black/8 shadow-[0_0_8px_rgba(0,0,0,0.12)]">
                {/* Card Top Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-black/8 pb-4 mb-5">
                  <div className="flex items-baseline">
                    <span className="text-[24px] sm:text-[26px] font-bold text-black leading-none">
                      24
                    </span>
                    <span className="ml-2 text-[14px] sm:text-[15px] font-medium text-black/65">
                      August • Today&apos;s Panchang
                    </span>
                  </div>

                  <span className="text-sm md:text-base font-semibold text-primary-orange">
                    Daily Divine Wisdom
                  </span>
                </div>

                {/* Panchang Timings Data Grid mapped from PANCHANG_DATA */}
                <div className="flex flex-col gap-3.5">
                  {PANCHANG_DATA.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-2 gap-6 sm:gap-10 pb-3.5 last:pb-0"
                    >
                      {/* Left Column Item */}
                      <div className="flex flex-col">
                        <span className="text-sm font-normal text-black/55">
                          {item.leftLabel}
                        </span>
                        <span className="text-sm sm:text-base font-bold text-black mt-0.5">
                          {item.leftValue}
                        </span>
                      </div>

                      {/* Right Column Item */}
                      <div className="flex flex-col">
                        <span className="text-sm font-normal text-black/55">
                          {item.rightLabel}
                        </span>
                        <span className="text-sm sm:text-base font-bold text-black mt-0.5">
                          {item.rightValue}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Right Concentric Ring Dots Icon */}
                <div className="absolute -bottom-5 right-0 xl:-bottom-8 xl:-right-6 flex items-center justify-center pointer-events-none">
                  <CircleRotate />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DivineWisdom
