
 // Botones Nav
const tarjetaOperacionesAgregadas = document.getElementById("tarjeta-operaciones-agregadas")
const botonCategorias = document.getElementById("boton-categorias")
const botonBalance = document.getElementById("boton-balance")
const botonReporte = document.getElementById("boton-reportes")
// Secciones
const seccionCategorias = document.getElementById("seccion-categorias")
const seccionCentral = document.getElementById("seccion-central")
const seccionReportes = document.getElementById("seccion-reportes")
const seccionNuevaOperacion = document.getElementById("accion-boton-nueva-operacion")
// Boton nueva operacion 
const botonNuevaOperacion = document.getElementById("boton-nueva-operacion")
// BOTON QUE NO SE LO QUE HACE TODAVIA
const botonCancelar = document.getElementById("boton-cancelar");
const botonAgregar = document.getElementById("boton-agregar")

// ---Boton Agregar/cancelar operaciones
const botonCancelarOperacion = document.getElementById("boton-cancelar-operacion")
const botonAgregarOperacion = document.getElementById("boton-agregar-operacion");
// Boton Agregar categorias
const botonAgregarCategoria = document.getElementById("agregar-categoria-boton")
const inputCategoriaNuevoNombre = document.getElementById("input-categorias-nuevo-nombre")

//-------- Totales balances-----------
const balancesSumaGanancias = document.querySelector(".sumaGanancias")
const balancesSumaGastos = document.querySelector(".sumaGastos")
const balancesTotalFinal = document.querySelector(".totalBalances")

 // -------------funciones formulario FILTROS-------------------

const formulario = document.getElementById("form")
const filtroTipo = document.getElementById("select-tipo")
const filtroCategorias = document.getElementById("select-categoria")
const filtroFecha = document.getElementById("date")
const selectOrdenarPor = document.getElementById("select-ordenar")
const divOperaciones = document.getElementById("div-operaciones")
//-------------------------Elementos de Reportes---------------------------
const divdatosResumen = document.getElementById("datos-resumen")
const divdatosTotalesCategorias = document.getElementById("datos-totales-por-categorias")
const divDatosTotalesMes = document.getElementById("datos-totales-por-mes")
    //-----------------------------------------------


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
    seccionNuevaOperacion.classList.add("is-hidden")

}

botonReporte.onclick = () => {

    seccionReportes.classList.remove("is-hidden")
    seccionCentral.classList.add("is-hidden")
    seccionCategorias.classList.add("is-hidden")

}
// Boton nueva operacion

botonNuevaOperacion.onclick = () => {
    seccionNuevaOperacion.classList.remove("is-hidden")
    seccionCentral.classList.add("is-hidden")
}

//Boton Cancelar nueva operacion

botonCancelarOperacion.onclick = () => {

    seccionCategorias.classList.add("is-hidden")
    seccionCentral.classList.remove("is-hidden")
    seccionReportes.classList.add("is-hidden")
}
//  Repetida?
// botonAgregarOperacion.onclick = () => {
//     seccionNuevaOperacion.classList.add("is-hidden")
        // seccionCentral.classList.add("is-hidden")
// }

//Boton Agregar Operacion

botonAgregarOperacion.onclick = () => {
  
    seccionCategorias.classList.add("is-hidden");
    seccionNuevaOperacion.classList.add("is-hidden");
    botonBalance.classList.remove("is-hidden");
}


//Array de prueba

const operaciones = [{
        descripcion: 'Sueldo',
        categoria: 'Trabajo',
        fecha: '2021-01-01',
        monto: 50000,
        tipo: 'Ganancia',
    },

    {
        descripcion: 'Pago de alquiler',
        categoria: 'Alquiler',
        fecha: '2021-01-02',
        monto: 15000,
        tipo: 'Gasto',
    },
    {
        descripcion: 'Pago de expensas',
        categoria: 'Alquiler',
        fecha: '2021-01-02',
        monto: 5000,
        tipo: 'Gasto',
    },
    {
        descripcion: 'Pago de internet',
        categoria: 'Servicios',
        fecha: '2021-01-10',
        monto: 2000,
        tipo: 'Gasto',
    },
    {
        descripcion: 'Trabajo freelance',
        categoria: 'Trabajo',
        fecha: '2021-01-15',
        monto: 20000,
        tipo: 'Ganancia',
    },
    {
        descripcion: 'Cena con amigas',
        categoria: 'Salidas',
        fecha: '2021-01-18',
        monto: 1500,
        tipo: 'Gasto',
    },
    {
        descripcion: 'Salida turistica',
        categoria: 'Salidas',
        fecha: '2020-01-18',
        monto: 3500,
        tipo: 'Gasto',
    },
    {
        descripcion: 'Pasantía',
        categoria: 'Educación',
        fecha: '2020-06-13',
        monto: 6600,
        tipo: 'Gasto',
    },
    {
        descripcion: 'Viaje a las toninas',
        categoria: 'Transporte',
        fecha: '2020-05-18',
        monto: 4000,
        tipo: 'Gasto',
    },
    {
        descripcion: 'Edelap',
        categoria: 'Servicios',
        fecha: '2021-04-18',
        monto: 300,
        tipo: 'Gasto',
    },
];



