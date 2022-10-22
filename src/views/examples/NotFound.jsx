import React from "react";
import { useLocation } from "react-router-dom";

const NotFound = props => {
    
    let location = useLocation();

    return (
        <div>
            <h1>Error 404</h1>
            <h2>
                A URL <code>{location.pathname}</code> não foi encontrada!
            </h2>
        </div>
    )
}

export default NotFound