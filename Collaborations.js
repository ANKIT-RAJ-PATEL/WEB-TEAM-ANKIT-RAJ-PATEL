import React from 'react'
import Navbar from '../components/Navbar'

const Collaborations = () => {
  return (
    <div className='bg-slate-900 h-full w-full overflow-hidden flex flex-col justify-center items-center pb-10'>
        <div className='w-full'>
            <Navbar/>
        </div>

        <p className='flex flex-wrap justify-center items-center text-white text-6xl font-bold mt-4 mb-4'>My Collaborations</p>

        <div className='flex flex-wrap flex-col w-[60%] items-start justify-start mt-4'>
            <p className='text-xl font-bold text-white '>1: Collaborations with MIT Faculty and Research Groups :</p>
            <p className='text-xl font-bold text-white mt-2 ml-7'>MIT Astrophysics Department: <span className='text-sm italic text-slate-400'> Lewin
                 was an integral part of the MIT Department of Physics, where he collaborated with many other prominent physicists in research related to 
                 astrophysics and high-energy physics. His work primarily focused on X-ray astronomy, black holes, and supernovae.</span>
            </p>
            <p className='text-xl font-bold text-white mt-2 ml-7'>Collaboration with Dr. Chandra Wickramasinghe: <span className='text-sm italic
             text-slate-400'> One of his significant collaborations was with Dr. Chandra Wickramasinghe, a well-known astrophysicist, in the study of 
             cosmic X-ray sources and the behavior of matter in strong gravitational fields.</span>
            </p>
            <p className='text-xl font-bold text-white mt-2 ml-7'>Research on Stellar Evolution: <span className='text-sm italic text-slate-400'>He 
                also worked with various MIT colleagues on projects related to the evolution of stars and the study of the X-ray emissions from neutron 
                stars and black holes.</span>
            </p>

            <p className='text-xl font-bold text-white mt-14'>2: Research on Cosmic X-ray Sources:</p>
            <p className='text-xl font-bold text-white mt-2 ml-7'>Collaboration with the Harvard-Smithsonian Center for Astrophysics: <span className='text-sm italic text-slate-400'>  Lewin worked closely with researchers from Harvard-Smithsonian Center for Astrophysics, especially in the area of X-ray astronomy. His work involved observing and analyzing X-ray emissions from various celestial bodies like black holes, neutron stars, and supernovae.</span>
            </p>
            <p className='text-xl font-bold text-white mt-2 ml-7'> Space Telescopes: <span className='text-sm italic text-slate-400'> His research 
                involved the use of various space telescopes, including the Chandra X-ray Observatory and ROSAT (the Roentgen Satellite), where he worked 
                alongside astronomers and astrophysicists to gather data on the X-ray emissions of different cosmic objects.</span>
            </p>
            <p className='text-xl font-bold text-white mt-2 ml-7'>Research on Stellar Evolution: <span className='text-sm italic text-slate-400'>He 
                also worked with various MIT colleagues on projects related to the evolution of stars and the study of the X-ray emissions from neutron 
                stars and black holes.</span>
            </p>
        </div>

    </div>
  )
}

export default Collaborations