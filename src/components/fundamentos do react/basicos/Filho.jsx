import React from "react";

const Filho = props => {
    return (
        <div>
          <ul>
            <li>
            {props.name} {props.fatherLastName}
            </li>
          </ul>
        </div>
    )
}

export default Filho