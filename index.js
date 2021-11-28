
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
const datosPorCategorias = document.getElementById("totales-por-categorias")
    //-----------------------------------------------
const tarjetaSinOperaciones = document.getElementById("tarjeta-sin-operaciones")
const inputDescripcionNuevaOperacion = document.getElementById("descripcion-nueva-operacion")
const inputMontoNuevaOperacion = document.getElementById("monto-nueva-operacion")
const contenedorOperacionesAgregadas = document.getElementById("contenedor-operaciones-agregadas")
    
const selectCategoriaNuevaOperacion = document.getElementById("select-categoria-nueva-operacion")
const inputDateNuevaOperacion = document.getElementById("dateNuevaOperacion")
const selectTipoNuevaOperacion = document.getElementById("select-tipo-nueva-operacion")

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

//Boton Agregar Operacion

botonAgregarOperacion.onclick = () => {
  
    //seccionCategorias.classList.add("is-hidden");
    seccionNuevaOperacion.classList.add("is-hidden");
    //botonBalance.classList.remove("is-hidden");
}

//Boton Cancelar nueva operacion

botonCancelarOperacion.onclick = () => {

    seccionCategorias.classList.add("is-hidden")
    seccionCentral.classList.remove("is-hidden")
    seccionReportes.classList.add("is-hidden")
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

//   formularioAgregarNuevaOperacion.onsubmit = (event) => {
//       event.preventDefault()
//   }


  botonAgregarOperacion.onclick = () => {
      const seccionNuevaOperacion = {
          descripcion: Descripcion.value,
          monto: Monto.value,
          tipo: Tipo.value,
          categoria: Categorias.value,
          fecha: Fecha.value,
     }

     operaciones.push(seccionNuevaOperacion);

      guardarEnLocalStorage(operaciones, "operaciones");

      mostrarOperacionesEnHTML();
  }




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


    //  tarjetaOperacionesAgregadas.innerHTML = html;

    //  const botonesBorrarOperaciones = document.querySelectorAll(".boton-borrar-operacion")
    //  for (let i = 0; i < botonesBorrarOperaciones.length; i++) {
    //      botonesBorrarOperaciones[i].onclick = () => {
    //         const idOperaciones = botonesBorrarOperaciones[i].id
    //         const indiceOperaciones = idOperaciones.slice(7)
    //         const filtrarOperaciones = operaciones.filter((elemento, index) => {
    //             return index != indiceOperaciones
    //         })
    //          funcionOperacionesLS(filtrarOperaciones)
    //          mostrarOperacionesEnHTML(filtrarOperaciones)
    //      }
    //  }


// mostrarOperacionesEnHTML(operaciones)

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

// //---------- Funcion mostrar suma total de gastos en la seccion balances-----
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

     //---------- Funcion mostrar suma del  total  en la seccion balances-----
     const mostrarTotalEnBalances = (array) =>{
       const resultadoFinalGanancias = mostrarGananciasEnBalances(array)
       const resultadoFinalGastos = mostrarGastosEnBalances(array)
       const resultadoFinal = resultadoFinalGanancias - resultadoFinalGastos
         return balancesTotalFinal.textContent = resultadoFinal    
        }
     mostrarTotalEnBalances(operaciones)

// //-----------funciones para ordenar los filtros-----

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

// // -------------------Función aplicar filtros---------------
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


// //----Agrega filtro cuando modifico los select-----

// // evento cuando modifico categoria

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

// // evento ordeno por 

 selectOrdenarPor.onchange = () => {
     const arrayFiltrado = aplicarFiltros()
     mostrarOperacionesEnHTML(arrayFiltrado)
 }

 //----este e.preventDefault evita que el formulario se envie 
 formulario.onsubmit = (e) => {
     e.preventDefault()
 }

// //--------------- Seccion categorias----------------------------

// // Seccion categorias

 const categorias = ["Comida", "Servicios", "Salidas", "Educación", "Transporte", "Trabajo"]

// // LocalStorage///////////////
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
//     ////////////////////////////// 

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


//--------------- Seccion reportes---------------------------

//aca estoy filtrado el array de objetos, saco las categorias 
const separarporCategorias = (array) =>{
    const categoriasSepadas = array.map((elemento)=>{
            return elemento.categoria
    })
    return categoriasSepadas
}
console.log(separarporCategorias(operaciones))
// aca filtro las categorias para que no se repitan
const todasLasCategorias = separarporCategorias(operaciones)

const categoriasSinRepetir = todasLasCategorias.filter((elemento,index)=>{
    return todasLasCategorias.indexOf(elemento) === index;
  })
  console.log(categoriasSinRepetir)


//array vacio
  let arrayOperacionPorCategoria = []
// aca creo la matriz de categorias, por cada categoria se crea un array vacio
 categoriasSinRepetir.map((categoria) => {
    arrayOperacionPorCategoria.push([])
  });
 
console.log(arrayOperacionPorCategoria)

//aca relleno cada array con los datos de esas categorias

operaciones.map((operacion) => {
    const indiceCategoria = categoriasSinRepetir.indexOf(operacion.categoria)
     arrayOperacionPorCategoria[indiceCategoria].push(operacion)
   })
   console.log(arrayOperacionPorCategoria)

//necesito a traves de un for tomar los valores de 
//para que se cree un array de ganancias y uno de gastos distinto por cada categoria tengo que crear una funcion y la ejecuto por cada elmento del array?
let gananciasPorcategoria = []
let gastosPorCategoria = []
for(let i=0; i < arrayOperacionPorCategoria.length; i++){
        for(let j = 0; j<arrayOperacionPorCategoria[j].length; j++){
                if(arrayOperacionPorCategoria[j][4] === "Gasto"){
                    gastosPorCategoria.push(arrayOperacionPorCategoria[j][3])
                }
                else if (arrayOperacionPorCategoria[j][4] === "Ganancia"){
                    gananciasPorcategoria.push(arrayOperacionPorCategoria[j][3])
                }
        }
}
console.log(gananciasPorcategoria)
console.log(gastosPorCategoria)
// todo este codigo tendria que hacerse con un for sobre nuestra matriz 

//       const gananciasPorMascota = categoriaMascotas.filter((operacion) => {
//          return operacion.tipo === "ganancia"
//        })
//        const gastosPorMascota = categoriaMascotas.filter((operacion) => {
//          return operacion.tipo === "gasto"
//        })
//      console.log(gananciasPorMascota)

//      const sumaGananciasMascota = gananciasPorMascota.reduce((acc, curr) => {
//        return acc + curr.monto
//      }, 0)

//      const sumaGastosMascota = gastosPorMascota.reduce((acc, curr) => {
//        return acc + curr.monto
//      }, 0)


//      const balanceMascotas = sumaGananciasMascota - sumaGastosMascota

//      console.log("sumaGananciasMascota", sumaGananciasMascota)
//      console.log("sumaGastosMascota", sumaGastosMascota)
//      console.log("balanceMascotas", balanceMascotas)

 

//  separarPorCategoria()




//----------------insertar la matriz en html--------------------
//por categoria deberia tener un array que sean todas las ganancias
//uno que sean todos los gastos
// con eso hago un reduce y los sumo entre si
//una vez que tengo la suma de todos tomo cada resultado y los resto
//eso va a ser igual al total
//aca antes tengo que crear un objeto que tenga 4 categorias: 
//categoria, el monto de ganancias(suma de todas la ganancias de esa categoria), 
//el monto de gastos(tambien la suma de todos los gastos de esa categoria),
// y total que van a ser la resta de ambas partes

// const datosPorCategoria = (array) =>{
//     const insertarDatosPorcategoria = array.reduce((acc, elemento, index) => {
//         return (
//              acc +  `
//             <div class="column is-3 has-text-weight-semibold ">${elemento.categoria}</div>
//             <div class="column is-3 has-text-success has-text-right">${elemento.ganancia}</div>
//             <div class="column is-3 has-text-danger  has-text-right">monto</div>
//             <div class="column is-3 has-text-right">total</div>`
//         );
//          }, 0)
//          return insertarDatosPorcategoria
// }

// datosPorCategorias.innerHTML = datosPorCategoria

//------------------male funciones------------------------
// const categorias = ["mascotas", "trabajo", "servicios"]

//  const separarPorCategoria = () => {

// let arrayOperacionPorCategoria = []

//   categorias.map((categoria) => {
//  arrayOperacionPorCategoria.push([])
//   })
//-------------------------------------------------------------------------
//   // [ [], [], [] ]
//   operaciones.map((operacion) => {
//     const indiceCategoria = categorias.indexOf(operacion.categoria)
//     arrayOperacionPorCategoria[indiceCategoria].push(operacion)
//   })

//   console.log(arrayOperacionPorCategoria)

 // esto es lo que hicimos antes, esta mal: 
  // const categoriaMascotas = []
  // const categoriaTrabajo = []
  // operaciones.map((operacion) => {
  //   if (operacion.categoria === "mascotas") {
  //     categoriaMascotas.push(operacion)
  //   }
  //   if (operacion.categoria === "trabajo") {
  //     categoriaTrabajo.push(operacion)
  //   }
  // })





// totales por mes

// const obtenerTotalesPorMes = () => {
//   const meses = [0, 1, 2 , 3, 4, 5, 6, 7, 8, 9, 10, 11]

//   const operacionPorMes = []

//   meses.map((mes) => {
//     operacionPorMes.push([])
//   })

//   operaciones.map((operacion) => {
//     const fecha = new Date(operacion.fecha + " 11:00:00")
//     const mes = fecha.getMonth()
    
//     operacionPorMes[mes].push(operacion)
//   })

//   console.log(operacionPorMes)

//   operacionPorMes.map((array) => {
//     const sumaGanancias = array.reduce((acc, curr) => {
//       if (curr.tipo === "ganancia") {
//       return acc + curr.monto
//       }
//       return acc
//     }, 0)
//     console.log(sumaGanancias)
//     // hacer el html aca mismo (o llamar aca a la funcion que hace el html)
//   })
// }

// obtenerTotalesPorMes()


// operacionPorMes y arrayOperacionPorCategoria son MATRICES
// arrays que contienen arrays
// para trabajar con matrices necesitamos un FOR ADENTRO DE UN FOR
// o UN MAP ADENTRO DE UN MAP (O REDUCE, O FILTER, ETC)

