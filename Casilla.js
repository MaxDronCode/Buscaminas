class Casilla {
    // Atributos
    y;
    x;
    bomba;
    adyacentes;
    bandera;
    descubierta = false;
    
    // Constructor
    constructor(x,y,bomba){
        this.x = x
        this.y = y
        this.bomba = bomba
        
    }
    // Métodos
    revelar(){
        this.descubierta = true
    }

    marcar(){} // TODO

    
}