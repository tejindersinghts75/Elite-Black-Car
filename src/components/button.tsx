"use client"

import React from "react"


type buttonPRop = {
    text : string
}

const Button : React.FC<buttonPRop> =({text})=>{



    return( 
        <>
        <button className="button bg-red ">{text}</button>
        </>
    )
}
export default Button