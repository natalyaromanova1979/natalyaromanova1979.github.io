$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/home/prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/home/next.png"></button>',
        dots: false,
        responsive:  [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false,
                speed: 500,
                fade: true,
              }
              }
          ] 
    });
  });
      