import React from 'react'
import {BiSearch} from 'react-icons/bi'

const Homepage = () => {
  return (
    <div className=' flex flex-col items-center justify-center pt-20 pb-20 px-10  bg-black md:px-20 lg:px-80'>
        <div className=' flex flex-col items-center justify-center gap-6 md:flex-row-reverse lg:gap-20'>
            <img className=' h-[300px]' src="/assets/cover.png" alt="" />

            <div className=' flex flex-col items-center justify-center gap-4'>
              <h1 className=' text-3xl font-extrabold text-center'>Discover Most Suitable Watches</h1>
              <p className=' text-sm font-light text-center'>Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!</p>

              <div className= ' flex items-center justify-center bg-white py-1 px-2 rounded-lg'>
                  <BiSearch className=' text-black'/>
                  <input className=' bg-transparent text-xs text-gray-300 border-transparent px-4 py-2' type="text" placeholder='Find the best brands' />
                  <a className=' bg-blue-700 rounded-md text-xs px-4 py-2' href="">Search</a>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Homepage