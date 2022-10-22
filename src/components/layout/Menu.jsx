import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Menu.css'

import MenuHooks from "./MenuHooks";

const Menu = props => {

    const [isHooksItemCollaps, showHooksItems] = useState(true)


    function setShowHooksItems(){
        showHooksItems(!!!isHooksItemCollaps)
        console.log(isHooksItemCollaps)
    }

    return(
        <aside className="menu">
            <nav>
                <ul>
                    <li>
                        <Link className="menu-link" to="/">Início</Link>
                    </li>
                    <li>
                        <Link className="menu-link" to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link className="menu-link" to="/param/01">Param #01</Link>
                    </li>
                    <li>
                        <Link className="menu-link" to="/param/02">Param #02</Link>
                    </li>
                    <li>
                        <Link className="menu-link" to="/calculadora">Calculadora</Link>
                    </li>
                    <li>
                        <Link className="menu-link" to="/fundamentos-react">Fudamentos React</Link>
                    </li>
                    <li>    
                        <MenuHooks funcShowHooksItem={setShowHooksItems} 
                            isHooksItemCollaps={isHooksItemCollaps}/>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
//<a className="menu-link" href="" onClick={() => setShowHooksItems} >Hooks</a>
export default Menu