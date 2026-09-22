// Funciones para abrir y cerrar la ventana del producto (Modal)
const modal = document.getElementById("product-modal");
let tallaSeleccionada = null;

function abrirModal() {
    modal.style.display = "flex";
}

function cerrarModal() {
    modal.style.display = "none";
    // Resetear la selección al cerrar
    resetearTallas();
}

// Cerrar el modal si el usuario hace clic fuera de la caja blanca
window.onclick = function(event) {
    if (event.target == modal) {
        cerrarModal();
    }
}

// Función para seleccionar la talla
function seleccionarTalla(boton) {
    // Primero, quitar la clase 'active' de todos los botones
    let botones = document.querySelectorAll('.size-btn');
    botones.forEach(btn => btn.classList.remove('active'));

    // Agregar la clase 'active' al botón que se hizo clic
    boton.classList.add('active');
    tallaSeleccionada = boton.innerText;

    // Cambiar el estilo y texto del botón de "SELECCIONAR TALLA" a "AGREGAR AL CARRITO"
    let btnCarrito = document.getElementById("add-to-cart-btn");
    btnCarrito.classList.add("ready");
    btnCarrito.innerText = "AGREGAR AL CARRITO";
}

function resetearTallas() {
    let botones = document.querySelectorAll('.size-btn');
    botones.forEach(btn => btn.classList.remove('active'));
    tallaSeleccionada = null;
    
    let btnCarrito = document.getElementById("add-to-cart-btn");
    btnCarrito.classList.remove("ready");
    btnCarrito.innerText = "SELECCIONAR TALLA";
}

// Función para agregar al carrito
let contadorCarrito = 0;

function agregarAlCarrito() {
    if (tallaSeleccionada) {
        contadorCarrito++;
        document.querySelector('.cart-count').innerText = contadorCarrito;
        alert("¡Añadido al carrito con éxito en talla " + tallaSeleccionada + "!");
        cerrarModal();
    } else {
        // No hace nada si el botón aún dice "SELECCIONAR TALLA" (simula que está deshabilitado)
    }
}