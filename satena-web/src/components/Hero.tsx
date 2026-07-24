import { useState } from 'react'
import { motion } from 'framer-motion'
import { useIdioma } from '../i18n'
import BuscadorVuelos from './BuscadorVuelos'

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4'

export default function Hero() {
  const { t } = useIdioma()
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <section id="inicio" className="relative min-h-screen overflow-y-auto">
      <div className="absolute inset-0 h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {!videoLoaded && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-white/20 border-t-[#FCD404] rounded-full animate-spin" />
        </div>
      )}

      <div className="relative flex flex-col min-h-screen">
        <div className="flex-1 flex items-center pt-24 pb-4 md:pt-28 md:pb-6">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/80 text-xs font-semibold tracking-[0.2em] uppercase">
                  {t('hero.label')}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-4 mb-3"
              >
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white/70 leading-none tracking-tighter">
                  {t('hero.line1')}
                </span>
                <span
                  className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tighter"
                  style={{ color: '#FCD404', marginTop: '-6px' }}
                >
                  {t('hero.line2')}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-6 leading-relaxed"
              >
                {t('hero.subtitle')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3"
              >
                <a
                  href="#destinos"
                  className="px-6 py-2.5 md:px-8 md:py-3 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white/25 transition-all duration-300 text-sm md:text-base"
                >
                  {t('hero.explorar')}
                </a>
                <a
                  href="#reserva"
                  className="px-6 py-2.5 md:px-8 md:py-3 rounded-full text-white font-medium transition-all duration-300 text-sm md:text-base"
                  style={{ backgroundColor: '#202A36' }}
                >
                  {t('hero.reservar')}
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="relative pb-6 md:pb-10"
        >
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-4 md:p-6 shadow-2xl">
              <BuscadorVuelos />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
