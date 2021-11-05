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
//--------------------funciones para ordenar los filtros

const ordenarPorFechaMasReciente  = (array) =>{
  const fechaJs = new Date(array.fecha)
  return array.sort((a, b)=>{
  return a.fechaJs > b.fechaJs
})
}

const ordenarPorFechaMasAntigua  = (array) =>{
  const fechaJs = new Date(array.fecha)
  return array.sort((a, b)=>{
  return a.fechaJs < b.fechaJs
})
}
const ordenarAZ = (array) =>{
  return array.sort((a, b)=>{
  return a.descripcion - b.descripcion
})
}

const ordenarZA = (array) =>{
  return array.sort((a, b)=>{
  return b.descripcion - a.descripcion
})
}

const ordenarPorMonto = (array) =>{
  return array.sort((a, b)=>{
  return b.monto - a.monto
})
}





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
   const arrayOrdenadoPor = arrayFiltradoPorFechas.sort((a, b) => { //ordeno 
        
      })


  return arrayOrdenadoPor
  }

//filtros
//se debe filtrar por tipo
//se debe filtrar por categoria
// debo poder elegir la fecha desde donde le aplico el filtro quiero que me muestra todos los resultados A PARTIR de esa fecha
//ordenar por:
//Mas reciente, aca involucra fechas
// Menos reciente; aca involucra fechas
//Mayor monto implica la catergoria monto en el objeto dentro del array
//menor monto ""
//ordeno de A/z
//ordeno de Z/a
//para ordenar tengo dos ides
//por un lado definir funciones afuera y llamarlas en una sola funcion dentro de la funcion aplicar filtros que se llame ordenar Por
//puedo hacer una funcion ordenar por que ejecute funciones dentro de if
//solo tengo que hacer 3 funciones con if 
//una por ordenar por fecha
//una de ordenar por monto
//otra de ordenar por orden alfabetico la DESCRIPCION

//para la funcion ordenar tengo que tomar el array de objetos y mostrarlos en el orden de acuerdo a lo que requiere. en monto tengo que ordenar de acuerdo a monto


  //----Agrega filtro a tipo y categoria cuando modifico los select------
  filtroTipo.onchange = () => {
    const arrayFiltrado = aplicarFiltros() 
    mostrarOperacionesEnHTML(arrayFiltrado)
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

