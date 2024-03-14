init()

function init() {
    let filas = localStorage.filas
    let columnas = localStorage.columnas
    let bombas = localStorage.bombas
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=600,height=300,left=100,top=100`;
    
   

    let tab1 = new Tablero(filas,columnas,bombas);
    
    tab1.generaBombas()

    tab1.calculaAdyacentes()
    
    anyadirTableroAlDOM(tab1)

    
    
    
}