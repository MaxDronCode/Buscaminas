init()

function init() {
    let tab1 = new Tablero(4,4,1);
    
    tab1.generaBombas()

    tab1.calculaAdyacentes()
    
    anyadirTableroAlDOM(tab1)
    
    
    
}