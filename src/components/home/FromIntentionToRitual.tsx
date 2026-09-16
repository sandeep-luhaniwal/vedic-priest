import React from 'react'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import { INTENTION_STEPS } from '../common/Helper'

const FromIntentionToRitual: React.FC = () => {
  return (
    <section className="w-full bg-light-white py-12 md:py-14 lg:py-17.5">
      <div className="custom-container">
        {/* 42px Section Heading */}
        <div className="text-center">
          <Heading
            size="default"
            as="h2"
            className="text-black"
          >
            From Intention to Ritual
          </Heading>
        </div>

        {/* Steps Grid mapped from INTENTION_STEPS with 44px top spacing */}
        <div className="pt-8 md:pt-10 lg:pt-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {INTENTION_STEPS.map((step, index) => {
            const isLast = index === INTENTION_STEPS.length - 1
            return (
              <div key={step.id} className="relative flex flex-col items-center text-center">
                {/* Number Badge and Red/Orange Dashed Connector Line */}
                <div className="relative w-full flex items-center justify-center">
                  {/* Dashed connector line to next step on desktop */}
                  {!isLast && (
                    <div className="hidden lg:block absolute left-full w-1/2 top-1/2 -translate-1/2 z-0 pointer-events-none">
                      <div className="w-full border-t-2 border-dashed border-dark-orange/60" />
                    </div>
                  )}

                  {/* Step Number Badge with Solid Opaque Background & Ring to cleanly block line */}
                  <div className="relative z-10 flex h-11 w-11 items-center justify-center bg-[#FDEFE4] ring-8 ring-light-white text-[16px] font-bold text-primary-orange shadow-sm">
                    {step.id}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="pt-8 md:pt-10 lg:pt-11 text-lg md:text-xl font-bold text-black leading-snug">
                  {step.title}
                </h3>

                {/* Step Description */}
                <Paragraph
                  size="base"
                  color="darkblack"
                  className="pt-2 md:pt-3 text-black/65 font-normal  max-w-65 mx-auto text-center"
                >
                  {step.description}
                </Paragraph>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FromIntentionToRitual
