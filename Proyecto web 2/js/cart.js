var carrito ;
var contenedorCarrito ;
var listaProducto ;
var vaciarCarritoBtn ;
var carritoArray = [];

//Creacion del evento click





function vaciarCarrito () {
    carritoArray = [];
    
   
  limpiarHtml();

}

//leer los datos del Producto

function leerDatos(agregaProducto) {
    carrito = document.querySelector('#carrito');
    contenedorCarrito = document.querySelector('tbody');
    listaProducto = document.querySelector('#lista-productos');
    vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
    vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
  const rutaProducto = document.querySelectorAll(".card-body")[agregaProducto.attributes[3].value-1];




    //construyo un objeto con los datos leidos al precionar el boton agregar carrito

    const ProductoSleccionado = {
        imagen: rutaProducto.querySelector('img').src,
        nombre: rutaProducto.querySelector('h3').textContent,
        precio: rutaProducto.querySelector('h2').textContent,
        id: agregaProducto.attributes[3].value-1,
        cantidad: 1,
    }
    // console.log(ProductoSleccionado);

    //Se revisa si el elemento existe
    const existe = carritoArray.some((agregaProducto) => agregaProducto.id === ProductoSleccionado.id)
    if(existe) {
        carritoArray.forEach(agregaProducto => {
            if (agregaProducto.id === ProductoSleccionado.id) {
                agregaProducto.cantidad++;
                return agregaProducto
            }
        })
    }else {
        carritoArray = [...carritoArray, ProductoSleccionado]; 
    }
    // console.log(existe);

    //Se crea y se agrega en el array el Producto seleccionado. 
    // carritoArray = [...carritoArray, ProductoSleccionado];

    console.log(carritoArray);
    elementoHtml();
}

//Crear el elemento a donde vamos a agregar el Producto

function elementoHtml() {

    //Se llama a la funcion limpiar html para obviamente limpiar el duplicado de los Productos
    limpiarHtml();

    //Se itera por cada Producto seleccionado y se crea el elemento donde se agregara
    carritoArray.forEach(Producto => {
        const tablet = document.createElement('tr');
        tablet.innerHTML = `
            <td>
                <img src="${Producto.imagen}" width="150">
            </td>
            <td>
                ${Producto.nombre}
            </td>
            <td>
                ${Producto.precio}
            </td>
            <td>
                ${Producto.cantidad}
            </td>
            <td>
                <a href"#" class="borrar-Producto" data-id="${Producto.id}"> X </a>
            </td>
        `;
        contenedorCarrito.appendChild(tablet);
    })

    //Se agrega en el contenedor el elemento creado y el Producto seleccionado
    console.log('contenedorCarrito');
}

//Se crea la funcion para limpiar el contenedor porque se duplicaban los Productos.
function limpiarHtml() {
    contenedorCarrito.innerHTML = "";
}

