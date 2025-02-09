import React from 'react'
import Navbar from '../components/Navbar'
import { TypeAnimation } from 'react-type-animation'
import proffesorImage from '../assets/Proffesor image.png'
import Button from '../components/Button'

const Home = () => {
  return (
    <div className='w-full p-0 m-0'>

      {/* BLUE SECTION */}
      <div className='bg-slate-950 h-full w-full overflow-hidden flex flex-col justify-center items-center '>

        {/* NAVBAR */}
        <div className='w-full'>
            <Navbar/>
        </div>

        <div className='w-full flex items-center justify-center gap-x-5'>
          <div className='w-[40%] flex-col text-white mt-10 text-2xl'>
            <p>Hi!!This is Walter H.G. Lewin</p>
            <p className='gap-x-1 mt-5 whitespace-pre'>I am a  
              <span className='text-cyan-300 text-4xl font-semibold'>
                <TypeAnimation
                  sequence={[` professor of physics at the MIT.`,1000,""]}
                  speed={50}
                 
                  repeat={Infinity}
                />
              </span>
            </p>
            <div className='flex items-center   mt-5'>
              <div className='w-[20%]  hover:scale-95 duration-200 ease-in-out'>
                <Button active={true}>Know More</Button>
              </div>
              
            </div>
            
          </div>

          <div className='mt-20 ml-7 mb-8'>
            <img src={proffesorImage}/>
          </div>
        </div>

        {/* LARGE NAME */}

        <div className='w-full flex items-center justify-start mt-20'>
          <p className='text-7xl h-32 text-slate-400 left-4 opacity-45 font-bold ml-10'>Walter Hendrik Gustav Lewin</p>
        </div>
      </div>
    </div>
  )
}

export default Home