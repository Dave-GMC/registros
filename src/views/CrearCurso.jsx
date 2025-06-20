import React from 'react'
import Titulo from '../components/Titulo'
import SubTitulo from '../components/SubTitulo'
import FormularioCrearCurso from '../components/FormularioCrearCurso'

export default function CrearCursos() {
return (
    <>

        <div className='container'>

            <center>
                <Titulo titulo='Crear Cursos'/>
            </center>

            <SubTitulo subtitulo='Por favor ingrese los siguientes datos:'/>

            <FormularioCrearCurso/>
            
        </div>

    




    </>
)
}
