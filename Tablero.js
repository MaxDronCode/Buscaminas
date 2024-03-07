class Tablero {
    // Atributos
    filas;
    columnas;
    bombas;
    tabla;
    // Constructor
    constructor(filas, columnas, bombas){
        this.filas = filas;
        this.columnas = columnas;
        this.bombas = bombas;
        this.tabla = this.generaTablero()
    }
    // Métodos
    generaTablero() {
        let tablero = [];
        for (let fila = 0; fila < this.filas; fila++){
            tablero.push([]);
            for (let columna = 0; columna < this.columnas; columna++){
                let nuevaCasilla = new Casilla(columna, fila, false)   // Generar objetos casilla con bomba en false
                tablero[fila].push(nuevaCasilla) // añadir Casilla al tablero
                // añadir un elemento que tape la casilla, que al click sera destapado.
                let tapa = document.createElement("div")
            }
        }
        return tablero
    }
    generaBombas() {
        for (let repeticion = 0; repeticion < this.bombas; repeticion++) {
            let ocupada = true  
            do{
                let randomX = Math.floor(Math.random() * this.columnas)
                let randomY = Math.floor(Math.random() * this.filas)
                if (this.tabla[randomY][randomX].bomba == false){ // Aqui lo que hay es una casilla
                    this.tabla[randomY][randomX].bomba = true
                    ocupada = false
                }
            }while(ocupada) 
        }
    }
    // recorrer todas las casillas del tablero, comprobar si es una bomba, y si no lo es, ejecutar la funcion contarBombas()
    calculaAdyacentes(){
        for (let fila = 0; fila < this.tabla.length; fila++){
            for (let columna = 0; columna < this.tabla[fila].length; columna++){
                let contador;
                if(this.tabla[fila][columna].bomba == true){
                    continue // si es una bomba, saltamos a la siguiente
                } else {
                    contador = this.contarBombas(fila, columna) // si esa casilla no es una bomba, contamos
                    //this.tabla[fila][columna] = contador // se pinta el tablero
                    this.tabla[fila][columna].adyacentes = contador // asignamos el valor del atributo de casilla
                }
                //TODO asignar ese numero a la propiedad bombasAdyacentes del objeto Casilla 
            }
        }
    }
    
    
    contarBombas(fila,columna){
        let contador = 0
        for (let y = fila - 1; y <= fila + 1; y++){
            if (y < 0 || y > this.filas - 1) continue
            for (let x = columna - 1; x <= columna + 1; x++){
                if (x < 0 || x > this.columnas - 1) continue
                else{
                    if (this.tabla[y][x].bomba == true) contador++
                }
            }
        }
        return contador
    }
    pintarTablero(){
        for (let i = 0; i < this.filas; i++) {
            //console.log(this.tabla[i])
            for (let j = 0; j < this.columnas; j++){
                console.log(this.tabla[i][j].bomba)
            }
        }
    }

    
}