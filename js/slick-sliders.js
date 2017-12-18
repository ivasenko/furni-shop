$(function(){
    $('.main-menu__list').slicknav({
        prependTo: ".header__main-menu-container"
    });
});

$(document).ready(function ($) {

    var sliderCommon = $(".slider-common");

    sliderCommon.each(function() {
        if ($(this).is(".wrapper-featured-products")) {
            $(this).slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 2,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
                responsive: [
                    {
                        breakpoint: 1169,
                        settings: {
                            arrows: false,
                            autoplay: true,
                            autoplaySpeed: 6000,
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true
                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            arrows: false,
                            autoplay: true,
                            autoplaySpeed: 2000,
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: true
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            autoplay: true,
                            autoplaySpeed: 2000,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 320,
                        settings: {
                            arrows: false,
                            autoplay: true,
                            autoplaySpeed: 2000,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }
        else if ($(this).is(".wrapper-best-sellers")){
            $(this).slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 2,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
                responsive: [
                    {
                        breakpoint: 1169,
                        settings: {
                            arrows: false,
                            autoplay: true,
                            autoplaySpeed: 5000,
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true
                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            arrows: false,
                            autoplay: true,
                            autoplaySpeed: 2000,
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: true
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            autoplay: true,
                            autoplaySpeed: 2000,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 320,
                        settings: {
                            arrows: false,
                            autoplay: true,
                            autoplaySpeed: 2000,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }
        else {
            $(this).slick();
        }
    })
});