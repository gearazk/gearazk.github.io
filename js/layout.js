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
    setTimeout(function () {
        $('#imagemodal').modal({})
    }, 3000);
    $('.js-scroll-trigger').on('click',function (e) {
        var fill = $(this).data('value');
        $('#name').focus();
        if (fill !== undefined && fill !== ''){
            $('#order').val(fill+'/1');
        }
    })
});