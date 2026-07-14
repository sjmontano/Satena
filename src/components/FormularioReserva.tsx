import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, ArrowLeft, Plane, CreditCard, User, ClipboardCheck } from 'lucide-react'
import { useIdioma } from '../i18n'
import { origenes, destinosDisponibles } from '../data/rutas'

const pasos = [
  { icon: Plane, key: 'reserva.paso1' },
  { icon: User, key: 'reserva.paso2' },
  { icon: ClipboardCheck, key: 'reserva.paso3' },
]

export default function FormularioReserva() {
  const { t } = useIdioma()
  const [paso, setPaso] = useState(0)
  const [confirmado, setConfirmado] = useState(false)
  const [codigo, setCodigo] = useState('')
  const [formData, setFormData] = useState({
    origen: '',
    destino: '',
    fecha: '',
    pasajeros: 1,
    nombre: '',
    documento: '',
    email: '',
    telefono: '',
  })

  const handleChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleConfirmar = () => {
    const cod = `SAT-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
    setCodigo(cod)
    setConfirmado(true)
  }

  const reset = () => {
    setPaso(0)
    setConfirmado(false)
    setCodigo('')
    setFormData({ origen: '', destino: '', fecha: '', pasajeros: 1, nombre: '', documento: '', email: '', telefono: '' })
  }

  const destinosFiltrados = formData.origen
    ? destinosDisponibles.filter((d) => d !== formData.origen)
    : destinosDisponibles

  if (confirmado) {
    return (
      <section id="reserva" className="relative py-24 lg:py-32 bg-gray-50">
        <div className="max-w-lg mx-auto px-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl p-8 lg:p-12 text-center shadow-xl border border-gray-100"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('reserva.exito')}</h3>
            <p className="text-gray-500 mb-6">{t('reserva.codigo')}</p>
            <div className="inline-block bg-gray-50 rounded-xl px-6 py-4 mb-6 border border-gray-100">
              <span className="text-2xl font-mono font-bold text-[#CB1B1C]">{codigo}</span>
            </div>
            <div className="text-sm text-gray-500 space-y-1 mb-8">
              <p>{formData.origen} → {formData.destino}</p>
              <p>{formData.fecha} · {formData.pasajeros} pasajero(s)</p>
              <p>{formData.nombre} · {formData.email}</p>
            </div>
            <button
              onClick={reset}
              className="px-6 py-3 bg-[#CB1B1C] text-white font-semibold rounded-xl hover:bg-[#A31516] transition-colors"
            >
              Nueva Reserva
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="reserva" className="relative py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {t('reserva.titulo')}
          </h2>
        </motion.div>

        <div className="flex items-center justify-center gap-4 mb-10">
          {pasos.map((p, i) => (
            <div key={p.key} className="flex items-center gap-4">
              <div className={`flex items-center gap-2 ${
                i <= paso ? 'text-[#CB1B1C]' : 'text-gray-300'
              }`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  i <= paso ? 'bg-[#CB1B1C] text-white' : 'bg-gray-100 text-gray-400'
                }`}>
                  {i + 1}
                </div>
                <span className={`text-sm font-semibold hidden sm:inline ${i <= paso ? 'text-gray-900' : 'text-gray-400'}`}>
                  {t(p.key)}
                </span>
              </div>
              {i < pasos.length - 1 && (
                <div className={`w-8 h-0.5 ${i < paso ? 'bg-[#CB1B1C]' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {paso === 0 && (
              <motion.div
                key="paso1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100"
              >
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t('buscador.origen')}</label>
                    <select
                      value={formData.origen}
                      onChange={(e) => handleChange('origen', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CB1B1C]/30 focus:border-[#CB1B1C] appearance-none cursor-pointer"
                    >
                      <option value="">{t('buscador.origen')}</option>
                      {origenes.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t('buscador.destino')}</label>
                    <select
                      value={formData.destino}
                      onChange={(e) => handleChange('destino', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CB1B1C]/30 focus:border-[#CB1B1C] appearance-none cursor-pointer"
                    >
                      <option value="">{t('buscador.destino')}</option>
                      {destinosFiltrados.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t('buscador.ida')}</label>
                    <input
                      type="date"
                      value={formData.fecha}
                      onChange={(e) => handleChange('fecha', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CB1B1C]/30 focus:border-[#CB1B1C]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t('buscador.pasajeros')}</label>
                    <select
                      value={formData.pasajeros}
                      onChange={(e) => handleChange('pasajeros', Number(e.target.value))}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CB1B1C]/30 focus:border-[#CB1B1C] appearance-none cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>{n} pasajero(s)</option>
                      ))}
                    </select>
                  </div>
                </div>
                <button
                  onClick={() => setPaso(1)}
                  disabled={!formData.origen || !formData.destino || !formData.fecha}
                  className="w-full py-3 bg-[#CB1B1C] text-white font-semibold rounded-xl hover:bg-[#A31516] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {t('reserva.siguiente')} <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}

            {paso === 1 && (
              <motion.div
                key="paso2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100"
              >
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t('reserva.nombre')}</label>
                    <input
                      type="text"
                      value={formData.nombre}
                      onChange={(e) => handleChange('nombre', e.target.value)}
                      placeholder="Juan Pérez"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CB1B1C]/30 focus:border-[#CB1B1C]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t('reserva.documento')}</label>
                    <input
                      type="text"
                      value={formData.documento}
                      onChange={(e) => handleChange('documento', e.target.value)}
                      placeholder="1234567890"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CB1B1C]/30 focus:border-[#CB1B1C]"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t('reserva.email')}</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="juan@email.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CB1B1C]/30 focus:border-[#CB1B1C]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t('reserva.telefono')}</label>
                      <input
                        type="tel"
                        value={formData.telefono}
                        onChange={(e) => handleChange('telefono', e.target.value)}
                        placeholder="+57 300 123 4567"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CB1B1C]/30 focus:border-[#CB1B1C]"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setPaso(0)}
                    className="flex-1 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" /> {t('reserva.anterior')}
                  </button>
                  <button
                    onClick={() => setPaso(2)}
                    disabled={!formData.nombre || !formData.documento || !formData.email}
                    className="flex-1 py-3 bg-[#CB1B1C] text-white font-semibold rounded-xl hover:bg-[#A31516] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {t('reserva.siguiente')} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {paso === 2 && (
              <motion.div
                key="paso3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100"
              >
                <div className="bg-gray-50 rounded-xl p-6 mb-6 space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-500">{t('vuelos.origen')}</span>
                    <span className="font-semibold text-gray-900">{formData.origen}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-500">{t('vuelos.destino')}</span>
                    <span className="font-semibold text-gray-900">{formData.destino}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-500">{t('buscador.ida')}</span>
                    <span className="font-semibold text-gray-900">{formData.fecha}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-500">{t('buscador.pasajeros')}</span>
                    <span className="font-semibold text-gray-900">{formData.pasajeros}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-500">{t('reserva.nombre')}</span>
                    <span className="font-semibold text-gray-900">{formData.nombre}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">{t('reserva.email')}</span>
                    <span className="font-semibold text-gray-900">{formData.email}</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setPaso(1)}
                    className="flex-1 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" /> {t('reserva.anterior')}
                  </button>
                  <button
                    onClick={handleConfirmar}
                    className="flex-1 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <CreditCard className="w-4 h-4" /> {t('reserva.confirmar')}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
