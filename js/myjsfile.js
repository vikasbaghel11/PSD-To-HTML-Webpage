$(document).ready(function(){

    $('#featured-carousel .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay: false,
        autoplayTimeout: 2000,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true
            }
        }
    })

    // Work Carousel

    $('#work-carousel .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        autoplayTimeout: 2000,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

});


// Mobile Navigation

$(document).ready(function(){
    $("#hamburger-btn").click(function(){
        $("#menuUl").toggleClass("show");
    });
});


// Back To Top

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });

    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});