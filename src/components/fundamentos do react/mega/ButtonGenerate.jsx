import React from "react";

const ButtonGenerate = props => {

    const generateNumbers = () => {
        var qtd = props.qtdNumbers
        const array = []

        if( props.qtdNumbers > 10){
            qtd = 10
        }else if(props.qtdNumbers < 1){
            qtd = 1
        }
        
        for(var i = 0; i < qtd; i++){
            do{
                var n = parseInt(Math.random() * (60 - 1)) + 1

            }while(array.includes(n))

            array.push(n)
        }

        return array.sort(ordernar)
    }

    function ordernar(a, b){
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;   
    }
    
    return (
        <div className='ButtonGenerate'>
            
            <button onClick={e => props.setNumbers(generateNumbers)}>Gerar</button>
           
        </div>
    )
}

export default ButtonGenerate
