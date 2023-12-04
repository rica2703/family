import React, { useEffect } from 'react';
import GrafoInteractivo from './componentes/moleculas/grafo';
import '../src/css/main.css'
import Familia from './componentes/moleculas/familia';
function App() {
  

  return (
    <>
   <div className='centrar'>
    <h1>Selecciona dos personas para ver su parentesco</h1>
    <div>
   <GrafoInteractivo/>
    </div>
   </div>
   <Familia/>
    </>
  );
}

export default App;

