'use client'
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { LuAlarmClock } from "react-icons/lu";
import { useState } from 'react';
import { useEffect } from 'react';

import Image from 'next/image';
import MyChart from '../Charts/Chart';
import PatientCount from '../Cards/PatientCount';
import UpcomingCard from '../Cards/UpcomingCard';
import Chat from '../Chat/Chat';
import ActivePatient from '../ActivePatients/ActivePatient';
import Upcoming from '../Upcoming/Upcoming';
import Review from '../Review/Review';

function Dashboard() {
  const [greetings, setGreetings] = useState('');

  useEffect(() => {
    // Fetch data from the API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch('/api/update_text'); // Assuming your API endpoint is /api/update
        const data = await response.json();
        setGreetings(data.greetings[0].text);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); 
  return (
    <section className='w-full bg-[#151C39]  grid grid-cols-3 space-x-3 px-5 py-2 overflow-y-auto h-screen'>
    <div className='col-span-2  rounded-2xl grid grid-rows-5 space-y-4 px-2  py-2'>
      <div className='row-span-1 rounded-xl  flex items-center justify-around'>
      <h1 className='text-3xl font-bold text-[#FFFFFF]'>
        {greetings}
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
      <div className='row-span-2  rounded-xl grid grid-cols-5 space-x-2 py-4'>
      <div className='col-span-2 grid grid-rows-2 space-y-2'>
      <div className='row-span-1 bg-[#1B2C4F] rounded-xl m-2'>
         <PatientCount/>
      </div>
      <div className='row-span-2 bg-[#1B2C4F] rounded-xl m-2'>
        <UpcomingCard/>
      </div>
      </div>
      <div className='col-span-3 rounded-xl flex flex-col justify-center items-center bg-gradient-to-br m-2 from-[#1B2C4F] to-[#409BEE]'>
      <div className=' flex items-center justify-between w-96 px-4'>
        <div className='flex flex-col items-start justify-center'>
          <h1 className='text-white text-xl'>Statistics</h1>
          <h3 className='text-[#CCCCCC] text-sm'>November 2023</h3>
        </div>
        <button className='px-4 rounded-full text-sm py-2 text-white  border border-[#409BEE]'>Weekly</button>
      </div>
      <MyChart/>
      </div>
      </div>
      <div className='row-span-2  grid grid-cols-5 gap-2 h-fit'>
        <div className='col-span-3 text-white m-2'>
          <ActivePatient/>
        </div>
        <div className='col-span-2 gap-y-2 '>
          <div className='row-span-1 flex items-end rounded-xl'>
          <h1 className='text-xl p-2 text-white my-2'>Upcoming Events</h1>
          </div>
          <Upcoming/>
          <Review/>
        </div>
      </div>
    </div>
    <div className='col-span-1 bg-[#111729] rounded-2xl grid grid-rows-6 py-6 px-6 h-fit'>
      
      <div className='row-span-2  flex flex-col items-center justify-center gap-2 text-white m-2'>
          <Image 
          src='/user.png'
          width={100}
          height={100}
          className='rounded-full bg-gray-50'
        
          alt=''
        />
<h1 className='text-2xl'>Aliam Colter</h1>
<p className='text-sm text-[#CCCCCC]'>Physician</p>
      </div>
      <div className='row-span-1  rounded-xl flex items-center justify-around m-2 bg-[#1C2A4E] py-4 px-2 '>
        <div className='flex  items-center gap-4 rounded-2xl'>
        <h1 className='text-white text-xl'>Active Patients</h1>
        <div className='flex -space-x-4 rtl:space-x-reverse items-center justify-center'>
        <Image
          src={`/patient${1}.png`}
          width={40}
          height={40}
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
           
    <a href="#" className='w-11 h-11 p-2 bg-[#CCCCCC] border border-black text-black rounded-full flex items-center justify-center'>+8</a>

        </div>
      </div>
       
      </div>
      <div className='row-span-3 bg-[#1C2A4E] rounded-2xl p-2 m-2 flex items-center h-fit '>
          <Chat/>
      </div>
    </div>
  </section>
  
  )
}

export default Dashboard
