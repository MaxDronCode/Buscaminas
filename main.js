init()

function init() {
    let tab1 = new Tablero(7,7,5);
    
    tab1.generaBombas()

    tab1.calculaAdyacentes()
    
    anyadirTableroAlDOM(tab1)
    
    
    
}