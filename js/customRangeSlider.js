/***********************/
/* scales scripts */
/***********************/

var scaleFootage = $(".scale-footage");
var minCost = $('#footage-min-cost');
var maxCost = $('#footage-max-cost');

scaleFootage.rangeSlider({
    bounds:{min: 0, max: 5000},
    defaultValues:{min: 500 , max: 2700},
    step: 50
});

scaleFootage.bind("valuesChanging", function(e, data){
    minCost.val( data.values.min );
    maxCost.val( data.values.max );
});

minCost.val( scaleFootage.rangeSlider('min') );
maxCost.val( scaleFootage.rangeSlider('max') );

minCost.change(function() {
    scaleFootage.rangeSlider("min", $(this).val());
});

maxCost.change(function() {
    scaleFootage.rangeSlider("max", $(this).val());
});

$(window).resize(function() {
    scaleFootage.rangeSlider('resize');
});