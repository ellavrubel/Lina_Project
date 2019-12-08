$(document).ready(function() {
    $('.first__nav').before('<span>-----</span>');

    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        smartSpeed:2000,
        navText:[
            '<img src="img/EllipsePrev.png" alt="Prev">',
            '<img src="img/RectangleNext.png" alt="Next">'
        ],
        responsive:{
            0: {
                items: 1
            }
        }
    });

     $('.body__nav-item').after('<span>&frasl;</span>');
     $('.body__nav-menu > span').toggleClass('slash');
     $('.slash').css({'fontSize': '50px' , 'color': '#e0e0e0'});





});