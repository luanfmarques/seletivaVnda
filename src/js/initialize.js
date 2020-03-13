$(document).ready(function(){
    $('.banner-Pics').slick({
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 1500,
    responsive:[{
        breakpoint: 993,
        settings:{
            arrows:false,
            adaptiveHeight: true
        }
    }]
    });
});