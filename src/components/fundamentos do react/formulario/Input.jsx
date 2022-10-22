import React, { useState } from "react";
import './input.css'

const Input = props => {
    const [valor, setValor] = useState('')

    function quandoMudar(e){
        setValor(e.target.value)
    }

    return (
        <div className="Input ">
            <h2>{valor}</h2>
           <div style={{display:'flex',flexDirection:'column'}}>
            <input  value={valor} onChange={quandoMudar} placeholder='Digite...'/>
            <input  value={valor} readOnly/>
            <input  value={undefined}/>
           </div>
        </div>
    )
}

export default Input