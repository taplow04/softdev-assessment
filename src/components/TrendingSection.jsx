import Button from './Button'
import SectionTitle from './SectionTitle'
import { trendingPlants } from '../data/content'

// One large stadium-shaped feature card. `reverse` flips image/text sides.
function DeskCard({ item, reverse }) {
  return (
    <article
      className={`relative flex flex-col items-center gap-6 overflow-visible rounded-[4rem] glass px-8 py-10 shadow-card md:min-h-[340px] md:flex-row md:gap-10 md:rounded-[8rem] md:px-16 lg:px-24 ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="flex shrink-0 items-center justify-center md:w-[38%]">
        <img
          src={item.image}
          alt={item.title}
          className="w-[240px] drop-shadow-2xl sm:w-[300px] md:w-full md:max-w-[420px] md:-my-16"
        />
      </div>

      <div className={`flex-1 ${reverse ? 'md:text-right' : ''}`}>
        <h3 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
          {item.title}
        </h3>
        <p className="mt-4 text-base font-semibold leading-relaxed text-white/90 sm:text-lg">
          {item.description}
        </p>
        <p className="mt-4 text-3xl font-semibold sm:text-4xl">{item.price}</p>
        <div className={`mt-6 flex ${reverse ? 'md:justify-end' : ''}`}>
          <Button
            label="Explore"
            className="w-[200px]"
            icon="/assets/cart.png"
            iconAlt=""
          />
        </div>
      </div>
    </article>
  )
}

export default function TrendingSection() {
  return (
    <section
      id="trending"
      className="mx-auto max-w-design px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
    >
      <SectionTitle>Our Trendy plants</SectionTitle>
      <div className="mt-14 flex flex-col gap-10 lg:mt-20 lg:gap-14">
        {trendingPlants.map((item, i) => (
          <DeskCard key={item.id} item={item} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  )
}
