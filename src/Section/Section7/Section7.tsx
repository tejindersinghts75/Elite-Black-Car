"use client";
import React from 'react';
import { AiOutlineSafety } from "react-icons/ai";
import { IoCarOutline } from "react-icons/io5";
import { IoLeafOutline } from "react-icons/io5";


// IconBox Component
const IconBox: React.FC<{ Icon: React.ComponentType; title: string; text: string }> = ({ Icon, title, text }) => (
    <div className="">
        <div className="icon text-center">
            <div className="text-3xl flex justify-center text-yellow text-center mx-auto">
                <Icon />
            </div>
            <h6 className="mt-4 font-bold">{title}</h6>
            <p className="body-text mt-2 ">{text}</p>
        </div>
    </div>
);

const Section7: React.FC = () => {
    const iconBoxes2 = [
        { Icon: AiOutlineSafety, title: "Safety first", text: "Travel confidently knowing your safety is our #1 priority. Rigorous health and cleaning standards round out a best-in- class service." },
        { Icon: IoCarOutline, title: "Private travel solutions", text: "Travel confidently knowing your safety is our #1 priority. Rigorous health and cleaning standards round out a best-in- class service." },
        { Icon: IoLeafOutline , title: "Sustainable travel", text: "Travel confidently knowing your safety is our #1 priority. Rigorous health and cleaning standards round out a best-in- class service." },
        ];

    return (
        <div className='section7 md:pb-40 px-8 md:pt-60 py-20'>
            <div className='container'>
                <div className='grid md:grid-cols-3 gap-20 max-w-[1140px] mx-auto'>
                    {iconBoxes2.map((box, index) => (
                        <IconBox key={index} Icon={box.Icon} title={box.title} text={box.text} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section7;
