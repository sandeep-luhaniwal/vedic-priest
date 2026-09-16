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
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M21.1047 10.28L22.2847 11.47H22.2997C22.5897 11.76 22.5897 12.235 22.2997 12.525L20.1897 14.65L20.6447 17.61C20.6758 17.8056 20.6279 18.0055 20.5117 18.1659C20.3954 18.3262 20.2202 18.4338 20.0247 18.465L17.0647 18.945L15.6947 21.61C15.6028 21.786 15.4457 21.9192 15.2569 21.9808C15.0682 22.0425 14.8628 22.0278 14.6847 21.94L12.0097 20.585L9.33467 21.94C9.15685 22.0294 8.95087 22.0449 8.76166 21.9831C8.57246 21.9213 8.41537 21.7872 8.32467 21.61L6.95467 18.945L3.99467 18.465C3.79946 18.433 3.62478 18.3253 3.50866 18.1651C3.39253 18.005 3.34438 17.8055 3.37467 17.61L3.83467 14.65L1.72467 12.525C1.58574 12.3846 1.50781 12.195 1.50781 11.9975C1.50781 11.8 1.58574 11.6104 1.72467 11.47L3.83467 9.34499L3.37967 6.38499C3.34856 6.1894 3.39639 5.98947 3.51266 5.82914C3.62892 5.66881 3.80409 5.56121 3.99967 5.52999L6.95967 5.04999L8.32967 2.38499C8.42046 2.20922 8.57702 2.07645 8.76525 2.01557C8.95349 1.9547 9.15815 1.97067 9.33467 2.05999L12.0097 3.41499L14.6847 2.05999C14.8612 1.97067 15.0658 1.9547 15.2541 2.01557C15.4423 2.07645 15.5989 2.20922 15.6897 2.38499L16.4497 3.86999L17.0547 5.04999L20.0147 5.52999C20.2099 5.56195 20.3846 5.66972 20.5007 5.82986C20.6168 5.99 20.665 6.18952 20.6347 6.38499L20.1747 9.34499L21.1047 10.28ZM19.0347 17.11L18.5747 14.135H18.5697L20.6897 12L18.5697 9.86499L19.0297 6.88999L16.0597 6.40999L14.6847 3.72999L11.9997 5.08999L9.31467 3.72999L7.93967 6.40999L4.96967 6.88999L5.42967 9.86499L3.30967 12L5.42967 14.135L4.96967 17.11L7.93967 17.59L9.31467 20.27L11.9997 18.91L14.6847 20.27L16.0597 17.59L19.0347 17.11ZM9.27967 11.72L10.7497 13.19L14.7197 9.21999L15.7797 10.28L11.6347 14.425C11.5184 14.541 11.3803 14.6329 11.2285 14.6956C11.0766 14.7582 10.9139 14.7903 10.7497 14.79C10.4297 14.79 10.1097 14.67 9.86467 14.425L8.21967 12.78L9.27967 11.72Z" fill="#FA891A" />
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
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_3345_14698)">
      <path d="M19.9997 2H9.33301V5.33333H10.6663V3.33333H19.9997C20.3997 3.33333 20.6663 3.6 20.6663 4V11.3333C20.6663 11.7333 20.3997 12 19.9997 12H11.333V16.6667H7.79967L5.33301 18.6V16.6667H3.33301C2.93301 16.6667 2.66634 16.4 2.66634 16V8.66667C2.66634 8.26667 2.93301 8 3.33301 8H11.9997V6.66667H3.33301C2.19967 6.66667 1.33301 7.53333 1.33301 8.66667V16C1.33301 17.1333 2.19967 18 3.33301 18H3.99967V21.4L8.19967 18H12.6663V13.3333H19.9997C21.133 13.3333 21.9997 12.4667 21.9997 11.3333V4C21.9997 2.86667 21.133 2 19.9997 2Z" fill="#FA891A" />
      <path d="M4.13379 15.2667H5.73379L6.13379 14.2H8.20046L8.60046 15.2667H10.2005L7.93379 9.33334H6.33379L4.13379 15.2667ZM7.13379 11L7.80046 13.0667H6.46712L7.13379 11Z" fill="#FA891A" />
      <path d="M13.333 11.3333C14.0663 11.3333 15.0663 11.1333 15.9997 10.6667C16.933 11.1333 17.9997 11.3333 18.6663 11.3333V10C18.6663 10 17.9997 10 17.2663 9.73333C18.0663 8.93333 18.6663 7.73333 18.6663 6V5.33333H16.6663V4H15.333V5.33333H13.333V6.66667H17.2663C17.133 7.86667 16.5997 8.6 15.9997 9.06667C15.5997 8.73333 15.1997 8.26667 14.933 7.66667H13.533C13.7997 8.53333 14.1997 9.2 14.733 9.73333C14.0663 10 13.4663 10 13.333 10V11.3333Z" fill="#FA891A" />
    </g>
    <defs>
      <clipPath id="clip0_3345_14698">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>

)

