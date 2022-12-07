import React from 'react'
import ItemCount from './itemCount'
import ItemDetailContainer from './ItemDetailContainer'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {
  return (
    <>
      <h1  className='text-center text-3xl text-slate-900 font-bold'>{greeting}</h1>
      <ItemCount />
      <ItemList />
      <ItemDetailContainer />

    </>
  )
}

export default ItemListContainer