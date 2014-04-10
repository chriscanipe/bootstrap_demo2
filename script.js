/**
 * @author Chris Canipe
 */


var video = "<iframe width=560' height='315' src='http://www.youtube.com/embed/o2-RXqU4Lg8?html5=1' frameborder='0' allowfullscreen></iframe>";


$(document).ready(function() {
	setNav();
});


function setNav() {
	
	$(".cyclone").on("click", function() {
		$('#myModal').modal();
		$(".modal-body").html(video);
	});	
	
	$(".close").on("click", function() {
		$(".modal-body").empty();
	});	


}
