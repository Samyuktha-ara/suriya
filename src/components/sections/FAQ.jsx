import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Phone } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { DEALER } from '../../data/dealer'
import { FAQS } from '../../data/faqs'
import './FAQ.css'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <SectionHeading
          eyebrow="Questions & Answers"
          title="NEXA Thanjavur"
          highlight="FAQs"
          subtitle="Everything you need to know about booking a NEXA car with Suriya Boopathy — pricing across the full range, finance, delivery, warranty and more."
        />

        <ul className="faq__list">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <li className={`faq__item ${isOpen ? 'faq__item--open' : ''}`} key={item.q}>
                <h3 className="faq__q-wrap">
                  <button
                    className="faq__q"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-btn-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className="faq__chevron"
                      size={20}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq__panel"
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-btn-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>

        <div className="faq__cta glass">
          <div>
            <h3>Still have a question?</h3>
            <p>Ask Suriya Boopathy directly — pricing, offers, doorstep test drives across the full NEXA range.</p>
          </div>
          <Button href={DEALER.phoneHref} variant="call" icon={Phone}>
            Call {DEALER.phoneDisplay}
          </Button>
        </div>
      </div>
    </section>
  )
}
