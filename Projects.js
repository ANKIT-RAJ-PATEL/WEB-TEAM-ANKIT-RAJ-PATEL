import React from 'react'
import Navbar from '../components/Navbar'

const Projects = () => {
  return (
    <div className='bg-slate-900 h-full w-full overflow-hidden flex flex-col justify-center items-center pb-10'>
        <div className='w-full'>
            <Navbar/>
        </div>
        <p className='flex flex-wrap justify-center items-center text-white text-6xl font-bold mt-4 mb-4'>My Projects</p>

        <div className='flex flex-wrap flex-col w-[60%] items-start justify-start mt-4'>
            <p className='text-xl font-bold text-white '>1. MIT OpenCourseWare: Physics Lectures</p>
            <p className='text-xl font-bold text-white '>Description: <span className='text-sm italic text-slate-400'>One of the most influential 
                projects Walter Lewin has been a part of is the MIT</span></p>
            <p className='text-xl font-bold text-white '>OpenCourseWare (OCW) <span className='text-sm font-normal italic text-slate-400'>project, where his
                 physics lectures were made freely available online. His lectures, particularly on topics like Classical Mechanics, Electricity and 
                 Magnetism, and Vibrations and Waves, have been viewed by millions of students and physics enthusiasts worldwide.</span>
            </p>
            <p className='text-xl font-bold text-white '>Impact: <span className='text-sm font-normal italic text-slate-400'>The lectures brought an interactive,
                 demonstration-based approach to learning physics and made his teaching accessible to a global audience. The MIT OCW platform
                  continues to be a valuable resource for anyone interested in learning physics.</span>
            </p>


            <p className='text-xl font-bold text-white mt-10'>2. The Walter Lewin Physics Demonstrations </p>
            <p className='text-xl font-bold text-white '>Description: <span className='text-sm italic font-normal text-slate-400'> Professor Lewin is renowned for
                 his use of live demonstrations to teach complex physics concepts. His demonstrations, such as swinging a pendulum or using a Tesla coil, were a hallmark of his MIT lectures and became an integral part of his educational projects.</span></p>
            <p className='text-xl font-bold text-white '>Impact: <span className='text-sm font-normal italic text-slate-400'>These demonstrations were
                 used not only in the classroom but also captured on video and shared widely, allowing students to experience physics in action. His 
                 project of demonstrations helped shape how hands-on learning can be applied to theoretical subjects like physics.</span>
            </p>

            <p className='text-xl font-bold text-white mt-10'>3. "For the Love of Physics" Book Project</p>
            <p className='text-xl font-bold text-white '>Description: <span className='text-sm italic font-normal text-slate-400'> In addition to his 
                lectures, Professor Lewin wrote the book "For the Love of Physics" (published in 2011), which is a compilation of stories from his career,
                 along with explanations of various physics principles.</span>
            </p>
            <p className='text-xl font-bold text-white '>Impact: <span className='text-sm font-normal italic text-slate-400'>This book project gave
                 readers a deeper insight into the wonder of physics, beyond equations, and demonstrated Lewin’s unique style of teaching. It emphasized 
                 the beauty and excitement of physics and inspired many to view the subject from a new perspective.</span>
            </p>

            <p className='text-xl font-bold text-white mt-10'>4. X-ray Astronomy Research on Cosmic Radiation</p>
            <p className='text-xl font-bold text-white '>Description: <span className='text-sm italic font-normal text-slate-400'> Lewin was involved 
                in several research projects on X-ray astronomy, particularly in studying cosmic radiation and the behavior of celestial bodies in 
                high-energy environments. One of his major research contributions was in the study of X-ray emissions from celestial objects 
                like neutron stars and black holes, through the use of space telescopes and other instruments.</span>
            </p>
            <p className='text-xl font-bold text-white '>Impact: <span className='text-sm font-normal italic text-slate-400'>His research led to a 
                deeper understanding of high-energy astrophysical phenomena. His work on X-ray background radiation contributed to the understanding of 
                the universe’s large-scale structure, and his observations of binary star systems with X-ray emissions helped lay the groundwork for later 
                discoveries in astrophysics.</span>
            </p>
        </div>
    </div>
  )
}

export default Projects