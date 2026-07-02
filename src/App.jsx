import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import TrendingSection from './components/TrendingSection'
import TopSellingSection from './components/TopSellingSection'
import ReviewsSection from './components/ReviewsSection'
import O2Section from './components/O2Section'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-forest text-white">
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
  )
}
