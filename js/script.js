$(document).ready(function() {
	
	$('#containerDiv').prepend("<button onClick='makeGrid()'>Click to make a new grid</button>");

	$('#containerDiv').append(function () {
			for(var i = 1; i <= 16; i++) {
				for(var j = 1; j <= 16; j++) {
					$('#containerDiv').append('<div class="square"></div>');
				}
				$('#containerDiv').append('<div class="horizontal"></div>');
			};

			$('.square').hover(function() {
				$(this).css('background-color', '#d8d8d8');
			}, function() {
				$(this).css('background-color', 'black');
			});

		})

});

//this is the new-grid creating function
	var makeGrid = function () {
		var numSquares = prompt("How many squares will the grid have?");

		$('#containerDiv').empty();

		$('#containerDiv').prepend("<button onClick='makeGrid()'>Click to make a new grid</button>");
		
		if (numSquares > 0 && numSquares <=38) {
			var squareWidth = $('#containerDiv').width()/numSquares;
			
			for(var i = 1; i <= numSquares; i++) {
				for(var j = 1; j <= numSquares; j++) {
					$('#containerDiv').append('<div class="square"></div>');
				}
				$('#containerDiv').append('<div class="horizontal"></div>');
			};
			
			$('.square').css({
				width: 'squareWidth',
				height: 'squareWidth',
			}).hover(function() {
				$(this).css('background-color', '#d8d8d8');
			}, function() {
				$(this).css('background-color', 'black');
			});
			
		} else {
			alert("Please enter a value between 1 and 38");
			makeGrid();
		}
	};

/*DISCLAIMER

To achieve success in this project when I got stuck I read through code by RebootJeff and n8sb (both on github) and worked my way around their different implementations so as to understand jQuery and complete my project. */