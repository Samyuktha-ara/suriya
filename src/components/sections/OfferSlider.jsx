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
    tag: 'July · Consumer Offer',
    hero: '₹15,000',
    subtitle: 'Flat discount on Baleno & select NEXA models — booked direct through me.',
    icon: BadgeCheck,
    accent: 'gold',
  },
  {
    key: 'exchange',
    tag: 'True Value · Exchange',
    hero: '₹15,000',
    subtitle: 'Exchange bonus on top of the best Maruti True Value price for your old car.',
    icon: RefreshCw,
    accent: 'cyan',
  },
  {
    key: 'finance',
    tag: 'Punjab National Bank',
    hero: '7.75%',
    subtitle: 'Up to 90% on-road funding with same-day PNB approval — I coordinate everything.',
    icon: Landmark,
    accent: 'violet',
  },
  {
    key: 'doorstep',
    tag: 'Signature Service',
    hero: 'Doorstep',
    subtitle: 'I bring the Baleno, Fronx or e-Vitara to your address — skip the showroom queue.',
    icon: Car,
    accent: 'violet',
  },
  {
    key: 'total',
    tag: 'Total July Benefit',
    hero: '₹30,000',
    subtitle: 'Consumer offer + exchange bonus, stacked. Book before 31st July to lock in.',
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
      <div className="offer-slider__ambient" aria-hidden="true">
        <span className="offer-slider__orb offer-slider__orb--1" />
        <span className="offer-slider__orb offer-slider__orb--2" />
      </div>

      <div className="container">
        <div className="offer-slider__head">
          <span className="eyebrow offer-slider__eyebrow-lead">
            <Sparkles size={14} aria-hidden="true" /> July 2026 · Live Offers
          </span>
          <h2 className="offer-slider__title" id="offers-title">
            Book This Month · <span className="offer-slider__title-accent">Save Up to ₹30,000</span>
          </h2>
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
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              aria-live="polite"
            >
              <div className="offer-slider__stat">
                <span className="offer-slider__tag">{slide.tag}</span>
                <h3 className="offer-slider__hero">{slide.hero}</h3>
              </div>

              <div className="offer-slider__detail">
                <span className="offer-slider__icon" aria-hidden="true">
                  <Icon size={22} />
                </span>
                <p className="offer-slider__slide-subtitle">{slide.subtitle}</p>
                <div className="offer-slider__cta">
                  <Button href={DEALER.phoneHref} variant="primary" icon={Phone}>
                    Call {DEALER.phoneDisplay}
                  </Button>
                  <Button href={DEALER.whatsappHref} variant="whatsapp" icon={MessageCircle} external>
                    WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="offer-slider__controls">
          <button
            type="button"
            className="offer-slider__nav"
            onClick={() => go(-1)}
            aria-label="Previous offer"
          >
            <ChevronLeft size={18} aria-hidden="true" />
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
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="offer-slider__progress" aria-hidden="true">
          <span
            key={`${index}-${paused ? 'paused' : 'running'}`}
            className={`offer-slider__progress-fill ${paused ? 'is-paused' : ''}`}
          />
        </div>
      </div>
    </section>
  )
}
