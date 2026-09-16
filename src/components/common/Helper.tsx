export interface NavLinkItem {
  name: string
  href: string
}

export const getDownloadAppUrl = (): string => {
  if (typeof window === 'undefined') return 'https://play.google.com/store'

  const userAgent = window.navigator.userAgent.toLowerCase()
  const platform = (window.navigator as unknown as { userAgentData?: { platform?: string } }).userAgentData?.platform?.toLowerCase() || ''

  // Detect iPhone, iPad, iPod, MacBook, macOS
  const isApple =
    /iphone|ipad|ipod|macintosh|mac os x/.test(userAgent) ||
    /mac|ios/.test(platform) ||
    (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 1 && /mac/.test(userAgent))

  if (isApple) {
    return 'https://www.apple.com/app-store/'
  }

  // Windows, Android, others
  return 'https://play.google.com/store'
}

export const NAV_LINKS: NavLinkItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#about-us' },
  { name: 'Support', href: '#support' },
]

export interface HeroStatItem {
  value: string
  label: string
}

export const HERO_STATS: HeroStatItem[] = [
  { value: '12,000+', label: 'Verified Priest' },
  { value: '85+', label: 'Cities Served' },
  { value: '4.9★', label: 'Devotee Rating' },
]

export interface PillarItem {
  id: string
  title: string
  description: string
}

export const TRADITION_PILLARS: PillarItem[] = [
  {
    id: '01',
    title: 'Verified Professionals',
    description:
      'Every priest, astrologer and tutor is background-checked and credential-verified.',
  },
  {
    id: '02',
    title: 'Sacred Services',
    description:
      'Rituals performed with tradition-accurate procedures across regions and lineages.',
  },
  {
    id: '03',
    title: 'Secure Experience',
    description:
      'Protected payments, transparent pricing and verified reviews on every booking.',
  },
  {
    id: '04',
    title: 'One Ecosystem',
    description:
      'Priests, astrologers, tutors, vendors and devotees, connected in a single platform.',
  },
]

export interface SpiritualServiceItem {
  id: string
  tag: string
  iconKey: string
  title: string
  tags: string
  ctaText: string
  ctaHref: string
}

export const SPIRITUAL_SERVICES: SpiritualServiceItem[] = [
  {
    id: '01',
    tag: '01 - Priest',
    iconKey: 'priest',
    title: 'Book Sacred Rituals',
    tags: 'Poojas • Homams • Ceremonies',
    ctaText: 'Find a Priest',
    ctaHref: '#priest',
  },
  {
    id: '02',
    tag: '02 - Astrologer',
    iconKey: 'astrologer',
    title: 'Find Spritual Guidence',
    tags: 'Kundli • Astrology • Consultation',
    ctaText: 'Consult an Expert',
    ctaHref: '#astrology',
  },
  {
    id: '03',
    tag: '03 - Tutor',
    iconKey: 'tutor',
    title: 'Learn Sacred Traditions',
    tags: 'Music • Bhajans • Vedic Learning',
    ctaText: 'Start Learning',
    ctaHref: '#tutor',
  },
  {
    id: '04',
    tag: '04 - Vendor',
    iconKey: 'vendor',
    title: 'Shop Sacred Essentials',
    tags: 'Pooja Samagri • Spritual Products',
    ctaText: 'Find a Priest',
    ctaHref: '#shop',
  },
  {
    id: '05',
    tag: '05 - Live Pooja',
    iconKey: 'live-pooja',
    title: 'Join From Anywhere',
    tags: 'Live Pooja • Vedic Rituals',
    ctaText: 'Explore Live Pooja',
    ctaHref: '#live-pooja',
  },
  {
    id: '06',
    tag: '01 - Catering',
    iconKey: 'catering',
    title: 'Sacred Feast, Handled',
    tags: 'Prasad • Ceremony catering',
    ctaText: 'Book Catering',
    ctaHref: '#catering',
  },
  {
    id: '07',
    tag: '01 - Decoration',
    iconKey: 'decoration',
    title: 'Set the Sacred Scene',
    tags: 'Mandap • Festival Decor • Floral',
    ctaText: 'Explore Decoration',
    ctaHref: '#decoration',
  },
]

export interface PriestFeatureItem {
  id: string
  iconKey: string
  title: string
  description: string
}

