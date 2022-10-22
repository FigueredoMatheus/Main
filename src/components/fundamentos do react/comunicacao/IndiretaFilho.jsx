import React from "react";
 

const IndiretaFilho = props => {
    const min = 30
    const max = 65
    const generateIdade = () => parseInt(Math.random() * (max - min)) + min

    return (
        <div>
             <div>
                Filho
            </div>

            <button onClick={e => props.onClick('Matheus', generateIdade, true)}>
                Fornecer informação para o pai
            </button>

        </div>
    )
}

export default IndiretaFilho