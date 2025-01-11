import React from 'react'
import BodySecond1 from './BodySecond1'
import BodySecond2 from './BodySecond2'
import BodySecond3 from './BodySecond3'

function BodySecondParth() {
  return (
    <div className='w-[1100px] flex flex-col justify-evenly pr-[10px] pl-[30px]'>
        <BodySecond1 />
        <BodySecond2 />
        <div>
        <strong><p className='text-[18px] my-[30px]'>Լավագույն առաջարկներ</p></strong>
        </div>
        <BodySecond3 />
    </div>
  )
}

export default BodySecondParth