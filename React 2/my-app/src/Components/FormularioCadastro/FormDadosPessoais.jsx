import React, {useState, useContext} from 'react'
import {Button, TextField, Switch, FormControlLabel} from '@material-ui/core/'
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro'
import useErros from '../../hooks/useErros'


function FormDadosPessoais(props){
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCpf] = useState("")
    const [promocoes, setPromocoes] = useState(true)
    const [novidades, setNovidades] = useState(false)

    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validaCampos, validaEnvio] = useErros(validacoes)
    

    

    return(
        <form onSubmit={(event) =>{
            event.preventDefault()
            if(validaEnvio()){
                props.aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
            }   
        }}>
            <TextField id="nome" name="nome" label="Nome"  required fullWidth variant="outlined" margin="normal" value={nome}
                onChange={(event) => {
                    setNome(event.target.value)
                }}
                onBlur={validaCampos}

                error = {!erros.nome.valido}
                helperText = {erros.nome.texto}
            />

            <TextField id="sobrenome" label="Sobrenome" required fullWidth variant="outlined" margin="normal" value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value)
                }}
            />

            <TextField id="cpf" name="cpf" label="CPF" required fullWidth variant="outlined" margin="normal" value={cpf} 
                onChange={(event) => {
                    setCpf(event.target.value)
                }}

                error = {!erros.cpf.valido}
                helperText = {erros.cpf.texto}

                onBlur={validaCampos}
            />

            <FormControlLabel label="Promoções" control={<Switch onChange={(event)=>{
                setPromocoes(event.target.checked)
            }} name="promocoes" checked={promocoes}  color="primary"/>}/>

            <FormControlLabel label="Novidades" control={<Switch onChange={(event)=>{
                setNovidades(event.target.checked)
            }} name="novidades" checked={novidades}  color="primary"/>}/>
             
            
            <Button type="submit" variant="contained" color="primary">Próxima etapa</Button>
        </form>
    )
}



export default FormDadosPessoais