export const PRIEST_FEATURES: PriestFeatureItem[] = [
  {
    id: '01',
    iconKey: 'identity',
    title: 'Verified Identity',
    description: 'ID and credential checks before a priest goes live on the platform.',
  },
  {
    id: '02',
    iconKey: 'ratings',
    title: 'Genuine Ratings',
    description: 'Reviews from real, completed bookings only - no incentivized feedback.',
  },
  {
    id: '03',
    iconKey: 'language',
    title: 'Language & Tradition Match',
    description: 'Choose priests by regional practice, sampradaya and spoken language.',
  },
  {
    id: '04',
    iconKey: 'availability',
    title: 'Live Availability',
    description: 'See real-time slots and book instantly for your ritual date.',
  },
]

export interface IntentionStepItem {
  id: string
  title: string
  description: string
}

export const INTENTION_STEPS: IntentionStepItem[] = [
  {
    id: '01',
    title: 'Choose',
    description:
      'Select the ritual, occasion or need - from griha pravesh to a monthly satsang.',
  },
  {
    id: '02',
    title: 'Personalize',
    description:
      "Set language, tradition, date and priest preference to match your family's practice.",
  },
  {
    id: '03',
    title: 'Prepare',
    description:
      'Order the exact samagri kit, delivered ahead of your ceremony.',
  },
  {
    id: '04',
    title: 'Experience',
    description:
      'Attend in person or join live, with the ritual guided start to finish.',
  },
]

export interface AstrologerItem {
  id: string
  name: string
  role: string
  status: string
  rate: string
  image: string
}

export const ASTROLOGERS_DATA: AstrologerItem[] = [
  {
    id: '01',
    name: 'Ankita Beniwal',
    role: 'Verified Astrologer',
    status: 'Online',
    rate: '₹49/min',
    image: '/images/webp/astrologer_1.webp',
  },
  {
    id: '02',
    name: 'Vikram Joshi',
    role: 'Verified Astrologer',
    status: 'Online',
    rate: '₹39/min',
    image: '/images/webp/astrologer_2.webp',
  },
  {
    id: '03',
    name: 'Meera Iyer',
    role: 'Verified Astrologer',
    status: 'Online',
    rate: '₹59/min',
    image: '/images/webp/astrologer_3.webp',
  },
]

export interface PanchangRowItem {
  leftLabel: string
  leftValue: string
  rightLabel: string
  rightValue: string
}

export const PANCHANG_DATA: PanchangRowItem[] = [
  {
    leftLabel: 'Sunrise',
    leftValue: '05:59 PM',
    rightLabel: 'Sunset',
    rightValue: '06:48 PM',
  },
  {
    leftLabel: 'Shubh Muhurat',
    leftValue: '08:00 - 12:00 AM',
    rightLabel: 'Rahu Kalam',
    rightValue: '10:30 - 12:00 PM',
  },
  {
    leftLabel: 'Shubh Muhurat',
    leftValue: '08:00 - 12:00 AM',
    rightLabel: 'Rahu Kalam',
    rightValue: '10:30 - 12:00 PM',
  },
]

export interface FooterLinkItem {
  name: string
  href: string
}

export interface FooterSectionItem {
  title: string
  links: FooterLinkItem[]
}

