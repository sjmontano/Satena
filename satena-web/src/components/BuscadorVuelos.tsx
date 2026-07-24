import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Plane, ArrowRight, Calendar, Users, ArrowLeftRight } from 'lucide-react'
import { useIdioma } from '../i18n'
import { rutas, origenes, destinosDisponibles } from '../data/rutas'

interface VueloResultado {
  origen: string
  destino: string
  duracion: string
  aeronave: string
  precio: number
  salida: string
  llegada: string
}

function generarPrecio(_origen: string, _destino: string): number {
  const base = 180000
  const varianza = Math.random() * 250000
  return Math.round(base + varianza)
}

function generarHorario(): { salida: string; llegada: string } {
  const h = Math.floor(Math.random() * 20) + 5
  const m = Math.random() > 0.5 ? '00' : '30'
  const duracionH = Math.floor(Math.random() * 2) + 1
  const duracionM = Math.random() > 0.5 ? '00' : '30'
  const lh = h + duracionH
  const lm = m === '00' ? duracionM : String(Number(m) + Number(duracionM))
  return {
    salida: `${String(h).padStart(2, '0')}:${m}`,
    llegada: `${String(lh).padStart(2, '0')}:${lm}`,
  }
}

export default function BuscadorVuelos() {
  const { t } = useIdioma()
  const [origen, setOrigen] = useState('')
  const [destino, setDestino] = useState('')
  const [pasajeros, setPasajeros] = useState(1)
  const [resultados, setResultados] = useState<VueloResultado[] | null>(null)
  const [buscando, setBuscando] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!origen || !destino) return

    setBuscando(true)
    setResultados(null)

    setTimeout(() => {
      const rutasFiltradas = rutas.filter(
        (r) => r.origen === origen && r.destino === destino
      )

      if (rutasFiltradas.length === 0) {
        const horario = generarHorario()
        setResultados([
          {
            origen,
            destino,
            duracion: `${Math.floor(Math.random() * 2) + 1}h ${Math.random() > 0.5 ? '00' : '30'}m`,
            aeronave: 'ATR 42',
            precio: generarPrecio(origen, destino),
            ...horario,
          },
        ])
      } else {
        setResultados(
          rutasFiltradas.slice(0, 3).map((r) => {
            const horario = generarHorario()
            return {
              origen: r.origen,
              destino: r.destino,
              duracion: r.duracion,
              aeronave: r.aeronave,
              precio: generarPrecio(r.origen, r.destino),
              ...horario,
            }
          })
        )
      }
      setBuscando(false)
    }, 1200)
  }

  const swapRoutes = () => {
    const temp = origen
    setOrigen(destino)
    setDestino(temp)
  }

  const destinosFiltrados = origen
    ? destinosDisponibles.filter((d) => d !== origen)
    : destinosDisponibles

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
        <div className="grid grid-cols-[1fr,auto,1fr] gap-2 md:gap-3 items-end">
          <div>
            <label className="block text-[10px] md:text-xs font-semibold text-white/70 uppercase tracking-wider mb-1">
              {t('buscador.origen')}
            </label>
            <select
              value={origen}
              onChange={(e) => setOrigen(e.target.value)}
              required
              className="w-full px-3 md:px-4 py-2 md:py-2.5 bg-white/10 border border-white/20 rounded-xl text-white text-sm md:text-base focus:outline-none focus:border-[#FCD404] transition-colors appearance-none cursor-pointer"
            >
              <option value="" className="text-gray-800">{t('buscador.origen')}</option>
              {origenes.map((o) => (
                <option key={o} value={o} className="text-gray-800">{o}</option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={swapRoutes}
            className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors mb-0.5"
          >
            <ArrowLeftRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </button>

          <div>
            <label className="block text-[10px] md:text-xs font-semibold text-white/70 uppercase tracking-wider mb-1">
              {t('buscador.destino')}
            </label>
            <select
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
              required
              className="w-full px-3 md:px-4 py-2 md:py-2.5 bg-white/10 border border-white/20 rounded-xl text-white text-sm md:text-base focus:outline-none focus:border-[#FCD404] transition-colors appearance-none cursor-pointer"
            >
              <option value="" className="text-gray-800">{t('buscador.destino')}</option>
              {destinosFiltrados.map((d) => (
                <option key={d} value={d} className="text-gray-800">{d}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-3">
          <div>
            <label className="block text-[10px] md:text-xs font-semibold text-white/70 uppercase tracking-wider mb-1">
              <Calendar className="w-2.5 h-2.5 md:w-3 md:h-3 inline mr-1" />
              {t('buscador.ida')}
            </label>
            <input
              type="date"
              required
              className="w-full px-2 md:px-4 py-2 md:py-2.5 bg-white/10 border border-white/20 rounded-xl text-white text-sm md:text-base focus:outline-none focus:border-[#FCD404] transition-colors [color-scheme:dark]"
            />
          </div>
          <div>
            <label className="block text-[10px] md:text-xs font-semibold text-white/70 uppercase tracking-wider mb-1">
              <Calendar className="w-2.5 h-2.5 md:w-3 md:h-3 inline mr-1" />
              {t('buscador.vuelta')}
            </label>
            <input
              type="date"
              className="w-full px-2 md:px-4 py-2 md:py-2.5 bg-white/10 border border-white/20 rounded-xl text-white text-sm md:text-base focus:outline-none focus:border-[#FCD404] transition-colors [color-scheme:dark]"
            />
          </div>
          <div>
            <label className="block text-[10px] md:text-xs font-semibold text-white/70 uppercase tracking-wider mb-1">
              <Users className="w-2.5 h-2.5 md:w-3 md:h-3 inline mr-1" />
              {t('buscador.pasajeros')}
            </label>
            <select
              value={pasajeros}
              onChange={(e) => setPasajeros(Number(e.target.value))}
              className="w-full px-2 md:px-4 py-2 md:py-2.5 bg-white/10 border border-white/20 rounded-xl text-white text-sm md:text-base focus:outline-none focus:border-[#FCD404] transition-colors appearance-none cursor-pointer"
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n} className="text-gray-800">{n}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={buscando}
          className="w-full py-2.5 md:py-3 bg-[#FCD404] text-gray-900 font-bold rounded-xl hover:bg-[#e6bf00] transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg text-sm md:text-base"
        >
          {buscando ? (
            <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-gray-900/30 border-t-gray-900 rounded-full animate-spin" />
          ) : (
            <>
              <Search className="w-3.5 h-3.5 md:w-4 md:h-4" />
              {t('buscador.buscar')}
            </>
          )}
        </button>
      </form>

      <AnimatePresence>
        {resultados && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 md:mt-4 space-y-2 overflow-hidden"
          >
            <div className="text-[10px] md:text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
              {t('buscador.resultados')}
            </div>
            {resultados.map((v, i) => (
              <motion.div
                key={`${v.salida}-${i}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 md:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 md:gap-3"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="hidden sm:flex items-center gap-2">
                    <span className="text-white font-bold text-sm md:text-lg">{v.salida}</span>
                    <Plane className="w-3 h-3 md:w-4 md:h-4 text-[#FCD404]" />
                    <span className="text-white font-bold text-sm md:text-lg">{v.llegada}</span>
                  </div>
                  <div className="sm:hidden">
                    <div className="text-white font-semibold text-sm">{v.origen} → {v.destino}</div>
                    <div className="text-white/60 text-xs">{v.salida} - {v.llegada}</div>
                  </div>
                  <div className="hidden sm:block text-white/60 text-xs md:text-sm">{v.duracion}</div>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="text-right">
                    <div className="text-white/60 text-[10px] md:text-xs">{t('buscador.desde')}</div>
                    <div className="text-white font-bold text-sm md:text-base">${v.precio.toLocaleString('es-CO')}</div>
                  </div>
                  <a
                    href="#reserva"
                    className="px-3 py-1.5 md:px-4 md:py-2 bg-[#FCD404] text-gray-900 font-semibold rounded-lg text-xs md:text-sm hover:bg-[#e6bf00] transition-colors whitespace-nowrap"
                  >
                    {t('buscador.reservar')} <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 inline" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
