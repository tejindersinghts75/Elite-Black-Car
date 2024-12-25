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
                <img src={src} style={{ width: "110px", height: "110px", borderRadius: "50%" }} />
                <div>
                    <h2 className="text-[24px] text-white font-[600]">{heading}</h2>
                    <p className="text-white">{content}</p>
                </div>
            </div>

        )
}
export default Cards