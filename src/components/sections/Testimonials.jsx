import { motion } from 'framer-motion'
import { Star, Quote, MapPin } from 'lucide-react'
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

        {/* Polaroid pinboard — real delivery photos, staged as a fanned spread. */}
        <div className="reviews__pinboard" aria-label="Real deliveries by Suriya Boopathy">
          {DELIVERY_PHOTOS.map((src, i) => (
            <figure key={i} className={`reviews__polaroid reviews__polaroid--${i + 1}`}>
              <span className="reviews__polaroid-tape" aria-hidden="true" />
              <img
                src={src}
                className="reviews__polaroid-img"
                alt={`Real delivery photo ${i + 1} — Suriya Boopathy, NEXA Thanjavur`}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="reviews__polaroid-caption">NEXA · Thanjavur</figcaption>
            </figure>
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
    </section>
  )
}
