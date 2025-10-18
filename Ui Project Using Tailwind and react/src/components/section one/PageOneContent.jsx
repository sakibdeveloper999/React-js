import React from 'react'
import LeftContent from './LeftContent.jsx'
import RightContent from './RightContent.jsx'

const pageOneContent = () => {
  return (
    <div className='flex h-[90%] w-full gap-2'>
        <LeftContent />
        <RightContent />
    </div>
  )
}

export default pageOneContent