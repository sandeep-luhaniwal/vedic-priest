import React from 'react'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import { PANCHANG_DATA } from '../common/Helper'

const DivineWisdom: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 md:py-[70px]">
      <div className="custom-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          {/* Left Content Column */}
          <div className="flex w-full flex-col lg:w-1/2">
            {/* 42px Section Heading */}
            <Heading
              size="default"
              as="h2"
              className="text-black font-extrabold tracking-tight leading-[120%]"
            >
              Begin Your Day with Divine
              <br />
              Wisdom.
            </Heading>

            {/* Subtitle / Description */}
            <Paragraph
              size="base"
              color="darkblack"
              className="mt-3 text-[15px] md:text-[16px] text-black/65 font-normal leading-relaxed max-w-[480px]"
            >
              Explore daily Panchang, auspicious timings, Rahu Kalam, Muhurat, Nakshatra and spiritual insights.
            </Paragraph>
          </div>

          {/* Right Panchang Widget Card */}
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="relative w-full max-w-[618px]">
              {/* Figma Frame 1984078162: Warm Glow Shadow Layer (#FA891A 15%, Radius 43.92px, Layer blur 64) */}
              <div
                className="absolute -inset-4 sm:-inset-6 rounded-[44px] bg-[#FA891A]/15 blur-[64px] -z-10 pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Card (Frame 618 x 326 Hug, Radius 9.44px, Padding 20px, Shadow [0 0 8px rgba(0,0,0,0.12)]) */}
              <div className="relative overflow-hidden rounded-[10px] bg-white p-6 sm:p-7 border border-black/[0.08] shadow-[0_0_8px_rgba(0,0,0,0.12)]">
                {/* Card Top Header */}
                <div className="flex items-center justify-between border-b border-black/[0.08] pb-4 mb-5">
                  <div className="flex items-baseline">
                    <span className="text-[24px] sm:text-[26px] font-bold text-black leading-none font-sans">
                      24
                    </span>
                    <span className="ml-2 text-[14px] sm:text-[15px] font-medium text-black/80 font-sans">
                      August • Today&apos;s Panchang
                    </span>
                  </div>

                  <span className="text-[13px] sm:text-[14px] font-semibold text-[#FA891A] font-sans">
                    Daily Divine Wisdom
                  </span>
                </div>

                {/* Panchang Timings Data Grid mapped from PANCHANG_DATA */}
                <div className="flex flex-col gap-3.5">
                  {PANCHANG_DATA.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-2 gap-6 sm:gap-10 border-b border-black/[0.06] pb-3.5 last:border-b-0 last:pb-0"
                    >
                      {/* Left Column Item */}
                      <div className="flex flex-col">
                        <span className="text-[13px] font-normal text-black/55 font-sans">
                          {item.leftLabel}
                        </span>
                        <span className="text-[15px] sm:text-[16px] font-bold text-black mt-0.5 font-sans">
                          {item.leftValue}
                        </span>
                      </div>

                      {/* Right Column Item */}
                      <div className="flex flex-col">
                        <span className="text-[13px] font-normal text-black/55 font-sans">
                          {item.rightLabel}
                        </span>
                        <span className="text-[15px] sm:text-[16px] font-bold text-black mt-0.5 font-sans">
                          {item.rightValue}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Right Concentric Ring Dots Icon */}
                <div className="absolute bottom-5 right-5 flex items-center justify-center pointer-events-none">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#FA891A]">
                    <div className="h-2 w-2 rounded-full bg-[#FA891A]" />
                  </div>
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
