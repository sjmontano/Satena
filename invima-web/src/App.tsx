import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QueEs from './components/QueEs'
import Objetivos from './components/Objetivos'
import Funciones from './components/Funciones'
import QueControla from './components/QueControla'
import AeropuertosInvima from './components/Aeropuertos'
import Medidas from './components/Medidas'
import Entidades from './components/Entidades'
import Importancia from './components/Importancia'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Navbar />
      <Hero />
      <QueEs />
      <Objetivos />
      <Funciones />
      <QueControla />
      <AeropuertosInvima />
      <Medidas />
      <Entidades />
      <Importancia />
      <Footer />
    </div>
  )
}
