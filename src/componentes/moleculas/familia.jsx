import React, { useState } from 'react';
import '../../css/main.css';
import { Graphviz } from 'graphviz-react';

const GrafoInteractivo = () => {
    const [nodos, setNodos] = useState({
        Gustavo: [{ nodo: "Petrona", relacion: "Esposos" }],
        // Petrona: [{ nodo: "Gustavo", relacion: "Esposos" }],
        Petrona: [{ nodo: "Carlos", relacion: "Madre Hijo" }],

        Ignacio: [{ nodo: "Lucia", relacion: "Esposos" }],
        // Lucia: [{ nodo: "Ignacio", relacion: "Esposos" }],
        Florencia: [{ nodo: "Carlos", relacion: "Esposos" }],
        // 
        Carlos: [{ nodo: "Florencia", relacion: "Esposos" }],
        Ricardo: [{ nodo: "Rocio", relacion: "Hermanos" }],
        // 
        // Rocio: [{ nodo: "Ricardo", relacion: "Hermanos" }],

        // Hyrum: [{ nodo: "Rocio", relacion: "Madre hijo" }],
        Rocio: [{ nodo: "Hyrum", relacion: "Madre hijo" }],

        Carlos: [{ nodo: "Rocio", relacion: "Padre hija" }],
        Carlos: [{ nodo: "Ricardo", relacion: "Padre hijo" }],
        // Rocio: [{ nodo: "Carlos", relacion: "Hija Padre" }],

        // Ricardo:[{nodo:"Rocio",relacion:"Hermanos"}],
        // Rocio:[{nodo:"Ricardo",relacion:"Hermanos"}],

        Florencia: [{ nodo: "Rocio", relacion: "Madre hija" }],
        Florencia: [{ nodo: "Ricardo", relacion: "Madre Hijo" }],
        // Rocio: [{ nodo: "Florencia", relacion: "Hija madre" }],

        Gustavo: [{ nodo: "Carlos", relacion: "Hijo Padre" }],
        // Gustavo: [{ nodo: "Carlos", relacion: "Padre hijo" }],

        // Florencia: [{ nodo: "Lucia", relacion: "Hija madre" }],
        Lucia: [{ nodo: "Florencia", relacion: "Madre hija" }],

        // Florencia: [{ nodo: "Ignacio", relacion: "Hija padre" }],
        Ignacio: [{ nodo: "Florencia", relacion: "Padre hija" }],
        Mari: [{ nodo: "Florencia", relacion: "Hermanas" }],
        Helena: [{ nodo: "Florencia", relacion: "Hermanas" }],
        Gloria: [{ nodo: "Florencia", relacion: "Hermanas" }],

        // Florencia: [{ nodo: "Mari", relacion: "Hermanas" }],
        // Mari: [{ nodo: "Florencia", relacion: "Hermanas" }],

        // Florencia: [{ nodo: "Helena", relacion: "Hermanas" }],
        // Helena: [{ nodo: "Florencia", relacion: "Hermanas" }],

        // Florencia: [{ nodo: "Gloria", relacion: "Hermanas" }],
        // Gloria: [{ nodo: "Florencia", relacion: "Hermanas" }],

        // Carlos: [{ nodo: "Marilu", relacion: "Hermanos" }],
        Marilu: [{ nodo: "Carlos", relacion: "Hermanos" }],

        // Carlos: [{ nodo: "Blanca", relacion: "Hermanos" }],
        Blanca: [{ nodo: "Carlos", relacion: "Hermanos" }],

        // Carlos: [{ nodo: "Tavi", relacion: "Hermanos" }],
        Tavi: [{ nodo: "Carlos", relacion: "Hermanos" }],

        // Carlos: [{ nodo: "Yuyi", relacion: "Hermanos" }],
        Yuyi: [{ nodo: "Carlos", relacion: "Hermanos" }],

        Diana: [{ nodo: "Leydi", relacion: "Hermanas" }],
        // Leydi: [{ nodo: "Diana", relacion: "Hermanas" }],

        Leydi: [{ nodo: "Marilu", relacion: "Hija madre" }],
        // Marilu: [{ nodo: "Leydi", relacion: "Madre hija" }],

        // Diana: [{ nodo: "Marilu", relacion: "Hija madre" }],
        // Marilu: [{ nodo: "Diana", relacion: "Madre hija" }],

        // Diana: [{ nodo: "Ricardo", relacion: "Primos" }],
        // Ricardo: [{ nodo: "Diana", relacion: "Primos" }],

        // Diana: [{ nodo: "Rocio", relacion: "Primos" }],
        // Rocio: [{ nodo: "Diana", relacion: "Primos" }],

        // Leydi: [{ nodo: "Ricardo", relacion: "Primos" }],
        // Ricardo: [{ nodo: "Leydi", relacion: "Primos" }],

        // Leydi: [{ nodo: "Rocio", relacion: "Primos" }],
        // Rocio: [{ nodo: "Leydi", relacion: "Primos" }],

        Monica: [{ nodo: "Helena", relacion: "Hija madre" }],
        // Helena: [{ nodo: "Monica", relacion: "Madre hija" }],

        Tavito: [{ nodo: "Mari", relacion: "Hijo madre" }],
        // Mari: [{ nodo: "Tavito", relacion: "Madre hijo" }],

        Yesi: [{ nodo: "Mari", relacion: "Hija madre" }],
        // Mari: [{ nodo: "Yesi", relacion: "Madre hija" }],

        Pedrito: [{ nodo: "Mari", relacion: "Hijo madre" }],
        // Mari: [{ nodo: "Pedrito", relacion: "Madre hijo" }],

        // Tavito: [{ nodo: "Yesi", relacion: "Hermanos" }],
        // Yesi: [{ nodo: "Tavito", relacion: "Hermanos" }],

        // Tavito: [{ nodo: "Pedrito", relacion: "Hermanos" }],
        // Pedrito: [{ nodo: "Tavito", relacion: "Hermanos" }],

        // Yesi: [{ nodo: "Pedrito", relacion: "Hermanos" }],
        // Pedrito: [{ nodo: "Yesi", relacion: "Hermanos" }],

        // Tavito: [{ nodo: "Ricardo", relacion: "Primos" }],
        // Ricardo: [{ nodo: "Tavito", relacion: "Primos" }],

        // Tavito: [{ nodo: "Rocio", relacion: "Primos" }],
        // Rocio: [{ nodo: "Tavito", relacion: "Primos" }],

        // Yesi: [{ nodo: "Ricardo", relacion: "Primos" }],
        // Ricardo: [{ nodo: "Yesi", relacion: "Primos" }],

        // Yesi: [{ nodo: "Rocio", relacion: "Primos" }],
        // Rocio: [{ nodo: "Yesi", relacion: "Primos" }],

        // Pedrito: [{ nodo: "Ricardo", relacion: "Primos" }],
        // Ricardo: [{ nodo: "Pedrito", relacion: "Primos" }],

        // Pedrito: [{ nodo: "Rocio", relacion: "Primos" }],
        // Rocio: [{ nodo: "Pedrito", relacion: "Primos" }],

        // Monica: [{ nodo: "Tavito", relacion: "Primos" }],
        // Tavito: [{ nodo: "Monica", relacion: "Primos" }],

        // Monica: [{ nodo: "Yesi", relacion: "Primos" }],
        // Yesi: [{ nodo: "Monica", relacion: "Primos" }],

        // Monica: [{ nodo: "Pedrito", relacion: "Primos" }],
        // Pedrito: [{ nodo: "Monica", relacion: "Primos" }],
    });

    const [aristaSeleccionada, setAristaSeleccionada] = useState(null);
    const [textoRelacion, setTextoRelacion] = useState("");

    const relaciones = {
        "Florencia-Ricardo": "Hermanos",
        "Carlos-Florencia": "Esposos",
    };

    const agregarArista = (nodo1, nodo2, tipoRelacion) => {
        setNodos((prevNodos) => ({
            ...prevNodos,
            [nodo1]: [...prevNodos[nodo1], { nodo: nodo2, relacion: tipoRelacion }],
            [nodo2]: [...prevNodos[nodo2], { nodo: nodo1, relacion: tipoRelacion }],
        }));
    };

    const handleNodoClick = (nodo) => {
        if (!aristaSeleccionada) {
            setAristaSeleccionada(nodo);
        } else {
            const relacionKey = `${aristaSeleccionada}-${nodo}`;
            const relacion = relaciones[relacionKey];

            if (relacion) {
                setTextoRelacion(`La relación entre ${aristaSeleccionada} y ${nodo} es: ${relacion}`);
            } else {
                setTextoRelacion("Ninguna Relacion Cercana");
            }

            setAristaSeleccionada(null);
        }
    };



    return (
        <div>
            <Graphviz
                dot={`digraph GrafoFamiliar {
          ${Object.keys(nodos).map((nodo) => {
                    const relaciones = nodos[nodo].map((relacion) => `"${nodo}" -> "${relacion.nodo}" [label="${relacion.relacion}"];`);
                    return [...relaciones, `"${nodo}" [shape=box];`].join('\n');
                }).join('\n')}
        }`}
                options={{ format: 'png', totalMemory: 900000000 }}
                onClickNode={(nodeName) => handleNodoClick(nodeName)}
            />
            <p>{textoRelacion}</p>
        </div>
    );
};

export default GrafoInteractivo;
