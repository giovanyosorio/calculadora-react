
import logoFreeCodeCamp from "../src/imagenes/freecodecamp-logo.png"
import './App.css'
import Button from"./componentes/Button"
import Pantalla from"./componentes/Pantalla"
import ButtonClear from"./componentes/ButtonClear"
function App() {

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
          <img src={logoFreeCodeCamp} className="freecodecamp-logo" alt="logo freecodecamp" />
      </div>

      <div className="contenedor-calculadora">
      <Pantalla/>
        <div className="fila">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className="fila">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className="fila">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </div>
        <div className="fila">
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>
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
