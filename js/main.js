$(document).ready(function() {
    $('.active').before('<span>-----</span>');

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        smartSpeed:2000,
        navText:['<img src="../img/EllipsePrev.png" alt="Prev">','<img src="../img/RectangleNext.png" alt="Next">'],
        responsive:{
            0: {
                items: 1
            }
        }
    })
});