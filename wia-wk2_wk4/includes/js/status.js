//JQuery - Animate

$(function() {

    $("#right").click(function(){

        $(".theDiv").animate({width:"500px"}, 1000);

    });

    $("#reset").click(function(){

        $(".theDiv").animate({height:"180px", width:"250px", left:"0", fontSize:"16pt"}, 1000, "swing");

    });

});

//JQuery - FadeTo

$(function() {

    $("#fadeMe").click(function(){

        $(".theDiv").fadeTo(2000, .3);

    })

});

//JQuery - Show/Hide

$(function() {

    $("#hide").click(function(){
        $(".theDiv").hide(2000);


    });

    $("#show").click(function(){

        $(".theDiv").show(2000, function(){

            $(".theDiv").css("background-color", "black");

        });

    });

});
