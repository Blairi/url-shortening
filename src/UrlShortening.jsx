import { NavBar, Home, Shorten, Features, Bar, Footer } from './components/'
import { ShortenProvider } from './context'

export const UrlShortening = () => {
  return (
    <div>

      <NavBar />

      <Home />

      <ShortenProvider>
        <Shorten />
      </ShortenProvider>

      <Features />

      <Bar />  

      <Footer />

    </div>
  )
}

