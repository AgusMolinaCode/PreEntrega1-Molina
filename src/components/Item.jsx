import React from 'react'
import { Link } from 'react-router-dom'


const Item = ( {  id,title, pictureUrl } ) => {
    return (
    
        <div className=" mt-4 bg-base-100 shadow-xl w-[550px] h-[550px]">
            <figure className="px-10 pt-10 w-[550px] h-[400px]">
            <img src={pictureUrl} alt="foto repuestos" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions">
                    <Link to={`/item/${id}`} className="btn btn-primary">Ver más</Link>
                </div>
            </div>
        </div>
       
    )
  }

export default Item