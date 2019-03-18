$(document).ready(() => {

    body = $('body');

    // burger
    $('.burger').click(function() {
        $('.adaptmenu').addClass('adaptmenu_active');
        $(body).css('overflow', 'hidden');
    });

    $('.close').click(function() {
        $('.adaptmenu').removeClass('adaptmenu_active');
        $(body).css('overflow', 'visible');
        $(body).css('overflow-x', 'hidden');
    });

    $('.adaptmenu nav').click(function() {
        $('.adaptmenu').removeClass('adaptmenu_active');
        $(body).css('overflow', 'visible');
        $(body).css('overflow-x', 'hidden');
    });


    $(window).resize(function() {

        if($(window).width() > '768'){
            $(body).css('overflow', 'visible');
        }
    
    });


      // slider sect1
      var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
      });




   
      // animations
      new WOW().init();


   

    

});

                                                                        

                                                                           

                                        

