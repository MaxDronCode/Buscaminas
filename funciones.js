// TODO Esta funcion no funciona. Rehacer
function anyadirTableroAlDOM(pTab){
    let tableroDOM = document.getElementById("tablero");
    for (let i = 0; i < pTab.filas; i++){
        console.log("fila:", i)
        for (let j = 0; j < pTab.columnas; j++){
            console.log("columna: ", j)
            let cubo = document.createElement("div")
            if (pTab.tabla[i][j].bomba == true){
                cubo.innerHTML = pTab.tabla[i][j].bomba
            }else{
                cubo.innerHTML = pTab.tabla[i][j].adyacentes
            }
            cubo.className = "cubo"
            tableroDOM.appendChild(cubo)
        }
    }
}