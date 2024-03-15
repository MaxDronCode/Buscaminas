function init(){
    recuperaDatos()
    guardarFormEnLocaleStorage()
}

function guardarFormEnLocaleStorage() {

    let botonSubmit = document.getElementById("botonSubmit")
    botonSubmit.addEventListener("click", function() {
        let formulario = document.getElementById("miForm")
        localStorage.nombre = formulario.nombre.value
        localStorage.apellido = formulario.apellido.value
        localStorage.fechaNacimiento = formulario.fechaNacimiento.value
        localStorage.nick = formulario.nick.value
        localStorage.email = formulario.email.value
        localStorage.filas = formulario.filas.value
        localStorage.columnas = formulario.columnas.value
        localStorage.bombas = formulario.bombas.value
        window.close()

        console.log(localStorage.nombre)
        console.log(localStorage.apellido)
        console.log(localStorage.fechaNacimiento)
        console.log(localStorage.nick)
        console.log(localStorage.email)
        console.log(localStorage.filas)
        console.log(localStorage.columnas)
        console.log(localStorage.bombas)
    })

    
}



function recuperaDatos(){
    if (localStorage.hasOwnProperty("nombre") == true){
        let formulario = document.getElementById("miForm")
        formulario.nombre.value = localStorage.nombre
        formulario.apellido.value = localStorage.apellido
        formulario.fechaNacimiento.value = localStorage.fechaNacimiento
        formulario.nick.value = localStorage.nick
        formulario.email.value = localStorage.email 
        formulario.filas.value = localStorage.filas
        formulario.columnas.value = localStorage.columnas
        formulario.bombas.value = localStorage.bombas
    }
}
