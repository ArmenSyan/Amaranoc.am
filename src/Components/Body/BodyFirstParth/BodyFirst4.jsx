import React, { useState } from 'react';

const array = [
    { text: "Բոլորը" },
    { text: "1" },
    { text: "2" },
    { text: "3" },
    { text: "4" },
    { text: "5" },
    { text: "6 և ավելի" },
];

function BodyFirst4() {
    const [activeElement, setActiveElement] = useState(0);

    const buttonClick = (index) => {
        setActiveElement(index);
    }

    return (
        <div className="flex flex-col justify-evenly border-b-[1px] border-zinc-300 pb-[25px] mb-[25px]">
            <p className="text-[17px]"><strong>Սենյակների քանակ</strong></p>
            <div className="mt-[10px]">
                {array.map((el, i) => (
                    <button
                        key={i}
                        className={`text-[#10162380] text-[15px] px-[22px] py-[15px] border-[1px] ${activeElement === i ? "bg-[#101623] text-[white]" : "bg-[white]"
                            } mx-[7px] my-[5px] border-gray-400 rounded-[35px]`}
                        onClick={() => buttonClick(i)}
                    >
                        {el.text}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default BodyFirst4;