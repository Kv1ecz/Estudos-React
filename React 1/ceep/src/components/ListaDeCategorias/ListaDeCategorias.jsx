import React, { Component } from 'react';
import './style.css'
class ListaDeCategorias extends Component {

    constructor() {
        super()
        this._novasCategorias = this._novasCategorias.bind(this)

        this.state = {categorias:[]}
    }

    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias)
    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this._novasCategorias)
    }

    _novasCategorias(categorias){
        this.setState({...this.state, categorias})
    }

    _handleEventoInput(e){
        if(e.key === "Enter"){
            let categoria = e.target.value
            this.props.adicionarCategoria(categoria)
        }
    }

    render() { 
        return (  
           <section className="lista-categorias">
                <ul className= "lista-categorias_lista">
                    {this.state.categorias.map((categoria,index) =>{
                        return (
                            <li key={index} className="lista-categorias_item">{categoria}</li>
                        );
                    })}
                    
                    
                </ul>
                <input type="text" className="lista-categorias_input" placeholder="Inserir categoria" onKeyUp={this._handleEventoInput.bind(this)}/>
           </section>
            
        );
    }

    
}
 
export {ListaDeCategorias};