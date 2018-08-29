$('.sl').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    responsive: [
        {
            breakpoint: 497,
            settings: {
                arrows: false
            }
        }
    ]
});

$('.sl2').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    asNavFor: '.sl3'
});

$('.sl3').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    arrows: false,
    asNavFor: '.sl2',
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "10px"
});


$(document).ready(function() {
    $('a[href*=#]').on('click', function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable
        var targetObject = $(target);

        if(targetObject.length){
            $('html, body').stop().animate({
                scrollTop: targetObject.offset().top
            }, 600, function() {
                location.hash = target; //attach the hash (#jumptarget) to the pageurl
            });
        }

        return false;
    });

});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.navigation a.active').removeClass('active');
            $('.navigation a').eq(i).addClass('active');
        }
    });
}).scroll();


function modalClose() {
    if (location.hash === '#openModal' || '#openModal2') {
        location.hash = '';
    }
}

document.addEventListener('keyup', function(e) {
    if (e.keyCode === 27) {
        modalClose();
    }
});

var modalOrder = document.querySelector('#openModal');
var modalSizes = document.querySelector('#openModal2');

modalOrder.addEventListener('click', function(e) {
    modalClose();
}, false);

modalOrder.children[0].addEventListener('click', function(e) {
    e.stopPropagation();
}, false);

modalSizes.addEventListener('click', function(e) {
    modalClose();
}, false);

modalSizes.children[0].addEventListener('click', function(e) {
    e.stopPropagation();
}, false);

$(".close").on("click", function (e) {
    modalClose();
});

$(".close2").on("click", function (e) {
    modalClose();
});