import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plane, Search, FileText, Package, FlaskRound as Flask, Ban, CheckCircle, Building2, MapPin, Users } from 'lucide-react'

const acciones = [
  { icon: Search, text: 'Inspecciona alimentos y bebidas que ingresan o salen del país.' },
  { icon: FileText, text: 'Controla medicamentos importados y exportados.' },
  { icon: Package, text: 'Verifica dispositivos médicos y productos biológicos.' },
  { icon: Flask, text: 'Toma muestras para análisis cuando es necesario.' },
  { icon: Ban, text: 'Impide el ingreso de productos sin registro sanitario o contaminados.' },
  { icon: CheckCircle, text: 'Autoriza o rechaza el ingreso según la normatividad sanitaria.' },
  { icon: Building2, text: 'Trabaja en puertos, aeropuertos y pasos fronterizos.' },
]

const entradas = [
  'Revisa alimentos importados',
  'Controla medicamentos del exterior',
  'Verifica cosméticos y productos de higiene',
  'Inspecciona dispositivos médicos',
  'Retiene, decomisa o destruye productos de riesgo',
]

const salidas = [
  'Verifica cumplimiento de normas sanitarias',
  'Expide certificaciones sanitarias',
  'Inspecciona antes de la exportación',
  'Garantiza requisitos de otros países',
  'Avala calidad de productos colombianos',
]

const gruposTerritoriales = [
  'Costa Caribe', 'Centro Occidente', 'Centro Oriente', 'Orinoquía',
  'Eje Cafetero', 'Pacífico', 'Amazonía', 'Antioquia', 'Santanderes',
]

export default function AeropuertosInvima() {
  const [showTerritorial, setShowTerritorial] = useState(false)

  return (
    <section id="aeropuertos" className="relative py-24 lg:py-32 bg-invima-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white text-invima-600 text-xs font-semibold rounded-full tracking-wide shadow-sm mb-4">
            Control Fronterizo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-invima-900 mb-4">
            INVIMA en aeropuertos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Presencia activa en todos los puntos de entrada y salida del país para garantizar la seguridad sanitaria.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-salud-light rounded-2xl flex items-center justify-center">
                <Plane className="w-6 h-6 text-salud" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-invima-900">Control en fronteras</h3>
                <p className="text-sm text-gray-500">Acciones en puntos de entrada y salida</p>
              </div>
            </div>
            <div className="space-y-3">
              {acciones.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
                >
                  <div className="w-9 h-9 bg-invima-50 rounded-lg flex items-center justify-center shrink-0">
                    <a.icon className="w-4 h-4 text-invima-600" />
                  </div>
                  <p className="text-sm text-gray-700">{a.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
              onMouseEnter={() => setShowTerritorial(true)}
              onMouseLeave={() => setShowTerritorial(false)}
              className="mt-6 bg-white rounded-xl p-5 border border-gray-100 shadow-sm cursor-default"
            >
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-5 h-5 text-invima-600" />
                <span className="font-bold text-gray-900 text-sm">9 Grupos Territoriales</span>
              </div>
              <p className="text-xs text-gray-500 mb-2">Cobertura nacional para inspección y vigilancia</p>
              <AnimatePresence>
                {showTerritorial && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-wrap gap-1.5 mt-2 pt-3 border-t border-gray-100">
                      {gruposTerritoriales.map((g) => (
                        <span key={g} className="px-2.5 py-1 bg-invima-50 text-invima-600 text-xs rounded-full font-medium">{g}</span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="flex items-center gap-1 mt-2 text-[10px] text-gray-400">
                <MapPin className="w-3 h-3" />
                <span>12 puntos de control — Pasa el cursor para ver los grupos</span>
              </div>
            </motion.div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-invima-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-invima-900">Lo que entra al país</h3>
                  <p className="text-sm text-gray-500">Control de importaciones</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <ul className="space-y-3">
                  {entradas.map((e, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-salud shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-invima-100 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-invima-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-invima-900">Lo que sale del país</h3>
                  <p className="text-sm text-gray-500">Control de exportaciones</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <ul className="space-y-3">
                  {salidas.map((s, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-invima-500 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl border border-gray-100 shadow-sm">
            <MapPin className="w-4 h-4 text-invima-500" />
            <span className="text-sm text-gray-600">
              <strong className="text-invima-900">12 puntos de control</strong> — Puertos, aeropuertos y pasos fronterizos
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
