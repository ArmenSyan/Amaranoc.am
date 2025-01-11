import React from 'react'
import DataBase from '../../../Data'
import { MdPlace } from "react-icons/md";
import { PiUsersThreeLight } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";

function BodySecond3() {
    return (
        <div className=' '>
            <div className='flex justify-evenly items-center flex-wrap  '>
                {DataBase[0].theBest.map((el, i) => {
                    return <div key={i} className='hover:cursor-pointer shadow-lg shadow-indigo-500/40 flex flex-col my-[15px] rounded-[15px]' >
                        <div>
                            <img src={el.imgUrl} className='w-[340px] h-[300px] rounded-[15px] object-cover' />
                        </div>
                        <div className='flex  items-center text-[17px]'>
                            <div className='flex items-center text-[black] mt-[15px]'>
                                <MdPlace className="fa fa-map-marker mr-[10px] ml-[20px] text-[#FD993A]" />

                                <p>{el.place}</p>
                            </div>
                            <div className='flex items-center text-[black] mt-[15px] ml-[20px]'>
                                <PiUsersThreeLight className="fa fa-users mr-[10px] ml-[20px] text-[#FD993A]" />
                                <p>{el.people}</p>
                            </div>
                        </div>
                        <strong>
                            <div className='flex  items-center text-[22px] text-[#101623B3] font-bold my-[20px] '>
                                <IoPricetagsOutline class="fa fa-money text-[#FD993A] mr-[10px] ml-[20px] " />
                                <p>{el.price}</p>
                            </div>
                        </strong>
                    </div>
                })}
            </div>
        </div>
    )
}

export default BodySecond3