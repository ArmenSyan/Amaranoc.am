import React from 'react'
const arr = ["Վոլեյբոլ","Խարույկ","Տապչաններ","Սեղանի խաղեր","Մանկական խաղահրապարակ","Բատուտ","Բար"]
function BodyFirst6() {
    return (
        <div className='pb-[20px] mb-[20px]'>
            <h1 className='text-[17px]'><strong>Առավելություններ</strong></h1>
            <div className='flex flex-col mt-[15px]'>
                {arr.map((el, i) => {
                    return <div key={i} className='flex  items-center my-[5px] text-zinc-500'>
                        <input type='checkbox' />
                        <p className='ml-[3px]'>{el}</p>

                    </div>
                })}
            </div>
        </div>
    )
}

export default BodyFirst6