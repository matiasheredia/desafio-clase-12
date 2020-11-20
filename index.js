//Lo que quiero hacer es tomar la información de las dos localidades con dos imputs, y cuando se haga click en el botón "Cotizar envío" suceda lo siguiente:
//Se ejecute la función donde el valor de la localidad de retiro se seguarde en la variable "localidadRetiro" y el valor de la localidad de entrega en "localidadEntrega". Con esto tengo las dos variables con valores y posteriormente se ejecuta la función que cotiza, llamada "cotizacionRapida"

$(document).ready(function(){
    console.log("vamooo")
}
)



var zonaUno = ["Nordelta", "Tigre", "San Fernando", "San Isidro", "Martinez", "Vicente Lopez", "Olivos"]
var zonaDos = ["La Lonja", "Pilar Centro", "Ingeniero Maschwitz", "El Talar", "General Pacheco"]


var costo200Pesos = "El costo es de $200."
var costo260Pesos = "El costo es de $260."
var costo310Pesos = "El costo es de $310."
var costo340Pesos = "El costo es de $340."


function mismaLocalidad(localidades){
    if ((localidades.localidadRetiro == "CABA") && (localidades.localidadEntrega == "CABA")) {
        alert (costo200Pesos)
    }   
    else if ((localidades.localidadRetiro == "Vicente Lopez") && (localidades.localidadEntrega == "Vicente Lopez")) {
        alert (costo200Pesos)
    }
    else if ((localidades.localidadRetiro == "San Isidro") && (localidades.localidadEntrega == "San Isidro")) {
        alert (costo200Pesos)
    }
    else if ((localidades.localidadRetiro == "Tigre") && (localidades.localidadEntrega == "Tigre")) {
        alert (costo200Pesos)
    }
    else alert("Todavía no llegamos a esa zona o estás escribiendo las localidades de forma incorrecta. El sistema solo acepta los lugares de la siguiente forma: 'CABA', 'Vicente Lopez', 'San Isidro', 'Tigre'.") 

}

function distintaLocalidad(localidades){
    if ((localidades.localidadRetiro == "CABA") && (localidades.localidadEntrega == "Vicente Lopez")) {
        alert (costo260Pesos)
    }  
    else if ((localidades.localidadRetiro == "CABA") && (localidades.localidadEntrega == "San Isidro")) {
        alert (costo310Pesos)
    }  
    else if ((localidades.localidadRetiro == "CABA") && (localidades.localidadEntrega == "Tigre")) {
        alert (costo340Pesos)
    }  
    else if ((localidades.localidadRetiro == "Vicente Lopez") && (localidades.localidadEntrega == "CABA")) {
        alert (costo260Pesos)
    }  
    else if ((localidades.localidadRetiro == "Vicente Lopez") && (localidades.localidadEntrega == "San Isidro")) {
        alert (costo260Pesos)
    }  
    else if ((localidades.localidadRetiro == "Vicente Lopez") && (localidades.localidadEntrega == "Tigre")) {
        alert (costo310Pesos)
    }  
    else if ((localidades.localidadRetiro == "San Isidro") && (localidades.localidadEntrega == "CABA")) {
        alert (costo310Pesos)
    }  
    else if ((localidades.localidadRetiro == "San Isidro") && (localidades.localidadEntrega == "Vicente Lopez")) {
        alert (costo260Pesos)
    }  
    else if ((localidades.localidadRetiro == "San Isidro") && (localidades.localidadEntrega == "Tigre")) {
        alert (costo310Pesos)
    }  
    else if ((localidades.localidadRetiro == "Tigre") && (localidades.localidadEntrega == "CABA")) {
        alert (costo340Pesos)
    }  
    else if ((localidades.localidadRetiro == "Tigre") && (localidades.localidadEntrega == "Vicente Lopez")) {
        alert (costo310Pesos)
    }  
    else if ((localidades.localidadRetiro == "Tigre") && (localidades.localidadEntrega == "San Isidro")) {
        alert (costo340Pesos)
    }  

}





function Localidades(localidadRetiro, localidadEntrega){
    this.localidadRetiro = localidadRetiro
    this.localidadEntrega = localidadEntrega
}

function VerificacionLocalidadRetiro(verificacionLocalidadRetiro){
    this.retiroZ1 = verificacionLocalidadRetiro
}

function VerificacionLocalidadEntrega(verificacionLocalidadEntrega){
    this.entregaZ1 = verificacionLocalidadEntrega
}


//Tomo los datos del HTML
function tomarDatos(){

    var localidadRetiro = document.getElementById("localidadUno").value
    var localidadEntrega = document.getElementById("localidadDos").value

    var envio = new Localidades(localidadRetiro, localidadEntrega)

    return envio

}


function cotizacion(localidades, verificacionLocalidadRetiro, verificacionLocalidadEntrega){

if ((localidades.localidadRetiro == verificacionLocalidadRetiro.retiroZ1) && (localidades.localidadEntrega == verificacionLocalidadEntrega.entregaZ1)){
    console.log("BOCAAAA")
}
    }





//Zona 1

function VerSiRetiroCorrespondeAZonaUno(localidades){
    for (var  z1 = 0; z1 < 7; z1++) {
        if ((localidades.localidadRetiro == zonaUno[z1]) )    {
            var retiroZ1 = localidades.localidadRetiro

            var retiroEsDeZonaUno = new VerificacionLocalidadRetiro(retiroZ1)  
            break 
         }   
    }
    return retiroEsDeZonaUno
}

function VerSiEntregaCorrespondeAZonaUno(localidades){
    for (var  z1 = 0; z1 < 7; z1++) {
        if ((localidades.localidadEntrega == zonaUno[z1]) )    {
            var entregaZ1 = localidades.localidadEntrega

            var entregaEsDeZonaUno = new VerificacionLocalidadEntrega(entregaZ1)
            break 
         }   
    }
    return entregaEsDeZonaUno
}

//Zona 2

function VerSiRetiroCorrespondeAZonaDos(localidades){
    for (var  z2 = 0; z2 < 5; z2++) {
        if ((localidades.localidadRetiro == zonaUno[z2]) )    {
            var retiroEsDeZonaDos = localidades.localidadRetiro  
            break 
         }   
    }
    return retiroEsDeZonaDos 
}

function VerSiEntregaCorrespondeAZonaDos(localidades){
    for (var  z2 = 0; z2 < 5; z2++) {
        if ((localidades.localidadEntrega == zonaUno[z2]) )    {
            var entregaEsDeZonaDos = localidades.localidadEntrega  
            break 
         }   
    }
    return entregaEsDeZonaDos
}



  function verifhtml(){
        debugger
    
    $("#form").change(function(){
        if ($("#localidadUno").val() > 1) {
            $("button").prop("disabled", false )
        }


        
    })
}

verifhtml()

//FUNCION FINAL QUE SE EJECUTA CON EL BOTON DE HTML

function calculoFinal(){
    /*debugger

    envio_1 = tomarDatos()
    retiroo = VerSiRetiroCorrespondeAZonaUno(envio_1)
    entregaa = VerSiEntregaCorrespondeAZonaUno(envio_1)
    cotizacion(envio_1, retiroo, entregaa)*/

  

    //VerQueZonaEs(envio_1)
    //cotizacionRapida(envio_1)
 }
