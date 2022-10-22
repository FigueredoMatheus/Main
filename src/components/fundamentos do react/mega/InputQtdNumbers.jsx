import React from "react";

const InputQtdNumbers = props => {

    return (
        <div className='InputQtdNumbers'>
            
            <label htmlFor="QtdNumbers">Quantidade (1-10):</label>

            <input id='QtdNumbers' type='number' min='1' max='10'
                value={props.qtdNumbers} 
                onChange={e => {props.changeQtdNumbers(+e.target.value)}}
            />

        </div>
    )
}

export default InputQtdNumbers
