window.sr = ScrollReveal();

	/*sr.reveal('.logoIndex', {
		duration: 1500, //tiempo
		origin: 'bottom', //origen
		distance: '-250px', //distancia
		


	}); */
	
	sr.reveal('.tituloIndex', {
		delay:400,
		duration: 1500, //tiempo
		origin: 'right', //origen
		distance: '-70px', //distancia
		


	}); 
	sr.reveal('.logotipos', {
		delay:500,
		duration: 1500, //tiempo
		origin: 'top', //origen
		distance: '0px', //distancia
		interval:100


	});
	sr.reveal('.logos1', {
		delay:600,
		duration: 1500, //tiempo
		origin: 'top', //origen
		distance: '0px', //distancia
		interval:100


	});
	sr.reveal('.logos2', {
		delay:900,
		duration: 1500, //tiempo
		origin: 'top', //origen
		distance: '0px', //distancia
		interval:100


	}); 

	sr.reveal('.titulo', {
		duration: 1500, //tiempo
		origin: 'top', //origen
		distance: '-100px', //distancia
		reset:1000

	});



	/*sr.reveal('.piepagina', {
		duration: 1500, //tiempo
		origin: 'left', //origen
		distance: '-100px', //distancia
		reset:1000

	}); 

		sr.reveal('.piepag', {
		duration: 1500, //tiempo
		origin: 'bottom', //origen
		distance: '-100px', //distancia
		reset:1000

	}); */


//CARRUSEL
           



$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#scrollArriba').fadeIn();
    } else {
      $('#scrollArriba').fadeOut();
    }
  });
  $('#scrollArriba').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300);
    return false;
  });
});