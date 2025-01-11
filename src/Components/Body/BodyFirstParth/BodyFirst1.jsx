import React from 'react'
const arr = ["Դիլիջան 74", "Ծաղկաձոր 49", "Երևան 13", "Ձորաղբյուր 13", "Արզնի 10"]
function BodyFirst1() {
    return (
        <div className='border-b-[1px] border-zinc-300 pb-[20px] mb-[20px]'>
            <h1 className='text-[17px]'><strong>Տարածաշրջան</strong></h1>
            <div className='flex flex-col mt-[15px]'>
                {arr.map((el,i) => {
                    return <div key={i} className='flex  items-center my-[5px] text-zinc-500'>
                        <input type='checkbox' />
                        <p className='ml-[3px]'>{el}</p>

                    </div>
                })}
            </div>
        </div>
    )
}

export default BodyFirst1