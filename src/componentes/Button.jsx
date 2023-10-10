import React from "react"

function Botton(props){

        const esOperador=valor=>{
           // console.log(props.children)
            return isNaN(valor) && (valor!='.') &&(valor!='=')
        }

    return(
        <div 
        className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ""}`.trimEnd()}>
            {props.children}
        </div>


    )

}

export default Botton 