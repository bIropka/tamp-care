$(window).ready(function () {

    setTimeout(function () {
        $('.wrapper').animate({opacity: 1}, 500);
    }, 500);

    if ($(window).scrollTop() > 300) {
        $('header[role="banner"]').addClass('short');
    } else {

        if($(window).width() > 1200) {
            $('header[role="banner"]').removeClass('short');
        }

    }

    $(window).scroll(function() {

        if ($(window).scrollTop() > 300) {
            $('header[role="banner"]').addClass('short');
        } else {

            if ($(window).width() > 1200) {
                $('header[role="banner"]').removeClass('short');
            }

        }

    });

    if ($(window).width() < 1201) {
        $('header[role="banner"]').addClass('short');
    } else {

        if ($(window).scrollTop() < 301) {
            $('header[role="banner"]').removeClass('short');
        }

    }

    $(window).resize(function() {

        if ($(window).width() < 1201) {
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
        autoplay: true,
        autoplaySpeed: 1000,
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
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
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

    $('.callback').click(function() {
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
            if (formID == 'form-cooling-consultation') scriptFile = 'mail-cooling-consultation.php';
            if (formID == 'form-appointment') scriptFile = 'mail-appointment.php';
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

    /* for cooling-page */

    $('.cooling-info .show-more').click(function() {
        $(this).toggleClass('active');
        $(this).siblings('p, ul, h3').toggleClass('active');
    });

    var track = $('.cooling-advantages .track');

    if($(window).width() > 1230) {

        if ($(window).scrollTop() > $('.cooling-advantages').offset().top + 70 && $(window).scrollTop() < $('.cooling-advantages').offset().top + 300)  {
            showAdvantages();
            track.addClass('active');//animate({bottom: '200px', right: '-800px'}, 4500);
        }

        if ($(window).scrollTop() < $('.cooling-advantages').offset().top - 700) {
            $('.cooling-advantages-item').removeClass('active');
            track.removeClass('active');//animate({bottom: '-50px', right: '110%'}, 100);
        }

        if ($(window).scrollTop() > $('.cooling-page .our-clients').offset().top) {
            $('.cooling-advantages-item').removeClass('active');
            track.removeClass('active');//animate({bottom: '-50px', right: '110%'}, 100);
        }

    }

    $(window).scroll(function() {

        if($(window).width() > 1230) {

            if ($(window).scrollTop() > $('.cooling-advantages').offset().top + 70 && $(window).scrollTop() < $('.cooling-advantages').offset().top + 300)  {
                showAdvantages();
                track.addClass('active');//animate({bottom: '200px', right: '-800px'}, 4500);
            }

            if ($(window).scrollTop() < $('.cooling-advantages').offset().top - 700) {
                $('.cooling-advantages-item').removeClass('active');
                track.removeClass('active');//animate({bottom: '-50px', right: '110%'}, 100);
            }

            if ($(window).scrollTop() > $('.cooling-page .our-clients').offset().top) {
                $('.cooling-advantages-item').removeClass('active');
                track.removeClass('active');//animate({bottom: '-50px', right: '110%'}, 100);
            }

        }

    });

    var items = $('.cooling-advantages-list').find('.cooling-advantages-item');

    function showAdvantages() {

        var counter = 0;

        (function showAdvantagesInner() {

            $(items[counter++]).addClass('active');

            if (counter >= items.length) {
                counter = 0;
                return;
            }

            setTimeout(showAdvantagesInner, 300);

        })();

    }

});