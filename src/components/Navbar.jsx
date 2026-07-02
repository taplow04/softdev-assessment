import { useState, useEffect } from 'react'
import { navLinks } from '../data/content'

// Top navigation: logo, script-font links, search / cart / user icons,
// and a responsive hamburger drawer for mobile.
export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="relative z-50">
      <nav
        className="mx-auto flex max-w-design items-center justify-between px-5 py-5 sm:px-8 lg:px-10"
        aria-label="Primary"
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/assets/logo.png"
            alt="FloraVision logo"
            className="h-10 w-10 rounded-xl object-cover sm:h-12 sm:w-12"
          />
          <span className="text-xl font-black tracking-tight sm:text-2xl">
            FloraVision.
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 font-script text-xl lg:flex xl:gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="inline-flex items-center gap-1.5 text-white/90 transition-colors hover:text-white"
              >
                {link.label}
                {link.hasCaret && (
                  <svg width="12" height="8" viewBox="0 0 12 8" aria-hidden="true">
                    <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.6" fill="none" />
                  </svg>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Icons + hamburger */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            type="button"
            aria-label="Search"
            className="transition-transform hover:scale-110"
          >
            <img src="/assets/search.png" alt="" className="h-6 w-6 opacity-90" />
          </button>
          <button
            type="button"
            aria-label="Cart"
            className="transition-transform hover:scale-110"
          >
            <img src="/assets/cart.png" alt="" className="h-6 w-6 opacity-90" />
          </button>
          {/* User icon (two stacked lines in Figma) */}
          <span aria-hidden="true" className="hidden flex-col gap-1.5 sm:flex">
            <span className="block h-0.5 w-8 rounded bg-white" />
            <span className="block h-0.5 w-6 self-end rounded bg-white" />
          </span>

          {/* Hamburger (mobile) */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col gap-1.5 lg:hidden"
          >
            <span
              className={`block h-0.5 w-7 rounded bg-white transition-transform ${
                open ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-7 rounded bg-white transition-opacity ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-7 rounded bg-white transition-transform ${
                open ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 bg-forest/95 transition-opacity duration-300 lg:hidden ${
          open
            ? 'pointer-events-auto opacity-100 backdrop-blur-md'
            : 'pointer-events-none invisible opacity-0'
        }`}
      >
        <ul className="flex h-full flex-col items-center justify-center gap-8 font-script text-3xl">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white/90 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
