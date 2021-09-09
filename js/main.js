//slider settings================================================================================

$(document).ready(function () {
   $('.slider__body').slick({
      arrows: false,
      dots: true,
      adaptiveHeight: true,
      speed: 1000,
      infinite: false,
      initialSlide: 2,
      responsive: [
         {
            breakpoint: 1001,
            settings: {
               dots: false,
            }
         }
      ]
   });
   $('.slider_body').slick('setPosition');
});
//slider settings================================================================================




//burger================================================================================
$('.icon-menu').click(function (event) {
   $(this).toggleClass('active');
   $('.menu__body').toggleClass('active');
   $('body').toggleClass('lock');
});
//burger================================================================================





//scroll================================================================================
$(document).ready(function () {
   $("#menu").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 800);
   });
});
//scroll================================================================================

