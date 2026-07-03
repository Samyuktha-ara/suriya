/**
 * NEXA line-up data. `art` maps to a key in the CarArt SVG component
 * so the site ships with zero external image dependencies.
 */

export const FRONX = {
  name: 'Suzuki Fronx',
  art: 'fronx',
  tagline: 'The Crossover That Turns Heads in Thanjavur',
  priceFrom: '₹7.49 Lakh*',
  badge: 'Most Loved SUV',
  highlights: [
    '1.0L Turbo Boosterjet Engine',
    'Up to 28.51 km/l Mileage',
    '6 Airbags Standard',
    'Head-Up Display',
    'Suzuki Connect Telematics',
    '9" SmartPlay Pro+ Infotainment',
  ],
  variants: [
    { name: 'Sigma', engine: '1.2L', highlight: 'Smart entry' },
    { name: 'Delta / Delta+', engine: '1.2L', highlight: 'Best value' },
    { name: 'Zeta', engine: '1.2L / 1.0L Turbo', highlight: 'Feature packed' },
    { name: 'Alpha', engine: '1.0L Turbo', highlight: 'Fully loaded' },
  ],
  engines: [
    { label: '1.2L Advanced K-Series Dual Jet, Dual VVT with Smart Hybrid' },
    { label: '1.0L Turbo Boosterjet — 100 PS of instant performance' },
  ],
  mileage: 'Up to 28.51 km/l (ARAI certified)',
  safety: [
    'Up to 6 airbags',
    'ESP with Hill Hold Assist',
    'ABS with EBD',
    'All-4-disc brakes (Turbo)',
    '360° View Camera',
    'Rear parking sensors & TPMS',
  ],
  technology: [
    'Suzuki Connect with 40+ features',
    'Wireless Apple CarPlay & Android Auto',
    'Head-Up Display',
    'Wireless charger',
    'Voice assist & OTA updates',
  ],
  interior: [
    'Layered dashboard with soft-touch finish',
    'Premium leatherette upholstery',
    'Automatic climate control',
    'Ambient lighting',
    'Flat-bottom leather steering',
  ],
}

export const NEXA_MODELS = [
  {
    name: 'Baleno',
    art: 'baleno',
    priceFrom: '₹6.66 Lakh*',
    body: 'Premium Hatchback',
    description:
      "Thanjavur's favourite premium hatchback — spacious, feature-rich and up to 22.9 km/l efficient.",
    tags: ['Head-Up Display', '360° Camera', '6 Airbags'],
  },
  {
    name: 'Grand Vitara',
    art: 'grandvitara',
    priceFrom: '₹11.42 Lakh*',
    body: 'Mid-size SUV',
    description:
      'Intelligent Electric Hybrid & AllGrip technology. A bold, luxurious SUV for Thanjavur families.',
    tags: ['Strong Hybrid', 'AllGrip AWD', 'Panoramic Sunroof'],
  },
  {
    name: 'Jimny',
    art: 'jimny',
    priceFrom: '₹12.74 Lakh*',
    body: 'Lifestyle 4x4 SUV',
    description:
      'The legendary go-anywhere 4x4. AllGrip Pro with a proven ladder-frame chassis for real adventure.',
    tags: ['AllGrip Pro 4x4', 'Ladder Frame', 'Iconic Design'],
  },
  {
    name: 'Invicto',
    art: 'invicto',
    priceFrom: '₹24.92 Lakh*',
    body: 'Flagship MPV',
    description:
      "NEXA's flagship premium MPV with Intelligent Electric Hybrid and limousine-like 3-row comfort.",
    tags: ['Strong Hybrid', '7/8 Seater', 'Premium Cabin'],
  },
  {
    name: 'XL6',
    art: 'xl6',
    priceFrom: '₹11.71 Lakh*',
    body: '6-Seater Premium MPV',
    description:
      'Captain seats, commanding stance and Smart Hybrid efficiency — the ideal premium family MPV.',
    tags: ['Captain Seats', 'Smart Hybrid', 'Ventilated Seats'],
  },
  {
    name: 'Ignis',
    art: 'ignis',
    priceFrom: '₹5.84 Lakh*',
    body: 'Urban Compact SUV',
    description:
      'Bold, compact and city-smart. A fun, fuel-efficient urban SUV that fits Thanjavur streets perfectly.',
    tags: ['Compact SUV', 'Up to 20.89 km/l', 'AGS Auto'],
  },
]

// "Why Buy Fronx" — feature timeline.
export const FRONX_REASONS = [
  {
    icon: 'Fuel',
    title: 'Class-Leading Mileage',
    text: 'Up to 28.51 km/l with Smart Hybrid — save every single time you drive across Thanjavur.',
  },
  {
    icon: 'Gauge',
    title: 'Turbo Performance',
    text: '1.0L Turbo Boosterjet delivers 100 PS & 147.6 Nm for effortless highway overtakes.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Built Safe',
    text: 'Up to 6 airbags, ESP, Hill Hold and a strong HEARTECT platform keep your family protected.',
  },
  {
    icon: 'Smartphone',
    title: 'Connected Technology',
    text: 'Suzuki Connect, Head-Up Display and a 9" wireless infotainment keep you always in control.',
  },
  {
    icon: 'Mountain',
    title: 'SUV Ground Clearance',
    text: '190 mm ground clearance confidently handles Thanjavur roads, speed breakers and monsoons.',
  },
  {
    icon: 'Package',
    title: 'Generous Boot Space',
    text: '308 litres of luggage room — perfect for weekend getaways to Kumbakonam and beyond.',
  },
]
