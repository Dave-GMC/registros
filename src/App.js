import {BrowserRouter, Routes, Route}from 'react-router-dom';
import './App.css';
import ListaCuros from './views/ListaCursos';
import CrearCursos from './views/CrearCurso';
import Error404 from './views/Error404';
import EditarCurso from './views/EditarCurso';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<ListaCuros/>}></Route>
          <Route path='/crearCursos' element={<CrearCursos/>}></Route>
          <Route path='/editarCurso' element={<EditarCurso/>}></Route>
          <Route path='/*' element={<Error404/>}></Route>


          
        </Routes>
      
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
