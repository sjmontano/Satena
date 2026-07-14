import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import es from './es.json'
import en from './en.json'

export type Idioma = 'es' | 'en'

type Traducciones = Record<string, string>

const traducciones: Record<Idioma, Traducciones> = { es, en }

interface I18nContextType {
  idioma: Idioma
  setIdioma: (lang: Idioma) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType>({
  idioma: 'es',
  setIdioma: () => {},
  t: (key: string) => key,
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [idioma, setIdioma] = useState<Idioma>(() => {
    const stored = localStorage.getItem('satena-lang')
    return (stored === 'es' || stored === 'en') ? stored : 'es'
  })

  useEffect(() => {
    localStorage.setItem('satena-lang', idioma)
    document.documentElement.lang = idioma
  }, [idioma])

  const t = (key: string): string => {
    return traducciones[idioma]?.[key] ?? key
  }

  return (
    <I18nContext.Provider value={{ idioma, setIdioma, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useIdioma = () => useContext(I18nContext)
