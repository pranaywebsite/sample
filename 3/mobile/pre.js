var width = 100,
    perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = parseInt((EstimatedTime/50)%80)*100;


$(".loadbar-percent").animate({
  width: width + "%"
}, time);


var PercentageID = $("#percent"),
		start = 0,
		end = 100,
		durataion = time;
		animateValue(PercentageID, start, end, durataion);
		
function animateValue(id, start, end, duration) {
  
	var range = end - start,
      current = start,
      increment = end > start? 1 : -1,
      stepTime = Math.abs(Math.floor(duration / range)),
      obj = $(id);
    
	var timer = setInterval(function() {
		current += increment;
		$(obj).text(current + "%");
		if (current == end) {
			clearInterval(timer);
		}
	}, stepTime);
}

setTimeout(function(){
  $('#preloader-wrapper').fadeOut(300);
}, time);



