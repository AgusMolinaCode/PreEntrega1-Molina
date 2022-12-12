import React from 'react'
import Item from './Item'



const ItemList = ({productos}) => {

    return (
       
    <div className='flex flex-wrap justify-center gap-2 m-8'>
        {productos.map((producto) => {
        return(
            <Item key={producto.id}  {...producto}/>
        )    
        })}
    </div>     
      
    )
  }

export default ItemList