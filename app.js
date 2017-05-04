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
				/*$("#dummydiv").slideUp( "fast", function() {
				// Animation complete.
			  });*/
          }
          else {
             $( "#bottom" ).slideDown( "fast", function() {
				// Animation complete.
			  });
				$( "#top" ).slideDown( "fast", function() {
				// Animation complete.
			  });
				/*$("#dummydiv").slideDown( "fast", function() {
				// Animation complete.
			  });*/
          }
          //Updates scroll position
          lastScroll = st;
      });
	  
	  $("#content div").click(function(){
		$("#top,#bottom").css("z-index", "-100");
		$("#top,#bottom").css("opacity", "0");
			$("#vcontent").fadeIn();
		});
		$(".closeme").click(function(){
			$("#vcontent").fadeOut();
			$("#top,#bottom").css("z-index", "1");
			$("#top,#bottom").css("opacity", "0.5");
		});
		$("#dummydiv").css("height",$( "#top" ).height());
		
		
		

    });
		window.onpopstate = function() {
		/*$('.view-overlay').empty().append('<div class="view-close">x</div>').hide();
		$('html,body').css("overflow","auto");
		window.history.pushState('page1', "previous title", "previous url");
		document.title = "previous title";*/
		
		alert("back button");
		}
	

