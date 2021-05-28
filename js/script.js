$('.tower-slider').slick({
    slidesToShow: 3,
    slidesToScroll:1,
    arrows: false,
    responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    
});

$(".menu-slider").slick({
    slidesToShow: 1,
    slidesToScroll:1,
    dots: true,
    prevArrow: '<button class="arrow-prev"><img src="./img/prev.png" alt=""></button>',
    nextArrow: '<button class="arrow-next"><img src="./img/next.png" alt=""></button>',
    autoplay: true
})

$(".arrow-next").click(function(e){
    e.preventDefault();
    var activeItemIndex = $(".slider-visitor__items.active").index();
    
    $(".slider-visitor__items.active").fadeOut(0).removeClass('active');
    if(activeItemIndex == $(".slider-visitor__items:last").index()){
        $(".slider-visitor__items").eq(0).fadeIn(0).addClass('active')
    } else {
        $(".slider-visitor__items").eq(activeItemIndex + 1).fadeIn(0).addClass('active');
    }
});

$('.arrow-prev').click(function(e){
    e.preventDefault();
    var activeItemIndex =$(".slider-visitor__items.active").index();
    
    $(".slider-visitor__items.active").fadeOut(0).removeClass('active');
    if(activeItemIndex == $(".slider-visitor__items:first").index()){
        $(".slider-visitor__items").eq(2).fadeIn(0).addClass('active')
    } else {
        $(".slider-visitor__items").eq(activeItemIndex - 1).fadeIn(0).addClass('active');
    }
});

$('.slider-menu__list').click(function(e){
    e.preventDefault();
    $('.active').removeClass('active');
    $(this).addClass('active');
    
    var href = $(this).attr('href');
    $(href).addClass('active');
});


$('.click-reception').click(function(e){
    e.preventDefault()
    $('.reception').animate({
        top: 500
    },300 ,function(){
        $('.overlay').css('display', 'block');
    })
})
$('.exit').click(function(){
    $('.reception').animate({
        top: -500
    },300 ,function(){
        $('.overlay').css('display', 'none');
    })
})

$(".header-nav__select").click(function(){
    $(".language").animate({
        top: 500
    },300 , function(){
        $('.overlay').css('display', 'block');
    })
})

$('.exit-2').click(function(){
    $('.language').animate({
        top: -500
    },300 ,function(){
        $('.overlay').css('display', 'none');
    })
})

var $radioButtons = $('input[type="radio"]');
$radioButtons.click(function() {
    $radioButtons.each(function() {
        $(this).parent().toggleClass('checked11', this.checked);
    });
});
$('#eng').click(function(){
    $('.header-nav__select').html("EN");
})
$('#ozb').click(function(){
    $('.header-nav__select').html("O'ZB");
})
$('#uzb').click(function(){
    $('.header-nav__select').html("UZB");
})
$('#ru').click(function(){
    $('.header-nav__select').html("RU");
})

$(".header-arrow").click(function(){
    var headerOuterHeight  = $('header').outerHeight() + 20;
    $('html').animate({
        scrollTop: headerOuterHeight 
     }, 700);
})
// $('.header-menu__link').click(function(e){
//     e.preventDefault();
// })
$('.toggle').click(function(){
    $('.toggle, .header-nav__items').toggleClass('activate');
})