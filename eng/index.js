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


var check=document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
	console.log(check.checked);
	let id=check.checked;
	if(id==true){
		location.href="eng/index.html";

	}else{
		location.href="../index.html";
	}
	
}



