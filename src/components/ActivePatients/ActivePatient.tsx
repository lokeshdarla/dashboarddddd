import React from 'react'
import Image from 'next/image';
import { LuAlarmClock } from "react-icons/lu";

function ActivePatient() {
  return (
       <div className='grid grid-rows-7 text-white gap-y-2   '>
        <div>
          <h1 className='text-xl p-2 row-span-1'>Active Patients</h1>
        </div>
          
          <div className='bg-[#1B2C4F] flex flex-col  justify-center gap-2 py-3 rounded-2xl px-4 row-span-6'>
          <div className='bg-[#1B2C4F] rounded-xl px-2'>
            <div className='flex items-center gap-2'>
              <h3 className='text-xs flex'>08:00 am <pre> - - - - - - -</pre></h3>
              <div className='inline-flex rounded-3xl items-center gap-2 bg-[#F5E5E5] px-3 py-1 '>
              <Image 
                src='/patient1.png'
                width={40}
                height={40}
                className='rounded-full bg-[#E8BBF8] p-1 px-2'
              
                alt=''
              />
     
              <div className='flex flex-col text-sm items-start  text-black justify-center'>
                <h2 className='font-semibold'>Mark jaxon</h2>
                <p className='flex items-center gap-2 text-xs'><LuAlarmClock/> 08:00-09:00 am</p>
              </div>

              </div>
              <h3 className='text-xs'> - - - - - - -</h3>
            </div>
          </div>
          <div className='bg-[#1B2C4F] rounded-xl px-2'>
            <div className='flex items-center gap-2'>
              <h3 className='text-xs flex'>08:00 am <pre>  - - - -</pre></h3>
              <div className='inline-flex rounded-3xl items-center gap-2 bg-[#F5E5E5] px-3 py-1 '>
              <Image 
                src='/patient1.png'
                width={40}
                height={40}
                className='rounded-full bg-[#E8BBF8] p-1 px-2'
              
                alt=''
              />
     
              <div className='flex flex-col text-sm items-start  text-black justify-center'>
                <h2 className='font-semibold'>Mark jaxon</h2>
                <p className='flex items-center gap-2 text-xs'><LuAlarmClock/> 08:00-09:00 am</p>
              </div>

              </div>
              <h3 className='text-xs'> - - - - - - - - - -</h3>
            </div>
          </div>
          <div className='bg-[#1B2C4F] rounded-xl px-2'>
            <div className='flex items-center gap-2'>
              <h3 className='text-xs flex'>08:00 am <pre> - - - - - - -</pre></h3>
              <div className='inline-flex rounded-3xl items-center gap-2 bg-[#F5E5E5] px-3 py-1 '>
              <Image 
                src='/patient1.png'
                width={40}
                height={40}
                className='rounded-full bg-[#E8BBF8] p-1 px-2'
              
                alt=''
              />
     
              <div className='flex flex-col text-sm items-start  text-black justify-center'>
                <h2 className='font-semibold'>Mark jaxon</h2>
                <p className='flex items-center gap-2 text-xs'><LuAlarmClock/> 08:00-09:00 am</p>
              </div>

              </div>
              <h3 className='text-xs'> - - - - - - -</h3>
            </div>
          </div>
          <div className='rounded-xl px-2'>
            <div className='flex items-center gap-2'>
              <h3 className='text-xs flex'>08:00 am </h3>
              <div className='inline-flex rounded-3xl items-center gap-2 bg-[#F5E5E5] px-3 py-1 '>
              <Image 
                src='/patient1.png'
                width={40}
                height={40}
                className='rounded-full bg-[#E8BBF8] p-1 px-2'
              
                alt=''
              />
     
              <div className='flex flex-col text-sm items-start  text-black justify-center'>
                <h2 className='font-semibold'>Mark jaxon</h2>
                <p className='flex items-center gap-2 text-xs'><LuAlarmClock/> 08:00-09:00 am</p>
              </div>

              </div>
              <h3 className='text-xs'><pre> - - - - - - -</pre></h3>
            </div>
          </div>
          <div className='bg-[#1B2C4F] rounded-xl px-2'>
            <div className='flex items-center gap-2'>
              <h3 className='text-xs flex'>08:00 am <pre> - - - - - - -</pre></h3>
              <div className='inline-flex rounded-3xl items-center gap-2 bg-[#F5E5E5] px-3 py-1 '>
              <Image 
                src='/patient1.png'
                width={40}
                height={40}
                className='rounded-full bg-[#E8BBF8] p-1 px-2'
              
                alt=''
              />
     
              <div className='flex flex-col text-sm items-start  text-black justify-center'>
                <h2 className='font-semibold'>Mark jaxon</h2>
                <p className='flex items-center gap-2 text-xs'><LuAlarmClock/> 08:00-09:00 am</p>
              </div>

              </div>
              <h3 className='text-xs'> - - - - - - -</h3>
            </div>
          </div>
          </div>
    </div>
  )
}

export default ActivePatient
