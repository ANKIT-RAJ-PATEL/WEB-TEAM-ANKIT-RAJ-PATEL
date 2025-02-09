import React from 'react'
import Navbar from '../components/Navbar'

const TeachingExperiences = () => {
  return (
    <div className='bg-slate-900 h-full w-full overflow-hidden flex flex-col justify-center items-center pb-10'>
        <div className='w-full'>
            <Navbar/>
        </div>

        <p className='flex flex-wrap justify-center items-center text-white text-6xl font-bold mt-4 mb-4'>My Teaching Experience</p>

        <div className='flex flex-wrap flex-col w-[60%] items-start justify-start mt-4'>
        <p className='text-xl font-bold text-white mt-10'>MIT Faculty (Massachusetts Institute of Technology)</p>
        <p className='text-xl font-bold text-white ml-6'>Position: <span className='text-lg font-normal italic text-slate-400'> Professor of Physics (retired)</span></p>
        <p className='text-xl font-bold text-white ml-6'>Years: <span className='text-lg font-normal italic text-slate-400'> 1966 to 2009</span></p>
        <p className='text-xl font-bold text-white ml-6 w-[60%]'>Courses Taught: <span className='text-lg font-normal italic text-slate-400'>Lewin taught a 
            variety of courses in physics during his time at MIT. Some of the most notable include:</span>
            <ul>
                <li className='text-sm font-normal italic text-white ml-4'>Classical Mechanics (8.01)</li>
                <li className='text-sm font-normal italic text-white ml-4'>Electricity and Magnetism (8.02)</li>
                <li className='text-sm font-normal italic text-white ml-4'>Vibrations and Waves (8.03)</li>
                <li className='text-sm font-normal italic text-white ml-4'>Oscillations and Waves (8.06)</li>
            </ul>
        </p>
        <p className='text-xl font-bold text-white ml-6'>Years: <span className='text-lg font-normal italic text-slate-400'> Lewin was known for 
            his highly engaging and dynamic teaching style. He used dramatic live demonstrations in the classroom to visually illustrate complex concepts 
            in physics. These demonstrations often involved physical experiments like pendulums, swinging objects, and high-voltage devices 
            (e.g., Tesla coils) to make abstract principles come to life.</span>
        </p>
        <p className='text-xl font-bold text-white ml-6'>Student Interaction: <span className='text-lg font-normal italic text-slate-400'>  Lewin's 
            teaching methods emphasized student engagement and making physics fun and exciting. He would often use humor, enthusiasm, and visual aids to 
            make complex topics more accessible and memorable for students.</span>
        </p>


        <p className='text-xl font-bold text-white mt-10'>Innovative Lecture Style</p>
        <p className='text-xl font-bold text-white ml-6 mt-4'>Live Demonstrations: <span className='text-lg font-normal italic text-slate-400'> Lewin was
             famous for his hands-on demonstrations. He would often perform dramatic experiments in class to demonstrate concepts like momentum, 
             electricity, magnetism, and mechanical waves. These live demonstrations were designed to make physics visual and interactive, showing 
             students the real-world applications of theoretical ideas.</span>
        </p>
        <p className='text-xl font-bold text-white ml-6 mt-2'>Storytelling Approach: <span className='text-lg font-normal italic text-slate-400'> He often
             integrated storytelling into his lectures, bringing the history of physics and its key figures into his teachings, which helped students.
              connect emotionally with the subject.
        </span>
        </p>
        <p className='text-xl font-bold text-white ml-6 mt-2'>Passion for physics: <span className='text-lg font-normal italic text-slate-400'> Lewin's 
            passion for physics was infectious, and his excitement about the subject motivated many students to pursue careers in science and engineering. 
            His ability to simplify even the most difficult topics while maintaining their depth helped students build confidence in their understanding 
            of physics.
        </span>
        </p>
        </div>
    </div>
  )
}

export default TeachingExperiences