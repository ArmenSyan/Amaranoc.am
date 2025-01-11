import React from 'react'

const array = [
    {text : "<", bgCol : "white"},
    {text : "1", bgCol : "#FD993A"},
    {text : "2", bgCol : "white"},
    {text : "3", bgCol : "white"},
    {text : "...", bgCol : "white"},
    {text : "11", bgCol : "white"},
    {text : ">", bgCol : "white"},
]
function BodySecond5() {
    return (
        <div className='flex justify-evenly items-center mt-[50px] '>
            <div className='flex justify-evenly items-center w-[400px] '>
                {array.map((el, i) => {
                    return <div key={i} className={`${el.bgCol !== "white" ? "bg-[#FD993A] text-[white] " : ""} px-[16px] py-[10px] border-[1px] border-zinc-400 rounded-[50%]`}>
                        {el.text}
                    </div>
                })}
            </div>
        </div>
    )
}

export default BodySecond5