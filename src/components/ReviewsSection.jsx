import SectionTitle from './SectionTitle'
import TestimonialCard from './TestimonialCard'
import { reviews } from '../data/content'

// "Customer Review" — responsive testimonial grid.
export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="mx-auto max-w-design px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
    >
      <SectionTitle>Customer Review</SectionTitle>
      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <TestimonialCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  )
}
