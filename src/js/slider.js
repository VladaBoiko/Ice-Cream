$(document).ready(function () {
  $('.slider1').slick({
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '.slider2,.slider3',
    autoplay: true,
    autoplaySpeed: 8000,
  });
  $('.slider2').slick({
    arrows: false,
    dots: true,
    fade: true,
    asNavFor: '.slider1,.slider3',
  });
  $('.slider3').slick({
    arrows: false,
    dots: true,
    fade: true,
    asNavFor: '.slider1,.slider2',
  });
});
