import React, { useState } from 'react'

function BodyFirst5() {
    const [number, setNumber] = useState(1)

    function delNumber() {
        if (number > 1) setNumber(number - 1)
    }
    function AddNumber() { setNumber(number + 1) }

    return (
        <div className='flex flex-col justify-evenly border-b-[1px] border-zinc-300 pb-[25px] mb-[25px]'>
            <p className='text-[17px]'><strong>Մարդկանց թույլատրելի քանակ</strong></p>
            <div className=' flex justify-evenly items-center mt-[20px]'>
                <button className='px-[19px] py-[10px] rounded-[25px] flex justify-center items-center bg-zinc-200'
                    onClick={() => delNumber()}
                ><strong>-</strong></button>
                <p className='px-[20px] py-[16px] w-[80px] rounded-[10px] border-[1px] border-zinc-400'>
                    {number}
                </p>
                <button className='px-[17px] py-[10px] rounded-[25px] flex justify-center items-center bg-zinc-200'
                    onClick={() => AddNumber()}
                ><strong>+</strong></button>


            </div>
        </div>
    )
}

export default BodyFirst5