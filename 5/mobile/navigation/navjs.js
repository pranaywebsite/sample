window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
		document.getElementById("navbar").style.top = "0";
	} else {
		document.getElementById("navbar").style.top = "-70px";
	}
}
/*----------------------------------------------------*/
	/* Smooth Scrolling
	------------------------------------------------------ */

	jQuery(document).ready(function($) {

		$('.smoothscroll').on('click',function (e) {
			e.preventDefault();

			var target = this.hash,
			$target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 800, 'swing', function () {
				window.location.hash = target;
			});
		});
		
	});





$(function(){
  var prevScroll = 0,
      curDir = 'down',
      prevDir = 'up';
  
  $(window).scroll(function(){
    	if($(this).scrollTop() >= prevScroll){
          curDir = 'down';
          if(curDir != prevDir){
          $('.navbar-custom').stop();
    	  	$('.navbar-custom').animate({ bottom: '-50px' }, 300);
          prevDir = curDir;
          }
      } else {
          curDir = 'up';
          if(curDir != prevDir){
          $('.navbar-custom').stop();
          $('.navbar-custom').animate({ bottom: '1px' }, 300);
          prevDir = curDir;
          }
      }
      prevScroll = $(this).scrollTop();
  });
})	


$(function(){
  var prevScroll = 0,
      curDir = 'down',
      prevDir = 'up';
  
  $(window).scroll(function(){
    	if($(this).scrollTop() >= prevScroll){
          curDir = 'down';
          if(curDir != prevDir){
          $('.my').stop();
    	  	$('.my').animate({ bottom: '-50px' }, 300);
          prevDir = curDir;
          }
      } else {
          curDir = 'up';
          if(curDir != prevDir){
          $('.my').stop();
          $('.my').animate({ bottom: '1px' }, 300);
          prevDir = curDir;
          }
      }
      prevScroll = $(this).scrollTop();
  });
})	
















