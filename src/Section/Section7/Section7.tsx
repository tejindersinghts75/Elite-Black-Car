import React from 'react';
import { FaWhatsapp } from "react-icons/fa6";


const Section7 = () => {
    return (
        <div className='section7 md:pb-40 px-8 md:pt-60 py-20'>
            <div className='container'>
                <div className='grid md:grid-cols-2'>
                    <div className='max-w-[600px]'>
                        <h4 className='mb-3'>Use our <span className='text-yellow'>quick booking form </span> to get a limousine</h4>
                        <p>Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis, quam nulla vehicula felis, eu cursus sem tellus.</p>
                        <div className=' md:my-16 my-8 flex gap-4  book-order'>
                            <FaWhatsapp className='text-yellow text-[60px]' />
                            <div className=''>
                                <p className='font-[14px] text-yellow'>Call for book an order: </p>
                                <h6>8-800-10-500 </h6>
                            </div>
                        </div>
                        <p className='text-[18px]'>Download our Appllication to track your order </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section7;
