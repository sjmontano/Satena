import { motion } from 'framer-motion'
import { Pill, Syringe, Apple, FlaskRound as Flask, Sparkles, Droplets, Stethoscope, TestTube, Dna, Leaf } from 'lucide-react'

const productos = [
  { icon: Pill, name: 'Medicamentos', color: 'bg-red-50 text-red-600 border-red-100' },
  { icon: Syringe, name: 'Vacunas', color: 'bg-blue-50 text-blue-600 border-blue-100' },
  { icon: Apple, name: 'Alimentos y bebidas', color: 'bg-green-50 text-green-600 border-green-100' },
  { icon: Flask, name: 'Suplementos', color: 'bg-purple-50 text-purple-600 border-purple-100' },
  { icon: Sparkles, name: 'Cosméticos', color: 'bg-pink-50 text-pink-600 border-pink-100' },
  { icon: Droplets, name: 'Aseo e higiene', color: 'bg-cyan-50 text-cyan-600 border-cyan-100' },
  { icon: Stethoscope, name: 'Dispositivos médicos', color: 'bg-teal-50 text-teal-600 border-teal-100' },
  { icon: TestTube, name: 'Reactivos diagnóstico', color: 'bg-orange-50 text-orange-600 border-orange-100' },
  { icon: Dna, name: 'Productos biológicos', color: 'bg-indigo-50 text-indigo-600 border-indigo-100' },
  { icon: Leaf, name: 'Naturales y homeopáticos', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
]

export default function QueControla() {
  return (
    <section id="controla" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-invima-50 text-invima-600 text-xs font-semibold rounded-full tracking-wide mb-4">
            Productos Regulados
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-invima-900 mb-4">
            ¿Qué controla el INVIMA?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Supervisamos 10 categorías de productos que impactan directamente la salud de las personas.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {productos.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl border ${p.color} hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default`}
            >
              <p.icon className="w-5 h-5 shrink-0" />
              <span className="text-sm font-semibold">{p.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-sm text-gray-400 max-w-lg mx-auto">
            Cada categoría cuenta con regulaciones específicas y procesos de vigilancia 
            adaptados a su nivel de riesgo sanitario.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
