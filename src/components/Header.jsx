import React from 'react'

import { Bag } from './bag'
import { Logo } from './logo'
import { Search } from './search'


export default function Header() {
  return (
    <header className='w-full px-4'>   
      <div className='flex justify-between mx-auto max-w-7xl py-6'>
        <div className='flex items-center gap-12'>        
          <Logo />
          <nav>       
            <ul className='flex items-center gap-8 font-medium text-sm' >
              <li ><a href="">Men</a></li>
              <li><a href="">Women</a></li>
              <li><a href="">Kids</a></li>
              <li><a href="">Customise</a></li>
              <li><a href="" className=" relative after:font-normal after:top-[-20px] after:right-[-28px] after:text-white after:text-xs after:content-['20%'] after:py-1 after:px-2 after:rounded-full after:bg-red-600 after:absolute">Sale</a></li>
              <li><a href="">Shipping</a></li>
            </ul>
          </nav>
        </div>

        <div className='flex align-center text-sm gap-6'>
          <Search />
          <Bag />
        </div> 
      </div> 
    </header>
  )
}
