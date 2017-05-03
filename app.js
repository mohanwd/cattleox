$(window).bind('mousewheel', function(event) {
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
});
