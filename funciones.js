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
            cubo.setAttribute("coorX", i)
            cubo.setAttribute("coorY", j)
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
                contenido.style.visibility = "visible"
                this.classList.add("descubierto")
                pTab.tabla[i][j].revelar()
                
            })

        }
    }
}