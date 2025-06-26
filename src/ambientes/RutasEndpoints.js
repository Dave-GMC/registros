
export const rutas_endpoints ={

    getCursoById : "http://localhost:3001/api/cursos/listarPorId/",

    // Crear un curso
    createCurso: "http://localhost:3001/api/cursos/insertar",
    // Lista todos los cursos
    getAllCursos: "http://localhost:3001/api/cursos/listarTodos",
    // Activar o Inactivar un curso
    delete_Logico_O_Fisico_Curso: "http://localhost:3001/api/cursos/activarOinactivar",
    // Editar un curso
    update_Curso: "http://localhost:3001/api/cursos/actualizacionTotal/"


}