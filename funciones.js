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
            if (pTab.tabla[i][j].bomba == true){
                cubo.innerHTML = pTab.tabla[i][j].bomba // Añadir imagen de unna bomba
            }else{
                cubo.innerHTML = pTab.tabla[i][j].adyacentes // Añadir una fuente guay
            }
            cubo.className = "cubo"
            tableroDOM.appendChild(cubo)
        }
    }
}