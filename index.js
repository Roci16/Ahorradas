const tarjetaOperacionesAgregadas = document.getElementById("tarjeta-operaciones-agregadas")
const botonCategorias = document.getElementById("boton-categorias")
const botonBalance = document.getElementById("boton-balance")
const botonReporte = document.getElementById("boton-reportes")
const seccionCategorias = document.getElementById("seccion-categorias")
const seccionCentral = document.getElementById("seccion-central")
const seccionReportes = document.getElementById("seccion-reportes")
const botonNuevaOperacion = document.getElementById("boton-nueva-operacion")

const seccionNuevaOperacion = document.getElementById("accion-boton-nueva-operacion")

const botonCancelar = document.getElementById("boton-cancelar");
const botonAgregar = document.getElementById("boton-agregar");
const botonCancelarOperacion = document.querySelector("#boton-cancelar-operacion");
const botonAgregarOperacion = document.querySelector("#boton-agregar-operacion");

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
    // const divOperaciones = document.getElementById("div-operaciones")
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
botonAgregarOperacion.onclick = () => {
    seccionNuevaOperacion.classList.add("is-hidden")
        // seccionCentral.classList.add("is-hidden")
}


// function mostrarBotonAgregarOperacion() {
//     botonAgregarOperacion.style.display = 'none';
//     botonAgregarOperacion.style.display = 'inline';
// }

//Boton Cancelar

//Boton Agregar


// Array de prueba
const operaciones = [
    // {
    //     descripcion: 'Sueldo',
    //     categoria: 'Trabajo',
    //     fecha: '2021-01-01',
    //     monto: 50000,
    //     tipo: 'Ganancia',
    // },

    // {
    //     descripcion: 'Pago de alquiler',
    //     categoria: 'Alquiler',
    //     fecha: '2021-01-02',
    //     monto: 15000,
    //     tipo: 'Gasto',
    // },
    // {
    //     descripcion: 'Pago de expensas',
    //     categoria: 'Alquiler',
    //     fecha: '2021-01-02',
    //     monto: 5000,
    //     tipo: 'Gasto',
    // },
    // {
    //     descripcion: 'Pago de internet',
    //     categoria: 'Servicios',
    //     fecha: '2021-01-10',
    //     monto: 2000,
    //     tipo: 'Gasto',
    // },
    // {
    //     descripcion: 'Trabajo freelance',
    //     categoria: 'Trabajo',
    //     fecha: '2021-01-15',
    //     monto: 20000,
    //     tipo: 'Ganancia',
    // },
    // {
    //     descripcion: 'Cena con amigas',
    //     categoria: 'Salidas',
    //     fecha: '2021-01-18',
    //     monto: 1500,
    //     tipo: 'Gasto',
    // },
    // {
    //     descripcion: 'Salida turistica',
    //     categoria: 'Salidas',
    //     fecha: '2020-01-18',
    //     monto: 3500,
    //     tipo: 'Gasto',
    // },
    // {
    //     descripcion: 'Pasantía',
    //     categoria: 'Educación',
    //     fecha: '2020-06-13',
    //     monto: 6600,
    //     tipo: 'Gasto',
    // },
    // {
    //     descripcion: 'Viaje a las toninas',
    //     categoria: 'Transporte',
    //     fecha: '2020-05-18',
    //     monto: 4000,
    //     tipo: 'Gasto',
    // },
    // {
    //     descripcion: 'Edelap',
    //     categoria: 'Servicios',
    //     fecha: '2021-04-18',
    //     monto: 300,
    //     tipo: 'Gasto',
    // },
];




// LocalStorage operaciones///////////////

const operacionesObtenidas = () => {
    const operacionesLS = localStorage.getItem("operaciones")
    if (operacionesLS === null) {
        return operaciones
    } else {
        tarjetaSinOperaciones.classList.add("is-hidden")
        contenedorOperacionesAgregadas.classList.remove("is-hidden")
        return JSON.parse(operacionesLS)
    }
}


let funcionOperacionesLS = (elemento) => {
        const operacionesAJSON = JSON.stringify(elemento)
        localStorage.setItem("operaciones", operacionesAJSON)

    }
    ////////////////////////////// 



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




