import { MapPin, Phone, Mail, Clock, Globe, Camera, Video } from 'lucide-react'
import { DEALER, NAV_LINKS, SERVICE_AREAS } from '../../data/dealer'
import logo from '../../assets/logo.webp'
import './Footer.css'

export default function Footer() {
  const year = 2026

  return (
    <footer className="footer" id="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <img
              className="footer__logo-img"
              src={logo}
              alt="Suriya Boopathy — Senior Relationship Manager, NEXA Thanjavur"
              width="640"
              height="280"
            />
            <small>Suriya Boopathy · Senior Relationship Manager · NEXA Thanjavur</small>
          </div>
          <p className="footer__about">
            I'm Suriya Boopathy — a Senior Relationship Manager at NEXA Thanjavur with 3 years of
            experience and 370+ happy families delivered. Book your Baleno, Fronx, Grand Vitara,
            Jimny, Invicto or XL6 directly with me for doorstep test drives, ₹30,000 total July
            benefit and PNB finance at 7.75%.
          </p>
          <div className="footer__social" aria-label="Social media">
            <a href={DEALER.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <Globe size={18} />
            </a>
            <a href={DEALER.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <Camera size={18} />
            </a>
            <a href={DEALER.social.youtube} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <Video size={18} />
            </a>
          </div>
        </div>

        <nav className="footer__col" aria-label="Footer navigation">
          <h3 className="footer__heading">Explore</h3>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h3 className="footer__heading">Contact</h3>
          <ul className="footer__contact">
            <li>
              <MapPin size={17} aria-hidden="true" />
              <span>{DEALER.fullAddress}</span>
            </li>
            <li>
              <Phone size={17} aria-hidden="true" />
              <a href={DEALER.phoneHref}>{DEALER.phoneDisplay}</a>
            </li>
            <li>
              <Mail size={17} aria-hidden="true" />
              <a href={`mailto:${DEALER.email}`}>{DEALER.email}</a>
            </li>
            <li>
              <Clock size={17} aria-hidden="true" />
              <span>
                {DEALER.hours.map((h) => (
                  <span key={h.day} className="footer__hours-row">
                    {h.day}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Areas We Serve</h3>
          <ul className="footer__areas">
            {SERVICE_AREAS.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <p>
            © {year} Suriya Boopathy · Senior Relationship Manager, NEXA Thanjavur. Authorized
            Maruti Suzuki NEXA. All rights reserved.
          </p>
          <p className="footer__disclaimer">
            *Prices, offers and interest rates are indicative for July 2026 and may vary. Contact
            Suriya Boopathy for the exact on-road price in Thanjavur.
          </p>
        </div>
      </div>
    </footer>
  )
}
