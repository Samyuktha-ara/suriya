import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import Icon from '../ui/Icon'
import Button from '../ui/Button'
import { CalendarCheck } from 'lucide-react'
import { stagger, fadeUp, viewportOnce } from '../../animations/variants'
import { EVITARA_REASONS } from '../../data/cars'
import './WhyBuyFronx.css'

export default function WhyBuyFronx() {
  return (
    <section className="section" id="why-evitara" aria-labelledby="why-evitara-title">
      <div className="container">
        <SectionHeading
          eyebrow="Why Buy the e-Vitara"
          title="Six Reasons the e-Vitara"
          highlight="Wins in Thanjavur"
          subtitle="500 km of WLTP range, instant EV torque and NEXA's premium cabin — here's why the Suzuki e-Vitara is the smartest electric SUV choice for Thanjavur roads."
        />

        <motion.ol
          className="timeline"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {EVITARA_REASONS.map((reason, i) => (
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
            Book an e-Vitara Test Drive
          </Button>
        </div>
      </div>
    </section>
  )
}