// funcion agregar oparacion html 

// formularioAgregarNuevaOperacion.onsubmit = (event) => {
//     event.preventDefault()
// }

// botonAgregar.onclick = () => {
//     const seccionNuevaOperacion = {
//         descripcion: Descripcion.value,
//         monto: Monto.value,
//         tipo: Tipo.value,
//         categoria: Categorias.value,
//         fecha: Fecha.value,
//     }

//     operaciones.push(seccionNuevaOperacion);

//     guardarEnLocalStorage(operaciones, "operaciones");

//     mostrarOperacionesEnHTML();
// }




// LocalStorage operaciones///////////////
const operacionesObtenidas = () => {
    const operacionesLS = localStorage.getItem("operaciones")
    if (operacionesLS === null) {
        return operaciones
    } else {
        return JSON.parse(operacionesLS)
    }
}

let funcionOperacionesLS = (elemento) => {
        const operacionesAJSON = JSON.stringify(elemento)
        localStorage.setItem("operaciones", operacionesAJSON)

    }
    ////////////////////////////// 

//----------convertirOperacionesAHTML

// const convertirOperacionesAHTML = (operaciones) => {
//     let acc = ""

//     operaciones.map((operacion) => {
//         acc = acc + `
//         <div class="columns ">
//             <p class="column">${operacion.descripcion}</p>
//             <div class="column is-1" >
//                 <p class="has-background-primary-light has-text-primary-dark has-text-centered">
//                  ${operacion.categoria}
//                  </p> 
//             </div> 
//             <p class="column  has-text-centered" >${operacion.fecha}</p> 
//             <p class="column has-text-success has-text-weight-bold">${operacion.monto}</p> 
//             <p class="column">${operacion.tipo}</p> `
//     })
// }



//aca junto la funcion anterior mas la acumuladora que toma los datos del objeto y los muestra
// const mostrarOperacionesEnHTML = (array) => {

//     const operaciones = operacionesObtenidas()


//     const html = array.reduce((acc, operacion, index) => {
//         return (
//             acc +
//             `
//       <div class="fila columns">
//       <div class="column is-3 has-text-weight-semibold">
//         <p>${operacion.descripcion}</p>
//         </div>
//         <div class="column is-3">
//         <p>${operacion.categoria}</p>
//         </div>
//         <div class="column is-2 has-text-right">
//         <p>${operacion.fecha}</p>
//         </div>
//         <div class="column is-2 has-text-right">
//         <p>${operacion.tipo}</p>
//         </div>
//         <div class="column is-2 has-text-right">
//         <button id="editar-categoria-${index}" class="button is-info is-inverted boton-editar-categoria">Editar</button>
//         <button id="borrar-${index}"  class="boton-borrar-operacion button is-info is-inverted ">Eliminar</button>
//         </div>
//       </div>
//       `
//         );
//     }, "")

    tarjetaOperacionesAgregadas.innerHTML = html;

    const botonesBorrarOperaciones = document.querySelectorAll(".boton-borrar-operacion")
    for (let i = 0; i < botonesBorrarOperaciones.length; i++) {
        botonesBorrarOperaciones[i].onclick = () => {
            const idOperaciones = botonesBorrarOperaciones[i].id
            const indiceOperaciones = idOperaciones.slice(7)
            const filtrarOperaciones = operaciones.filter((elemento, index) => {
                return index != indiceOperaciones
            })

            funcionOperacionesLS(filtrarOperaciones)
            mostrarOperacionesEnHTML(filtrarOperaciones)

        }
    }


