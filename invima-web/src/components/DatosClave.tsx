import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, MapPin, FlaskRound as Flask, Store } from 'lucide-react'

const stats = [
  { icon: Building2, value: 9, label: 'Grupos Territoriales', suffix: '', desc: 'Costa Caribe, Centro Occidente, Centro Oriente, Orinoquía, Eje Cafetero, Pacífico, Amazonía, Antioquia, Santanderes' },
  { icon: MapPin, value: 12, label: 'Puntos de Control', suffix: '', desc: 'Puertos marítimos, aeropuertos internacionales y pasos fronterizos estratégicos en todo el territorio nacional' },
  { icon: Flask, value: 7, label: 'Laboratorios', suffix: '', desc: 'Microbiología, Fisicoquímico, OGM, Productos Farmacéuticos, Biológicos, Dispositivos Médicos y Cosméticos' },
  { icon: Store, value: 1807, label: 'Establecimientos', suffix: '', desc: 'Establecimientos registrados y vigilados activamente por el INVIMA (corte 2024)' },
]

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const counted = useRef(false)

  useEffect(() => {
    if (counted.current) return
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !counted.current) {
        counted.current = true
        const duration = 2000
        const steps = 60
        const increment = target / steps
        let current = 0
        const interval = setInterval(() => {
          current += increment
          if (current >= target) {
            setCount(target)
            clearInterval(interval)
          } else {
            setCount(Math.round(current))
          }
        }, duration / steps)
      }
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return <div ref={ref} className="text-4xl md:text-5xl font-black text-invima-900">{count.toLocaleString()}{suffix}</div>
}

export default function DatosClave() {
  return (
    <section id="datos-clave" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-invima-50 text-invima-600 text-xs font-semibold rounded-full tracking-wide mb-4">
            Datos Clave
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-invima-900 mb-4">
            INVIMA en cifras
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Presencia nacional y capacidad operativa para proteger la salud de todos los colombianos.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:border-invima-200 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 bg-invima-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-invima-100 transition-colors">
                <s.icon className="w-7 h-7 text-invima-600" />
              </div>
              <AnimatedCounter target={s.value} suffix={s.suffix} />
              <div className="text-sm font-bold text-gray-700 mt-1">{s.label}</div>
              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
