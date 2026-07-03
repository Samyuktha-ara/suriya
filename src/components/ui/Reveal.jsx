import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../../animations/variants'

/**
 * Lightweight scroll-reveal wrapper.
 * Usage: <Reveal><YourContent /></Reveal>
 */
export default function Reveal({
  children,
  variants = fadeUp,
  as = 'div',
  className,
  delay = 0,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={delay ? { delay } : undefined}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
