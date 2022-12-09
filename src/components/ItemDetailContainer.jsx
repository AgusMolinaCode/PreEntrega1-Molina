import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from './itemCount'
import { PRODUCTOS } from '../data/PRODUCTOS'

const ItemDetailContainer = () => {

  const [item, setItem] = useState({})
  const { id } = useParams()

  useEffect(() => {
    getItemDetail().then( res => {
        setItem( res )
    })
  }, [ id ])
  
  const getItemDetail = () => {
    return new Promise( (resolve, reject) => {
      const item = PRODUCTOS.find( p => p.id == id )
      setTimeout(() => {
          resolve( item )
      }, 200);
    })
  }

  return (
    <>
      <h1 className='text-4xl text-red-600 text-center'>DETALLE</h1>
    
      <div className=" grid col-auto w-[800px] m-auto mt-5 rounded-xl shadow-2xl">
        <img className='' src={item.pictureUrl} alt="repuestos" />
        <div className="bg-red-100 text-center m-2 rounded-xl">
            <h2 className="font-bold uppercase text-xl">{item.title}</h2>
            <p>Descripcion: {item.description}</p>
            <p>Precio: {item.price}</p>
            <p> Stock: {item.stock}</p>
            <p>Categoria: {item.categoriaId}</p>
            <ItemCount {...item} />
        </div>
      </div>
    </>
    
  )
}

export default ItemDetailContainer