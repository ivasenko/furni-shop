
let slideSalesIndex = 1;
showSalesDivs(slideSalesIndex);
function plusSalesDivs(n) {
    showSalesDivs(slideSalesIndex += n);
}
function showSalesDivs(n) {
     let i;
     let x = document.getElementsByClassName("sales-slide");
    if (n > x.length) {slideSalesIndex = 1}
    if (n < 1) {slideSalesIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideSalesIndex-1].style.display = "block";
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
     let i;
     let slides = document.getElementsByClassName("slider");
     let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


