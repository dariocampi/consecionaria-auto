const autos = [
   { modelo: '135i', marca: 'bmw', anio: 2020, kilometraje: 5000, color: 'Rojo', precio: 25000 },
   { modelo: 'Clase C', marca: 'Mercedes Benz', anio: 2021, kilometraje: 10000, color: 'Blanco', precio: 100000 },
   { modelo: 'Renegade', marca: 'Jeep', anio: 2019, kilometraje: 15000, color: 'Negro', precio: 90000 },
 ];
 
 function mostrarCatalogo() {
   let catalogo = 'Catálogo de autos:\n\n';
 
   for (let index = 0; index < autos.length; index++) {
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
 
 simuladorCompraAuto();