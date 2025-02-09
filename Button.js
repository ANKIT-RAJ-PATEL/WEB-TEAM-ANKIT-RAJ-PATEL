import React from 'react'

const Button = ({active,children}) => {
    return(
        <div className={` h-[50px] rounded-md flex items-center justify-center font-bold text-sm 
                         ${active ? "bg-yellow-300": "bg-slate-800 shadow-slate-500 shadow-md"}
                         ${active ? "text-black" : "text-white"}`}>
            {children}
        </div>
    )
}

export default Button