
    new WOW().init();

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
      

    var marker = new google.maps.Marker({
      position: {lat: 55.74, lng: 37.62},
      map: map,
      title: 'Legalizuem.ru',
      icon: {
        url: "../icons/footer/map_logo.png",
        scaledSize: new google.maps.Size(64, 64)
      }
    });


     $(window).scroll(function () {
      if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    });
    
    $("a[href^='#']").click(function(){
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    }); 
 

      
    
      








