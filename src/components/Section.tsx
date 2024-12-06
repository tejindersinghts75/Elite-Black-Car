"use client"

import React from "react";
import Button from "./button";

type contentdetails ={
    heading : string;
    content: string;
    src: string
}

const Section: React.FC<contentdetails> =({heading, content,src})=>{



    return(
        <div className="mx-auto max-w-[1200px] py-24 grid grid-cols-1 md:grid-cols-[40%_60%] gap-10 md:gap-2 lg:gap-6 px-5">
            <div className="flex flex-col items-start justify-center gap-4">
                <h2 className="text-[48px] font-extrabold leading-[1.2]">{heading}</h2>
                <p>{content}</p>
                <Button text="Learn More"/>
            </div>
            <div>   
                <img src={src} />
            </div>
        </div>
    )
}
export default Section