const autos = [
  { modelo: '208', marca: 'Peugeot', anio: 2020, kilometraje: 5000, color: 'Rojo', precio: 25000 },
  { modelo: 'Cruze', marca: 'Chevrolet', anio: 2021, kilometraje: 10000, color: 'Azul', precio: 30000 },
  { modelo: 'Gol trend', marca: 'Volkswagen', anio: 2019, kilometraje: 15000, color: 'Negro', precio: 20000 },
];


function mostrarCatalogo() {
    let lista = document.getElementById("listaAutos");
    lista.innerHTML = "";  // Limpiar lista anterior

    autos.forEach((auto, index) => {
        let item = document.createElement("li");
        item.textContent = `${index + 1}. ${auto.modelo} - ${auto.marca} - ${auto.anio} - ${auto.kilometraje} km - ${auto.color} - $${auto.precio}`;
        lista.appendChild(item);
    });

    document.getElementById("catalogo").style.display = "block";
    document.getElementById("compra").style.display = "none";
    document.getElementById("salida").style.display = "none";
}


function guardarCompra(seleccion, nombre, direccion, tarjetaCredito) {
  const compra = {
      seleccion,
      nombre,
      direccion,
      tarjetaCredito
  };
  localStorage.setItem("ultimaCompra", JSON.stringify(compra));
}

function mostrarUltimaCompra() {
  const ultimaCompra = JSON.parse(localStorage.getItem("ultimaCompra"));
  if (ultimaCompra) {
      const confirmacion = document.getElementById("confirmacion");
      confirmacion.textContent = `Última compra realizada:\n\nAuto: ${ultimaCompra.seleccion} \nNombre: ${ultimaCompra.nombre} \nDirección: ${ultimaCompra.direccion} \nTarjeta de crédito: ${ultimaCompra.tarjetaCredito}`;
  }
}


function comprarAuto() {
  const seleccion = document.getElementById("seleccionAuto").value;
  const nombre = document.getElementById("nombre").value;
  const direccion = document.getElementById("direccion").value;
  const tarjetaCredito = document.getElementById("tarjetaCredito").value;

  guardarCompra(seleccion, nombre, direccion, tarjetaCredito);

  const confirmacion = document.getElementById("confirmacion");
  confirmacion.textContent = `Compra realizada exitosamente.\n\nAuto: ${seleccion} \nNombre: ${nombre} \nDirección: ${direccion} \nTarjeta de crédito: ${tarjetaCredito}`;
}



function resetearCompra() {
  document.getElementById("seleccionAuto").value = "";
  document.getElementById("nombre").value = "";
  document.getElementById("direccion").value = "";
  document.getElementById("tarjetaCredito").value = "";
  document.getElementById("confirmacion").textContent = "";
  document.getElementById("btnComprarAuto").click();
}



document.getElementById("btnVerCatalogo").addEventListener("click", mostrarCatalogo);

document.getElementById("btnComprarAuto").addEventListener("click", function() {
  
  resetearCompra();

  let select = document.getElementById("seleccionAuto");
  select.innerHTML = "";

  autos.forEach((auto, index) => {
      let option = document.createElement("option");
      option.value = auto.modelo;
      option.textContent = `${auto.modelo} - ${auto.marca}`;
      select.appendChild(option);
  });

  document.getElementById("catalogo").style.display = "none";
  document.getElementById("compra").style.display = "block";
  document.getElementById("salida").style.display = "none";
});


document.getElementById("btnConfirmarCompra").addEventListener("click", comprarAuto);
window.addEventListener("DOMContentLoaded", mostrarUltimaCompra);
