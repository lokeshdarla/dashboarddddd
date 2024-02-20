import React from 'react'
import Image from 'next/image'

function ChatField() {
  return (
    <div className=' flex flex-col items-center justify-center gap-0 '>
      <div className='flex items-start justify-center gap-2'>
      <Image src={'/chat1.png'} alt='sender photo' width={45} height={45} className='bg-[#E8F8BB] rounded-full' />
        <div className=' flex flex-col items-start justify-center px-2 text-xs gap-3 py-3'>
          <p className='bg-[#BDD8F0] px-3 py-2 rounded-xl'>Hi, Alexa.</p>
          <p className='bg-[#BDD8F0] px-3 py-2 rounded-xl'>This help maintain balance and posture. dont worry.</p>
          <p className='text-[#CCCCCC] text-xs'>tue 02:32pm</p>
        </div>
        
      </div>
      <div className='flex items-start justify-center gap-2'>
        <div className=' flex flex-col items-end justify-center px-2 text-xs gap-3 py-3'>
          <p className='bg-[#BDD8F0] px-3 py-2 rounded-xl'>Hi, Alexa.</p>
          <p className='bg-[#BDD8F0] px-3 py-2 rounded-xl'>This help maintain balance and posture. dont worry.</p>
          <p className='text-[#CCCCCC] text-xs'>tue 02:32pm</p>
        </div>
        <Image src={'/user.png'} alt='sender photo' width={45} height={45} className='bg-[#BDD8F0] rounded-full' />
      </div>
    </div>
  )
}

export default ChatField
