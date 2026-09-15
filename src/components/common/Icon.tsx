import React from 'react'

export const MenuIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
)

export const CloseIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
)

export const AppleIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.78 1.06-1.85.94-2.94-.92.04-2.02.63-2.67 1.39-.58.66-1.09 1.76-.95 2.82 1.02.08 2.05-.51 2.68-1.27z" />
  </svg>
)

export const GooglePlayIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3.609 1.814L13.793 12 3.61 22.186a1.99 1.99 0 0 1-.61-1.428V3.242c0-.543.22-1.037.609-1.428zm11.236 11.236l2.368-2.368-11.87-6.85 9.502 9.218zm2.368-2.368l2.91 1.68a1.5 1.5 0 0 1 0 2.608l-2.91 1.68-2.368-2.368 2.368-2.368zm-2.368 2.368l-9.502 9.218 11.87-6.85-2.368-2.368z" />
  </svg>
)

export const ArrowRightIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
)

/* Feature Icons for Priest Section */
export const VerifiedIdentityIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
)

export const GenuineRatingsIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
)

export const LanguageTraditionIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
    />
  </svg>
)

export const LiveAvailabilityIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

export const renderPriestFeatureIcon = (key: string) => {
  switch (key) {
    case 'identity':
      return <VerifiedIdentityIcon className="w-5 h-5 text-[#FA891A]" />
    case 'ratings':
      return <GenuineRatingsIcon className="w-5 h-5 text-[#FA891A]" />
    case 'language':
      return <LanguageTraditionIcon className="w-5 h-5 text-[#FA891A]" />
    case 'availability':
      return <LiveAvailabilityIcon className="w-5 h-5 text-[#FA891A]" />
    default:
      return <VerifiedIdentityIcon className="w-5 h-5 text-[#FA891A]" />
  }
}

/* Service Icons with colorful spiritual visuals */
export const DiyaIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <span className={`inline-flex items-center justify-center text-3xl select-none ${className}`}>
    🪔
  </span>
)

export const AstrologyIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <span className={`inline-flex items-center justify-center text-3xl select-none ${className}`}>
    🔮
  </span>
)

export const TutorIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <span className={`inline-flex items-center justify-center text-3xl select-none ${className}`}>
    🎓
  </span>
)

export const VendorIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <span className={`inline-flex items-center justify-center text-3xl select-none ${className}`}>
    🛍️
  </span>
)

export const LivePoojaIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <span className={`inline-flex items-center justify-center text-3xl select-none ${className}`}>
    📹
  </span>
)

export const CateringIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <span className={`inline-flex items-center justify-center text-3xl select-none ${className}`}>
    🍲
  </span>
)

export const DecorationIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <span className={`inline-flex items-center justify-center text-3xl select-none ${className}`}>
    🌸
  </span>
)

export const renderServiceIcon = (key: string) => {
  switch (key) {
    case 'priest':
      return <DiyaIcon />
    case 'astrologer':
      return <AstrologyIcon />
    case 'tutor':
      return <TutorIcon />
    case 'vendor':
      return <VendorIcon />
    case 'live-pooja':
      return <LivePoojaIcon />
    case 'catering':
      return <CateringIcon />
    case 'decoration':
      return <DecorationIcon />
    default:
      return <DiyaIcon />
  }
}

/* Verification Flow Step Icons for Tradition You Can Trust */
export const ApplicationStepIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="10" fill="#FFF5F2" />
    <path d="M16 12H28L34 18V36H16V12Z" fill="#F87171" fillOpacity="0.2" stroke="#EF4444" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M28 12V18H34" stroke="#EF4444" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M20 22H28M20 27H30M20 32H26" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M30 28L35 23L38 26L33 31L30 32L30 28Z" fill="#FA891A" stroke="#EA580C" strokeWidth="1" />
  </svg>
)

export const IdentityStepIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="10" fill="#EFF6FF" />
    <rect x="11" y="14" width="26" height="20" rx="3" fill="#3B82F6" fillOpacity="0.15" stroke="#2563EB" strokeWidth="1.5" />
    <circle cx="19" cy="22" r="3" fill="#2563EB" />
    <path d="M15 29C15 27 17 26 19 26C21 26 23 27 23 29" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M26 20H33M26 24H33M26 28H30" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export const QualificationStepIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="10" fill="#FFFBEB" />
    <path d="M15 13H31C32.1 13 33 13.9 33 15V31C33 32.1 32.1 33 31 33H15C13.9 33 13 32.1 13 31V15C13 13.9 13.9 13 15 13Z" fill="#FBBF24" fillOpacity="0.2" stroke="#D97706" strokeWidth="1.5" />
    <path d="M18 19H30M18 24H28M18 29H24" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="30" cy="29" r="3" fill="#F59E0B" stroke="#D97706" strokeWidth="1" />
  </svg>
)

export const AdminApprovalStepIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="10" fill="#F0F9FF" />
    <path d="M24 12L34 16.5V24C34 30.5 29.7 34.8 24 37C18.3 34.8 14 30.5 14 24V16.5L24 12Z" fill="#0284C7" fillOpacity="0.2" stroke="#0284C7" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M24 18V31" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M24 18L29 23" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export const VerifiedStepIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="10" fill="#3DC244" />
    <path d="M16 24L22 30L33 18" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const renderVerificationIcon = (key: string) => {
  switch (key) {
    case 'application':
      return <ApplicationStepIcon className="w-12 h-12 sm:w-14 sm:h-14" />
    case 'identity-check':
      return <IdentityStepIcon className="w-12 h-12 sm:w-14 sm:h-14" />
    case 'qualification':
      return <QualificationStepIcon className="w-12 h-12 sm:w-14 sm:h-14" />
    case 'admin-approval':
      return <AdminApprovalStepIcon className="w-12 h-12 sm:w-14 sm:h-14" />
    case 'verified-professional':
      return <VerifiedStepIcon className="w-12 h-12 sm:w-14 sm:h-14" />
    default:
      return <VerifiedStepIcon className="w-12 h-12 sm:w-14 sm:h-14" />
  }
}

