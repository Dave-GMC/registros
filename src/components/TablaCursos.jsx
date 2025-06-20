import React,{useEffect, useState} from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Grid } from 'gridjs-react';
import { h } from 'gridjs';
import "gridjs/dist/theme/mermaid.css";
import {getAllCursos} from "../services/CursosService.js";

export default function TablaCursos() {

    const [datosCursos, setDatosCursos] = useState([]);


    const getInitialData = async () => {

        const result = await getAllCursos();

        if(result){
            setDatosCursos(result);
        }

        debugger

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
                        { id: 'FechaCreacion', name: 'FechaCreacion' },
                        { id: 'Estado', name: 'Estado' },
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
                        { id: 'FechaCreacion', name: 'FechaCreacion' },
                        { id: 'Estado', name: 'Estado' },
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
