import { motion } from 'framer-motion'
import { Shield, ThumbsUp, Ban, Globe, Heart, Award } from 'lucide-react'

const items = [
  { icon: Heart, text: 'Protege la salud de los colombianos' },
  { icon: Ban, text: 'Evita la venta de productos peligrosos' },
  { icon: ThumbsUp, text: 'Garantiza medicamentos y alimentos seguros' },
  { icon: Globe, text: 'Controla productos que ingresan y salen del país' },
  { icon: Shield, text: 'Fortalece la confianza del consumidor' },
]

export default function Importancia() {
  return (
    <section id="importancia" className="relative py-24 lg:py-32 bg-invima-900">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-salud via-invima-300 to-salud" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white/70 text-xs font-semibold rounded-full tracking-wide border border-white/10 mb-4">
            Cierre
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Importancia del INVIMA
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Nuestra labor impacta directamente la calidad de vida de todos los colombianos.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${
                i === items.length - 1 ? 'lg:col-span-1 sm:col-span-2 lg:col-start-2' : ''
              }`}
            >
              <item.icon className="w-8 h-8 text-salud mb-4" />
              <p className="text-white font-semibold text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-salud/20 rounded-full border border-salud/30">
            <Shield className="w-5 h-5 text-salud" />
            <span className="text-sm text-white/80 font-medium">
              INVIMA — Proteger la salud es nuestro compromiso
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500/15 rounded-full border border-amber-400/30"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-xs text-amber-300 font-medium tracking-wide">
              Entidad más transparente del sector salud — 2015 / 2016
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
