import React, {useState} from 'react'
import { Button,Form} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { createCurso } from '../services/CursosService';
export default function FormularioCrearCurso() {

    const navigate = useNavigate();

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [creditos, setCreditos] = useState('');
    const [codigo, setCodigo] = useState('');
    const [estado, setEstado] = useState('');


    const onChangeNombre = (event)=>{

        event.preventDefault();
        setNombre(event.target.value);

    }
    //-------------------------------

    const onChangeDescripcion = (event)=>{

        event.preventDefault();
        setDescripcion(event.target.value);

    }
    //--------------------------------
    const onChangeCreditos = (event)=>{

        event.preventDefault();
        setCreditos(event.target.value);

    }
    //--------------------------------
    const onChangeCodigo = (event)=>{

        event.preventDefault();
        setCodigo(event.target.value);

    }
    //--------------------------------
    
    const onChangeEstado = (event)=>{

        event.preventDefault();
        setEstado(event.target.value);

    }

    //--------------------------------

    const guardar = async (event)=>{

        event.preventDefault();

        if(
            !nombre ||
            !descripcion ||
            !creditos ||
            !codigo ||
            !estado
        ){
            Swal.fire(
                {
                    incon: 'info',
                    title: 'Para su informacion',
                    text: 'Debe completar todo los campos'
                }
            )

        }
        else{
            const result =  await createCurso({
            nombre,
            descripcion,
            creditos,
            codigo,
            estado: true

            });

            if(result){
                navigate('/');

            }
        }

    }






    return (

        <>
            <Form onSubmit={guardar}>

                <Form.Group className='mb-3'>
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Ingrese el nombre del curso'
                    value={nombre}
                    onChange={onChangeNombre}
                    />

                </Form.Group>


                
                <Form.Group className='mb-3'>
                    <Form.Label>Descripcion:</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Ingrese la descripcion del curso'
                    value={descripcion}
                    onChange={onChangeDescripcion}

                    />

                </Form.Group>


                <Form.Group className='mb-3'>
                    <Form.Label>Creditos:</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Ingrese creditos del curso'
                    value={creditos}
                    onChange={onChangeCreditos}
                    />

                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Codigo:</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Ingrese el codigo del curso'
                    value={codigo}
                    onChange={onChangeCodigo}
                    />

                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Estado:</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Ingrese el estado del curso'
                    value={estado}
                    onChange={onChangeEstado}
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
