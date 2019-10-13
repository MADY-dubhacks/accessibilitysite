//Carasoul inspiration by: https://www.w3schools.com/howto/howto_js_slideshow.asp
var slideIndex = 0;

var i;

document.getElementById("previous").addEventListener("click", goBack);
document.getElementById("next").addEventListener("click", advance);

var slides = document.getElementsByClassName("mySlides");
var counter = document.getElementsByClassName("counter");

function goBack() {
    for (i = slides.length; i > 0; i--) {
       slides[i].style.display = "none";  
    }

    slideIndex--;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    

    for (i = counter.length; i > 0; i--) {
        counter[i].className = counter[i].className.replace("active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    counter[slideIndex-1].className += " active";
}

function advance() {
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }

    slideIndex++;

    if (slideIndex > slides.length) {slideIndex = 1}    

    for (i = 0; i < counter.length; i++) {
        counter[i].className = counter[i].className.replace("active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    counter[slideIndex-1].className += " active";
}


