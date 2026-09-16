'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { NAV_LINKS, getDownloadAppUrl } from './Helper'
import { MenuIcon, CloseIcon } from './Icon'

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [activeLink, setActiveLink] = useState<string>('/') // 'Home' is active by default
  const [downloadUrl, setDownloadUrl] = useState<string>('https://play.google.com/store')

  const pathname = usePathname()
  const router = useRouter()

  // Detect iOS/Mac vs Windows/Android on client
  useEffect(() => {
    setDownloadUrl(getDownloadAppUrl())
  }, [])

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

  // Smooth scroll handler with exact navbar offset & cross-page routing
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (pathname !== '/') {
      if (href === '/') {
        e.preventDefault()
        router.push('/')
        return
      }
      if (href.startsWith('#')) {
        e.preventDefault()
        router.push('/' + href)
        return
      }
      return
    }

    e.preventDefault()
    if (href === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
      setActiveLink('/')
      return
    }

    if (href.startsWith('#')) {
      const targetId = href.substring(1)
      const element = document.getElementById(targetId)
      if (element) {
        const headerEl = document.querySelector('header')
        const headerHeight = headerEl ? headerEl.offsetHeight : 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 16

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
        setActiveLink(href)
      }
    }
  }

  // ScrollSpy: Update active link on scroll based on section in view (only on homepage)
  useEffect(() => {
    if (pathname !== '/') {
      setActiveLink('')
      return
    }

    const handleScroll = () => {
      // If at top of the page, activate '/' (Home)
      if (window.scrollY < 120) {
        setActiveLink('/')
        return
      }

      // If at the absolute bottom of the page, activate '#support'
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 30
      ) {
        setActiveLink('#support')
        return
      }

      const headerEl = document.querySelector('header')
      const headerHeight = headerEl ? headerEl.offsetHeight : 80
      const scrollPosition = window.scrollY + headerHeight + 50

      const sectionMap = [
        { id: 'support', href: '#support' },
        { id: 'about-us', href: '#about-us' },
        { id: 'services', href: '#services' },
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
  }, [pathname])

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md shadow-[0_2px_5px_rgba(0,0,0,0.08)]">
        <div className="custom-container py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="inline-flex items-center gap-2"
            onClick={(e) => {
              handleNavClick(e, '/')
              closeMenu()
            }}
          >
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
                  onClick={(e) => handleNavClick(e, item.href)}
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
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center rounded-[55px] bg-primary-orange px-5 py-2.5 text-[15px] lg:text-[16px] font-medium text-white transition-all duration-300 hover:bg-black hover:text-white shadow-sm"
            >
              Download App
            </a>

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
          <Link
            href="/"
            onClick={(e) => {
              handleNavClick(e, '/')
              closeMenu()
            }}
            className="inline-flex items-center"
          >
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
                  onClick={(e) => {
                    handleNavClick(e, item.href)
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
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex w-full items-center justify-center rounded-[55px] bg-primary-orange py-3.5 text-center text-[18px] font-semibold text-white shadow-md transition-all duration-300 hover:bg-black active:scale-[0.99]"
            >
              Download App
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar