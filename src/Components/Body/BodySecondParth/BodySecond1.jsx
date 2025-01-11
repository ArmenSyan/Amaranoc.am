import React from 'react'
import { CiMap } from "react-icons/ci";
import { LuCalendarDays } from "react-icons/lu";
function BodySecond1() {
    return (
        <div className='flex text-[17px] w-[240px] justify-evenly'>
            <strong > 
                <button className='px-[10px] flex justify-evenly items-center py-[10px] w-[150px] border-[1px] border-zinc-700 rounded-[25px]'>
                    Քարտեզ
                    <CiMap  className='text-[22px]'/>
                    </button>
            </strong>
            <button className="px-[13px] py-[13px] text-[18px]  border-[1px] border-zinc-700 rounded-[25px]" ><LuCalendarDays /> </button>
        </div>
    )
}

export default BodySecond1