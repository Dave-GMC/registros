import React, {useState} from 'react'
import { Button,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function FormularioCrearCurso() {

    const [nombre, setNombre] = useState('');





    return (

        <>
            <Form>

                <Form.Group className='mb-3'>
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Ingrese el nombre del curso'
                    />

                </Form.Group>

                

                <Form.Group className='mb-3'>
                    <Form.Label>Descripcion:</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Ingrese la descripcion del curso'
                    />

                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Creditos:</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Ingrese creditos del curso'
                    />

                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Codigo:</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Ingrese el codigo del curso'
                    />

                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Estado:</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Ingrese el estado del curso'
                    />

                </Form.Group>

                

                <p className='mt-4'/>



                <p>
                    <Button type='submit'>Guardar</Button>
                </p>

                <p>
                    <Button variant='danger' as={Link} to='/'>Cancelar</Button>
                </p>

            </Form>
        </>
    )
}
