new WOW().init();
//---------------
$('#homeBan').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    loop:true,
    margin:1,
    nav:false,
    mouseDrag:false,
    dots:true,
    autoplay:true,
    responsive:{
        0:{
            items:1                      
        },
        1000:{
            items:1
        }
    }
});

//------------------
$(window).scroll(function() {
    var windowTop = $(window).scrollTop();
    if(windowTop > 50) {
        $('.stickyBox').addClass('shadoBox');
    } else{
        $('.stickyBox').removeClass('shadoBox');
    }
});
//--------------
$('#ourProdNeedlePlan').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    loop:true,
    margin:1,
    nav:true,
    navText: ['', ''],
    mouseDrag:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1                      
        },
        1000:{
            items:1
        }
    }
});
//------------
$('#ourProdLightIndi').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    loop:true,
    margin:1,
    nav:true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    mouseDrag:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1                      
        },
        1000:{
            items:1
        }
    }
});
//------------------
$('#ourProdTestimon').owlCarousel({
    loop:true,
    margin:1,
    nav:true,
    navText: ['', ''],
    mouseDrag:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1                      
        },
        1000:{
            items:1
        }
    }
});
//-----------
$('#prodCryotherapy').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navText: ['', ''],
    mouseDrag:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1                      
        },
        480:{
            items:2
        }
    }
});
//-------------


//------------------
$('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});



