import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import Icon from '../ui/Icon'
import { stagger, fadeUp, viewportOnce } from '../../animations/variants'
import { WHY_CHOOSE } from '../../data/content'
import './WhyChoose.css'

export default function WhyChoose() {
  return (
    <section className="section section--tint" id="why-choose" aria-labelledby="why-choose-title">
      <div className="container">
        <SectionHeading
          eyebrow="Why Suriya NEXA"
          title="Thanjavur's Most Trusted"
          highlight="NEXA Dealer"
          subtitle="From your first enquiry to your joyful delivery, every step at Suriya NEXA Thanjavur is designed around a premium, transparent and stress-free car-buying experience."
        />

        <motion.ul
          className="why__grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {WHY_CHOOSE.map((reason) => (
            <motion.li className="why__card glass" key={reason.title} variants={fadeUp}>
              <span className="why__icon" aria-hidden="true">
                <Icon name={reason.icon} size={24} />
              </span>
              <h3 className="why__title">{reason.title}</h3>
              <p className="why__text">{reason.text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
