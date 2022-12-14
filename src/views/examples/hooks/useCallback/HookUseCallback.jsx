import React, { useState } from "react";

import PageTitle from "../../../../components/layout/PageTitle";
import SectionTitle from "../../../../components/layout/SectionTitle";

const UseCallback = props => {
    const [count, setCount] = useState(0)

    function inc(delta) {

        setCount(count + delta)
    }

    return (
        <div>

            <PageTitle 
                title='Hook UseCallback' 
                subtitle='Retorna uma função memorizada.'
            />

            <SectionTitle title='Exercício 01'/>

            <div className="center">
                <span className="text">{count}</span>

                <div>

                    <button className="btn" onClick={() => inc(6)}>+6</button>
                    <button className="btn" onClick={() => inc(12)}>+12</button>
                    <button className="btn" onClick={() => inc(18)}>+18</button>

                </div>
                
            </div>

        </div>
    )
}

export default UseCallback