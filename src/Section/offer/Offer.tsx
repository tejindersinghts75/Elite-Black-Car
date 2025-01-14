import React from 'react';

const Offer = () => {
    return (
        <div className='Offer bg-yellow md:py-0 py-10'>
            <div className='flex gap-14 items-center justify-center'>
                <h2>15%</h2>
                <h6 className='max-w-[224px]'>Get a <span className='text-white'>client club card </span>
                    and enjoy a discount
                    on next trips</h6>
                    <img src="/images/Offer.png" className='hidden md:block' alt="" />
            </div>
        </div>
    );
}

export default Offer;
