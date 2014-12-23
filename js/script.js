$(document).ready(function() {
	$('div').click(function() {
		alert('Yes jQuery is wired correctly');
	});
	$('div').hover(
		function(){
			$(this).fadeOut(1000);
		},
		function(){
			$(this).fadeIn(200);
		});
});