import axios from "axios";
import Swal from "sweetalert2";
import { rutas_endpoints } from "../ambientes/RutasEndpoints"; 


// -------------- Lista todos los cursos --------------
export const getAllCursos= async ()=>{

    try {

    const { data } = await axios.get(
        rutas_endpoints.getAllCursos,
        {},
        {
            'Content-Type' : 'applicacion/json',
            
        }
    );
    

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
// -------------- Crear curso --------------

    export const createCurso = async (
        {
            nombre, 
            descripcion, 
            creditos, 
            codigo, 
            estado
        }
    ) => {

        try{
        
        const { data } = await axios.post(
            rutas_endpoints.createCurso,
            {
                nombre, 
                descripcion, 
                creditos, 
                codigo, 
                estado
            },
            {
                'Content-Type' : 'applicacion/json',
                
            }
        );

        if(data.resultado_tipo === "success"){

            Swal.fire(
                {
                    icon:'info',
                    title:"Para su informacion",
                    text: data.respuesta_detalle
                }
            );

        return true;



        }
        else if(data.resultado_tipo === "warning"){
            Swal.fire(
                {
                    icon:'info',
                    title:"Para su informacion",
                    text: data.respuesta_detalle
                }
            );

        return false;

        }
        else if(data.resultado_tipo === "error"){
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

// -------------- Inactivar curso --------------


    export const deleteLogicoCurso = async (idRecibido, estado) => {

        try {

            const id = Number(idRecibido);

            const { data } = await axios.post(
                rutas_endpoints.delete_Logico_O_Fisico_Curso,
                {
                
                    id,
                    estado
                },
                {
                    'Content-Type' : 'applicacion/json',
                    //'pais' : 'CR'
                }
            );

            

            if(data.resultado_tipo === "success"){

                Swal.fire({
                    icon: 'info',
                    title: "Para su información",
                    text: data.respuesta_detalle
                });

                return true;

                

            }
            else if(data.resultado_tipo === "warning"){

                Swal.fire({
                    icon: 'info',
                    title: "Para su información",
                    text: data.respuesta_detalle
                });

                return false;

            }
            else if(data.resultado_tipo === "error"){

                Swal.fire({
                    icon: 'info',
                    title: "Para su información",
                    text: data.respuesta_detalle
                })

                return false;

            }

            
        } catch (error) {

            Swal.fire({
                icon : 'info',
                title: 'Para su información',
                text: error.message
            })

            return false;
            
        }

    }



