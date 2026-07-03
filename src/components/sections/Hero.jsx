import {
  Award,
  Car,
  ShieldCheck,
  Wallet,
  RefreshCw,
  MapPin,
  Phone,
  MessageCircle,
  CalendarCheck,
  Star,
} from 'lucide-react'
import { DEALER } from '../../data/dealer'
import heroImg from '../../assets/hero.webp'
import './Hero.css'

const FEATURES = [
  { icon: Award, l1: 'Premium', l2: 'Experience' },
  { icon: Car, l1: 'Wide Range', l2: 'of Cars' },
  { icon: ShieldCheck, l1: 'Trusted', l2: 'Service' },
  { icon: Wallet, l1: 'Easy', l2: 'Finance' },
  { icon: RefreshCw, l1: 'Exchange', l2: 'Offers' },
]

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Suriya NEXA Thanjavur — Suzuki Fronx showroom">
      {/* Full-bleed cinematic banner (LCP element) */}
      <div className="hero__bg">
        <img
          src={heroImg}
          className="hero__bg-img"
          alt="Suzuki Fronx, Baleno and Grand Vitara displayed at the Suriya NEXA showroom in Thanjavur"
          fetchPriority="high"
          decoding="async"
          width="1730"
          height="920"
        />
        <div className="hero__scrim" />
      </div>

      {/* Main content */}
      <div className="hero__center container">
        <div className="hero__content">
          <span className="hero__tag hero__reveal" style={{ '--d': '0.05s' }}>
            SUZUKI <span className="hero__tag-sep" aria-hidden="true">|</span> NEXA · Thanjavur
          </span>
          <h1 className="hero__title hero__reveal" style={{ '--d': '0.15s' }}>
            <span className="hero__line">
              Create<span className="hero__dot">.</span>
            </span>
            <span className="hero__line">
              Inspire<span className="hero__dot">.</span>
            </span>
            <span className="hero__line hero__line--gold">
              Experience<span className="hero__dot">.</span>
            </span>
          </h1>

          <p className="hero__subtitle hero__reveal" style={{ '--d': '0.3s' }}>
            Discover the NEXA range. Driven by excellence.
            <br />
            Book your Suzuki Fronx test drive in Thanjavur today.
          </p>

          {/* Conversion CTAs */}
          <div className="hero__cta hero__reveal" style={{ '--d': '0.42s' }}>
            <a href="#contact" className="hero__btn hero__btn--primary">
              <CalendarCheck size={19} aria-hidden="true" />
              Book Test Drive
            </a>
            <a href={DEALER.phoneHref} className="hero__btn hero__btn--call">
              <Phone size={18} aria-hidden="true" />
              Call Now
            </a>
            <a
              href={DEALER.whatsappHref}
              className="hero__btn hero__btn--wa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Suriya NEXA on WhatsApp"
            >
              <MessageCircle size={20} aria-hidden="true" />
            </a>
          </div>

          {/* Trust line */}
          <div className="hero__trust hero__reveal" style={{ '--d': '0.55s' }}>
            <span className="hero__trust-stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </span>
            <span>
              <strong>4.9/5</strong> · Trusted by 15,000+ customers across Thanjavur
            </span>
          </div>
        </div>
      </div>

      {/* Bottom strip: features + contact */}
      <div className="hero__strip hero__reveal" style={{ '--d': '0.6s' }}>
        <div className="container hero__strip-inner">
          <ul className="hero__features">
            {FEATURES.map((f) => (
              <li className="hero__feature" key={f.l2}>
                <f.icon className="hero__feature-icon" size={22} aria-hidden="true" />
                <span className="hero__feature-text">
                  {f.l1}
                  <br />
                  {f.l2}
                </span>
              </li>
            ))}
          </ul>

          <div className="hero__contact">
            <a className="hero__contact-item" href={DEALER.mapsQuery} target="_blank" rel="noopener noreferrer">
              <MapPin className="hero__contact-icon" size={20} aria-hidden="true" />
              <span>
                NEXA Suriya
                <br />
                Thanjavur
              </span>
            </a>
            <a className="hero__contact-item" href={DEALER.phoneHref}>
              <Phone className="hero__contact-icon" size={20} aria-hidden="true" />
              <span>
                {DEALER.phoneDisplay}
                <br />
                Book Your Test Drive Today
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
