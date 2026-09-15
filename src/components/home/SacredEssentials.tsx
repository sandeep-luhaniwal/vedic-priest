import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import { SACRED_ESSENTIALS_DATA } from '../common/Helper'

const SacredEssentials: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 md:py-[70px]">
      <div className="custom-container">
        {/* Section Header (42px Heading, 54px gap to grid) */}
        <div className="flex flex-col max-w-3xl">
          <Heading
            size="default"
            as="h2"
            className="text-black font-extrabold tracking-tight leading-tight"
          >
            Bring Sacred Essentials Home
          </Heading>

          <Paragraph
            size="base"
            color="darkblack"
            className="mt-3 text-[15px] md:text-[16px] text-black/65 font-normal leading-relaxed max-w-2xl"
          >
            Discover pooja samagri, spiritual products, and ritual essentials from trusted vendors.
          </Paragraph>
        </div>

        {/* 5 Cards Grid with 54px top gap, 9.44px radius, 0 0 8px rgba(0,0,0,0.12) shadow */}
        <div className="mt-[44px] md:mt-[54px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
          {SACRED_ESSENTIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col rounded-[10px] overflow-hidden bg-white shadow-[0_0_8px_rgba(0,0,0,0.12)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative w-full h-[140px] sm:h-[155px] md:h-[165px] bg-[#FAFAFA] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Bottom Label Box (Frame 1000004247: Radius 9.44px, Padding 20px, Gap 20px, Shadow [0 0 8px rgba(0,0,0,0.12)]) */}
              <div className="flex min-h-[63px] items-center px-4 py-3 sm:px-5 sm:py-3.5 bg-white">
                <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-bold text-black leading-snug tracking-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button: Explore Shop */}
        <div className="mt-10 md:mt-12 flex justify-center">
          <Link
            href="#shop"
            className="inline-flex items-center justify-center rounded-full border border-[#FA891A] text-[#FA891A] px-7 py-2 text-[14px] sm:text-[15px] font-semibold hover:bg-[#FA891A] hover:text-white transition-all duration-300 shadow-sm"
          >
            Explore Shop
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SacredEssentials
