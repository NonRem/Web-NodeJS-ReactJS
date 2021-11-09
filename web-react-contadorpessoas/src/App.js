import React from "react";
import {Button, Card} from "react-bootstrap"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Contador />
    </div>
  );
}

class Contador extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pessoas: 0
    }
    this.somar = this.somar.bind(this)
    this.sub = this.sub.bind(this)
  }

  somar() {
    this.setState({
      pessoas: this.state.pessoas + 1
    })
  }

  sub() {
    this.setState({
      pessoas: this.state.pessoas - 1
    })
  }

  render() {
    return (
      <div className="card">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
          <Card.Title>Contador:</Card.Title>
          
          <Card.Text>
            <h1>{this.state.pessoas}</h1>
            <br/>
            <Button variant="success" size="lg" onClick={this.somar}>+</Button>{' '}{' '}
            <Button variant="danger" size="lg" onClick={this.sub}>-</Button>
          </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }

}

export default App;
