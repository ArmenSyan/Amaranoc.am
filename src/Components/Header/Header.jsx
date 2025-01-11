import React from 'react'
import { TbWorld } from "react-icons/tb";
import { CiUser } from "react-icons/ci";

const arr = ["Գլխավոր", "Զեղչեր", "Ծառայություններ", "Մեր մասին"]

function Header() {
    return (
        <div className='flex justify-between items-center mt-[22px] w-[1300px]'>
            <div>
                <img src='https://amaranoc.am/images/logo.svg' className='w-[170px]' />
            </div>
            <div className='w-[550px] flex justify-between items-center'>
                {arr.map((el,i) => {
                    return <p key={i} className='pb-[5px] text-[18px] text-text3 md:text-text2 whitespace-nowrap text-secondary hover:border-b-[1px] hover:border-[#fd993a]'>{el}</p>
                })}
            </div>
            <div className='flex justify-evenly items-center w-[400px]'>
            <TbWorld className='text-[24px]' />
            <CiUser className='text-[24px]'/>
                <input 
                type="text"
                placeholder='Որոնում'
                className='px-[35px] py-[8px] rounded-[25px] border-[1px] border-zinc-400' />
            </div>
        </div>
    )
}

export default Header