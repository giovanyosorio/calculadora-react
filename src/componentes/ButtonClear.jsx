import React from "react"
import "../stylesheet/ButtonClear.css"

function ButtonClear(props){


    return(
        <div className="boton-clear"
        onClick={()=>props.manejarClick()}>
            {props.children}
        </div>


    )

}

export default ButtonClear 