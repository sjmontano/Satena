import { motion } from 'framer-motion'
import { Users, Gauge, Map, Crosshair, Route } from 'lucide-react'
import { useIdioma } from '../i18n'
import { flota } from '../data/flota'
import { rutas } from '../data/rutas'

const specs = [
  { icon: Users, key: 'capacidad' },
  { icon: Gauge, key: 'velocidad' },
  { icon: Map, key: 'alcance' },
  { icon: Crosshair, key: 'uso' },
]

function rutasPorAvion(nombre: string): { origen: string; destino: string }[] {
  const corto = nombre.split(' ')[0]
  return rutas
    .filter((r) => r.aeronave.startsWith(corto))
    .slice(0, 5)
    .map((r) => ({ origen: r.origen, destino: r.destino }))
}

export default function FlotaAviones() {
  const { t } = useIdioma()

  return (
    <section id="flota" className="relative py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {t('flota.titulo')}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t('flota.subtitulo')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {flota.map((avion, i) => (
            <motion.div
              key={avion.nombre}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <img
                  src={avion.imagen}
                  alt={avion.nombre}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <h3 className="text-xl font-bold text-white">{avion.nombre}</h3>
                  <p className="text-sm text-white/70">{avion.tipo}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {avion.descripcion}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {specs.map((spec) => (
                    <div key={spec.key} className="flex items-center gap-2.5 bg-gray-50 rounded-xl p-3">
                      <spec.icon className="w-4 h-4 text-[#CB1B1C] shrink-0" />
                      <div className="min-w-0">
                        <div className="text-xs text-gray-400 capitalize">{spec.key}</div>
                        <div className="text-sm font-semibold text-gray-800 truncate">
                          {avion[spec.key as keyof typeof avion]}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2">
                    <Route className="w-3 h-3" />
                    {t('flota.rutas_operadas')}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {rutasPorAvion(avion.nombre).map((r, ri) => (
                      <span key={ri} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-medium rounded-full">
                        {r.origen}–{r.destino}
                      </span>
                    ))}
                    {rutas.filter((r) => r.aeronave.startsWith(avion.nombre.split(' ')[0])).length > 5 && (
                      <span className="px-2 py-0.5 text-gray-400 text-[10px]">
                        +{rutas.filter((r) => r.aeronave.startsWith(avion.nombre.split(' ')[0])).length - 5} más
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
