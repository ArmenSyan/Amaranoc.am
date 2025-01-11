import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const array = [
    {
        imgUrl: "https://api.amaranoc.am/home.svg",
        text: "Առանձնատներ"
    }, {
        imgUrl: "https://api.amaranoc.am/frame_house.svg",
        text: "Frame houses"
    }, {
        imgUrl: "https://api.amaranoc.am/cabins.svg",
        text: "Տնակներ"
    }, {
        imgUrl: "https://api.amaranoc.am/close_pool.svg",
        text: "Փակ լողավազան"
    }, {
        imgUrl: "https://api.amaranoc.am/far_from_noise.svg",
        text: "Աղմուկից հեռու"
    }, {
        imgUrl: "https://api.amaranoc.am/view.svg",
        text: "Շքեղ տեսարան"
    }, {
        imgUrl: "https://api.amaranoc.am/nobel.svg",
        text: "Պահանջված"
    },
]
function BodySecond2() {
    return (
        <div className='border-y-[1px] border-zinc-200 flex justify-evenly items-center py-[10px] mt-[30px]'>
            {array.map((el, i) => {
                return <div key={i} className='flex flex-col justify-evenly items-center'>
                    <img src={el.imgUrl} className='w-[50px]' />
                    <p>{el.text}</p>
                </div>
            })}
            <button className="fa fa-arrow-right px-[13px] py-[13px] text-[14px]  border-[1px] border-zinc-700 rounded-[25px]" >
                <FaArrowRight/>
            </button>
        </div>
    )
}

export default BodySecond2