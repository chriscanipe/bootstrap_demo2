/**
 * @author Chris Canipe
 */

//This si the iFrame markup for our YouTube video.
//We got it by selecting the "share" option on the YouTube page...
//and copy and pasting the embed code. 
var video = "<iframe width=560' height='315' src='http://www.youtube.com/embed/o2-RXqU4Lg8?html5=1' frameborder='0' allowfullscreen></iframe>";

//Document ready. When the page laods, set up our navigation
$(document).ready(function() {
	setNav();
});


function setNav() {
	
	//This event listener fires when ".cyclone" button is clicked.
	//It opens our modal window and inserts the video into the ".modal-body" contaienr
	$(".cyclone").on("click", function() {
		$('#myModal').modal();
		$(".modal-body").html(video);
	});	
	
	//This event listener fires when the modal window is closed
	//and removes the "src" attribute from the iframe, thus killing the video
	$('#myModal').on('hidden.bs.modal', function () {
		$('#myModal iframe').removeAttr('src');
	});
	
}
