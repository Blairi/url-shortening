import { useState } from 'react'
import {ShortenContext} from './'

export const ShortenProvider = ({ children }) => {

  const [shortens, setShortens] = useState([]);

  return (
    <ShortenContext.Provider value={{shortens, setShortens}}>
      { children }
    </ShortenContext.Provider>
  )
}