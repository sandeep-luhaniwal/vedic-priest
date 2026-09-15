'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import Heading from '../common/Heading'
import { TESTIMONIALS_DATA } from '../common/Helper'

const StarIcon: React.FC = () => (
  <svg
    className="w-4 h-4 text-[#FA891A] fill-[#FA891A]"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const MomentsThatMatter: React.FC = () => {
  return (
    <section className="w-full bg-[#FCF8F8] py-12 md:py-[70px] overflow-hidden">
      <div className="custom-container">
        {/* Section Heading (42px) */}
        <div className="flex flex-col">
          <Heading
            size="default"
            as="h2"
            className="text-black font-extrabold tracking-tight leading-tight"
          >
            Moments That Matter
          </Heading>
        </div>

        {/* Swiper Slider Container (44px gap) */}
        <div className="mt-[44px]">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="pb-12"
          >
            {TESTIMONIALS_DATA.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="flex h-full flex-col justify-between rounded-[10px] bg-white p-6 sm:p-7 border border-black/[0.06] shadow-[0_0_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-all duration-300 min-h-[190px]">
                  {/* Testimonial Quote */}
                  <p className="text-[14px] sm:text-[15px] text-black/75 font-normal leading-relaxed">
                    “{item.quote}”
                  </p>

                  {/* Author Info & Star Rating */}
                  <div className="mt-6 flex items-center justify-between border-t border-black/[0.04] pt-4">
                    {/* Author Profile */}
                    <div className="flex items-center gap-3">
                      <div className="relative h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 overflow-hidden rounded-full ring-1 ring-black/10">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          className="object-cover object-center"
                          sizes="40px"
                        />
                      </div>
                      <span className="text-[14px] sm:text-[15px] font-bold text-black font-sans">
                        {item.name}
                      </span>
                    </div>

                    {/* 5 Stars */}
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: item.rating }).map((_, idx) => (
                        <StarIcon key={idx} />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default MomentsThatMatter
