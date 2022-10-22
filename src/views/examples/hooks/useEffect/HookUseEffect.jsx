import React, { useState, useEffect } from "react";
import PageTitle from "../../../../components/layout/PageTitle";
import SectionTitle from "../../../../components/layout/SectionTitle";
function calcFatorial(n){
    const num = parseInt(n)
    if(num < 0) return -1
    if(num === 0) return 1

    return calcFatorial(n - 1) * n
}

const UseEffect = props => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [status, setStatus] = useState('Impar')

    // Primeiro parametro é a função que sera chamado
    // O segundo paramento são os valores que, quando alterados, chamam o primeiro parametro
        useEffect(
            function(){
                setFatorial(calcFatorial(number))
            },
            [number]
        )

        useEffect(
            function(){
                if(number % 2 === 1){
                    setStatus('Impar')
                }else{
                    setStatus('Par')
                }
            }, [number]
        )
    
    return(
        <div>

            <PageTitle 
                title='Hook UseEffect' 
                subtitle='Permite executar efeitos colaterais em componentes funcionais'
            />

            <SectionTitle title="Exercício 01"/>

            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'Inexistente' : fatorial}</span>
                </div>
                <input 
                    type="number" 
                    className="input" 
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                />

            </div>

            <SectionTitle title="Exercício 02"/>

          <div className="center">
              <div>
                  <span className="text">O número <strong>{number}</strong> é: </span>
                  <span className="text red">{status}</span>
              </div>
          </div>
        
        </div>
    )
}

export default UseEffect