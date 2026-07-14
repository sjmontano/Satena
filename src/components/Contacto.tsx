import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, Mail, MapPin, Send, Check } from 'lucide-react'
import { useIdioma } from '../i18n'

export default function Contacto() {
  const { t } = useIdioma()
  const [enviado, setEnviado] = useState(false)
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEnviado(true)
    setTimeout(() => {
      setEnviado(false)
      setForm({ nombre: '', email: '', mensaje: '' })
    }, 3000)
  }

  return (
    <section id="contacto" className="relative py-24 lg:py-32 bg-white">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#CB1B1C] via-[#FCD404] to-[#CB1B1C]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {t('contacto.titulo')}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t('contacto.subtitulo')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-[#CB1B1C]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#CB1B1C]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('contacto.telefono')}</h4>
                  <p className="text-gray-600 text-sm">(601) 918 6030</p>
                  <p className="text-gray-400 text-xs">{t('contacto.horario')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('contacto.whatsapp')}</h4>
                  <p className="text-gray-600 text-sm">+57 323 322 00 06</p>
                  <p className="text-gray-400 text-xs">24 horas</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Dirección</h4>
                  <p className="text-gray-600 text-sm">Av. El Dorado # 103-08, Bogotá, Colombia</p>
                  <p className="text-gray-400 text-xs">Código postal 110911</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100">
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t('contacto.nombre')}</label>
                  <input
                    type="text"
                    value={form.nombre}
                    onChange={(e) => setForm((p) => ({ ...p, nombre: e.target.value }))}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CB1B1C]/30 focus:border-[#CB1B1C]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t('contacto.email')}</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CB1B1C]/30 focus:border-[#CB1B1C]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t('contacto.mensaje')}</label>
                  <textarea
                    rows={4}
                    value={form.mensaje}
                    onChange={(e) => setForm((p) => ({ ...p, mensaje: e.target.value }))}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CB1B1C]/30 focus:border-[#CB1B1C] resize-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#CB1B1C] text-white font-semibold rounded-xl hover:bg-[#A31516] transition-colors flex items-center justify-center gap-2"
              >
                {enviado ? (
                  <>
                    <Check className="w-4 h-4" /> {t('contacto.exito')}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> {t('contacto.enviar')}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
