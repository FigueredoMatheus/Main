import React from "react";

const ParOuImpar = props => {
    const isPart = props.numero % 2 === 0
    return (
        <div>
            {
                isPart ? 
                <span>Par</span> :
                <span>Imapar</span>
            }
        </div>
    )
}

export default ParOuImpar
