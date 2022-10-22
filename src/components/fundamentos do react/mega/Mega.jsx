import React, { useState } from "react";

import './Mega.css'

import DisplayNumbers from "./DisplayNumbers";
import InputQtdNumbers from "./InputQtdNumbers";
import ButtonGenerate from "./ButtonGenerate";

const Mega = props => {

    const [numbersArray, setNumbersArray] = useState([0])
    const [qtdNumbers, setQtdNumbers] = useState()

    function changeQtdNumbers(number){
        setQtdNumbers(number)
    }

    function setMegaNumbers(numbers){
        setNumbersArray(numbers)
    }

    return (
        <div className='Mega'>

            <DisplayNumbers numbers={numbersArray}/>

            <InputQtdNumbers qtdNumbers={qtdNumbers} changeQtdNumbers={changeQtdNumbers}/>

            <ButtonGenerate setNumbers={setMegaNumbers} qtdNumbers={qtdNumbers}/>   
        </div>
    )
}

export default Mega
