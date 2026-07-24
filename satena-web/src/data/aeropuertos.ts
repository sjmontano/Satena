export interface Aeropuerto {
  nombre: string
  ciudad: string
  codigo: string
  descripcion: string
  icono: string
  esHub: boolean
}

export const aeropuertos: Aeropuerto[] = [
  {
    nombre: 'Aeropuerto Internacional El Dorado (Terminal 2 - Puente Aéreo)',
    ciudad: 'Bogotá',
    codigo: 'BOG',
    descripcion: 'Principal centro de conexiones (hub) nacional de SATENA. Desde aquí operamos la mayor cantidad de rutas hacia todos los rincones de Colombia.',
    icono: 'building',
    esHub: true,
  },
  {
    nombre: 'Aeropuerto Olaya Herrera',
    ciudad: 'Medellín',
    codigo: 'EOH',
    descripcion: 'Clave para la operación regional, permite aterrizar directamente en el centro de la ciudad de Medellín, conectando con Antioquia y el norte del país.',
    icono: 'building',
    esHub: true,
  },
  {
    nombre: 'Aeropuerto Internacional Alfonso Bonilla Aragón',
    ciudad: 'Cali',
    codigo: 'CLO',
    descripcion: 'Punto estratégico para la conectividad hacia el sur y el Pacífico colombiano. Desde aquí operamos rutas hacia Nuquí, Bahía Solano, Tumaco y más.',
    icono: 'building',
    esHub: true,
  },
  {
    nombre: 'Aeropuerto Vanguardia',
    ciudad: 'Villavicencio',
    codigo: 'VVC',
    descripcion: 'Puerta de entrada principal para los vuelos hacia la región de la Orinoquía y la Amazonía. Base clave para la conectividad del oriente colombiano.',
    icono: 'warehouse',
    esHub: false,
  },
  {
    nombre: 'Aeropuerto Internacional Alfredo Vásquez Cobo',
    ciudad: 'Leticia',
    codigo: 'LET',
    descripcion: 'Fundamental para la conexión de pasajeros con el extremo sur del país y la selva amazónica. Puerta a la Amazonía colombiana.',
    icono: 'warehouse',
    esHub: false,
  },
]
