// Reusable outlined pill button matching the Figma "Buy Now / Explore" style.
// Configurable via props: label, onClick, icon, className, as (button/anchor).
export default function Button({
  label,
  onClick,
  href,
  icon,
  iconAlt = '',
  className = '',
  size = 'md',
  ...rest
}) {
  const sizes = {
    md: 'h-[52px] px-7 text-base sm:text-lg',
    lg: 'h-[56px] px-8 text-lg',
  }

  const content = (
    <>
      <span className="font-normal tracking-wide">{label}</span>
      {icon && (
        <img
          src={icon}
          alt={iconAlt}
          aria-hidden={iconAlt === ''}
          className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  )

  const classes = `btn-outline group ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  )
}
