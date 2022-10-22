import React from "react";


const Aleatorio =  props => {
    const { min, max } = props
    const randomValue = Math.floor(Math.random() * (max - min) + min)
    return (
    <div>
        <h3>Valor Mínimo: {props.min}</h3>  
        <h3>Valor Máximo: {props.max}</h3>
        <h4>Resultado: {randomValue}</h4>
    </div>
    )
}

export default Aleatorio