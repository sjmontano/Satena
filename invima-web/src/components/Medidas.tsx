import { motion } from 'framer-motion'
import { Ban, Trash2, Pause, AlertTriangle, DollarSign, XCircle, Building2 } from 'lucide-react'

const medidas = [
  { icon: Ban, title: 'Retener productos', color: 'bg-orange-50 text-orange-600' },
  { icon: Trash2, title: 'Decomisar mercancías', color: 'bg-red-50 text-red-600' },
  { icon: Pause, title: 'Suspender comercialización', color: 'bg-yellow-50 text-yellow-600' },
  { icon: AlertTriangle, title: 'Retiro del mercado', color: 'bg-amber-50 text-amber-600' },
  { icon: DollarSign, title: 'Multas y sanciones', color: 'bg-rose-50 text-rose-600' },
  { icon: XCircle, title: 'Cerrar establecimientos', color: 'bg-red-50 text-red-600' },
  { icon: Building2, title: 'Suspensión de actividades', color: 'bg-orange-50 text-orange-600' },
]

export default function Medidas() {
  return (
    <section className="relative py-24 lg:py-32 bg-white">
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
              className="flex items-center gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${m.color}`}>
                <m.icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold text-gray-800">{m.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
