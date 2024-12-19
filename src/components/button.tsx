"use client"

import React from "react"


type buttonPRop = {
    text : string
}

const Button : React.FC<buttonPRop> =({text})=>{



    return( 
        <>
        <button className="bg-[#800401] py-2 px-8 rounded-[3px] text-white font-normal text-[14px]">{text}</button>
        </>
    )
}
export default Button