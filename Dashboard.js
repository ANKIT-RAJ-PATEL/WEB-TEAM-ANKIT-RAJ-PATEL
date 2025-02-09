import React from 'react'
import Navbar from '../components/Navbar'

const Dashboard = ({isLoggedIn,setIsLoggedIn}) => {
  return (
    <div className='bg-slate-900 h-full w-full overflow-hidden flex flex-col justify-center items-center pb-10'>
        <div className='w-full'>
            <Navbar isLoggedIn={!isLoggedIn} setIsLoggedIn={!setIsLoggedIn}/>
        </div>

    </div>
  )
}

export default Dashboard