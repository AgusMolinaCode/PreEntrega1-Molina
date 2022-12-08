import React from 'react'
import ItemListContainer from '../components/ItemListContainer'

const Home = () => {
  return (
  <div className='grid grid-cols-3'> 
    <h1 className='text-4xl text-red-600 text-center'>PRODUCTOS</h1>
    <ItemListContainer />
  </div>
  )
}

export default Home