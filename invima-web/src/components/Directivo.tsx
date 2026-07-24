import { motion } from 'framer-motion'
import { Shield, MapPin, Phone, Building2, FlaskRound as Flask, Users } from 'lucide-react'

const stats = [
  { icon: Building2, value: '9', label: 'Grupos Territoriales' },
  { icon: MapPin, value: '12', label: 'Puntos de Control' },
  { icon: Flask, value: '7', label: 'Laboratorios' },
  { icon: Users, value: '1.807', label: 'Establecimientos' },
]

export default function Directivo() {
  return (
    <section id="directivo" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
          alt="Edificio institucional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-invima-900/95 via-invima-900/85 to-invima-900/70" />
      </div>

      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
                            radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white/70 text-xs font-semibold rounded-full tracking-wide border border-white/10 mb-4">
            Dirección General
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Conozca al INVIMA
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            La autoridad sanitaria de Colombia trabaja para proteger tu salud en todo el territorio nacional.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl overflow-hidden shadow-xl h-64">
                <img
                  src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80"
                  alt="Laboratorio INVIMA"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl h-64 mt-8">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
                  alt="Inspección sanitaria"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-xl h-48 -mt-4">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80"
                  alt="Alimentos regulados"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-salud rounded-2xl flex items-center justify-center shadow-xl">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                  <Shield className="w-8 h-8 text-salud" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Dr. Francisco Rossi Buenaventura</h3>
                  <p className="text-sm text-salud">Director General — INVIMA</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <MapPin className="w-4 h-4 text-invima-300 shrink-0" />
                  <span>Carrera 10 # 64-28, Bogotá, Colombia</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <Phone className="w-4 h-4 text-invima-300 shrink-0" />
                  <span>(+57) (601) 242 50 00</span>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-white/10">
                <p className="text-sm text-white/50 leading-relaxed">
                  Adscrito al Ministerio de Salud y Protección Social — República de Colombia
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors"
                >
                  <s.icon className="w-5 h-5 text-salud mx-auto mb-1" />
                  <div className="text-lg font-bold text-white">{s.value}</div>
                  <div className="text-[10px] text-white/50 font-medium uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
