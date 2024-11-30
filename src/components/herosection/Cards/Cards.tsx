"use client"

import React from "react"

type ImageProps = {
    src : string;
    heading: string;
    content : string
}
const Cards: React.FC<ImageProps> = ({src, heading, content})=>{
        return(
            <div className="container flex gap-5">
                <img src={src} className="w-[110px] h-[110px]"/>
                <div>
                    <h2 className="text-[24px] font-[600]">{heading}</h2>
                    <p>{content}</p>
                </div>
            </div>
        
        )
}
export default Cards