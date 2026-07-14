import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, ChevronRight, ChevronDown } from 'lucide-react'
import { useIdioma } from '../i18n'
import { destinos, type Destino } from '../data/destinos'

const INICIALES = 6

export default function DestinosTuristicos() {
  const { t } = useIdioma()
  const [selected, setSelected] = useState<Destino | null>(null)
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? destinos : destinos.slice(0, INICIALES)

  return (
    <section id="destinos" className="relative py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {t('destinos.titulo')}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t('destinos.subtitulo')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((destino, i) => (
            <motion.div
              key={destino.nombre}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setSelected(destino)}
              className="group cursor-pointer relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-200"
            >
              <img
                src={destino.imagen}
                alt={destino.nombre}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              {destino.destacado && (
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#FCD404] text-gray-900 text-xs font-bold rounded-full">
                  TOP
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-1.5 text-white/70 text-xs font-medium mb-1.5">
                  <MapPin className="w-3 h-3" />
                  {destino.region}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{destino.nombre}</h3>
                <p className="text-sm text-white/70 line-clamp-2">{destino.descripcion}</p>
              </div>
              <div className="absolute inset-0 bg-[#CB1B1C]/0 group-hover:bg-[#CB1B1C]/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {destinos.length > INICIALES && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-200 text-gray-600 font-medium rounded-full hover:border-gray-300 hover:text-gray-800 transition-all shadow-sm"
            >
              {showAll ? 'Ver menos' : `Ver más (${destinos.length - INICIALES})`}
              <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mt-20 text-center"
        >
          <div className="absolute left-1/2 -top-8 w-px h-8 bg-gradient-to-b from-transparent to-gray-300" />
          <p className="text-sm text-gray-400 mb-4 max-w-md mx-auto leading-relaxed">
            {t('globe.bridge_desc')}
          </p>
          <a
            href="#red"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#CB1B1C] text-white font-semibold rounded-full hover:bg-[#A31516] transition-all hover:scale-105 shadow-lg"
          >
            {t('globe.bridge')} <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl"
            >
              <div className="aspect-[16/9] relative">
                <img
                  src={selected.imagen}
                  alt={selected.nombre}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-[#CB1B1C] text-sm font-medium mb-2">
                  <MapPin className="w-4 h-4" />
                  {selected.region}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{selected.nombre}</h3>
                <p className="text-gray-600 leading-relaxed">{selected.descripcion}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
