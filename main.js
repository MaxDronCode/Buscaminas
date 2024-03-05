init()

function init() {
    let tab1 = new Tablero(5,5,5);
    
    tab1.generaBombas()

    tab1.calculaAdyacentes()

    //tab1.pintarTablero()
    
    anyadirTableroAlDOM(tab1)
    
    
    
}