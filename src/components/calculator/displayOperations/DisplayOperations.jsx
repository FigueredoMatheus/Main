import React from "react";

import './DisplayOperations.css'

const DisplayOperations = props => {
    return(
        <div className="displayOperations">
            {props.operations}
        </div>
    )
}

export default DisplayOperations