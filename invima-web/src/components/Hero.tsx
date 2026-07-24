import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, ChevronDown, Building, Activity, Phone, MapPin } from 'lucide-react'

export default function Hero() {
  const [count, setCount] = useState(0)
  const counted = useRef(false)
  const [showDirector, setShowDirector] = useState(false)

  useEffect(() => {
    if (counted.current) return
    counted.current = true
    let n = 0
    const max = 60
    const interval = setInterval(() => {
      n++
      setCount(n)
      if (n >= max) clearInterval(interval)
    }, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-invima-900 via-invima-800 to-invima-700 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
                            radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-salud via-invima-300 to-salud" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center border border-white/10">
                <Shield className="w-7 h-7 text-salud" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white/50 uppercase tracking-[0.2em]">
                  República de Colombia
                </div>
                <div className="text-sm text-white/70 font-medium">
                  Ministerio de Salud y Protección Social
                </div>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[0.95] tracking-tighter mb-5">
              <span className="text-white/60 font-light block">Instituto Nacional de</span>
              <span className="block">Vigilancia</span>
              <span className="block text-salud">INVIMA</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed mb-8">
              Autoridad sanitaria de Colombia encargada de proteger la salud pública mediante la inspección, 
              vigilancia y control de productos que puedan afectar la salud de las personas.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#que-es"
                className="px-6 py-3 bg-salud text-white font-semibold rounded-xl hover:bg-[#219A52] transition-all hover:scale-105 shadow-lg shadow-salud/25"
              >
                Conocer más
              </a>
              <a
                href="#funciones"
                className="px-6 py-3 bg-white/10 backdrop-blur border border-white/20 text-white font-medium rounded-xl hover:bg-white/20 transition-all"
              >
                Funciones principales
              </a>
            </div>

            <div className="flex flex-wrap gap-8 mt-10">
              <div className="flex items-center gap-3">
                <Building className="w-5 h-5 text-invima-300" />
                <div>
                  <div className="text-2xl font-bold text-white">{count}+</div>
                  <div className="text-xs text-white/50">Años protegiendo</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-salud" />
                <div>
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-xs text-white/50">Categorías reguladas</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div
                onMouseEnter={() => setShowDirector(true)}
                onMouseLeave={() => setShowDirector(false)}
                className="w-72 h-72 rounded-full bg-invima-600/30 border border-invima-400/20 flex items-center justify-center backdrop-blur-sm cursor-default"
              >
                <div className="w-52 h-52 rounded-full bg-invima-500/20 border border-invima-300/20 flex items-center justify-center">
                  <div className="w-36 h-36 rounded-full bg-invima-400/20 border border-invima-200/20 flex items-center justify-center">
                    <Shield className="w-16 h-16 text-salud" />
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-invima-400/20"
              />
              <AnimatePresence>
                {showDirector && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full mt-4 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-4 z-20"
                  >
                    <p className="text-sm font-bold text-invima-900">Dr. Francisco Rossi Buenaventura</p>
                    <p className="text-xs text-invima-500 font-medium">Director General</p>
                    <div className="mt-3 pt-3 border-t border-gray-100 space-y-1.5">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <MapPin className="w-3 h-3 text-invima-400" />
                        <span>Cra 10 # 64-28, Bogotá</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Phone className="w-3 h-3 text-invima-400" />
                        <span>(+57) (601) 242 50 00</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  )
}
