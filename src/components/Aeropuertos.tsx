import { motion } from 'framer-motion'
import { Building2, MapPin, Star, Plane } from 'lucide-react'
import { useIdioma } from '../i18n'
import { aeropuertos } from '../data/aeropuertos'

export default function Aeropuertos() {
  const { t } = useIdioma()

  return (
    <section id="aeropuertos" className="relative py-24 lg:py-32 bg-white">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#CB1B1C] via-[#FCD404] to-[#CB1B1C]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {t('aeropuertos.titulo')}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t('aeropuertos.subtitulo')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aeropuertos.map((ap, i) => (
            <motion.div
              key={ap.codigo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 lg:p-8 border transition-all duration-300 hover:shadow-xl ${
                ap.esHub
                  ? 'bg-gradient-to-br from-[#CB1B1C] to-[#A31516] text-white border-transparent'
                  : 'bg-gray-50 border-gray-100 text-gray-900'
              }`}
            >
              {ap.esHub && (
                <div className="absolute -top-3 -right-3">
                  <div className="w-10 h-10 bg-[#FCD404] rounded-full flex items-center justify-center shadow-lg">
                    <Star className="w-5 h-5 text-gray-900" />
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  ap.esHub ? 'bg-white/20' : 'bg-[#CB1B1C]/10'
                }`}>
                  <Building2 className={`w-6 h-6 ${ap.esHub ? 'text-white' : 'text-[#CB1B1C]'}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Plane className={`w-4 h-4 ${ap.esHub ? 'text-[#FCD404]' : 'text-[#CB1B1C]'}`} />
                    <span className="font-mono text-sm font-bold opacity-80">{ap.codigo}</span>
                  </div>
                  <div className={`text-xs font-semibold uppercase tracking-wider ${ap.esHub ? 'text-white/70' : 'text-[#CB1B1C]'}`}>
                    {ap.esHub ? t('aeropuertos.hub') : t('aeropuertos.secondary')}
                  </div>
                </div>
              </div>

              <h3 className={`text-lg font-bold mb-1 ${ap.esHub ? 'text-white' : 'text-gray-900'}`}>
                {ap.nombre}
              </h3>
              <div className="flex items-center gap-1.5 mb-3">
                <MapPin className={`w-4 h-4 ${ap.esHub ? 'text-white/70' : 'text-gray-400'}`} />
                <span className={`text-sm font-medium ${ap.esHub ? 'text-white/80' : 'text-gray-600'}`}>
                  {ap.ciudad}
                </span>
              </div>
              <p className={`text-sm leading-relaxed ${ap.esHub ? 'text-white/80' : 'text-gray-600'}`}>
                {ap.descripcion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
