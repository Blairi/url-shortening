import { Link } from 'react-scroll'
import illustrationWorking from '../assets/illustration-working.svg'

export const Home = () => {
  return (
    <header 
      name='home' 
      className='bg-white py-10 pt-20 pb-36'
    >
      <div className='md:flex md:flex-row-reverse w-[87%] mx-auto max-w-[1280px]'>
        <div className='mb-5 md:mb-0 flex flex-col justify-center'>
          <img 
            src={illustrationWorking} 
            alt="working image" 
            className='translate-x-[17vw] 2xl:translate-x-0'
          />
        </div>

        <div className='md:flex md:flex-col md:justify-center space-y-5'>

          <h2 className='text-3xl md:text-7xl font-bold text-center md:text-left'>More than just shorten links</h2>

          <p className='text-[#bfbfbf] text-sm md:text-lg text-center md:text-left'>Build your brand's recognition and get detailed insights on how your links are performing</p>

          <div className='flex justify-center md:justify-start'>
            <button className='bg-[#2acfcf] text-white rounded-2xl cursor-pointer py-2 px-7'>
              <Link
                to="shorten" smooth={true} duration={500}
              >
                Get Started
              </Link>
            </button>
          </div>

        </div>
      </div>

    </header>
  )
}