mostrarOperacionesEnHTML(operaciones)

  //--------Balances-----------
//---------- Funcion mostrar suma total de ganancias en la seccion balances-----
const mostrarGananciasEnBalances = (array) =>{
const gananciasFiltradas = array.filter((elemento)=>{
    return elemento.tipo === "Ganancia"
    })
console.log(gananciasFiltradas)

    const sumarGanancias = gananciasFiltradas.reduce((acc, elemento)=>{
return acc + elemento.monto
    },0)
    
return balancesSumaGanancias.textContent = sumarGanancias
}
console.log(mostrarGananciasEnBalances(operaciones))

//---------- Funcion mostrar suma total de gastos en la seccion balances-----
const mostrarGastosEnBalances = (array) =>{
    const gastosFiltrados = array.filter((elemento)=>{
        return elemento.tipo === "Gasto"
        })
    
        const sumarGastos = gastosFiltrados.reduce((acc, elemento)=>{
    return acc + elemento.monto
        },0)
        
    return balancesSumaGastos.textContent = sumarGastos
    }
    console.log(mostrarGastosEnBalances(operaciones))

    //---------- Funcion mostrar suma total de gastos en la seccion balances-----
    const mostrarTotalEnBalances = (array) =>{
      const resultadoFinalGanancias = mostrarGananciasEnBalances(array)
      const resultadoFinalGastos = mostrarGastosEnBalances(array)
      const resultadoFinal = resultadoFinalGanancias - resultadoFinalGastos
        return balancesTotalFinal.textContent = resultadoFinal
    }
    mostrarTotalEnBalances(operaciones)

//-----------funciones para ordenar los filtros-----

//funciones auxiliares
const ordenarPorFechaMasReciente = (array) => {
    return array.sort((a, b) => {
        return new Date(a.fecha) - new Date(b.fecha)
    })
}

const ordenarPorFechaMenosReciente = (array) => {
    return array.sort((a, b) => {
        return new Date(b.fecha) - new Date(a.fecha)
    })
}
const ordenarAZ = (array) => {
    return array.sort()
}

const ordenarZA = (array) => {
    return array.sort().reverse()
}

const ordenarPorMayorMonto = (array) => {
    return array.sort((a, b) => {
        return a.monto - b.monto
    })
}


const ordenarPorMenorMonto = (array) => {
    return array.sort((a, b) => {
        return b.monto - a.monto
    })

}

//Funcion ordenar por filtros que reune a todas las funciones auxiliares ---
const filtroOrdenarPor = (array) => {
    if (selectOrdenarPor.value === "Más reciente") {
        return ordenarPorFechaMasReciente(array)
    } else if (selectOrdenarPor.value === "Menos reciente") {
        return ordenarPorFechaMenosReciente(array)
    } else if (selectOrdenarPor.value === "Mayor monto") {
        return ordenarPorMayorMonto(array)
    } else if (selectOrdenarPor.value === "Menor monto") {
        return ordenarPorMenorMonto(array)
    } else if (selectOrdenarPor.value === "A/Z") {
        return ordenarAZ(array)
    } else {
        return ordenarZA(array)
    }

}

// -------------------Función aplicar filtros---------------
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
        return operacion.categoria === categoriaSelect
    })



    const arrayFiltradoPorFechas = filtradoPorCategoria.map((operacion) => { //filtro por fechas
        const nuevoElemento = {...operacion }
        nuevoElemento.fecha = new Date(operacion.fecha).toLocaleDateString()
        return nuevoElemento
    })


    return filtroOrdenarPor(arrayFiltradoPorFechas)
}


//----Agrega filtro cuando modifico los select-----

// evento cuando modifico categoria

filtroTipo.onchange = () => {
        const arrayFiltrado = aplicarFiltros()
        mostrarOperacionesEnHTML(arrayFiltrado)
    }
    // evento cuando modifico tipo
filtroCategorias.onchange = ()  => {
    const arrayFiltrado = aplicarFiltros()
    mostrarOperacionesEnHTML(arrayFiltrado)
}

// evento elijo a partir de la fecha
filtroFecha.oninput = () => {
    const arrayFiltrado = aplicarFiltros()
    mostrarOperacionesEnHTML(arrayFiltrado)
}

// evento ordeno por 

