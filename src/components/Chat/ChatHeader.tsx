import React from 'react'
import Image from 'next/image'
import { MdAddCall } from "react-icons/md";

function ChatHeader() {
  return (
    <div className='flex items-center justify-between px-1 text-sm'>
      <div className='flex items-center justify-center gap-3'>
      <Image src={'/chat1.png'} alt='chat-user' width={45} height={45}  className='bg-[#E8F8BB] rounded-full'/>
      <div className='text-white'>
        <h1>Alexa Max</h1>
        <p>Active 5 min ago</p>
      </div>
      </div>
      <button className='text-[#409BEE] bg-[#2C3A58] rounded-full p-3'><MdAddCall size={20}/></button>
    </div>
  )
}

export default ChatHeader
