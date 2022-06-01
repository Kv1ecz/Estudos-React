import React, { Component } from 'react'
import CardNota from '../cardNota'
import "./style.css"

class ListaDeNotas extends Component{

    // constructor(props){ COSNTRUTOR IMPLICITO
    //     super(props)
    // }

    
    constructor(props){
        super(props)
        this._novasNotas = this._novasNotas.bind(this)

        this.state={notas:[]}
    }

    componentDidMount(){
        this.props.notas.inscrever(this._novasNotas)
    }

    componentWillUnmount(){
        this.props.notas.desinscrever(this._novasNotas)
    }

    _novasNotas(notas){
        this.setState({...this.state, notas})
    }

    render(){
        return(
            <ul className="lista-notas">
                {this.state.notas.map((nota,index) => {
                    return(
                        <li className="lista-notas_item" key={index}>
                            <CardNota titulo={nota.titulo} texto={nota.texto} categoria={nota.categoria} apagarNota={this.props.apagarNota} indice={index}/>        
                        </li>
                    );
                })}
            </ul>
        );
    }

}

export {ListaDeNotas}