//---------- Funcion mostrar en HTML------------flor---------
//esta funcion muestra los titulos de las categorias una vez que se ingresan los datos (no debe ser parte de la acumuladora)
const aplicarDescripcionAOperaciones = () => {
    return `<div class="columns has-text-weight-semibold is-hidden-mobile">
            <div class="column is-3">Descripción</div>
            <div class="column is-2">Categoría</div>
            <div class="column is-2 has-text-centered">Fecha</div>
            <div class="column is-2 has-text-right">Monto</div>
            <div class="column is-3 has-text-centered">Acciones</div>
             </div> `
}


//aca junto la funcion anterior mas la acumuladora que toma los datos del objeto y los muestra
const mostrarOperacionesEnHTML = (array) => {

    const operaciones = operacionesObtenidas()


    const html = array.reduce((acc, operacion, index) => {
        return (
            acc +
            `

      <div class="fila columns">
        <div class="column is-3 has-text-weight-semibold">
            <span class="span-descripcion">${operacion.descripcion}</span>
        </div>

        <div class="column is-1">
        <p>${operacion.categoria}</p>

        </div>

        <div class="column is-2 has-text-right">
            <span>${operacion.fecha}</span>
        </div>

        <div class="column is-2 has-text-right">

        <p >${operacion.monto}</p>
        </div>
        <div class="column is-3 has-text-right">
        <button id="boton-editar-seccion-principal-${index}" class="button is-info is-inverted boton-editar-categoria">Editar</button>
        <button id="borrar-${index}"  class="boton-borrar-operacion button is-info is-inverted ">Eliminar</button>

        </div>
      </div>
      `
        );
    }, "")

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

}
mostrarOperacionesEnHTML(operaciones)

//--------Balances-----------
//---------- Funcion mostrar suma total de ganancias en la seccion balances-----
// const mostrarGananciasEnBalances = (array) => {

//     const gananciasFiltradas = array.filter((elemento) => {
//         return elemento.tipo === "Ganancia"
//     })


//     const sumarGanancias = gananciasFiltradas.reduce((acc, elemento) => {
//         return acc + elemento.monto
//     }, 0)

//     return balancesSumaGanancias.textContent = sumarGanancias
// }



//---------- Funcion mostrar suma total de gastos en la seccion balances-----
const mostrarGastosEnBalances = (array) => {
    const gastosFiltrados = array.filter((elemento) => {
        return elemento.tipo === "Gasto"

    })

    const sumarGastos = gastosFiltrados.reduce((acc, elemento) => {
        return acc + elemento.monto
    }, 0)

    return sumarGastos
        // balancesSumaGastos.textContent =
}
console.log(mostrarGastosEnBalances(operaciones))

//---------- Funcion mostrar suma total de gastos en la seccion balances-----
// const mostrarTotalEnBalances = (array) => {
//         const resultadoFinalGanancias = mostrarGananciasEnBalances(array)
//         const resultadoFinalGastos = mostrarGastosEnBalances(array)
//         const resultadoFinal = resultadoFinalGanancias - resultadoFinalGastos
//         return resultadoFinal
//     }
//     //  balancesTotalFinal.textContent  =
// mostrarTotalEnBalances(operaciones)


//--------Balances-----------
//---------- Funcion mostrar suma total de ganancias en la seccion balances-----
// const mostrarGananciasEnBalances = (array) => {
//     const gananciasFiltradas = array.filter((elemento) => {
//         return elemento.tipo === "Ganancia"

//     })

//     const sumarGastos = gastosFiltrados.reduce((acc, elemento) => {
//         return acc + elemento.monto
//     }, 0)

//     return balancesSumaGastos.textContent = sumarGastos
// }



//---------- Funcion mostrar suma total de gastos en la seccion balances-----
// const mostrarTotalEnBalances = (array) => {
//     const resultadoFinalGanancias = mostrarGananciasEnBalances(array)
//     const resultadoFinalGastos = mostrarGastosEnBalances(array)
//     const resultadoFinal = resultadoFinalGanancias - resultadoFinalGastos
//     return balancesTotalFinal.textContent = resultadoFinal
// }
// mostrarTotalEnBalances(operaciones)

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

    selectCategoriaNuevaOperacion.innerHTML = stringCategoriasIniciadoras
    selectCategoria.innerHTML = stringCategoriasIniciadoras



}



