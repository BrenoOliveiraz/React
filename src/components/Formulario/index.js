import { useState } from 'react'
import { Botao } from '../Botao'
import CampoTxt from '../CampoTexto'
import { ListaSuspensa } from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const times = ['time1', 'time2']

    const click = (event) => {
        event.preventDefault()
        props.colabAdd = {nome, cargo, imagem, time}
    }
    
    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState("")


    return (

        <form onSubmit={click} className='form'>
            <CampoTxt
                aoDigitar={valor => setNome(valor)}
                valor={nome}
                label='Nome'
            />

            <CampoTxt
                aoDigitar={valor => setCargo(valor)}
                valor={cargo}
                label="Cargo"

            />

            <CampoTxt
                aoDigitar={valor => setImagem(valor)}
                valor={imagem}
                label='Imagem'
            />

            <ListaSuspensa
                aoDigitar={valor => setTime(valor)}
                itens={props.times}
                valor={time}
                label='Times'
               

            />

            <Botao>

                Clique Aqui
            </Botao>
        </form>
    )
}

export default Formulario