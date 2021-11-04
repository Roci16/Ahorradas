const tarjeta = document.getElementById("tarjeta")
const botonCategorias = document.getElementById("boton-categorias")
const botonBalance = document.getElementById("boton-balance")
const botonReporte = document.getElementById("boton-reportes")
const seccionCategorias = document.getElementById("seccion-categorias")
const seccionCentral = document.getElementById("seccion-central")
const seccionReportes = document.getElementById("seccion-reportes")
const botonNuevaOperacion = document.getElementById("boton-nueva-operacion")
const ventanaNuevaOperacion = document.getElementById("accion-boton-nueva-operacion")


// Funciones Botones Nav Superior
botonBalance.onclick = () => {

    seccionCategorias.classList.add("is-hidden")
    seccionCentral.classList.remove("is-hidden")
    seccionReportes.classList.add("is-hidden")

}

botonCategorias.onclick = () => {

    seccionCategorias.classList.remove("is-hidden")
    seccionCentral.classList.add("is-hidden")
    seccionReportes.classList.add("is-hidden")

}

botonReporte.onclick = () => {

    seccionReportes.classList.remove("is-hidden")
    seccionCentral.classList.add("is-hidden")
    seccionCategorias.classList.add("is-hidden")

}

//Balance

botonNuevaOperacion.onclick = () => {
    seccionCentral.classList.add("is-hidden")
    ventanaNuevaOperacion.classList.remove("is-hidden")
}




const operaciones = [{
        descripcion: 'Sueldo',
        categoria: 'Trabajo',
        fecha: '01/01/2021',
        monto: 50000,
        tipo: 'Ganancia',
    },
    {
        descripcion: 'Pago de alquiler',
        categoria: 'Alquiler',
        fecha: '02/01/2021',
        monto: 15000,
        tipo: 'Gasto',
    },
    {
        descripcion: 'Pago de expensas',
        categoria: 'Alquiler',
        fecha: '02/01/2021',
        monto: 5000,
        tipo: 'Gasto',
    },
    {
        descripcion: 'Pago de internet',
        categoria: 'Servicios',
        fecha: '10/01/2021',
        monto: 2000,
        tipo: 'Gasto',
    },
    {
        descripcion: 'Trabajo freelance',
        categoria: 'Trabajo',
        fecha: '15/01/2021',
        monto: 20000,
        tipo: 'Ganancia',
    },
    {
        descripcion: 'Cena con amigas',
        categoria: 'Salidas',
        fecha: '18/01/2021',
        monto: 1500,
        tipo: 'Gasto',
    },
];

// -------------funciones formulario FILTROS-------------------
//llamo a los elemento del form
const formulario = document.getElementById("form")
const filtroTipo = document.getElementById("select-tipo")
const filtroCategorias = document.getElementById("select-categoria")
const filtroFecha = document.getElementById("date")
const filtroOrdenarPor = document.getElementById("select-ordenar")
const divOperaciones = document.getElementById("div-operaciones")
// funcion mostrar en html
const aplicarDescripcionAOperaciones = () =>{
   return  `<div class="columns has-text-weight-semibold is-hidden-mobile">
            <div class="column is-3">Descripción</div>
            <div class="column is-3">Categoría</div>
            <div class="column is-2 has-text-right">Fecha</div>
            <div class="column is-2 has-text-right">Monto</div>
            <div class="column is-2 has-text-right">Acciones</div>
             </div> ` 
}
const mostrarOperacionesEnHTML = (array) => {
    
  let acc = ""
    array.map((operacion) => {
      acc = acc + `
      <div class="fila columns">
      <div class="column is-3 has-text-weight-semibold">
        <p>${operacion.descripcion}</p>
        </div>
        <div class="column is-3">
        <p>${operacion.categoria}</p>
        </div>
        <div class="column is-2 has-text-right">
        <p>${operacion.fecha}</p>
        </div>
        <div class="column is-2 has-text-right">
        <p>${operacion.tipo}</p>
        </div>
        <div class="column is-2 has-text-right">
        <p>${operacion.monto}</p>
        </div>
      </div>
      `
    })
  
    divOperaciones.innerHTML = aplicarDescripcionAOperaciones() + acc
  }
  mostrarOperacionesEnHTML(operaciones)
// -------------------Función aplicar filtros-----------------

  const aplicarFiltros = () => {
    const tipo = filtroTipo.value //filtro por tipo
    const filtradoPorTipo = operaciones.filter((operacion) => {
      if (tipo === "Todos") {
        return operacion
      }
      return operacion.tipo === tipo 
    })
    
    const categoria = filtroCategorias.value //filtro por categoria aplicando el filtro de tipo
    const filtradoPorCategoria = filtradoPorTipo.filter((operacion) => { 
      if (categoria === "Todos") {
        return operacion
      }
      return operacion.categoria === categoria
    })
  
      const arrayFiltradoPorFechas = filtradoPorCategoria.map((operacion) => { //filtro por fechas
        const nuevoElemento = {...operacion}
        nuevoElemento.fecha = new Date(operacion.fecha).toLocaleDateString() 
        return nuevoElemento
      })
//---------ordenar------------------------
   const arrayOrdenadoPorFechas = arrayFiltradoPorFechas.sort((a, b) => { //ordeno 
        return new Date(a.fecha) - new Date(b.fecha)
      })


  return arrayOrdenadoPorFechas
  }




  //----Agrega filtro a tipo y categoria cuando modifico los select------
  filtroTipo.onchange = () => {
    const arrayFiltrado = aplicarFiltros() 
  }
  
  filtroCategorias.onchange = () => {
   const arrayFiltrado = aplicarFiltros()
    mostrarOperacionesEnHTML(arrayFiltrado)
  }
  
// elijo a partir de la fecha
  filtroFecha.oninput = () => {
    const arrayFiltrado = aplicarFiltros()
    mostrarOperacionesEnHTML(arrayFiltrado)
  }


//----este e.preventDefault evita que el formulario se envie -----
formulario.onsubmit = (e) => {
 e.preventDefault()
  }

// -------------FIN-------------------

// Reporte
/* 
const convertirOperacionesAHTML = (operaciones) => {
    let acc = ""

    operaciones.map((operacion) => {
        acc = acc + `
        <div class="columns ">
            <p class="column">${operacion.descripcion}</p>
            <div class="column is-1" >
                <p class="has-background-primary-light has-text-primary-dark has-text-centered">
                 ${operacion.categoria}
                 </p> 
            </div> 
            <p class="column  has-text-centered" >${operacion.fecha}</p> 
            <p class="column has-text-success has-text-weight-bold">${operacion.monto}</p> 
            <p class="column">${operacion.tipo}</p>               
        </div>
        `
        return acc
    })

    tarjeta.innerHTML = acc
}
console.log(convertirOperacionesAHTML(operaciones));
*/