import React from 'react'
import Image from 'next/image'
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { BsFillClockFill } from "react-icons/bs";

function Upcoming() {
  return (
    <div className='flex flex-col  justify-between py-2 gap-3'>
      <div className='flex items-center justify-around'>
          <div className=''>
            <h1 className='text-white text-xl'>Team Meeting</h1>
            <p className='flex items-center text-[#CCCCCC] gap-2 text-xs'><BsFillClockFill/> 05:00-06:00</p>
          </div>
          <p className='py-4 px-4 text-[#409BEE] bg-[#2C3A58] w-fit rounded-2xl text-2xl'><IoMdNotifications size={25}/></p>
      </div>
      <div className='flex items-center justify-around'>
      <div className='flex -space-x-4 rtl:space-x-reverse items-center justify-center'>
        {[1,2,3].map((index) => (
      <Image 
        key={index}  // Make sure to include a unique key for each element in the array
        src='/user.png'
        width={40}
        height={40}
        className='border h-10 w-10 border-white rounded-full bg-black'
        alt=''
      />
    ))}
           
<a href="#" className='w-11 h-11 p-2 bg-black text-white rounded-full flex items-center justify-center'>+8</a>

      </div>
      <p className='p-2 px-3 bg-[#409BEE] w-fit rounded-2xl'><FaArrowRightLong/></p>
      </div>
    </div>
  )
}

export default Upcoming
