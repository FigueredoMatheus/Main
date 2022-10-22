import React from "react";


const Pai = props => {
    return (
        <div>
            <h2>Pai: {props.fatherName} {props.fatherLastName}</h2>
            <hr />
            <h3>Filhos:</h3> 

            {/*{React.cloneElement(props.children, props)} Somente isso quando for so um filho*/}
            {React.Children.map(props.children, (child) => {
                return React.cloneElement(child, props)
            })}
        </div>
    )
}

export default Pai
