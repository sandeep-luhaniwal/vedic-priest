import React from 'react'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import { VERIFICATION_PROCESS_STEPS } from '../common/Helper'
import { renderVerificationIcon } from '../common/Icon'

const TraditionVerification: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 md:py-14 lg:py-17.5">
      <div className="custom-container">
        {/* Section Header (Centered, 42px Heading, 44px gap to flow) */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Heading
            size="default"
            as="h2"
            className="text-black "
          >
            Tradition You Can Trust
          </Heading>

          <Paragraph
            size="base"
            color="darkblack"
            className="pt-4 md:pt-5 font-normal text-center max-w-md mx-auto"
          >
            A structured verification experience helps bring trusted professionals and devotees together.
          </Paragraph>
        </div>

        {/* 5 Steps Verification Flow with Connecting Arrows */}
        <div className="pt-8 md:pt-10 lg:pt-11 flex flex-wrap lg:flex-nowrap items-center justify-center md:justify-between gap-y-8 gap-x-4">
          {VERIFICATION_PROCESS_STEPS.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Step Item */}
              <div className="flex flex-col items-center text-center min-w-30 max-w-35 group transition-all duration-300 hover:-translate-y-1">
                {/* Step Icon Badge */}
                <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {renderVerificationIcon(step.iconKey)}
                </div>

                {/* Step Label */}
                <span className="mt-3.5 text-[14px] sm:text-[15px] font-bold text-black leading-tight text-center">
                  {step.title}
                </span>
              </div>

              {/* Connecting Orange Arrow (Between Steps) */}
              {index < VERIFICATION_PROCESS_STEPS.length - 1 && (
                <div className="hidden md:flex items-center justify-center shrink-0 -mt-6">
                  <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6H21M16.5 1C16.5 1 17.885 3.833 21 6C17.885 8.167 16.5 11 16.5 11" stroke="#FA891A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TraditionVerification
