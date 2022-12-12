import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTOS } from '../data/PRODUCTOS'
import ItemList from './ItemList'
import Spinner from './Spinner'


const ItemListContainer = () => {

  const [productos, setProductos] = useState( [] )
  const [cargando,setCargando] = useState(false)
  const {categoriaId}= useParams()
  
    useEffect(() => {
      setCargando(true)
      obtenerProductos()
        .then( response => {
          if(categoriaId){
            setProductos(response.filter((prod)=> prod.categoriaId === categoriaId))
          }else{

            setProductos( response )
          }
          setCargando(false)
        })
        
    }, [categoriaId])
  
    const obtenerProductos = () => {
      return new Promise( (resolve, reject) => {
          setTimeout( () => {
              resolve( PRODUCTOS )
          }, 1500)
      })
    }
  
  return (
    <div>
      <div>
        <img className=' m-auto w-[1000px] h-[300px]' src="../../public/I.jpg" alt="" />
      </div>
      <h1 className='text-4xl text-black text-center font-bold underline decoration-double'>PRODUCTOS</h1>
      
      <div>
        {cargando ? <Spinner className='flex justify-center m-auto text-center' />  : (<ItemList productos={productos}  />)
        }
      </div>
    </div>
  )
}

export default ItemListContainer