import React from 'react'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import ChatField from './ChatField'

function Chat() {
  return (
    <div className='flex flex-col justify-between gap-1'>
    <ChatHeader />
    <hr className="h-px m-2 bg-gray-200 border-0 dark:bg-gray-700" />
     <ChatField />
    <ChatInput />
  </div>
  
  )
}

export default Chat
