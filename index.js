const tarjeta = document.getElementById("tarjeta")
const botonCategorias = document.getElementById("boton-categorias")
const botonBalance = document.getElementById("boton-balance")
const seccionCategorias = document.getElementById("seccion-categorias")
const seccionCentral = document.getElementById("seccion-central")


// Funciones Botones Nav Superior
botonBalance.onclick = () => {

    seccionCategorias.classList.add("is-hidden")
    seccionCentral.classList.remove("is-hidden")

}
botonCategorias.onclick = () => {

    seccionCategorias.classList.remove("is-hidden")
    seccionCentral.classList.add("is-hidden")

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




const convertirOperacionesAHTML = (operaciones) => {
    let acc = ""

    operaciones.map((operacion) => {
        acc = acc + `
        <div class="columns ">
            <div class="column">${operacion.descripcion}</div>
            <div class="column is-1" >
            <div class="has-background-primary-light has-text-primary-dark has-text-centered">
            ${operacion.categoria}
            </div> 
            </div> 
            <div class="column  has-text-centered" >${operacion.fecha}</div> 
            <div class="column has-text-success has-text-weight-bold">${operacion.monto}</div> 
            <div class="column">${operacion.tipo}</div>               
        </div>
        `
        return acc
    })

    tarjeta.innerHTML = acc
}
console.log(convertirOperacionesAHTML(operaciones));