import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { rutas } from '../data/rutas'

// @ts-ignore - react-globe.gl types
import Globe from 'react-globe.gl'

const coords: Record<string, [number, number]> = {
  Bogotá: [4.711, -74.072],
  Medellín: [6.218, -75.568],
  Tumaco: [1.798, -78.815],
  Cali: [3.422, -76.522],
  Barranquilla: [10.979, -74.806],
  Riohacha: [11.544, -72.907],
  'La Macarena': [2.183, -73.783],
  Villavicencio: [4.143, -73.593],
  Leticia: [-4.193, -69.943],
  'San Andrés': [12.571, -81.707],
  'Bahía Solano': [6.218, -77.401],
  Nuquí: [5.712, -77.271],
  Popayán: [2.445, -76.614],
  Guapi: [2.571, -77.88],
  Arauca: [7.084, -70.759],
  'Puerto Carreño': [6.185, -67.484],
  Mitú: [1.26, -70.235],
  'San José del Guaviare': [2.569, -72.642],
  Florencia: [1.614, -75.604],
  Quibdó: [5.694, -76.651],
  Valledupar: [10.463, -73.253],
  Pitalito: [1.861, -76.053],
  Ipiales: [0.828, -77.641],
  Saravena: [6.954, -71.876],
  Buenaventura: [3.88, -77.034],
  Providencia: [13.35, -81.374],
}

const ciudades = Object.entries(coords)
  .filter(([nombre]) =>
    rutas.some((r) => r.origen === nombre || r.destino === nombre)
  )
  .map(([nombre, [lat, lng]]) => ({ nombre, lat, lng }))

function distancia([lat1, lng1]: [number, number], [lat2, lng2]: [number, number]) {
  return Math.sqrt((lat1 - lat2) ** 2 + (lng1 - lng2) ** 2)
}

const paresUnicos = new Set<string>()
const arcosData: {
  startLat: number
  startLng: number
  endLat: number
  endLng: number
  color: string
  dist: number
  initialGap: number
  animateTime: number
}[] = []

rutas.forEach((r) => {
  const key = `${r.origen}→${r.destino}`
  const reverseKey = `${r.destino}→${r.origen}`
  if (paresUnicos.has(key) || paresUnicos.has(reverseKey)) return
  paresUnicos.add(key)
  const o = coords[r.origen]
  const d = coords[r.destino]
  if (o && d) {
    const dist = distancia(o, d)
    arcosData.push({
      startLat: o[0],
      startLng: o[1],
      endLat: d[0],
      endLng: d[1],
      color: dist > 8 ? '#CB1B1C' : '#FCD404',
      dist,
      initialGap: Math.random() * 8,
      animateTime: 2000 + Math.random() * 2500,
    })
  }
})

arcosData.sort(() => Math.random() - 0.5)

export default function GlobeSection() {
  const globeRef = useRef<any>(null)
  const [globeReady, setGlobeReady] = useState(false)

  useEffect(() => {
    if (!globeRef.current || !globeReady) return
    const ctrl = globeRef.current.controls()
    ctrl.enableZoom = false
    ctrl.enablePan = false
    ctrl.rotateSpeed = 0.6
    globeRef.current.pointOfView(
      { lat: 4, lng: -74, altitude: 0.65 },
      1200
    )
  }, [globeReady])

  return (
    <section id="red" className="relative py-16 md:py-20 bg-[#0B1119] overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#CB1B1C] via-[#FCD404] to-[#CB1B1C] z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-6 px-6"
      >
        <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest">
          {Object.keys(coords).length} destinos &middot; {rutas.length} rutas activas
        </p>
      </motion.div>

      <div className="relative h-[350px] sm:h-[420px] md:h-[500px] max-w-full">
        <Globe
          ref={globeRef}
          onGlobeReady={() => setGlobeReady(true)}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-dark.jpg"
          bumpImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png"
          pointsData={ciudades.map((c) => ({ lat: c.lat, lng: c.lng }))}
          pointColor={() => '#FCD404'}
          pointRadius={0.05}
          pointResolution={8}
          arcsData={arcosData}
          arcColor={(a: any) => a.color}
          arcStroke={(a: any) => (a.dist > 8 ? 0.4 : 0.6)}
          arcDashLength={0.12}
          arcDashGap={5}
          arcDashInitialGap={(a: any) => a.initialGap}
          arcDashAnimateTime={(a: any) => a.animateTime}
          arcAltitude={(a: any) => Math.min(a.dist * 0.01 + 0.008, 0.08)}
          arcsTransitionDuration={0}
          atmosphereColor="#CB1B1C"
          atmosphereAltitude={0.08}
          enablePointerInteraction={true}
          labelsData={ciudades}
          labelLat={(c: any) => c.lat}
          labelLng={(c: any) => c.lng}
          labelText={(c: any) => c.nombre}
          labelColor={() => 'rgba(255,255,255,0.7)'}
          labelDotRadius={0.08}
          labelDotOrientation={() => 'bottom' as const}
          labelSize={() => 0.3}
          labelResolution={4}
          labelAltitude={0.003}
        />
      </div>
    </section>
  )
}
