/**
 * Central dealer configuration.
 * Update these values with the real dealership details before going live.
 */

const PHONE_RAW = '919994488833' // country code + number, digits only

/** Build a WhatsApp click-to-chat link with a pre-filled message. */
export const waLink = (message) =>
  `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(message)}`

/**
 * Tailored WhatsApp enquiry message for a specific car.
 * `car` may be a string (name) or a car object with name/body/priceFrom.
 */
export const carWaLink = (car) => {
  const name = typeof car === 'string' ? car : `Suzuki ${car.name}`
  const detail =
    typeof car === 'object' && car.body && car.priceFrom
      ? ` (${car.body}, from ${car.priceFrom})`
      : ''
  return waLink(
    `Hi Suriya NEXA Thanjavur, I'm interested in the ${name}${detail}. ` +
      `Please share the on-road price in Thanjavur, current offers, finance/exchange options ` +
      `and test drive availability. Thank you!`
  )
}

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
  whatsappHref: waLink(
    "Hi Suriya NEXA Thanjavur, I'd like to know more about the NEXA range — on-road price, offers and test drive booking. Thank you!"
  ),
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
