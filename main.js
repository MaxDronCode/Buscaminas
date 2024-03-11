init()

function init() {
    let filas = parseInt(prompt("Indique el número de filas:"))
    let columnas = parseInt(prompt("Indique el número de columnas:"))
    let bombas = parseInt(prompt("Indique el número de bombas:"))

    window.open()

    let tab1 = new Tablero(filas,columnas,bombas);
    
    tab1.generaBombas()

    tab1.calculaAdyacentes()
    
    anyadirTableroAlDOM(tab1)
    
    
    
}