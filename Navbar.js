import React from 'react'
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {IoMenu} from 'react-icons/io5';
import logo1 from "../assets/logo1.jpeg"
 

const Navbar = ({isLoggedIn,setIsLoggedIn}) => {

    const [isVisible, setIsVisible] = useState(false);

    const clickHandler = () => {
        setIsVisible(prevState => !prevState); // Toggle the visibility state
    };
  return (
    <div className='h-[72px] w-full py-0'>

        {/* NAVBAR */}
        <div className='text-white flex flex-row flex-wrap  justify-evenly'>

            {/* LOGO */}
            <img src={logo1} className='mt-2 cursor-pointer h-14'/>

            {/* PAGES */}
            <div className='flex flex-row gap-5 items-center text-lg'>
                <button className='cursor-pointer focus:text-yellow-400'><Link to={"/"}>Home</Link></button>
                <button className='cursor-pointer focus:text-yellow-400' ><Link to={"/projects"}>Projects</Link></button>
                <button className='cursor-pointer focus:text-yellow-400'>< Link to={"/research"}>Research Papers</Link></button>
                <button className='cursor-pointer focus:text-yellow-400'>< Link to={"/about"}>About</Link></button>
                <button className='cursor-pointer focus:text-yellow-400'>< Link to={"/achievements"}>Achievements</Link></button>
                <button className='cursor-pointer focus:text-yellow-400'><Link to={"/blogs"}>Blog</Link></button>
            </div>

            <div className='mt-2'>
                { !isLoggedIn &&
                    <Link to="/login">
                        <button className='bg-slate-950 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                            Login
                        </button>
                    </Link>
                }
            </div>

            <div>
                <div className='flex flex-row gap-5 text-neutral-300 mt-3 relative' onClick={clickHandler}>
                    <IoMenu className='h-10 size-9 cursor-pointer' />
                </div>
                {isVisible && (
                <ul className='absolute text-black opacity-60 bg-white -ml-14 text-2xl gap-y-8'>
                    <li className='hover:bg-neutral-300 h-full ml-6 mr-6 pl-2 rounded-md flex items-center mt-4 opacity-65' onClick={clickHandler}>
                        <NavLink to={"/conferences"}>Conferences</NavLink></li>
                    <li className='hover:bg-neutral-300 h-full ml-6 mr-6 pl-2 rounded-md flex items-center opacity-65' onClick={clickHandler}>
                        <Link to={"/experiences"}>Teaching Experience</Link></li>
                    <li className='hover:bg-neutral-300 h-full ml-6 mr-6 pl-2 rounded-md flex items-center opacity-65' onClick={clickHandler}>
                        <Link to={"/awards"}>Awards</Link></li>
                    <li className='hover:bg-neutral-300 h-full ml-6 mr-6 pl-2 rounded-md flex items-center mb-4 opacity-65' onClick={clickHandler}>
                        <Link to={"/collaborations"}>Collaborations</Link></li>
                </ul>
                )}
            </div>
            

            
        </div>

        {/* LINE */}
        <div className='w-full bg-slate-700 h-[0.5px] mt-1'></div>

        
    </div>
  )
}

export default Navbar