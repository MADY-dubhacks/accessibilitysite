document.getElementById("darkMode").addEventListener("click", darkModeTheme);
document.getElementById("lightMode").addEventListener("click", lightModeTheme);
document.getElementById("inc-font").addEventListener("click", incfont);
document.getElementById("dec-font").addEventListener("click", decfont);
document.getElementById("caption-speak").addEventListener("click", captionSpeak)
document.getElementById("speak").addEventListener("click", speak);

var text = document.getElementById("main-text");
var title = document.getElementById("article-title");

function darkModeTheme() {
	document.body.style.color = "rgb(224,224,224)";
	document.getElementById("wrapper").style.borderColor = "rgb(224,224,224)";
	document.getElementById("main-text").style.borderColor = "rgb(224,224,224)";
	document.getElementById("searching").style.backgroundColor = "rgb(224,224,224)";
	document.getElementById("float-right").style.borderColor = "rgb(224,224,224)";
	document.getElementById("darkMode").style.display = "none";
	if (window.location.pathname == '/landing.html') {
		document.getElementById("big-logo-dt").style.display = "inline-block";
		document.getElementById("big-logo").style.display = "none";
	}
	document.getElementById("lightMode").style.display = "inline";
	document.body.style.backgroundColor = "rgb(24,24,24)";
}

function lightModeTheme() {
	document.body.style.color = "black";
	document.getElementById("wrapper").style.borderColor = "black";
	document.getElementById("main-text").style.borderColor = "black";
	document.getElementById("float-right").style.borderColor = "black";
	document.getElementById("lightMode").style.display = "none";
	document.getElementById("searching").style.backgroundColor = "white";

	if (window.location.pathname == '/landing.html') {
		document.getElementById("big-logo-dt").style.display = "inline-block";
		document.getElementById("big-logo").style.display = "none";
	}
	document.getElementById("darkMode").style.display = "inline";
	document.body.style.backgroundColor = "white";
}

function incfont(){
	var font = window.getComputedStyle(text).fontSize;
	var fontSize = parseInt(font);
	fontSize = (fontSize + 2) + "px";
	text.style.fontSize = fontSize;
}

function decfont(){
	var font = window.getComputedStyle(text).fontSize;
	var fontSize = parseInt(font);
	fontSize = (fontSize - 2) + "px";
	text.style.fontSize = fontSize;
}

function speak(){
	var intro = new SpeechSynthesisUtterance("Title of Article");
	var titleMessage = new SpeechSynthesisUtterance(title.innerHTML);
	var intro2 = new SpeechSynthesisUtterance("Article Text");
	var bodyMessage = new SpeechSynthesisUtterance(text.innerHTML);

	window.speechSynthesis.speak(intro);
	window.speechSynthesis.speak(titleMessage);
	window.speechSynthesis.speak(intro2);
	window.speechSynthesis.speak(bodyMessage);
}

function captionSpeak(){
	var pics = document.getElementsByClassName("mySlides");
	var p_length = pics.length;
	var car = 0;
	for (i = 0; i < p_length; i++) {
		if (pics[i].style.display == "block") {
			car = document.getElementsByTagName("figcaption")[i].innerHTML;
		}
	}

	var intro = new SpeechSynthesisUtterance("Image Caption");
	var caption = new SpeechSynthesisUtterance(car);
	
	window.speechSynthesis.speak(intro);
	window.speechSynthesis.speak(caption);
}


$(window).load(function() {
	$('.flexslider').flexslider({
	    animation: "slide"
	});
});