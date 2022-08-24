import { Link } from 'react-scroll'

export const Bar = () => {
  return (
    <div className='bar bg-[#3b3054] py-32'>
      <div className='flex flex-col items-center gap-5'>
        <h3 className='text-4xl font-bold text-white text-center'>Boost yout links today</h3>
        <button className='bg-[#2acfcf] text-white rounded-2xl cursor-pointer py-2 px-7'>
          <Link
            to="shorten" smooth={true} duration={500}
          >
            Get Started
          </Link>
        </button>
      </div>
    </div>
  )
}
