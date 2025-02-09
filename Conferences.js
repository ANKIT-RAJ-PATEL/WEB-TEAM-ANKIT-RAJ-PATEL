import React from 'react'
import Navbar from '../components/Navbar'

const Conferences = () => {
  return (
    <div className='bg-slate-900 h-full w-full overflow-hidden flex flex-col justify-center items-center pb-10'>
        <div className='w-full'>
            <Navbar/>
        </div>

        <p className='flex flex-wrap justify-center items-center text-white text-6xl font-bold mt-4 mb-4'>My Conferences</p>

        <div className='flex flex-wrap flex-col w-[60%] items-start justify-start mt-4'>
            <p className='text-xl font-bold text-white mt-10'>American Physical Society (APS) Meetings</p>
            <p className='text-xl font-bold text-white mt-2'>Description: <span className='text-sm italic font-normal text-slate-400'> As a leading 
                physicist, Professor Lewin frequently attended and presented at APS meetings, one of the largest gatherings of physicists in the United 
                States. At these meetings, he discussed his research in astrophysics, specifically in X-ray astronomy and cosmic radiation.</span>
            </p>
            <p className='text-xl font-bold text-white '>Impact: <span className='text-sm font-normal italic text-slate-400'>The International 
                Astronomical Union (IAU) is a significant body that organizes symposia on various topics in astronomy and astrophysics. Lewin participated in many IAU symposia, where he contributed to discussions on X-ray sources, black holes, and neutron stars.
            </span>
            </p>

            <p className='text-xl font-bold text-white mt-10'>International Astronomical Union (IAU) Symposia</p>
            <p className='text-xl font-bold text-white mt-2'>Description: <span className='text-sm italic font-normal text-slate-400'> The International 
                Astronomical Union (IAU) is a significant body that organizes symposia on various topics in astronomy and astrophysics. Lewin participated
                 in many IAU symposia, where he contributed to discussions on X-ray sources, black holes, and neutron stars.</span>
            </p>
            <p className='text-xl font-bold text-white '>Impact: <span className='text-sm font-normal italic text-slate-400'>His presentations helped
                 further the understanding of high-energy astrophysics, and his research on cosmic X-rays influenced many discussions in the field.</span>
            </p>

            <p className='text-xl font-bold text-white mt-10'>X-ray Astronomy Conferences</p>
            <p className='text-xl font-bold text-white mt-2'>Description: <span className='text-sm italic font-normal text-slate-400'> Professor Lewin was a frequent participant
                 in X-ray astronomy conferences, such as the High-Energy Astrophysics Symposia organized by space agencies like NASA and the European 
                 Space Agency (ESA). These conferences focused on the study of X-ray emissions from various celestial bodies, including black
                  holes, neutron stars, and supernovae.</span>
            </p>
            <p className='text-xl font-bold text-white '>Impact: <span className='text-sm font-normal italic text-slate-400'>These conferences
                 allowed Lewin to present his research on X-ray emission from cosmic sources, share his findings on binary star systems, and contribute
                  to shaping the future of high-energy astrophysical studies.</span>
            </p>

            <p className='text-xl font-bold text-white mt-10'>MIT Physics Public Lectures</p>
            <p className='text-xl font-bold text-white mt-2'>Description: <span className='text-sm italic font-normal text-slate-400'> Throughout his 
                career, Lewin was involved in organizing and speaking at MIT's public lectures on physics, where he demonstrated fundamental concepts 
                in a captivating and engaging manner.</span>
            </p>
            <p className='text-xl font-bold text-white '>Impact: <span className='text-sm font-normal italic text-slate-400'>These lectures, open to
                 the public, were a blend of scientific discussion and public outreach. Lewin’s ability to explain complex ideas with clarity and 
                 enthusiasm made these events a highlight of MIT’s efforts to make physics accessible to a broader audience.</span>
            </p>
        </div>

        
    </div>
  )
}

export default Conferences