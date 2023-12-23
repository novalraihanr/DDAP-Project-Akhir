var lebarCarousel = $('.carousel-inner').scrollWidth;
var lebarCard = $('.carousel-item').width();

var scrollPosition = 0;

$('carousel-control-next').on('click', function(){
    scrollPosition = scrollPosition + lebarCard;
    $('.carousel-inner').animate({scrollLeft: scrollPosition}, 600);
})

var multipleCardCarousel = document.querySelector("#carouselFControls");

if(window.matchMedia("(min-width: 768px)").matches){
    var carousel = new boostrap.Carousel(multipleCardCarousel, {
        interval: false,
        wrap: false,
    });
}else{
    $(multipleCardCarousel).addClass("slide")
}