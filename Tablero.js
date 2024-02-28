export class Tablero {
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
                
                tablero[fila].push(0)

            }
            //console.log(tablero[fila])
        }

        return tablero
    }

    generaBombas() {

        for (let repeticion = 0; repeticion < this.bombas; repeticion++) {

            let ocupada = true
            
            do{
                let randomX = Math.floor(Math.random() * this.columnas)
                let randomY = Math.floor(Math.random() * this.filas)

                if (this.tabla[randomY][randomX] == 0){
                    this.tabla[randomY][randomX] = 9
                    ocupada = false
                }
            }while(ocupada)
                
        }
    }

    pintarTablero(){
        for (const i in this.tabla) {
            console.log(this.tabla[i])
        }
    }
    // recorrer todas las casillas del tablero, comprobar si es una bomba, y si no lo es, ejecutar la funcion contarBombas()
    calculaAdyacentes(){
        

        for (let fila = 0; fila < this.tabla.length; fila++){
            

            for (let columna = 0; columna < this.tabla[fila].length; columna++){

                

                let contador;

                if(this.tabla[fila][columna] == 9){
                    console.log("Aqui hay una bomba")
                    continue // si es una bomba, saltamos a la siguiente
                    
                } else {
                    console.log("Aqui hay agua")
                    contador = this.contarBombas(fila, columna) // si esa casilla no es una bomba, contamos
                    console.log("Constador: ", contador)
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
                    if (this.tabla[y][x] == 9) contador++
                }
                
            }
        }
        return contador
    }

    anyadirTableroAlDOM(){
        let tablero = document.getElementById("tablero");
        for (let i = 0; i < this.filas; i++){
            for (let j = 0; j < this.columnas; j++){
                let cubo = document.createElement("div")
                cubo.textContent = this.tabla[i][j]
                cubo.className = "cubo"
                tablero.appendChild(cubo)

            }
        }
    }
}