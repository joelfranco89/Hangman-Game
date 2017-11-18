var wins = 0
var wordCount = 1
var numberOfGuessesRemaining = 12
var lettersAlreadyGuessed = 0
function reset() {
	numberOfGuessesRemaining = 12
	lettersAlreadyGuessed = 0
}
function hideApple(){
	document.getElementById("appleDisplay").style.display = "none";
}
function hideGoogle(){
	document.getElementById("googleDisplay").style.display = "none";
}
if (wordCount == 1){
		document.onkeyup = function(event){
			switch(event.key){
				case "a":
				lettersAlreadyGuessed += 1
				document.getElementById("a1").innerHTML = "a"
				break;
				case "p":
				document.getElementById("p1").innerHTML = "p"
				document.getElementById("p1a").innerHTML = "p"
				lettersAlreadyGuessed += 1
				break;
				case "l":
				document.getElementById("l1").innerHTML = "l"
				lettersAlreadyGuessed += 1
				break;
				case "e":
				document.getElementById("e1").innerHTML = "e"
				lettersAlreadyGuessed += 1
				break;
				default:
				numberOfGuessesRemaining -= 1
			}
			if (lettersAlreadyGuessed == 4){	
				wordCount += 1
				wins += 1
				document.getElementById("wins").innerHTML = wins
				reset()
				hideApple()
				alert("You win!")
			}
			if (numberOfGuessesRemaining == 0){
			alert("Game over! Try again!")
			reset()
			}
			console.log(wordCount)

		document.getElementById("numberOfGuesses").innerHTML = numberOfGuessesRemaining
		document.getElementById("lettersGuessed").innerHTML = lettersAlreadyGuessed
		}
}
if (wordCount == 2){
		document.onkeyup = function(event){
			switch(event.key){
				case "g":
				lettersAlreadyGuessed += 1
				document.getElementById("g2").innerHTML = "a"
				document.getElementById("g2a").innerHTML = "a"
				break;
				case "o":
				document.getElementById("o2").innerHTML = "p"
				document.getElementById("o2a").innerHTML = "p"
				lettersAlreadyGuessed += 1
				break;
				case "e":
				document.getElementById("l2").innerHTML = "e"
				lettersAlreadyGuessed += 1
				break;
				case "e":
				document.getElementById("e2")
				lettersAlreadyGuessed += 1
				default:
				numberOfGuessesRemaining -= 1
			}
			if (lettersAlreadyGuessed === 4){
				wordCount += 1
				wins += 1
				document.getElementById("wins").innerHTML = wins
				reset()
				hideApple()
				alert("You win!")
			}
			if (numberOfGuessesRemaining == 0){
			alert("Game over! Try again!")
			reset()
			}

		document.getElementById("numberOfGuesses").innerHTML = numberOfGuessesRemaining
		document.getElementById("lettersGuessed").innerHTML = lettersAlreadyGuessed
		}
}
if (wordCount == 3){
		document.onkeyup = function(event){
			switch(event.key){
				case "m":
				lettersAlreadyGuessed += 1
				document.getElementById("m3").innerHTML = "a"
				break;
				case "i":
				document.getElementById("i3").innerHTML = "p"
				lettersAlreadyGuessed += 1
				break;
				case "c":
				document.getElementById("c3").innerHTML = "e"
				lettersAlreadyGuessed += 1
				break;
				case "r":
				document.getElementById("r3").innerHTML = "r"
				lettersAlreadyGuessed += 1
				case "o":
				document.getElementById("o3").innerHTML = "o"
				document.getElementById("o3a").innerHTML = "o"
				lettersAlreadyGuessed += 1
				case "s":
				document.getElementById("s3").innerHTML = "s"
				lettersAlreadyGuessed += 1
				case "f":
				document.getElementById("f3").innerHTML = "f"
				lettersAlreadyGuessed += 1
				case "t":
				document.getElementById("t3").innerHTML = "t"
				lettersAlreadyGuessed += 1
				default:
				numberOfGuessesRemaining -= 1
			}
			if (lettersAlreadyGuessed === 4){
				alert("You win!")
				wordCount += 1
				reset()
			}
			if (numberOfGuessesRemaining == 0){
			alert("Game over! Try again!")
			reset()
			}

		document.getElementById("numberOfGuesses").innerHTML = numberOfGuessesRemaining
		document.getElementById("lettersGuessed").innerHTML = lettersAlreadyGuessed
		}
}


