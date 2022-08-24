import { ShortenInput } from "./ShortenInput"
import { ShortenLink } from "./ShortenLink"
import { ShortenContext } from "../context"
import { useContext } from "react"

export const Shorten = () => {

  const { shortens = [] } = useContext(ShortenContext);

  return (
    <main name='shorten' className="w-[87%] mx-auto max-w-[1280px]">

        <div className="space-y-10 -translate-y-14">

          <ShortenInput />

          <div className="space-y-5">

            {
              shortens.map((item, index) => (
                <ShortenLink 
                  key={ index }
                  url={ item.url }
                  shortenLink={ item.shortenLink }
                />
              ))
            }
            
          </div>
        </div>


    </main>
  )
}
