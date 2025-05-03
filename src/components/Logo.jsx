import React from 'react'
import blogIT from '../assets/blog_pic.jpg'

function Logo({width = '100px'}) {
  return (
    <div className='flex align-middle'>
      <img className='h-10 rounded-md' src={blogIT} alt="" />
      <span className='py-1 text-xl font-bold px-2'>blogIT</span>
    </div>
  )
}

export default Logo