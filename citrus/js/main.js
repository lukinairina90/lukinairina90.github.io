$(document).ready(function (e) {
    /*Change color checker activity
    * =====================*/
    $('.color-checker').on('click', function(){
        if($(this).hasClass("active-color")){
            return
        }

        var allColors = $(this).parent().children();
        allColors.removeClass("active-color");
        $(this).addClass("active-color");
    });

    $('.memory-checker').on('click', function(){
        if($(this).hasClass("active-memory")){
            return
        }

        var allColors = $(this).parent().children();
        allColors.removeClass("active-memory");
        $(this).addClass("active-memory");
    });
});

