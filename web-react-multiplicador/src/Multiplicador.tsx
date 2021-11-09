import React, { ChangeEvent, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import './Multiplicador.css'

interface IMultiplicador {
    num1: number;
    num2: number;
    mult: number
}

const Multiplicador: React.FC = () => {

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
        <div className="multiplicador" >
                <div>
                    <h2 className="titulo">Multiplicador de números</h2>
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
                        <br />
                        <Button variant="primary" size="sm" onClick={calcular}>Calcular</Button>
                    </Form>
                </div>
                <br />
                <div className="resultado">
                    <h3>Resultado:</h3>{' '}
                    <h3>{valores.mult}</h3>
                </div>
        </div>
    )

}

export default Multiplicador