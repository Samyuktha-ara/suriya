import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  CalendarCheck,
  Send,
  CheckCircle2,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { DEALER } from '../../data/dealer'
import { NEXA_MODELS } from '../../data/cars'
import { fadeUp, viewportOnce } from '../../animations/variants'
import './Contact.css'

const MODELS = ['Suzuki Fronx', ...NEXA_MODELS.map((c) => `Suzuki ${c.name}`)]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', model: 'Suzuki Fronx', message: '' })

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = [
      `Hi Suriya Boopathy, I would like to enquire about the ${form.model}.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.message ? `Message: ${form.message}` : '',
    ]
      .filter(Boolean)
      .join('\n')
    const base = DEALER.whatsappHref.split('?')[0]
    window.open(`${base}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <section className="section section--tint" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          eyebrow="Call · WhatsApp · Enquire"
          title="Book a Doorstep Test Drive with"
          highlight="Suriya Boopathy"
          subtitle="Call, WhatsApp or send an enquiry — Suriya will personally get back to you with the best on-road price, PNB finance at 7.75% and a test drive at your doorstep."
        />

        <div className="contact">
          {/* Left: info + map */}
          <motion.div
            className="contact__info"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <div className="contact__map glass">
              <iframe
                title="NEXA Thanjavur — Suriya Boopathy location on Google Maps"
                src={DEALER.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                className="contact__map-cta"
                href={DEALER.mapsQuery}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={16} aria-hidden="true" /> Get Directions
              </a>
            </div>

            <ul className="contact__details">
              <li>
                <span className="contact__detail-icon" aria-hidden="true">
                  <MapPin size={18} />
                </span>
                <div>
                  <strong>Showroom Address</strong>
                  <p>{DEALER.fullAddress}</p>
                </div>
              </li>
              <li>
                <span className="contact__detail-icon" aria-hidden="true">
                  <Phone size={18} />
                </span>
                <div>
                  <strong>Call / Enquire</strong>
                  <p>
                    <a href={DEALER.phoneHref}>{DEALER.phoneDisplay}</a>
                  </p>
                </div>
              </li>
              <li>
                <span className="contact__detail-icon" aria-hidden="true">
                  <Mail size={18} />
                </span>
                <div>
                  <strong>Email</strong>
                  <p>
                    <a href={`mailto:${DEALER.email}`}>{DEALER.email}</a>
                  </p>
                </div>
              </li>
              <li>
                <span className="contact__detail-icon" aria-hidden="true">
                  <Clock size={18} />
                </span>
                <div>
                  <strong>Working Hours</strong>
                  {DEALER.hours.map((h) => (
                    <p key={h.day}>
                      {h.day}: {h.time}
                    </p>
                  ))}
                </div>
              </li>
            </ul>

            <div className="contact__quick-cta">
              <Button href={DEALER.phoneHref} variant="call" icon={Phone}>
                Call Now
              </Button>
              <Button href={DEALER.whatsappHref} variant="whatsapp" icon={MessageCircle} external>
                WhatsApp Us
              </Button>
            </div>
          </motion.div>

          {/* Right: enquiry form */}
          <motion.div
            className="contact__form-wrap glass"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {sent ? (
              <div className="contact__success" role="status">
                <CheckCircle2 size={54} aria-hidden="true" />
                <h3>Thank you, {form.name || 'friend'}!</h3>
                <p>
                  Your enquiry for the <strong>{form.model}</strong> is on its way. Suriya Boopathy
                  will contact you shortly from NEXA Thanjavur. You can also call directly right now
                  for instant assistance.
                </p>
                <Button href={DEALER.phoneHref} variant="call" icon={Phone}>
                  Call {DEALER.phoneDisplay}
                </Button>
              </div>
            ) : (
              <>
                <div className="contact__form-head">
                  <span className="eyebrow">
                    <CalendarCheck size={14} aria-hidden="true" /> Free Doorstep Test Drive
                  </span>
                  <h3 id="contact-title">Get the Best On-Road Price</h3>
                  <p>Share your details and Suriya Boopathy will personally call you back within 24 hours.</p>
                </div>
                <form className="contact__form" onSubmit={handleSubmit}>
                  <div className="contact__field">
                    <label htmlFor="cf-name">Full Name</label>
                    <input
                      id="cf-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={update}
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="cf-phone">Phone Number</label>
                    <input
                      id="cf-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      inputMode="tel"
                      pattern="[0-9+ ]{10,15}"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={update}
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="cf-model">Interested Model</label>
                    <select id="cf-model" name="model" value={form.model} onChange={update}>
                      {MODELS.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="contact__field">
                    <label htmlFor="cf-message">Message (optional)</label>
                    <textarea
                      id="cf-message"
                      name="message"
                      rows="3"
                      placeholder="I'd like a test drive / on-road price / exchange quote…"
                      value={form.message}
                      onChange={update}
                    />
                  </div>
                  <Button type="submit" variant="primary" size="lg" icon={Send} className="contact__submit">
                    Send Enquiry
                  </Button>
                  <p className="contact__consent">
                    By submitting, you agree to be contacted by Suriya Boopathy (NEXA Thanjavur)
                    about your enquiry.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
