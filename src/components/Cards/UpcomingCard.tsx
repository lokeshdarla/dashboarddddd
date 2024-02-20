import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';
import { BsFillClockFill } from "react-icons/bs";

function UpcomingCard() {
  return (
    <div className='w-full flex flex-col items-start  justify-between gap-5 p-2'>
      <div className='flex gap-2 items-center text-sm my-2 text-[#CCCCCC] px-5 '>
        <span className='bg-[#409BEE] px-2 py-1 rounded-full text-black'><FaArrowRightLong/></span>
        <span>Upcoming Events</span>
      </div>
      <div className='flex items-center justify-evenly w-full text-white'>
        <Image alt='profile' src='/user1.png' height={65} width={65} className='bg-[#ABEFEB] rounded-full' />
        <div className='flex flex-col items-start justify-center pb-1'>
            <h1>Aliz Shah</h1>
            <span className='text-[#DCDCDC] flex items-center justify-center gap-2 text-xs mb-2'> <BsFillClockFill/> 08:00 - 09:00 am</span>
            <p className='py-1 px-2 rounded-full bg-[#2C3A58] text-[#DCDCDC] text-xs'>Visited 7 days ago</p>
        </div>
      </div>
    </div>
  )
}

export default UpcomingCard;
