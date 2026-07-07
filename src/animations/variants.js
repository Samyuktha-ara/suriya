/**
 * Reusable Framer Motion variants — kept in one place so animations
 * stay consistent and easy to tune across the whole site.
 */

export const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export const slideLeft = {
  hidden: { opacity: 0, x: 48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export const slideRight = {
  hidden: { opacity: 0, x: -48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

/** Parent container that staggers its children into view. */
export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
}

/** Shared viewport config for whileInView animations.
 * `amount: 'some'` (trigger as soon as any part enters) rather than a
 * fraction — a fixed fraction like 0.2 can NEVER be met for elements
 * taller than the viewport (e.g. the single-column car grid on mobile),
 * leaving them stuck at opacity 0. */
export const viewportOnce = { once: true, amount: 'some' }
