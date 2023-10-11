
import logoFreeCodeCamp from "../src/imagenes/freecodecamp-logo.png"
import './App.css'
import Button from"./componentes/Button"
import Pantalla from"./componentes/Pantalla"
import ButtonClear from"./componentes/ButtonClear"
import { useState } from "react"

import {evaluate} from "mathjs"


function App() {

    const [input,setInput]=useState("");


    const agregarInput=valor=>{
      setInput(input+valor)
    }

    const limpiarInput=()=>{
      setInput("")
    }

    const calcularResultado=()=>{
      if(input){
        setInput(evaluate(input))
      } else{
        alert("ingrese valores para realizar los calculos")
      }

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
          <Button manejarClick={calcularResultado}>=</Button>
          <Button manejarClick={agregarInput}>0</Button>
          <Button manejarClick={agregarInput}>.</Button>
          <Button manejarClick={agregarInput}>/</Button>
        </div>
        <div className="fila">
          <ButtonClear manejarClear={limpiarInput}>
            Clear
          </ButtonClear>
        </div>
      </div>

    </div>
    
  )
}

export default App
