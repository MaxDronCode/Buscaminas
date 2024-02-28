import { Tablero } from "./Tablero.js"

init()

function init() {
    let tab1 = new Tablero(3,3,2);
    
    tab1.generaBombas()

    tab1.pintarTablero()
    
    

    
}