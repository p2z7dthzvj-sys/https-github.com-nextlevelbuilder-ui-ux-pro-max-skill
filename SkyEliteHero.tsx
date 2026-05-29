/**
 * SkyElite — Premium Private Jet Hero Section
 *
 * Setup requirements:
 *   npm install lucide-react
 *
 * Add to your index.html <head> or global CSS:
 *   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
 *   body { font-family: 'Inter', sans-serif; }
 *
 * Tailwind config — ensure JIT / arbitrary values are enabled (default in v3+).
 */

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4'

const NAV_ITEMS = ['Start', 'Story', 'Rates', 'Benefits', 'FAQ'] as const
type NavItem = (typeof NAV_ITEMS)[number]

export default function SkyEliteHero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-screen overflow-hidden">

        {/* ── Video Background ──────────────────── */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>

        {/* ── Content Wrapper ───────────────────── */}
        <div className="relative h-full flex flex-col">

          {/* Navigation */}
          <nav className="w-full">
            <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">

              {/* Brand */}
              <a href="#" className="text-2xl font-semibold text-gray-900">
                SkyElite
              </a>

              {/* Desktop nav links */}
              <div className="hidden md:flex items-center gap-8">
                {NAV_ITEMS.map((item: NavItem) => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Mobile hamburger toggle */}
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className="md:hidden text-gray-900 p-1 -mr-1"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

            {/* Mobile dropdown */}
            {menuOpen && (
              <div className="md:hidden mx-4 mb-3 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-100/60">
                <div className="flex flex-col">
                  {NAV_ITEMS.map((item: NavItem) => (
                    <a
                      key={item}
                      href="#"
                      className="px-6 py-3 text-sm font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </nav>

          {/* ── Main Content Area ─────────────────── */}
          <main className="flex-1 flex items-center justify-center">
            <div className="-mt-80 text-center px-6">

              {/* Label */}
              <p className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
                PRIVATE JETS
              </p>

              {/* Heading — overlapping two-line effect */}
              <h1>
                <span className="block text-6xl md:text-7xl lg:text-8xl font-normal text-gray-500 leading-none tracking-tighter">
                  Premium.
                </span>
                <span
                  className="block text-6xl md:text-7xl lg:text-8xl font-normal leading-none tracking-tighter -mt-3"
                  style={{ color: '#202A36' }}
                >
                  Accessible.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-6 mb-6">
                Your dedication deserves recognition.
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-4 justify-center">
                <button className="px-4 py-2 rounded-full bg-gray-300 text-gray-800 font-medium hover:bg-gray-400 transition-colors">
                  Discover
                </button>
                <button className="px-4 py-2 rounded-full text-white font-medium transition-colors bg-[#202A36] hover:bg-[#1a2229]">
                  Book Now
                </button>
              </div>

            </div>
          </main>

        </div>
      </section>
    </div>
  )
}
