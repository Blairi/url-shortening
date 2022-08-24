import iconBrand from '../assets/icon-brand-recognition.svg'
import iconDetailed from '../assets/icon-detailed-records.svg'
import iconFully from '../assets/icon-fully-customizable.svg'

export const Features = () => {
  return (
    <section name="features" className='w-[87%] mx-auto max-w-[1280px] mb-36'>

      <div className='space-y-14'>

        <div className='space-y-5 py-40'>
          <h2 className='font-bold text-2xl md:text-4xl text-center'>Advanced Statics</h2>
          <p className='text-[#676767] text-center md:w-[35%] mx-auto'>
            Track how your links are performing across the web with our advanced statics dashboard.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-14 md:gap-3 lg:gap-14'>

          <div className='bg-white flex flex-col items-center md:items-start rounded px-5 pb-10 -translate-y-7 card'>

            <div className='bg-[#3b3054] rounded-full w-20 h-20 flex p-5 md:-translate-y-8'>
              <img src={iconBrand} alt="icon" />
            </div>

            <div>
              <h5 className='font-bold text-lg text-center md:text-start'>Brand Recognition</h5>
              <p className='text-[#676767] text-center md:text-start'>
                Boost yout brand recognition with each link. Generic links don't mean a thing. Branded links help instil confidence in your content
              </p>
            </div>

          </div> {/* Card */}

          <div className='bg-white flex flex-col items-center md:items-start rounded px-5 pb-10'>

            <div className='bg-[#3b3054] rounded-full w-20 h-20 flex p-5 -translate-y-8'>
              <img src={iconDetailed} alt="icon" />
            </div>

            <div>
              <h5 className='font-bold text-lg text-center md:text-start'>Detailed Records</h5>
              <p className='text-[#676767] text-center md:text-start'>
                Gaing insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
              </p>
            </div>

          </div> {/* Card */}

          <div className='bg-white flex flex-col items-center md:items-start rounded px-5 pb-10 md:translate-y-6 card'>

            <div className='bg-[#3b3054] rounded-full w-20 h-20 flex p-5 -translate-y-8'>
              <img src={iconFully} alt="icon" />
            </div>

            <div>
              <h5 className='font-bold text-lg text-center md:text-start'>Fully Customizable</h5>
              <p className='text-[#676767] text-center md:text-start'>
                Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
              </p>
            </div>

          </div> {/* Card */}

        </div>

      </div>
    </section>
  )
}
