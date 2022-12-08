import React from 'react'
import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/Navbar"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetail from './components/ItemDetail'
import ItemDetailContainer from './components/ItemDetailContainer'



function App() {
  
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>} /> 
        <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} /> 
        <Route path='/item/:id' element={<ItemDetailContainer/>} /> 
      </Routes>
    </BrowserRouter>   
  )
}

export default App
