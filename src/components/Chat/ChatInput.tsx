import React from 'react'
import { IoMicOutline } from "react-icons/io5";
import { BsSend } from "react-icons/bs";

function ChatInput() {
  return (
    <div className='flex bg-[#2C3A58] items-center justify-center px-3 py-1 text-white rounded-xl text-sm'>
      <button><IoMicOutline size={20}/></button>
      <input type="text" className='px-6 py-2 text-sm bg-inherit focus:outline-none' placeholder='Type your text....' />
      <button className='p-3 rounded-xl bg-[#409BEE] font-extrabold'><BsSend size={15} /></button>
    </div>
  )
}

export default ChatInput
