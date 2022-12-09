import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTOS } from '../data/PRODUCTOS'
import ItemList from './ItemList'



const ItemListContainer = () => {

  const [productos, setProductos] = useState( [] )
  const {categoriaId}= useParams()
  
    useEffect(() => {
      obtenerProductos()
        .then( response => {
          if(categoriaId){
            setProductos(response.filter((prod)=> prod.categoriaId === categoriaId))
          }else{

            setProductos( response )
          }
        })
    }, [categoriaId])
  
    const obtenerProductos = () => {
      return new Promise( (resolve, reject) => {
          setTimeout( () => {
              resolve( PRODUCTOS )
          }, 500)
      })
    }
  
  return (
    <div>
      <div>
        <img className=' m-auto w-[1000px] h-[300px]' src="../../public/I.jpg" alt="" />
      </div>
      <h1 className='text-4xl text-black text-center font-bold'>PRODUCTOS</h1>
      <ItemList productos={productos}  />

    </div>
  )
}

export default ItemListContainer