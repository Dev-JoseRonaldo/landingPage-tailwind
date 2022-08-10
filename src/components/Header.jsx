import React from 'react'

import { Bag } from './bag'
import { Logo } from './logo'
import { Search } from './search'

export default function Header() {
  return (
    <header className='box-border w-screen'>   
      <div className='flex justify-between mx-auto max-w-7xl py-6'>
        <div className='flex items-center gap-12'>        
          <Logo />
          <nav>
            <ul className='flex items-center gap-8'>
              <li>
                <a href="">Men</a>
              </li>
              <li>
                <a href="">Women</a></li>
              <li>
                <a href="">Kids</a>
              </li>
              <li>
                <a href="">Customise</a>
              </li>
              <li>
                <a href="">Sale</a>
              </li>
              <li>
                <a href="">Shipping</a>
              </li>
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
