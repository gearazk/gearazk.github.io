var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});
$('.fake').on('click',function (e) {
    cls = $(this).data('class');
    $('#real-'+cls).trigger('click');
});

$(document).ready(function (e) {
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.10&appId=595310030630256';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    $('#chat-btn').on('click',function (e) {
        if($('#chat').is(":visible")){
            $('#chat').hide('slow');
        }else {
            $('#chat').show('slow');
        }
    });
    // $('#btn-prodimg').on('click',function (e) {
    //     if($('#product-imgs').is(":visible"))
    //         return;
    //     $('#product-imgs').show('slow');
    // });
    $('#deal').on('click',function () {$('#deal_popup').modal()});
    $('.btn-buy').on('click',function () {$('#buy_popup').modal()});
    $('#btn-buy').on('click',function () {
        $('#deal_popup').modal('hide');
        setTimeout(function () {
            $('#buy_popup').modal();
        }, 400);
    });
    $('#btn-signup').on('click',function () {
        $('#deal_popup').modal('hide');
        setTimeout(function () {
            $('#signup_popup').modal();
        }, 400);
    });

    // setTimeout(function () {
    //   $('#imagemodal').modal({})
    //   new Swiper('.swiper-container-popup', {
    //     slidesPerView: 1,
    //     spaceBetween: 40,
    //     loop: true,
    //     centeredSlides: true,
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
    //   });
    // }, 3000);
    $('.js-scroll-trigger').on('click',function (e) {
        var fill = $(this).data('value');
        $('#name').focus();
        if (fill !== undefined && fill !== ''){
            $('#order').val(fill+'/1');
        }
    })
});