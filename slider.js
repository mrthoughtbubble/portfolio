$(document).ready(function(){

	/************************************************************************
	* Function Definitions *
	************************************************************************ /
	rotate =function() {
		var slideid = $active.attr("rel") -1;
		var slidedistance = slideid * imgwidth;
	
		$(".imagenav a").removeClass('active');

		$active.addClass('active');

		$(".imageslider").animate({left: -slidedistance}, 500);
	};

	rotation = function() {
			play = setInterval(function(){
				$active = $('.imagenav a.active').next();
		
				if ($active.length === 0) {
					$active = $('.imagenav a:first');
				
				}
	
			rotate();
		} , 5000);
	};

	$(".imagenav a").click(functional(){
		$active =$(this);
		clearInterval(play);
		rotate();
		rotation();

		return false;

	});

	/************************************************************************
	* End of Function Defintions *
	************************************************************************ /

	/************************************************************************
	* Main Code  *
	************************************************************************ /


	$(".imagenav a:first").addClass("active");

	var imgwidth =$(".imageholder").width();
	var totalimg = $(".imageslider img").size();
	var allimgwidth = imgwidth * totalimg;
	$(".imageslider").css({'width':allimgwidth});
	rotation();


	/************************************************************************
	* End of Main Code *
	************************************************************************ /

	});