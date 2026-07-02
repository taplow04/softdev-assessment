import PlantCard from './PlantCard'
import SectionTitle from './SectionTitle'
import { topSellingPlants } from '../data/content'

// "Our Top Selling Plants" — responsive product grid (3 → 2 → 1 columns).
export default function TopSellingSection() {
  return (
    <section
      id="top-selling"
      className="mx-auto max-w-design px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
    >
      <SectionTitle>Our Top Selling Plants</SectionTitle>
      <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {topSellingPlants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </section>
  )
}
