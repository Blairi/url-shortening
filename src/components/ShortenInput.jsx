import { useContext, useState } from 'react';
import { ShortenContext } from '../context';
import { isValidUrl } from '../helpers/isValidUrl';
import { useForm } from '../hooks/useForm'
import { getShrtcode } from '../services/getShrtcode';

export const ShortenInput = () => {

  const [ values, handleInputChange, reset ] = useForm({
    url: ''
  });

  const { shortens, setShortens } = useContext(ShortenContext);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async ( event, url ) => {

    event.preventDefault();

    if( !isValidUrl(url) ){
      setError(true);
      return;
    }

    setError(false);
    setIsLoading(true);

    const { result } = await getShrtcode({url: url});

    setShortens([...shortens, {
      url: url,
      shortenLink: result.full_short_link
    }]);

    setIsLoading(false);

    reset(); // Reset form

  }
  
  return (
    <form 
      className={
        isLoading 
        ? 'bg-[#3b3054] px-5 md:px-10 py-6 md:py-10 rounded-md bg-shorten grayscale' 
        : 'bg-[#3b3054] px-5 md:px-10 py-6 md:py-10 rounded-md bg-shorten'
      }
      onSubmit={ (event) => handleSubmit(event, values.url) }
    >

      <div className='md:flex w-full space-y-5 md:space-y-0 md:space-x-5'>

        <input
          type='text'
          name='url'
          className={
            error
            ? 'w-full md:w-3/4 text-sm px-3 py-2 md:py-4 rounded border-2 border-red-500 placeholder:text-red-500'
            : 'w-full md:w-3/4 text-sm px-3 py-2 md:py-4 rounded border-2 border-gray-200'
          }
          placeholder='Shorten a link here...'
          autoComplete='off'
          onChange={ handleInputChange }
          value={ values.url }
          disabled={ isLoading }
        />

        <div className='flex justify-center md:w-1/4'>
          <button
            className={
              isLoading 
              ? 'text-white bg-[#848484] rounded-md py-2 w-full font-bold cursor-not-allowed' 
              : 'text-white bg-[#2acfcf] rounded-md py-2 w-full font-bold'
            }
            disabled={ isLoading }
          >
            Shorten It!
          </button>
        </div>

      </div>

      {
        error && (
          <p className='text-red-500 pt-3 italic'>Please, add a valid link.</p>
        )
      }


    </form>
  )
}
