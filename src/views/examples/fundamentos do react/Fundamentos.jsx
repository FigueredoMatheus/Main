import React from "react";

import Aleatorio from "../../../components/fundamentos do react/basicos/Aleatorio";
import Pai from "../../../components/fundamentos do react/basicos/Pai";
import Filho from "../../../components/fundamentos do react/basicos/Filho";
import Card from '../../../components/fundamentos do react/layout/Card'
import ListaAlunos from '../../../components/fundamentos do react/repeticao/ListaAlunos'
import TableProduto from "../../../components/fundamentos do react/repeticao/TableProduto";
import ParOuImpar from '../../../components/fundamentos do react/condicional/ParOuImpar';
import DiretaPai from '../../../components/fundamentos do react/comunicacao/DiretaPai';
import IndiretaPai from '../../../components/fundamentos do react/comunicacao/IndiretaPai';
import Input from '../../../components/fundamentos do react/formulario/Input'
import Contador from '../../../components/fundamentos do react/contador/Contador'
import Mega from '../../../components/fundamentos do react/mega/Mega'

const Fundamentos = props  => {
    return (
        <div className='fundamentos'>
            
            <div className='cards'>

                <Card title='Número aleatório entre dois valores' color=''>
                    <Aleatorio max={100} min={10} />
                </Card>

                <Card title='Passando paramentros para os filhos - multiplos elementos' color=''>
                    <Pai fatherName='Matheus' fatherLastName='Truta'>
                        <Filho name="Ricardo"/>
                        <Filho name="Lucas"/>
                        <Filho name="Maria"/>
                        <Filho name="Sara"/>
                    </Pai>
                </Card>

                <Card title="Repetição - Lista de alunos">
                    <ListaAlunos />
                </Card>

                <Card title="Repetição - Tabela de Produtos">
                    <TableProduto />
                </Card>

                <Card title="Renderização condicional - Par ou Impar">
                    <ParOuImpar numero={2}/>
                </Card>

                <Card title="Comunicação Direta">
                    <DiretaPai></DiretaPai>
                </Card>

                <Card title="Comunicação Indireta - Componente com estado">
                    <IndiretaPai></IndiretaPai>
                </Card>

                <Card title="Component constrolado - Input">
                    <Input></Input>
                </Card>

                <Card title="Component baseado em classe">
                    <Contador valorInicial={1}></Contador>
                </Card>

                <Card title="Gerar números Mega Sena">
                    <Mega />
                </Card>
            </div>
        </div>

    )
}

export default Fundamentos