import React from 'react'

const Item = ( {  title, pictureUrl } ) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
        <img src={pictureUrl} alt="foto repuestos" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <div className="card-actions">
                <button className="btn btn-primary">Ver más</button>
            </div>
        </div>
    </div>
    )
  }

export default Item