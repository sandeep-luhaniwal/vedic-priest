import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FOOTER_SECTIONS } from './Helper'

const Footer: React.FC = () => {
  return (
    <footer id="support" className="w-full bg-light-white pt-12 md:pt-14 lg:pt-17.5 pb-6 md:pb-8">
      <div className="custom-container">
        {/* Top Content Row with justify-between */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-12">
          {/* Brand & Description Column (max-w-[332px]) */}
       

          {/* Right Links Columns with justify-between mapped from FOOTER_SECTIONS */}
          <div className="flex flex-wrap sm:flex-nowrap justify-between w-full gap-8 sm:gap-12 md:gap-16">
               <div className="flex flex-col w-full max-w-83">
            <Link href="/" className="inline-block">
              <Image
                src="/images/svg/main-logo.svg"
                alt="VedicPriest Logo"
                width={223}
                height={60}
                className="h-12 lg:h-15 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm md:text-base text-black/65 font-normal">
              India&apos;s trusted spiritual ecosystem – connecting devotees with priests, astrologers, tutors and vendors, all in one platform.
            </p>
          </div>
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title} className="flex flex-col min-w-25">
                <h3 className="text-base font-bold text-black tracking-normal mb-4 select-none">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-3.5">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm md:text-base font-normal leading-[100%] text-black/65 transition-colors duration-200 hover:text-[#FA891A]"
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
          <p className="text-sm md:text-base text-black/65 font-normal">
            © {new Date().getFullYear()} My Priest. All rights reserved.
          </p>
          <p className="text-sm md:text-base text-black/65 font-normal">
            Made with reverence, in India.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer