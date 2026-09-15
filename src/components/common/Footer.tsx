import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FOOTER_SECTIONS } from './Helper'

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#FCF8F8] border-t border-[#EAE5E5] pt-14 md:pt-16 pb-8 md:pb-10">
      <div className="custom-container">
        {/* Top Content Row with justify-between */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-12">
          {/* Brand & Description Column (max-w-[332px]) */}
          <div className="flex flex-col w-full max-w-[332px]">
            <Link href="/" className="inline-block">
              <Image
                src="/images/svg/main-logo.svg"
                alt="VedicPriest Logo"
                width={223}
                height={60}
                className="h-[46px] lg:h-[52px] w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-[15px] md:text-[16px] leading-[150%] text-black/65 font-normal">
              India&apos;s trusted spiritual ecosystem – connecting devotees with priests, astrologers, tutors and vendors, all in one platform.
            </p>
          </div>

          {/* Right Links Columns with justify-between mapped from FOOTER_SECTIONS */}
          <div className="flex flex-wrap sm:flex-nowrap justify-between w-full lg:max-w-[650px] gap-8 sm:gap-12 md:gap-16">
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title} className="flex flex-col min-w-[100px]">
                <h3 className="text-[16px] font-bold text-black tracking-normal mb-4 select-none">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-3.5">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-[15px] md:text-[16px] font-normal leading-[100%] text-black/65 transition-colors duration-200 hover:text-[#FA891A]"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-12 md:mt-14 pt-6 border-t border-[#EAE5E5] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[14px] md:text-[15px] text-black/65 font-normal">
            © 2026 My Priest. All rights reserved.
          </p>
          <p className="text-[14px] md:text-[15px] text-black/65 font-normal">
            Made with reverence, in India.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer