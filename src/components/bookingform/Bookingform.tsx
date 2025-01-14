import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsCalendarDateFill } from "react-icons/bs";
import { IoTimeSharp } from "react-icons/io5";


const Bookingform = () => {
    return (
        <div className='Bookingform bg-[#F5F5F5] p-[24px] rounded'>

            <form className="">
                <div className="relative  mb-6">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <FaMapMarkerAlt className='text-yellow'/>
                    </div>
                    <input type="text"  className="bg-white border border-gray-300 text-dark text-sm rounded-lg   block w-full ps-10 py-[23px]   dark:placeholder-gray-400  " placeholder="From" />
                </div>
                <div className="relative mb-6">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <FaMapMarkerAlt className='text-yellow'/>
                    </div>
                    <input type="text"  className="bg-white border border-gray-300 text-dark text-sm rounded-lg py-[23px]  block w-full ps-10 p-2.5   dark:placeholder-gray-400  " placeholder="To" />
                </div>
                <div className="relative mb-6">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <BsCalendarDateFill  className='text-yellow'/>
                    </div>
                    <input type="date"  className="bg-white border border-gray-300 text-dark text-sm rounded-lg py-[23px]  block w-full ps-10 p-2.5   dark:placeholder-gray-400  " placeholder="name@flowbite.com" />
                </div>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <IoTimeSharp  className='text-yellow'/>
                    </div>
                    <input type="time"  className="bg-white border border-gray-300 text-dark text-sm rounded-lg  py-[23px] block w-full ps-10 p-2.5   dark:placeholder-gray-400  " placeholder="name@flowbite.com" />
                </div>
                <button className='button bg-yellow w-full mt-7'>Get limousine</button>
            </form>

        </div>
    );
}

export default Bookingform;
