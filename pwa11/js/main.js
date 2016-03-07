
	//Inventors of the World Wide Web
	//Author: Allison Sharpe

$(function() {

// tooltip elements

    $(".masterTooltip").hover(function () {
        // hover over
        var title = $(this).attr("title");
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
            .text(title)
            .appendTo('body')
            .fadeIn('slow');
    }, function () {
        // hover out
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
    }).mousemove(function (e) {
        var mousex = e.pageX + 20; // x coordinates
        var mousey = e.pageY + 10; // y coordinates
        $('.tooltip')
    });

// accordion elements

    $('#tabs p').hide().eq(0).show();
    $('#tabs p:not(:first)').hide();

    $('#tabs-nav li').click(function (e) {
        e.preventDefault();
        $('#tabs p').hide();

        $('#tabs-nav .current').removeClass("current");
        $(this).addClass('current');
        var clicked = $(this).find('a:first').attr('href');

        $('#tabs ' + clicked).fadeIn('fast');
    }).eq(0).addClass('current');

// modal elements

    $(".modalClick").on("click", function (event) {
        event.preventDefault();
        $("#overlay")
            .fadeIn()
            .find("#modal")
            .fadeIn();
    });

    $(".close").on("click", function (event) {
        event.preventDefault();
        $("#overlay")
            .fadeOut()
            .find("#modal")
            .fadeOut();
    });

    $(".mystatus").mouseover(function () {
        $(this).fadeTo(100, .3);
    });
    $(".mystatus").mouseout(function () {
        $(this).fadeTo(100, 1);
    });

// dialog elements

    $("#dialog").mouseover(function () {
        $(this).fadeTo(100, .2);
    });
    $("#dialog").mouseout(function () {
        $(this).fadeTo(100, 1);
    });

});

