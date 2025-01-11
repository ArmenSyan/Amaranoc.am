import React from 'react'
import BodyFirstPath from './BodyFirstParth/BodyFirstPath'
import BodySecondParth from './BodySecondParth/BodySecondParth'

function Body() {
  return (
    <div className='flex justify-evenly mt-[60px]'>
        <BodyFirstPath />
        <BodySecondParth />
    </div>
  )
}

export default Body