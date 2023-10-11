import React from "react"
import "../stylesheet/ButtonClear.css"

function ButtonClear(props){


    return(
        <div className="boton-clear"
        onClick={()=>props.manejarClear()}>
            {props.children}
        </div>


    )

}

export default ButtonClear 