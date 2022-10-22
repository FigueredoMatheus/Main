import React from "react";
import alunos from '../../../data/fundamentos do react/alunos'

const ListaAlunos =  props => {

    function getTableRows () {
        return alunos.map((aluno) => {
            return (
                <li key={aluno.id}>
                    {aluno.id > 9 ? aluno.id : 0 + aluno.id}{')'} {aluno.name} - {aluno.nota}
                </li>
            )
        })
    
    }
   
    return (
        <div>
            <ul>
                {getTableRows()}
            </ul>
        </div>
    )
}

export default ListaAlunos