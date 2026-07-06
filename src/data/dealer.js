/**
 * Central dealer configuration.
 * Update these values with the real dealership details before going live.
 */

const PHONE_RAW = '917397549735' // country code + number, digits only

export const DEALER = {
  name: 'Suriya Boopathy · NEXA',
  legalName: 'Suriya Boopathy · Senior Relationship Manager, NEXA Thanjavur',
  tagline: 'Senior Relationship Manager · Authorized Suzuki NEXA · Thanjavur',
  owner: 'Suriya Boopathy',
  designation: 'Senior Relationship Manager',
  experience: '3 Years with NEXA',
  carsDelivered: '370+',
  city: 'Thanjavur',
  state: 'Tamil Nadu',
  pincode: '613001',
  addressLine: '123 NEXA Avenue, Trichy Main Road',
  fullAddress: '123 NEXA Avenue, Trichy Main Road, Thanjavur, Tamil Nadu 613001',
  email: 'boopathysuriya1@gmail.com',
  phoneDisplay: '+91 73975 49735',
  phoneHref: `tel:+${PHONE_RAW}`,
  whatsappHref: `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(
    "Hi Suriya Boopathy, I'm interested in the Suzuki Baleno. Please share the best on-road price and July offers."
  )}`,
  mapsQuery: 'https://www.google.com/maps/search/?api=1&query=NEXA+Thanjavur',
  mapsEmbed:
    'https://www.google.com/maps?q=Thanjavur,Tamil%20Nadu&z=13&output=embed',
  rating: '4.9',
  reviewCount: '370',
  hours: [
    { day: 'Monday – Saturday', time: '9:30 AM – 8:00 PM' },
    { day: 'Sunday', time: '10:00 AM – 6:00 PM' },
  ],
  social: {
    facebook: 'https://www.facebook.com/suriyaboopathynexa',
    instagram: 'https://www.instagram.com/suriyaboopathynexa',
    youtube: 'https://www.youtube.com/@suriyaboopathynexa',
  },
}

// Current month offers (kept alongside dealer data so all "who/what/when" lives in one place).
export const CURRENT_OFFERS = {
  month: 'July 2026',
  consumerOffer: '₹15,000',
  exchangeBonus: '₹15,000',
  totalBenefit: '₹30,000',
  bank: 'Punjab National Bank',
  interestRate: '7.75%',
}

// Nearby localities served — used for local SEO copy.
export const SERVICE_AREAS = [
  'Thanjavur',
  'Kumbakonam',
  'Papanasam',
  'Thiruvidaimarudur',
  'Pattukkottai',
  'Orathanadu',
  'Needamangalam',
  'Ayyampettai',
  'Budalur',
  'Vallam',
]

// Primary navigation links (anchor-based single page).
export const NAV_LINKS = [
  { label: 'Why Suriya', href: '#why-choose' },
  { label: 'e-Vitara', href: '#evitara' },
  { label: 'NEXA Range', href: '#models' },
  { label: 'Finance', href: '#finance' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]
