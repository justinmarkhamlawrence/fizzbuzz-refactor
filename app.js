$(document).ready(function() {
	
	function fizzBuzz() {
	for (i=1;i<=num;i++) {
		if (i % 15 === 0) {
			$('ul').append('<li>', 'fizz buzz');
		}
		else if (i % 5 === 0) {
			$('ul').append('<li>', 'buzz');
		}

		else if (i % 3 === 0) {
			$('ul').append('<li>', 'fizz');
		}
		else {
		$('ul').append('<li>', i);
		}
	}
	}


	var num = prompt("enter a number");
	var okNum = Number(num);
	if (isNaN(okNum)) {
		alert("only enter integers!");
	}
	else
	{
		fizzBuzz(num);
	}
	
});	 