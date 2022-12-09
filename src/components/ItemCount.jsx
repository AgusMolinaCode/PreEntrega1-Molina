import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock}) => {
    
    const [cantidad, setCantidad] = useState(1)
  
    function onAdd() {
        if (cantidad >= 5) return
        setCantidad(cantidad + 1)
    }

    return (
    <>    
        <div className='flex gap-4 mt-5 justify-center'>
            <h1> stock:{stock}</h1>
            <button type='button'
                    onClick={() => {
                        if (cantidad <= 1) return
                        setCantidad(cantidad - 1)
                    }}
            >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>
            </button>
            
            <p className='text-3xl'>{cantidad}</p>

            <button type='button'
                    onClick={() => {
                        onAdd()
                    }}
            >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" /></svg>
            </button>
        </div>
        <div className='mt-3 flex justify-center'>
            <button type='button' className='btn uppercase font-bold bg-cyan-700 hover:bg-cyan-900'>Comprar</button>
        </div>
    </>    
  )
}

export default ItemCount