botonAgregarOperacion.onclick = () => {

    seccionCategorias.classList.add("is-hidden");
    seccionNuevaOperacion.classList.add("is-hidden");
    seccionCentral.classList.remove("is-hidden")
    tarjetaSinOperaciones.classList.add("is-hidden")
    contenedorOperacionesAgregadas.classList.remove("is-hidden")


    const valorInputDescripcionNuevaOperacion = inputDescripcionNuevaOperacion.value
    const valorInputMontoNuevaOperacion = inputMontoNuevaOperacion.value
    const valorOpcionCategoriaNuevaOperacion = selectCategoriaNuevaOperacion.value
    const valorInputDateNuevaOperacion = inputDateNuevaOperacion.value
    const valorOpcionTipoNuevaOperacion = selectTipoNuevaOperacion.value


    const operacion = {
        descripcion: valorInputDescripcionNuevaOperacion,
        categoria: valorOpcionCategoriaNuevaOperacion,
        fecha: valorInputDateNuevaOperacion,
        monto: valorInputMontoNuevaOperacion,
        tipo: valorOpcionTipoNuevaOperacion,
    }

    operaciones.push(operacion)
    funcionOperacionesLS(operaciones)
    mostrarOperacionesEnHTML(operaciones)


    valorInputDescripcionNuevaOperacion.value = ""
    valorInputMontoNuevaOperacion.value = ""
    valorOpcionCategoriaNuevaOperacion.value = ""
    valorInputDateNuevaOperacion.value = ""
    valorOpcionTipoNuevaOperacion.value = ""
}

const operacion = operacionesObtenidas()
mostrarOperacionesEnHTML(operacion)

const agregarCategoriasAHTML = () => {
        const categorias = categoriasObtenidas()
        const lista = document.getElementById("lista-categoria")

        const stringCategoriasIniciadoras = categorias.reduce((acc, elemento, index) => {
            return acc + ` <div class=" columns">
            <div class="column">
                 <span id="nombre-categoria-${index}" class="nombre-categoria has-background-success-light has-text-success-dark">${elemento}</span>
            </div>
            <div class="column has-text-right">
                <button id="editar-categoria-${index}" class="button is-info is-inverted boton-editar-categoria">Editar</button>
                <button id="borrar-${index}"  class="boton-borrar button is-info is-inverted ">Eliminar</button>
            </div>
     </div>`
        }, "")

        lista.innerHTML = stringCategoriasIniciadoras

        ///// boton borrar categorias
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
        botonEditarSeccionOperaciones()
        botonEditarSeccionCategoria()
    }
    // aca empiezan las funciones de botones
    // BOTON EDITAR CATEGORIA
const botonEditarSeccionOperaciones = () => {
        const botonEditarSeccionOperaciones = document.querySelectorAll(".boton-editar-seccion-operaciones")
        for (let i = 0; i < botonEditarSeccionOperaciones.length; i++) {
            botonEditarSeccionOperaciones[i].onclick = () => {
                const idRecortado = botonEditarSeccionOperaciones[i].id.slice(31)
                idDelBoton = Number(idRecortado)
                tarjetaEditarOperacionEditar(idDelBoton)
                ocultarSecciones()
            }
        }
    }
    // TARJETA EDITAR CATEGORIA
