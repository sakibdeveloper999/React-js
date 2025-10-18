import React from 'react'
import Navbar from './Navbar'
import PageOneContent from './pageOneContent.jsx'

const SectionOne = () => {
  return (
    <div className='h-screen w-full'>
      <Navbar/>
      <PageOneContent/>
    </div>
  )
}

export default SectionOne