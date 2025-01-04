import React from 'react';
import { FaPhoneAlt , FaClock } from "react-icons/fa";
import { MdAddLocationAlt,MdEmail  } from "react-icons/md";
import Subscribe from './Subscribe';

import './Footer.css'
import Image from 'next/image';

const IconBox: React.FC<{ Icon: React.ComponentType; title: string }> = ({ Icon, title }) => (
    <div className="max-w-[180px] mx-auto">
        <div className="icon text-center">
            <div className="text-xl text-yellow text-center mx-auto">
                <Icon  />
            </div>
            <p className="body-text mt-3 text-white">{title}</p>
        </div>
    </div>
);

const Footer: React.FC = () => {
    const iconBoxes = [
        { Icon: FaPhoneAlt, title: "0 (550) 680-34-12 Round-the-clock" },
        { Icon: MdAddLocationAlt, title: "1353 Locust St, Kansas City, MO 64106" },
        { Icon: MdEmail, title: "info@limme-theme.com support@limme-theme.com" },
        { Icon: FaClock, title: "Mo-Sa: 07:00 - 22:00 Su: 07:00 - 16:00" }
       
    ];

    return (
        <div className="footer px-8 py-20 bg-dark">
            <div className="container">
                <Subscribe />
                <div className='footer-logo'>
                    <Image src="/logo.svg" alt='logo' className='mx-auto my-16' width={150} height={150} />
                </div>
                <div className="footer-iconboxs ">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-10">
                        {iconBoxes.map((box, index) => (
                            <IconBox key={index} Icon={box.Icon} title={box.title} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
