$(window).ready(function() {

    if($(window).width() > 1230) {
        if ($(window).scrollTop() > $('.points').offset().top + 70 && $(window).scrollTop() < $('.points').offset().top + 300)  {
            showPoints();
        }
    }

    $(window).scroll(function() {

        if($(window).width() > 1230) {
            if ($(window).scrollTop() > $('.points').offset().top + 70 && $(window).scrollTop() < $('.points').offset().top + 300)  {
                showPoints();
            }
        }

    });

    var pointsItems = $('.point-list').find('.point-item');

    function showPoints() {

        setTimeout(function() {
            $('.points').addClass('active');
        }, 2500);

        var counter = 0;

        (function showPointsInner() {

            $(pointsItems[counter++]).addClass('active');

            if (counter >= pointsItems.length) {
                counter = 0;
                return;
            }

            setTimeout(showPointsInner, 100);

        })();

    }

});