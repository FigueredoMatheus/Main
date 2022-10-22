import React from "react";


const Primeiro = props => {
    const msg = "Bem vindo!" //Tem que ter esse const
    return (
        <div>
            
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <p>Mensagem: { msg }</p>
            
        </div>
    )
}

export default Primeiro
