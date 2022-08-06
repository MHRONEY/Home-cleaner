// var preloader = $('#preloader');
// $(function () {

//     var wind = $(window);
//     toggleNav();


//     const navbar = document.querySelector('#main-nav');

// initialize scrollspy
// const scrollspy = new VanillaScrollspy(navbar);
// scrollspy.init();

// // hide pre loading after document loaded
// preloader.addClass('hide');
//     // initialize scrollspy
//     const scrollspy = new VanillaScrollspy(navbar);
//     scrollspy.init();

//     // hide pre loading after document loaded
//     preloader.addClass('hide');




//     // control navbar
//     $(window).on("scroll", () => {
//         toggleNav();
//     })


//     //features top items
//     var featureTopItem = $('.features__top-content .item');
//     $('.features__top-content .item .item-icon').click((e) => {
//         featureTopItem.removeClass('active');
//         const selectedItem = e.currentTarget.parentElement;
//         $(selectedItem).addClass('active');
//     })



//     // faq accordion
//     var faqAccordions = $('.faq__accordion');
//     var accHeading = $(".faq__accordion-question");


//     accHeading.click((e) => {
//         faqAccordions.removeClass('active');
//         const selectedItem = e.currentTarget.parentElement;
//         $(selectedItem).addClass('active');
//     })





//     function toggleNav() {
//         const navbar = $(".navbar")
//         const scrollY = wind.scrollTop();
//         // console.log(scrollY);

//         if (scrollY > 100) {
//             navbar.addClass('navbar-show');
//         } else {
//             navbar.removeClass('navbar-show');
//         }
//     }
// })


// tab control



try {
  // masonry 
  var $grid = $('.mansonry-grid').masonry({
    itemSelector: '.mansonry-grid-item',
    //columnWidth:25,
    // percentPosition: true,
    //transitionDuration: 0,
  });

  $grid.imagesLoaded().progress(function () {
    $grid.masonry();
  });



} catch (error) {

}


document.addEventListener('DOMContentLoaded', function () {
  try {
    var splide = new Splide('#image-carousel', {
      type: 'loop'
    });
    splide.mount();

    //Slider for Feature blog post
    var splideFeature = new Splide('#feature-carousel', {
      type: 'loop',
      perPage: 2,
      perMove: 1,
    });
    splide.mount();
  } catch (error) {

  }

  //Carousel for Feature blog post
  try {
    var splideFeature = new Splide('#feature-carousel', {
      type: 'loop',
      gap: '2.1rem',
      perPage: 3,
      perMove: 1,
      breakpoints: {
        840: {
          perPage: 2,
          gap: '1.6rem',
        },
        640: {
          perPage: 1,
          gap: '1.1rem',
        },
      },
    });

    splideFeature.mount();

    } catch (error) {

    }
    try {
      var splideTeam = new Splide('#team-carousel', {
        type: 'loop',
        gap: '2.1rem',
        perPage: 4,
        perMove: 1,
        breakpoints: {
          1080: {
            perPage: 3,
            gap: '1.6rem',
          },
          840: {
            perPage: 2,
            gap: '1.1rem',
          },
        },
      });
  
      splideTeam.mount();
  
  
    } catch (error) {
  
    }
  });


<<<<<<< HEAD
  //........... Home > Services.................//
  
  
=======

try {
    var splideFeature = new Splide('#service-carousel', {
      type: 'loop',
      gap: '2.1rem',
      perPage: 3,
      perMove: 1,
      breakpoints: {
        840: {
          perPage: 2,
          gap: '1.6rem',
        },
        640: {
          perPage: 1,
          gap: '1.1rem',
        },
      },
    });

    splideFeature.mount();

    } catch (error) {

    }





  try {
    
  } catch (error) {
    
  }
>>>>>>> main
