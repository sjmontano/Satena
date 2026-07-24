import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Menu, X } from 'lucide-react'

const links = [
  { href: '#que-es', label: '¿Qué es?' },
  { href: '#objetivos', label: 'Objetivos' },
  { href: '#funciones', label: 'Funciones' },
  { href: '#controla', label: '¿Qué controla?' },
  { href: '#datos-clave', label: 'Datos' },
  { href: '#aeropuertos', label: 'Aeropuertos' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-invima-700 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className={`text-lg font-bold tracking-tight leading-tight transition-colors ${scrolled ? 'text-invima-800' : 'text-white'}`}>
              INVIMA
            </span>
            <span className={`text-[9px] font-medium tracking-[0.15em] uppercase leading-tight transition-colors ${scrolled ? 'text-invima-400' : 'text-white/60'}`}>
              Gobierno de Colombia
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                scrolled
                  ? 'text-gray-600 hover:text-invima-700 hover:bg-invima-50'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 text-gray-700 font-medium rounded-xl hover:bg-invima-50 hover:text-invima-700 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
