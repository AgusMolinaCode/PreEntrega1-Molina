import React from 'react'
import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/Navbar"

function App() {
  
  return(
    <>
      <Navbar />
      <ItemListContainer greeting='Hola Coder'/>
    </>   
  )
}

export default App
