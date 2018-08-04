$(document).ready(() => {

    $('.js-wp-h2_and_p').waypoint(function(direction) {
        $('.js-wp-h2_and_p').addClass('animated fadeInDown');
    }, {
        offset: '60%'
    });


    $('.js-wp-fa-left').waypoint(function(direction) {
        $('.js-wp-fa-left').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
    });

    $('.js-wp-fa-right').waypoint(function(direction) {
        $('.js-wp-fa-right').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });

    $('.js-wp-fa-middle').waypoint(function(direction) {
        $('.js-wp-fa-middle').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js-wp-fa-rotate').waypoint(function(direction) {
        $('.js-wp-fa-rotate').mouseover(
            function() {
                $(this).addClass('animated rotateIn infinite');
            }
        );
        $('.js-wp-fa-rotate').mouseout(
            function() {
                $(this).removeClass('infinite');
            }
        );
    }, {
        offset: '70%'
    });




    $('.js-wp-panel1').waypoint(function(direction) {
        $('.js-wp-panel1').addClass('animated bounceInLeft');
    }, {
        offset: '50%'
    });

    $('.js-wp-panel2').waypoint(function(direction) {
        $('.js-wp-panel2').addClass('animated bounceInRight');
    }, {
        offset: '50%'
    });
        
    $('.js-wp-panel3').waypoint(function(direction) {
        $('.js-wp-panel3').addClass('animated bounceInLeft');
    }, {
        offset: '50%'
    });
    $('.js-wp-panel4').waypoint(function(direction) {
        $('.js-wp-panel4').addClass('animated bounceInRight');
    }, {
        offset: '50%'
    });


    $('.js-wp-badge-1').waypoint(function(direction) {
        $('.js-wp-badge-1').addClass('animated bounceInUp');
    }, {
        offset: '50%'
    });

    $('.js-wp-badge-2').waypoint(function(direction) {
        $('.js-wp-badge-2').addClass('animated bounceInUp');
    }, {
        offset: '50%'
    });

    $('.js-wp-badge-3').waypoint(function(direction) {
        $('.js-wp-badge-3').addClass('animated bounceInUp');
    }, {
        offset: '50%'
    });

    $('.js-wp-badge-4').waypoint(function(direction) {
        $('.js-wp-badge-4').addClass('animated bounceInUp');
    }, {
        offset: '50%'
    });


    $('.js-wp-paralax').waypoint(function(direction) {
        $('.js-wp-paralax').addClass('animated zoomIn');
    }, {
        offset: '100%'
    });




    $('.js-wp-cardleft').waypoint(function(direction) {
        $('.js-wp-cardleft').addClass('animated bounceInLeft');
    }, {
        offset: '100%'
    });
    
    $('.js-wp-cardmiddle').waypoint(function(direction) {
        $('.js-wp-cardmiddle').addClass('animated bounceInUp');
    }, {
        offset: '100%'
    });

    $('.js-wp-cardright').waypoint(function(direction) {
        $('.js-wp-cardright').addClass('animated bounceInRight');
    }, {
        offset: '100%'
    });



    $('.js-wp-shirtleft').waypoint(function(direction) {
        $('.js-wp-shirtleft').addClass('animated bounceInLeft');
    }, {
        offset: '100%'
    });
    
    $('.js-wp-shirtmiddle').waypoint(function(direction) {
        $('.js-wp-shirtmiddle').addClass('animated bounceInUp');
    }, {
        offset: '100%'
    });

    $('.js-wp-shirtright').waypoint(function(direction) {
        $('.js-wp-shirtright').addClass('animated bounceInRight');
    }, {
        offset: '100%'
    });

    
    $('.js-wp-testimonial-left').waypoint(function(direction) {
        $('.js-wp-testimonial-left').addClass('animated bounceInLeft');
    }, {
        offset: '100%'
    });
    $('.js-wp-testimonial-middle').waypoint(function(direction) {
        $('.js-wp-testimonial-middle').addClass('animated bounceInUp');
    }, {
        offset: '100%'
    });
    $('.js-wp-testimonial-right').waypoint(function(direction) {
        $('.js-wp-testimonial-right').addClass('animated bounceInRight');
    }, {
        offset: '100%'
    });


    $('.js-wp-contact').waypoint(function(direction) {
        $('.js-wp-contact').addClass('animated bounceInUp');
    }, {
        offset: '100%'
    });

    $('.js-wp-fa-social').waypoint(function(direction) {
        $('.js-wp-fa-social').addClass('animated shake');
    }, {
        offset: '100%'
    });




});