import { useState } from "react"

export const ShortenLink = ({ url, shortenLink }) => {

  const [ isCopied, setIsCopied ] = useState( false );

  const handleClick = () => {
    navigator.clipboard.writeText( shortenLink );
    setIsCopied( true );
  }

  return (
    <div className="bg-white rounded px-3 overflow-hidden md:flex md:items-center md:justify-between">

      <div className="border-b-2 md:border-0 border-gray-300 py-4">
        <a
          href={ url }
          className="text-sm"
        >
          { url }
        </a>
      </div>

      <div className="py-4 space-y-3 md:space-y-0 md:space-x-5 md:flex md:items-center">

        <a
          href={ shortenLink }
          className="text-sm text-[#2acfcf] font-bold"
        >
          { shortenLink }
        </a>

        <div className='flex justify-center'>
          <button
            className={
              isCopied
              ? 'text-white bg-[#3b3054] rounded-md py-2 md:px-9 w-full md:w-auto font-bold'
              : 'text-white bg-[#2acfcf] rounded-md py-2 md:px-9 w-full md:w-auto font-bold'
            }
            onClick={ handleClick }
          >
            {
              isCopied
              ? 'Copied!'
              : 'Copy'
            }
          </button>
        </div>

      </div>

    </div>
  )
}
