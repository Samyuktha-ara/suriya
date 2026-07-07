import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Star, Quote, MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { DEALER } from '../../data/dealer'
import { TESTIMONIALS } from '../../data/content'
import { stagger, fadeUp, viewportOnce } from '../../animations/variants'
import customer1 from '../../assets/customer/IMG_4515.JPG.jpeg'
import customer2 from '../../assets/customer/IMG_4516.JPG.jpeg'
import customer3 from '../../assets/customer/IMG_4517.JPG.jpeg'
import customer4 from '../../assets/customer/IMG_4518.JPG.jpeg'
import './Testimonials.css'

const DELIVERY_PHOTOS = [customer1, customer2, customer3, customer4]

export default function Testimonials() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const isOpen = lightboxIndex !== null

  const openAt = useCallback((i) => setLightboxIndex(i), [])
  const close = useCallback(() => setLightboxIndex(null), [])
  const next = useCallback(
    () => setLightboxIndex((i) => (i + 1) % DELIVERY_PHOTOS.length),
    []
  )
  const prev = useCallback(
    () =>
      setLightboxIndex(
        (i) => (i - 1 + DELIVERY_PHOTOS.length) % DELIVERY_PHOTOS.length
      ),
    []
  )

  // Keyboard: Esc closes, arrows navigate.
  useEffect(() => {
    if (!isOpen) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, close, next, prev])

  // Lock body scroll while lightbox is open.
  useEffect(() => {
    if (!isOpen) return undefined
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen])

  return (
    <section className="section reviews-section" id="testimonials" aria-labelledby="testimonials-title">
      <div className="container reviews__container">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="Loved by 370+"
          highlight="Happy Families"
          subtitle={`Rated ${DEALER.rating}★ by ${DEALER.reviewCount} customers Suriya Boopathy has personally delivered across Thanjavur. Here's what the NEXA family has to say.`}
        />

        <div className="reviews__rating" role="img" aria-label={`Average rating ${DEALER.rating} out of 5`}>
          <div className="reviews__stars" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={22} fill="currentColor" />
            ))}
          </div>
          <p>
            <strong>{DEALER.rating}/5</strong> · {DEALER.reviewCount} verified reviews
          </p>
        </div>

        {/* Polaroid pinboard — click a photo to open the lightbox. */}
        <div className="reviews__pinboard" aria-label="Real deliveries by Suriya Boopathy">
          {DELIVERY_PHOTOS.map((src, i) => (
            <button
              key={i}
              type="button"
              className={`reviews__polaroid reviews__polaroid--${i + 1}`}
              onClick={() => openAt(i)}
              aria-label={`Open delivery photo ${i + 1} in fullscreen`}
            >
              <span className="reviews__polaroid-tape" aria-hidden="true" />
              <img
                src={src}
                className="reviews__polaroid-img"
                alt={`Real delivery photo ${i + 1} — Suriya Boopathy, NEXA Thanjavur`}
                loading="lazy"
                decoding="async"
              />
              <span className="reviews__polaroid-caption">NEXA · Thanjavur</span>
            </button>
          ))}
        </div>

        <motion.ul
          className="reviews__grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {TESTIMONIALS.map((review) => (
            <motion.li className="review-card glass" key={review.name} variants={fadeUp}>
              <Quote className="review-card__quote" size={30} aria-hidden="true" />
              <div className="review-card__stars" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" aria-hidden="true" />
                ))}
              </div>
              <p className="review-card__text">“{review.text}”</p>
              <div className="review-card__author">
                <span className="review-card__avatar" aria-hidden="true">
                  {review.name.charAt(0)}
                </span>
                <div>
                  <strong>{review.name}</strong>
                  <small>
                    <MapPin size={12} aria-hidden="true" /> {review.location} · {review.car}
                  </small>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Delivery photo viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
          >
            <button
              type="button"
              className="lightbox__close"
              onClick={close}
              aria-label="Close photo viewer"
            >
              <X size={22} aria-hidden="true" />
            </button>

            <button
              type="button"
              className="lightbox__nav lightbox__nav--prev"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label="Previous photo"
            >
              <ChevronLeft size={26} aria-hidden="true" />
            </button>

            <motion.div
              key={lightboxIndex}
              className="lightbox__stage"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={DELIVERY_PHOTOS[lightboxIndex]}
                alt={`Delivery photo ${lightboxIndex + 1} — Suriya Boopathy, NEXA Thanjavur`}
                className="lightbox__img"
              />
              <div className="lightbox__meta">
                <span className="lightbox__caption">NEXA · Thanjavur · Real Delivery</span>
                <span className="lightbox__counter">
                  {lightboxIndex + 1} / {DELIVERY_PHOTOS.length}
                </span>
              </div>
            </motion.div>

            <button
              type="button"
              className="lightbox__nav lightbox__nav--next"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label="Next photo"
            >
              <ChevronRight size={26} aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
