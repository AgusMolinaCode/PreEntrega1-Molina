import React from 'react'
import { Link } from 'react-router-dom'


const Item = ( {  id,title, pictureUrl } ) => {
    return (
    
        <div className=" mt-4 bg-base-100 shadow-xl w-[400px]">
            <figure className="px-10 pt-10">
            <img src={pictureUrl} alt="foto repuestos" className="rounded-xl h-[215px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions">
                    <Link to={`/item/${id}`} className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Ver más</Link>
                </div>
            </div>
        </div>
       
    )
  }

export default Item