import { motion } from 'framer-motion'
import { useIdioma } from '../i18n'
import { Target, Eye, Calendar, MapPin, Route, Clock } from 'lucide-react'

const stats = [
  { icon: Calendar, key: 'quienes.anio', numKey: 'quienes.anios_num', labelKey: 'quienes.anios' },
  { icon: MapPin, key: 'quienes.destinos_num', numKey: 'quienes.destinos_num', labelKey: 'quienes.destinos' },
  { icon: Route, key: 'quienes.rutas_num', numKey: 'quienes.rutas_num', labelKey: 'quienes.rutas' },
]

export default function QuienesSomos() {
  const { t } = useIdioma()

  return (
    <section id="quienes" className="relative py-24 lg:py-32 bg-white overflow-hidden">
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
            {t('quienes.titulo')}
          </h2>
          <p className="text-lg text-[#CB1B1C] font-medium tracking-wide">
            {t('quienes.subtitulo')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {t('quienes.descripcion')}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-[#CB1B1C]/10 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-[#CB1B1C]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Misión</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{t('quienes.mision')}</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-[#FCD404]/20 rounded-xl flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-[#B8860B]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Visión</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{t('quienes.vision')}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109b3e2?w=800&q=80"
                alt="SATENA ATR 42"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#CB1B1C]" />
                <span className="text-sm font-semibold text-gray-900">
                  {t('quienes.anio')} — presente
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center bg-gray-50 rounded-2xl py-8 px-4 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <stat.icon className="w-8 h-8 text-[#CB1B1C] mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-black text-gray-900 mb-1">{t(stat.numKey)}</div>
              <div className="text-sm text-gray-500 font-medium">{t(stat.labelKey)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
