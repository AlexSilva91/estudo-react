import React from 'react'
import './Comentario.css'
//JSX arrowFuntion
const Comentario = props => (
    <div className='Comentario'> 
        <h2 className='nome'>{props.nome}</h2>
        <div className='msg'>{props.children}</div>
        <p className='email'>{props.email}</p>
        <p className='data'>{props.data.toString()}</p>
        <button className='btnRemover'
            onClick={props.onRemove}>&times;</button>
    </div>
);

//permite acessar de outro lugares do projeto
export default Comentario;