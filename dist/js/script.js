
    new WOW().init();

/*     $(document).ready(function(){
        $('.carousel__inner').slick({
            dots: true,
            infinite: true, 
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true 
          });
      });
          */ 

 /*      var slider = tns({
        container: '.carousel__inner',
        items: 1, 
        slideBy: 'page',
        autoplay: false,
        controlsText: [
        
        ]
      
      }); */
      const slider = tns({
        container: '.carousel__inner',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        controls: false,
        nav: false
      });
      

      document.querySelector('.prev').addEventListener('click', function () {
        slider.goTo('prev');
      }); 
      
      document.querySelector('.next').addEventListener('click', function () {
        slider.goTo('next');
      }); 
      
      
      
      
      








