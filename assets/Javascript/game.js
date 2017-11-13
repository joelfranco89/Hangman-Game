var wins = 0
var words = {
	word1: ["a", "p", "p", "l", "e"],
	word2: ["g", "o", "o", "g", "l", "e"],
	word3: ["m", "i", "c", "r", "o", "s", "o", "f", "t"]
}
var wordsIndex = 0
var wordsArray = [words.word1, words.word2, words.word3]
var wordCount = 1
var numberOfGuessesRemaining = 12
function hideAppleWord(){
	document.getElementById("a1").style.display = "none"
	document.getElementById("p1").style.display = "none"
	document.getElementById("p1a").style.display = "none"
	document.getElementById("l1").style.display = "none"
	document.getElementById("e1").style.display = "none"
}
function hideGoogleWord(){
	document.getElementById("g2").style.display = "none"
	document.getElementById("o2").style.display = "none"
	document.getElementById("o2a").style.display = "none"
	document.getElementById("g2a").style.display = "none"
	document.getElementById("l2").style.display = "none"
	document.getElementById("e2").style.display = "none"
}
function hideMicrosoftWord(){
	document.getElementById("m3").style.display = "none"
	document.getElementById("i3").style.display = "none"
	document.getElementById("c3").style.display = "none"
	document.getElementById("r3").style.display = "none"
	document.getElementById("o3").style.display = "none"
	document.getElementById("s3").style.display = "none"
	document.getElementById("o3a").style.display = "none"
	document.getElementById("f3").style.display = "none"
	document.getElementById("t3").style.display = "none"
}
function showAppleWord(){
	document.getElementById("a1").style.display = "none"
	document.getElementById("p1").style.display = "none"
	document.getElementById("p1a").style.display = "none"
	document.getElementById("l1").style.display = "none"
	document.getElementById("e1").style.display = "none"
}
function showGoogleWord(){
	document.getElementById("g2").style.display = "none"
	document.getElementById("o2").style.display = "none"
	document.getElementById("o2a").style.display = "none"
	document.getElementById("g2a").style.display = "none"
	document.getElementById("l2").style.display = "none"
	document.getElementById("e2").style.display = "none"
}
function showMicrosoftWord(){
	document.getElementById("m3").style.display = "none"
	document.getElementById("i3").style.display = "none"
	document.getElementById("c3").style.display = "none"
	document.getElementById("r3").style.display = "none"
	document.getElementById("o3").style.display = "none"
	document.getElementById("s3").style.display = "none"
	document.getElementById("o3a").style.display = "none"
	document.getElementById("f3").style.display = "none"
	document.getElementById("t3").style.display = "none"
}

	if (wordCount == 1){
		hideGoogleWord()
		hideMicrosoftWord()
		document.onkeyup = function(event){
		switch (event.key){
			case "a":
			document.getElementById("a1").style.display = "block"
		}
	}
		
	


}