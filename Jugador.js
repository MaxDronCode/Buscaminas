class Jugador {
    nombre;
    apellido;
    nick;
    fechaNacimiento;
    #edad;
    password;
    score;
    fechaScore;

    constructor(nombre, apellido, nick, fechaNacimiento, edad, password) {
        this.nombre = nombre
        this.apellido = apellido
        this.nick = nick
        this.fechaNacimiento = fechaNacimiento
        this.#edad = edad
        this.password = password
    }

    get edad(){
        return this.#edad
    }

    set edad(edad){
        this.#edad = edad
    }
}