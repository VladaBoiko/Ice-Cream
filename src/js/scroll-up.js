$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-top').fadeIn();
    } else {
      $('.back-top').fadeOut();
    }
  });

  $('.back-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, ease);
    return false;
  });
});
