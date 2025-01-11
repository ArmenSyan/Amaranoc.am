import React, { useState } from 'react'
const array = [
    { text: "Բոլորը" },
    { text: "Բաց" },
    { text: "Փակ" },
    { text: "Տաքացվող" },
    { text: "Առանց լողավազանի" },

]
function BodyFirst3() {
    const [activeElement, setActiveElement] = useState(0)

    function buttonClick(index) {
        setActiveElement(index)
    }
    return (
        <div className='flex flex-col justify-evenly border-b-[1px] border-zinc-300 pb-[25px] mb-[25px]'>
            <p className='text-[17px]'><strong>Լողավազան</strong></p>
            <div className='mt-[15px]'>
                {array.map((el, i) => {
                    return <button key={i} className={`
          text-[#10162380] text-[15px] px-[22px] py-[15px] border-[1px] 
          ${activeElement == i ? "bg-[#101623] text-white" : "bg-white"}
           mx-[10px] my-[5px] border-gray-400 rounded-[35px]`}
                        onClick={() => buttonClick(i)}
                    >
                        {el.text}</button>
                })}
            </div>
        </div>
    )
}

export default BodyFirst3