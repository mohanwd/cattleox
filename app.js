/*$(window).bind('mousewheel', function(event) {
if (event.originalEvent.wheelDelta >= 0) {
    $( "#bottom" ).slideDown( "slow", function() {
    // Animation complete.
  });
	$( "#top" ).slideDown( "slow", function() {
    // Animation complete.
  });
}
else {
    $( "#bottom" ).slideUp( "slow", function() {
    // Animation complete.
  });
	$( "#top" ).slideUp( "slow", function() {
    // Animation complete.
  });
}
});*/


$(function(){
      //Keep track of last scroll
      var lastScroll = 0;
      $(window).scroll(function(event){
          //Sets the current scroll position
          var st = $(this).scrollTop();
          //Determines up-or-down scrolling
          if (st > lastScroll){
             //Replace this with your function call for downward-scrolling
             $( "#bottom" ).slideUp( "slow", function() {
				// Animation complete.
			  });
				$( "#top" ).slideUp( "slow", function() {
				// Animation complete.
			  });
          }
          else {
             $( "#bottom" ).slideDown( "slow", function() {
				// Animation complete.
			  });
				$( "#top" ).slideDown( "slow", function() {
				// Animation complete.
			  });
          }
          //Updates scroll position
          lastScroll = st;
      });
    });
