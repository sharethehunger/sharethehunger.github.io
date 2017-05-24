$(document).ready(function () {

    var scrollArray = [];
    var count = 0;
    var up = 0;
    var down = 0;
    var direction;


    $('#slogan').addClass('glitch-always');

    setTimeout(function () {
        $('#slogan').removeClass('glitch-always');
    }, 5000);

    setTimeout(function () {
        $('#title').addClass('glitch-always');
    }, 500);

    setTimeout(function () {
        $('#title').removeClass('glitch-always');
    }, 3000);

    $('a .menu-button').click(function () {
        $('#small-menu').slideToggle();
        $('#slogan').toggle();
    });


    $('.small-nav-link').click(function () {
        $('#small-menu').slideToggle();
        $('#slogan').toggle();
    });

    window.onresize = function hideBar() {
        if (window.innerWidth >= 730) {
            $('#small-menu').hide();
        }
        if (window.innerWidth <= 430) {
            $('#title').addClass('glitch-always');
        }
        if (window.innerWidth > 430) {
            $('#title').removeClass('glitch-always');
        }

        if (window.innerWidth > 822) {
            $('.remove-skew').addClass('skew');
            $('.remove-skew-other').addClass('skew-other');
        }

        if (window.innerWidth <= 822) {
            $('.remove-skew').removeClass('skew');
            $('.remove-skew-other').removeClass('skew-other');
        }
    }

    function checkSize() {
        if (window.innerWidth >= 730) {
            $('#small-menu').hide();
        }
        if (window.innerWidth <= 430) {
            $('#title').addClass('glitch-always');
        }
        if (window.innerWidth > 430) {
            $('#title').removeClass('glitch-always');
        }

        if (window.innerWidth > 822) {
            $('.remove-skew').addClass('skew');
            $('.remove-skew-other').addClass('skew-other');
        }

        if (window.innerWidth <= 822) {
            $('.remove-skew').removeClass('skew');
            $('.remove-skew-other').removeClass('skew-other');
        }
    }

    checkSize();

    $(function () {

        var a = function () {
            var win = $(window).scrollTop();
            var homeSec = $("#background");
            var aboutSec = $("#about-section");
            var prodSec = $("#product-section");
            var contSec = $("#contact-section");

            console.log(win);
            if (win < 50) {
                $("#title").fadeIn('slow');
                $(".span-link").fadeIn('slow');
            }

            if (win >= 0 && win < aboutSec.offset().top - 200) {

                console.log("Home");
            } else if (win >= aboutSec.offset().top - 200 && win < prodSec.offset().top - 200) {
                console.log("about");
                $("#title").fadeOut();
                $(".span-link").fadeOut();
            } else if (win >= prodSec.offset().top - 200 && win < contSec.offset().top - 200) {
                console.log("prod");
            } else {
                console.log("cont");
            }

        };
        $(window).scroll(a);
        a()
    });

});
