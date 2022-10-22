import React from "react";

import produto from "../../../data/fundamentos do react/produto";
import './TableProduto.css'

const TableProduto = props => {

    function getTableBody() {
        return produto.map((produto, index) => {
            return (
                <tr key={produto.id} className={index % 2 === 0 ? 'par' : 'impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.name}</td>
                    <td>{produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }    

    return (
        <div className="table-produtos">

            <table >
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Nome
                        </th>
                        <th>
                            Preço
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {getTableBody()}
                </tbody>
            </table>

        </div>
    )
}

export default TableProduto
