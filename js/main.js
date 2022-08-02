var preloader = $('#preloader');
$(function () {

    var wind = $(window);
    toggleNav();


    const navbar = document.querySelector('#main-nav');

    // initialize scrollspy
    // const scrollspy = new VanillaScrollspy(navbar);
    // scrollspy.init();

    // // hide pre loading after document loaded
    // preloader.addClass('hide');




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

$( document ).ready(function() {
    $('.mansonry-grid').masonry({
columnWidth: 400,
itemSelector: '.mansonry-grid-item',
gutter: 40,
percentPosition: true,

});
});







$(window).on("load", () => {
    //window load function
})