$(function() {

    $(document).ready(function(){

        window.chartHeight = Number($('.chart-area').height());
        window.barWidth = $('.chart-area .chart-bar').width();
        window.highestYlabel = Number($('.chart-value p').first().html());
        window.chartHeightArea = window.chartHeight - Number($('p.axis-value').first().height());
        window.chartScale = chartHeightArea / window.highestYlabel;
        window.barSpacing = Number($('.chart-area').attr('barSpacing'));
        positionBars();

    });

    function positionBars(){
        $('.chart-area .chart-bar').each(function(index){

            var barPosition = (window.barWidth*index)+(index*barSpacing)+barSpacing;
            $(this).css('left',barPosition+'px');
            $(this).html('<p>'+$(this).attr('barValue')+'</p>');
            $('.chart-department').append('<p style="left:'+(barPosition-(window.barWidth/2))+'px;">'+$(this).attr('label')+'</p>');

            var barValue = Number($(this).attr('barValue'));
            if(barValue > window.maxValue){
                window.maxValue = barValue;
                window.valueMultiplier = window.maxValue / window.highestYlabel;
            }

        });
        animateChart();
    }

    function animateChart(){

        $('.chart-area .chart-bar').each(function(index){
            var valueEdited = Number($(this).attr('barValue'))*window.chartScale;
            var newDelay = 200*index;
            $(this).delay(newDelay).animate({height: valueEdited},1000, function(){
                $(this).children('p').delay(600).fadeIn(300);
            });
        });

    }

});
