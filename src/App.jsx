
import logoFreeCodeCamp from "../src/imagenes/freecodecamp-logo.png"
import './App.css'
import Button from"./componentes/Button"
import Pantalla from"./componentes/Pantalla"
import ButtonClear from"./componentes/ButtonClear"
import { useState } from "react"


function App() {

    const [input,setInput]=useState("");

    const agregarInput=valor=>{
      setInput(input+valor)
    }
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
          <img src={logoFreeCodeCamp} className="freecodecamp-logo" alt="logo freecodecamp" />
      </div>

      <div className="contenedor-calculadora">
      <Pantalla input={input}/>
        <div className="fila">
          <Button manejarClick={agregarInput}>1</Button>
          <Button manejarClick={agregarInput}>2</Button>
          <Button manejarClick={agregarInput}>3</Button>
          <Button manejarClick={agregarInput}>+</Button>
        </div>
        <div className="fila">
          <Button manejarClick={agregarInput}>4</Button>
          <Button manejarClick={agregarInput}>5</Button>
          <Button manejarClick={agregarInput}>6</Button>
          <Button manejarClick={agregarInput}>-</Button>
        </div>
        <div className="fila">
          <Button manejarClick={agregarInput}>7</Button>
          <Button manejarClick={agregarInput}>8</Button>
          <Button manejarClick={agregarInput}>9</Button>
          <Button manejarClick={agregarInput}> *</Button>
        </div>
        <div className="fila">
          <Button manejarClick={agregarInput}>=</Button>
          <Button manejarClick={agregarInput}>0</Button>
          <Button manejarClick={agregarInput}>.</Button>
          <Button manejarClick={agregarInput}>/</Button>
        </div>
        <div className="fila">
          <ButtonClear>
            Clear
          </ButtonClear>
        </div>
      </div>

    </div>
    
  )
}

export default App
