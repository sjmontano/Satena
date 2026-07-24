import { useState } from 'react'
import { motion } from 'framer-motion'
import { Ban, Trash2, Pause, AlertTriangle, DollarSign, XCircle, Building2, Scale } from 'lucide-react'

const medidas = [
  { icon: Ban, title: 'Retener productos', color: 'bg-orange-50 text-orange-600', ley: 'Ley 100 de 1993 — Art. 245: Facultad de retener productos que no cumplan requisitos sanitarios.' },
  { icon: Trash2, title: 'Decomisar mercancías', color: 'bg-red-50 text-red-600', ley: 'Ley 1122 de 2007 — Art. 34: Decomiso de productos ilegales o contaminados.' },
  { icon: Pause, title: 'Suspender comercialización', color: 'bg-yellow-50 text-yellow-600', ley: 'Decreto 780 de 2016: Suspensión inmediata cuando hay riesgo para la salud pública.' },
  { icon: AlertTriangle, title: 'Retiro del mercado', color: 'bg-amber-50 text-amber-600', ley: 'Resolución 2013 de 2020: Procedimiento para retiro de productos con alertas sanitarias.' },
  { icon: DollarSign, title: 'Multas y sanciones', color: 'bg-rose-50 text-rose-600', ley: 'Ley 100 de 1993 — Art. 249: Multas hasta por 1.500 SMLMV según la gravedad.' },
  { icon: XCircle, title: 'Cerrar establecimientos', color: 'bg-red-50 text-red-600', ley: 'Ley 9 de 1979: Cierre temporal o definitivo por incumplimiento grave.' },
  { icon: Building2, title: 'Suspensión de actividades', color: 'bg-orange-50 text-orange-600', ley: 'Decreto 677 de 1995: Suspensión de actividades de producción o importación.' },
]

export default function Medidas() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="medidas" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-xs font-semibold rounded-full tracking-wide mb-4">
            Facultades Sancionatorias
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-invima-900 mb-4">
            Medidas que puede tomar
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            El INVIMA cuenta con facultades para actuar cuando se detectan riesgos o incumplimientos sanitarios.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {medidas.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${m.color}`}>
                <m.icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-sm font-semibold text-gray-800">{m.title}</span>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: hovered === i ? '200px' : '0px', opacity: hovered === i ? 1 : 0 }}
                >
                  <div className="mt-2 pt-2 border-t border-red-100">
                    <div className="flex items-start gap-1.5">
                      <Scale className="w-3 h-3 text-red-400 mt-0.5 shrink-0" />
                      <p className="text-xs text-red-600 leading-relaxed">{m.ley}</p>
                    </div>
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
