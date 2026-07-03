/**
 * Central dealer configuration.
 * Update these values with the real dealership details before going live.
 */

const PHONE_RAW = '919994488833' // country code + number, digits only

export const DEALER = {
  name: 'Suriya NEXA',
  legalName: 'Suriya NEXA Thanjavur',
  tagline: 'Authorized Suzuki NEXA Dealer · Thanjavur',
  owner: 'Suriya',
  city: 'Thanjavur',
  state: 'Tamil Nadu',
  pincode: '613001',
  addressLine: '123 NEXA Avenue, Trichy Main Road',
  fullAddress: '123 NEXA Avenue, Trichy Main Road, Thanjavur, Tamil Nadu 613001',
  email: 'sales@suriyanexathanjavur.in',
  phoneDisplay: '+91 99944 88833',
  phoneHref: `tel:+${PHONE_RAW}`,
  whatsappHref: `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(
    "Hi Suriya NEXA Thanjavur, I'm interested in the Suzuki Fronx. Please share the best on-road price and offers."
  )}`,
  mapsQuery: 'https://www.google.com/maps/search/?api=1&query=NEXA+Thanjavur',
  mapsEmbed:
    'https://www.google.com/maps?q=Thanjavur,Tamil%20Nadu&z=13&output=embed',
  rating: '4.9',
  reviewCount: '1,287',
  hours: [
    { day: 'Monday – Saturday', time: '9:30 AM – 8:00 PM' },
    { day: 'Sunday', time: '10:00 AM – 6:00 PM' },
  ],
  social: {
    facebook: 'https://www.facebook.com/suriyanexathanjavur',
    instagram: 'https://www.instagram.com/suriyanexathanjavur',
    youtube: 'https://www.youtube.com/@suriyanexathanjavur',
  },
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
  { label: 'Fronx', href: '#fronx' },
  { label: 'NEXA Range', href: '#models' },
  { label: 'Finance', href: '#finance' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]
