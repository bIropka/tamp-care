/***********************/
/* installation scripts */
/***********************/

/* countdown */

$('.countdown').downCount({
    date: '09/30/2017 12:00:00',
    offset: +2
});

/* footage */

var scaleFootage = document.getElementById('scale-footage'),
    scaleFootageMin = 800,
    scaleFootageMax = 5000,
    inputLogFootage = document.getElementById('footage-value');

$('.scale-footage-min span').text(scaleFootageMin);
$('.scale-footage-max span').text(scaleFootageMax);


noUiSlider.create(scaleFootage, {
    start: [ 2000 ],
    step: 100,
    tooltips: [ true ],
    range: {
        'min': [  scaleFootageMin ],
        'max': [ scaleFootageMax ]
    },
    format: wNumb({
        decimals: 0,
        postfix: ' sq.ft'
    })
});

scaleFootage.noUiSlider.on('update', function ( values, handle ) {
    if ( handle == 0 ) {
        inputLogFootage.value = values[handle];
    }
});

/* budget */

var scaleBudget = document.getElementById('scale-budget'),
    scaleBudgetMin = 2,
    scaleBudgetMax = 8,
    inputLogBudgetMin = document.getElementById('budget-value-min'),
    inputLogBudgetMax = document.getElementById('budget-value-max');

$('.scale-budget-min').text('$' + scaleBudgetMin + 'K');
$('.scale-budget-max').text('$' + scaleBudgetMax + 'K');


noUiSlider.create(scaleBudget, {
    start: [ 2.5, 4 ],
    step: 0.5,
    margin: 1,
    connect: true,
    range: {
        'min': [  scaleBudgetMin ],
        'max': [ scaleBudgetMax ]
    },
    format: wNumb({
        decimals: 1,
        postfix: 'K'
    })
});

scaleBudget.noUiSlider.on('update', function( values, handle ) {

    var value = '' + values[handle];

    var temp = parseInt(value.split('.')[1]);

    if (temp === 0) {
        value = '$' + value.split('.')[0] + 'K';
    } else {
        value = '$' + value + 'K';
    }

    if ( handle ) {
        inputLogBudgetMax.value = value;
    } else {
        inputLogBudgetMin.value = value;
    }
});