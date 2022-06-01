import React, {useState, useEffect} from 'react'
import {Button, TextField, Switch, FormControlLabel, Typography, Stepper, Step, StepLabel} from '@material-ui/core/'
import FormDadosPessoais from './FormDadosPessoais'
import FormDadosUsuario from './FormDadosUsuario'
import FormDadosEntrega from './FormDadosEntrega'


function FormularioCadastro(props){    

    const [etapaAtual, setEtapaAtual] = useState(0)
    const [dadosColetados, setDadosColetados] = useState({})

    // ações de ciclo de vida
    useEffect(() => {
        if(etapaAtual === formularios.length-1){
            props.aoEnviar(dadosColetados)
        }
    })

    const formularios = [
        <FormDadosUsuario aoEnviar={getDados}/>,
        <FormDadosPessoais aoEnviar={getDados}/>,
        <FormDadosEntrega aoEnviar={getDados}/>,
        <Typography variant="h5" style={{textAlign:'center'}}>Cadastro realizado com sucesso.</Typography>
    ]

    function getDados(dados){
        setDadosColetados({...dadosColetados, ...dados})
        proximaEtapa()
    }

    function proximaEtapa(){
        setEtapaAtual(etapaAtual+1)
    }

    return(
        <>  
            <Stepper activeStep={etapaAtual}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Entrega</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            {formularios[etapaAtual]}
        </>
    )
}





export default FormularioCadastro