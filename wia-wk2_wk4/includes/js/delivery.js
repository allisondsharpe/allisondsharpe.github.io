$(function() {

    $(document).ready(function() {

        $('a.marker').click(function(){

            $('a.marker').removeClass('selected');
            $(this).addClass('selected');

            var city = '.city-detail#' + $(this).attr('city');
            var htmlCode = $(city).html();

            $('.detail-container').fadeOut(500, function(){
                $('.detail-container .city-detail').html(htmlCode);
                $('.detail-container').fadeIn(500);
            });

        });

    });

});
