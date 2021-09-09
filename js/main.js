$(document).ready(function () {
   $('.slider__body').slick({
      arrows: false,
      dots: true,
      adaptiveHeight: true,
      variableWidth: true,
      speed: 1000,
      infinite: false,
      initialSlide: 2,
   });
   $('.slider_body').slick('setPosition');

});