export const FOOTER_SECTIONS: FooterSectionItem[] = [
  {
    title: 'Explore',
    links: [
      { name: 'Book a Priest', href: '#book-a-priest' },
      { name: 'Astrology', href: '#astrology' },
      { name: 'Learning', href: '#learning' },
      { name: 'Shop', href: '#shop' },
    ],
  },
  {
    title: 'For Professionals',
    links: [
      { name: 'Join as Priest', href: '#join-as-priest' },
      { name: 'Join as Astrologer', href: '#join-as-astrologer' },
      { name: 'Join as Tutor', href: '#join-as-tutor' },
      { name: 'Join as Vendor', href: '#join-as-vendor' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy', href: '#privacy' },
      { name: 'Terms', href: '#terms' },
    ],
  },
]

export interface LearnExperienceItem {
  id: string
  title: string
  duration: string
  image: string
}

export const LEARN_EXPERIENCE_DATA: LearnExperienceItem[] = [
  {
    id: '01',
    title: 'Morning Mantras',
    duration: '4 week course',
    image: '/images/png/learn_1.png',
  },
  {
    id: '02',
    title: 'Evening Arti',
    duration: '6 week course',
    image: '/images/png/learn_2.png',
  },
  {
    id: '03',
    title: 'Relaxing Bhajans',
    duration: '4 week course',
    image: '/images/png/learn_3.png',
  },
]

export interface SacredEssentialItem {
  id: string
  title: string
  image: string
}

export const SACRED_ESSENTIALS_DATA: SacredEssentialItem[] = [
  {
    id: '01',
    title: 'Pooja Kits',
    image: '/images/png/home_5.png',
  },
  {
    id: '02',
    title: 'Brass Diyas',
    image: '/images/png/home_1.png',
  },
  {
    id: '03',
    title: 'Havan Samagri',
    image: '/images/png/home_2.png',
  },
  {
    id: '04',
    title: 'Spritual Books',
    image: '/images/png/home_3.png',
  },
  {
    id: '05',
    title: 'Festivals Essentials',
    image: '/images/png/home_4.png',
  },
]

export interface ProfessionalGrowthItem {
  id: string
  title: string
  description: string
}

export const PROFESSIONAL_GROWTH_DATA: ProfessionalGrowthItem[] = [
  {
    id: '01',
    title: 'Priest',
    description: 'Reach devotees across your city and beyond, on your own schedule.',
  },
  {
    id: '02',
    title: 'Astrologer',
    description: 'Offer chat, call and video consultations with transparent earnings.',
  },
  {
    id: '03',
    title: 'Tutor',
    description: 'Teach Sanskrit, scripture and Vedic subjects to students worldwide.',
  },
  {
    id: '04',
    title: 'Vendor',
    description: 'Sell pooja essentials to a devoted, ready-to-buy audience.',
  },
]

export interface VerificationProcessItem {
  id: string
  title: string
  iconKey: string
}

export const VERIFICATION_PROCESS_STEPS: VerificationProcessItem[] = [
  {
    id: '01',
    title: 'Application',
    iconKey: 'application',
  },
  {
    id: '02',
    title: 'Identity Verification',
    iconKey: 'identity-check',
  },
  {
    id: '03',
    title: 'Qualification Review',
    iconKey: 'qualification',
  },
  {
    id: '04',
    title: 'Admin Approval',
    iconKey: 'admin-approval',
  },
  {
    id: '05',
    title: 'Verified Professional',
    iconKey: 'verified-professional',
  },
]

export interface TestimonialItem {
  id: string
  quote: string
  name: string
  avatar: string
  rating: number
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '01',
    quote:
      'Booking a priest for my father’s shraddh from another city felt impossible — My Priest made it seamless and dignified.',
    name: 'Ananya Rao',
    avatar: '/images/webp/devotee-1.jpg',
    rating: 5,
  },
  {
    id: '02',
    quote:
      'My son’s mundan ceremony was guided beautifully. The priest knew our exact family tradition.',
    name: 'Karan Mehta',
    avatar: '/images/webp/devotee-2.jpg',
    rating: 5,
  },
  {
    id: '03',
    quote:
      'Live pooja let my grandmother in Jaipur watch her great-grandson’s naming ceremony in real time.',
    name: 'Priya Nair',
    avatar: '/images/webp/devotee-3.jpg',
    rating: 5,
  },
  {
    id: '04',
    quote:
      'Finding an authentic Vedic astrologer who could explain everything with patience changed my entire outlook.',
    name: 'Rahul Verma',
    avatar: '/images/webp/astrologer-2.jpg',
    rating: 5,
  },
]

export interface AppScreenItem {
  id: string
  title: string
  image: string
}

export const APP_SCREENS_SLIDER_DATA: AppScreenItem[] = [
  {
    id: '01',
    title: 'Priest Profile & Booking',
    image: '/images/png/slider_1.png',
  },
  {
    id: '02',
    title: 'Browse Priests & Astrologers',
    image: '/images/png/slider_2.png',
  },
  {
    id: '03',
    title: 'VedicPriest Experience',
    image: '/images/png/slider_3.png',
  },
  {
    id: '04',
    title: 'Daily Panchang & Wisdom',
    image: '/images/png/slider_4.png',
  },
  {
    id: '05',
    title: 'Booking Details & Samagri',
    image: '/images/png/slider_5.png',
  },
  {
    id: '06',
    title: 'Manage All Bookings',
    image: '/images/png/slider_6.png',
  },
]






