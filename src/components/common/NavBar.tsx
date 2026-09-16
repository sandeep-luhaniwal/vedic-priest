'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS } from './Helper'
import { MenuIcon, CloseIcon } from './Icon'

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [activeLink, setActiveLink] = useState<string>('/') // 'Home' is active by default

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // ScrollSpy: Update active link on scroll based on section in view
  useEffect(() => {
    const handleScroll = () => {
      // If near bottom of the page, activate #support (Footer)
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 120
      ) {
        setActiveLink('#support')
        return
      }

      // If at top of the page, activate '/' (Home)
      if (window.scrollY < 150) {
        setActiveLink('/')
        return
      }

      const scrollPosition = window.scrollY + 220

      const sectionMap = [
        { id: 'support', href: '#support' },
        { id: 'services', href: '#services' },
        { id: 'about-us', href: '#about-us' },
        { id: 'home', href: '/' },
      ]

      for (const section of sectionMap) {
        const element = document.getElementById(section.id)
        if (element) {
          const top = element.offsetTop
          if (scrollPosition >= top) {
            setActiveLink(section.href)
            return
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md shadow-[0_2px_5px_rgba(0,0,0,0.08)]">
        <div className="custom-container py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-2" onClick={closeMenu}>
            {/* Desktop / Main Logo */}
            <div className="hidden sm:block">
              <Image
                src="/images/svg/main-logo.svg"
                alt="VedicPriest Logo"
                width={223}
                height={60}
                priority
                className="h-12 lg:h-15 w-auto object-contain"
              />
            </div>

            {/* Mobile Logo on Header */}
            <div className="block sm:hidden">
              <Image
                src="/images/svg/mobile-logo.svg"
                alt="VedicPriest Mobile Logo"
                width={50}
                height={50}
                priority
                className="h-11 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav Links mapped from Helper */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            {NAV_LINKS.map((item, index) => {
              const isActive = activeLink === item.href
              return (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setActiveLink(item.href)}
                  className={`text-[16px] lg:text-[18px] transition-all duration-200 select-none ${
                    isActive
                      ? 'font-bold text-black'
                      : 'font-normal text-black/65 hover:font-bold hover:text-black'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Right CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="#download"
              className="hidden sm:inline-flex items-center justify-center rounded-[55px] bg-primary-orange px-5 py-2.5 text-[15px] lg:text-[16px] font-medium text-white transition-all duration-300 hover:bg-black hover:text-white shadow-sm"
            >
              Download App
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex md:hidden items-center justify-center p-2 rounded-md text-black hover:text-primary-orange focus:outline-none cursor-pointer"
              aria-label="Open Navigation Menu"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Full Width & Full Height Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-white md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 pointer-events-auto visible'
            : 'opacity-0 pointer-events-none invisible'
        }`}
      >
        {/* Mobile Header Bar */}
        <div className="custom-container py-4 flex items-center justify-between border-b border-black/10">
          <Link href="/" onClick={closeMenu} className="inline-flex items-center">
            <Image
              src="/images/svg/mobile-logo.svg"
              alt="VedicPriest Mobile Logo"
              width={50}
              height={50}
              priority
              className="h-11 w-auto object-contain"
            />
          </Link>

          <button
            type="button"
            onClick={closeMenu}
            className="p-2 rounded-md text-black hover:text-primary-orange focus:outline-none cursor-pointer"
            aria-label="Close Navigation Menu"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Nav Links & Action Area */}
        <div className="custom-container flex flex-1 flex-col justify-between py-8">
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((item, index) => {
              const isActive = activeLink === item.href
              return (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => {
                    setActiveLink(item.href)
                    closeMenu()
                  }}
                  className={`text-[20px] transition-colors duration-200 select-none ${
                    isActive
                      ? 'font-bold text-primary-orange'
                      : 'font-normal text-black/65 hover:font-bold hover:text-black'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Full Width Download Button */}
          <div className="pt-8">
            <Link
              href="#download"
              onClick={closeMenu}
              className="flex w-full items-center justify-center rounded-[55px] bg-primary-orange py-3.5 text-center text-[18px] font-semibold text-white shadow-md transition-all duration-300 hover:bg-black active:scale-[0.99]"
            >
              Download App
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar