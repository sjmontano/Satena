import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

const secciones = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'quienes', label: 'Quiénes' },
  { id: 'destinos', label: 'Destinos' },
  { id: 'red', label: 'Red' },
  { id: 'vuelos', label: 'Rutas' },
  { id: 'flota', label: 'Flota' },
  { id: 'aeropuertos', label: 'Aeropuertos' },
]

export default function ProgressIndicator() {
  const [activa, setActiva] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const wh = window.innerHeight

      if (scrollY < wh * 0.5) {
        setVisible(false)
        return
      }
      setVisible(true)

      let maxIdx = 0
      for (let i = secciones.length - 1; i >= 0; i--) {
        const el = document.getElementById(secciones[i].id)
        if (el && el.offsetTop <= scrollY + wh * 0.35) {
          maxIdx = i
          break
      }
      }
      setActiva(maxIdx)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3"
        >
          <a
            href="#inicio"
            className="w-6 h-6 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm flex items-center justify-center hover:bg-white transition-colors"
            title="Volver arriba"
          >
            <ChevronUp className="w-3 h-3 text-gray-500" />
          </a>
          {secciones.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="group relative flex items-center"
            >
              <span className={`absolute right-full mr-2 px-2 py-0.5 rounded text-[10px] font-medium whitespace-nowrap transition-all duration-200 pointer-events-none
                ${i === activa
                  ? 'bg-[#CB1B1C] text-white opacity-100'
                  : 'bg-gray-800 text-gray-300 opacity-0 group-hover:opacity-100'
                }`}
              >
                {s.label}
              </span>
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activa
                    ? 'bg-[#CB1B1C] scale-125 shadow-md'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            </a>
          ))}
          <div className="text-[10px] font-medium text-gray-400 mt-1">
            {activa + 1}/{secciones.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
