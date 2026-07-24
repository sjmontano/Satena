import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, FileSearch, Microscope, BookOpen, MapPin } from 'lucide-react'

const cards = [
  {
    icon: ShieldCheck,
    title: 'Autoridad Sanitaria',
    desc: 'Entidad técnico-científica del Gobierno Nacional que controla que los alimentos, medicamentos, cosméticos y dispositivos médicos sean seguros y cumplan las normas sanitarias.',
    extra: 'Creada mediante la Ley 100 de 1993 como entidad adscrita al Ministerio de Salud y Protección Social.',
  },
  {
    icon: FileSearch,
    title: 'Inspección y Vigilancia',
    desc: 'Vigila que las empresas cumplan las normas sanitarias, controla productos que ingresan y salen del país, y previene la comercialización de productos ilegales o peligrosos.',
    extra: 'Opera en 9 grupos territoriales con 12 puntos de control en puertos, aeropuertos y fronteras.',
  },
  {
    icon: Microscope,
    title: 'Ciencia y Regulación',
    desc: 'Expedición, renovación y cancelación de registros sanitarios, análisis de laboratorio, y coordinación con autoridades nacionales e internacionales.',
    extra: 'Cuenta con 7 laboratorios especializados que realizan análisis microbiológicos, fisicoquímicos y más.',
  },
]

export default function QueEs() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="que-es" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-invima-50 text-invima-600 text-xs font-semibold rounded-full tracking-wide mb-4">
            ¿Qué es el INVIMA?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-invima-900 mb-5 leading-tight">
            Instituto Nacional de Vigilancia de Medicamentos y Alimentos
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Es la autoridad sanitaria de Colombia encargada de proteger la salud pública mediante 
            la inspección, vigilancia y control de productos que puedan afectar la salud de las 
            personas. Adscrita al Ministerio de Salud y Protección Social.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:border-invima-200 transition-all duration-300 cursor-default"
            >
              <div className="w-14 h-14 bg-invima-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-invima-100 transition-colors">
                <c.icon className="w-7 h-7 text-invima-600" />
              </div>
              <h3 className="text-xl font-bold text-invima-900 mb-3">{c.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{c.desc}</p>
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: hovered === i ? '200px' : '0px', opacity: hovered === i ? 1 : 0 }}
              >
                <div className="mt-4 pt-4 border-t border-invima-100">
                  <div className="flex items-start gap-2">
                    <BookOpen className="w-4 h-4 text-invima-400 mt-0.5 shrink-0" />
                    <p className="text-sm text-invima-600 leading-relaxed">{c.extra}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-invima-50 rounded-full text-xs text-gray-500">
            <MapPin className="w-3.5 h-3.5 text-invima-400" />
            <span>Sede principal: Carrera 10 # 64-28, Bogotá — Tel: (+57) (601) 242 50 00</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
