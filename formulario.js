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

function init(){
    guardarFormEnLocaleStorage()
}