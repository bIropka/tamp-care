$(window).ready(function () {

    setTimeout(function () {
        $('.wrapper').animate({opacity: 1}, 500);
    }, 500);

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

    $('a[href^="#"]').click(function(){

        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 50}, 800);

        return false;
    });

    $('.to-schedule').click(function() {
        $('.window-consultation').fadeIn();
    });

    $('.window').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.window-inner')).length) {
            $('.window').fadeOut();
        }
        if ($target.hasClass('close-window')){
            $('.window').fadeOut();
        }
    });

    $('form').validatr({
        showall: true,
        valid: function() {

            var formID = $(this).attr('id');

            var formNm = $('#' + formID);
            var scriptFile;
            if (formID == 'form-consultation') scriptFile = 'mail-consultation.php';
            if (formID == 'form-request-service') scriptFile = 'mail-request-service.php';
            $.ajax({
                type: "POST",
                url: scriptFile,
                data: formNm.serialize(),
                success: function (data) {
                    $('.window').fadeOut();
                    $('.window-successful').fadeIn();
                },
                error: function (data) {
                    $('.window').fadeOut();
                    $('.window-error').fadeIn();
                }
            });
            return false;
        }
    });

});