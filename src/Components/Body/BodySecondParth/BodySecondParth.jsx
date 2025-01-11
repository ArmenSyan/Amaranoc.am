import React from 'react'
import BodySecond1 from './BodySecond1'
import BodySecond2 from './BodySecond2'
import BodySecond3 from './BodySecond3'
import BodySecond4 from './BodySecond4'
import BodySecond5 from './BodySecond5'

function BodySecondParth() {
    return (
        <div className='w-[1160px] flex flex-col justify-evenly pr-[10px] pl-[30px]'>
            <BodySecond1 />
            <BodySecond2 />
            <div>
                <strong><p className='ml-[20px] text-[20px] my-[30px]'>Լավագույն առաջարկներ</p></strong>
            </div>
            <BodySecond3 />
            <div>
                <strong><p className='ml-[20px] text-[20px] my-[30px]'>Սովորական առաջարկներ</p></strong>
            </div>
            <BodySecond4 />
            <BodySecond5 />
        </div>
    )
}

export default BodySecondParth