import StarRating from './StarRating'

// Customer review card: avatar, name, rating and quote. Configurable via `review`.
export default function TestimonialCard({ review }) {
  return (
    <article className="flex h-full flex-col rounded-[3rem] glass p-8 shadow-card">
      <div className="flex items-center gap-4">
        <img
          src={review.avatar}
          alt={review.name}
          className="h-20 w-20 rounded-full object-cover"
        />
        <div>
          <p className="text-2xl font-semibold sm:text-3xl">{review.name}</p>
          <div className="mt-1">
            <StarRating rating={review.rating} />
          </div>
        </div>
      </div>
      <blockquote className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
        {review.text}
      </blockquote>
    </article>
  )
}
