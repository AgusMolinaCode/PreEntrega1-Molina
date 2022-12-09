import React from 'react'
import CartWidget from './CartWidget'
import logo from '../assets/2.png'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
      <header className='border-b-2 border-indigo-300 p-2 m-2'>
        <div className='m-auto flex justify-between'>
          <div className='flex' >
           <Link to="/"><img className='w-[300px] mt-2' src={logo}/></Link> 
           <nav className='gap-3 flex justify-around'>
              <NavLink to={'/categoria/Motocross'} className='btn  bg-red-500'>MOTOCROSS</NavLink>
              <NavLink to={'/categoria/Pista'} className='btn  bg-red-500'>DEPORTIVOS</NavLink>
              <NavLink to={'/categoria/ATV'} className='btn  bg-red-500'>ATV-UTV</NavLink>
              <NavLink to={'/categoria/accesorio'} className='btn  bg-red-500'>ACCESORIOS</NavLink>
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