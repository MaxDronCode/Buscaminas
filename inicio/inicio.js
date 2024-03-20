function init() {
    
    let btnConf = document.getElementById("btnConf")

    btnConf.addEventListener("click",abrirFormulario)

    if (localStorage.hasOwnProperty("nombre") == true){
        document.getElementById("hello").innerHTML = `Hola ${localStorage.nombre}, las configuraciones anteriores estan precargadas.</br>
        Filas:    ${localStorage.filas}</br>
        Columnas: ${localStorage.columnas}</br>
        Bombas:   ${localStorage.bombas}</br>`
    } else {
        document.getElementById("hello").innerHTML = "Por favor, abre CONFIGURACIÓN y configura tu partida!"
    }

    window.addEventListener("message", function (event) {
        if (event.data === "ventana_cerrada") {
            if (localStorage.hasOwnProperty("nombre") == true){
                document.getElementById("hello").innerHTML = `Hola ${localStorage.nombre}, las configuraciones anteriores estan precargadas.</br>
                Filas:    ${localStorage.filas}</br>
                Columnas: ${localStorage.columnas}</br>
                Bombas:   ${localStorage.bombas}</br>`
            }
    }
    })
}

function abrirFormulario(){
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=600,height=900,left=300,top=100`;
    let popUpForm = window.open("/formulario/formulario.html","popUp",params)
}

