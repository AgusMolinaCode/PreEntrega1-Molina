import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'

const PISTONES = [
    { id: 1,
      title: 'Kit piston CRF450R',
      description:'Kit piston completo para  CRF450R 2008-2013',
      price:'30000',
      pictureUrl: '../../public/3.jpg'
    },
    { id: 2,
      title: 'Kit Biela YZ250F',
      description:'Kit biela completo para  YZ250F 2015-2017',
      price:'38000', 
      pictureUrl: '../../public/2.jpg'
    },
    { id: 3,
      title: 'Cadena distribucion RMZ250',
      description:'Cadena distribucion RMZ250 2018-2019',
      price:'9000',
      pictureUrl: '../../public/1.jpg'
    },
]

const ItemDetailContainer = () => {

    const [item, setItem] = useState( [] )
  
    useEffect(() => {
      obtenerProducto()
        .then( response => {
            console.log(response);
            setItem( response )
        })
    }, [])
  
    const obtenerProducto = () => {
      return new Promise( (resolve, reject) => {
          setTimeout( () => {
              resolve( PISTONES )
          }, 2000)
      })
    }
  


    return (
       <div>
            {item.map((repuesto) => {
                return(
                    
                    <ItemDetail key={repuesto.id}  {...repuesto}/>
                
                )    
            })}
            
        </div> 
    )  

}
    
    export default ItemDetailContainer