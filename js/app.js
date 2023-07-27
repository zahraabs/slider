
let slides = document.querySelectorAll(".img-slide");

let currentIndex = 1;
let slideIndex = 0;
displaySlide(currentIndex);
showSlides();

function setSlides(num) {
    displaySlide(currentIndex += num);
}

function displaySlide(num) {
    
    if (num > slides.length) { currentIndex = 1 }
    if (num < 1) { currentIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[currentIndex - 1].style.display = "block";
}


function showSlides() {
    let slides = document.querySelectorAll(".img-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex=1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides,2000)
}