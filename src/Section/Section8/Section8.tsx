import Button from '@/components/button';
import React from 'react';

interface Section8Props {
    backgroundImage: string;
    heading: string;
    description: string;
}

const Section8: React.FC<Section8Props> = ({ backgroundImage, heading, description }) => {
    return (
        <div
            className="md:h-[100vh]  h-[60vh] flex px-8 items-center justify-center flex-col bg-fixed bg-cover"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="max-w-[800px] text-center mx-auto text-white">
                <h2>{heading}</h2>
                <p className="my-8">{description}</p>
                <Button text="Read more" />
            </div>
        </div>
    );
};

export default Section8;
