import React from "react";

const InputPasso = props => {

    return(
        <div>
            <label htmlFor="Passoinput">Passo: </label>

            <input id='Passoinput' type='number' 
               value={props.passo} 
               onChange={e => props.changePasso(+e.target.value)}/>

        </div>
    )
}

export default InputPasso
