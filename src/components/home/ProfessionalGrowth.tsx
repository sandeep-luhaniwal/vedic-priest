import React from 'react'
import Link from 'next/link'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import { PROFESSIONAL_GROWTH_DATA } from '../common/Helper'

const ProfessionalGrowth: React.FC = () => {
  return (
    <section className="w-full bg-dark-orange py-12 md:py-14 lg:py-17.5">
      <div className="custom-container">
        {/* Section Header (Centered, 42px Heading, max-w-[593px] subtitle) */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Heading
            size="default"
            as="h2"
            className="text-white"
          >
            Your Knowledge.
            <br />
            Your Service. Your Growth.
          </Heading>

          <Paragraph
            size="base"
            className="pt-4 md:pt-5 text-white/65 font-normal text-center max-w-xl mx-auto"
          >
            My Priest helps spiritual professionals connect with devotees, manage services, accept bookings, and grow their practice.
          </Paragraph>
        </div>

        {/* 4 Cards Grid with 24px (gap-6) spacing and 44px top gap */}
        <div className="pt-8 md:pt-10 lg:pt-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROFESSIONAL_GROWTH_DATA.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-start rounded-lg border border-white/45 bg-white/12 p-5 min-h-35 shadow-[0_0_8px_rgba(0,0,0,0.12)] hover:bg-white/30 transition-all duration-300"
            >
              {/* Card Title: Outfit 700 20px White */}
              <h3 className="text-lg md:text-xl font-bold text-white">
                {item.title}
              </h3>

              {/* Card Description: Outfit 400 16px White */}
              <p className="mt-3 text-sm md:text-base font-normal text-white/65">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button: Join as a Professional (Height: 45px, Radius: 55px, 44px spacing) */}
        <div className="pt-8 md:pt-10 lg:pt-11 flex justify-center">
          <Link
            href="#join-as-professional"
            className="inline-flex h-11.25 items-center justify-center rounded-[55px] border border-white bg-transparent px-6 py-2.5 text-sm md:text-base font-medium text-white transition-all duration-300 hover:bg-white hover:text-primary-orange shadow-sm"
          >
            Join as a Professional
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProfessionalGrowth
