$(window).ready(function () {

    setTimeout(function () {
        $('.wrapper').animate({opacity: 1}, 500);
    }, 500);

    $(document).click(function(event) {

        if (!$(event.target).closest(".custom-select").length) {
            $('.custom-select').removeClass('active');
        }

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

    $('.nav-services').click(function() {

        if($(window).width() > 1200) {
            $('.modal-services').fadeIn(600);
        } else {
            $('.nav-services-list').slideToggle();
        }

    });

    if($(window).width() < 1201) {
        $('.modal-services').fadeOut();
        $('.modal-services .our-services-list').toggleClass('our-services-list nav-services-list').insertAfter('.nav-services');
    } else {
        $('.nav-services-list').toggleClass('our-services-list nav-services-list').prependTo('.modal-services');
    }

    $(window).resize(function() {

        if($(window).width() < 1201) {
            $('.modal-services').fadeOut();
            $('.modal-services .our-services-list').toggleClass('our-services-list nav-services-list').insertAfter('.nav-services');
        } else {
            $('.nav-services-list').toggleClass('our-services-list nav-services-list').prependTo('.modal-services');
        }

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

    $('.slider-coupons .call-form').click(function() {

        $(this).siblings('.coupon-form-wrap').fadeIn().css('display', 'flex');

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

    $('.coupon-form-wrap').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('form')).length) {
            $('.coupon-form-wrap').fadeOut();
        }
        if ($target.hasClass('close-window')){
            $('.coupon-form-wrap').fadeOut();
        }
    });

    $('form').validatr({
        showall: true,
        valid: function() {

            var formID = $(this).attr('id');

            var formNm = $('#' + formID);
            var scriptFile;
            if (formID === 'form-consultation') scriptFile = 'php/mail-consultation.php';
            if (formID === 'form-cooling-consultation') scriptFile = 'php/mail-cooling-consultation.php';
            if (formID === 'form-appointment') scriptFile = 'php/mail-appointment.php';
            if (formID === 'form-request-service') scriptFile = 'php/mail-request-service.php';
            if (formID === 'form-ac-control') scriptFile = 'php/mail-ac-control.php';
            if (formID === 'form-ac-control-2') scriptFile = 'php/mail-ac-control-2.php';
            if (formID === 'form-fvac-expert') scriptFile = 'php/mail-fvac-expert.php';
            if (formID === 'coupon-form-1') scriptFile = 'php/mail-coupon-1.php';
            if (formID === 'coupon-form-2') scriptFile = 'php/mail-coupon-2.php';
            if (formID === 'coupon-form-3') scriptFile = 'php/mail-coupon-3.php';
            if (formID === 'form-cost') scriptFile = 'php/mail-cost.php';
            if (formID === 'form-installation-cost') scriptFile = 'php/mail-calculator.php';
            if (formID === 'form-gifts') scriptFile = 'php/mail-gifts.php';
            if (formID === 'form-thanks') scriptFile = 'php/mail-thanks.php';
            $.ajax({
                type: "POST",
                url: scriptFile,
                data: formNm.serialize(),
                success: function (data) {
                    if (formID === 'form-thanks') {
                        $(location).attr('href', 'http://tempcare.us');
                    } else {
                        $(location).attr('href', 'http://tempcare.us/thanks.html');
                    }
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

        $(this).parents('fieldset').siblings().find('.custom-select').removeClass('active');

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

    $('.slider-clients').slick({
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

    $('.slider-clients-furnace').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 5
                }
            },
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

    $('.projects-installation .slider').slick({
        responsive: [
            {
                breakpoint: 641,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.projects-repair .slider').slick({
        responsive: [
            {
                breakpoint: 641,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    if ($(window).width() < 768) {
        $('.slider-coupons').slick('unslick');
    } else {
        $('.slider-coupons').slick({
            dots: true,
            initialSlide: 2
        });
    }

    $(window).resize(function() {
        if ($(window).width() < 768) {
            $('.slider-coupons').slick('unslick');
        }
    });

    $('.slider-reviews').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 7
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

    $('.form-installation-cost .call-form').click(function() {

        $('.window-cost-inner').fadeIn();

    });

    $('.form-gifts .call-form').click(function() {

        $('.window-gifts-inner').fadeIn();

    });



});