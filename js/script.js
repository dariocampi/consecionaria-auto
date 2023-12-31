
let autos = { };

    async function cargarDatosDesdeArchivo() {
        try {
            const response = await fetch('autos.json');
            autos = await response.json();
        } catch (error) {
            console.error('Error al cargar datos desde el archivo JSON local:', error);
        }
    }

  function mostrarCatalogo() {
      const lista = $("#listaAutos");
      lista.empty();

      Object.values(autos).forEach((auto, indice) => {
          const elemento = `<li>${indice + 1}. ${auto.modelo} - ${auto.marca} - ${auto.anio} - ${auto.kilometraje} km - ${auto.color} - $${auto.precio}</li>`;
          lista.append(elemento);
      });

      $("#catalogo").show();
      $("#compra").hide();
      $("#salida").hide();
  }

  function guardarCompra(seleccion, nombre, direccion, tarjetaCredito) {
      const compra = { seleccion, nombre, direccion, tarjetaCredito };
      localStorage.setItem("ultimaCompra", JSON.stringify(compra));
  }

  function mostrarUltimaCompra() {
      const ultimaCompra = JSON.parse(localStorage.getItem("ultimaCompra"));
      if (ultimaCompra) {
          const confirmacion = $("#confirmacion");
          confirmacion.text(`Última compra realizada:\n\nAuto: ${ultimaCompra.seleccion}\nNombre: ${ultimaCompra.nombre}\nDirección: ${ultimaCompra.direccion}\nTarjeta de crédito: ${ultimaCompra.tarjetaCredito}`);
      }
  }


  function comprarAuto() {
    const seleccion = $("#seleccionAuto option:selected").text();
    const nombre = $("#nombre").val();
    const direccion = $("#direccion").val();
    const tarjetaCredito = $("#tarjetaCredito").val();
    guardarCompra(seleccion, nombre, direccion, tarjetaCredito);

    Swal.fire({
        title: 'Compra realizada exitosamente',
        html: `Auto: ${seleccion}<br>Nombre: ${nombre}<br>Dirección: ${direccion}<br>Tarjeta de crédito: ${tarjetaCredito}`,
        icon: 'success',
        confirmButtonText: 'Ok'
    }).then(() => {});
  }

  function resetearCompra() {
      $("#seleccionAuto").val("");
      $("#nombre").val("");
      $("#direccion").val("");
      $("#tarjetaCredito").val("");
      $("#confirmacion").text("");
  }


   // Filtrar autos por año ingresado por el usuario usando filter
   $("#btnFiltrarPorAnio").click(function () {
        const anio = parseInt($("#inputAnio").val());
        if (!isNaN(anio)) {
            const autosFiltrados = Object.values(autos).filter(auto => auto.anio === anio);
            const resultado = autosFiltrados.map(auto => `${auto.modelo} - ${auto.marca}`);
            $("#resultadoFiltrarPorAnio").html(`<p>Autos del año ${anio}:</p><ul>${resultado.map(elemento => `<li>${elemento}</li>`).join('')}</ul>`);
        } else {
            $("#resultadoFiltrarPorAnio").text("Por favor, ingrese un año válido.");
        }
    });

    // Buscar un auto por modelo ingresado por el usuario usando find
    $("#btnBuscarPorModelo").click(function () {
        const modelo = $("#inputModelo").val().trim();
        if (modelo !== "") {
            const autoEncontrado = Object.values(autos).find(auto => auto.modelo.toLowerCase() === modelo.toLowerCase());
            if (autoEncontrado) {
                $("#resultadoBuscarPorModelo").html(`<p>Auto encontrado: ${autoEncontrado.modelo} - ${autoEncontrado.marca}</p>`);
            } else {
                $("#resultadoBuscarPorModelo").text(`Auto con modelo "${modelo}" no encontrado.`);
            }
        } else {
            $("#resultadoBuscarPorModelo").text("Por favor, ingrese un modelo válido.");
        }
    });

    // Calcular el precio total de todos los autos usando reduce
    $("#btnCalcularPrecioTotal").click(function () {
        const precioTotal = Object.values(autos).reduce((total, auto) => total + auto.precio, 0);
        $("#resultadoCalcularPrecioTotal").text(`Precio total de todos los autos: $${precioTotal}`);
    });

  $("#btnVerCatalogo").click(mostrarCatalogo);


  $("#btnComprarAuto").click(function () {
      resetearCompra();
      const selector = $("#seleccionAuto");
      selector.empty();

      Object.keys(autos).forEach((autoId) => {
          const auto = autos[autoId];
          const opcion = `<option value="${autoId}">${auto.modelo} - ${auto.marca}</option>`;
          selector.append(opcion);
      });

      $("#catalogo").hide();
      $("#compra").show();
      $("#salida").hide();
  });




  $("#btnConfirmarCompra").click(comprarAuto);
  $(document).ready(mostrarUltimaCompra);
  $(document).ready(cargarDatosDesdeArchivo);