import React from 'react'
import Image from 'next/image'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import { LEARN_EXPERIENCE_DATA } from '../common/Helper'

const LearnExperience: React.FC = () => {
  return (
    <section className="w-full bg-light-white py-12 md:py-14 lg:py-17.5">
      <div className="custom-container">
        {/* Section Header (Centered, 42px Heading) */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Heading
            size="default"
            as="h2"
            className="text-black"
          >
            Learn. Listen. Experience.
          </Heading>

          <Paragraph
            size="base"
            color="darkblack"
            className="pt-4 md:pt-5 max-w-lg font-normal text-center"
          >
            Explore devotional music, spiritual traditions, meditation, and sacred learning from experienced teachers.
          </Paragraph>
        </div>

        {/* 3 Cards Grid with 44px top gap and 24px card gap */}
        <div className="pt-8 md:pt-10 lg:pt-11 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {LEARN_EXPERIENCE_DATA.map((item) => (
            <div
              key={item.id}
              className="group relative h-60 md:h-64 lg:h-68 w-full rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
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
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

              {/* Card Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 flex flex-col justify-end text-left z-10">
                <h3 className="text-white font-bold text-lg md:text-xl tracking-normal">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-white/80 font-normal leading-tight">
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
