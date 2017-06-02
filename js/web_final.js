$(document).ready(function() {
 	var bigwidth=screen.width;
   	console.log(bigwidth);
   	var imagewidth=document.getElementById(".slick-image");
   	console.log(imagewidth);
   	$('.ui-slick-main').slick({
   

        infinite: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '50px',
        variableWidth: true,
        arrows: true,
        touchMove: false,
        responsive: [{
            breakpoint: 641,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                infinite: true,
                dots: true,
                arrows: false,
                touchMove: true,
                variableWidth: false
            }
        }]
    }).css('visibility', 'visible');

});



