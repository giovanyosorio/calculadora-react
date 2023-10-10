
import logoFreeCodeCamp from "../src/imagenes/freecodecamp-logo.png"
import './App.css'
import Button from"./componentes/Button"
function App() {

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
          <img src={logoFreeCodeCamp} className="freecodecamp-logo" alt="logo freecodecamp" />
      </div>

      <div className="contenedor-calculadora">
        <div className="fila">

        <Button>1</Button>
        <Button>+</Button>
        </div>
      </div>
    </div>
    
  )
}

export default App
