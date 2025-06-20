import axios from "axios";
import Swal from "sweetalert2";
import { rutas_endpoints } from "../ambientes/RutasEndpoints"; 

export const getAllCursos= async ()=>{

    try {

    const { data } = await axios.get(
        rutas_endpoints.getAllCursos,
        {},
        {
            'Content-Type' : 'applicacion/json',
            
        }
    );
    debugger

    if(data.resultado_tipo ==="success"){

        let listCursos = data.datos;

        listCursos = listCursos.map(
            cursos =>
            {
                return{
                    ...cursos,

                    Estado: cursos.Estado ? "activo" : "inactivo"
                }
            }
        );
            

        const cursosActivosInactivos = listCursos.reduce(
            (acc,cursos) =>
            {
                if(cursos.Estado === "activo"){
                    acc.activos.push(cursos);

                }
                else if(cursos.Estado === "inactivo"){
                    acc.inactivos.push(cursos);
                }
                return acc;

            }  
            ,
            {
                activos: [],
                inactivos: []
            }
        );
        return cursosActivosInactivos;

    }
    else if(data.resultado ==="warning"){

        Swal.fire(
            {
                icon:'info',
                title:"Para su informacion",
                text: data.respuesta_detalle
            }
        );

        return false;

    }
    else if(data.resultado ==="error"){

        Swal.fire(
            {
                icon:'info',
                title:"Para su informacion",
                text: data.respuesta_detalle
            }
        );

        return false;

    }



    }catch (error) {

        Swal.fire(
            {
                icon:'info',
                title:"Para su informacion",
                text: error.message
            }
        );

        return false;


    }
    
    




}