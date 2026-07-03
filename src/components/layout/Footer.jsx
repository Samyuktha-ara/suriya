import { MapPin, Phone, Mail, Clock, Globe, Camera, Video } from 'lucide-react'
import { DEALER, NAV_LINKS, SERVICE_AREAS } from '../../data/dealer'
import './Footer.css'

export default function Footer() {
  const year = 2026

  return (
    <footer className="footer" id="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <img src="/favicon.svg" alt="Suriya NEXA Thanjavur logo" width="46" height="46" />
            <div>
              <strong>Suriya NEXA</strong>
              <small>Authorized Suzuki NEXA Dealer · Thanjavur</small>
            </div>
          </div>
          <p className="footer__about">
            Suriya NEXA is the trusted Suzuki NEXA showroom in Thanjavur for the Fronx, Baleno,
            Grand Vitara, Jimny, Invicto, XL6 and Ignis — with the best on-road price, easy finance
            and premium after-sales support.
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
            © {year} Suriya NEXA Thanjavur. Authorized Maruti Suzuki NEXA Dealer. All rights
            reserved.
          </p>
          <p className="footer__disclaimer">
            *Prices are indicative ex-showroom/starting prices and may vary. Contact the showroom
            for the exact on-road price in Thanjavur.
          </p>
        </div>
      </div>
    </footer>
  )
}
