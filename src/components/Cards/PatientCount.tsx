import React from 'react'
import { IoTrendingUpOutline } from "react-icons/io5";

function PatientCount() {

  return (
    <div className='  rounded-xl flex items-center justify-center h-full'>
    <div className='w-3/5 bg-[#1B2C4F] flex flex-col items-start pl-8 text-white justify-center'>
      <h1 className='text-2xl mb-2 font-bold'>42</h1>
      <h3 className='text-sm'>Patients Visited</h3>
      <p className='text-xs'>This Month</p>
    </div>
    <div className='w-2/5 flex items-center justify-center bg-[#2C3A58] h-full rounded-e-xl'>
      <div className='py-5 px-2 bg-gradient-to-t from-[#409BEE] from-75%  to-[#409BEE80] to-25% text-white rounded-full flex flex-col items-center justify-center'>
       <IoTrendingUpOutline size={15}/>
       <p className='text-sm'>75%</p>
      </div>
    </div>
    </div>
  )
}

export default PatientCount
