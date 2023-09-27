const autos = [
  { modelo: '208', marca: 'Peugeot', anio: 2020, kilometraje: 5000, color: 'Rojo', precio: 25000 },
  { modelo: 'Cruze', marca: 'Chevrolet', anio: 2021, kilometraje: 10000, color: 'Azul', precio: 30000 },
  { modelo: 'Gol trend', marca: 'Volkswagen', anio: 2019, kilometraje: 15000, color: 'Negro', precio: 20000 },
  {modelo: 'kangoo' , marca: 'renault', anio: 2019, kilometraje: 26000, color: 'negro' , precio: 35000
  }
];

function mostrarCatalogo() {
  let catalogo = 'Catálogo de autos:\n\n';

  // Uso de Map -> Mostrar modelos en mayúsculas 
  const autosModeloEnMayuscula = autos.map((auto) => {
    auto.modelo = auto.modelo.toUpperCase();
    return auto;
  });

  for (let index = 0; index < autosModeloEnMayuscula.length; index++) {
    const auto = autos[index];
    catalogo = catalogo + (index + 1) + '. ' + auto.marca + ' - ' + auto.modelo + ' - ' + auto.anio + ' - ' + auto.kilometraje + ' km - ' + auto.color + ' - $' + auto.precio + '\n';
  }

  alert(catalogo);
}


function comprarAuto() {
  const seleccion = parseInt(prompt('Ingrese el número del auto que desea comprar:')) - 1;

  if (seleccion >= 0 && seleccion < autos.length) {
    const autoSeleccionado = autos[seleccion];

    const nombre = prompt('Ingrese su nombre completo:');
    const direccion = prompt('Ingrese su dirección de entrega:');
    const tarjetaCredito = prompt('Ingrese el número de su tarjeta de crédito:');

    const confirmacion = 'Compra realizada exitosamente.\n\nAuto: ' + autoSeleccionado.modelo + ' - ' + autoSeleccionado.marca + '\nNombre: ' + nombre + '\nDirección: ' + direccion + '\nTarjeta de crédito: ' + tarjetaCredito;

    alert(confirmacion);
  } else {
    alert('Selección inválida');
  }
}


function simuladorCompraAuto() {

  console.log
  let opcion = '';

  do {
    opcion = prompt('Seleccione una opción:\n\n1. Ver catálogo de autos\n2. Comprar auto\n3. Salir');

    switch (opcion) {
      case '1':
        mostrarCatalogo();
        break;
      case '2':
        comprarAuto();
        break;
      case '3':
        alert('Gracias por utilizar nuestra página oficial');
        break;
      default:
        alert('Opción inválida');
        break;
    }
  } while (opcion !== '3');
}

// obtener elemento del DOM y capturar su evento click
const btnIniciarSimulador = document.getElementById("btnIniciarSimulador");
btnIniciarSimulador.addEventListener("click", simuladorCompraAuto);