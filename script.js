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
  