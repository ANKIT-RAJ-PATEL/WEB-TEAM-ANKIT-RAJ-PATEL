import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({isLoggedIn,children}) => {
    //children yaha pe dash board hai
    if(isLoggedIn){
        return children;
    }
    else{
        return <Navigate to = "/login"/>
    }
}

export default PrivateRoute