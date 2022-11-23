import React from 'react'
import CartWidget from './CartWidget'
import logo from '../assets/vertex-pistons-logo.png'


const Navbar = () => {
  return (
    <>
      <header className='border-b-2 border-indigo-300 p-2 m-2'>
        <div className='m-auto flex justify-around'>
          <div className='w-24'>
           <a href="#"><img src={logo}/></a> 
          </div>
            
          <div>  
            <nav className='gap-3 flex justify-around'>
              <button className='btn bg-slate-600'>KIT PISTONES</button>
              <button className='btn bg-slate-600'>JUNTAS</button>
              <button className='btn bg-slate-600'>KIT BIELAS</button>
            </nav>
          </div>

          <div>
            <CartWidget />
          </div>
        </div>  
      </header>
    </>
  )
  
}

export default Navbar