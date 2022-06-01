import './App.css';
import FormularioCadastro from './Components/FormularioCadastro/FormularioCadastro'
import { Container, Typography } from '@material-ui/core';
import React, { Component, Fragment } from 'react';
import {validaCPF, validaSenha, validaNome} from './models/cadastro'
import ValidacoesCadastro from './contexts/ValidacoesCadastro';

class App extends Component {
  render() {
    return (
        <Container component="article" maxWidth="sm">
          <Typography variant="h4" component="h1" gutterBottom align="center">
              Formulário de Cadastro
          </Typography>
          <ValidacoesCadastro.Provider value={{cpf:validaCPF,senha:validaSenha, nome:validaNome}}>
            <FormularioCadastro aoEnviar={aoEnviarFormulario}/>
          </ValidacoesCadastro.Provider>
        </Container>
    )
  }
}

function aoEnviarFormulario(data){
  console.log(data)
}



export default App;
