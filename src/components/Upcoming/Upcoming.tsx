import React from 'react'
import Image from 'next/image'
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { BsFillClockFill } from "react-icons/bs";

function Upcoming() {
  return (
    <div className='flex flex-col  justify-between  gap-3 bg-[#1B2C4F] rounded-2xl py-2 my-2'>
      <div className='flex items-center justify-around gap-5 m-2'>
          <div className=''>
            <h2 className='text-white text-xl'>Team Meeting</h2>
            <p className='flex items-center text-[#CCCCCC] gap-2 text-xs'><BsFillClockFill/> 05:00-06:00</p>
          </div>
          <p className='p-4 text-[#409BEE] bg-[#2C3A58] w-fit rounded-2xl text-2xl'><IoMdNotifications size={25}/></p>
      </div>
      <div className='flex items-center justify-around'>
      <div className='flex -space-x-4 rtl:space-x-reverse items-center justify-center'>
      <Image
          src={`/patient${1}.png`}
          width={35}
          height={35}
          className='border h-10 w-10 border-white rounded-full bg-[#E8BBF8]'
          alt=''
        />
         <Image
          src={`/patient${2}.png`}
          width={40}
          height={40}
          className='border h-10 w-10 border-white rounded-full bg-[#BBF8F1]'
          alt=''
        />
         <Image
          src={`/patient${3}.png`}
          width={40}
          height={40}
          className='border h-10 w-10 border-white rounded-full bg-[#CBF8BB]'
          alt=''
        />
      <a href="#" className='w-11 h-11 p-2 bg-[#CCCCCC] text-black rounded-full flex items-center justify-center'>+8</a>

      </div>
      <p className='p-2 px-3 bg-[#409BEE] w-fit rounded-2xl'><FaArrowRightLong/></p>
      </div>
    </div>
  )
}

export default Upcoming
