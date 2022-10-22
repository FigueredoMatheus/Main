import React from "react";

const DisplayNumbers = props => {
    
    function numeros(){
       return props.numbers.map(
            (numero, index) => {
                return (
                <span key={index}>{numero < 10 ? '0' + numero : numero} {index < props.numbers.length-1 ? '-': ''} </span>

                )
            }
        )        
    }

    return (
        <div className='DisplayNumbers'>
            {numeros()} 
        </div>
    )
}

export default DisplayNumbers