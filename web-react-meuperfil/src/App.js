import React from 'react'
import './App.css';
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap'

function App() {
  return (
    

    <div className="card">
      <Card border="dark" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" width="100" />
        <Card.Body>
          <Card.Title>Dados Pessoais:</Card.Title>
          <Card.Text>
            <p>Nome: Thomas de Souza Cardoso</p>
            <p>Nascimento: 31/03/2002</p>
          </Card.Text>
        </Card.Body>
        <ListGroup  className="list-group-flush">
          <ListGroupItem>Formação: Cursando ciência da computação</ListGroupItem>
          <ListGroupItem>Experiência: Nenhuma no momento</ListGroupItem>
          <ListGroupItem>Projetos: Nenhum no momento</ListGroupItem>
        </ListGroup>
        <Card.Body>
        </Card.Body>
      </Card>
    </div>

    

  );
}


export default App;
