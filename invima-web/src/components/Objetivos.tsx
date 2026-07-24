import { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, ShieldCheck, Ban, Eye, Globe } from 'lucide-react'

const objetivos = [
  { icon: Shield, title: 'Proteger la salud', desc: 'Proteger la salud de la población colombiana mediante control sanitario.', stat: '50+ millones de colombianos protegidos por la vigilancia del INVIMA en todo el territorio nacional.' },
  { icon: ShieldCheck, title: 'Garantizar calidad', desc: 'Garantizar la calidad y seguridad de los productos regulados.', stat: '10 categorías de productos evaluados con estándares técnico-científicos rigurosos.' },
  { icon: Ban, title: 'Evitar productos ilegales', desc: 'Evitar la comercialización de productos ilegales o peligrosos.', stat: 'Retiros del mercado y alertas sanitarias que previenen intoxicaciones y daños a la salud.' },
  { icon: Eye, title: 'Vigilar cumplimiento', desc: 'Vigilar que las empresas cumplan las normas sanitarias vigentes.', stat: '1,807 establecimientos inspeccionados — 9 grupos territoriales desplegados en todo el país.' },
  { icon: Globe, title: 'Control fronterizo', desc: 'Controlar los productos que ingresan y salen de Colombia.', stat: '12 puntos de control en puertos, aeropuertos y pasos fronterizos a nivel nacional.' },
]

export default function Objetivos() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="objetivos" className="relative py-24 lg:py-32 bg-invima-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white text-invima-600 text-xs font-semibold rounded-full tracking-wide shadow-sm mb-4">
            Nuestros Objetivos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-invima-900 mb-4">
            ¿Qué buscamos?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cinco pilares fundamentales guían nuestra labor de vigilancia sanitaria en todo el territorio nacional.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {objetivos.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="bg-white rounded-2xl p-6 lg:p-7 border border-gray-100 shadow-sm hover:shadow-md hover:border-invima-200 hover:-translate-y-1 transition-all duration-300 text-center cursor-default"
            >
              <div className="w-14 h-14 bg-invima-50 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                <o.icon className="w-7 h-7 text-invima-600" />
              </div>
              <h3 className="text-base font-bold text-invima-900 mb-2">{o.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{o.desc}</p>
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: hovered === i ? '200px' : '0px', opacity: hovered === i ? 1 : 0 }}
              >
                <div className="mt-3 pt-3 border-t border-invima-100">
                  <p className="text-xs text-invima-600 leading-relaxed">{o.stat}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