const tarjetaEditarOperacionEditar = (id) => {
    const formTarjetaEditarOperacion = document.querySelector(".form-tarjeta-editar-operacion")

    const objeto = operaciones[id]

    formTarjetaEditarOperacion.innerHTML = `
    <div class="tarjeta-editar-operacion column is-offset-2 is-8 is-hidden">
        <form class="box form-seccion-operacion">
            <h2 class="title is-1 has-text-weight-bold">Editar operación</h2>
            <div class="field">
                <div class="control">
                    <label for="Descripción" class="label"> Descripción </label>
                    <input class="input" id="input-descripcion" type="text" value="${objeto.descripcion}">
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <label for="Monto" class="label"> Monto</label>
                        <input class="input" id="input-monto" type="number" value="${objeto.monto}">
                 </div>
            </div>
            <div class="field">
                <div class="control">
                    <label for="Tipo" class="label"> Tipo</label>
                    <div class="select is-fullwidth">
                        <select id="editar-tipo-operacion">
                        <option value="${objeto.tipo}">${objeto.tipo}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field">
                <label for="Categoria" class="label"> Categoria</label>
                <div class="control">
                    <div class="select is-fullwidth">
                        <select id="input-categoria">
                        <option>Gasto</option>
                        <option>Ganancia</option>
                        </select>
                    </div>
                </div>         
            </div>
            <div class="field">
                <div class="control">
                    <label for="Fecha" class="label"> Fecha</label>
                    <input class="input" type="date">
                </div>
            </div>
            <div class="has-text-right">
                <button type="button" id="boton-cancelar-seccion-operaciones" class="button is-light"> Cancelar </button>
                <input type="submit" value="Editar"  class="button is-success">
            </div>
        </form>
    </div>`
    const formSeccionOperacion = document.querySelector(".form-seccion-operacion")
    const inputDescripcion = document.querySelector("#input-descripcion")
    const inputMonto = document.querySelector("#input-monto")
    const editarTipoOperacion = document.querySelector("#editar-tipo-operacion")

    const botonCancelarSeccionOperaciones = document.querySelector("#boton-cancelar-seccion-operaciones")

    botonCancelarSeccionOperaciones.onclick = (e) => {
        e.preventDefault()
        ocultarSecciones()
        inputDescripcion.value = objeto.descripcion
    }

    formSeccionOperacion.onsubmit = (e) => {
        e.preventDefault()
        ocultarSecciones()
        console.log(formSeccionOperacion);

        const valorMonto = Number(inputMonto.value)
        const valorDescripcion = inputDescripcion.value
            // const valorTipo = 
        objeto.monto = valorMonto
        objeto.descripcion = valorDescripcion

        mostrarOperacionesEnHTML(operaciones)
        botonEditarSeccionOperaciones()
    }
}

// funcion auxiliar ocultar secciones - operaciones
const ocultarSecciones = () => {
    const tarjetaEditarOperacion = document.querySelector(".tarjeta-editar-operacion")
    seccionCentral.classList.toggle("is-hidden")
    tarjetaEditarOperacion.classList.toggle("is-hidden")
}

// BOTON EDITAR CATEGORIA
const botonEditarSeccionCategoria = () => {
    const botonEditarCategoria = document.querySelectorAll(".boton-editar-categoria")
    const inputCategoriasNombreEditar = document.querySelector(".input-categorias-nombre-editar")
    const nombreCategoria = document.querySelectorAll(".nombre-categoria")

    for (let i = 0; i < botonEditarCategoria.length; i++) {
        botonEditarCategoria[i].onclick = () => {
            const botonEditarCategoriaEditada = document.querySelector(".boton-editar-categoria-editada")
            const nombreCategoria = document.querySelectorAll(".nombre-categoria")
            const inputCategoriasNombreEditar = document.querySelector(".input-categorias-nombre-editar")

            inputCategoriasNombreEditar.value = nombreCategoria[i].textContent

            ocultarSeccionesCategoria()

            botonEditarCategoriaEditada.onclick = () => {
                ocultarSeccionesCategoria()
                nombreCategoria[i].textContent = inputCategoriasNombreEditar.value
            }
            botonCancelarDentroCategoria()

        }
    }
}
const botonCancelarDentroCategoria = () => {
        const botonCancelarCategoriaEditada = document.querySelector(".boton-cancelar-categoria-editada")
        botonCancelarCategoriaEditada.onclick = () => {
            ocultarSeccionesCategoria()
        }
    }
    // funcion auxiliar ocultar secciones- categoria 
const ocultarSeccionesCategoria = () => {
    const tarjetaEditarCategoria = document.querySelector(".tarjeta-editar-categoria")
    seccionCategorias.classList.toggle("is-hidden")
    tarjetaEditarCategoria.classList.toggle("is-hidden")
}


agregarCategoriasAHTML()
adicionDeNuevasCategoriasSelect()

//boton agregar categoria 
botonAgregarCategoria.onclick = () => {
    const valorInputCategoriaNuevo = inputCategoriaNuevoNombre.value
    const categorias = categoriasObtenidas()
    categorias.push(valorInputCategoriaNuevo)
    inputCategoriaNuevoNombre.value = ""

    funcionLS(categorias)

    adicionDeNuevasCategoriasSelect()
    agregarCategoriasAHTML()

}