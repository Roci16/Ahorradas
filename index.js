const tarjeta = document.getElementById("tarjeta")
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
// const botonCancelarOperacion = document.querySelector("#boton-cancelar-operacion");
// const botonAgregarOperacion = document.querySelector("#boton-agregar-operacion");
const botonAgregarCategoria = document.getElementById("agregar-categoria-boton")
const inputCategoriaNuevoNombre = document.getElementById("input-categorias-nuevo-nombre")
 // -------------funciones formulario FILTROS-------------------
const formulario = document.getElementById("form")
const filtroTipo = document.getElementById("select-tipo")
const filtroCategorias = document.getElementById("select-categoria")
const filtroFecha = document.getElementById("date")
const selectOrdenarPor = document.getElementById("select-ordenar")
const divOperaciones = document.getElementById("div-operaciones")
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

formularioAgregarNuevaOperacion.onsubmit = (event) => {
    event.preventDefault()
}

botonAgregar.onclick = () => {
    const seccionNuevaOperacion = {
        descripcion:Descripcion.value, 
        monto:Monto.value, 
        tipo:Tipo.value, 
        categoria:Categorias.value, 
        fecha:Fecha.value, 
    }

    operaciones.push(seccionNuevaOperacion);

    guardarEnLocalStorage(operaciones, "operaciones");

    mostrarOperacionesEnHTML();
}


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



    //---------- Funcion mostrar en HTML------------flor---------
    //esta funcion muestra los titulos de las categorias una vez que se ingresan los datos (no debe ser parte de la acumuladora)
const aplicarDescripcionAOperaciones = () => {
    return `<div class="columns has-text-weight-semibold is-hidden-mobile">
            <div class="column is-3">Descripción</div>
            <div class="column is-3">Categoría</div>
            <div class="column is-2 has-text-right">Fecha</div>
            <div class="column is-2 has-text-right">Monto</div>
            <div class="column is-2 has-text-right">Acciones</div>
             </div> `
}
//aca junto la funcion anterior mas la acumuladora que toma los datos del objeto y los muestra
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

//-----------funciones para ordenar los filtros-----flor------------

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

//Funcion ordenar por filtros que reune a todas las funciones auxiliares ----flor


//Funcion ordenar por filtros que reune a todas las 
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

// -------------------Función aplicar filtros----------------- florr
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
        const nuevoElemento = {...operacion}
        nuevoElemento.fecha = new Date(operacion.fecha).toLocaleDateString() 
        return nuevoElemento
      })


  return filtroOrdenarPor(arrayFiltradoPorFechas)
  }


//----Agrega filtro cuando modifico los select-----flor-

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

selectOrdenarPor.onchange = () =>{
    const arrayFiltrado = aplicarFiltros()
    mostrarOperacionesEnHTML(arrayFiltrado)
}


//----este e.preventDefault evita que el formulario se envie --flor---
formulario.onsubmit = (e) => {
    e.preventDefault()
}

// ----------------------------


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

    botonEditarSeccionCategoria()
}


//////// boton editar categoria- BrendaLamas
const botonEditarSeccionCategoria = () =>{
    const botonEditarCategoria = document.querySelectorAll(".boton-editar-categoria")
    const tarjetaEditarCategoria = document.querySelector(".tarjeta-editar-categoria")
    const botonCancelarCategoriaEditada = document.querySelector(".boton-cancelar-categoria-editada")

    for (let i = 0; i < botonEditarCategoria.length; i++) {
        botonEditarCategoria[i].onclick = () => {
        
                for (let i = 0; i < botonEditarCategoria.length; i++) {
                    botonEditarCategoria[i].onclick = () => {
                    const idRecortado = botonEditarCategoria[i].id.slice(22)
                    idDelBoton = Number(idRecortado);

                    seccionCategorias.classList.add("is-hidden")
                    tarjetaEditarCategoria.classList.remove("is-hidden")
                    console.log(botonEditarCategoria[i]); 
                    inputModificarNombreCategoria(botonEditarCategoria[i])

                    crearFormularioEditar(idDelBoton)
                  };
                }
            
        }

        botonCancelarCategoriaEditada.onclick = () => {
            seccionCategorias.classList.remove("is-hidden")
            tarjetaEditarCategoria.classList.add("is-hidden")
        }
} 
}

const inputModificarNombreCategoria = (i)=>{
    // const inputCategoriasNombreEditar = document.querySelector(".input-categorias-nombre-editar")
    const nombreCategoria = document.querySelectorAll(".nombre-categoria")
    console.log(nombreCategoria[i]);
    

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