export const LiveAvailabilityIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.9997 5.49999C11.9996 5.94194 12.1458 6.3715 12.4155 6.72157C12.6852 7.07165 13.0634 7.32252 13.4907 7.43499C13.8277 7.48799 14.1707 7.48799 14.5087 7.43499C14.8701 7.3399 15.1975 7.14549 15.454 6.8738C15.7105 6.60212 15.8858 6.26401 15.96 5.89781C16.0341 5.5316 16.0042 5.15195 15.8736 4.80188C15.743 4.4518 15.517 4.1453 15.2211 3.91712C14.9253 3.68894 14.5714 3.54821 14.1996 3.51086C13.8279 3.47352 13.4531 3.54106 13.1177 3.70583C12.7824 3.8706 12.4999 4.12602 12.3023 4.44313C12.1047 4.76023 11.9999 5.12635 11.9997 5.49999ZM10.6627 6.55799C10.4971 6.03362 10.4574 5.47761 10.5468 4.93502C10.6362 4.39244 10.8521 3.87855 11.1772 3.435C11.5022 2.99146 11.9272 2.63075 12.4177 2.38212C12.9082 2.13348 13.4503 2.00391 14.0002 2.00391C14.5501 2.00391 15.0923 2.13348 15.5828 2.38212C16.0733 2.63075 16.4982 2.99146 16.8233 3.435C17.1484 3.87855 17.3643 4.39244 17.4537 4.93502C17.5431 5.47761 17.5034 6.03362 17.3377 6.55799L21.7567 5.12199C22.0661 5.02153 22.3923 4.98299 22.7166 5.00858C23.0409 5.03416 23.3569 5.12337 23.6468 5.27111C23.9366 5.41885 24.1944 5.62222 24.4057 5.86962C24.6169 6.11702 24.7773 6.4036 24.8777 6.71299C24.9782 7.02238 25.0167 7.34854 24.9912 7.67282C24.9656 7.99711 24.8764 8.31319 24.7286 8.603C24.5809 8.89281 24.3775 9.15068 24.1301 9.3619C23.8827 9.57311 23.5961 9.73353 23.2867 9.83399L17.9997 11.552V15.374C17.9997 15.534 18.0297 15.694 18.0907 15.842L20.8187 22.594C21.0649 23.2032 21.0589 23.8852 20.8022 24.49C20.5454 25.0948 20.0589 25.5729 19.4497 25.819C18.8405 26.0651 18.1585 26.0591 17.5537 25.8024C16.9489 25.5457 16.4709 25.0592 16.2247 24.45L13.9817 18.897L11.7497 24.457C11.629 24.7577 11.4501 25.0315 11.2232 25.2629C10.9963 25.4942 10.726 25.6784 10.4277 25.805C10.1295 25.9315 9.80914 25.9979 9.48514 26.0003C9.16114 26.0027 8.83986 25.9411 8.53974 25.819C7.93384 25.5719 7.45031 25.0951 7.19475 24.4928C6.93918 23.8904 6.93235 23.2114 7.17574 22.604L9.90974 15.792C9.96974 15.6427 9.99974 15.4873 9.99974 15.326V11.552L4.71174 9.83399C4.08689 9.63097 3.56829 9.18804 3.27001 8.60264C2.97173 8.01725 2.91822 7.33734 3.12124 6.71249C3.32427 6.08764 3.7672 5.56903 4.35259 5.27076C4.93799 4.97248 5.61789 4.91897 6.24274 5.12199L10.6627 6.55799ZM13.1807 8.90399C12.961 8.86454 12.7442 8.81042 12.5317 8.74199L5.77974 6.54799C5.53323 6.4679 5.26499 6.48901 5.03403 6.60669C4.80308 6.72437 4.62834 6.92897 4.54824 7.17549C4.46815 7.42201 4.48926 7.69025 4.60694 7.9212C4.72462 8.15215 4.92923 8.32689 5.17574 8.40699L10.6357 10.181C11.1507 10.349 11.4997 10.829 11.4997 11.37V15.327C11.4997 15.677 11.4327 16.025 11.3017 16.351L8.56774 23.162C8.47208 23.4014 8.47495 23.669 8.57573 23.9063C8.67651 24.1437 8.86702 24.3315 9.10574 24.429C9.22279 24.4766 9.34808 24.5005 9.47442 24.4996C9.60076 24.4986 9.72567 24.4727 9.84198 24.4234C9.9583 24.3741 10.0637 24.3023 10.1522 24.2121C10.2407 24.1219 10.3106 24.0152 10.3577 23.898L12.8207 17.762C13.2407 16.717 14.7177 16.715 15.1397 17.759L17.6157 23.888C17.7128 24.1283 17.9014 24.3202 18.1399 24.4214C18.3785 24.5227 18.6475 24.5251 18.8877 24.428C19.128 24.3309 19.3199 24.1424 19.4212 23.9038C19.5225 23.6653 19.5248 23.3963 19.4277 23.156L16.6997 16.404C16.5688 16.0763 16.5009 15.7269 16.4997 15.374V11.37C16.4997 10.829 16.8487 10.349 17.3637 10.181L22.8237 8.40699C22.9458 8.36733 23.0589 8.30402 23.1565 8.22067C23.2541 8.13731 23.3343 8.03556 23.3925 7.9212C23.4508 7.80684 23.486 7.68213 23.4961 7.55418C23.5061 7.42623 23.4909 7.29755 23.4512 7.17549C23.4116 7.05343 23.3483 6.94037 23.2649 6.84277C23.1816 6.74518 23.0798 6.66496 22.9655 6.60669C22.8511 6.54842 22.7264 6.51325 22.5984 6.50317C22.4705 6.4931 22.3418 6.50833 22.2197 6.54799L15.4677 8.74199C15.2544 8.81132 15.0381 8.86532 14.8187 8.90399C14.2801 9.03371 13.7194 9.03371 13.1807 8.90399Z" fill="#FA891A" />
  </svg>

)

export const renderPriestFeatureIcon = (key: string) => {
  switch (key) {
    case 'identity':
      return <VerifiedIdentityIcon className="w-5 h-5 text-primary-orange" />
    case 'ratings':
      return <GenuineRatingsIcon className="w-5 h-5 text-primary-orange" />
    case 'language':
      return <LanguageTraditionIcon className="w-5 h-5 text-primary-orange" />
    case 'availability':
      return <LiveAvailabilityIcon className="w-5 h-5 text-primary-orange" />
    default:
      return <VerifiedIdentityIcon className="w-5 h-5 text-primary-orange" />
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

export const CircleRotate: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg className='w-10 md:w-14 lg:w-auto' width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.75">
      <circle cx="36.5003" cy="36.5001" r="10.1458" fill="#FA891A" stroke="#FA891A" />
      <circle cx="36.4997" cy="36.4999" r="24.8542" stroke="#FA891A" strokeWidth="2" />
      <circle cx="36.5" cy="36.5" r="35.5" stroke="#FA891A" strokeWidth="2" />
    </g>
  </svg>

)

export const Circlerotate = CircleRotate
export const circlerotate = CircleRotate
export const CircleRotateIcon = CircleRotate

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

