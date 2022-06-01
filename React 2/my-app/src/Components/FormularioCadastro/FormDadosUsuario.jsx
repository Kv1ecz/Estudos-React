import React, { useState, useContext } from 'react'
import {Button, TextField, Switch, FormControlLabel} from '@material-ui/core/'
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro'
import useErros from '../../hooks/useErros'

function FormDadosUsuario(props){

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const validacoes = useContext(ValidacoesCadastro)

    const [erros, validaCampos, validaEnvio] = useErros(validacoes)


    return(
       <form onSubmit={(e)=>{
           e.preventDefault()

           if(validaEnvio()){
                props.aoEnviar({email, senha})
           }
       }}>
            <TextField value={email} name="email" id="email" label="E-mail" type="email" required fullWidth variant="outlined" margin="normal"
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
            />
            <TextField value={senha} name="senha" id="password" label="Senha" type="password" required fullWidth variant="outlined" margin="normal"
                onChange={(e)=>{
                    setSenha(e.target.value)
                }}

                error = {!erros.senha.valido}
                helperText = {erros.senha.texto}

                onBlur={validaCampos}
            />
            <Button type="submit" variant="contained" color="primary">Próxima etapa</Button>
       </form>
    )
}

export default FormDadosUsuario