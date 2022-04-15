$(document).ready(function () {

  $('#main-slider').sliderPro({
    width: '100%',
    height: '485px',
    arrows: true,
    buttons: false,
    autoplay: false,
    fadeArrows: false,
    breakpoints: {
      767: {
        height: '300px'
      },
      511: {
        height: '220px'
      }
    }
  });

  $("[data-interact='toggle-menu']").on('click', function (e) {
    e.preventDefault,
      $($(this).attr("data-href")).toggleClass("menu--mobile--visible")
    $(this).toggleClass("menu-btn--header--menu-open")
    $('body').toggleClass("menu-open")
    $('screen-overlay').toggleClass("screen-overlay--active");
  });

  $("[data-interact='close-menu']").on('click', function (e) {
    e.preventDefault,
      $($(this).attr("data-href")).removeClass("menu--mobile--visible")
    $("[data-interact='toggle-menu']").removeClass("menu-btn--header--menu-open")
    $('body').removeClass("menu-open")
    $('screen-overlay').removeClass("screen-overlay--active");
  });
});
