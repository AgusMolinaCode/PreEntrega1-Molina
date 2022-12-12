import React from 'react'
import CartWidget from './CartWidget'
import logo from '../assets/J.png'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
      <header className='border-b-2 border-indigo-300 p-2 m-2'>
        <div className='m-auto flex justify-around'>
          <div className='flex' >
           <Link to="/"><img className='w-[100px] mt-auto hover:bg-red-400 ease-out duration-700' src={logo}/></Link> 
           <nav className=' ml-2 gap-3 flex justify-between'>
              <NavLink to={'/categoria/Motocross'} className='btn p-1 bg-red-500 hover:bg-red-700'>MOTOCROSS</NavLink>
              <NavLink to={'/categoria/Pista'} className='btn p-1 bg-red-500 hover:bg-red-700'>DEPORTIVOS</NavLink>
              <NavLink to={'/categoria/ATV'} className='btn p-1 bg-red-500 hover:bg-red-700'>ATV-UTV</NavLink>
              <NavLink to={'/categoria/accesorio'} className='btn p-1 bg-red-500 hover:bg-red-700'>ACCESORIOS</NavLink>
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