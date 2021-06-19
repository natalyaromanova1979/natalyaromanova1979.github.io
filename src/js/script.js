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
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    $('.info-form').validate({
      rules: {
        name: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Пожалуйства, введите свое имя",
        email: {
          required: "Пожалуйства, введите свою почту",
          email: "Неправильно введен адрес почты"
        } 
      } 
    });

    $(window).scroll(function () {
      if ($(this).scrollTop() > 800) {
        $('.up').show();
      } else {
        $('.up').hide();
      }
    }); 

    $("a[href^='#']").click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });
    
  });
      