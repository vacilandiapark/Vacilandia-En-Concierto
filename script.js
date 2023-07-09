window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// PARTICULAS //

particlesJS("particles-js", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 1,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: false
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

document.addEventListener('DOMContentLoaded', () => {
    // Obtén los enlaces del navbar
    const navLinks = document.querySelectorAll('#navbar .nav-links a');

    // Agrega un evento de clic a cada enlace
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            // Verifica si el enlace apunta a una sección dentro de la misma página
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();

                // Obtiene el ID de la sección a la que se debe desplazar
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                // Realiza el desplazamiento suave utilizando el método 'scrollIntoView'
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// carrusel //

// Script para controlar el carrusel de imágenes
// Script para controlar el carrusel de imágenes
const carrusel = document.querySelector('.carrusel');
const imagenes = document.querySelectorAll('.carrusel .imagen');
const botonAnterior = document.querySelector('.carrusel .boton.anterior');
const botonSiguiente = document.querySelector('.carrusel .boton.siguiente');
let index = 0;

// Función para mostrar la imagen siguiente
function carruselSiguiente() {
    index = (index + 1) % imagenes.length;
    actualizarCarrusel();
}

// Función para mostrar la imagen anterior
function carruselAnterior() {
    index = (index - 1 + imagenes.length) % imagenes.length;
    actualizarCarrusel();
}

// Función para actualizar el carrusel con la imagen actual
function actualizarCarrusel() {
    imagenes.forEach((imagen, i) => {
        imagen.style.transform = `translateX(-${index * 100}%)`;
        imagen.style.opacity = i === index ? 1 : 0;
    });
}

// Función para mostrar la primera imagen al cargar la página
function mostrarPrimeraImagen() {
    imagenes[index].style.opacity = 1;
}

// Asignar eventos a los botones del carrusel
botonAnterior.addEventListener('click', carruselAnterior);
botonSiguiente.addEventListener('click', carruselSiguiente);

// Mostrar la primera imagen al cargar la página
mostrarPrimeraImagen();

// Cambiar automáticamente cada 2 segundos
setInterval(carruselSiguiente, 2000);

/* HAMBURGUESA */

document.querySelector('.toggle-button').addEventListener('click', function () {
    document.getElementById('navbar').classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active');
});

// scroll reveal //

// Configura ScrollReveal
const sr = ScrollReveal({
    duration: 1000,
    easing: 'ease-in-out',
    reset: true,
});

// Aplica el efecto de "fade-in" a los bloques
sr.reveal('.bloque', {
    origin: 'bottom',
    opacity: 0, // Configura la opacidad inicial en 0 para el efecto de fade-in
    interval: 200, // Intervalo de tiempo entre la aparición de cada bloque
});

// video promo //

$(document).ready(function () {
    $('.promo-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: '<div class="slick-prev"><</div>',
        nextArrow: '<div class="slick-next">></div>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

// galeria //

var grid = document.querySelector('.grid');
var masonry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    gutter: 10
});

function openModal(img) {
    var modal = document.getElementById('modal');
    var modalImage = modal.querySelector('img');

    modal.style.display = 'flex';
    modalImage.src = img.src;
}

function closeModal() {
    var modal = document.getElementById('modal');

    modal.style.display = 'none';
}