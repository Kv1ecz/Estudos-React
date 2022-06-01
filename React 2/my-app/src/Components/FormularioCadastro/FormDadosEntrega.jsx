import React from 'react';
import {Button, TextField, Switch, FormControlLabel} from '@material-ui/core/'
import { useState } from 'react';

function FormDadosEntrega(props){
    const [cep, setCep] = useState(0)
    const [estado, setEstado] = useState("")
    const [cidade, setCidade] = useState("")
    const [endereco, setEndereco] = useState("")
    const [numero, setNumero] = useState(0)


    return(
        <form onSubmit={(e)=>{
            e.preventDefault()
            props.aoEnviar({cep, estado, cidade, endereco, numero})
        }}>
            <TextField value={cep} name="cep" id="cep" label="CEP" type="number" required fullWidth variant="outlined" margin="normal"
                onChange={(e)=>{
                    setCep(e.target.value)
                }}
            />
            <TextField value={estado} name="estado" id="estado" label="Estado" required  variant="outlined" margin="normal"
                onChange={(e)=>{
                    setEstado(e.target.value)
                }}
            />
            <TextField value={cidade} name="cidade" id="cidade" label="Cidade" required  variant="outlined" margin="normal"
                onChange={(e)=>{
                    setCidade(e.target.value)
                }}
            />
            <TextField value={endereco} name="endereco" id="endereco" label="Endereço" required fullWidth variant="outlined" margin="normal"
                onChange={(e)=>{
                    setEndereco(e.target.value)
                }}
            />
            <TextField value={numero} name="numero" id="numero" label="Número" type="number" required variant="outlined" margin="normal"
                onChange={(e)=>{
                    setNumero(e.target.value)
                }}
            />
        
            <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar cadastro</Button>
        </form>
    )
}

export default FormDadosEntrega