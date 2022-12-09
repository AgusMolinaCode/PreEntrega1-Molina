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
       <div className='flex justify-center mt-10'>
            {item.map((repuesto) => {
                
                <div> 
                    <ItemDetailContainer key={repuesto.id}  {...repuesto}/>
                </div>     
            })}
            
        </div> 
    )  

}
    
    export default ItemDetail