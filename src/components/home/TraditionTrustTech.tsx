import React from 'react'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import { TRADITION_PILLARS } from '../common/Helper'

const TraditionTrustTech: React.FC = () => {
  return (
    <section className="w-full bg-[#F55300] py-10 sm:py-12 md:py-[70px]">
      <div className="custom-container">
        {/* Section Heading (42px) */}
        <div className="text-center mb-8 md:mb-11">
          <Heading
            size="default"
            as="h2"
            className="text-white font-bold tracking-tight leading-tight"
          >
            Tradition. Trust. Technology.
          </Heading>
        </div>

        {/* 4 Pillars Grid mapped from TRADITION_PILLARS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {TRADITION_PILLARS.map((pillar, index) => {
            const isLast = index === TRADITION_PILLARS.length - 1
            return (
              <div
                key={pillar.id}
                className={`flex flex-col p-4 sm:p-5 transition-transform duration-300 hover:-translate-y-1 ${
                  !isLast ? 'lg:border-r lg:border-white/65 lg:pr-6' : ''
                }`}
              >
                {/* Step / Number */}
                <span className="text-[16px] font-semibold text-white/65 leading-none">
                  {pillar.id}
                </span>

                {/* Pillar Title */}
                <h3 className="mt-3 text-[20px] font-bold text-white leading-snug">
                  {pillar.title}
                </h3>

                {/* Pillar Description */}
                <Paragraph
                  size="sm"
                  className="mt-2 text-[16px] font-normal leading-relaxed text-white/85"
                >
                  {pillar.description}
                </Paragraph>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TraditionTrustTech
