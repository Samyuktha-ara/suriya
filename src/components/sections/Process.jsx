import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import Icon from '../ui/Icon'
import { stagger, fadeUp, viewportOnce } from '../../animations/variants'
import { PROCESS_STEPS } from '../../data/content'
import './Process.css'

export default function Process() {
  return (
    <section className="section section--tint" id="process" aria-labelledby="process-title">
      <div className="container">
        <SectionHeading
          eyebrow="How It Works"
          title="Your Journey to"
          highlight="Delivery Day"
          subtitle="Five simple, transparent steps from your first WhatsApp message to keys in hand — coordinated end-to-end by Suriya Boopathy."
        />

        <motion.ol
          className="process"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {PROCESS_STEPS.map((step, i) => (
            <motion.li className="process__step" key={step.title} variants={fadeUp}>
              <div className="process__icon" aria-hidden="true">
                <Icon name={step.icon} size={24} />
                <span className="process__step-num">{i + 1}</span>
              </div>
              <h3 className="process__title">{step.title}</h3>
              <p className="process__text">{step.text}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
