import { Globe, MessageCircle, Camera, Video, Plane } from 'lucide-react'
import { useIdioma } from '../i18n'

const redes = [
  { icon: Globe, href: 'https://facebook.com/aerolineasatena', label: 'Facebook' },
  { icon: MessageCircle, href: 'https://x.com/AerolineaSatena', label: 'X (Twitter)' },
  { icon: Camera, href: 'https://instagram.com/aerolineasatena', label: 'Instagram' },
  { icon: Video, href: 'https://youtube.com/@aerolineasatena', label: 'YouTube' },
]

export default function Footer() {
  const { t, idioma } = useIdioma()

  return (
    <footer className="bg-[#202A36] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#CB1B1C] rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-lg">S</span>
              </div>
              <span className="text-2xl font-bold">SATENA</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              {idioma === 'es'
                ? 'Servicio Aéreo a Territorios Nacionales. Conectando el corazón de Colombia desde 1962.'
                : 'Air Service to National Territories. Connecting the heart of Colombia since 1962.'}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              {t('footer.siguenos')}
            </h4>
            <div className="flex gap-3">
              {redes.map((red) => (
                <a
                  key={red.label}
                  href={red.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#CB1B1C] transition-colors"
                  aria-label={red.label}
                >
                  <red.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Call Center: (601) 918 6030</li>
              <li>WhatsApp: +57 323 322 00 06</li>
              <li>Email: cliente@satena.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} SATENA. {t('footer.derechos')}
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Plane className="w-3.5 h-3.5" />
            {idioma === 'es' ? 'Hecho en Colombia' : 'Made in Colombia'}
          </div>
        </div>
      </div>
    </footer>
  )
}
