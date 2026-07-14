import { AnimatePresence, motion } from 'framer-motion'
import { Globe, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useIdioma } from '../i18n'

const menuItems = [
  { key: 'nav.inicio', href: '#inicio' },
  { key: 'nav.quienes', href: '#quienes' },
  { key: 'nav.destinos', href: '#destinos' },
  { key: 'nav.vuelos', href: '#vuelos' },
  { key: 'nav.flota', href: '#flota' },
  { key: 'nav.aeropuertos', href: '#aeropuertos' },
  {/* key: 'nav.contacto', href: '#contacto' */ }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t, idioma, setIdioma } = useIdioma()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLang = () => {
    setIdioma(idioma === 'es' ? 'en' : 'es')
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#CB1B1C] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-white font-black text-lg">S</span>
            </div>
            <span className={`text-2xl font-bold tracking-tight transition-colors ${scrolled ? 'text-gray-900' : 'text-white'
              }`}>
              SATENA
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#CB1B1C] ${scrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
              >
                {t(item.key)}
              </a>
            ))}
            <button
              onClick={toggleLang}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all ${scrolled
                  ? 'border-gray-300 text-gray-700 hover:border-[#CB1B1C] hover:text-[#CB1B1C]'
                  : 'border-white/30 text-white/80 hover:border-white hover:text-white'
                }`}
            >
              <Globe className="w-3.5 h-3.5" />
              {idioma === 'es' ? 'EN' : 'ES'}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLang}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all ${scrolled
                  ? 'border-gray-300 text-gray-700'
                  : 'border-white/30 text-white/80'
                }`}
            >
              <Globe className="w-3 h-3" />
              {idioma === 'es' ? 'EN' : 'ES'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            <div className="py-4 px-4">
              {menuItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:text-[#CB1B1C] transition-all"
                >
                  {t(item.key)}
                </a>
              ))}
              <div className="mt-3 px-4 pt-4 border-t border-gray-100">
                <a
                  href="#reserva"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-6 py-3 bg-[#CB1B1C] text-white font-semibold rounded-xl hover:bg-[#A31516] transition-colors"
                >
                  {t('hero.reservar')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
