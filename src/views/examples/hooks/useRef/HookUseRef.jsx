import React, { useState, useRef, useEffect } from "react";

import PageTitle from "../../../../components/layout/PageTitle";
import SectionTitle from "../../../../components/layout/SectionTitle";

const merge = function(s1, s2) {
    //[...s1] retorna um array dos caracteres. ['m', 'a', 't']
    return [...s1].map((e, index) => `${e}${s2[index] || '' /* Caso seja undefined retorna nada*/}`).join('')
    // .join('') retorna o array para string
}


const UseRef = props => {

    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    
    
    //useRef retorna um objeto com a msm referencia n importando a quantida de renderização da msm tela
    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(
        function(){
            count.current++
            myInput2.current.focus()
        }, 
        [value1]
    )

    useEffect(
        function(){
            count.current++
            myInput1.current.focus()
        },
        [value2]
    )

    return(
        <div>
            <PageTitle 
                title='Hook UseRef' 
                subtitle='Retorna um objeto mutável com a propriedade .current'
            />
            
            <SectionTitle title="Exercício 01"/>
            
            <div className="center">
                <div>
                    <span className="text">Valor: {merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>

                </div>
                <input 
                    type="text" 
                    className="input" 
                    value={value1}
                    ref={myInput1}
                    onChange={e => setValue1(e.target.value)}
                />
            </div>

            <SectionTitle title='Exercício 02'/>

            <div className="center">
                
                <input 
                    type="text" 
                    className="input"
                    value={value2}
                    ref={myInput2}
                    onChange={e => setValue2(e.target.value)}
                />

            </div>

        </div>
    )
}

export default UseRef