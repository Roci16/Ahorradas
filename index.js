const tarjeta = document.getElementById("tarjeta")
const botonCategorias = document.getElementById("boton-categorias")
const botonBalance = document.getElementById("boton-balance")
const botonReporte = document.getElementById("boton-reportes")
const seccionCategorias = document.getElementById("seccion-categorias")
const seccionCentral = document.getElementById("seccion-central")
const seccionReportes = document.getElementById("seccion-reportes")
const botonNuevaOperacion = document.getElementById("boton-nueva-operacion")
const seccionNuevaOperacion = document.getElementById("accion-boton-nueva-operacion")
const botonCancelarOperacion = document.querySelector("#boton-cancelar-operacion");
const botonAgregarOperacion = document.querySelector("#boton-agregar-operacion");
const botonAgregarCategoria = document.getElementById("agregar-categoria-boton")
const inputCategoriaNuevoNombre = document.getElementById("input-categorias-nuevo-nombre")



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
    seccionNuevaOperacion.classList.remove("is-hidden")
    seccionCentral.classList.add("is-hidden")
}


function mostrarBotonCancelarOperacion() {
    botonCancelarOperacion.style.display = 'none';
    botonCancelarOperacion.style.display = 'inline';
}

function mostrarBotonAgregarOperacion() {
    botonAgregarOperacion.style.display = 'none';
    botonAgregarOperacion.style.display = 'inline';
}

//Boton Cancelar

botonCancelarOperacion.onclick = () => {
    botonReporte.classList.add("is-hidden");
    seccionCategorias.classList.add("is-hidden");
    seccionNuevaOperacion.classList.add("is-hidden");
    botonBalance.classList.remove("is-hidden");
}

//Boton Agregar

botonAgregarOperacion.onclick = () => {
    botonReporte.classList.add("is-hidden");
    seccionCategorias.classList.add("is-hidden");
    seccionNuevaOperacion.classList.add("is-hidden");
    botonBalance.classList.remove("is-hidden");
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






// Reporte

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
            <p class="column">${operacion.tipo}</p> `
        })
    }
    // -------------funciones formulario FILTROS-------------------
    //llamo a los elemento del form
const formulario = document.getElementById("form")
const filtroTipo = document.getElementById("select-tipo")
const filtroCategorias = document.getElementById("select-categoria")
const filtroFecha = document.getElementById("date")
const selectOrdenarPor = document.getElementById("select-ordenar")
const divOperaciones = document.getElementById("div-operaciones")
    // funcion mostrar en html
const aplicarDescripcionAOperaciones = () => {
    return `<div class="columns has-text-weight-semibold is-hidden-mobile">
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
//funciones auxiliares

const ordenarPorFechaMasReciente  = (array) =>{
  return array.sort((a, b)=>{
  return new Date(a.fecha) - new Date(b.fecha)
})
}

const ordenarPorFechaMenosReciente  = (array) =>{
  return array.sort((a, b)=>{
    return new Date(b.fecha) - new Date(a.fecha)
})
}
const ordenarAZ = (array) =>{
  return array.sort()
}

const ordenarZA = (array) =>{
  return array.sort().reverse()
}

const ordenarPorMayorMonto = (array) =>{
  return array.sort((a, b)=>{
  return a.monto - b.monto
})
}

const ordenarPorMenorMonto = (array) =>{
  return array.sort((a, b)=>{
  return b.monto - a.monto
})

}


//Funcion ordenar por filtros que reune a todas las 
const filtroOrdenarPor = (array)=>{
if(selectOrdenarPor.value === "Más reciente"){
  return ordenarPorFechaMasReciente(array)
}
else if(selectOrdenarPor.value === "Menos reciente"){
  return ordenarPorFechaMenosReciente(array)
}
else if(selectOrdenarPor.value === "Mayor monto"){
  return ordenarPorMayorMonto(array)
}
else if(selectOrdenarPor.value === "Menor monto"){
  return ordenarPorMenorMonto(array)
}
else if(selectOrdenarPor.value === "A/Z"){
  return ordenarAZ(array)
}
else{
  return ordenarZA(array)
}
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

    const categoriaSelect = filtroCategorias.value //filtro por categoria aplicando el filtro de tipo
    const filtradoPorCategoria = filtradoPorTipo.filter((operacion) => {
        if (categoriaSelect === "Todos") {
            return operacion
        }
        return operacion.categoriaSelect === categoriaSelect
    })

  
   const arrayFiltradoPorFechas = filtradoPorCategoria.map((operacion) => { //filtro por fechas
        const nuevoElemento = {...operacion}
        nuevoElemento.fecha = new Date(operacion.fecha).toLocaleDateString() 
        return nuevoElemento
      })
//---------ordenar------------------------
  


    const arrayFiltradoPorFechas = filtradoPorCategoria.map((operacion) => { //filtro por fechas
            const nuevoElemento = {...operacion }
            nuevoElemento.fecha = new Date(operacion.fecha).toLocaleDateString()
            return nuevoElemento
        })
        //---------ordenar------------------------
    const arrayOrdenadoPor = arrayFiltradoPorFechas.sort((a, b) => { //ordeno 


  return filtroOrdenarPor(arrayFiltradoPorFechas)
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

filtroCategorias.onchange = ()  => {
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

// -------------FIN------------------


// Seccion categorias



const categoriasIniciadoras = ["Todos", "Comida", "Servicios", "Salidas", "Educación", "Transporte", "Trabajo"]



const adicionDeNuevasCategoriasSelect = () => {
    // const selectCategoria = document.getElementById("select-categoria")
    // const filtroCategorias = document.getElementById("select-categoria")

    const stringCategoriasIniciadoras = categoriasIniciadoras.reduce((acc, elemento, index) => {
        return acc + `<option id="opcion-categoria-${index}" value="${elemento}">${elemento}</option>`

    })
    console.log(categoriasIniciadoras)
    console.log(stringCategoriasIniciadoras)
    filtroCategorias.innerHTML = stringCategoriasIniciadoras
}

const categoriasObtenidas = () => {
    const categoriasLS = localStorage.getItem("categorias")
    if (categoriasLS === null) {
        return categoriasIniciadoras
    } else {
        return JSON.parse(categoriasLS)
    }
}

const agregarCategoriasAHTML = () => {
    const categorias = categoriasObtenidas()
    const lista = document.getElementById("lista-categoria")

    const stringCategoriasIniciadoras = categorias.reduce((acc, elemento, index) => {
        return acc + ` <div class=" columns">
            <div class="column">
                 <span class=" has-background-success-light has-text-success-dark">${elemento}</span>
            </div>
         <div class="column has-text-right">
                 <button id="editar-categoria-${index}" class="button is-info is-inverted">Editar</button>

             <button id="borrar-categoria-${index}" class="button is-info is-inverted">Eliminar</button>
         </div>
     </div>`
    }, "")

    lista.innerHTML = stringCategoriasIniciadoras
}

agregarCategoriasAHTML()
adicionDeNuevasCategoriasSelect()

botonAgregarCategoria.onclick = () => {
    const valorInputCategoriaNuevo = inputCategoriaNuevoNombre.value
    console.log(valorInputCategoriaNuevo)
    inputCategoriaNuevoNombre.value = ""

    categoriasIniciadoras.push(valorInputCategoriaNuevo)
    adicionDeNuevasCategoriasSelect()
    const categoriasEnJSON = JSON.stringify(categoriasIniciadoras)
    localStorage.setItem("categorias", categoriasEnJSON)
    adicionDeNuevasCategoriasSelect()
    agregarCategoriasAHTML()

}