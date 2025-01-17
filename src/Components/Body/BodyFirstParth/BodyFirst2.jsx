import React, { useState } from 'react'
let arr = ["֏", "$", "€", "₽"]
function BodyFirst2() {
    const [activeElement, setActiveElement] = useState(0)
    function buttonClick(index) { 
        event.preventDefault()
        setActiveElement(index) 
    }
    return (
        <div className='border-b-[1px] border-zinc-300 pb-[25px] mb-[25px]'>
            <div className='flex justify-between items-center'>
                <p className='text-[17px]'><strong>Արժեք</strong></p>
                <form>
                    <div className='w-[150px] flex justify-evenly items-center'>
                        {arr.map((el, i) => {
                            return <div key={i}>
                                <button className={`px-[11px] py-[4px] border-[1px] text-[17px]
                                    border-gray-500 rounded-[50%]
                                    ${activeElement == i ? "bg-[#101623] text-white" : "bg-white"}
                                    `}
                                    onClick={(event) => buttonClick(i, event)}>
                                    {el}
                                </button>
                            </div>

                        })}
                    </div>
                </form>
            </div>
            <div className='flex justify-evenly items-center mt-[20px]'>
                <input type='number' placeholder='Սկսած' className='text-[15px] w-[110px] px-[10px] py-[8px] border-[1px] border-zinc-400 rounded-[7px]' />
                <p>-</p>
                <input type="number" placeholder='Մինչև' className='text-[15px] w-[110px] px-[10px] py-[8px] border-[1px] border-zinc-400 rounded-[7px]' />
            </div>
        </div >
    )
}

export default BodyFirst2
