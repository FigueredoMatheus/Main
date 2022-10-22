import React from "react";

const DiretaFilho = props => {
    return (
        <div>
            <div>Nome: {props.nome}</div>
            <div>Idade: {props.idade}</div>
            <div>É nerd {props.isNerd ? 'Verdadeiro' : 'Falso'}</div>
        </div>
    )
}
    
export default DiretaFilho