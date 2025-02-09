import React from 'react'
import Navbar from '../components/Navbar'

const Achievements = () => {
  return (
    <div className='bg-slate-900 h-full w-full overflow-hidden flex flex-col justify-center items-center pb-10'>
        <div className='w-full'>
            <Navbar/>
        </div>
        <p className='flex flex-wrap justify-center items-center text-white text-6xl font-bold mt-4 mb-4'>My Achievements</p>
        <div className='flex flex-wrap flex-col w-[60%] items-start justify-start mt-4'>
            <p className='text-xl font-bold text-white '>1: Distinguished Career at MIT :</p>
            <p className='text-lg text-slate-600 mt-1 ml-4'>Professor Lewin was a faculty member at the Massachusetts Institute of Technology (MIT) for 
            over 40 years, where he served as a professor  in the Department of Physics and was known for his groundbreaking contributions to both 
            research and teaching.</p>

            <p className='text-xl font-bold text-white mt-5'>2: Influential physics educator :</p>
            <p className='text-lg text-slate-600 mt-1 ml-4'>Lewin is renowned for his exceptional and engaging teaching style, which has inspired 
                countless students around the world. His lectures, often filled with dramatic demonstrations, have been widely appreciated for making 
                complex concepts in physics accessible and exciting.
            </p>

            <p className='text-xl font-bold text-white mt-5'>3: Iconic Online Lectures :</p>
            <p className='text-lg text-slate-600 mt-1 ml-4'>His MIT OpenCourseWare physics lectures, available online for free, have been viewed by
                 millions globally. These lectures continue to be a key resource for students and physics enthusiasts, earning praise for their clarity 
                 and innovative approach.
            </p>

            <p className='text-xl font-bold text-white mt-5'>4: Research Contributions in Astrophysics:</p>
            <p  className='text-lg text-slate-600 mt-1 ml-4'>Lewin made significant contributions to the field of X-ray astronomy and astrophysics. 
                His research on cosmic radiation and high-energy astrophysics has been recognized as instrumental in advancing our understanding of the
                 universe.
            </p>

            <p className='text-xl font-bold text-white mt-5'>5: Awarded the MIT Excellence in Teaching Award:</p>
            <p  className='text-lg text-slate-600 mt-1 ml-4'>Throughout his teaching career, he was repeatedly honored with MIT’s prestigious teaching 
                awards, including the MIT Excellence in Teaching Award, in recognition of his unparalleled contribution to education.
            </p>
        </div>

    </div>
  )
}

export default Achievements