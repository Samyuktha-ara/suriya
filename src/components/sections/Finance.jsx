import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'
import Icon from '../ui/Icon'
import Button from '../ui/Button'
import { DEALER } from '../../data/dealer'
import { FINANCE_OPTIONS } from '../../data/content'
import { stagger, fadeUp, scaleIn, viewportOnce } from '../../animations/variants'
import './Finance.css'

export default function Finance() {
  return (
    <section className="section section--tint" id="finance" aria-labelledby="finance-title">
      <div className="container">
        <div className="finance">
          <motion.div
            className="finance__intro"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.span className="eyebrow" variants={fadeUp}>
              Finance Assistance
            </motion.span>
            <motion.h2 className="finance__title" id="finance-title" variants={fadeUp}>
              Drive Home Your Fronx with <span className="grad-text">Easy Finance</span>
            </motion.h2>
            <motion.p className="finance__text" variants={fadeUp}>
              Get up to <strong>90% on-road funding</strong>, the lowest EMIs and instant loan
              approval with all leading banks — plus the best exchange value for your old car. Our
              finance experts at Suriya NEXA Thanjavur make owning a NEXA car effortless.
            </motion.p>
            <motion.div className="finance__cta" variants={fadeUp}>
              <Button href={DEALER.phoneHref} variant="call" icon={Phone}>
                Check EMI Eligibility
              </Button>
              <Button href={DEALER.whatsappHref} variant="whatsapp" icon={MessageCircle} external>
                WhatsApp for a Quote
              </Button>
            </motion.div>
          </motion.div>

          <motion.ul
            className="finance__grid"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {FINANCE_OPTIONS.map((opt) => (
              <motion.li className="finance__card glass" key={opt.title} variants={scaleIn}>
                <span className="finance__icon" aria-hidden="true">
                  <Icon name={opt.icon} size={22} />
                </span>
                <h3 className="finance__card-title">{opt.title}</h3>
                <p className="finance__card-text">{opt.text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
