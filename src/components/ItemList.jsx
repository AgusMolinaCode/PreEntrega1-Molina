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
       
    <div className='grid grid-cols-3 gap-2 max-w-full m-20'>
        {productos.map((producto) => {
        return(
            <Item key={producto.id}  {...producto}/>
        )    
        })}
    </div>     
      
    )
  }

export default ItemList