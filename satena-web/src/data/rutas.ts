export interface Ruta {
  origen: string
  destino: string
  frecuencia: string
  vuelosPorSemana: number
  aeronave: string
  duracion: string
}

export const rutas: Ruta[] = [
  { origen: 'Bogotá', destino: 'Medellín', frecuencia: 'Diario', vuelosPorSemana: 21, aeronave: 'ATR 72', duracion: '1h 05m' },
  { origen: 'Medellín', destino: 'Bogotá', frecuencia: 'Diario', vuelosPorSemana: 22, aeronave: 'ATR 72', duracion: '1h 05m' },
  { origen: 'Bogotá', destino: 'Tumaco', frecuencia: 'Diario', vuelosPorSemana: 10, aeronave: 'ATR 42', duracion: '2h 00m' },
  { origen: 'Cali', destino: 'Tumaco', frecuencia: 'Diario', vuelosPorSemana: 12, aeronave: 'ATR 42', duracion: '1h 15m' },
  { origen: 'Medellín', destino: 'Barranquilla', frecuencia: 'Semanal', vuelosPorSemana: 4, aeronave: 'ERJ-145', duracion: '1h 20m' },
  { origen: 'Barranquilla', destino: 'Riohacha', frecuencia: 'Semanal', vuelosPorSemana: 3, aeronave: 'ATR 42', duracion: '0h 45m' },
  { origen: 'Bogotá', destino: 'La Macarena', frecuencia: 'Semanal', vuelosPorSemana: 3, aeronave: 'ATR 42', duracion: '1h 30m' },
  { origen: 'Villavicencio', destino: 'La Macarena', frecuencia: 'Semanal', vuelosPorSemana: 2, aeronave: 'ATR 42', duracion: '0h 50m' },
  { origen: 'Bogotá', destino: 'Leticia', frecuencia: 'Diario', vuelosPorSemana: 7, aeronave: 'ATR 72', duracion: '2h 45m' },
  { origen: 'Bogotá', destino: 'Villavicencio', frecuencia: 'Diario', vuelosPorSemana: 14, aeronave: 'ATR 42', duracion: '0h 40m' },
  { origen: 'Bogotá', destino: 'San Andrés', frecuencia: 'Diario', vuelosPorSemana: 7, aeronave: 'ERJ-145', duracion: '2h 00m' },
  { origen: 'Cali', destino: 'Bahía Solano', frecuencia: 'Semanal', vuelosPorSemana: 5, aeronave: 'ATR 42', duracion: '1h 00m' },
  { origen: 'Cali', destino: 'Nuquí', frecuencia: 'Semanal', vuelosPorSemana: 4, aeronave: 'ATR 42', duracion: '0h 55m' },
  { origen: 'Popayán', destino: 'Cali', frecuencia: 'Semanal', vuelosPorSemana: 5, aeronave: 'ATR 42', duracion: '0h 35m' },
  { origen: 'Popayán', destino: 'Guapi', frecuencia: 'Semanal', vuelosPorSemana: 3, aeronave: 'ATR 42', duracion: '0h 40m' },
  { origen: 'Bogotá', destino: 'Arauca', frecuencia: 'Diario', vuelosPorSemana: 7, aeronave: 'ATR 42', duracion: '1h 30m' },
  { origen: 'Bogotá', destino: 'Puerto Carreño', frecuencia: 'Semanal', vuelosPorSemana: 4, aeronave: 'ATR 42', duracion: '2h 00m' },
  { origen: 'Bogotá', destino: 'Mitú', frecuencia: 'Semanal', vuelosPorSemana: 3, aeronave: 'ATR 42', duracion: '2h 00m' },
  { origen: 'Bogotá', destino: 'San José del Guaviare', frecuencia: 'Semanal', vuelosPorSemana: 5, aeronave: 'ATR 42', duracion: '1h 15m' },
  { origen: 'Bogotá', destino: 'Florencia', frecuencia: 'Diario', vuelosPorSemana: 7, aeronave: 'ATR 42', duracion: '1h 15m' },
  { origen: 'Medellín', destino: 'Quibdó', frecuencia: 'Diario', vuelosPorSemana: 7, aeronave: 'ATR 42', duracion: '0h 45m' },
  { origen: 'Medellín', destino: 'Valledupar', frecuencia: 'Semanal', vuelosPorSemana: 4, aeronave: 'ERJ-145', duracion: '1h 15m' },
  { origen: 'Cali', destino: 'Pitalito', frecuencia: 'Semanal', vuelosPorSemana: 4, aeronave: 'ATR 42', duracion: '0h 50m' },
  { origen: 'Cali', destino: 'Ipiales', frecuencia: 'Semanal', vuelosPorSemana: 3, aeronave: 'ATR 42', duracion: '1h 10m' },
  { origen: 'Bogotá', destino: 'Saravena', frecuencia: 'Semanal', vuelosPorSemana: 5, aeronave: 'ATR 42', duracion: '1h 25m' },
  { origen: 'Bogotá', destino: 'Buenaventura', frecuencia: 'Semanal', vuelosPorSemana: 5, aeronave: 'ATR 42', duracion: '1h 20m' },
  { origen: 'Quibdó', destino: 'Nuquí', frecuencia: 'Semanal', vuelosPorSemana: 3, aeronave: 'DHC-6', duracion: '0h 22m' },
  { origen: 'Quibdó', destino: 'Bahía Solano', frecuencia: 'Semanal', vuelosPorSemana: 3, aeronave: 'DHC-6', duracion: '0h 20m' },
  { origen: 'San Andrés', destino: 'Providencia', frecuencia: 'Semanal', vuelosPorSemana: 3, aeronave: 'ATR 42', duracion: '0h 40m' },
]

export const origenes = [...new Set(rutas.map((r) => r.origen))].sort()
export const destinosDisponibles = [...new Set(rutas.map((r) => r.destino))].sort()
