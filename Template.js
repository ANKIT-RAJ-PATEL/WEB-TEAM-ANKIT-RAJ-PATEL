import React from 'react'
import LoginForm from './LoginForm'
import {FcGoogle} from 'react-icons/fc'

const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
  return (
    <div className='flex justify-center w-11/12 max-w-[1160px] h-screen py-12 mx-auto gap-y-0 gap-x-12 '>
        <div className='w-11/12 max-w-[450px]'>
            <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375rem]'>
                {title}
            </h1>
            <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                <span className='text-white'>{desc1}</span>
                <br/>
                <span className='text-cyan-200 italic'>{desc2}</span>
            </p>

            <LoginForm setIsLoggedIn={setIsLoggedIn}/>

            <div className='flex w-full items-center my-4 gap-x-2 '>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                <p className='text-slate-700 font-medium leading-[1.375rem]'>OR</p>
                <div className='w-full h-[1px] bg-slate-700'></div>
            </div>

            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-white
                border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle/>
                <p>
                    Sign in with Google
                </p>
            </button>

        </div>

    </div>
  )
}

export default Template