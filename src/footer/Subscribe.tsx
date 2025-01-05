"use client"
import React from 'react';
import { useState } from "react";


const Subscribe = () => {
    const [email, setemail] = useState("");

    return (
        <div className='subscribe '>
            <div className='max-w-[945px] mx-auto'>
                <div className='grid text-white md:grid-cols-2'>
                    <div className=''>
                        <h6 >Want to know about our offers first?</h6>
                        <h4>Subscribe our newsletter</h4>
                    </div>
                    <div className='md:mt-0 mt-8'>
                        <form className='md:flex'>
                            <input type='email' 
                            className='bg-white w-full border-0 text-dark py-6 px-7'
                             placeholder='Your email ...'
                              name='emal'
                              onChange={(e) => setemail(e.target.value)}
                              value={email} />
                            <button type='submit' className='bg-red text-[18px] px-10 py-4 md:w-auto w-full'>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Subscribe;
