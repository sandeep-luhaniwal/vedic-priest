import React from 'react'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import { INTENTION_STEPS } from '../common/Helper'

const FromIntentionToRitual: React.FC = () => {
  return (
    <section className="w-full bg-[#FCF8F8] py-12 md:py-[70px]">
      <div className="custom-container">
        {/* 42px Section Heading */}
        <div className="text-center">
          <Heading
            size="default"
            as="h2"
            className="text-black font-extrabold tracking-tight leading-tight"
          >
            From Intention to Ritual
          </Heading>
        </div>

        {/* Steps Grid mapped from INTENTION_STEPS with 44px top spacing */}
        <div className="mt-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {INTENTION_STEPS.map((step, index) => {
            const isLast = index === INTENTION_STEPS.length - 1
            return (
              <div key={step.id} className="relative flex flex-col items-center text-center">
                {/* Number Badge and Red/Orange Dashed Connector Line */}
                <div className="relative w-full flex items-center justify-center">
                  {/* Dashed connector line to next step on desktop */}
                  {!isLast && (
                    <div className="hidden lg:block absolute left-1/2 w-full top-1/2 -translate-y-1/2 z-0 pointer-events-none">
                      <div className="w-full border-t-2 border-dashed border-[#F55300]/60" />
                    </div>
                  )}

                  {/* Step Number Badge with Solid Opaque Background & Ring to cleanly block line */}
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#FDEFE4] ring-8 ring-[#FCF8F8] text-[16px] font-bold text-[#FA891A] shadow-sm">
                    {step.id}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="mt-5 text-[20px] font-bold text-black leading-snug">
                  {step.title}
                </h3>

                {/* Step Description */}
                <Paragraph
                  size="base"
                  color="darkblack"
                  className="mt-2 text-[15px] md:text-[16px] text-black/65 font-normal leading-relaxed max-w-[260px] mx-auto text-center"
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
