import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

const IndiretaPai = props => {
    //useState retorna um array com 2 parametros:
    // 1º o próprio valor
    // 2º a função q irá alterar esse valor
    const [nomePai, setNome] = useState('?') 
    const [idadePai, setIdade] = useState(0)
    const [isNerdpai, setIsNerdPai] = useState(false)

    function fornecerInformacoes(nome, idade, isNerd){
        setNome(nome)
        setIdade(idade)
        setIsNerdPai(isNerd)
    }   

    return (
        <div>
            <div>Informações do Pai: </div>
            <div>Nome: {nomePai}</div>
            <div>Idade: {idadePai}</div>
            <div>É nerd: {isNerdpai ? 'Verdadeiro' : 'Falso'}</div>
                
            <IndiretaFilho onClick={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}

export default IndiretaPai
