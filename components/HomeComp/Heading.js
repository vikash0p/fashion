import React from 'react'

const Heading = ({heading}) => {
  return (
   <div className='mb-8 inline-block'>
    <h1 className='text-2xl md:text-4xl font-mono font-semibold '>{heading}</h1>
    <hr className='w-full h-[3px] bg-violet-800 ' />
   </div>
  )
}

export default Heading