selectOrdenarPor.onchange = () => {
    const arrayFiltrado = aplicarFiltros()
    mostrarOperacionesEnHTML(arrayFiltrado)
}

//----este e.preventDefault evita que el formulario se envie --flor---
formulario.onsubmit = (e) => {
    e.preventDefault()
}

//--------------- Seccion categorias----------------------------

// Seccion categorias

const categorias = ["Comida", "Servicios", "Salidas", "Educación", "Transporte", "Trabajo"]

// LocalStorage///////////////
const categoriasObtenidas = () => {
    const categoriasLS = localStorage.getItem("categorias")
    if (categoriasLS === null) {
        return categorias
    } else {
        return JSON.parse(categoriasLS)
    }
}
let funcionLS = (elemento) => {
        const categoriasAJSON = JSON.stringify(elemento)
        localStorage.setItem("categorias", categoriasAJSON)

    }
    ////////////////////////////// 

const adicionDeNuevasCategoriasSelect = () => {
    const categorias = categoriasObtenidas()
    const selectCategoria = document.getElementById("select-categoria")

    const stringCategoriasIniciadoras = categorias.reduce((acc, elemento, index) => {
        return acc + `<option id="opcion-categoria-${index}" value="${elemento}">${elemento}</option>`

    }, "")

    selectCategoria.innerHTML = stringCategoriasIniciadoras
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
                 <button id="editar-categoria-${index}" class="button is-info is-inverted boton-editar-categoria">Editar</button>

             <button id="borrar-${index}"  class="boton-borrar button is-info is-inverted ">Eliminar</button>
         </div>
     </div>`
    }, "")


    lista.innerHTML = stringCategoriasIniciadoras
    const botonesBorrar = document.querySelectorAll(".boton-borrar")

    for (let i = 0; i < botonesBorrar.length; i++) {
        botonesBorrar[i].onclick = () => {
            const id = botonesBorrar[i].id
            const indice = id.charAt(7)
            const nuevasCategoriasFiltradas = categorias.filter((elemento, index) => {
                return index != indice
            })

            funcionLS(nuevasCategoriasFiltradas)
            agregarCategoriasAHTML()
            adicionDeNuevasCategoriasSelect()
        }

    }

}

agregarCategoriasAHTML()
adicionDeNuevasCategoriasSelect()


botonAgregarCategoria.onclick = () => {
    const valorInputCategoriaNuevo = inputCategoriaNuevoNombre.value
    const categorias = categoriasObtenidas()
    categorias.push(valorInputCategoriaNuevo)
    inputCategoriaNuevoNombre.value = ""

    funcionLS(categorias)

    adicionDeNuevasCategoriasSelect()
    agregarCategoriasAHTML()

}


//--------------- Seccion reportes----------------------------
//3 bloques
//Resumen
//Categoría con mayor ganancia Salidas +$134555
// Categoría con mayor gasto Comida -$34165
// Categoría con mayor balance Salidas $134555
// Mes con mayor ganancia 2021/11/17 $134555
// Mes con mayor gasto 2021/10/05 -$34165

//Totales por categorías
// Categoria Ganancias Gastos Balance
// Comida    +$28077   -$34165 $-6088
// Salidas  +$134555    -$0    $134555
// Educación   +$50     -$0     $50
// Transporte  +$100    -$0     $100
// Servicios    +$0   -$5000   $-5000
// Trabajo     +$0    -$48     $-48
// hamburguesas  +$0  -$32     $-32

// Totales por mes
// Mes     Ganancias      Gastos    Balance
// 11/2021  +$162502     -$5712     $156790
// 10/2021   +$200       -$33333    $-33133
// 6/2021    +$30         -$0          $30
// 9/2021     +$0        -$200       $-200
// 8/2021    +$50         -$0          $50
// const divdatosResumen = document.getElementById("datos-resumen")
// const divdatosTotalesCategorias = document.getElementById("datos-totales-por-categorias")
// const divDatosTotalesMes = document.getElementById("datos-totales-por-mes")


//funciones para totales por categorias
//accede al array de categorias filtrado por aquellas que fueron utilizadas para operaciones (filter)
// la funcion debe mostrar en catgoria el nombre de la misma. 
// necesito una acumuladora que muestre el array de las categorias filtradas
//las funciones deben incluir que cuando el monto sea menor a 0 agregar la clase para que el texto sea rojo y cuando sea mayo clase verde