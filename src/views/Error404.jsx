import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  ImgError404 from '../assets/images/Error404.jpeg'
import Titulo from '../components/Titulo.jsx'

export default function Error404() {
    return (
        <div>

            <center>

                <Titulo titulo="La pagina que buscas no existe."/>

                <img 
                    src={ImgError404}
                    alt='Imagen Error 404'
                    className='mt-4 mb-4'
                />

                <p>
                    <Button variant='danger' as={Link} to='/'>Regresar</Button>
                </p>


            </center>

        </div>
    )
}
