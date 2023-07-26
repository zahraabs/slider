
let slides = document.querySelectorAll(".img-slide");
// let slideInterval = setInterval(setSlides,2000);
let currentIndex = 1;
displaySlide(currentIndex);

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
