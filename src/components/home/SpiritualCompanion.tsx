'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import { APP_SCREENS_SLIDER_DATA } from '../common/Helper'

const SpiritualCompanion: React.FC = () => {
  // Duplicate array to ensure seamless infinite looping when slidesPerView is high
  const slides = [...APP_SCREENS_SLIDER_DATA, ...APP_SCREENS_SLIDER_DATA]

  return (
    <section className="w-full bg-white py-12 md:py-14 lg:py-17.5 overflow-hidden">
      {/* 1600px max-width container as instructed */}
      <div className="w-full max-w-[1600px] mx-auto px-4">
        {/* Section Header (Centered, 42px Heading) */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Heading
            size="default"
            as="h2"
            className="text-black "
          >
            Your Spiritual Companion,
            <br />
            Wherever You Go.
          </Heading>

          <Paragraph
            size="base"
            color="darkblack"
            className="pt-4 md:pt-5 font-normal text-center max-w-md mx-auto"
          >
            A structured verification experience helps bring trusted professionals and devotees together.
          </Paragraph>
        </div>

        {/* 1600px Swiper Slider (Centered Slide 1, No dots, Proper Autoplay, No hover zoom) */}
        <div className="pt-8 md:pt-10 lg:pt-11 w-full">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1.8}
            centeredSlides={true}
            initialSlide={0}
            loop={true}
            speed={800}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.6,
                spaceBetween: 16,
                centeredSlides: true,
              },
              480: {
                slidesPerView: 2.2,
                spaceBetween: 20,
                centeredSlides: true,
              },
              640: {
                slidesPerView: 3.2,
                spaceBetween: 20,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 3.8,
                spaceBetween: 24,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 4.8,
                spaceBetween: 24,
                centeredSlides: true,
              },
              1280: {
                slidesPerView: 5.6,
                spaceBetween: 24,
                centeredSlides: true,
              },
            }}
            className="w-full py-4 cursor-grab active:cursor-grabbing"
          >
            {slides.map((screen, index) => (
              <SwiperSlide key={`${screen.id}-${index}`} className="flex justify-center items-center">
                <div className="relative w-full max-w-61.25">
                  <Image
                    src={screen.image}
                    alt={screen.title}
                    width={260}
                    height={530}
                    priority={index < 4}
                    className="w-full h-auto object-contain drop-shadow-md rounded-[28px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default SpiritualCompanion
