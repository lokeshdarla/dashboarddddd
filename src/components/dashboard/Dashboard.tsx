import React from 'react'
import { FaSearch } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import Image from 'next/image';

function Dashboard() {
  return (
    <section className='h-[100%] w-full bg-[#151C39] rounded-2xl p-3 grid grid-cols-3 space-x-3'>
    <div className='col-span-2  rounded-2xl grid grid-rows-5 space-y-2 p-2'>
      <div className='row-span-1 rounded-xl p-2 flex items-center justify-around'>
      <h1 className='text-3xl font-bold text-[#FFFFFF]'>
        <span className='font-thin'>Hello,</span>
        <br />
        Dr. Colter! 👋
      </h1>
      <div className='flex items-center justify-center gap-1'>
      <div className="relative px-3 bg-[#2C3A58] rounded-xl text-sm text-[#CCCCCC]">
      <label htmlFor="search" className=" font-medium absolute top-[35%]">
        <FaSearch />
      </label>
      <input
        type="text"
        id="search"
        value={"Search"}
        placeholder="Search"
        className="w-96 px-6 py-3 bg-[#2C3A58]  border-none rounded focus:outline-none"
      />
    </div>
    <div className='relative'>
      {/* <div className='text-[#B80000] absolute top-0 left-0'>
        <LuDot size={50}/>
      </div> */}
    <button className='p-3 bg-[#409BEE] rounded-xl text-xl text-white '><IoNotificationsOutline/></button>
    </div>
  
      </div>
     
  
      </div>
      <div className='row-span-2 bg-pink-200 rounded-xl grid grid-cols-5 p-3 space-x-2'>
      <div className='col-span-2 bg-[#C7C8CC] rounded-xl'>

      </div>
      <div className='col-span-3 bg-[#1F2544] rounded-xl'>

      </div>
      </div>
      <div className='row-span-3 bg-red-400 rounded-xl grid grid-cols-5 p-3 space-x-2'>
        <div className='col-span-3 bg-[#836FFF] rounded-xl'>

        </div>
        <div className='col-span-2 bg-[#ECB159] rounded-xl'>
        
        </div>
      </div>
    </div>
    <div className='col-span-1 bg-[#111729] rounded-2xl grid grid-rows-10 py-6 px-8 space-y-2'>
      {/* Content for the second div */}
      <div className='row-span-4 bg-[#B6FFFA] rounded-full'>

      </div>
      <div className='row-span-1 bg-[#1C2A4E] rounded-xl flex items-center justify-around h-a'>
        <h1 className='text-white'>Active Patients</h1>
        <div className='flex -space-x-4 rtl:space-x-reverse'>
          <Image 
          src='/user.png'
          width={50}
            height={50}
            className='border border-white rounded-full bg-black'
           alt=';'/>
            <Image 
          src='/user.png'
          width={50}
          className='border border-white rounded-full bg-black'
            height={50}
           alt=';'/>
            <Image 
          src='/user.png'
          width={50}
          className='border border-white rounded-full bg-black'
            height={50}
           alt=';'/>
<a href="#" className='w-12 h-12 bg-black text-white rounded-full flex items-center justify-center'>+8</a>

        </div>
      </div>
      <div className='row-span-5 bg-[#687EFF] rounded-xl'>

      </div>
    </div>
  </section>
  
  )
}

export default Dashboard
