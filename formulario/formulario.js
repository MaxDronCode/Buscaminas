function init(){
    recuperaDatos()
    agregarEventosFormulario()  
    
}

function agregarEventosFormulario(){
    let formulario = document.getElementById("miForm")
    formulario.addEventListener("submit",function(event){
        event.preventDefault()
        if (validacion()){
            guardarFormEnLocaleStorage()
            window.addEventListener("beforeunload", function () {
                window.opener.postMessage("ventana_cerrada", "*")
            })
             
            window.close()
        } 
    })

    let nombreInput = document.getElementById("nombre")
    nombreInput.addEventListener("input", function() {
        let errorNombre = document.getElementById("errorNombre")
        if (nombreInput.validity.valueMissing) {
            errorNombre.textContent = "El campo Nombre no puede estar vacío."
        } else {
            errorNombre.textContent = ""
        }
    })

    let apellidoInput = document.getElementById("apellido")
    apellidoInput.addEventListener("input", function() {
        let errorApellido = document.getElementById("errorApellido")
        if (apellidoInput.validity.valueMissing) {
            errorApellido.textContent = "El campo Apellido no puede estar vacío."
        } else {
            errorApellido.textContent = ""
        }
    })

    let fechaInput = document.getElementById("fechaNacimiento")
    fechaInput.addEventListener("input", function() {
        let errorfecha = document.getElementById("errorfecha")
        if (fechaInput.validity.valueMissing) {
            errorfecha.textContent = "El campo Fecha no puede estar vacío."
        } else {
            errorfecha.textContent = ""
        }
    })

    let nickInput = document.getElementById("nick")
    nickInput.addEventListener("input", function() {
        let errorNick = document.getElementById("errorNick")
        if (nickInput.validity.valueMissing) {
            errorNick.textContent = "El campo Nick no puede estar vacío."
        } else {
            errorNick.textContent = ""
        }
    })

    let emailInput = document.getElementById("email")
    emailInput.addEventListener("input", function() {
        let errorEmail = document.getElementById("errorEmail")
        if (emailInput.validity.valueMissing) {
            errorEmail.textContent = "El campo Email no puede estar vacío."
        } else if (emailInput.validity.patternMismatch){
            errorEmail.textContent = "El formato de mail válido es __@__.__"
        } else {
            errorEmail.textContent = ""
        }
    })

    let filasInput = document.getElementById("filas")
    filasInput.addEventListener("input", function() {
        let errorFilas = document.getElementById("errorFilas")
        if (filasInput.validity.valueMissing) {
            errorFilas.textContent = "El campo Filas no puede estar vacío."
        } else if (filasInput.validity.rangeUnderflow) {
            errorFilas.textContent = "El minimo de filas es 1."
        } else {
            errorFilas.textContent = ""
        }
        actualizarMaxBombas()
    })

    let columnasInput = document.getElementById("columnas")
    columnasInput.addEventListener("input", function() {
        let errorColumnas = document.getElementById("errorColumnas")
        if (columnasInput.validity.valueMissing) {
            errorColumnas.textContent = "El campo Columnas no puede estar vacío."
        } else if (columnasInput.validity.rangeUnderflow) {
            errorColumnas.textContent = "El minimo de filas es 1."
        } else {
            errorColumnas.textContent = ""
        }
        actualizarMaxBombas()
    })

    let bombasInput = document.getElementById("bombas")
    bombasInput.addEventListener("input", function() {
        let errorBombas = document.getElementById("errorBombas")
        if (bombasInput.validity.valueMissing) {
            errorBombas.textContent = "El campo Bombas no puede estar vacío."
        } else if (bombasInput.validity.rangeOverflow) {
            errorBombas.textContent = "No caben tantas bombas!"
        } else {
            errorBombas.textContent = ""
        }
    })
}

function guardarFormEnLocaleStorage() {    
    let formulario = document.getElementById("miForm")
    localStorage.nombre = formulario.nombre.value
    localStorage.apellido = formulario.apellido.value
    localStorage.fechaNacimiento = formulario.fechaNacimiento.value
    localStorage.nick = formulario.nick.value
    localStorage.email = formulario.email.value
    localStorage.filas = formulario.filas.value
    localStorage.columnas = formulario.columnas.value
    localStorage.bombas = formulario.bombas.value    
}

function recuperaDatos(){
    let formulario = document.getElementById("miForm")
    formulario.nombre.value = localStorage.nombre
    formulario.apellido.value = localStorage.apellido
    formulario.fechaNacimiento.value = localStorage.fechaNacimiento
    formulario.nick.value = localStorage.nick
    formulario.email.value = localStorage.email 
    formulario.filas.value = localStorage.filas
    formulario.columnas.value = localStorage.columnas
    formulario.bombas.value = localStorage.bombas
    actualizarMaxBombas()
}

function validacion(){
    let esValido = true

    //nomrbe
    let nombreInput = document.getElementById("nombre")
    if (nombreInput.validity.valueMissing) esValido = false

    //apellido
    let apellidoInput = document.getElementById("apellido")
    if (apellidoInput.validity.valueMissing) esValido = false

    //fecha
    let fechaInput = document.getElementById("fechaNacimiento")
    if (fechaInput.validity.valueMissing) esValido = false

    //nick
    let nickInput = document.getElementById("nick")
    if (nickInput.validity.valueMissing) esValido = false

    //email
    let emailInput = document.getElementById("email")
    if (emailInput.validity.valueMissing || emailInput.validity.patternMismatch) esValido = false
    
    //filas
    let filasInput = document.getElementById("filas")
    if (filasInput.validity.valueMissing || filasInput.validity.rangeUnderflow) esValido = false

    //columnas
    let columnasInput = document.getElementById("columnas")
    if (columnasInput.validity.valueMissing || columnasInput.validity.rangeUnderflow) esValido = false

    //bombas
    let inputBombas = document.getElementById("bombas")
    if (inputBombas.validity.valueMissing || inputBombas.validity.rangeOverflow) esValido = false
     
    
    return esValido
}

// Función para actualizar el máximo de bombas permitidas
function actualizarMaxBombas() {
    let filasInput = document.getElementById("filas")
    let columnasInput = document.getElementById("columnas")
    let bombasInput = document.getElementById("bombas")

    let filas = parseInt(filasInput.value, 10) || 0
    let columnas = parseInt(columnasInput.value, 10) || 0

    let maxBombas = filas * columnas - 1

    bombasInput.setAttribute('max', maxBombas.toString())
}
