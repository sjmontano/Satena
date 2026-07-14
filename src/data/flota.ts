export interface Avion {
  nombre: string
  tipo: string
  capacidad: string
  velocidad: string
  alcance: string
  uso: string
  imagen: string
  descripcion: string
}

export const flota: Avion[] = [
  {
    nombre: 'ATR 42-500',
    tipo: 'Turbo-hélice regional',
    capacidad: '48 pasajeros',
    velocidad: '556 km/h',
    alcance: '1,328 km',
    uso: 'Rutas regionales y pistas cortas',
    imagen: 'https://images.unsplash.com/photo-1436491865332-7a61a109b3e2?w=600&q=80',
    descripcion: 'El caballo de batalla de SATENA para rutas regionales. Ideal para operar en aeropuertos con pistas cortas y condiciones geográficas complejas.',
  },
  {
    nombre: 'ATR 72-600',
    tipo: 'Turbo-hélice regional',
    capacidad: '70 pasajeros',
    velocidad: '510 km/h',
    alcance: '1,500 km',
    uso: 'Rutas de alta demanda y media distancia',
    imagen: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?w=600&q=80',
    descripcion: 'Versión de mayor capacidad del ATR, perfecto para las rutas con mayor demanda de pasajeros en la red de SATENA.',
  },
  {
    nombre: 'Embraer ERJ-145',
    tipo: 'Jet regional',
    capacidad: '50 pasajeros',
    velocidad: '834 km/h',
    alcance: '2,500 km',
    uso: 'Rutas jet de media distancia',
    imagen: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?w=600&q=80',
    descripcion: 'Jet regional que permite a SATENA operar rutas de mayor distancia y velocidad, conectando las principales ciudades del país.',
  },
  {
    nombre: 'De Havilland DHC-6 Twin Otter',
    tipo: 'Avión utilitario STOL',
    capacidad: '19 pasajeros',
    velocidad: '287 km/h',
    alcance: '1,400 km',
    uso: 'Pistas extremadamente cortas y regiones apartadas',
    imagen: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=600&q=80',
    descripcion: 'El avión más versátil de SATENA. Capaz de aterrizar en pistas de tierra, ríos y terrenos no preparados. Lleva conectividad a donde ninguna otra aerolínea llega.',
  },
]
