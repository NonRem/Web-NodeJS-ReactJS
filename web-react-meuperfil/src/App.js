import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap'

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/

    <div className="card">
      <span class="border border-dark">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" width="100" />
        <Card.Body>
          <Card.Header>Meu Perfil</Card.Header>
          <Card.Title>Dados Pessoais:</Card.Title>
          <Card.Text>
                        
            <p>Nome: Thomas de Souza Cardoso</p>
            
            <p>Nascimento: 31/03/2002</p>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Formação: Cursando ciência da computação</ListGroupItem>
          <ListGroupItem>Experiência: Nenhuma no momento</ListGroupItem>
          <ListGroupItem>Projetos: Nenhum no momento</ListGroupItem>
        </ListGroup>
        <Card.Body>
        </Card.Body>
      </Card>
      </span>
    </div>

  );
}


export default App;
