import React, { Component } from 'react'
import "./style.css"

class FormNota extends Component{

    constructor(props){
        super(props)
        this.titulo =""
        this.texto =""
        this.categoria="Sem categoria"
        this._novasCategorias = this._novasCategorias.bind(this)

        this.state={categorias:[]}
    }

    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias)
    }

    componentWillUnmount(){
        this.props.categorias.desinscrever(this._novasCategorias)
    }

    _novasCategorias(categorias){
        this.setState({...this.state,categorias})
    }

    _handleMudancaTitulo(evento){
        this.titulo = evento.target.value
        //console.log(this.titulo)
    }

    _handleMudancaTexto(evento){
        this.texto = evento.target.value
        //console.log(this.texto)
    }

    _handleSelectCategoria(evento){
        evento.stopPropagation()
        this.categoria = evento.target.value
    }

    _criaNota(evento){
        //previne o comportamento padrão de um evento - nesse caso não recarrega a pagina, comportamento padrão onSubmit
        evento.preventDefault()
        evento.stopPropagation()
        this.props.criarNota(this.titulo,this.texto, this.categoria)
    }

    //bind -> aponta para a instancia do objeto que possui referencia no método

    render(){
        return(
            <form className="form-cadastro" onSubmit={this._criaNota.bind(this)}>
                <select className="form-cadastro_input" onChange={this._handleSelectCategoria.bind(this)}>
                    <option value="Sem Categoria">Sem Categoria</option>
                    {this.state.categorias.map((categoria, index)=>{
                        return(
                            <option key={index} value={categoria}>{categoria}</option>
                        )
                    })}
                </select>
                <input type="text" placeholder="Título" className="form-cadastro_input" onChange={this._handleMudancaTitulo.bind(this)}/>
                <textarea placeholder="Conteúdo da nota..." className="form-cadastro_input" rows={15} onChange={this._handleMudancaTexto.bind(this)}/>
                <button className="form-cadastro_input form-cadastro_submit">Criar nota</button>
            </form>
        );
    }

}

export {FormNota};