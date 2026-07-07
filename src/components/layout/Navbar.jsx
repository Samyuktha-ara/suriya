import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import Button from '../ui/Button'
import { DEALER, NAV_LINKS } from '../../data/dealer'
import logo from '../../assets/logo.webp'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <motion.header
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="nav__inner container" aria-label="Primary">
        <a href="#top" className="nav__brand" aria-label="Suriya Boopathy — Senior Relationship Manager, NEXA Thanjavur">
          <img
            className="nav__logo-img"
            src={logo}
            alt="Suriya Boopathy — Senior Relationship Manager, NEXA Thanjavur"
            width="640"
            height="280"
          />
        </a>

        <ul className="nav__links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav__cta">
          <Button href={DEALER.phoneHref} variant="primary" size="sm" icon={Phone}>
            Call Now
          </Button>
        </div>

        <button
          className="nav__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="nav__mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="nav__mobile-links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="nav__mobile-link" onClick={closeMenu}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="nav__mobile-cta">
              <Button href={DEALER.phoneHref} variant="call" icon={Phone} onClick={closeMenu}>
                Call {DEALER.phoneDisplay}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
