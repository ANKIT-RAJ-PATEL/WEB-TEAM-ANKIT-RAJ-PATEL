import React from 'react'
import Navbar from '../components/Navbar'

const ResearchPapers = () => {
  return (
    <div className='bg-slate-900 h-full w-full overflow-hidden flex flex-col justify-center items-center pb-10'>
        <div className='w-full'>
            <Navbar/>
        </div>
        <p className='flex flex-wrap justify-center items-center text-white text-6xl font-bold mt-4 mb-4'>My Research Papers</p>

        <div className='flex flex-wrap flex-col w-[60%] items-start justify-start mt-4'>
            <p className='text-xl font-bold text-white '>"The Discovery of <span className='text-sm italic text-slate-400'>X-ray Emission from the Crab Nebula"</span></p>
            <p className='text-xl font-bold text-white '>Journal: <span className='text-sm italic text-slate-400'>Astrophysical Journal</span></p>
            <p className='text-xl font-bold text-white '>Year: <span className='text-sm italic text-slate-400'>1968</span></p>
            <div className='text-lg text-slate-600 mt-1 ml-4'>In this paper, Lewin and his team describe the first significant detection of X-ray 
                emissions from the Crab Nebula, one of the most studied supernova remnants in the sky. This discovery was a key contribution to the field 
                of high-energy astrophysics and opened new avenues for studying neutron stars and pulsars.
            </div>

            <p className='text-xl font-bold text-white mt-5'>"X-ray Spectra of Binary Star Systems" <span className='text-sm italic text-slate-400'>of Binary Star Systems"</span></p>
            <p className='text-xl font-bold text-white '>Journal: <span className='text-sm italic text-slate-400'>Nature</span></p>
            <p className='text-xl font-bold text-white '>Year: <span className='text-sm italic text-slate-400'>1970</span></p>
            <div className='text-lg text-slate-600 mt-1 ml-4'>This paper discusses the X-ray emissions from binary star systems, focusing on the interaction 
                between the two stars and the resulting high-energy phenomena. Lewin's work helped lay the foundation for understanding the dynamics of these 
                systems, particularly in systems with compact objects like white dwarfs and neutron stars.
            </div>

            <p className='text-xl font-bold text-white mt-5'>"The X-ray  <span className='text-sm italic text-slate-400'>Background Radiation and Its Origin"</span></p>
            <p className='text-xl font-bold text-white '>Journal: <span className='text-sm italic text-slate-400'>Astronomy and Astrophysics</span></p>
            <p className='text-xl font-bold text-white '>Year: <span className='text-sm italic text-slate-400'>1975</span></p>
            <div className='text-lg text-slate-600 mt-1 ml-4'>This paper presents Lewin’s findings on the X-ray emissions from the famous Cygnus X-1, a black
                hole candidate. The research made a significant contribution to the understanding of stellar-mass black holes and their X-ray emissions. 
                This was one of the earliest pieces of evidence suggesting the existence of black holes in binary systems.
            </div>

            <p className='text-xl font-bold text-white mt-5'>"Observations of  <span className='text-sm italic text-slate-400'>X-ray Emissions from Cygnus X-1"</span></p>
            <p className='text-xl font-bold text-white '>Journal: <span className='text-sm italic text-slate-400'>Astrophysical Journal Letters</span></p>
            <p className='text-xl font-bold text-white '>Year: <span className='text-sm italic text-slate-400'>1972</span></p>
            <div className='text-lg text-slate-600 mt-1 ml-4'>This paper presents Lewin’s findings on the X-ray emissions from the famous Cygnus X-1, a 
                black hole candidate. The research made a significant contribution to the understanding of stellar-mass black holes and their X-ray 
                emissions. This was one of the earliest pieces of evidence suggesting the existence of black holes in binary systems.
            </div>

        </div>


        

        
    </div>
  )
}

export default ResearchPapers