var slideIndex = 0;
showSlides();

function showSlides(){
    var i;
    var slides = document.getElementsByClassName("images");

    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";

    }
    
    if(slideIndex==slides.length){
        slideIndex=0;
    }
    slides[slideIndex].style.display="block";
    slideIndex++;
    setTimeout(showSlides,3000);
}
