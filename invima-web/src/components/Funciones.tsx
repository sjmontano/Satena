import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, Search, FileCheck, RefreshCw, XCircle, FlaskRound as Flask, AlertTriangle, Scale, Trash2, Globe } from 'lucide-react'

const funciones = [
  { icon: Building2, title: 'Inspeccionar establecimientos', desc: 'Visita y evaluación de productores e importadores para verificar cumplimiento sanitario.' },
  { icon: Search, title: 'Vigilar productos regulados', desc: 'Supervisión continua de alimentos, medicamentos, cosméticos y demás productos en el mercado.' },
  { icon: FileCheck, title: 'Expedir registros sanitarios', desc: 'Otorgar autorizaciones para la fabricación, importación y comercialización de productos.' },
  { icon: RefreshCw, title: 'Renovar registros sanitarios', desc: 'Actualización periódica de registros para mantener la vigencia y cumplimiento normativo.' },
  { icon: XCircle, title: 'Cancelar registros sanitarios', desc: 'Revocación de autorizaciones cuando se incumplen los requisitos sanitarios.' },
  { icon: Flask, title: 'Análisis de laboratorio', desc: 'Toma de muestras para análisis y verificación de calidad e inocuidad de productos.' },
  { icon: AlertTriangle, title: 'Investigar denuncias', desc: 'Atención e investigación de denuncias sanitarias presentadas por la ciudadanía.' },
  { icon: Scale, title: 'Aplicar sanciones', desc: 'Imposición de multas y sanciones cuando se incumple la normatividad sanitaria.' },
  { icon: Trash2, title: 'Retirar productos peligrosos', desc: 'Orden de retiro del mercado para productos que representan un riesgo para la salud.' },
  { icon: Globe, title: 'Coordinar con autoridades', desc: 'Acciones conjuntas con entidades nacionales e internacionales en vigilancia sanitaria.' },
]

const INITIAL = 5

export default function Funciones() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? funciones : funciones.slice(0, INITIAL)

  return (
    <section id="funciones" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-salud-light text-salud text-xs font-semibold rounded-full tracking-wide mb-4">
            Funciones Principales
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-invima-900 mb-4">
            ¿Qué hace el INVIMA?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Diez funciones clave que desarrollamos para proteger la salud de los colombianos.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-5 max-w-5xl mx-auto">
          {visible.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100 hover:bg-invima-50 hover:border-invima-100 transition-all duration-200 group"
            >
              <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-invima-100 transition-colors">
                <f.icon className="w-5 h-5 text-invima-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-0.5">{f.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {funciones.length > INITIAL && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-invima-50 text-invima-700 font-medium rounded-full hover:bg-invima-100 transition-all border border-invima-200"
            >
              {expanded ? 'Ver menos' : `Ver las 10 funciones`}
              <svg className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
