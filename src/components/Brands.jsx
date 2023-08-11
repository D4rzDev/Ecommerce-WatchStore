import React from 'react'

const Brands = () => {
  return (
    <div className=' flex flex-row flex-wrap items-center justify-center bg-white pt-10 pb-10 px-10 gap-6 lg:gap-12'>
        <div className=' flex flex-row items-center justify-center gap-6 bg-gray-300 px-4 py-4 rounded-xl w-[200px] h-[180px]'>
            <img className=' h-[100px]' src="/assets/brand1.png" alt="" />
            <div className=' flex flex-col items-start'>
                <h1 className=' text-black text-lg font-bold'>Apple</h1>
                <p className=' text-xs font-light text-black'>Apple is one of the most famous smart watches providing company.</p>
            </div>
        </div>

         <div className=' flex flex-row items-center justify-center gap-6 bg-gray-300 px-4 py-4 rounded-xl w-[200px] h-[180px]'>
            <img className=' h-[100px]' src="/assets/brand2.png" alt="" />
            <div className=' flex flex-col items-start'>
                <h1 className=' text-black text-lg font-bold'>Xiaomi</h1>
                <p className=' text-xs font-light text-black'>Xiaomi smart watches are produced by MI company.</p>
            </div>
        </div>

         <div className=' flex flex-row items-center justify-center gap-6 bg-gray-300 px-4 py-4 rounded-xl w-[200px] h-[180px]'>
            <img className=' h-[100px]' src="/assets/brand3.png" alt="" />
            <div className=' flex flex-col items-start'>
                <h1 className=' text-black text-lg font-bold'>FitBit</h1>
                <p className=' text-xs font-light text-black'>FitBit smart watches are best for there health and fitness features.</p>
            </div>
        </div>

    </div>
  )
}

export default Brands