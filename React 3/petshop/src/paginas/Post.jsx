import React, { useEffect, useState} from 'react'
import { useParams, useHistory } from 'react-router'
import { busca } from '../api/api'
import '../assets/css/post.css'

{/* useParams funciona como o get */}
const Post = () =>{

    let history = useHistory()
    const {id} = useParams() 
    const[post, setPost] = useState({})
    
    useEffect(() => {
        {/* Caso haja um erro na requisição (not found por ex), o useHistory vai redirecionar a pagina para url desejada */}
        busca(`posts/${id}`, setPost).catch(
            ()=>{
                history.push('/404')
            }
        )
    }, [id])
    return(
        <main className="container flex flex--centro">
            <article className="cartao post">
                <h2 className="cartao__titulo">{post.title}</h2>
                <p className="cartao__texto">
                    {post.body}
                </p>
            </article>
        </main>
    )
}

export default Post