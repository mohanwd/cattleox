$(function(){
      //Keep track of last scroll
      var lastScroll = 0;
      $(window).scroll(function(event){
          //Sets the current scroll position
          var st = $(this).scrollTop();
          //Determines up-or-down scrolling
          if (st > lastScroll){
             //Replace this with your function call for downward-scrolling
             $( "#bottom" ).slideUp( "fast", function() {
				// Animation complete.
			  });
				$( "#top" ).slideUp( "fast", function() {
				// Animation complete.
			  });
          }
          else {
             $( "#bottom" ).slideDown( "fast", function() {
				// Animation complete.
			  });
				$( "#top" ).slideDown( "fast", function() {
				// Animation complete.
			  });
          }
          //Updates scroll position
          lastScroll = st;
      });
	  
	  $("#content div").click(function(){
			$("#vcontent").fadeIn();
		});
		$(".closeme").click(function(){
			$("#vcontent").fadeOut();
		});
    });
	
