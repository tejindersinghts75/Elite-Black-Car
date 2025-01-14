"use client";
import React from "react";
import Button from "../button";

type CardProp = {
    src: string;
    mainhead: string;
    paragraph: string;
    price: string;
    duration: string;
    button: string;
    features: FeatureItem[];
};

type FeatureItem = {
    src: string;
    text: string;
};

const FeatureComponent: React.FC<{ src: string; text: string }> = ({ src, text }) => (
    <div className="flex items-center flex-col px-5 py-3 border border-gray-200">
        <img  className="w-[20px] mb-3" src={src} alt="Feature icon" />
        <p className="text-[12px]">{text}</p>
    </div>
);

const Ridecard: React.FC<CardProp> = ({ src, mainhead, paragraph, price, duration, button, features }) => {
    return (
        <div className="p-10 border border-dashed border-black/10 flex flex-col gap-4">
            <div>
                <img src={src} alt="Card image" />
            </div>
            <div>
                <h6>{mainhead}</h6>
                <p className="text-[14px]">{paragraph}</p>
            </div>
            <div className="grid grid-cols-3  gap-4">
                {features.map((feature, index) => (
                    <FeatureComponent key={index} src={feature.src} text={feature.text} />
                ))}
            </div>
            <div className="flex justify-between">
                <h6 className="flex gap-1  items-center">
                    <span className="text-yellow"> {price}</span>
                    /
                    <span className="text-[12px] ">{duration}</span>
                </h6>
                <img src="/images/stars.svg" alt="text" />
            </div>
           
            <Button text={button} />
        </div>
    );
};

export default Ridecard;
