import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, Plane } from 'lucide-react'
import { useIdioma } from '../i18n'
import { rutas, origenes } from '../data/rutas'

export default function VuelosRutas() {
  const { t } = useIdioma()
  const [filtro, setFiltro] = useState('')

  const filtered = useMemo(
    () => filtro ? rutas.filter((r) => r.origen === filtro || r.destino === filtro) : rutas,
    [filtro]
  )

  return (
    <section id="vuelos" className="relative py-24 lg:py-32 bg-white">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#CB1B1C] via-[#FCD404] to-[#CB1B1C]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {t('vuelos.titulo')}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">{t('vuelos.subtitulo')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-medium appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#CB1B1C]/30 focus:border-[#CB1B1C] transition-all"
            >
              <option value="">{t('vuelos.todos')}</option>
              {origenes.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
        </motion.div>

        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('vuelos.origen')}</th>
                <th className="px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('vuelos.destino')}</th>
                <th className="px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('vuelos.frecuencia')}</th>
                <th className="px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('vuelos.semanal')}</th>
                <th className="px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('vuelos.aeronave')}</th>
                <th className="px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('vuelos.duracion')}</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((ruta, i) => (
                <motion.tr
                  key={`${ruta.origen}-${ruta.destino}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="border-b border-gray-50 hover:bg-gray-50/80 transition-colors"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <Plane className="w-4 h-4 text-[#CB1B1C]" />
                      <span className="font-semibold text-gray-900">{ruta.origen}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 font-medium text-gray-700">{ruta.destino}</td>
                  <td className="px-5 py-4">
                    <span className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                      {ruta.frecuencia}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-gray-600">{ruta.vuelosPorSemana}</td>
                  <td className="px-5 py-4">
                    <span className="text-sm font-medium text-gray-700">{ruta.aeronave}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                      {ruta.duracion}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-sm text-gray-400 mt-4">
          {filtered.length} {t('vuelos.resultados')}
        </p>
      </div>
    </section>
  )
}
