import { Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-invima-950 bg-invima-900 border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-invima-400" />
            <div>
              <span className="text-sm font-bold text-white">INVIMA</span>
              <span className="text-[10px] text-white/40 ml-2">Colombia</span>
            </div>
          </div>
          <p className="text-xs text-white/30 text-center">
            Instituto Nacional de Vigilancia de Medicamentos y Alimentos &middot; Todos los derechos reservados
          </p>
          <div className="flex items-center gap-4 text-[10px] text-white/20">
            <span>Ministerio de Salud</span>
            <span className="w-px h-3 bg-white/10" />
            <span>Gobierno de Colombia</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
