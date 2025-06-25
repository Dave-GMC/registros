import React,{useEffect, useState} from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Grid } from 'gridjs-react';
import { h } from 'gridjs';
import "gridjs/dist/theme/mermaid.css";
import Swal from 'sweetalert2';
import {getAllCursos, deleteLogicoCurso} from "../services/CursosService.js";

export default function TablaCursos() {

    const [datosCursos, setDatosCursos] = useState([]);


    const getInitialData = async () => {

        const result = await getAllCursos();

        if(result){
            setDatosCursos(result);
        }


    }

    const actualizarCurso = async () =>{

    }

    const inactivarCurso = async (id) =>{

        Swal.fire({
        title: "Estás seguro de inactivar este curso?",
        text: "Esta acción puede ser reversada.",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, inactivalo."
        }).then((result) => {
            if (result.isConfirmed) {
                accionInactivar(id);
        
            }
        });

    }

    const accionInactivar = async (id)=>{
        const result = await deleteLogicoCurso(id,0);
        if(result){
            getInitialData();

        }
            
    }

    //--------------------------------------------

    const activarCurso = async (id) =>{

        Swal.fire({
        title: "Estás seguro de activar este curso?",
        text: "Esta acción puede ser reversada.",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, activalo."
        }).then((result) => {
            if (result.isConfirmed) {
                accionactivar(id);
        
            }
        });

    }

    const accionactivar = async (id)=>{
        const result = await deleteLogicoCurso(id,1);
        if(result){
            getInitialData();

        }
            
    }


    useEffect(
        () => {
            getInitialData();
        }, 
        []
    
    );





    return (
        <>
        <Tabs
        defaultActiveKey="TablaActiva"
        id="fill-tab-example"
        className="mt-4 text-black p-3"
        >

            <Tab
            eventKey="TablaActiva"
            title="Lista de cursos activos"
            >
                <Grid
                data={datosCursos.activos ||[]}
                columns={
                    [
                        { id: 'CursoID', name: 'Id ' },
                        { id: 'Nombre', name: 'Nombre' },
                        { id: 'Descripcion', name: 'Descripcion' },
                        { id: 'Creditos', name: 'Creditos' },
                        { id: 'Codigo', name: 'Codigo' },
                        //{ id: 'FechaCreacion', name: 'FechaCreacion' },
                        { id: 'Estado', name: 'Estado' },
                        {
                            name: 'Editar',
                            formatter: (cell, row) => {
                                return h('Button', {
                                className: 'py-2 mb-4 px-4 border rounded-md text-white btn btn-warning bg-blue-600',
                                onClick: () => actualizarCurso(`${row.cells[0].data}`)
                                }, 'Seleccionar');
                            }
                        },
                        {
                            name: 'Inactivar',
                            formatter: (cell, row) => {
                                return h(
                                    'Button',
                                    {
                                        className: 'py-2 mb-4 px-4 border rounded-md text-white btn btn-danger bg-blue-600',
                                        onClick: () => inactivarCurso(`${row.cells[0].data}`)
                                    },
                                    'Seleccionar'
                                )
                            }
                        }

                    ]
                }
                sort={true}
                resizable={true}
                language={{
                    search: {
                        placeholder: 'Escribe para buscar...',
                    },
                    sort: {
                        sortAsc: 'Orden de columna ascendente.',
                        sortDesc: 'Orden de columna descendente.',
                    },
                    pagination: {
                        previous: 'Anterior',
                        next: 'Siguiente',
                        navigate: (page, pages) => `Página ${page} de ${pages}`,
                        page: (page) => `Página ${page}`,
                        showing: 'Mostrando del',
                        of: 'de',
                        to: 'al',
                        results: 'registros',
                    },
                    loading: 'Cargando...',
                    noRecordsFound: 'Sin coincidencias encontradas.',
                    error: 'Ocurrió un error al obtener los datos.',
                    }}
                    className={{
                    table: 'table table-bordered mb-0'
                    }}
                    search={true}
                    pagination={
                    {
                        enabled: true,
                        limit: 10,
                    }
                }

                />
            
            </Tab>

            <Tab
            eventKey="TablaIncativa"
            title="Lista de cursos inactivos"
            >
                <Grid
                data={datosCursos.inactivos ||[]}
                columns={
                    [
                        { id: 'CursoID', name: 'Id ' },
                        { id: 'Nombre', name: 'Nombre' },
                        { id: 'Descripcion', name: 'Descripcion' },
                        { id: 'Creditos', name: 'Creditos' },
                        { id: 'Codigo', name: 'Codigo' },
                        //{ id: 'FechaCreacion', name: 'FechaCreacion' },
                        { id: 'Estado', name: 'Estado' },
                        {
                            name: 'activar',
                            formatter: (cell, row) => {
                                return h(
                                    'Button',
                                    {
                                        className: 'py-2 mb-4 px-4 border rounded-md text-white btn btn-success bg-blue-600',
                                        onClick: () => activarCurso(`${row.cells[0].data}`)
                                    },
                                    'Seleccionar'
                                )
                            }
                        }

                        
                    ]
                }
                sort={true}
                resizable={true}
                language={{
                    search: {
                        placeholder: 'Escribe para buscar...',
                    },
                    sort: {
                        sortAsc: 'Orden de columna ascendente.',
                        sortDesc: 'Orden de columna descendente.',
                    },
                    pagination: {
                        previous: 'Anterior',
                        next: 'Siguiente',
                        navigate: (page, pages) => `Página ${page} de ${pages}`,
                        page: (page) => `Página ${page}`,
                        showing: 'Mostrando del',
                        of: 'de',
                        to: 'al',
                        results: 'registros',
                    },
                    loading: 'Cargando...',
                    noRecordsFound: 'Sin coincidencias encontradas.',
                    error: 'Ocurrió un error al obtener los datos.',
                    }}
                    className={{
                    table: 'table table-bordered mb-0'
                    }}
                    search={true}
                    pagination={
                    {
                        enabled: true,
                        limit: 10,
                    }
                }
                />
            
            
            </Tab>
    
        </Tabs>



        
        </>
    )
}
