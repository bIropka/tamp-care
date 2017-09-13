$(window).ready(function() {

    if($(window).width() > 1230) {
        if ($(window).scrollTop() > $('.steps').offset().top + 70 && $(window).scrollTop() < $('.steps').offset().top + 300)  {
            showSteps();
        }
    }

    $(window).scroll(function() {

        if($(window).width() > 1230) {
            if ($(window).scrollTop() > $('.steps').offset().top + 70 && $(window).scrollTop() < $('.steps').offset().top + 300)  {
                showSteps();
            }
        }

    });

    var stepsItems = $('.step-list').find('.step-item');

    function showSteps() {

        setTimeout(function() {
            $('.steps').addClass('active');
        }, 2000);

        var counter = 0;

        (function showStepsInner() {

            $(stepsItems[counter++]).addClass('active');

            if (counter >= stepsItems.length) {
                counter = 0;
                return;
            }

            setTimeout(showStepsInner, 300);

        })();

    }

});