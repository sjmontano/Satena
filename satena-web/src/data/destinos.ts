export interface Destino {
  nombre: string
  region: string
  descripcion: string
  imagen: string
  destacado?: boolean
}

export const destinos: Destino[] = [
  {
    nombre: 'Caño Cristales',
    region: 'Meta',
    descripcion: 'El río de los cinco colores, considerado el más hermoso del mundo.',
    imagen: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    destacado: true,
  },
  {
    nombre: 'Leticia',
    region: 'Amazonas',
    descripcion: 'Puerta de entrada a la selva amazónica, hogar de una biodiversidad incomparable.',
    imagen: 'https://images.unsplash.com/photo-1548883354-94bcfe321cbb?w=800&q=80',
    destacado: true,
  },
  {
    nombre: 'Nuquí',
    region: 'Chocó',
    descripcion: 'Paraíso del Pacífico colombiano con playas vírgenes y avistamiento de ballenas.',
    imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    destacado: true,
  },
  {
    nombre: 'San Andrés',
    region: 'San Andrés y Providencia',
    descripcion: 'Mar de siete colores, aguas cristalinas y cultura caribeña única.',
    imagen: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800&q=80',
    destacado: true,
  },
  {
    nombre: 'Providencia',
    region: 'San Andrés y Providencia',
    descripcion: 'La isla olvidada del Caribe colombiano, un tesoro natural por descubrir.',
    imagen: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&q=80',
  },
  {
    nombre: 'La Macarena',
    region: 'Meta',
    descripcion: 'Puerta de entrada a Caño Cristales, rodeada de sabanas y naturaleza.',
    imagen: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  },
  {
    nombre: 'Bahía Solano',
    region: 'Chocó',
    descripcion: 'Paraíso del Pacífico para el avistamiento de ballenas jorobadas.',
    imagen: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80',
  },
  {
    nombre: 'Villavicencio',
    region: 'Meta',
    descripcion: 'Capital del Llano, puerta de entrada a los Llanos Orientales.',
    imagen: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
  },
  {
    nombre: 'San José del Guaviare',
    region: 'Guaviare',
    descripcion: 'Ciudad de los murales prehistóricos y la selva amazónica.',
    imagen: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
  },
  {
    nombre: 'Mompox',
    region: 'Bolívar',
    descripcion: 'Ciudad museo del Caribe colombiano, patrimonio histórico de Colombia.',
    imagen: 'https://images.unsplash.com/photo-1518639192443-5f04c5c9c1c5?w=800&q=80',
  },
  {
    nombre: 'Quibdó',
    region: 'Chocó',
    descripcion: 'Capital del Chocó, corazón del Pacífico colombiano.',
    imagen: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80',
  },
  {
    nombre: 'Puerto Asís',
    region: 'Putumayo',
    descripcion: 'Puerta de entrada a la Amazonía colombiana desde el sur.',
    imagen: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
  },
]
