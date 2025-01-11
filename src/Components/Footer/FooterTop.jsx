import React from 'react'

function FooterTop() {
  return (
    <div className='mt-[150px] w-[98.9vw] h-[200px] bg-[#101623] flex flex-col justify-evenly items-center text-[white] '>
    <div className='mt-[40px]'>
        <p className='text-[40px] font-extrabold'>ԿՈՆՏԱԿՏՆԵՐ</p>
    </div>
    <div className='flex justify-evenly items-center w-[1200px] mt-[30px]'>
        <div className='hover:cursor-pointer flex justify-evenly items-center'>
            <i className="fa fa-phone "></i>
            <p className='ml-[10px]'>041-611-611/044-611-611</p>
        </div>
        <div className='hover:cursor-pointer flex justify-evenly items-center'>
            <i className="fa fa-envelope "></i>
            <p className='ml-[10px]'>address.amaranoc@gmail.com</p>
        </div>
        <div className='hover:cursor-pointer flex justify-evenly items-center'>
            <i className="fa fa-instagram "></i>
            <p className='ml-[10px]'>amaranoc.am</p>
        </div>
        <div className='hover:cursor-pointer flex justify-evenly items-center'>
            <i className="fa fa-facebook "></i>
            <p className='ml-[10px]'>amaranoc.am</p>
        </div>
        <div className='hover:cursor-pointer flex justify-evenly items-center'>
            <i className="fa fa-map-marker "></i>
            <p className='ml-[10px]'>Թումանյան 5</p>
        </div>
    </div>
    <div>
        <p className='hover:cursor-pointer mt-[50px] border-b-[1px] border-white'>Գաղտնիության քաղաքականություն</p>
    </div>
</div>
  )
}

export default FooterTop