
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
                    arrows: false
                  } 
            }
        ]   
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_activ)', function() {
        $(this)
          .addClass('catalog__tab_activ').siblings().removeClass('catalog__tab_activ')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_activ').eq($(this).index()).addClass('catalog__content_activ');
      });



    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_activ');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_activ');
            })
            
        });
    };
    toggleSlide('.catalog-item__linck');
    toggleSlide('.catalog-item__back');
  });

