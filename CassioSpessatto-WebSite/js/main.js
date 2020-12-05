/* Start Get Size of Window */
var width = screen.width;
var height = screen.height;
console.log("The resolution of your monitor screen is " + width + "x" + height + ".");
 /* End Get Size of Window */

/* Start Fix Menu nave*/
var offset = $('#menuHeader').offset().top;
var $meuMenu = $('#menuHeader');
$(document).on('scroll', function () {
	if (offset <= $(window).scrollTop()) {
		$meuMenu.addClass('fixar');
	} else {
		$meuMenu.removeClass('fixar');
	}
});
/* End Fix Menu nave*/


/* Start Menu Dropdown Responsive */
visibilidade = true;
function showHideMenu() {
	if (visibilidade) {
	  document.getElementById("menu-display").className = "display-show";
	  visibilidade = false;
  
	} else {
	  document.getElementById("menu-display").className = "display-hide";
	  visibilidade = true;
	}
  }
/* Start Menu Dropdown Responsive */


/* Start Scroll Menu nave*/
if (width > 1700) {
	var number = 70;
} else if (width > 1370) {
	var number = 40;
} else{
	var number = 40;
}
$('.menu-list a[href^="#"]').on('click', function (e) {
	e.preventDefault();
	var id = $(this).attr('href'),
		targetOffset = $(id).offset().top;

	$('html, body').animate({
		scrollTop: targetOffset - number
	}, 1000);
});
/* End Scroll Menu nave*/


/* Start type a text leter by leter */
if ($('.text-slider').length == 1) {
	var typed_strings = $('.intro-div-content-slider').text();
	var typed = new Typed('.text-slider', {
		strings: typed_strings.split(','),
		typeSpeed: 80,
		loop: true,
		backDelay: 1100,
		backSpeed: 40
	});
}
/* End type a text leter by leter */


/* Start Click Buttons my projects */
function mostra(theId){
	var theArray= new Array('project-html', 'project-js', 'project-react');
	w=document.getElementById(theId)
	if(w.style.display=="flex"){w.style.display='none';
	
	} else { 
		for(i=0; i<theArray.length; i++) {
			if(theArray[i] == theId){
				w.style.display='flex';
			} else {
				document.getElementById(theArray[i]).style.display='none';
			}
		}
	}
		  
}
/* End click buttons my projects */


/* Start Effect on Name */
const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
	span.addEventListener('mouseover', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});
	
	
});
/* End Effect on Name */


/* Start Function to see experience */
(function() {

	'use strict';
  
	// define variables
	var items = document.querySelectorAll(".timeline li");
  
	// check if an element is in viewport
	function isElementInViewport(el) {
	  var rect = el.getBoundingClientRect();
	  return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	  );
	}
  
	function callbackFunc() {
	  for (var i = 0; i < items.length; i++) {
		if (isElementInViewport(items[i])) {
		  items[i].classList.add("in-view");
		}
	  }
	}
  
	// listen for events
	window.addEventListener("load", callbackFunc);
	window.addEventListener("resize", callbackFunc);
	window.addEventListener("scroll", callbackFunc);
  
  })();
/* End Function to see experience */