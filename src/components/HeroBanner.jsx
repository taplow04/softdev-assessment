import Button from './Button'
import StarRating from './StarRating'
import { heroReview } from '../data/content'

// Hero: topiary background, headline "Earth's Exhale", subtext, CTA row,
// a floating customer testimonial card, and the featured plant card.
export default function HeroBanner() {
  return (
    <section
      id="home"
      className="relative mx-auto max-w-design px-5 sm:px-8 lg:px-10"
    >
      {/* Background plant image — contained to the hero so it can't bleed
          into the sections below, and fading to solid forest at the bottom. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[560px] overflow-hidden sm:h-[680px] lg:h-[820px]">
        <img
          src="/assets/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          className="mx-auto h-full w-full max-w-design object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/20 via-forest/40 to-forest" />
      </div>

      <div className="relative z-10 grid items-start gap-10 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:pt-16">
        {/* ---- Left column ---- */}
        <div className="animate-fade-up">
          <h1 className="text-6xl font-semibold leading-none tracking-tight sm:text-7xl lg:text-8xl xl:text-[7rem]">
            Earth’s Exhale
          </h1>
          <p className="mt-6 max-w-xl text-lg font-medium text-white/90 sm:text-xl">
            “Earth Exhale” symbolizes the purity and vitality of the Earth’s natural
            environment and its essential role in sustaining life.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Button label="Buy Now" size="lg" className="w-[200px]" />
            <a
              href="#trending"
              className="group inline-flex items-center gap-3 text-white"
            >
              <span className="flex h-[46px] w-[46px] items-center justify-center rounded-md border-2 border-white/80 transition-colors group-hover:bg-white group-hover:text-forest">
                <svg width="14" height="16" viewBox="0 0 14 16" aria-hidden="true">
                  <path d="M0 0l14 8-14 8V0z" fill="currentColor" />
                </svg>
              </span>
              <span className="font-script text-2xl">Live Demo...</span>
            </a>
          </div>

          {/* Floating testimonial card */}
          <figure className="mt-14 max-w-md rounded-[2.5rem] glass-strong p-6 shadow-soft sm:mt-20">
            <div className="flex items-center gap-4">
              <img
                src={heroReview.avatar}
                alt={heroReview.name}
                className="h-16 w-16 rounded-full object-cover"
              />
              <figcaption>
                <p className="text-lg font-medium">{heroReview.name}</p>
                <StarRating rating={heroReview.rating} />
              </figcaption>
            </div>
            <blockquote className="mt-4 text-sm leading-relaxed text-white/90">
              {heroReview.text}
            </blockquote>
          </figure>
        </div>

        {/* ---- Right column: featured plant card ---- */}
        <div className="relative flex justify-center lg:justify-end">
          <article className="relative w-full max-w-[380px] rounded-[3rem] glass-strong px-8 pb-8 pt-8 shadow-card">
            {/* Plant image sits above the card, kept in flow so the copy
                below stays aligned with it. */}
            <div className="-mt-28 mb-4 flex justify-center sm:-mt-32">
              <img
                src="/assets/aglaonema.png"
                alt="Aglaonema plant"
                className="w-[240px] drop-shadow-2xl sm:w-[280px]"
              />
            </div>
            <p className="text-base text-white/70">Indoor Plant</p>
            <h3 className="mt-1 text-3xl font-normal text-white/90">
              Aglaonema plant
            </h3>

            <div className="mt-5 flex items-center gap-2" aria-hidden="true">
              <span className="h-1.5 w-6 rounded-full bg-white" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            </div>

            <Button
              label="Buy Now"
              className="mt-6 w-full"
              icon="/assets/arrow.png"
              iconAlt=""
            />
          </article>
        </div>
      </div>
    </section>
  )
}
