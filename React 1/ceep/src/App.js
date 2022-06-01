import React, { Component } from 'react';
import {FormNota, ListaDeNotas, ListaDeCategorias} from './components'

import "./assets/App.css";
import './assets/index.css';

import Categorias from './data/Categorias'
import ArrayNotas from './data/Notas'

class App extends Component{

  constructor(){
    super()
    this.categorias = new Categorias()
    this.notas = new ArrayNotas()
  }


  render(){
    return (
      <section className="conteudo">
        {/*Cria uma propriedade para o formulario e a recebe via construtor*/}
        <FormNota criarNota={this.notas.adicionarNota.bind(this.notas)} categorias={this.categorias}/>
        
        <main className="main-content">
          <ListaDeCategorias categorias={this.categorias} adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}/>
          <ListaDeNotas notas={this.notas} apagarNota={this.notas.deletarNota.bind(this.notas)}/>
        </main>  
        
      </section>
    );
  }
}

//react -> lib
//React -> ecossistema
//função de renderização só pode retornar um elemento pai, "independente". Porém com quaisquer quantidade de elementos contidos.
export default App;
