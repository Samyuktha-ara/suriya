/**
 * NEXA line-up data. `art` maps to a key in the CarArt SVG component
 * so the site ships with zero external image dependencies.
 */

export const EVITARA = {
  name: 'Suzuki e-Vitara',
  art: 'grandvitara',
  tagline: "NEXA's First-Ever Premium Electric SUV",
  priceFrom: '₹17.99 Lakh*',
  badge: 'NEXA · Electric SUV',
  highlights: [
    'Up to 500 km Range (WLTP)',
    '61 kWh Lithium-ion Battery',
    'AllGrip-e Dual-Motor AWD',
    '7 Airbags Standard',
    'Level 2 ADAS Suite',
    '10.25" SmartPlay Pro+ Infotainment',
  ],
  variants: [
    { name: 'Delta', engine: '49 kWh · 2WD', highlight: 'Smart entry' },
    { name: 'Zeta', engine: '61 kWh · 2WD', highlight: 'Feature packed' },
    { name: 'Alpha AWD', engine: '61 kWh · AllGrip-e', highlight: 'Dual motor' },
  ],
  engines: [
    { label: '49 kWh single-motor 2WD · ~380 km range' },
    { label: '61 kWh single-motor 2WD · up to 500 km WLTP range' },
    { label: '61 kWh AllGrip-e dual-motor AWD · instant torque, all-terrain grip' },
  ],
  mileage: 'Up to 500 km per full charge',
  safety: [
    '7 airbags standard',
    'Level 2 ADAS — adaptive cruise, lane keep, AEB',
    'ESP with Hill Hold Assist',
    'All-4-disc brakes',
    '360° View Camera',
    'ISOFIX anchors & TPMS',
  ],
  technology: [
    '10.25" SmartPlay Pro+ infotainment',
    'Wireless Apple CarPlay & Android Auto',
    'Head-Up Display',
    'Wireless charger & OTA updates',
    'Suzuki Connect for EV — remote charge, climate & range',
  ],
  interior: [
    'Fixed panoramic glass roof',
    'Premium leatherette upholstery',
    'Ventilated & powered front seats',
    'Dual-zone automatic climate',
    'Ambient lighting with EV themes',
  ],
}

export const NEXA_MODELS = [
  {
    name: 'Fronx',
    art: 'fronx',
    priceFrom: '₹7.49 Lakh*',
    body: 'Compact SUV',
    description:
      'The crossover that turns heads in Thanjavur — Turbo Boosterjet performance with SUV confidence.',
    tags: ['1.0L Turbo', 'Up to 28.51 km/l', 'Head-Up Display'],
  },
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
    name: 'Jimny',
    art: 'jimny',
    priceFrom: '₹12.74 Lakh*',
    body: 'Lifestyle 4x4 SUV',
    description:
      'The legendary go-anywhere 4x4. AllGrip Pro with a proven ladder-frame chassis for real adventure.',
    tags: ['AllGrip Pro 4x4', 'Ladder Frame', 'Iconic Design'],
  },
]

// "Why Buy e-Vitara" — feature timeline.
export const EVITARA_REASONS = [
  {
    icon: 'Zap',
    title: 'Zero-Emission Range',
    text: 'Up to 500 km of WLTP range on a single charge — a full week of Thanjavur commuting on one plug-in.',
  },
  {
    icon: 'Gauge',
    title: 'Instant EV Torque',
    text: 'AllGrip-e dual-motor delivers seamless power the moment you press — no gears, no delay, effortless overtakes.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Built Safe',
    text: '7 airbags, Level 2 ADAS, ESP and a reinforced EV platform keep your family fully protected.',
  },
  {
    icon: 'Smartphone',
    title: 'Connected EV Tech',
    text: 'Suzuki Connect for EV, HUD and a 10.25" wireless infotainment let you remote-charge and pre-cool from your phone.',
  },
  {
    icon: 'Mountain',
    title: 'SUV Confidence',
    text: 'Bold SUV proportions with best-in-class ground clearance — Thanjavur roads and monsoons, handled.',
  },
  {
    icon: 'Package',
    title: 'Flat-Floor Cabin',
    text: 'EV flat floor unlocks huge knee-room, a panoramic glass roof and generous boot space for weekend getaways.',
  },
]
