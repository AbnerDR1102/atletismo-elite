// Funciones para abrir y cerrar la ventana del producto (Modal)
const modal = document.getElementById("product-modal");
let tallaSeleccionada = null;

// Escuchar los clics en todas las tarjetas de productos para hacer el modal dinámico
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".product-card");
    
    cards.forEach(card => {
        // Al darle clic a una tarjeta, actualizamos la información del modal
        card.onclick = function() {
            // Extraer datos de la tarjeta clickeada
            const title = card.querySelector('h3').innerText;
            const newPrice = card.querySelector('.new-price').innerText;
            
            // Buscar si tiene precio viejo (oferta)
            const oldPriceElem = card.querySelector('.old-price');
            const oldPrice = oldPriceElem ? oldPriceElem.innerText : '';

            // Actualizar el HTML del Modal
            document.querySelector('.modal-title').innerText = title;
            // Para el "volver atrás", usamos la primera palabra del título
            document.querySelector('.back-text').innerHTML = `<i class="ri-arrow-left-line"></i> ${title.split(' ')[0]}`;
            document.querySelector('.new-price-large').innerText = newPrice;
            document.querySelector('.old-price-large').innerText = oldPrice;

            // Mostrar el modal
            modal.style.display = "flex";
        };
    });
});

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

    // Cambiar el estilo y texto del botón de comprar
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
        
        // Obtener el nombre del producto que se está comprando
        const nombreProducto = document.querySelector('.modal-title').innerText;
        
        alert("¡" + nombreProducto + " añadido al carrito en talla " + tallaSeleccionada + "!");
        cerrarModal();
    }
}