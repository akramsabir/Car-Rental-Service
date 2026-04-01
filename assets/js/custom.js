$(document).ready(function () {

  //respMenu
  $(".respMenu").click(function () {
    $(".primaryMenu").slideToggle("fast");
  });

  //icons in dropdowm menu
  $(".primaryMenu > ul > li > .megamenu").parent().find("a:first").append(' <i class="fa fa-angle-down"></i>');
  $(".primaryMenu > ul > li > .megamenu > ul > li > ul").parent().find("a:first").append(' <i class="fa fa-angle-right pull-right"></i>');
  $(".primaryMenu > ul > li > .megamenu > ul > li > ul > li > ul").parent().find("a:first").append(' <i class="fa fa-angle-right pull-right"></i>');

  //bannerSlider
  $("#bannerSlider").owlCarousel({
    navigation: false,
    slideSpeed: 300,
    pagination: false,
    paginationSpeed: 400,
    singleItem: true,
    autoPlay: 7000,
    navigationText: [
      "<i class='ion-ios-arrow-left'></i>",
      "<i class='ion-ios-arrow-right'></i>"
    ]
    // transitionStyle: "fade"
    //transitionStyle: "fadeUp"
    //transitionStyle: "goDown"
    //transitionStyle: "backSlide"
  });

  $("#testionial-slider").owlCarousel({
    navigation: true,
    autoPlay: false, //Set AutoPlay to 3 seconds         

    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 2],
    pagination: false,

    autoPlay: false,

    addClassActive: true,

    // transitionStyle: "fade"


    //transitionStyle: "fadeUp"

    //transitionStyle: "goDown"

    transitionStyle: "backSlide",
    navigationText: [
      "<i class='fa fa-angle-left'></i>",

      "<i class='fa fa-angle-right'></i>"
    ]



  });

  $("#testionial-slider1").owlCarousel({
    navigation: false,
    autoPlay: false, //Set AutoPlay to 3 seconds         

    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 2],
    pagination: true,

    autoPlay: false,

    addClassActive: true,

    // transitionStyle: "fade"


    //transitionStyle: "fadeUp"

    //transitionStyle: "goDown"

    transitionStyle: "backSlide",
    navigationText: [
      "<i class='fa fa-angle-left'></i>",

      "<i class='fa fa-angle-right'></i>"
    ]



  });

  $("#testionial-slider2").owlCarousel({
    navigation: false,
    autoPlay: true, //Set AutoPlay to 3 seconds         

    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 2],
    pagination: false,

    autoPlay: true,

    addClassActive: true,

    // transitionStyle: "fade"


    //transitionStyle: "fadeUp"

    //transitionStyle: "goDown"

    transitionStyle: "backSlide",
    navigationText: [
      "<i class='fa fa-angle-left'></i>",

      "<i class='fa fa-angle-right'></i>"
    ]



  });

  $("#testionial-slider3").owlCarousel({
    navigation: false,
    autoPlay: true, //Set AutoPlay to 3 seconds         

    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 2],
    pagination: true,

    autoPlay: true,

    addClassActive: true,

    // transitionStyle: "fade"


    //transitionStyle: "fadeUp"

    //transitionStyle: "goDown"

    transitionStyle: "backSlide",
    navigationText: [
      "<i class='fa fa-angle-left'></i>",

      "<i class='fa fa-angle-right'></i>"
    ]



  });

  $("#testionial-slider4").owlCarousel({
    navigation: false,
    autoPlay: true, //Set AutoPlay to 3 seconds         

    items: 6,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 2],
    pagination: false,

    autoPlay: true,

    addClassActive: true,

    // transitionStyle: "fade"


    //transitionStyle: "fadeUp"

    //transitionStyle: "goDown"

    transitionStyle: "backSlide",
    navigationText: [
      "<i class='fa fa-angle-left'></i>",

      "<i class='fa fa-angle-right'></i>"
    ]



  });

  //parallax scrolling bg
  var $window = $(window); //You forgot this line in the above example

  $('section[data-type="background"]').each(function () {
    var $bgobj = $(this); // assigning the object
    $(window).scroll(function () {
      var yPos = -($window.scrollTop() / $bgobj.data('speed'));
      // Put together our final background position
      var coords = '100% ' + yPos + 'px';
      // Move the background
      $bgobj.css({
        backgroundPosition: coords
      });
    });
  });


  //bannerSlider
  $("#bannerSlider1").owlCarousel({
    navigation: true,
    slideSpeed: 300,
    pagination: false,
    paginationSpeed: 400,
    singleItem: true,
    autoPlay: 7000,
    navigationText: [
      "<i class='ion-ios-arrow-left'></i>",
      "<i class='ion-ios-arrow-right'></i>"
    ]
    // transitionStyle: "fade"
    //transitionStyle: "fadeUp"
    //transitionStyle: "goDown"
    //transitionStyle: "backSlide"
  });
  //positioned parallax element
  function parallax() {
    var scrolled = $(window).scrollTop();
    $('.parallax-shape1 img').css('top', -(scrolled * 0.55) + 'px');
  }
  $(window).scroll(function (e) {
    parallax();
  });

  //popularProductsSlider
  $("#popularProductsSlider").owlCarousel({
    autoPlay: 7000, //Set AutoPlay to 3 seconds         
    items: 4,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 2],
    pagination: false,
    navigation: true,
    navigationText: [
      "<i class='ion-ios-arrow-left'></i>",
      "<i class='ion-ios-arrow-right'></i>"
    ]
  });

  //brandsSlider
  $("#brandsSlider").owlCarousel({
    autoPlay: 7500, //Set AutoPlay to 3 seconds         
    items: 6,
    itemsDesktop: [1199, 5],
    itemsDesktopSmall: [979, 4],
    pagination: false,
    navigation: true,
    navigationText: [
      "<i class='ion-ios-arrow-left'></i>",
      "<i class='ion-ios-arrow-right'></i>"
    ]
  });

  //target link slide on click
  $('.down-arrow-box a').click(function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 0
    }, 1000);
    return false;
  });

  //scrollUp
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});