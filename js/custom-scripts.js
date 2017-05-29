$(window).ready(function () {

    if($(window).scrollTop() > 300) {
        $('header[role="banner"]').addClass('short');
    } else {

        if($(window).width() > 1200) {
            $('header[role="banner"]').removeClass('short');
        }

    }

    $(window).scroll(function() {

        if($(window).scrollTop() > 300) {
            $('header[role="banner"]').addClass('short');
        } else {

            if($(window).width() > 1200) {
                $('header[role="banner"]').removeClass('short');
            }

        }

    });

    if($(window).width() < 1201) {
        $('header[role="banner"]').addClass('short');
    } else {

        if($(window).scrollTop() < 301) {
            $('header[role="banner"]').removeClass('short');
        }

    }

    $(window).resize(function() {

        if($(window).width() < 1201) {
            $('header[role="banner"]').addClass('short');
        } else {

            if($(window).scrollTop() < 301) {
                $('header[role="banner"]').removeClass('short');
            }

        }

    });

    setTimeout(function () {
        $('.slider').animate({opacity: 1}, 500);
    }, 500);

    $('.slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }

        ]
    });

    $('#Layer_3').hover(
        function() {
            $(this).find('polygon').css('fill', '#E53072');
            $('.map-service .note').fadeIn(200);
        },
        function() {
            $(this).find('polygon').css('fill', '#3567B1');
            $('.map-service .note').fadeOut(200);
        }
    );

    $('.burger').click(function() {
        $(this).toggleClass('active');
        $('nav').toggleClass('active');
    });

    $('.promo-text .show-more').click(function() {
        $(this).toggleClass('active');
        $(this).parent().toggleClass('active');
    });

});