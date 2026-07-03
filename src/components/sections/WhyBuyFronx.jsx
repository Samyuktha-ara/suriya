import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import Icon from '../ui/Icon'
import Button from '../ui/Button'
import { CalendarCheck } from 'lucide-react'
import { stagger, fadeUp, viewportOnce } from '../../animations/variants'
import { FRONX_REASONS } from '../../data/cars'
import './WhyBuyFronx.css'

export default function WhyBuyFronx() {
  return (
    <section className="section" id="why-fronx" aria-labelledby="why-fronx-title">
      <div className="container">
        <SectionHeading
          eyebrow="Why Buy the Fronx"
          title="Six Reasons the Fronx"
          highlight="Wins in Thanjavur"
          subtitle="Turbo performance, class-leading mileage and SUV confidence — here's why the Suzuki Fronx is the smartest premium crossover choice for Thanjavur roads."
        />

        <motion.ol
          className="timeline"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {FRONX_REASONS.map((reason, i) => (
            <motion.li className="timeline__item" key={reason.title} variants={fadeUp}>
              <div className="timeline__marker" aria-hidden="true">
                <Icon name={reason.icon} size={22} />
              </div>
              <div className="timeline__content glass">
                <span className="timeline__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="timeline__title">{reason.title}</h3>
                <p className="timeline__text">{reason.text}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>

        <div className="timeline__cta">
          <Button href="#contact" variant="primary" size="lg" icon={CalendarCheck}>
            Experience the Fronx — Book a Test Drive
          </Button>
        </div>
      </div>
    </section>
  )
}
