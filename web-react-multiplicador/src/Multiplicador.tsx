import React, { ChangeEvent, useState } from 'react';
import { Button, Form, FormGroup } from 'react-bootstrap';


interface IMultiplicador {
    num1: number;
    num2: number;
    mult: number
}

const Multiplicador: React.FC = () => {

    var multi = 0
    const [valores, setValores] = useState<IMultiplicador>({
        num1: 0,
        num2: 0,
        mult: 0
    })

    function updateValor(e: ChangeEvent<HTMLInputElement>) {
        setValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }
    
    function calcular(){
        setValores({
            ...valores,
            mult: valores.num1 * valores.num2
        })
    }

    return (
        <div className="container">
            <div>
                <h1>Multiplicador de números</h1>
                <br />
            </div>
            <div className="form">
                <Form>
                    <Form.Group>
                        <Form.Label>Primeiro valor:</Form.Label>
                        <Form.Control 
                            type="text"
                            name="num1"
                            value={valores.num1}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateValor(e)}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Segundo Valor:</Form.Label>
                        <Form.Control 
                            type="text"
                            name="num2"
                            value={valores.num2}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateValor(e)}/>
                    </Form.Group>
                    <Button variant="primary" size="lg" onClick={calcular}>Calcular</Button>
                </Form>
            </div>
            <br />
            <div className="resultado">
                <h1>Resultado:</h1>
                <h1>{valores.mult}</h1>
            </div>
        </div>
    )

}

export default Multiplicador