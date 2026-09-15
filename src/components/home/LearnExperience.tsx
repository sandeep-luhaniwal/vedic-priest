import React from 'react'
import Image from 'next/image'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import { LEARN_EXPERIENCE_DATA } from '../common/Helper'

const LearnExperience: React.FC = () => {
  return (
    <section className="w-full bg-[#FCF8F8] py-12 md:py-[70px]">
      <div className="custom-container">
        {/* Section Header (Centered, 42px Heading) */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Heading
            size="default"
            as="h2"
            className="text-black font-extrabold tracking-tight leading-tight"
          >
            Learn. Listen. Experience.
          </Heading>

          <Paragraph
            size="base"
            color="darkblack"
            className="mt-3 max-w-2xl text-[15px] md:text-[16px] text-black/65 font-normal leading-relaxed text-center"
          >
            Explore devotional music, spiritual traditions, meditation, and sacred learning from experienced teachers.
          </Paragraph>
        </div>

        {/* 3 Cards Grid with 44px top gap and 24px card gap */}
        <div className="mt-[44px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {LEARN_EXPERIENCE_DATA.map((item) => (
            <div
              key={item.id}
              className="group relative h-[240px] sm:h-[260px] lg:h-[280px] w-full rounded-[14px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-105"
              />

              {/* Bottom Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

              {/* Card Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 flex flex-col justify-end text-left z-10">
                <h3 className="text-white font-bold text-[18px] md:text-[20px] leading-snug tracking-normal">
                  {item.title}
                </h3>
                <p className="mt-1 text-[13px] md:text-[14px] text-white/80 font-normal leading-tight">
                  {item.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LearnExperience
