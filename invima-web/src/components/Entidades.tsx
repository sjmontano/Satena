import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, Stethoscope, Plane, Landmark, Sprout, Users, Heart, Globe } from 'lucide-react'

const entidades = [
  { icon: Heart, name: 'Ministerio de Salud', desc: 'Ministerio de Salud y Protección Social', detalle: 'Entidad rectora del sector salud. Define las políticas y regulaciones que el INVIMA ejecuta en vigilancia sanitaria.' },
  { icon: Stethoscope, name: 'INS', desc: 'Instituto Nacional de Salud', detalle: 'Apoyo diagnóstico e investigación epidemiológica. Coordinación en brotes y emergencias de salud pública.' },
  { icon: Plane, name: 'Aerocivil', desc: 'Aeronáutica Civil', detalle: 'Coordinación en puertos aeroportuarios para inspección de carga y pasajeros con productos regulados.' },
  { icon: Landmark, name: 'DIAN', desc: 'Dirección de Impuestos y Aduanas', detalle: 'Control aduanero conjunto en importaciones y exportaciones de productos regulados sanitariamente.' },
  { icon: Sprout, name: 'ICA', desc: 'Instituto Colombiano Agropecuario', detalle: 'Articulación en frontera para productos de origen animal y vegetal con implicaciones sanitarias.' },
  { icon: Users, name: 'Migración Colombia', desc: 'Autoridad migratoria', detalle: 'Intercambio de información sobre ingreso de viajeros con productos sujetos a control sanitario.' },
  { icon: Building2, name: 'Secretarías de Salud', desc: 'Entidades territoriales', detalle: 'Ejecución descentralizada de acciones de inspección, vigilancia y control en cada departamento y municipio.' },
  { icon: Globe, name: 'Internacionales', desc: 'Autoridades sanitarias del mundo', detalle: 'Cooperación con FDA (EE.UU.), EMA (Europa), ANVISA (Brasil) y OPS/OMS para estándares globales.' },
]

export default function Entidades() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="entidades" className="relative py-24 lg:py-32 bg-invima-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white text-invima-600 text-xs font-semibold rounded-full tracking-wide shadow-sm mb-4">
            Trabajo en Equipo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-invima-900 mb-4">
            ¿Con qué entidades trabaja?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Coordinamos acciones con múltiples entidades nacionales e internacionales para proteger la salud pública.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {entidades.map((e, i) => (
            <motion.div
              key={e.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-invima-200 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 bg-invima-50 rounded-xl flex items-center justify-center mb-4">
                <e.icon className="w-6 h-6 text-invima-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-0.5">{e.name}</h3>
              <p className="text-xs text-gray-500">{e.desc}</p>
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: hovered === i ? '200px' : '0px', opacity: hovered === i ? 1 : 0 }}
              >
                <div className="mt-3 pt-3 border-t border-invima-100">
                  <p className="text-xs text-invima-600 leading-relaxed">{e.detalle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
