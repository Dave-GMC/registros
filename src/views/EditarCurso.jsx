import React from 'react'
import Titulo from '../components/Titulo'
import SubTitulo from '../components/SubTitulo'
import FormularioEditarCurso from '../components/FormularioEditarCurso'


export default function EditarCurso() {
    return (

        <>
            <div className='container'>
        
                <center>
                    <Titulo titulo='Editar Curso'/>
                </center>
        
                <SubTitulo subtitulo='Por favor ingrese los siguientes datos:'/>


        
                <FormularioEditarCurso/>
                    
            </div>
        
        </>
    )
}
