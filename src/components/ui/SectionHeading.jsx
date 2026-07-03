import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../../animations/variants'
import './SectionHeading.css'

/**
 * Reusable section header: eyebrow kicker + heading + optional subtitle.
 * `as` controls the heading level so we keep a correct h1 > h2 > h3 hierarchy.
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  as = 'h2',
  align = 'center',
}) {
  const Heading = motion[as] || motion.h2
  return (
    <motion.div
      className={`section-heading section-heading--${align}`}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {eyebrow && (
        <motion.span className="eyebrow" variants={fadeUp}>
          {eyebrow}
        </motion.span>
      )}
      <Heading className="section-heading__title" variants={fadeUp}>
        {title} {highlight && <span className="grad-text">{highlight}</span>}
      </Heading>
      {subtitle && (
        <motion.p className="section-heading__subtitle" variants={fadeUp}>
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
