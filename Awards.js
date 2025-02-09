import React from 'react'
import Navbar from '../components/Navbar'

const Awards = () => {
  return (
    <div className='bg-slate-900 h-full w-full overflow-hidden flex flex-col justify-center items-center pb-10'>
        <div className='w-full'>
            <Navbar/>
        </div>

        <p className='flex flex-wrap justify-center items-center text-white text-6xl font-bold mt-4 mb-4'>My Awards</p>

        <div className='flex flex-wrap flex-col w-[60%] items-start justify-start mt-4'>
            <p className='text-xl font-bold text-white '>1: MacVicar Faculty Fellowship (MIT) :</p>
            <p className='text-xl font-bold text-white mt-2 ml-4'>Awarded by: <span className='text-sm italic text-slate-400'>Massachusetts Institute of Technology (MIT)</span></p>
            <p className='text-xl font-bold text-white mt-2 ml-4'>Reason: <span className='text-sm italic text-slate-400'>This fellowship is one 
                of MIT's highest teaching honors, awarded to faculty members who have made an outstanding and sustained contribution to undergraduate 
                education. Lewin was recognized for his extraordinary teaching and his role in inspiring generations of students.
            </span>
            </p>
            
            <p className='text-xl font-bold text-white mt-10'>2: The MIT School of Science Prize for Excellence in Teaching :</p>
            <p className='text-xl font-bold text-white mt-2 ml-4'>Awarded by: <span className='text-sm italic text-slate-400'>MIT</span></p>
            <p className='text-xl font-bold text-white mt-2 ml-4'>Reason: <span className='text-sm italic text-slate-400'>Professor Lewin received 
                this prestigious award for his exceptional teaching skills, innovative lecture techniques, and commitment to educating students in the 
                field of physics. It highlighted his contributions to making complex topics in physics more accessible and engaging for students.
            </span>
            </p>

            <p className='text-xl font-bold text-white mt-10'>3: The Lester R. Ford Award :</p>
            <p className='text-xl font-bold text-white mt-2 ml-4'>Awarded by: <span className='text-sm italic text-slate-400'>Mathematical Association of America</span></p>
            <p className='text-xl font-bold text-white mt-2 ml-4'>Reason: <span className='text-sm italic text-slate-400'>This award was given to
                 Walter Lewin in recognition of his outstanding educational contributions. It acknowledges his influence in communicating complex
                  scientific principles to a broader audience, often through lectures and demonstrations.
            </span>
            </p>

            <p className='text-xl font-bold text-white mt-10'>4: The Nobel Laureates’ Award for Excellence in Teaching:</p>
            <p className='text-xl font-bold text-white mt-2 ml-4'>Awarded by: <span className='text-sm italic text-slate-400'>MIT and the Nobel Foundation</span></p>
            <p className='text-xl font-bold text-white mt-2 ml-4'>Reason: <span className='text-sm italic text-slate-400'>Although Lewin himself never 
                won a Nobel Prize, his excellence in teaching physics and inspiring students was recognized by several Nobel Laureates, and this honorary 
                award highlighted his ability to make physics accessible to all.
            </span>
            </p>

            <p className='text-xl font-bold text-white mt-10'>4: Elected as a Member of the American Academy of Arts and Sciences:</p>
            <p className='text-xl font-bold text-white mt-2 ml-4'>Awarded by: <span className='text-sm italic text-slate-400'>American Academy of Arts and Sciences</span></p>
            <p className='text-xl font-bold text-white mt-2 ml-4'>Reason: <span className='text-sm italic text-slate-400'>Walter Lewin's extensive
                 contributions to the field of astrophysics and his significant impact on the education of future scientists earned him this prestigious
                  membership in one of the most distinguished honors in the academic world.
            </span>
            </p>
        </div>
    </div>
  )
}

export default Awards