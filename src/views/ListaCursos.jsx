import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Titulo from '../components/Titulo.jsx'
import TablaCursos from '../components/TablaCursos.jsx';
export default function ListaCuros() {

    const TextoTitlulo= "Lista de cursos";


    return (
        <>
            
            
            <Titulo titulo= {TextoTitlulo}/>

            <center>
                <Button className='mt-3' variante="primary" as={Link} to='/crearCursos'>Crear Alumno</Button>
            </center>
            
            <TablaCursos/>
        
        </>
    )
}
