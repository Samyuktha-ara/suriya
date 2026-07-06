import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BadgeCheck,
  RefreshCw,
  Landmark,
  Car,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageCircle,
} from 'lucide-react'
import Button from '../ui/Button'
import { DEALER } from '../../data/dealer'
import './OfferSlider.css'

const SLIDES = [
  {
    key: 'consumer',
    tag: 'July 2026 · Consumer Offer',
    hero: '₹15,000',
    heroLabel: 'Flat Consumer Discount',
    subtitle: 'On the Suzuki Baleno & select NEXA models',
    body: 'Book direct through Suriya Boopathy this July and instantly unlock a ₹15,000 consumer discount over the ex-showroom price — no negotiations, no waiting.',
    icon: BadgeCheck,
    accent: 'gold',
  },
  {
    key: 'exchange',
    tag: 'True Value · Exchange',
    hero: '₹15,000',
    heroLabel: 'Exchange Bonus',
    subtitle: 'On top of the best Maruti True Value price',
    body: 'Get the highest, most transparent valuation on your old car — plus an additional ₹15,000 exchange bonus stacked on top this month.',
    icon: RefreshCw,
    accent: 'cyan',
  },
  {
    key: 'finance',
    tag: 'Punjab National Bank',
    hero: '7.75%',
    heroLabel: 'Interest Rate',
    subtitle: 'Up to 90% on-road funding · same-day approval',
    body: 'Drive home your NEXA with low-interest PNB finance and instant approval. I coordinate the paperwork end to end so you sign once and drive off.',
    icon: Landmark,
    accent: 'violet',
  },
  {
    key: 'doorstep',
    tag: 'Signature Service',
    hero: 'Doorstep',
    heroLabel: 'Test Drive',
    subtitle: 'Baleno · Fronx · Grand Vitara — at your address',
    body: 'Skip the showroom queue. I bring your favourite NEXA car to your home or office at a time that suits you — experience it on the roads you drive every day.',
    icon: Car,
    accent: 'violet',
  },
  {
    key: 'total',
    tag: 'Total July Benefit',
    hero: '₹30,000',
    heroLabel: 'Stacked Savings',
    subtitle: 'Consumer offer + exchange bonus, combined',
    body: 'Stack the ₹15,000 consumer offer with the ₹15,000 exchange bonus for a total ₹30,000 benefit this July — book before 31st to lock in.',
    icon: Sparkles,
    accent: 'gold',
  },
]

const AUTO_INTERVAL_MS = 6000

export default function OfferSlider() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length),
    []
  )
  const jumpTo = useCallback((i) => setIndex(i), [])

  // Auto-advance — plain setTimeout, no per-frame state updates.
  // The progress bar itself is a pure CSS animation (see .offer-slider__progress-fill),
  // so we don't need JS to drive it.
  useEffect(() => {
    if (paused) return undefined
    const id = setTimeout(() => go(1), AUTO_INTERVAL_MS)
    return () => clearTimeout(id)
  }, [index, paused, go])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') go(-1)
      else if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  const slide = SLIDES[index]
  const Icon = slide.icon

  return (
    <section
      className="offer-slider-section"
      id="offers"
      aria-labelledby="offers-title"
    >
      {/* Ambient background — three drifting orbs behind everything */}
      <div className="offer-slider__ambient" aria-hidden="true">
        <span className="offer-slider__orb offer-slider__orb--1" />
        <span className="offer-slider__orb offer-slider__orb--2" />
        <span className="offer-slider__orb offer-slider__orb--3" />
        <span className="offer-slider__grid-lines" />
      </div>

      <div className="container">
        <div className="offer-slider__head">
          <span className="eyebrow offer-slider__eyebrow-lead">
            <Sparkles size={14} aria-hidden="true" /> July 2026 · Live Offers
          </span>
          <h2 className="offer-slider__title" id="offers-title">
            Book This Month · <span className="offer-slider__title-accent">Save Up to ₹30,000</span>
          </h2>
          <p className="offer-slider__subtitle">
            Live NEXA offers curated by Suriya Boopathy — five reasons to lock in your booking this week.
          </p>
        </div>
      </div>

      <div
        className={`offer-slider offer-slider--${slide.accent}`}
        role="region"
        aria-roledescription="carousel"
        aria-label="Current NEXA offers"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="offer-slider__viewport">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.key}
              className="offer-slider__slide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              aria-live="polite"
            >
              {/* LEFT: hero stat */}
              <motion.div
                className="offer-slider__stat"
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              >
                <span className="offer-slider__tag">{slide.tag}</span>
                <h3 className="offer-slider__hero">{slide.hero}</h3>
                <span className="offer-slider__hero-underline" aria-hidden="true" />
                <span className="offer-slider__hero-label">{slide.heroLabel}</span>
              </motion.div>

              {/* RIGHT: detail */}
              <motion.div
                className="offer-slider__detail"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              >
                <span className="offer-slider__icon" aria-hidden="true">
                  <Icon size={26} />
                </span>
                <h4 className="offer-slider__slide-subtitle">{slide.subtitle}</h4>
                <p className="offer-slider__slide-body">{slide.body}</p>
                <div className="offer-slider__cta">
                  <Button href={DEALER.phoneHref} variant="primary" icon={Phone}>
                    Call {DEALER.phoneDisplay}
                  </Button>
                  <Button href={DEALER.whatsappHref} variant="whatsapp" icon={MessageCircle} external>
                    WhatsApp Now
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide counter — luxury magazine style */}
        <div className="offer-slider__counter" aria-hidden="true">
          <span className="offer-slider__counter-current">{String(index + 1).padStart(2, '0')}</span>
          <span className="offer-slider__counter-sep" />
          <span className="offer-slider__counter-total">{String(SLIDES.length).padStart(2, '0')}</span>
        </div>

        {/* Controls */}
        <div className="offer-slider__controls">
          <button
            type="button"
            className="offer-slider__nav"
            onClick={() => go(-1)}
            aria-label="Previous offer"
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>

          <div className="offer-slider__dots" role="tablist" aria-label="Offer navigation">
            {SLIDES.map((s, i) => (
              <button
                key={s.key}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show offer ${i + 1}: ${s.hero}`}
                className={`offer-slider__dot ${i === index ? 'is-active' : ''}`}
                onClick={() => jumpTo(i)}
              >
                <span className="offer-slider__dot-inner" />
              </button>
            ))}
          </div>

          <button
            type="button"
            className="offer-slider__nav"
            onClick={() => go(1)}
            aria-label="Next offer"
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="offer-slider__progress" aria-hidden="true">
          {/* Re-mount on every slide change so the CSS keyframe restarts from 0. */}
          <span
            key={`${index}-${paused ? 'paused' : 'running'}`}
            className={`offer-slider__progress-fill ${paused ? 'is-paused' : ''}`}
          />
        </div>
      </div>
    </section>
  )
}
