import React from 'react'
import Template from '../components/Template'
import Navbar from '../components/Navbar'


const Login = ({setIsLoggedIn}) => {
  return (
    <div>
        <Navbar/>
        <Template
        title="Welcome Back"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="This is my portfolio to know more about me"
        setIsLoggedIn={setIsLoggedIn}

        />
    </div>
    
  )
}

export default Login