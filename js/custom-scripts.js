$(window).ready(function () {

    setTimeout(function () {
        $('.slider').animate({opacity: 1}, 500);
    }, 500);

    $('.slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                }
            },
            {
                breakpoint: 980,
                settings: {
                }
            },
            {
                breakpoint: 768,
                settings: {
                }
            }

        ]
    });

});