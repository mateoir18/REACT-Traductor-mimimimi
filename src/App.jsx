import { useState } from 'react'
import './App.css'
import { Traductor } from './Traductor';

function App() {
  const[texto,setTexto]=useState("");
  const cambio=(e)=>{
    setTexto(e.target.value);
  }

  return (
    <>
    <textarea onChange={cambio} value={texto}></textarea>
      <Traductor mensaje={texto}></Traductor>
    </>
  )
}

export default App
