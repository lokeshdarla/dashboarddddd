import React from 'react'

function Dashboard() {
  return (
    <section className='h-[100%] w-full bg-[#151C39] rounded-2xl p-3 grid grid-cols-3 space-x-3'>
    <div className='col-span-2 bg-blue-100 rounded-2xl grid grid-rows-5 space-y-2 p-2'>
      <div className='row-span-1 bg-green-300 rounded-xl'>

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
    <div className='col-span-1 bg-yellow-300 rounded-2xl grid grid-rows-6 p-2 space-y-2'>
      {/* Content for the second div */}
      <div className='row-span-2 bg-[#B6FFFA] rounded-full'>

      </div>
      <div className='row-span-1 bg-[#98E4FF] rounded-xl'>

      </div>
      <div className='row-span-3 bg-[#687EFF] rounded-xl'>

      </div>
    </div>
  </section>
  
  )
}

export default Dashboard
