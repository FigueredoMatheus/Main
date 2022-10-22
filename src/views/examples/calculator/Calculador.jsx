import React, { Component } from "react";
import './Calculator.css'

import Button from "../../../components/calculator/button/Button";
import Display from "../../../components/calculator/display/Display";
import DisplayOperations from "../../../components/calculator/displayOperations/DisplayOperations";
import operations from "../../../data/calculator/Operations";
import endsWithOperation from'../../../data/calculator/EndsWith';

const initialState = {
    displayValue: '0',
    displayOperations: '',
    clearDisplayOperations: false,
    clearDisplay: false,
    operation: null,
    valueDigited: false,
    values:[0, 0],
    current: 0,
}


export default class Calculator extends Component {

    state = { ...initialState} 


    constructor(props){
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory(){
        this.setState({ ...initialState})
    }

    setOperation(operation){

        if(!this.state.valueDigited){
            return
        }

        if((this.state.current === 0 && operation === '=') 
            || (endsWithOperation(this.state.displayOperations) && operation === '=')){
            return
        }

        if(endsWithOperation(this.state.displayOperations)){
            let removeLastOperation =  this.state.displayOperations.slice(0, -1)
            removeLastOperation = removeLastOperation + operation
            
            this.setState({
                operation,
                displayOperations: removeLastOperation 
            })
            return
        }
        
        this.setState({
            displayOperations: 
                this.state.displayOperations + operation
        })

        if(this.state.current === 0){
            this.setState({
                operation, 
                current: 1, 
                clearDisplay: true,
                clearDisplayOperations:false,
            })
        }else {
            const equals = operation === '='

            const currentOperation = this.state.operation

            const values = [...this.state.values]

            values[0] = 
                operations(currentOperation, values[0], values[1])
            
            values[1] = 0
        
            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: true,
                clearDisplayOperations: equals,
                values,
                valueDigited: !equals,
            })
            
        }


    }

    addDigit(n){
        if(n === '.' && this.state.displayValue.includes('.')){
            return;
        }

        const displayOperations = this.state.clearDisplayOperations ? n 
            : this.state.displayOperations + n
        
        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay

        const currentValue = clearDisplay ? '' 
            : this.state.displayValue
        
        const displayValue = currentValue + n

        this.setState({
            displayValue: displayValue, 
            clearDisplay: false, 
            displayOperations,
            valueDigited:true,
        })

        if(n !== '.'){
            const i = this.state.current

            const newValue = parseFloat(displayValue)

            const values = [...this.state.values]

            values[i] = newValue

            this.setState({values})
        }

    }

    render(){
        return (
           <div className="center">
                <div className='calculator'>
                    <Display value={this.state.displayValue}/>
                    <DisplayOperations operations={this.state.displayOperations}/>
                    <Button label='AC' click={this.clearMemory} triple/>
                    <Button label='/' click={this.setOperation} operation/>
                    <Button label='7' click={this.addDigit}/>
                    <Button label='8' click={this.addDigit}/>
                    <Button label='9' click={this.addDigit}/>
                    <Button label='*' click={this.setOperation} operation/>
                    <Button label='4' click={this.addDigit}/>
                    <Button label='5' click={this.addDigit}/>
                    <Button label='6' click={this.addDigit}/>
                    <Button label='-' click={this.setOperation} operation/>
                    <Button label='1' click={this.addDigit}/>
                    <Button label='2' click={this.addDigit}/>
                    <Button label='3' click={this.addDigit}/>
                    <Button label='+' click={this.setOperation} operation/>
                    <Button label='0' click={this.addDigit} double/>
                    <Button label='.' click={this.addDigit}/>
                    <Button label='=' click={this.setOperation} operation/>
                </div>
           </div>
        )
    }
}