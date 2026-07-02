import { useState } from 'react'
import { footer } from '../data/content'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSent(true)
    setEmail('')
    setTimeout(() => setSent(false), 2500)
  }

  return (
    <footer id="footer" className="mx-auto max-w-design px-5 py-16 sm:px-8 lg:px-10">
      <div className="grid gap-12 border-t border-white/10 pt-14 md:grid-cols-2 lg:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo.png"
              alt="FloraVision logo"
              className="h-12 w-12 rounded-xl object-cover"
            />
            <span className="text-3xl font-black tracking-tight">FloraVision.</span>
          </div>
          <p className="mt-6 max-w-md text-lg font-medium leading-relaxed text-white/90">
            {footer.tagline}
          </p>
          <div className="mt-8 flex gap-6">
            {footer.socials.map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="text-2xl font-extrabold text-white transition-colors hover:text-star"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-2xl font-extrabold">Quick Link’s</h3>
          <ul className="mt-6 space-y-4 text-lg font-medium text-white/90">
            {footer.quickLinks.map((link) => (
              <li key={link}>
                <a href="#" className="transition-colors hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-2xl font-extrabold">For Every Update.</h3>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="flex items-stretch gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                aria-label="Email address"
                className="h-[64px] flex-1 rounded-lg border-2 border-white/80 bg-transparent px-5 text-lg text-white placeholder-white/60 focus:border-white focus:outline-none"
              />
              <button
                type="submit"
                className="h-[64px] rounded-lg bg-white px-6 text-lg font-bold text-forest transition-transform hover:scale-[1.03] active:scale-95"
              >
                Subscribe
              </button>
            </div>
            {sent && (
              <p className="mt-3 text-sm text-star" role="status">
                Thanks for subscribing! 🌱
              </p>
            )}
          </form>
          <p className="mt-10 text-lg font-medium text-white/90">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
