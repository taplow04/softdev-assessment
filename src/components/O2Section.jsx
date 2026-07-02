import Button from './Button'
import { o2Points } from '../data/content'

// "Our Best o2" — featured plant card with descriptive copy, CTA,
// pagination dots and navigation arrows.
export default function O2Section() {
  return (
    <section
      id="o2"
      className="mx-auto max-w-design px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="flex items-center justify-center gap-4">
        <span aria-hidden="true" className="text-4xl">🌿</span>
        <h2 className="text-center text-3xl font-semibold sm:text-4xl md:text-5xl">
          Our Best o2
        </h2>
        <span aria-hidden="true" className="text-4xl">🌿</span>
      </div>

      <div className="mt-14 rounded-[3rem] glass p-8 shadow-card sm:p-12 lg:mt-20 lg:rounded-[5rem] lg:p-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Plant */}
          <div className="flex justify-center">
            <img
              src="/assets/aglaonema.png"
              alt="Best O2 producing plant"
              className="w-[320px] drop-shadow-2xl sm:w-[400px] lg:w-[480px]"
            />
          </div>

          {/* Copy */}
          <div className="text-white/80">
            <h3 className="text-2xl font-semibold leading-snug sm:text-3xl">
              {o2Points[0]}
            </h3>
            <p className="mt-6 text-base font-semibold leading-relaxed sm:text-lg">
              {o2Points[1]}
            </p>
            <p className="mt-5 text-base font-semibold leading-relaxed sm:text-lg">
              {o2Points[2]}
            </p>
            <Button label="Explore" className="mt-8 w-[200px]" />
          </div>
        </div>

        {/* Pagination + arrows */}
        <div className="mt-10 flex items-center justify-between">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="h-2.5 w-7 rounded-full bg-white/75" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/75" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/75" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-white/75">01/04</span>
            <button
              type="button"
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white/10"
            >
              <img src="/assets/arrow.png" alt="" className="h-4 w-4 rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white/10"
            >
              <img src="/assets/arrow.png" alt="" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
