$(document).ready(function () {

	var clicks = [];


	// box spots

	var box1 = $('#box1');
	var box2 = $('#box2');
	var box3 = $('#box3');

	var playerOne = function(){
		$('td').on('click', function(){
			$(this).html('O').attr('class', 'color1');
		});
	};
	 var playerTwo = function(){
	 	$('td').on('click', function(){
			$(this).html('X').attr('class', 'color2');
		});
	};

	$('td').click(function() {
		if (clicks % 2 === 0){
			playerOne();
		} else  {
			playerTwo();
		} 
    	clicks++; 
	});


	$('table').on('click', function() {
		if (clicks.length > 3) {
		if ($('#box1').html('O') && $('#box2').html('O') && $('#box3').html('O')) {
			alert("WINNER IS O");
		}  
		else {
			alert('NOPE');
		}
	}
});
});


