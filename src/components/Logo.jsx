import React from 'react'
import blogPic from '../assets/blog_pic.jpg'

function Logo({width = '100px'}) {
  return (
    <div className='flex align-middle'>
      <img className='h-10 rounded-md' src={blogPic} alt="" />
      <span className='py-1 text-xl font-bold px-2'>Blog4U</span>
    </div>
  )
}

export default Logo
