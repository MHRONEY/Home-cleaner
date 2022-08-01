var preloader = $('#preloader');
$(function () {

    var wind = $(window);
    toggleNav();


    const navbar = document.querySelector('#main-nav');

    // initialize scrollspy
    const scrollspy = new VanillaScrollspy(navbar);
    scrollspy.init();

    // hide pre loading after document loaded
    preloader.addClass('hide');




    // control navbar
    $(window).on("scroll", () => {
        toggleNav();
    })


    //features top items
    var featureTopItem = $('.features__top-content .item');
    $('.features__top-content .item .item-icon').click((e) => {
        featureTopItem.removeClass('active');
        const selectedItem = e.currentTarget.parentElement;
        $(selectedItem).addClass('active');
    })


    // home hero slider
    $('.home-slider').owlCarousel({
        center: true,
        items: 1,
        loop: true,
        autoplay: true,
        dots: true
    });



    // owl carousel
    $('.ss__slider-container').owlCarousel({
        center: true,
        items: 2,
        loop: true,
        autoplay: true,
        dots: true,
        autoplayTimeout: 2000,
        margin: 10,
        responsive: {
            475: {
                items: 3
            },
            767: {
                items: 4
            }
        }
    });



    //feedback slider
    $('.feedback__slider').owlCarousel({
        center: true,
        items: 1,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000
    });


    // faq accordion
    var faqAccordions = $('.faq__accordion');
    var accHeading = $(".faq__accordion-question");
    

    accHeading.click((e) => {
        faqAccordions.removeClass('active');
        const selectedItem = e.currentTarget.parentElement;
        $(selectedItem).addClass('active');
    })


    


    function toggleNav() {
        const navbar = $(".navbar")
        const scrollY = wind.scrollTop();
        // console.log(scrollY);

        if (scrollY > 100) {
            navbar.addClass('navbar-show');
        } else {
            navbar.removeClass('navbar-show');
        }
    }
})





$(window).on("load", () => {
    //window load function
})