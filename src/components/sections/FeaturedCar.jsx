import { motion } from 'framer-motion'
import {
  Phone,
  CalendarCheck,
  Fuel,
  Gauge,
  ShieldCheck,
  Cpu,
  Armchair,
  Check,
  Sparkles,
} from 'lucide-react'
import Button from '../ui/Button'
import { DEALER } from '../../data/dealer'
import { EVITARA } from '../../data/cars'
import evitaraImg from '../../assets/e-vitara.webp'
import { fadeUp, viewportOnce, stagger } from '../../animations/variants'
import './FeaturedCar.css'

const SPEC_TABS = [
  { key: 'engines', label: 'Engine Options', icon: Gauge, field: 'engines', map: (e) => e.label },
  { key: 'safety', label: 'Safety', icon: ShieldCheck, field: 'safety' },
  { key: 'technology', label: 'Technology', icon: Cpu, field: 'technology' },
  { key: 'interior', label: 'Premium Interior', icon: Armchair, field: 'interior' },
]

export default function FeaturedCar() {
  return (
    <section className="section" id="evitara" aria-labelledby="evitara-title">
      <div className="container">
        <div className="featured">
          {/* Left: visual (wrapper is sticky; motion goes on inner element so framer-motion's inline transform can't break sticky) */}
          <div className="featured__visual-sticky">
            <motion.div
              className="featured__visual glass"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              <span className="featured__badge">
                <Sparkles size={14} aria-hidden="true" /> {EVITARA.badge}
              </span>
              <div className="featured__art">
                <img
                  src={evitaraImg}
                  alt="Suzuki e-Vitara premium electric SUV at NEXA Thanjavur — book with Suriya Boopathy"
                  loading="lazy"
                  decoding="async"
                  width="1560"
                  height="1040"
                />
              </div>
              <div className="featured__price">
                <span className="featured__price-label">Starting at</span>
                <span className="featured__price-value grad-text">{EVITARA.priceFrom}</span>
                <span className="featured__price-note">ex-showroom · Thanjavur</span>
              </div>

              <ul className="featured__quick">
                <li>
                  <Fuel size={16} aria-hidden="true" /> {EVITARA.mileage}
                </li>
                <li>
                  <Gauge size={16} aria-hidden="true" /> AllGrip-e Dual Motor
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right: details */}
          <motion.div
            className="featured__body"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <span className="eyebrow">Featured · Suzuki e-Vitara</span>
            <h2 className="featured__title" id="evitara-title">
              The <span className="grad-text">Suzuki e-Vitara</span>
            </h2>
            <p className="featured__tagline">{EVITARA.tagline}</p>

            <motion.ul
              className="featured__highlights"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              {EVITARA.highlights.map((h) => (
                <motion.li key={h} variants={fadeUp}>
                  <Check size={16} aria-hidden="true" /> {h}
                </motion.li>
              ))}
            </motion.ul>

            {/* Variants */}
            <div className="featured__variants">
              <h3 className="featured__subhead">Variants</h3>
              <div className="featured__variant-grid">
                {EVITARA.variants.map((v) => (
                  <div className="featured__variant" key={v.name}>
                    <strong>{v.name}</strong>
                    <span>{v.engine}</span>
                    <small>{v.highlight}</small>
                  </div>
                ))}
              </div>
            </div>

            {/* Spec accordions */}
            <div className="featured__specs">
              {SPEC_TABS.map((tab) => {
                const items = EVITARA[tab.field]
                return (
                  <details className="featured__spec" key={tab.key}>
                    <summary>
                      <tab.icon size={18} aria-hidden="true" />
                      {tab.label}
                    </summary>
                    <ul>
                      {items.map((it) => (
                        <li key={tab.map ? tab.map(it) : it}>
                          <Check size={14} aria-hidden="true" />
                          {tab.map ? tab.map(it) : it}
                        </li>
                      ))}
                    </ul>
                  </details>
                )
              })}
            </div>

            <div className="featured__cta">
              <Button href="#contact" variant="primary" size="lg" icon={CalendarCheck}>
                Book e-Vitara Test Drive
              </Button>
              <Button href={DEALER.phoneHref} variant="outline" size="lg" icon={Phone}>
                Get On-Road Price
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
