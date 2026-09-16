import React from 'react'
import Link from 'next/link'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import { SPIRITUAL_SERVICES } from '../common/Helper'
import { renderServiceIcon, ArrowRightIcon } from '../common/Icon'

const EverythingSpiritual: React.FC = () => {
  return (
    <section id="services" className="w-full bg-light-white py-12 md:py-14 lg:py-17.5">
      <div className="custom-container">
        {/* Section Header (42px Heading) */}
        <div className="flex flex-col max-w-2xl">
          <Heading
            size="default"
            as="h2"
            className="text-black font-extrabold"
          >
            Everything Spiritual.
            <br />
            One Place.
          </Heading>

          <Paragraph
            size="lg"
            color="darkblack"
            className="pt-4 md:pt-5 text-black/65 font-normal max-w-lg"
          >
            From sacred ceremonies and astrology to spiritual learning and essentials, My Priest brings your spiritual journey together.
          </Paragraph>
        </div>

        {/* 7 Cards Grid mapped from SPIRITUAL_SERVICES with 44px top gap and 24px grid gap */}
        <div className="pt-8 md:pt-10 lg:pt-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {SPIRITUAL_SERVICES.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between rounded-[10px] bg-white p-5 border border-black/6 shadow-[0_0_8px_rgba(0,0,0,0.06)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top Area: Tag + Icon */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm md:text-base font-semibold text-primary-orange select-none">
                    {item.tag}
                  </span>
                </div>

                {/* Icon */}
                <div className="mt-4 md:mt-5 flex items-center">
                  {renderServiceIcon(item.iconKey)}
                </div>

                {/* Title */}
                <h3 className="mt-4 md:mt-5 text-lg md:text-xl font-bold text-black leading-snug">
                  {item.title}
                </h3>

                {/* Tags / Subtitle */}
                <p className="mt-2 md:mt-3 text-sm md:text-base text-black/60 font-normal leading-normal">
                  {item.tags}
                </p>
              </div>

              {/* Bottom CTA Link */}
              <div className="pt-4 md:pt-5.5">
                <Link
                  href={item.ctaHref}
                  className="inline-flex items-center gap-1.5 text-sm md:text-base font-bold text-dark-orange transition-all duration-200 group-hover:gap-2.5"
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
