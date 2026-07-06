import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import CarArt from '../ui/CarArt'
import { DEALER } from '../../data/dealer'
import { NEXA_MODELS } from '../../data/cars'
import { stagger, scaleIn, viewportOnce } from '../../animations/variants'
import balenoImg from '../../assets/Baleno.webp'
import grandVitaraImg from '../../assets/Grand Vitara.webp'
import jimnyImg from '../../assets/Jimny.webp'
import invictoImg from '../../assets/invicto.webp'
import xl6Img from '../../assets/XL6.webp'
import fronxImg from '../../assets/fronx.webp'
import './OtherCars.css'

// Real photos per model; models without a photo fall back to SVG art.
const CAR_IMAGES = {
  Fronx: fronxImg,
  Baleno: balenoImg,
  'Grand Vitara': grandVitaraImg,
  Jimny: jimnyImg,
  Invicto: invictoImg,
  XL6: xl6Img,
}

export default function OtherCars() {
  return (
    <section className="section section--tint" id="models" aria-labelledby="models-title">
      <div className="container">
        <SectionHeading
          eyebrow="The NEXA Range"
          title="Explore More"
          highlight="NEXA Cars in Thanjavur"
          subtitle="Beyond the Fronx, discover the complete premium NEXA line-up at Suriya NEXA Thanjavur — every model available for a test drive today."
        />

        <motion.ul
          className="cars__grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {NEXA_MODELS.map((car) => (
            <motion.li className="car-card glass" key={car.name} variants={scaleIn}>
              <div className="car-card__media">
                <span className="car-card__body-type">{car.body}</span>
                {CAR_IMAGES[car.name] ? (
                  <img
                    className="car-card__img"
                    src={CAR_IMAGES[car.name]}
                    alt={`Suzuki ${car.name} available at Suriya NEXA showroom Thanjavur`}
                    loading="lazy"
                    decoding="async"
                    width="1560"
                    height="1040"
                  />
                ) : (
                  <CarArt model={car.art} name={`Suzuki ${car.name}`} className="car-card__art" />
                )}
              </div>
              <div className="car-card__content">
                <div className="car-card__head">
                  <h3 className="car-card__name">{car.name}</h3>
                  <span className="car-card__price">{car.priceFrom}</span>
                </div>
                <p className="car-card__desc">{car.description}</p>
                <ul className="car-card__tags">
                  {car.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="car-card__actions">
                  <a
                    className="car-card__link"
                    href={DEALER.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More <ArrowRight size={16} aria-hidden="true" />
                  </a>
                  <a
                    className="car-card__wa"
                    href={DEALER.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Enquire about the Suzuki ${car.name} on WhatsApp`}
                  >
                    <MessageCircle size={18} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
