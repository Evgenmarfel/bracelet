
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
                    arrows: false,
                    dots: true
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

    // modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thancs').fadeOut('slow');
    });
   

    $('.button_card').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

    
    function validForm(form) {
        $(form).validate({
            rules: {
                // simple rule, converted to {required:true}
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                // compound rule
                mail: {
                  required: true,
                  email: true
                }
              },
              messages: {
                name: {
                    required: "Введи настоящее имя ",
                    minlength: jQuery.validator.format("Имя должно быть длинее {0} символов")
                },
                phone: "Чел, так дела не пойдут",
                mail: {
                  required: "Почта должна быть активная",
                  email: "Не играй со мной, вводи настоящую почту формата: name@mail.com"
                }
              }
        });

    };
    validForm('#order form');
    validForm('#consultation-form');
    validForm('#consultation form');

    $('input [name=phone]').mask("+7(999)99-999-99");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600 ) {
            $('.arrow-up').fadeIn();
        } else {
            $('.arrow-up').fadeOut();
        }
    });

    $(function(){
        $("a[href^='#']").click(function(){
                const _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
});


  });

