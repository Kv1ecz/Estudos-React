import React, { Component } from 'react';
import "./style.css"
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg" //importação de imagem svg como componente React

class CardNota extends Component {

    apagar(){
        const indice = this.props.indice
        this.props.apagarNota(indice)
    }

    render() { 
        return ( 
            <section className="card-nota">
                <span className="spn--categoria">{this.props.categoria}</span>
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.titulo}</h3>
                    <DeleteSVG onClick={this.apagar.bind(this)} className="card-nota_btn-delete"/> {/* Utilizando svg como componente */}
                    {/* <img src={deleteSVG} alt="deletar nota"/> - Utilizando svg em tag img */}
                   
                </header>
                <p className="card-nota_texto">{this.props.texto}</p>
            </section>
         );
    }
}
 
export default CardNota;