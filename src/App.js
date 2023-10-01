import { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario';

class App extends Component{
  state ={
    //objetos recebem anotação :
    comentarios: [
      {
        nome: 'João',
        email: 'joao@email.com',
        data: new Date(2023, 9, 30),
        msg: 'Olá, tudo bem?'
      },
      {
        nome: 'Ana',
        email: 'ana@email.com',
        data: new Date(2023, 10, 30),
        msg: 'Olá, tudo bem sim...'
      }
    ],
    novoComentario: {
      nome:'',
      email:'',
      msg:''
    }
  }
  adicionarComentario = evento => {

    evento.preventDefault();
    const novoComentario = {...this.state.novoComentario, data: new Date()}
    this.setState({
      comentarios: [...this.state.comentarios, novoComentario], 
      novoComentario: {nome:'', email:'', msg:''}});
    
  }

  digitacao = evento => {
    const {name, value} = evento.target;
    this.setState({ novoComentario: {...this.state.novoComentario, [name]: value}})
  }

  render(){
    return (
      <div className="App">
        <h1>Meu projeto</h1>
          {this.state.comentarios.map((comentario, indice) => (
            <Comentario 
              key={indice}
              nome={comentario.nome}
              email={comentario.email}
              data={comentario.data}>
              {comentario.msg}
            </Comentario>
          ))}
          <form method="post" onSubmit={this.adicionarComentario}>
            <h2>Adcionar Comentário</h2>
            <div>
              <div>
               <input 
               type="text" 
               name="nome" 
               value={this.state.novoComentario.nome}
               onChange={this.digitacao}
               placeholder="Digite seu nome"/>
              </div>
              <div>
                <input 
                type="email" 
                name="email"
                value={this.state.novoComentario.email}
                onChange={this.digitacao} 
                placeholder="Digite seu email"/>
              </div>
              <div>
                <textarea 
                name="msg" 
                value={this.state.novoComentario.msg}
                onChange={this.digitacao}
                placeholder="Digite sua mensagem" 
                rows={4}/>
              </div>
              <button className="btnComenta" type="submit">Adcionar comentário</button>
            </div>
          </form>
      </div>
    );
    }
  }


export default App;
