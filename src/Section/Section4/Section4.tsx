"use client"


import Ridecard from "@/components/ridecard/Ridecard"

import React from "react"

const Section4 =()=>{

    const cards :{src:string; mainhead: string; paragraph: string; price: string; duration: string; button: string, features:{src: string, text:string}[] }[]=[
      {  src:"/ridecardfirstimage.jpg",
        mainhead:"Cadillac Limousine",
        paragraph:"Insured, leather interior, air conditioning, rain sensor, panoramic roof",
        price:"260$",
        duration:"per hour",
        button:"Get Limo",
        features:[
            {src:"/images/seats.svg",text: "4 seats"},
            {src:"/images/Diesel.svg",text: "Diesel"},
            {src:"/images/Mechanic.svg",text: "Mechanic"}
        ]
        },
        {  src:"/images/Mercedes.png",
            mainhead:"Mercedes Benz E-Class",
            paragraph:"Insured, leather interior, air conditioning, rain sensor, panoramic roof",
            price:"190$",
            duration:"per hour",
            button:"Get Limo",
            features:[
                {src:"/images/seats.svg",text: "4 seats"},
                {src:"/images/Diesel.svg",text: "Auto"},
                {src:"/images/Mechanic.svg",text: "Petrol"}
            ]
            }
            ,
        {  src:"/images/Range-Rover.png",
            mainhead:"Range Rover Sport 5.5",
            paragraph:"Insured, leather interior, air conditioning, rain sensor, panoramic roof",
            price:"210$",
            duration:"per hour",
            button:"Get Limo",
            features:[
                {src:"/images/seats.svg",text: "5 seats"},
                {src:"/images/Diesel.svg",text: "Auto"},
                {src:"/images/Mechanic.svg",text: "Petrol"}
            ]
            }
        ]


    return(
        <div className="py-24 fichers">
            <div className="flex container mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-2 lg:gap-6 px-5"  > 
                {cards.map((card, index)=>(
                      <Ridecard key={index} src={card.src} mainhead={card.mainhead} paragraph={card.paragraph} price={card.price} duration={card.duration} button={card.button} features={card.features}/>
                ))}
              
            </div>
            </div>
        )
} 

export default Section4