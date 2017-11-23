var wins = 0
var numberOfGuessesRemaining = 12
var lettersAlreadyGuessed = 0
var activeWordApple = true
var activeWordGoogle = false
var activeWordMicrosoft = false
var a1 = 0
var p1 = 0
var l1 = 0
var e1 = 0
var g2 = 0
var o2 = 0
var l2 = 0
var e2 = 0
var m3 = 0
var i3 = 0
var c3 = 0
var r3 = 0
var o3 = 0
var s3 = 0
var f3 = 0
var t3 = 0
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
function hideMicrosoft(){
	document.getElementById("microsoftDisplay").style.display = "none";
}
function showApple(){
	document.getElementById("appleDisplay").style.display = "block";
}
function showGoogle(){
	document.getElementById("googleDisplay").style.display = "block";
}
function showMicrosoft(){
	document.getElementById("microsoftDisplay").style.display = "block";
}
function showAppleImage(){
	document.getElementById("appleImage").style.display = "block";
}
function showGoogleImage(){
	document.getElementById("googleImage").style.display = "block";
}
function showIMicrosoftimage(){
	document.getElementById("microsoftImage").style.display = "block";
}
function hideAppleImage(){
	document.getElementById("appleImage").style.display = "none";
}
function hideGoogleImage(){
	document.getElementById("googleImage").style.display = "none";
}
function hideMicrosoftImage(){
	document.getElementById("microsoftImage").style.display = "none";
}
function startOver(){
	window.location.reload()
}


hideGoogle()
hideMicrosoft()
hideAppleImage()
hideGoogleImage()
hideMicrosoftImage()

	document.onkeyup = function(event){

		if (activeWordApple == true){
	
			switch(event.key){
				case "a":
				document.getElementById("a1").innerHTML = "a"
				a1 += 1
					if (a1 == 1){
						lettersAlreadyGuessed += 1
					}
				break;
				case "p":
				document.getElementById("p1").innerHTML = "p"
				document.getElementById("p1a").innerHTML = "p"
				p1 += 1
					if (p1 == 1){
						lettersAlreadyGuessed += 1
					}
				break;
				case "l":
				document.getElementById("l1").innerHTML = "l"
				l1 += 1
					if (l1 == 1){
						lettersAlreadyGuessed += 1
					}
				break;
				case "e":
				document.getElementById("e1").innerHTML = "e"
				e1 += 1
					if (e1 == 1){
						lettersAlreadyGuessed += 1
					}
				break;
				default:
				numberOfGuessesRemaining -= 1
			}

			if (lettersAlreadyGuessed == 4){
				showAppleImage()	
				activeWordApple = false
				activeWordGoogle = true
				wins += 1	
				reset()	
				hideApple()
				showGoogle()
				alert("You win!")
			}
			if (numberOfGuessesRemaining == 0){
			alert("Game over! Try again!")
			window.location.reload()
			}
		} else if (activeWordGoogle == true){
			switch(event.key){
				case "g":
				document.getElementById("g2").innerHTML = "g"
				document.getElementById("g2a").innerHTML = "g"
				g2 += 1
					if (g2 == 1){
						lettersAlreadyGuessed += 1
					}
				break;
				case "o":
				document.getElementById("o2").innerHTML = "o"
				document.getElementById("o2a").innerHTML = "o"
				o2 += 1
				if (o2 == 1){
						lettersAlreadyGuessed += 1
					}
				break;
				case "l":
				document.getElementById("l2").innerHTML = "l"
				l2 += 1
				if (l2 == 1){
						lettersAlreadyGuessed += 1
					}
				break;
				case "e":
				document.getElementById("e2").innerHTML = "e"
				e2 += 1
				if (e2 == 1){
						lettersAlreadyGuessed += 1
					}
				default:
				numberOfGuessesRemaining -= 1
			}
			if (lettersAlreadyGuessed == 4){
				hideAppleImage()
				showGoogleImage()
				activeWordGoogle = false
				activeWordMicrosoft = true
				wins += 1
				reset()
				hideGoogle()
				showMicrosoft()
				alert("You win!")
			}
			if (numberOfGuessesRemaining == 0){
			alert("Game over! Try again!")
			window.location.reload()
			}
		}else if (activeWordMicrosoft == true){
			switch(event.key){
				case "m":
				document.getElementById("m3").innerHTML = "m"
				m3 += 1
				if (m3 == 1){
						lettersAlreadyGuessed += 1
					}
				break;
				case "i":
				document.getElementById("i3").innerHTML = "i"
				i3 += 1
				if (i3 == 1){
						lettersAlreadyGuessed += 1
					}
				break;
				case "c":
				document.getElementById("c3").innerHTML = "c"
				c3 += 1
				if (c3 == 1){
						lettersAlreadyGuessed += 1
					}
				break;
				case "r":
				document.getElementById("r3").innerHTML = "r"
				r3 += 1
				if (r3 == 1){
						lettersAlreadyGuessed += 1
					}
				break;
				case "o":
				document.getElementById("o3").innerHTML = "o"
				document.getElementById("o3a").innerHTML = "o"
				o3 += 1
				if (o3 == 1){
						lettersAlreadyGuessed += 1
					}
				break;
				case "s":
				document.getElementById("s3").innerHTML = "s"
				s3 += 1
				if (s3 == 1){
						lettersAlreadyGuessed += 1
					}
				break;
				case "f":
				document.getElementById("f3").innerHTML = "f"
				f3 += 1
				if (f3 == 1){
						lettersAlreadyGuessed += 1
					}
				break;
				case "t":
				document.getElementById("t3").innerHTML = "t"
				t3 += 1
				if (t3 == 1){
						lettersAlreadyGuessed += 1
					}
				default:
				numberOfGuessesRemaining -= 1
			}
			if (lettersAlreadyGuessed === 8){
				wins += 1
				hideGoogleImage()
				showIMicrosoftimage()
				alert("You win!")

			}
			if (numberOfGuessesRemaining == 0){
				alert("Game over! Try again!")
				window.location.reload()
			}

		}
		document.getElementById("numberOfGuesses").innerHTML = numberOfGuessesRemaining
		document.getElementById("lettersGuessed").innerHTML = lettersAlreadyGuessed
		document.getElementById("wins").innerHTML = wins
	}


