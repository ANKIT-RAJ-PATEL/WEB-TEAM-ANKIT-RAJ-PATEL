import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div className='bg-slate-900 h-full w-full overflow-hidden flex flex-col justify-center items-center pb-10'>
      <div className='w-full'>
        <Navbar/>
      </div>
      <p className='flex justify-center items-center text-white text-6xl font-bold mt-4 mb-4'>ABOUT ME</p>
      <div className='flex flex-col w-[60%] items-start justify-start mt-4'>
        <p className='text-2xl font-bold text-white '>Early life and education</p>
        <p className='text-lg text-slate-600 mt-1'>Lewin was born to Walter Simon Lewin and Pieternella Johanna van der Tang in 1936 in The Hague, Netherlands. He was a child when Nazi 
          Germany occupied The Netherlands during World War II.His paternal grandparents Gustav and Emma Lewin, who were Jewish, died in Auschwitz in 1942.
          To protect the family, Lewin’s father — who was Jewish, unlike his mother — decided one day to simply leave without telling anyone. His mother was 
          left to raise the children and run a small school she and her husband had started together. After the war ended, his father resurfaced; Lewin 
          describes having a “more or less normal childhood.” His parents continued running the school, which he says strongly influenced his love of teaching.
        </p>

        <p className='text-2xl font-bold text-white mt-8'>Academic career</p>
        <p className='text-lg text-slate-600 mt-1'>Walter Lewin taught high school physics while studying for his PhD, then he went to Massachusetts Institute of Technology in January 1966 as a 
          post-doctoral associate, and was appointed an assistant professor. He was promoted to associate professor of physics in 1968 and to full professor 
          in 1974.
          <br/><br/>At MIT, Lewin joined the X-ray astronomy group and conducted all-sky balloon surveys with George W. Clark. Through the late seventies, there were
          about twenty successful balloon flights. These balloon surveys led to the discovery of five new X-ray sources, whose spectra were very different 
          from the X-ray sources discovered during rocket observations. The X-ray flux of these sources was variable. Among them was GX 1+4 whose X-ray flux
          appeared to be periodic with a period of about 2.4 minutes. This was the first discovery of a slowly rotating neutron star.
          </p>

          <p className='text-2xl font-bold text-white mt-8'>Lectures</p>
          <p className='text-lg text-slate-600 mt-1'>For about 15 years (starting in 1982) Lewin presented a one-hour program weekly on MIT Cable TV. The shows were aired 24 hours per day 
            helping freshmen with their weekly homework assignments. Videos of Lewin's lectures on Newtonian mechanics (1999), electricity and magnetism 
            (2002) and the physics of vibrations and waves (2004), among others, could be viewed on the MIT OpenCourseWare web site until MIT removed them
             after finding that Lewin had sexually harassed a student in the online course.</p> 

          <p className='text-2xl font-bold text-white mt-8'>Awards</p>
          <ul className='text-lg text-slate-600 mt-1'>
            <li>1978 – NASA Award for Exceptional Scientific Achievement</li>  
            <li>1984 – Alexander von Humboldt Award</li> 
            <li>1984 – Guggenheim Fellowship</li> 
            <li>1984 – MIT Science Council Prize for Excellence in Undergraduate Teaching</li> 
            <li>1988 – MIT Department of Physics W. Buechner Teaching Prize</li> 
            <li>1991 – Alexander von Humboldt Award (again)</li> 
            <li>1997 – <span className='text-cyan-500'>NASA Group Achievement Award</span> for the Discovery of the<span className='text-cyan-400'> Bursting Pulsar</span> </li> 
            <li>2003 – MIT Everett Moore Baker Memorial Award for Excellence in Undergraduate Teaching</li> 
          </ul>     
      </div>
    </div>
    
  )
}

export default About