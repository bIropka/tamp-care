$(window).ready(function () {

    setTimeout(function () {
        $('.wrapper').animate({opacity: 1}, 500);
    }, 500);

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

    $('.nav-services').click(function() {
        $('.modal-services').fadeIn(600);
    });

    $('.modal-services').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.our-services-list')).length) {
            $('.modal-services').fadeOut();
        }
    });

    $('.benefit-item').click(function() {

        if($(window).width() < 981) {
            $(this).siblings().removeClass('active');
            $(this).toggleClass('active');
        }

    });

    $('.burger').click(function() {
        $(this).toggleClass('active');
        $('nav').toggleClass('active');
    });

    $('.show-more').click(function() {
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
            if (formID == 'form-ac-control') scriptFile = 'mail-ac-control.php';
            if (formID == 'form-ac-control-2') scriptFile = 'mail-ac-control-2.php';
            if (formID == 'form-fvac-expert') scriptFile = 'mail-fvac-expert.php';
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

    $('.custom-select .current-value').click(function() {

        $(this).parent().toggleClass('active');

    });

    $('.custom-select ul li').click(function() {

        var currentValue = $(this).text();

        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(this).parents('.custom-select').find('.current-value').find('span').text(currentValue);
        $(this).parents('.custom-select').find('input').attr('value', currentValue);

        $(this).parents('.custom-select').removeClass('active');

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

    var track = $('.cooling-advantages .track');

    if($(window).width() > 1230) {

        if ($(window).scrollTop() > $('.cooling-advantages').offset().top + 70 && $(window).scrollTop() < $('.cooling-advantages').offset().top + 300)  {
            showAdvantages();
            track.addClass('active');
            setTimeout(function () {
                track.addClass('braked');
                setTimeout(function () {
                    track.removeClass('braked').addClass('stopped');
                }, 1500);
            }, 1500);
        }

    }

    $(window).scroll(function() {

        if($(window).width() > 1230) {

            if ($(window).scrollTop() > $('.cooling-advantages').offset().top + 70 && $(window).scrollTop() < $('.cooling-advantages').offset().top + 300)  {
                showAdvantages();
                track.addClass('active');
                setTimeout(function () {
                    track.addClass('braked');
                    setTimeout(function () {
                        track.removeClass('braked').addClass('stopped');
                    }, 1600);
                }, 1500);
            }

        }

    });

    var advantagesItems = $('.cooling-advantages-list').find('.cooling-advantages-item');

    function showAdvantages() {

        var counter = 0;

        (function showAdvantagesInner() {

            $(advantagesItems[counter++]).addClass('active');

            if (counter >= advantagesItems.length) {
                counter = 0;
                return;
            }

            setTimeout(showAdvantagesInner, 300);

        })();

    }

});