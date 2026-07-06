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
              July 2026 · <span className="grad-text">₹30,000 Total Benefit</span>
            </motion.h2>
            <motion.p className="finance__text" variants={fadeUp}>
              This month, book your NEXA through me and unlock a <strong>₹15,000 consumer offer</strong>,
              a <strong>₹15,000 exchange bonus</strong> and <strong>Punjab National Bank finance at
              7.75%</strong> — up to 90% on-road funding with same-day approval. Simple, transparent,
              and delivered to your doorstep.
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
