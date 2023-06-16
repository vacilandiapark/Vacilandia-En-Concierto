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

$(document).ready(function () {
    // Agrega la clase 'animate-zoom' para la animación inicial
    $('#carouselExampleControls img').addClass('animate-zoom');

    // Agrega la clase 'image-fade-in' cuando la imagen esté en el viewport
    $(window).scroll(function () {
        $('.animate-zoom').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow + $(window).height() - 200) {
                $(this).addClass('image-fade-in fade-in');
            }
        });
    });
});

$(document).ready(function() {
    $(window).scroll(function() {
      var windowHeight = $(window).height();
      var scrollTop = $(window).scrollTop();
  
      $(".card").each(function() {
        var cardTop = $(this).offset().top;
  
        if (cardTop < windowHeight + scrollTop) {
          $(this).addClass("fade-in");
        }
      });
    });
  });
  