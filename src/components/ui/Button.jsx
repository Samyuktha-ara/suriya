import './Button.css'

/**
 * Premium CTA button. Renders as <a> when `href` is provided, else <button>.
 * variant: primary | outline | whatsapp | call | ghost
 */
export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  className = '',
  external = false,
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim()

  const content = (
    <>
      {Icon && <Icon className="btn__icon" size={size === 'lg' ? 20 : 18} aria-hidden="true" />}
      <span>{children}</span>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </a>
    )
  }

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  )
}
