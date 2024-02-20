import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BsThreeDots } from "react-icons/bs";
import { IoTrendingUpOutline } from "react-icons/io5";

function Review() {
  const percentage = 75;
  return (

    <div className='flex items-center justify-around'>
      <div className='flex flex-col items-start justify-center gap-5'>
        <div className='flex flex-col items-start text-white'>
          <p className='text-[#CCCCCC] '>Consultation</p>
          <h1 className='text-xl font-semibold'>82/100</h1>
        </div>
        <div className='flex px-3 py-1 items-center justify-center gap-3  text-white bg-[#2C3A58] rounded-xl'>
          <p>82%</p>
          <IoTrendingUpOutline size={15}/>
        </div>
      </div>
      <div className='flex flex-col items-end justify-between p-2 h-full gap-5'>
        <BsThreeDots size={25}/>
        <div>
        <CircularProgressbar value={percentage} className='h-20 w-20' strokeWidth={20} />
        </div>
    
      </div>
      
    </div>
  );
}

export default Review
