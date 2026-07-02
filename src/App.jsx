import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import TrendingSection from './components/TrendingSection'
import TopSellingSection from './components/TopSellingSection'
import ReviewsSection from './components/ReviewsSection'
import O2Section from './components/O2Section'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-forest text-white">
      {/* Plant background — spans the hero AND the "Our Trendy plants" area,
          exactly like the Figma design. All content is layered above it (z-10)
          so headings stay readable while the plant remains visible behind them. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[1150px] overflow-hidden sm:h-[1300px] lg:h-[1500px]">
        <img
          src="/assets/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          className="mx-auto h-full w-full max-w-design object-cover object-top"
        />
        {/* Light at the top so the plant reads clearly, fading to solid forest
            at the bottom so it blends into the sections below. */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest/20 via-forest/25 to-forest" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroBanner />
          <TrendingSection />
          <TopSellingSection />
          <ReviewsSection />
          <O2Section />
        </main>
        <Footer />
      </div>
    </div>
  )
}
