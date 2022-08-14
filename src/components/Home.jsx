import React from 'react'

import nikeImg from '../assets/nikeShoe.png'

export const Home = () => {
  return (
    <section className='bg-[#F6F6F6] h-[476px] px-4 relative overflow-hidden rounded-xl flex items-center justify-center gap-12 max-w-7xl mx-auto mb-24 mt-8 pt-7 pl-7 pb-12 after::content-[""] after:absolute after:w-[600px] after:h-[600px] after:rounded-full after:right-[-190px] after:top-[-100px] after:bg-gradient-to-l after:from-[#005088] after:to-[#0F88DD] before:content-[""] before:absolute before:w-[600px] before:h-[600px] before:rounded-full before:right-[-90px] before:top-[100px] before:bg-gradient-to-l before:from-[#015C9C] before:to-[#0074C6]' >
      <div>
        <div className='h-24'>
        </div>
        <img  src={nikeImg} alt="" />
      </div>

      <div className='z-10 flex flex-col items-end justify-center'>
        <div className='h-24'>

        </div>
        <h2 className='relative text-8xl font-bold text-white after:flex after:items-center after:justify-center after:absolute after:content-["New"] after:font-oleo after:font-normal after:text-xl after:w-12 after:h-12 after:rounded-full  after:-top-[14px] after:left-[-19px] after:-rotate-[24deg] after:bg-gradient-to-b after:from-[#3EA3EA] after:to-[#096DBC]' > <span className='text-black'>Air</span> Jordan</h2>
        <p className='text-end text-white font-normal text-2xl'>2023 edition</p>
        <a href="" className='underline decoration-1 text-white mt-9'>View product</a>
      </div>
    </section>
  )
}
