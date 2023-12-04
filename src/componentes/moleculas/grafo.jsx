import React, { useState } from 'react';
import  '../../css/main.css';
import { Graphviz } from 'graphviz-react';
const GrafoInteractivo = () => {

    const [nodos, setNodos] = useState({
        Gustavo: [{nodo: "Petrona", relacion: "Esposos"}],
        Petrona: [{nodo: "Gustavo", relacion: "Esposos"}],
        
        Ignacio: [{nodo: "Lucia", relacion: "Esposos"}], 
        Lucia: [{nodo: "Ignacio", relacion: "Esposos"}],
        
        Carlos: [{nodo: "Florencia", relacion: "Esposos"}],
        Florencia: [{nodo: "Carlos", relacion: "Esposos"}],
        
        Ricardo: [{nodo: "Rocio", relacion: "Hermanos"}],
        Rocio: [{nodo: "Ricardo", relacion: "Hermanos"}],
        
        Hyrum: [{nodo: "Rocio", relacion: "Madre hijo"}],
        Rocio: [{nodo: "Hyrum", relacion: "Madre hijo"}],
        
        Carlos: [{nodo: "Rocio", relacion: "Padre hija"}], 
        Rocio: [{nodo: "Carlos", relacion: "Hija Padre"}],
        
        Florencia: [{nodo: "Rocio", relacion: "Madre hija"}],
        Rocio: [{nodo: "Florencia", relacion: "Hija madre"}],
        
        Carlos: [{nodo: "Gustavo", relacion: "Hijo Padre"}],
        Gustavo: [{nodo: "Carlos", relacion: "Padre hijo"}],
        
        Florencia: [{nodo: "Lucia", relacion: "Hija madre"}], 
        Lucia: [{nodo: "Florencia", relacion: "Madre hija"}],
        
        Florencia: [{nodo: "Ignacio", relacion: "Hija padre"}],
        Ignacio: [{nodo: "Florencia", relacion: "Padre hija"}],
        
        Florencia: [{nodo: "Mari", relacion: "Hermanas"}],
        Mari: [{nodo: "Florencia", relacion: "Hermanas"}],
        
        Florencia: [{nodo: "Helena", relacion: "Hermanas"}],
        Helena: [{nodo: "Florencia", relacion: "Hermanas"}],
        
        Florencia: [{nodo: "Gloria", relacion: "Hermanas"}],
        Gloria: [{nodo: "Florencia", relacion: "Hermanas"}],
        
        Carlos: [{nodo: "Marilu", relacion: "Hermanos"}],
        Marilu: [{nodo: "Carlos", relacion: "Hermanos"}],
        
        Carlos: [{nodo: "Blanca", relacion: "Hermanos"}],
        Blanca: [{nodo: "Carlos", relacion: "Hermanos"}],
        
        Carlos: [{nodo: "Tavi", relacion: "Hermanos"}],
        Tavi: [{nodo: "Carlos", relacion: "Hermanos"}],
        
        Carlos: [{nodo: "Yuyi", relacion: "Hermanos"}], 
        Yuyi: [{nodo: "Carlos", relacion: "Hermanos"}],
        
        Diana: [{nodo: "Leydi", relacion: "Hermanas"}],
        Leydi: [{nodo: "Diana", relacion: "Hermanas"}],
        
        Leydi: [{nodo: "Marilu", relacion: "Hija madre"}],
        Marilu: [{nodo: "Leydi", relacion: "Madre hija"}],
        
        Diana: [{nodo: "Marilu", relacion: "Hija madre"}],
        Marilu: [{nodo: "Diana", relacion: "Madre hija"}],
        
        Diana: [{nodo: "Ricardo", relacion: "Primos"}],
        Ricardo: [{nodo: "Diana", relacion: "Primos"}],
        
        Diana: [{nodo: "Rocio", relacion: "Primos"}],
        Rocio: [{nodo: "Diana", relacion: "Primos"}],
        
        Leydi: [{nodo: "Ricardo", relacion: "Primos"}],
        Ricardo: [{nodo: "Leydi", relacion: "Primos"}],
        
        Leydi: [{nodo: "Rocio", relacion: "Primos"}], 
        Rocio: [{nodo: "Leydi", relacion: "Primos"}],
        
        Monica: [{nodo: "Helena", relacion: "Hija madre"}],
        Helena: [{nodo: "Monica", relacion: "Madre hija"}],
        
        Tavito: [{nodo: "Mari", relacion: "Hijo madre"}],
        Mari: [{nodo: "Tavito", relacion: "Madre hijo"}],
        
        Yesi: [{nodo: "Mari", relacion: "Hija madre"}],
        Mari: [{nodo: "Yesi", relacion: "Madre hija"}],
        
        Pedrito: [{nodo: "Mari", relacion: "Hijo madre"}],
        Mari: [{nodo: "Pedrito", relacion: "Madre hijo"}],
        
        Tavito: [{nodo: "Yesi", relacion: "Hermanos"}], 
        Yesi: [{nodo: "Tavito", relacion: "Hermanos"}],
        
        Tavito: [{nodo: "Pedrito", relacion: "Hermanos"}],
        Pedrito: [{nodo: "Tavito", relacion: "Hermanos"}],
        
        Yesi: [{nodo: "Pedrito", relacion: "Hermanos"}],
        Pedrito: [{nodo: "Yesi", relacion: "Hermanos"}],
        
        Tavito: [{nodo: "Ricardo", relacion: "Primos"}],
        Ricardo: [{nodo: "Tavito", relacion: "Primos"}],
        
        Tavito: [{nodo: "Rocio", relacion: "Primos"}],
        Rocio: [{nodo: "Tavito", relacion: "Primos"}],
        
        Yesi: [{nodo: "Ricardo", relacion: "Primos"}],
        Ricardo: [{nodo: "Yesi", relacion: "Primos"}],
        
        Yesi: [{nodo: "Rocio", relacion: "Primos"}],
        Rocio: [{nodo: "Yesi", relacion: "Primos"}],
        
        Pedrito: [{nodo: "Ricardo", relacion: "Primos"}],
        Ricardo: [{nodo: "Pedrito", relacion: "Primos"}],
        
        Pedrito: [{nodo: "Rocio", relacion: "Primos"}],
        Rocio: [{nodo: "Pedrito", relacion: "Primos"}],
        
        Monica: [{nodo: "Tavito", relacion: "Primos"}],
        Tavito: [{nodo: "Monica", relacion: "Primos"}],
        
        Monica: [{nodo: "Yesi", relacion: "Primos"}],
        Yesi: [{nodo: "Monica", relacion: "Primos"}],
        
        Monica: [{nodo: "Pedrito", relacion: "Primos"}],
        Pedrito: [{nodo: "Monica", relacion: "Primos"}],
        
      });

  const [aristaSeleccionada, setAristaSeleccionada] = useState(null);
  const [textoRelacion, setTextoRelacion] = useState("");

  const agregarArista = (nodo1, nodo2, tipoRelacion) => {
    setNodos(prevNodos => ({
      ...prevNodos,
      [nodo1]: [...prevNodos[nodo1], {nodo: nodo2, relacion: tipoRelacion }],
      [nodo2]: [...prevNodos[nodo2], {nodo: nodo1, relacion: tipoRelacion}] 
    }));
  };

  const handleNodoClick = (nodo) => {
    if(!aristaSeleccionada) {
      setAristaSeleccionada(nodo);
    } else {
      if(aristaSeleccionada === "Florencia" && nodo === "Ricardo") {
        setTextoRelacion("La relación que tiene "+aristaSeleccionada+" y "+nodo+" es: Madre hijo");  
      }
      else if(aristaSeleccionada === "Ricardo" && nodo === "Florencia"){
        setTextoRelacion("La relación que tiene "+aristaSeleccionada+" y "+nodo+" es: hijo Madre");  
      }
      else if(aristaSeleccionada === "Carlos" && nodo === "Ricardo") {
        setTextoRelacion("La relación que tiene "+aristaSeleccionada+" y "+nodo+" es: Padre hijo");
      }
      else if(aristaSeleccionada === "Ricardo" && nodo === "Carlos"){
        setTextoRelacion("La relación que tiene "+aristaSeleccionada+" y "+nodo+" es: hijo Padre ");
      }
      else if(aristaSeleccionada === "Gustavo" && nodo === "Ricardo"){
        setTextoRelacion("La relación que tiene "+aristaSeleccionada+" y "+nodo+" es: Abuelo Nieto");
      } 
      else if(aristaSeleccionada === "Ricardo" && nodo === "Gustavo"){
        setTextoRelacion("La relación que tiene "+aristaSeleccionada+" y "+nodo+" es: Nieto Abuelo");
      }
      else if(aristaSeleccionada === "Carlos" && nodo === "Florencia") {
        setTextoRelacion("La relación que tiene "+aristaSeleccionada+" y "+nodo+" es: Esposos");
      }
      else if(aristaSeleccionada === "Florencia" && nodo === "Carlos") {
        setTextoRelacion("La relación que tiene "+aristaSeleccionada+" y "+nodo+" es: Esposos"); 
      }
      else if(aristaSeleccionada === "Gustavo" && nodo === "Petrona") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Esposos");
      }
      else if(aristaSeleccionada === "Petrona" && nodo === "Gustavo") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Esposos");
      }
      else if(aristaSeleccionada === "Ignacio" && nodo === "Lucia") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Esposos");
      }
      else if(aristaSeleccionada === "Lucia" && nodo === "Ignacio") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Esposos");  
      }
      else if(aristaSeleccionada === "Carlos" && nodo === "Florencia") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Esposos");
      }
      else if(aristaSeleccionada === "Florencia" && nodo === "Carlos") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Esposos");
      }
      else if(aristaSeleccionada === "Ricardo" && nodo === "Rocio") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hermanos");
      }
      else if(aristaSeleccionada === "Rocio" && nodo === "Ricardo") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hermanos");
      }else if(aristaSeleccionada === "Hyrum" && nodo === "Rocio") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Madre hijo");
      }
      else if(aristaSeleccionada === "Rocio" && nodo === "Hyrum") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hijo madre");  
      }
      else if(aristaSeleccionada === "Carlos" && nodo === "Rocio") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Padre hija");
      }
      else if(aristaSeleccionada === "Rocio" && nodo === "Carlos") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hija padre");
      } 
      else if(aristaSeleccionada === "Florencia" && nodo === "Rocio") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Madre hija");  
      }
      else if(aristaSeleccionada === "Rocio" && nodo === "Florencia") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hija madre");
      }
      else if(aristaSeleccionada === "Carlos" && nodo === "Gustavo") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hijo padre");  
      }
      else if(aristaSeleccionada === "Gustavo" && nodo === "Carlos") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Padre hijo");
      }
      else if(aristaSeleccionada === "Florencia" && nodo === "Lucia") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hija madre");
      }
      else if(aristaSeleccionada === "Lucia" && nodo === "Florencia") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Madre hija");  
      } 
      else if(aristaSeleccionada === "Florencia" && nodo === "Ignacio") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hija padre");
      }
      else if(aristaSeleccionada === "Ignacio" && nodo === "Florencia") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Padre hija");
      }
      else if(aristaSeleccionada === "Florencia" && nodo === "Mari") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hermanas");  
      }
      else if(aristaSeleccionada === "Mari" && nodo === "Florencia") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hermanas");
      }  
      else if(aristaSeleccionada === "Florencia" && nodo === "Helena") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hermanas");  
      }
      else if(aristaSeleccionada === "Helena" && nodo === "Florencia") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hermanas");
      }
      else if(aristaSeleccionada === "Florencia" && nodo === "Gloria") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hermanas");
      }
      else if(aristaSeleccionada === "Gloria" && nodo === "Florencia") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hermanas");  
      }
      else if(aristaSeleccionada === "Carlos" && nodo === "Marilu") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hermanos");  
      }  
      else if(aristaSeleccionada === "Marilu" && nodo === "Carlos") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hermanos");
      }
      else if(aristaSeleccionada === "Carlos" && nodo === "Blanca") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hermanos");  
      }
      else if(aristaSeleccionada === "Blanca" && nodo === "Carlos") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hermanos");  
      }
      else if(aristaSeleccionada === "Carlos" && nodo === "Tavi") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hermanos");  
      }
      else if(aristaSeleccionada === "Tavi" && nodo === "Carlos") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hermanos");
      }
      else if(aristaSeleccionada === "Carlos" && nodo === "Yuyi") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hermanos");  
      }
      else if(aristaSeleccionada === "Yuyi" && nodo === "Carlos") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hermanos");
      }  
      else if(aristaSeleccionada === "Diana" && nodo === "Leydi") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hermanas");  
      }
      else if(aristaSeleccionada === "Leydi" && nodo === "Diana") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hermanas");
      } 
      else if(aristaSeleccionada === "Leydi" && nodo === "Marilu") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hija madre");  
      } 
      else if(aristaSeleccionada === "Marilu" && nodo === "Leydi") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Madre hija");  
      }   
      else if(aristaSeleccionada === "Diana" && nodo === "Marilu") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hija madre"); 
      }
      else if(aristaSeleccionada === "Marilu" && nodo === "Diana") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Madre hija");
      }
      else if(aristaSeleccionada === "Diana" && nodo === "Ricardo") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Primos");  
      }
      else if(aristaSeleccionada === "Ricardo" && nodo === "Diana") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Primos");
      }
      else if(aristaSeleccionada === "Diana" && nodo === "Rocio") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Primos");  
      }
      else if(aristaSeleccionada === "Rocio" && nodo === "Diana") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Primos"); 
      }
      else if(aristaSeleccionada === "Leydi" && nodo === "Ricardo") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Primos");  
      }
      else if(aristaSeleccionada === "Ricardo" && nodo === "Leydi") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Primos");
      } 
      else if(aristaSeleccionada === "Leydi" && nodo === "Rocio") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Primos");  
      }
      else if(aristaSeleccionada === "Rocio" && nodo === "Leydi") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Primos");  
      }
      else if(aristaSeleccionada === "Monica" && nodo === "Helena") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hija madre"); 
      }
      else if(aristaSeleccionada === "Helena" && nodo === "Monica") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Madre hija");  
      }
      else if(aristaSeleccionada === "Tavito" && nodo === "Mari") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hijo madre");  
      }
      else if(aristaSeleccionada === "Mari" && nodo === "Tavito") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Madre hijo");
      }
      else if(aristaSeleccionada === "Yesi" && nodo === "Mari") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hija madre");  
      }
      else if(aristaSeleccionada === "Mari" && nodo === "Yesi") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Madre hija");
      }
      else if(aristaSeleccionada === "Pedrito" && nodo === "Mari") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hijo madre"); 
      }
      else if(aristaSeleccionada === "Mari" && nodo === "Pedrito") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Madre hijo");  
      }
      else if(aristaSeleccionada === "Tavito" && nodo === "Yesi") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hermanos");   
      }
      else if(aristaSeleccionada === "Yesi" && nodo === "Tavito") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hermanos");  
      }
      else if(aristaSeleccionada === "Tavito" && nodo === "Pedrito") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hermanos");  
      }
      else if(aristaSeleccionada === "Pedrito" && nodo === "Tavito") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hermanos");
      }  
      else if(aristaSeleccionada === "Yesi" && nodo === "Pedrito") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hermanos");  
      }
      else if(aristaSeleccionada === "Pedrito" && nodo === "Yesi") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Hermanos");
      }
      else if(aristaSeleccionada === "Tavito" && nodo === "Ricardo") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Primos");  
      }
      else if(aristaSeleccionada === "Ricardo" && nodo === "Tavito") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Primos");  
      }
      else if(aristaSeleccionada === "Tavito" && nodo === "Rocio") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Primos"); 
      }
      else if(aristaSeleccionada === "Rocio" && nodo === "Tavito") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Primos");
      }
      else if(aristaSeleccionada === "Yesi" && nodo === "Ricardo") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Primos");  
      } 
      else if(aristaSeleccionada === "Ricardo" && nodo === "Yesi") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Primos");
      }
      else if(aristaSeleccionada === "Yesi" && nodo === "Rocio") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Primos");   
      }
      else if(aristaSeleccionada === "Rocio" && nodo === "Yesi") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Primos");  
      }  
      else if(aristaSeleccionada === "Pedrito" && nodo === "Ricardo") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Primos");
      }
      else if(aristaSeleccionada === "Ricardo" && nodo === "Pedrito") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Primos");  
      }
      else if(aristaSeleccionada === "Pedrito" && nodo === "Rocio") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Primos");  
      }
      else if(aristaSeleccionada === "Rocio" && nodo === "Pedrito") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Primos");  
      }
      else if(aristaSeleccionada === "Monica" && nodo === "Tavito") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Primos");
      }
      else if(aristaSeleccionada === "Tavito" && nodo === "Monica") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Primos");  
      }
      else if(aristaSeleccionada === "Monica" && nodo === "Yesi") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Primos");  
      }
      else if(aristaSeleccionada === "Yesi" && nodo === "Monica") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Primos");
      }
      else if(aristaSeleccionada === "Monica" && nodo === "Pedrito") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Primos");
      } 
      else if(aristaSeleccionada === "Monica" && nodo === "Ricardo") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Primos");
      } 
      else if(aristaSeleccionada === "Ricardo" && nodo === "Monica") {
        setTextoRelacion("La relación entre "+aristaSeleccionada+" y "+nodo+" es: Primos");
      } 
      else{
        setTextoRelacion("Ninguna Relacion Cercana");
    }     
    setAristaSeleccionada(null); 
    }
  };

  return (
    <div>
      <div className='divBotones'>
        {Object.keys(nodos).map(nodo => (
          <button className='botonColores' key={nodo} onClick={() => handleNodoClick(nodo)}>
            {nodo}
          </button>
        ))}
      </div>
      <div>
        <p className='textoP'>{textoRelacion}</p>
      </div>
      {/* <Graphviz dot={`graph {
  Ignacio -- "Florencia";
  "Florencia" -- Ricardo;
  Lucia --  "Florencia";
  "Carlos" -- "Florencia";
  Rocio;
  Rocio--"Ricardo";
}`} /> */}
    </div>
  );
};

export default GrafoInteractivo;