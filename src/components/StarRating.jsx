// Row of rating stars. The design shows 4½ stars (yellow #FFF84E).
function Star({ half = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      {half && (
        <defs>
          <linearGradient id="halfStar">
            <stop offset="50%" stopColor="#FFF84E" />
            <stop offset="50%" stopColor="#FFF84E" stopOpacity="0.25" />
          </linearGradient>
        </defs>
      )}
      <path
        fill={half ? 'url(#halfStar)' : '#FFF84E'}
        d="M12 2l2.9 6.26L21.5 9l-5 4.87L17.8 21 12 17.5 6.2 21l1.3-7.13L2.5 9l6.6-.74L12 2z"
      />
    </svg>
  )
}

export default function StarRating({ rating = 5, label }) {
  const full = Math.floor(rating)
  const hasHalf = rating - full >= 0.5
  return (
    <div
      className="flex items-center gap-1.5"
      role="img"
      aria-label={label || `Rated ${rating} out of 5 stars`}
    >
      {Array.from({ length: full }).map((_, i) => (
        <Star key={i} />
      ))}
      {hasHalf && <Star half />}
    </div>
  )
}
