jQuery(document).ready(function($){
/////
//Image slider
////
  function imageSlider(){
    var $slides = $('#slider .slide');
    var $currentSlide = 0;
    var timer = null;
    var slidesCount = $slides.length;
    var fadeSpeed = 800;

    function startInterval(){
      timer = setInterval(function(){
          $slides.eq($currentSlide).fadeOut(fadeSpeed, function(){
            $(this).removeClass('slide-active');
            if($currentSlide === slidesCount-1){
              $slides.first().fadeIn(fadeSpeed).addClass('slide-active');
              $currentSlide = 0;
            }else{
              $(this).next().fadeIn(fadeSpeed).addClass('slide-active');
              $currentSlide = $(this).index();
              $currentSlide++;
            }
          });
        }, 15000 );
      } //end of startInterval()
      startInterval();
    }
  imageSlider();
})
