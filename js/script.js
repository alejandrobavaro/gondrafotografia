// Función para cargar y procesar el archivo JSON de fotografías
function cargarFotografias() {
    fetch('./json/fotografias.json') // Cargar el archivo JSON
        .then(response => response.json()) // Convertir la respuesta a JSON
        .then(data => {
            // Procesar los datos de las fotografías
            mostrarFotografias(data);
        })
        .catch(error => {
            console.error('Error al cargar las fotografías:', error);
        });
}

// Función para mostrar las fotografías en la galería
function mostrarFotografias(fotografias) {
    const galeria = document.getElementById('galeria');

    // Limpiar la galería antes de agregar nuevas fotografías
    galeria.innerHTML = '';

    // Recorrer cada fotografía y agregarla a la galería
    fotografias.forEach(foto => {
        const fotoElemento = document.createElement('div');
        fotoElemento.classList.add('foto');

        const imagenElemento = document.createElement('img');
        imagenElemento.src = foto.url;
        imagenElemento.alt = foto.titulo;

        const tituloElemento = document.createElement('h3');
        tituloElemento.textContent = foto.titulo;

        const descripcionElemento = document.createElement('p');
        descripcionElemento.textContent = foto.descripcion;

        fotoElemento.appendChild(imagenElemento);
        fotoElemento.appendChild(tituloElemento);
        fotoElemento.appendChild(descripcionElemento);

        galeria.appendChild(fotoElemento);
    });
}

// Llamar a la función cargarFotografias cuando la página se cargue completamente
document.addEventListener('DOMContentLoaded', cargarFotografias);
