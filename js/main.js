$(document).ready(() => {
    
    $('.counter').counterUp({
        delay: 25,
        time: 1000
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    let menu = $('.navbar');
    let height = $(window).height();
    $(window).scroll(function() {
        if ($(window).scrollTop() > height) {
            $('.navbar').addClass('fixed-top');
            $("body").css("margin-top", "54px");
        } else {
            $('.navbar').removeClass('fixed-top');
            $("body").css("margin-top", "0");
        }
    });

    $("a[href^='#']").click(function(e) {
        e.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 700, function() {
            window.location.hash = hash;
        });
    });



    // $('a[href^="#"]').bind('click',function (e) {
    //     e.preventDefault();
    //     var target = this.hash;
    //     $target = $(target);
    //     $('html, body').stop().animate({
    //         'scrollTop': $target.offset().top
    //     }, 700, 'swing', function () {
    //         window.location.hash = target;
    //     });
    // });

});