import React from "react";
import './Card.css'

const Card = props => {
    const style = {
        backgroundColor: props.color || 'rgb(121, 0, 0)'
    }
    return (
        <div className='card' style={style}>

            <h2 className='title'>{props.title}</h2>

            <div className='content'>
                {props.children}
            </div>

        </div>
    )
}

export default Card
