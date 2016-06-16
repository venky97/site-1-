
var clicked = false;
$('document').ready(function() {
	$('.nav-bar').hide();
	$('.nav-but').click(function(event) {
		$(".nav-bar").show(100);
		$(this).hide();
		$('.all').animate({left: "200px"}, 200);
		clicked=false;
		event.stopPropagation();
	});
	$('.nav-bar').click(function(event)
		{
    		clicked = true;
		});
	$('html').click(function() {
		if(clicked == false)
		{	
			$('.all').animate({left: "0px"}, 200);
			$('.nav-bar').hide(100);
			$('.nav-but').show();
		}
		clicked=false;
	});
}); 