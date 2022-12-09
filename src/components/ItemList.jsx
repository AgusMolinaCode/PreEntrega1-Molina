import React, {useEffect, useState} from 'react'
import Item from './Item'
import { PRODUCTOS } from '../data/PRODUCTOS'


const ItemList = () => {

    const [productos, setProductos] = useState( [] )
  
    useEffect(() => {
      obtenerProductos()
        .then( response => {
          setProductos( response )
        })
    }, [])
  
    const obtenerProductos = () => {
      return new Promise( (resolve, reject) => {
          setTimeout( () => {
              resolve( PRODUCTOS )
          }, 500)
      })
    }
  


    return (
       
    <div className='flex flex-wrap justify-center gap-2  m-10'>
        {productos.map((producto) => {
        return(
            <Item key={producto.id}  {...producto}/>
        )    
        })}
    </div>     
      
    )
  }

export default ItemList