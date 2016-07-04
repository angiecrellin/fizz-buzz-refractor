//prompt to supply a number//

var userInput = prompt("Pick a number between 1 and 100");
console.log(userInput)

//count from 1 to argument value with substitutions//

function count(i){

for (var i = 1; i <= userInput; i++)
	if (i % 15 === 0) {
		document.write('FizzBuzz');
		document.write('<br>')
	}
	else if (i % 3 === 0) {
		document.write('Fizz');
		document.write('<br>')
	}
	else if (i % 5 === 0) {
		document.write('Buzz');
		document.write('<br>')
	}
	else {
		document.write(i);
		document.write('<br>')
	}

}

count();