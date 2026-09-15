import React from 'react'
import Link from 'next/link'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import { SPIRITUAL_SERVICES } from '../common/Helper'
import { renderServiceIcon, ArrowRightIcon } from '../common/Icon'

const EverythingSpiritual: React.FC = () => {
  return (
    <section className="w-full bg-[#FCF8F8] py-14 md:py-20">
      <div className="custom-container">
        {/* Section Header (42px Heading) */}
        <div className="flex flex-col max-w-2xl">
          <Heading
            size="default"
            as="h2"
            className="text-black font-extrabold tracking-tight leading-tight"
          >
            Everything Spiritual.
            <br />
            One Place.
          </Heading>

          <Paragraph
            size="base"
            color="darkblack"
            className="mt-3 text-[15px] md:text-[16px] text-black/65 font-normal leading-relaxed"
          >
            From sacred ceremonies and astrology to spiritual learning and essentials, My Priest brings your spiritual journey together.
          </Paragraph>
        </div>

        {/* 7 Cards Grid mapped from SPIRITUAL_SERVICES with 44px top gap and 24px grid gap */}
        <div className="mt-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPIRITUAL_SERVICES.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between min-h-[235px] rounded-[10px] bg-white p-5 border border-black/[0.06] shadow-[0_0_8px_rgba(0,0,0,0.06)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top Area: Tag + Icon */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] md:text-[14px] font-semibold text-[#FA891A] select-none">
                    {item.tag}
                  </span>
                </div>

                {/* Icon */}
                <div className="mt-3 flex items-center">
                  {renderServiceIcon(item.iconKey)}
                </div>

                {/* Title */}
                <h3 className="mt-3 text-[18px] md:text-[20px] font-bold text-black leading-snug">
                  {item.title}
                </h3>

                {/* Tags / Subtitle */}
                <p className="mt-1 text-[14px] md:text-[15px] text-black/60 font-normal leading-normal">
                  {item.tags}
                </p>
              </div>

              {/* Bottom CTA Link */}
              <div className="mt-4 pt-2">
                <Link
                  href={item.ctaHref}
                  className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#FA891A] transition-all duration-200 group-hover:gap-2.5"
                >
                  <span>{item.ctaText}</span>
                  <ArrowRightIcon className="w-4 h-4 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EverythingSpiritual
