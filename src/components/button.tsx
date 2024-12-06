"use client"

import React from "react"


type buttonPRop = {
    text : string
}

const Button : React.FC<buttonPRop> =({text})=>{



    return( 
        <>
        <button className="bg-[#800401] py-3 px-8 rounded-[10px] text-white">{text}</button>
        </>
    )
}
export default Button