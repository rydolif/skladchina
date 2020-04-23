$(function() {

//------------------------------acardeon---------------------------
  $(".block__content").slideUp("slow");
  // $(".block").first().addClass('active');
  $(".active .block__content").slideDown("slow");

  $(".block__header").on("click", function(){
    if ($(this).parent().hasClass('active')) {
      $(this).parent().removeClass('active');
      $(".block__content").slideUp("slow");
    }
    else {
      $(".active .block__content").slideUp("slow");
      $(".active").removeClass('active');
      $(this).parent().addClass('active');
      $(".active .block__content").slideDown("slow");
    }
  });

  //----------------------------------------fixed----------------------------------
  // $(window).scroll(function(){
  //     if($(this).scrollTop()>500){
  //         $('.nav').addClass('nav--active');
  //     }
  //     else if ($(this).scrollTop()<500){
  //         $('.nav').removeClass('nav--active');
  //     }
  // });
  // if($(this).scrollTop()>500){
  //   $('.nav').addClass('nav--active');
  // }

//------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('nav__hamburger--active');
    $('.nav').toggleClass('nav--active');
  });

//-------------------------скорость якоря---------------------------------------
  $(".click").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 30}, 'slow', 'swing');
  //--------------------закриття меню при кліку на ссилку якоря--------------------
     $('.hamburger').removeClass('hamburger--active');
     $('.nav--active').removeClass('nav--active');
  });

  
});
