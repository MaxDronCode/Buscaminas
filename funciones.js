function anyadirTableroAlDOM(pTab){
    let tableroDOM = document.getElementById("tablero");
    tableroDOM.style.gridTemplateColumns = `repeat(${pTab.columnas}, 1fr)`
    tableroDOM.style.gridTemplateRows = `repeat(${pTab.filas}, 1fr)`
    // tableroDOM.style.width = `calc(${pTab.columnas} * 140px)`
    // tableroDOM.style.height = `calc(${pTab.filas} * 140px)`
    
    for (let i = 0; i < pTab.filas; i++){
        console.log("fila:", i)
        for (let j = 0; j < pTab.columnas; j++){
            console.log("columna: ", j)
            let cubo = document.createElement("div")
            cubo.setAttribute("coorY", i)
            cubo.setAttribute("coorX", j)
            let contenido = document.createElement("span");
            if (pTab.tabla[i][j].bomba == true){
                contenido.innerHTML = "B" // Añadir imagen de unna bomba
            }else{
                contenido.innerHTML = pTab.tabla[i][j].adyacentes // Añadir una fuente guay
            }
            contenido.style.visibility = "hidden"
            cubo.appendChild(contenido)
            cubo.className = "cubo"
            tableroDOM.appendChild(cubo)

            cubo.addEventListener("click", function() {
    
                pTab.destapaCasilla(i,j)
                //actualizarVista(pTab,i,j)
                //if (pTab.tabla[i][j].bomba) finDelJuego()
            })

        }
    }
}


function actualizarVista(tablero, y, x) {
    let selector = `[coorY="${y}"][coorX="${x}"]`;
    let cubo = document.querySelector(selector);
    let casilla = tablero.tabla[y][x]; // Este es uno de los interruptores

    if (casilla.descubierta) {
        let contenido = cubo.querySelector("span");
        contenido.style.visibility = "visible";
        cubo.classList.add("descubierto");
    }

    
    if (casilla.bomba){
        cubo.style.backgroundColor = "red";
        finDelJuego()
    }

    
}
function finDelJuego(){
    //alert("Fin del juego")
} // TODO

function destaparCasilla(buscaminas,y,x){
    let casilla = buscaminas.tabla[y][x]

     // Si la casilla ya está destapada o es una bomba, no hacemos nada.
     if (casilla.descubierta || casilla.bomba) return;

    // Destapamos la casilla actual y actualizamos la vista.
    casilla.descubierta = true;
    actualizarVista(buscaminas, y, x);

    // Continuar solo si es una casilla "agua".
    if (casilla.adyacentes == 0) {
        let adyacentes = obtenerCasillasAdyacentes(buscaminas, x, y);
        for (let adyacente of adyacentes) {
            // Solo destapamos adyacentes si no son bombas.
            if (!adyacente.bomba) {
                destaparCasilla(buscaminas, adyacente.y, adyacente.x);
            }
        }
    }

}


function obtenerCasillasAdyacentes(buscaminas, x, y) {
    let adyacentes = [];

    // Direcciones en cruz: Arriba, Abajo, Izquierda, Derecha
    let direcciones = [
        { offsetX: 0, offsetY: -1 }, // Arriba
        { offsetX: 0, offsetY: 1 }, // Abajo
        { offsetX: -1, offsetY: 0 }, // Izquierda
        { offsetX: 1, offsetY: 0 } // Derecha
    ];

    for (let dir of direcciones) {
        let newX = x + dir.offsetX;
        let newY = y + dir.offsetY;

        // Comprobar límites
        if (newX >= 0 && newX < buscaminas.columnas && newY >= 0 && newY < buscaminas.filas) {
            adyacentes.push(buscaminas.tabla[newY][newX]);
        }
    }

    return adyacentes;
}



