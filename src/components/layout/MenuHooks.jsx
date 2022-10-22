import { Link } from "react-router-dom";
import './MenuHooks.css'

const MenuHooks = props => {
    const isHooksItemCollaps = props.isHooksItemCollaps
    const setShowHooksItems = props.funcShowHooksItem

    return (
        <div className={`expansion-itens  ${isHooksItemCollaps ? '' : 'item-active'}`}>

            <div className='menu-link' 
                onClick={() => setShowHooksItems()}>

                <span>Hooks</span>

                <span className="arrow-icon"></span>
           
            </div>

            {
                isHooksItemCollaps ? <div></div> : 
                    <div >
              
                        <li>
                            <Link className="menu-link expansion-itens-body" 
                                to="/hooks/use-state">
                                    UseState()
                            </Link>
                        </li>

                        <li>
                            <Link className="menu-link expansion-itens-body" 
                                to="/hooks/use-effect">
                                    UseEffect()
                            </Link>
                        </li>

                        <li>
                            <Link className="menu-link expansion-itens-body" 
                                to="/hooks/use-ref">
                                    UseRef()
                            </Link>
                        </li>

                        <li>
                            <Link className="menu-link expansion-itens-body" 
                                to="/hooks/use-memo">
                                    UseMemo()
                            </Link>
                        </li>

                        <li>
                            <Link className="menu-link expansion-itens-body" 
                                to="/hooks/use-call-back">
                                    UseCallback()
                            </Link>
                        </li>

                        <li>
                            <Link className="menu-link expansion-itens-body" 
                                to="/hooks/use-context">
                                    UseContext()
                            </Link>
                        </li>

                        <li>
                            <Link className="menu-link expansion-itens-body" 
                                to="/hooks/use-reducer">
                                    UseReducer()
                            </Link>
                        </li>

                        <li>
                            <Link className="menu-link expansion-itens-body" 
                                to="/hooks/use-my-hook">
                                    UseMyHook()
                            </Link>
                        </li>

           </div>
        }   

   </div>

    )
}

export default MenuHooks