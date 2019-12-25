/* 
$(document).ready(function(){
    $('.courusel__inner').slick({
        speed: 300,
        slidesToShow: 1,        
        autoplay: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icon/chevron-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icon/chevron-right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false
                  } 
            }
        ]   
    });
  }); */

  var slider = tns({
    container: '.courusel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
  });