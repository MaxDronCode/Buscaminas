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
        
    }

    
}
function finDelJuego(){
    document.getElementById('overlay').style.display = 'flex';
} 

function destaparCasilla(buscaminas,y,x){
    let casilla = buscaminas.tabla[y][x]

     if (casilla.descubierta || casilla.bomba) return;

    casilla.descubierta = true;
    actualizarVista(buscaminas, y, x);

    if (casilla.adyacentes == 0) {
        let adyacentes = obtenerCasillasAdyacentes(buscaminas, x, y);
        for (let adyacente of adyacentes) {
            if (!adyacente.bomba) {
                destaparCasilla(buscaminas, adyacente.y, adyacente.x);
            }
        }
    }

}


function obtenerCasillasAdyacentes(buscaminas, x, y) {
    let adyacentes = [];

    let direcciones = [
        { offsetX: 0, offsetY: -1 },
        { offsetX: 0, offsetY: 1 }, 
        { offsetX: -1, offsetY: 0 }, 
        { offsetX: 1, offsetY: 0 } 
    ];

    for (let dir of direcciones) {
        let newX = x + dir.offsetX;
        let newY = y + dir.offsetY;

        if (newX >= 0 && newX < buscaminas.columnas && newY >= 0 && newY < buscaminas.filas) {
            adyacentes.push(buscaminas.tabla[newY][newX]);
        }
    }

    return adyacentes;
}



