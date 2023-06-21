particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#ffffff"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});


// CARRUSEL //

document.addEventListener('DOMContentLoaded', function () {
    var carouselItems = document.querySelectorAll('.carousel-item');
    var mousePos = { x: 0, y: 0 };

    carouselItems.forEach(function (item) {
        item.addEventListener('mousemove', function (event) {
            var rect = item.getBoundingClientRect();
            var itemPos = { x: event.clientX - rect.left, y: event.clientY - rect.top };
            var dx = (itemPos.x - rect.width / 2) / (rect.width / 2) * 0.1;
            var dy = (itemPos.y - rect.height / 2) / (rect.height / 2) * 0.1;
            item.style.transform = 'scale(1.1) translate(' + dx + 'px, ' + dy + 'px)';
        });

        item.addEventListener('mouseleave', function () {
            item.style.transform = 'scale(1) translate(0, 0)';
        });
    });

    function updateItemTransform() {
        var activeItem = document.querySelector('.carousel-item.active');
        var rect = activeItem.getBoundingClientRect();
        var itemPos = { x: mousePos.x - rect.left, y: mousePos.y - rect.top };
        var dx = (itemPos.x - rect.width / 2) / (rect.width / 2) * 0.1;
        var dy = (itemPos.y - rect.height / 2) / (rect.height / 2) * 0.1;
        activeItem.style.transform = 'scale(1.1) translate(' + dx + 'px, ' + dy + 'px)';
        carouselItems.forEach(function (item) {
            if (item !== activeItem) {
                item.style.transform = 'scale(1) translate(0, 0)';
            }
        });

        requestAnimationFrame(updateItemTransform);
    }

    // Añadir un evento al contenedor del carrusel para rastrear la posición del ratón
    document.querySelector('#carouselExampleControls').addEventListener('mousemove', function (event) {
        mousePos.x = event.clientX;
        mousePos.y = event.clientY;
    });

    // Iniciar el bucle de actualización del carrusel
    updateItemTransform();
});


// Configuración de ScrollReveal
ScrollReveal().reveal('.card-item', {
    delay: 50,                 // Retardo antes de la animación (en milisegundos)
    duration: 1000,             // Duración de la animación (en milisegundos)
    origin: 'bottom',           // Desde dónde se originará la animación
    distance: '50px',           // Distancia de desplazamiento durante la animación
    opacity: 0,                 // Opacidad inicial del elemento
    scale: 0.8,                 // Escala inicial del elemento
    easing: 'cubic-bezier(0.5, 0, 0, 1)',   // Curva de aceleración de la animación
    reset: true,                // Restablecer animación al desplazarse hacia arriba
    interval: 200               // Intervalo entre la animación de cada elemento
});

$(document).ready(function() {
    // Agrega el desplazamiento suave a todos los enlaces dentro del navbar
    $(".navbar-nav a").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            // Desplazamiento suave utilizando el método animate de jQuery
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                // Agrega el hash (#) a la URL después de desplazarse
                window.location.hash = hash;
            });
        }
    });
});