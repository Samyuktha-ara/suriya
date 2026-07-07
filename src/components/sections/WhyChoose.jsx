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
          eyebrow="Why Book with Suriya Boopathy"
          title="Thanjavur's Trusted"
          highlight="NEXA Relationship Manager"
          subtitle="From your first enquiry to your joyful delivery, every step with Suriya Boopathy is personal, transparent and stress-free — 370+ happy families in just 3 years."
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
