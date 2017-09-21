$(document).ready(function () {

	var clicks = [];


	// box spots

	var box1 = $('#box1');
	var box2 = $('#box2');
	var box3 = $('#box3');
	var box4 = $('#box4');
	var box5 = $('#box5');
	var box6 = $('#box6');
	var box7 = $('#box7');
	var box8 = $('#box9');
	var box9 = $('#box9');

	var playerOne = function(){
		$('td').on('click', function(){
			$(this).text('O').attr('class', 'color1');
		});
	};
	 var playerTwo = function(){
	 	$('td').on('click', function(){
			$(this).text('X').attr('class', 'color2');
		});
	};

	$('td').on('click', function() {
		if (clicks % 2 === 0){
			playerOne();
		} else  {
			playerTwo();
		} 
    	clicks++; 

    	if (box1.hasClass('color1') && box2.hasClass('color1') && box3.hasClass('color1') ||
    	box4.hasClass('color1') && box5.hasClass('color1') && box6.hasClass('color1') ||
    	box7.hasClass('color1') && box8.hasClass('color1') && box9.hasClass('color1') ||
    	box1.hasClass('color1') && box4.hasClass('color1') && box7.hasClass('color1') ||
    	box2.hasClass('color1') && box5.hasClass('color1') && box8.hasClass('color1') ||
    	box3.hasClass('color1') && box6.hasClass('color1') && box9.hasClass('color1') ||
    	box1.hasClass('color1') && box5.hasClass('color1') && box9.hasClass('color1') ||
    	box3.hasClass('color1') && box5.hasClass('color1') && box7.hasClass('color1')) 
			{alert("WINNER IS O");}
		else if (box1.hasClass('color2') && box2.hasClass('color2') && box3.hasClass('color2') ||
    	box4.hasClass('color2') && box5.hasClass('color2') && box6.hasClass('color2') ||
    	box7.hasClass('color2') && box8.hasClass('color2') && box9.hasClass('color2') ||
    	box1.hasClass('color2') && box4.hasClass('color2') && box7.hasClass('color2') ||
    	box2.hasClass('color2') && box5.hasClass('color2') && box8.hasClass('color2') ||
    	box3.hasClass('color2') && box6.hasClass('color2') && box9.hasClass('color2') ||
    	box1.hasClass('color2') && box5.hasClass('color2') && box9.hasClass('color2') ||
    	box3.hasClass('color2') && box5.hasClass('color2') && box7.hasClass('color2'))
			{alert("WINNER IS X");}
		if(clicks > 10){
			alert("NOBODY WINS");
		}
    	
    });
});
	

	


