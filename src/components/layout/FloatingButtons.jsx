import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, CalendarCheck, ArrowUp } from 'lucide-react'
import { DEALER } from '../../data/dealer'
import './FloatingButtons.css'

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      {/* Desktop / tablet vertical rail */}
      <div className="float-rail" aria-label="Quick contact actions">
        <a
          className="float-btn float-btn--call"
          href={DEALER.phoneHref}
          aria-label="Call Suriya NEXA Thanjavur now"
        >
          <Phone size={22} aria-hidden="true" />
          <span className="float-btn__tip">Call Now</span>
        </a>
        <a
          className="float-btn float-btn--wa"
          href={DEALER.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
        >
          <MessageCircle size={22} aria-hidden="true" />
          <span className="float-btn__tip">WhatsApp</span>
        </a>
        <a
          className="float-btn float-btn--td"
          href="#contact"
          aria-label="Book a Suzuki Fronx test drive"
        >
          <CalendarCheck size={22} aria-hidden="true" />
          <span className="float-btn__tip">Test Drive</span>
        </a>
        <AnimatePresence>
          {showTop && (
            <motion.button
              className="float-btn float-btn--top"
              onClick={scrollTop}
              aria-label="Back to top"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
            >
              <ArrowUp size={22} aria-hidden="true" />
              <span className="float-btn__tip">Top</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile bottom action bar */}
      <nav className="float-bar" aria-label="Quick contact actions">
        <a className="float-bar__item float-bar__item--call" href={DEALER.phoneHref}>
          <Phone size={20} aria-hidden="true" />
          <span>Call</span>
        </a>
        <a
          className="float-bar__item float-bar__item--wa"
          href={DEALER.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={20} aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
        <a className="float-bar__item float-bar__item--td" href="#contact">
          <CalendarCheck size={20} aria-hidden="true" />
          <span>Test Drive</span>
        </a>
      </nav>
    </>
  )
}
