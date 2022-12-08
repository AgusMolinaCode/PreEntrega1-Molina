import React, {useEffect, useState} from 'react'
import ItemDetailContainer from './ItemDetailContainer'
import { PRODUCTOS } from '../data/PRODUCTOS'

const ItemDetail = () => {

    const [item, setItem] = useState( [] )
  
    useEffect(() => {
      obtenerProducto()
        .then( response => {
            setItem( response )
        })
    }, [])
  
    const obtenerProducto = () => {
      return new Promise( (resolve, reject) => {
          setTimeout( () => {
              resolve( PRODUCTOS )
          }, 500)
      })
    }
  


    return (
       <div className='grid grid-cols-3 gap-2 max-w-full m-10'>
            {item.map((repuesto) => {
                
                    
                    <ItemDetailContainer key={repuesto.id}  {...repuesto}/>
                
                   
            })}
            
        </div> 
    )  

}
    
    export default ItemDetail