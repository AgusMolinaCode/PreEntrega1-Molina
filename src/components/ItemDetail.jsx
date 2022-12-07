import React from 'react'

const ItemDetail = ({ price,description,title,pictureUrl }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={pictureUrl} alt="repuestos" /></figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <p>{price}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail