import React from 'react'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import { VERIFICATION_PROCESS_STEPS } from '../common/Helper'
import { renderVerificationIcon } from '../common/Icon'

const TraditionVerification: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 md:py-[70px]">
      <div className="custom-container">
        {/* Section Header (Centered, 42px Heading, 44px gap to flow) */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Heading
            size="default"
            as="h2"
            className="text-black font-extrabold tracking-tight leading-tight"
          >
            Tradition You Can Trust
          </Heading>

          <Paragraph
            size="base"
            color="darkblack"
            className="mt-3 text-[15px] md:text-[16px] text-black/65 font-normal leading-relaxed text-center max-w-xl mx-auto"
          >
            A structured verification experience helps bring trusted professionals and devotees together.
          </Paragraph>
        </div>

        {/* 5 Steps Verification Flow with Connecting Arrows */}
        <div className="mt-[44px] flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between max-w-5xl mx-auto gap-y-8 gap-x-4">
          {VERIFICATION_PROCESS_STEPS.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Step Item */}
              <div className="flex flex-col items-center text-center min-w-[120px] max-w-[150px] group transition-all duration-300 hover:-translate-y-1">
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
                <div className="hidden md:flex items-center justify-center flex-shrink-0 -mt-6">
                  <svg
                    className="w-5 h-5 text-[#FA891A]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.2}
                      d="M13 6l6 6m0 0l-6 6m6-6H5"
                    />
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
