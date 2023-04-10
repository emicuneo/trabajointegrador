document.addEventListener('DOMContentLoaded', function() {
    setearValores();
});

let miBoton = document.getElementById("btnactualizar");
miBoton.addEventListener("click", actualizarCantidad);


function setearValores() {
    let ceramicos = [1000, 2000, 3000];
    for (let i = 0; i < ceramicos.length; i++) {
      let miInput = document.getElementById(i);
      miInput.value = ceramicos[i];
    }
  }

function actualizarCantidad(id) {
    let valor = document.getElementById(id).value;
    let m2 = document.getElementById(id +"_m2").value;
    let cotizacion = valor*m2
    document.getElementById(id + "_cotizacion").value = cotizacion; // muestra la cotizacion en el campo "Cotizacion"
};



