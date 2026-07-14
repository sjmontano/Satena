import Aeropuertos from './components/Aeropuertos'
import DestinosTuristicos from './components/DestinosTuristicos'
import FlotaAviones from './components/FlotaAviones'
import GlobeSection from './components/GlobeSection'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProgressIndicator from './components/ProgressIndicator'
import QuienesSomos from './components/QuienesSomos'
import VuelosRutas from './components/VuelosRutas'
import { I18nProvider } from './i18n'

export default function App() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-gray-50 font-sans">
        <Navbar />
        <Hero />
        <QuienesSomos />
        <DestinosTuristicos />
        <GlobeSection />
        <VuelosRutas />
        <FlotaAviones />
        <Aeropuertos />
        <ProgressIndicator />
        {/* <FormularioReserva /> */}
        {/* <Contacto /> */}
        {/*<Footer />*/}
      </div>
    </I18nProvider>
  )
}
