import React from "react";
import {  Routes, Route } from "react-router-dom";

import './Content.css'
import About from '../../views/examples/About'
import Home from "../../views/examples/Home";
import Param from "../../views/examples/Param";
import NotFound from "../../views/examples/NotFound";
import Calculator from '../../views/examples/calculator/Calculador'
import Fundamentos from "../../views/examples/fundamentos do react/Fundamentos";
import HookUseState from "../../views/examples/hooks/useState/HookUseState";
import HookUseRef from "../../views/examples/hooks/useRef/HookUseRef";
import HookUseReducer from "../../views/examples/hooks/useReducer/HookUseReducer";
import HookUseContext from "../../views/examples/hooks/useContext/HookUseContext";
import HookUseMyHooks from "../../views/examples/hooks/useMyHook/HookUseMyHooks";
import HookUseMemo from "../../views/examples/hooks/useMemo/HookUseMemo";
import HookUseEffect from "../../views/examples/hooks/useEffect/HookUseEffect";
import HookUseCallback from "../../views/examples/hooks/useCallback/HookUseCallback";

const Content = _ => (
        <main className="content">
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/sobre' element={<About/>}/>
                <Route path='/param/:id' element={<Param/>}/>
                <Route path='/calculadora' element={<Calculator/>}/>
                <Route path='/fundamentos-react' element={<Fundamentos/>}/>
                <Route path='/hooks/use-state' element={<HookUseState/>}/>
                <Route path='/hooks/use-effect' element={<HookUseEffect/>}/>
                <Route path='/hooks/use-ref' element={<HookUseRef/>}/>
                <Route path='/hooks/use-memo' element={<HookUseMemo/>}/>
                <Route path='/hooks/use-call-back' element={<HookUseCallback/>}/>                
                <Route path='/hooks/use-context' element={<HookUseContext/>}/>
                <Route path='/hooks/use-reducer' element={<HookUseReducer/>}/>
                <Route path='/hooks/use-my-hook' element={<HookUseMyHooks/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>            
        </main>     
    )

export default Content
