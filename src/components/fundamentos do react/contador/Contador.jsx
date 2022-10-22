import React from "react";

import './Contador.css'

import Display from "./Display";
import InputPasso from "./InputPasso";
import Buttons from "./Buttons";

class Contador extends React.Component {
    state = {
        numero: this.props.valorInicial || 0,
        passo: this.props.passo || 1
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    clear = () => {
        this.setState({
            numero: 0,
            passo: 1
        })
    }

    changePasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }

    render(){
        return(
            <div className="Contador">
                <h2>Contador</h2>

                <Display numero={this.state.numero}/>

                <InputPasso passo={this.state.passo} changePasso={this.changePasso}/>

                <Buttons inc={this.inc} dec={this.dec} clear={this.clear}/>

            </div>
        )
    }

}

export default Contador